using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RetailScraping.Data
{
    public class Product
    {
        public string Title { get; set; }
        public string Brand { get; set; }
        public string Gender { get; set; }
        public string Category { get; set; }
        public string SubCategory { get; set; }
        public string Country { get; set; }
        public string Type { get; set; }
        public double SalePrice { get; set; }
        public double OriginalPrice { get; set; }
        public double Discount { get; set; }
        public string Url { get; set; }
        public string ImageUrl { get; set; }
        public string Rating { get; set; }
        public string Reviews { get; set; }
        public string SpecialOffers { get; set; }
        public string Badges { get; set; }
        public string OnlineStoreName { get; set; }

        public Product()
        {
            Title = string.Empty;
            Brand = string.Empty;
            Gender = string.Empty;
            Category = string.Empty;
            SubCategory = string.Empty;
            Country = string.Empty;
            Type = string.Empty;
            SalePrice = 0;
            OriginalPrice = 0;
            Discount = 0;
            Url = string.Empty;
            ImageUrl = string.Empty;
            Rating = string.Empty;
            Reviews = string.Empty;
            SpecialOffers = string.Empty;
            Badges = string.Empty;
            OnlineStoreName = string.Empty;
        }
    }

    public class PageResult
    {
        public IList<Product> Products { get; set; }
        public int Count { get; set; }

        public int CurrentPageNumber { get; set; }
        public int CurrentProductIndex { get; set; }
    }
}
