using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RetailScraping.Data;
using RetailScraping.Interfaces;
using RetailScraping.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace RetailScraping.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ProductsController : Controller
    {
        private IRetailScraper _scraper;
       
        [HttpPost]
        public async Task<IActionResult> Scrape([FromBody]Filter filter)
        {
            SourceType sourceType = (SourceType)Enum.Parse(typeof(SourceType), filter.OnlineStoreName, true);

            switch (sourceType)
            {
                case SourceType.MACYS:
                    _scraper = new MacysScraper();
                    break;
                case SourceType.SIXPM:
                    //_scraper = new SixpmScraper();
                    break;
                default:
                    _scraper = new MacysScraper();
                    break;
            }

            var pageResult = await _scraper.Scrape(filter);
            
            return Json(pageResult);
        }

        
    }
}
