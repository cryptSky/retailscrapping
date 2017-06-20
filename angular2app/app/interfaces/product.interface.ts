
export class Filter {

    constructor(
        public title : string,
        public brand : string,
        public gender : string,
        public category : string,
        public country : string,
        public priceLow : string,
        public priceHigh : string,
        public priceChangeLow : string,
        public priceChangeHigh : string,
        public discountLow : string,
        public discountHigh : string,
        public onlineStoreName: string,
        public pageNumber: number,
        public productsOnPage: number) {
        
     }
}

export class Product {

    constructor(
        public title : string,
        public brand : string,
        public gender : string,
        public category : string,
        public subCategory : string,
        public country : string,
        public type : string,
        public originalPrice : number,
        public salePrice : number,
        public discount : number,
        public url : string,
        public imageUrl : string,
        public rating : string,
        public reviews : string,
        public specialOffers : string,
        public badges : string,
        public onlineStoreName: string) {
        
     }
}

export class PageResult {
    constructor(
        public products : Product[] = [],
        public count : number) {
    }
}