using RetailScraping.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RetailScraping.Data;
using System.Net.Http;
using HtmlAgilityPack;
using System.Globalization;
using System.Net;
using RetailScraping.Utils;

namespace RetailScraping.Services
{
    public class MacysScraper : IRetailScraper
    {
        private static Uri _baseUrl = new Uri("http://www1.macys.com/");
        private static CookieContainer _cookies = new CookieContainer();
        private static string _searchUrlWithFilters = "http://www1.macys.com/shop/search/{1},Pageindex/{2},1?keyword={0}";
        private static string _searchUrl = "http://www1.macys.com/shop/search/Pageindex/1?keyword={0}";

        private static bool _categoriesScrapped = false;
        private static Dictionary<string, string> _categoryDict = new Dictionary<string, string>();
        private static Dictionary<string, Dictionary<string, string>> _subCategoryDict = new Dictionary<string, Dictionary<string, string>>();

        private List<string> _brands;
        public int ProductsCount { get; set; }

        private bool _withFilters;
        private string _queryString;

        private HttpClient SetupHttpClientWithHeaders(HttpClientHandler httpClientHandler)
        {
            var httpClient = new HttpClient(httpClientHandler);

            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Accept-Encoding", "gzip, deflate, sdch");
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Accept-Language", "ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4,uk;q=0.2");
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36");
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Host", "www1.macys.com");
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Upgrade-Insecure-Requests", "1");

            return httpClient;
        }

        public async Task<PageResult> Scrape(Filter filter)
        {
            if (!_categoriesScrapped)
            {
                await GetCategories();
            }

            var currentPageNumber = filter.PageNumber;
            var currentProductIndex = 0;
            var productList = new List<Product>();
            var httpClient = new HttpClient();

            filter = PrepareFilter(filter);

            try
            {
                var _queryString = BuildQueryString(filter);
                
                ProductsCount = await ParseProductsCount(_queryString);
                if (ProductsCount == 0)
                {
                    return new PageResult
                    {
                        Products = productList,
                        Count = 0,
                        CurrentPageNumber = 0,
                        CurrentProductIndex = 0
                    };
                }

                while (productList.Count != filter.ProductsOnPage || productList.Count != ProductsCount)
                { 
                    var pageData = string.Empty;

                    if (filter.PageNumber != 1)
                    {
                        _queryString = SetPageNumber(_queryString, filter.PageNumber);
                    }

                    using (var httpClientHandler = new HttpClientHandler()
                    {
                        CookieContainer = _cookies,
                        UseCookies = true
                    })
                    {
                        httpClient = SetupHttpClientWithHeaders(httpClientHandler);
                        pageData = await httpClient.GetStringAsync(_queryString);

                        pageData = Utils.Utils.Unescape(pageData);
                        var page = new HtmlDocument();
                        page.LoadHtml(pageData);

                        _brands = ParsedBrands(page);

                        var pageProducts = ParseSearchResultPage(page, filter);
                        if (productList.Count + pageProducts.Count > filter.ProductsOnPage)
                        {
                            var numberToSelect = filter.ProductsOnPage - productList.Count;
                            productList.AddRange(pageProducts.Take(numberToSelect));
                            currentProductIndex = numberToSelect + 1;

                        }
                        else
                        {
                            productList.AddRange(pageProducts);
                        }                        
                    }

                    filter.PageNumber++;

                }
            }
            catch (Exception ex)
            {
                var i = 0;
            }
            finally
            {
                httpClient.Dispose();
            }

            var pageResult = new PageResult
            {
                Products = productList,
                Count = 0,
                CurrentPageNumber = 0,
                CurrentProductIndex = 0
            };

            return pageResult;
        }

        private List<Product> ParseSearchResultPage(HtmlDocument page, Filter filter)
        {
            var productList = new List<Product>();

            try
            {
                HtmlNodeCollection nodeCollection = page.DocumentNode.SelectNodes("//ul[@id='thumbnails']//li");
                var imgIndex = 0;
                foreach (HtmlNode node in nodeCollection)
                {
                    var product = new Product();
                    var productId = node.GetAttributeValue("id", string.Empty);

                    var pricesNode = node.SelectSingleNode(".//div[@class='prices']");
                    var pricesSpanNodes = pricesNode.SelectNodes("span");

                    if (pricesSpanNodes == null)
                    {
                        continue;
                    }

                    foreach (var priceNode in pricesSpanNodes)
                    {
                        var spanText = HtmlEntity.DeEntitize(priceNode.InnerText).Replace("CLP", "").Trim().Replace("$", "").Trim();
                        if (spanText.Contains("-"))
                        {
                            spanText = spanText.Substring(0, spanText.IndexOf("-")).Trim();
                        }
                        double price = 0;
                        if (spanText.Contains("Orig") || spanText.Contains("Reg"))
                        {
                            product.OriginalPrice = double.Parse(spanText.Split(' ')[1], CultureInfo.InvariantCulture);
                            product.SalePrice = product.OriginalPrice;
                        }
                        else if (spanText.Contains("Sale") || spanText.Contains("Now"))
                        {
                            product.SalePrice = double.Parse(spanText.Split(' ')[1], CultureInfo.InvariantCulture);
                        }
                        else if (double.TryParse(spanText, NumberStyles.Number, CultureInfo.InvariantCulture, out price))
                        {
                            product.SalePrice = price;
                            product.OriginalPrice = product.SalePrice;
                        }
                    }

                    var priceChange = product.OriginalPrice - product.SalePrice;
                    var priceChangePercentage = priceChange * 100 / product.OriginalPrice;

                    if (filter.PriceChangeLow != null)
                    {
                        if (priceChangePercentage < double.Parse(filter.PriceChangeLow, CultureInfo.InvariantCulture))
                        {
                            imgIndex++;
                            continue;                            
                        }
                    }
                    if (filter.PriceChangeHigh != null)
                    {
                        if (priceChangePercentage > double.Parse(filter.PriceChangeHigh, CultureInfo.InvariantCulture))
                        {
                            imgIndex++;
                            continue;
                        }
                    }

                    product.Discount = Math.Truncate(priceChangePercentage * 100) / 100;

                    if (!string.IsNullOrEmpty(filter.DiscountLow))
                    {
                        if (product.Discount < double.Parse(filter.DiscountLow, CultureInfo.InvariantCulture))
                        {
                            imgIndex++;
                            continue;
                        }
                    }
                    if (!string.IsNullOrEmpty(filter.DiscountHigh))
                    {
                        if (product.Discount > double.Parse(filter.DiscountHigh, CultureInfo.InvariantCulture))
                        {
                            imgIndex++;
                            continue;
                        }
                    }

                    var descriptionNode = node.SelectSingleNode(".//div[@class='shortDescription']");
                    var productLinkNode = descriptionNode.SelectSingleNode("a");

                    product.Url = "http://www1.macys.com" + productLinkNode.GetAttributeValue("href", string.Empty);
                    product.Title = HtmlEntity.DeEntitize(productLinkNode.InnerText).Trim();

                    var reviewsNode = node.SelectSingleNode(".//div[@class='pdpreviews']");
                    if (reviewsNode != null)
                    {
                        var ratingNode = reviewsNode.SelectSingleNode(".//span[@class='rating']");
                        var ratingSpanNode = ratingNode.SelectSingleNode("span");
                        product.Rating = ratingSpanNode.GetAttributeValue("style", string.Empty).Split(':')[1];

                        var reviewsNumberNode = reviewsNode.SelectSingleNode("span[2]");
                        var reviewsNumber = HtmlEntity.DeEntitize(reviewsNumberNode.InnerText);

                        product.Reviews += reviewsNumber;
                    }

                    var specialOffersNode = node.SelectSingleNode(".//div[@class='priceEventsDiv']");
                    if (specialOffersNode != null)
                    {
                        product.SpecialOffers = HtmlEntity.DeEntitize(specialOffersNode.SelectSingleNode("span").InnerText);
                    }

                    var badgesNode = node.SelectSingleNode(".//div[@class='badge']");
                    if (badgesNode != null)
                    {
                        var badgesHeaderNode = badgesNode.SelectSingleNode(".//span[@class='badgeHeader']");
                        product.Badges = HtmlEntity.DeEntitize(badgesHeaderNode.InnerText);
                    }

                    if (string.IsNullOrEmpty(filter.Gender))
                    {
                        product.Gender = DetermineGenderFromString(product.Title);
                    }
                    else
                    {
                        product.Gender = filter.Gender;
                    }

                    // Category parsing

                    var catDivId = $"{productId}_categoryId"; // id="2932703_categoryId"
                    var catDivNode = node.SelectSingleNode($".//div[@id='{catDivId}']");

                    var categoryId = HtmlEntity.DeEntitize(catDivNode.InnerText);
                    var categoriesNames = GetSubCategoryName(categoryId);

                    product.Category = categoriesNames.CategoryName;
                    product.SubCategory = categoriesNames.SubCategoryName;

                    if (string.IsNullOrEmpty(product.Gender))
                    {
                        product.Gender = DetermineGenderFromString(product.Category + product.SubCategory);
                    }                    

                    product.Brand = GetBrand(product.Title);

                    var typeId = $"{productId}_typeName";
                    var typeNode = node.SelectSingleNode($".//div[@id='{typeId}']");

                    product.Type = HtmlEntity.DeEntitize(typeNode.InnerText);

                    var imgId = $"image_{productId}_{imgIndex}_cat"; // image_1240149_0_cat
                    var imgNode = node.SelectSingleNode($".//img[@id='{imgId}']");

                    if (imgNode != null)
                    {
                        product.ImageUrl = imgNode.GetAttributeValue("data-src", string.Empty);
                    }                    

                    product.OnlineStoreName = "Macy's";

                    productList.Add(product);
                    imgIndex++;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.StackTrace);
            }

            return productList;
        }

        private string SetPageNumber(string url, int pageNumber)
        {
            var lastIndexOfDash = 0;
            if (!_withFilters)
            {
                lastIndexOfDash = url.LastIndexOf('/');
            }
            else
            {
                lastIndexOfDash = url.LastIndexOf(',');
            }

            var lastIndexOfQM = url.LastIndexOf('?');
            var count = lastIndexOfQM - lastIndexOfDash - 1;
            var result = url.Remove(lastIndexOfDash + 1, count);

            var pageNumberStr = pageNumber.ToString();
            result = result.Insert(lastIndexOfDash + 1, pageNumberStr);

            return result;
        }

        private string BuildQueryString(Filter filter)
        {
            var filterList = new List<string>();
            var filterValueList = new List<string>();

            var finalTitile = filter.Title;
            
            if (!string.IsNullOrEmpty(filter.Brand))
            {
                filterList.Add("Brand");
                filterValueList.Add(filter.Brand);
            }
            if (!string.IsNullOrEmpty(filter.Category))
            {
                filterList.Add("Category");
                filterValueList.Add(filter.Category);
            }
            if (!string.IsNullOrEmpty(filter.Gender))
            {
                var gender = DetermineGenderFromString(filter.Gender);
                if (!string.IsNullOrEmpty(gender))
                {
                    filterList.Add("Gender");
                    filterValueList.Add(gender);
                }
            }

            var priceFilter = string.Empty;
            var separator = "%7C";

            if (!string.IsNullOrEmpty(filter.PriceLow) && !string.IsNullOrEmpty(filter.PriceHigh))
            {
                priceFilter = filter.PriceLow + separator + filter.PriceHigh;
            }
            else if (string.IsNullOrEmpty(filter.PriceLow) && !string.IsNullOrEmpty(filter.PriceHigh))
            {
                priceFilter = "0%7C" + filter.PriceHigh;
            }
            else if (!string.IsNullOrEmpty(filter.PriceLow) && string.IsNullOrEmpty(filter.PriceHigh))
            {
                priceFilter = filter.PriceLow + "%7C-1";
            }

            if (!string.IsNullOrEmpty(priceFilter))
            {
                filterList.Add("Price");
                filterValueList.Add(priceFilter);
            }

            var filterListStr = string.Join(",", filterList);
            var filterValueListStr = string.Join(",", filterValueList);

            var symbol = Uri.UnescapeDataString("%257C");

            var resultUrl = string.Empty;
            if (string.IsNullOrEmpty(filterListStr))
            {
                resultUrl = Uri.EscapeUriString(string.Format(_searchUrl, filter.Title));
            }
            else
            {
                resultUrl = Uri.EscapeUriString(string.Format(_searchUrlWithFilters, filter.Title, filterListStr, filterValueListStr));
                _withFilters = true;
            }
            
            return resultUrl;
        }

        private int ParsePagesNumber(HtmlDocument page)
        {
            HtmlNode node = page.DocumentNode.SelectSingleNode("//div[@id='paginateTop']");
            var found = false;
            var resultStr = string.Empty;

            foreach (var child in node.ChildNodes)
            {
                if (found)
                {
                    resultStr = HtmlEntity.DeEntitize(child.InnerText);
                    break;
                }

                var childInnerText = HtmlEntity.DeEntitize(child.InnerText);
                if (childInnerText.Equals("\n... \n"))
                {
                    found = true;
                    continue;
                }
            }

            var result = int.Parse(resultStr);
            return result;
        }

        private async Task<int> ParseProductsCount(string queryString)
        {
            var pageData = string.Empty;
            var result = 0;
            
            using (var httpClientHandler = new HttpClientHandler()
            {
                CookieContainer = _cookies,
                UseCookies = true
            })
            using (var httpClient = SetupHttpClientWithHeaders(httpClientHandler))
            {
                pageData = await httpClient.GetStringAsync(queryString);

                pageData = Utils.Utils.Unescape(pageData);
                var page = new HtmlDocument();
                page.LoadHtml(pageData);

                HtmlNode node = page.DocumentNode.SelectSingleNode("//span[@id='productCount']");
                var resultStr = HtmlEntity.DeEntitize(node.InnerText).Trim();
                result = int.Parse(resultStr);
            }            

            return result;
        }

        private List<string> ParsedBrands(HtmlDocument page)
        {
            var brands = new List<string>();

            var nodeCollection = page.DocumentNode.SelectNodes("//li[@id='BRAND']//div[@class='listbox']//li"); //ul[@id='all_brands_list']//li 
            foreach (HtmlNode node in nodeCollection)
            {
                var itemNode = node.SelectSingleNode("a");
                var brandName = HtmlEntity.DeEntitize(itemNode.GetAttributeValue("data-value", string.Empty)); 

                brands.Add(brandName);
            }

            return brands;
        } 

        private string GetBrand(string title)
        {
            var result = string.Empty;

            var cultureInfo = new CultureInfo("en-EN");
            foreach (var brand in _brands)
            {
                if(cultureInfo.CompareInfo.IndexOf(title, brand, CompareOptions.IgnoreCase) >= 0)
                {
                    result = brand;
                    break;
                }
            }

            return result;
        }

        private async Task GetCategories()
        {
            using (var httpClientHandler = new HttpClientHandler() { CookieContainer = _cookies })
            using (var httpClient = new HttpClient(httpClientHandler))
            {
                var pageData = await httpClient.GetStringAsync(_baseUrl);
                var page = new HtmlDocument();
                page.LoadHtml(pageData);

                HtmlNodeCollection nodeCollection = page.DocumentNode.SelectNodes("//div[@id='globalMastheadCategoryMenu']//li");
                foreach (HtmlNode node in nodeCollection)
                {
                    var categoryId = node.GetAttributeValue("id", string.Empty).Split('_')[1];
                    var categoryName = HtmlEntity.DeEntitize(node.SelectSingleNode("a").InnerText);

                    _categoryDict.Add(categoryId, categoryName);
                }

                foreach (var entry in _categoryDict)
                {
                    var catDivId = $"Flyout_{entry.Key}";

                    nodeCollection = page.DocumentNode.SelectNodes($"//div[@id='globalMastheadFlyout']//div[@id='{catDivId}']//ul");
                    foreach (HtmlNode node in nodeCollection)
                    {
                        var subCategoryNamePart1 = string.Empty;
                        var lis = node.SelectNodes("li");
                        if (lis.Count < 2)
                        {
                            continue;
                        }
                        foreach (var item in lis)
                        {
                            var labelNode = item.SelectSingleNode("label");
                            if (labelNode != null)
                            {
                                subCategoryNamePart1 = HtmlEntity.DeEntitize(labelNode.InnerText) + " | ";
                            }
                            else
                            {
                                var urlNode = item.SelectSingleNode("a");
                                var url = urlNode.GetAttributeValue("href", string.Empty);
                                var subCategoryName = subCategoryNamePart1 + HtmlEntity.DeEntitize(urlNode.InnerText);

                                var startIdPos = url.IndexOf("?id=");
                                if (startIdPos < 0)
                                {
                                    continue;
                                }

                                startIdPos += 4;

                                var endIdPos = url.IndexOf('&', startIdPos);

                                var id = url.Substring(startIdPos, endIdPos - startIdPos);

                                if (!_subCategoryDict.ContainsKey(entry.Key))
                                {
                                    _subCategoryDict[entry.Key] = new Dictionary<string, string>();
                                }
                                if (!_subCategoryDict[entry.Key].ContainsKey(id))
                                {
                                    _subCategoryDict[entry.Key].Add(id, subCategoryName);
                                }

                            }

                        }
                    }
                }
            }

            _categoriesScrapped = true;
        }

        private class CategoriesNames
        {
            public string CategoryName { get; set; }
            public string SubCategoryName { get; set; }
        }

        private CategoriesNames GetSubCategoryName(string subCategoryId)
        {
            var result = new CategoriesNames();
           
            foreach (var item in _subCategoryDict)
            {
                if (item.Value.ContainsKey(subCategoryId))
                {
                    result.CategoryName = _categoryDict[item.Key];
                    result.SubCategoryName = item.Value[subCategoryId];
                    
                    break;
                }
            }

            return result;
        }

        private static string DetermineGenderFromString(string str)
        {
            var gender = string.Empty;
            var cultureInfo = new CultureInfo("en-EN");

            if (cultureInfo.CompareInfo.IndexOf(str, "Women", CompareOptions.IgnoreCase) >= 0 ||
                cultureInfo.CompareInfo.IndexOf(str, "Female", CompareOptions.IgnoreCase) >= 0)
            {
                gender = "Female";
            }

            else if (cultureInfo.CompareInfo.IndexOf(str, "Men", CompareOptions.IgnoreCase) >= 0 ||
                cultureInfo.CompareInfo.IndexOf(str, "Male", CompareOptions.IgnoreCase) >= 0)
            {
                gender = "Male";
            }

            else if (cultureInfo.CompareInfo.IndexOf(str, "Girl", CompareOptions.IgnoreCase) >= 0 ||
                cultureInfo.CompareInfo.IndexOf(str, "Girls", CompareOptions.IgnoreCase) >= 0)
            {
                gender = "Girls";
            }

            else if (cultureInfo.CompareInfo.IndexOf(str, "Boy", CompareOptions.IgnoreCase) >= 0 ||
                cultureInfo.CompareInfo.IndexOf(str, "Boys", CompareOptions.IgnoreCase) >= 0)
            {
                gender = "Boys";
            }

            else if (cultureInfo.CompareInfo.IndexOf(str, "Unisex", CompareOptions.IgnoreCase) >= 0)
            {
                gender = "Unisex";
            }

            return gender;
        }

        private static string FirstCharToUpper(string input)
        {
           return input.First().ToString().ToUpper() + input.Substring(1);
        }

        private static Filter PrepareFilter(Filter filter)
        {
            if (!string.IsNullOrEmpty(filter.Brand))
            {
                var brand = string.Join(" ", filter.Brand.Split(' ').Select(x => FirstCharToUpper(x)));
                filter.Brand = brand;
            }
            if (!string.IsNullOrEmpty(filter.Category))
            {
                var category = filter.Category.ToUpper();
                filter.Category = category;
            }
            if (!string.IsNullOrEmpty(filter.Gender))
            {
                var gender = DetermineGenderFromString(filter.Gender);
                filter.Gender = gender;
            }            

            return filter;
        }

        public Task<FilterData> GetFilterData(string title)
        {
            throw new NotImplementedException();
        }
    }
}
