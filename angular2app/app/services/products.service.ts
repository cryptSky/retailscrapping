import { Injectable }    from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PageResult, Filter, Product } from '../interfaces/product.interface';

@Injectable()
export class ProductsService {
    private _products$;
    private _count$;
    private _loadingInd$;
    private _filterChanged$;
    
    private dataStore: {  // This is where we will store our data in memory
        products: Product[],
        count: number,
        loadingIndicator: boolean,
        filter: Filter
    };
    
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private setSourceUrl = 'api/products/setSource';
    private scrapeUrl = 'api/products/scrape';  // URL to web api for all the products
    
    constructor(private http: Http ) {

        this.dataStore = { products: [], count: 0, loadingIndicator: false, filter: null };
        
        this._products$ = new BehaviorSubject<Product[]>(this.dataStore.products);
        this._count$ = new BehaviorSubject<number>(this.dataStore.count); 
        this._loadingInd$ = new BehaviorSubject<boolean>(this.dataStore.loadingIndicator);
        this._filterChanged$ = new BehaviorSubject<boolean>(false);
    }
    
    get products$() {
        return this._products$.asObservable();
    }

    get count$() {
        return this._count$.asObservable();
    }

    get loadingInd$() {
        return this._loadingInd$.asObservable();
    }

    get filterChanged$() {
        return this._filterChanged$.asObservable();
    }

    public scrape(filter: Filter) {
        if (this.dataStore.filter != null && this.filtersNotEqual(filter, this.dataStore.filter)) {
           this.dataStore.products = [];
           this.dataStore.count = 0;
           this.dataStore.loadingIndicator = true;

           this._products$.next(this.dataStore.products);
           this._count$.next(this.dataStore.count);           
           this._loadingInd$.next(this.dataStore.loadingIndicator);
        }
   
        this.http
            .post(this.scrapeUrl, JSON.stringify(filter), { headers: this.headers })
            .map((response) => {
                let res = JSON.parse(response['_body']);
                let products = new Array<Product>();
                res.products.forEach((item) => {
                    let product = item as Product;
                    products.push(product);
                });
                let result = new PageResult(products, res.count);
                
                this.dataStore.filter = filter;
                return result;
            })
            .subscribe((res: PageResult) => {
                
                this.dataStore.loadingIndicator = false;
                this._loadingInd$.next(this.dataStore.loadingIndicator);
               
                this.dataStore.products = this.dataStore.products.concat(res.products);
                this._products$.next(this.dataStore.products);
                              
                this.dataStore.count = res.count;
                this._count$.next(this.dataStore.count);
               
            },
            error => { this.handleError(error) });
        
    }

    public selectSource(source: string) {
        this.http
            .post(this.setSourceUrl, JSON.stringify(source), { headers: this.headers })
            .map((response) => {
                let res = response;
            })
            .subscribe((res: any) => {
               
            },
            error => { this.handleError(error) });
    }

    public scrapePage(pageNumber: number) {
        this.dataStore.filter.pageNumber = pageNumber;
        this.scrape(this.dataStore.filter);
    }

    public getCategories(value: string) {
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private filtersNotEqual(filter1: Filter, filter2: Filter) {
        let result = false;
        if ((filter1.title !== filter2.title) || (filter1.category !== filter2.category) || 
            (filter1.brand !== filter2.brand) || (filter1.country !== filter2.country) || (filter1.gender !== filter2.gender) || (filter1.gender !== filter2.gender) ||
            (filter1.priceLow !== filter2.priceLow) || (filter1.priceHigh !== filter2.priceHigh) ||
            (filter1.priceChangeLow !== filter2.priceChangeLow) || (filter1.priceChangeHigh !== filter2.priceChangeHigh) ||
            (filter1.discountLow !== filter2.discountLow) || (filter1.discountHigh !== filter2.discountHigh) ||
            (filter1.onlineStoreName !== filter2.onlineStoreName)) {
            result = true;
        }
        return result;
    }

    

}