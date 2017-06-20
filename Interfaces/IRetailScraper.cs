using RetailScraping.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RetailScraping.Interfaces
{
    interface IRetailScraper
    {
        Task<PageResult> Scrape(Filter filter);
        Task<FilterData> GetFilterData(string title);
        int ProductsCount { get; set; }
    }
}
