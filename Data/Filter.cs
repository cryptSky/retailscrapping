using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RetailScraping.Data
{
    public class Filter
    {
        public string Title { get; set; }
        public string Brand { get; set; }
        public string Gender { get; set; }
        public string Category { get; set; }
        public string Country { get; set; }
        public string PriceLow { get; set; }
        public string PriceHigh { get; set; }
        public string PriceChangeLow { get; set; }
        public string PriceChangeHigh { get; set; }
        public string DiscountLow { get; set; }
        public string DiscountHigh { get; set; }
        public string OnlineStoreName { get; set; }
        public int PageNumber { get; set; }

        public int ProductsOnPage { get; set; }
    }

    public class FilterData
    {
        public List<string> Brands { get; set; }
        public List<string> BrandLinks { get; set; }
        public List<string> Categories { get; set; }
        public List<string> CategoryLinks { get; set; }
        public List<string> Styles { get; set; }
        public List<string> StyleLinks { get; set; }
    }
}
