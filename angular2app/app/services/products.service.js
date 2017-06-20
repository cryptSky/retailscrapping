"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var product_interface_1 = require("../interfaces/product.interface");
var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.setSourceUrl = 'api/products/setSource';
        this.scrapeUrl = 'api/products/scrape'; // URL to web api for all the products
        this.dataStore = { products: [], count: 0, loadingIndicator: false, filter: null };
        this._products$ = new BehaviorSubject_1.BehaviorSubject(this.dataStore.products);
        this._count$ = new BehaviorSubject_1.BehaviorSubject(this.dataStore.count);
        this._loadingInd$ = new BehaviorSubject_1.BehaviorSubject(this.dataStore.loadingIndicator);
        this._filterChanged$ = new BehaviorSubject_1.BehaviorSubject(false);
    }
    Object.defineProperty(ProductsService.prototype, "products$", {
        get: function () {
            return this._products$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsService.prototype, "count$", {
        get: function () {
            return this._count$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsService.prototype, "loadingInd$", {
        get: function () {
            return this._loadingInd$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsService.prototype, "filterChanged$", {
        get: function () {
            return this._filterChanged$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ProductsService.prototype.scrape = function (filter) {
        var _this = this;
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
            .map(function (response) {
            var res = JSON.parse(response['_body']);
            var products = new Array();
            res.products.forEach(function (item) {
                var product = item;
                products.push(product);
            });
            var result = new product_interface_1.PageResult(products, res.count);
            _this.dataStore.filter = filter;
            return result;
        })
            .subscribe(function (res) {
            _this.dataStore.loadingIndicator = false;
            _this._loadingInd$.next(_this.dataStore.loadingIndicator);
            _this.dataStore.products = _this.dataStore.products.concat(res.products);
            _this._products$.next(_this.dataStore.products);
            _this.dataStore.count = res.count;
            _this._count$.next(_this.dataStore.count);
        }, function (error) { _this.handleError(error); });
    };
    ProductsService.prototype.selectSource = function (source) {
        var _this = this;
        this.http
            .post(this.setSourceUrl, JSON.stringify(source), { headers: this.headers })
            .map(function (response) {
            var res = response;
        })
            .subscribe(function (res) {
        }, function (error) { _this.handleError(error); });
    };
    ProductsService.prototype.scrapePage = function (pageNumber) {
        this.dataStore.filter.pageNumber = pageNumber;
        this.scrape(this.dataStore.filter);
    };
    ProductsService.prototype.getCategories = function (value) {
    };
    ProductsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProductsService.prototype.filtersNotEqual = function (filter1, filter2) {
        var result = false;
        if ((filter1.title !== filter2.title) || (filter1.category !== filter2.category) ||
            (filter1.brand !== filter2.brand) || (filter1.country !== filter2.country) || (filter1.gender !== filter2.gender) || (filter1.gender !== filter2.gender) ||
            (filter1.priceLow !== filter2.priceLow) || (filter1.priceHigh !== filter2.priceHigh) ||
            (filter1.priceChangeLow !== filter2.priceChangeLow) || (filter1.priceChangeHigh !== filter2.priceChangeHigh) ||
            (filter1.discountLow !== filter2.discountLow) || (filter1.discountHigh !== filter2.discountHigh) ||
            (filter1.onlineStoreName !== filter2.onlineStoreName)) {
            result = true;
        }
        return result;
    };
    return ProductsService;
}());
ProductsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map