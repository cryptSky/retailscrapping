/*using RetailScraping.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RetailScraping.Data;
using System.Net;
using System.Net.Http;
using HtmlAgilityPack;
using System.Globalization;

namespace RetailScraping.Services
{
    public class SixpmScraper : IRetailScraper
    {
        private static Uri _baseUrl = new Uri("http://www.6pm.com/");
        private static CookieContainer _cookies = new CookieContainer();
        public int ProductsCount
        {
            get
            {
                throw new NotImplementedException();
            }

            set
            {
                throw new NotImplementedException();
            }
        }

        public async Task<IList<Product>> Scrape(Filter filter)
        {
            var productList = new List<Product>();
            var gender = DetermineGenderFromString(filter.Gender);
            var searchTitleUrl = string.Empty;

            if (!string.IsNullOrEmpty(gender))
            {
                searchTitleUrl = gender + "-";
            }

            searchTitleUrl += string.Join("-", filter.Title.Split(' '));
            var searchUrl = _baseUrl + searchTitleUrl;

            using (var httpClientHandler = new HttpClientHandler() { CookieContainer = _cookies })
            using (var httpClient = new HttpClient(httpClientHandler))
            {
                var pageData = await httpClient.GetStringAsync(searchUrl);
                pageData = Utils.Utils.Unescape(pageData);

                var page = new HtmlDocument();
                page.LoadHtml(pageData);
            }

            return productList;
        }

        private int ParsePagesCount(HtmlDocument page)
        {
            var resultStr = string.Empty;
            HtmlNodeCollection nodeCollection = page.DocumentNode.SelectNodes("//div[@class='pagination']//span");
            foreach (var node in nodeCollection)
            {
                var anode = node.SelectSingleNode(".//a");
                if (anode != null)
                {
                    resultStr = HtmlEntity.DeEntitize(anode.InnerText).Trim();
                }
            }
            var result = int.Parse(resultStr);

            return result;
        }

        private string GetPageLink(HtmlDocument page)
        {
            var resultStr = string.Empty;
            HtmlNode anode = page.DocumentNode.SelectSingleNode("//div[@class='pagination']//a");
            var link = anode.GetAttributeValue("href", string.Empty);
            var indexOfEq = link.LastIndexOf("=");

            resultStr = link.Substring(0, indexOfEq);

            return resultStr;
        }

        public async Task<FilterData> GetFilterData(string title)
        {
            var searchTitleUrl = string.Join("-", title.Split(' '));
            var searchUrl = _baseUrl + searchTitleUrl;

            var filterData = new FilterData();

            using (var httpClientHandler = new HttpClientHandler() { CookieContainer = _cookies })
            using (var httpClient = new HttpClient(httpClientHandler))
            {
                var pageData = await httpClient.GetStringAsync(searchUrl);
                pageData = Utils.Utils.Unescape(pageData);

                var page = new HtmlDocument();
                page.LoadHtml(pageData);

                var brandsList = new List<string>();
                var brandLinks = new List<string>();
                HtmlNodeCollection nodeCollection = page.DocumentNode.SelectNodes("//[@id='FCTbrandnamefacetSelect']//a");
                foreach (HtmlNode node in nodeCollection)
                {
                    var brandTitle = node.GetAttributeValue("title", string.Empty);
                    var brandLink = node.GetAttributeValue("href", string.Empty);
                    brandsList.Add(brandTitle);
                    brandLinks.Add(brandLink);
                }
                filterData.Brands = brandsList;
                filterData.BrandLinks = brandLinks;

                var categoriesList = new List<string>();
                var categoryLinks = new List<string>();
                nodeCollection = page.DocumentNode.SelectNodes("//[@id='FCTzc2Select']//a");
                foreach (HtmlNode node in nodeCollection)
                {
                    var categoryTitle = node.GetAttributeValue("title", string.Empty);
                    var categoryLink = node.GetAttributeValue("href", string.Empty);
                    categoriesList.Add(categoryTitle);
                    categoryLinks.Add(categoryLink);
                }
                filterData.Categories = categoriesList;
                filterData.CategoryLinks = categoryLinks;

                var stylesList = new List<string>();
                var styleLinks = new List<string>();
                nodeCollection = page.DocumentNode.SelectNodes("//[@id='FCTtxattrfacet_stylesSelect']//a");
                foreach (HtmlNode node in nodeCollection)
                {
                    var styleTitle = node.GetAttributeValue("title", string.Empty);
                    var styleLink = node.GetAttributeValue("href", string.Empty);
                    stylesList.Add(styleTitle);
                    styleLinks.Add(styleLink);
                }
                filterData.Styles = stylesList;
                filterData.StyleLinks = styleLinks;

                return filterData;
            }
        }

		*/
		
        //private HttpClient SetupHttpClientWithHeaders(HttpClientHandler httpClientHandler)
        //{
        //    var httpClient = new HttpClient(httpClientHandler);
        //
        //    //httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
        //    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Accept-Encoding", "gzip, deflate, sdch");
        //    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Accept-Language", "ru-RU,ru;q=0.8,en-US;q=0.6,en;q=0.4,uk;q=0.2");
        //    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36");
        //    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Host", "wwww.6pm.com");
        //    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Upgrade-Insecure-Requests", "1");
        //
        //    return httpClient;
        //}

		/*
        private static string DetermineGenderFromString(string str)
        {
            var gender = string.Empty;
            var cultureInfo = new CultureInfo("en-EN");

            if (cultureInfo.CompareInfo.IndexOf(str, "Women", CompareOptions.IgnoreCase) >= 0 ||
                cultureInfo.CompareInfo.IndexOf(str, "Female", CompareOptions.IgnoreCase) >= 0)
            {
                gender = "women";
            }

            else if (cultureInfo.CompareInfo.IndexOf(str, "Men", CompareOptions.IgnoreCase) >= 0 ||
                cultureInfo.CompareInfo.IndexOf(str, "Male", CompareOptions.IgnoreCase) >= 0)
            {
                gender = "men";
            }

            else if (cultureInfo.CompareInfo.IndexOf(str, "Girl", CompareOptions.IgnoreCase) >= 0 ||
                cultureInfo.CompareInfo.IndexOf(str, "Girls", CompareOptions.IgnoreCase) >= 0)
            {
                gender = "girls";
            }

            else if (cultureInfo.CompareInfo.IndexOf(str, "Boy", CompareOptions.IgnoreCase) >= 0 ||
                cultureInfo.CompareInfo.IndexOf(str, "Boys", CompareOptions.IgnoreCase) >= 0)
            {
                gender = "boys";
            }

            else if (cultureInfo.CompareInfo.IndexOf(str, "Unisex", CompareOptions.IgnoreCase) >= 0)
            {
                gender = "unisex";
            }

            return gender;
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

                    
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.StackTrace);
            }

            return productList;
        }

        private object GetSubCategoryName(string categoryId)
        {
            throw new NotImplementedException();
        }
        
    }
}
*/