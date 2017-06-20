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
var products_service_1 = require("../../services/products.service");
var core_1 = require("@angular/core");
var SearchFormComponent = (function () {
    function SearchFormComponent(_productsService) {
        this._productsService = _productsService;
        this.filter = {
            title: '',
            brand: '',
            gender: '',
            category: '',
            country: '',
            priceLow: '',
            priceHigh: '',
            priceChangeLow: '',
            priceChangeHigh: '',
            discountLow: '',
            discountHigh: '',
            onlineStoreName: '',
            pageNumber: 1
        };
        this.sources = [
            {
                name: "Macy's",
                value: "macys"
            },
            {
                name: "6pm",
                value: "sixpm"
            }
        ];
        this.selectedValue = this.sources[0];
    }
    SearchFormComponent.prototype.ngOnInit = function () {
    };
    SearchFormComponent.prototype.scrape = function (form, formModel, isValid) {
        this.submitted = true; // set form submit to true
        formModel.pageNumber = 1;
        if (isValid) {
            this._productsService.scrape(formModel);
        }
    };
    SearchFormComponent.prototype.onSelect = function (source) {
        this._productsService.selectSource(source.value);
    };
    SearchFormComponent.prototype.getCategories = function (value) {
        this._productsService.getCategories(value);
    };
    return SearchFormComponent;
}());
SearchFormComponent = __decorate([
    core_1.Component({
        selector: 'search-form',
        template: require('./searchForm.component.html')
    }),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], SearchFormComponent);
exports.SearchFormComponent = SearchFormComponent;
//# sourceMappingURL=searchForm.component.js.map