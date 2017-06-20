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
//our root app component
var core_1 = require("@angular/core");
var products_service_1 = require("../../services/products.service");
var windowref_service_1 = require("../../services/windowref.service");
var ProductsTableComponent = (function () {
    function ProductsTableComponent(_productService, _winRef) {
        this._productService = _productService;
        this._winRef = _winRef;
        this._products = [];
        this._totalCountNow = 0;
        this._temp = [];
        this._currentPage = 0;
        this._loadingIndicator = true;
        this._filterChanged = false;
        this._mySettings = {
            pullRight: false,
            enableSearch: false,
            checkedStyle: 'checkboxes',
            buttonClasses: 'btn btn-default',
            selectionLimit: 0,
            closeOnSelect: false,
            showCheckAll: false,
            showUncheckAll: false,
            dynamicTitleMaxItems: 3,
            maxHeight: '300px',
        };
        this._myTexts = {
            checkAll: 'Check all',
            uncheckAll: 'Uncheck all',
            checked: 'checked',
            checkedPlural: 'checked',
            searchPlaceholder: 'Search...',
            defaultTitle: 'Select',
        };
    }
    ProductsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initOptions();
        this.updateColumns();
        this._nativeWindow = this._winRef.getNativeWindow();
        this._productsSubscription = this._productService.products$.subscribe(function (res) {
            if (res.length === 0) {
                _this._currentPage = 0;
            }
            var rows = res.slice();
            _this._products = rows;
            _this._temp = res.slice();
        });
        this._countSubscription = this._productService.count$.subscribe(function (res) {
            _this._count = res;
            _this._totalCountNow = _this._count;
        });
        this._loadingIndSubscription = this._productService.loadingInd$.subscribe(function (res) {
            _this._loadingIndicator = res;
        });
    };
    ProductsTableComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this._productsSubscription.unsubscribe();
        this._countSubscription.unsubscribe();
        this._loadingIndSubscription.unsubscribe();
        this._filterChangedSubscr.unsubscribe();
    };
    ProductsTableComponent.prototype.initOptions = function () {
        this._options = [
            { id: 1, name: 'Image', prop: 'imageUrl', cellTemplate: this.imgTmpl },
            { id: 2, name: 'Title', prop: 'title' },
            { id: 3, name: 'Brand', prop: 'brand' },
            { id: 4, name: 'Gender', prop: 'gender' },
            { id: 5, name: 'Category', prop: 'category' },
            { id: 6, name: 'SubCategory', prop: 'subCategory' },
            { id: 7, name: 'Country', prop: 'country' },
            { id: 8, name: 'Type', prop: 'type' },
            { id: 9, name: 'Old Price, $', prop: 'originalPrice' },
            { id: 10, name: 'Price Now, $', prop: 'salePrice' },
            { id: 11, name: 'Discount, %', prop: 'discount' },
            { id: 12, name: 'Rating', prop: 'rating' },
            { id: 13, name: 'Reviews', prop: 'reviews' },
            { id: 14, name: 'Special Offers', prop: 'specialOffers' },
            { id: 15, name: 'Badges', prop: 'badges' },
            { id: 16, name: 'Online Store', prop: 'onlineStoreName' }
        ];
        this._myOptions = this._options.map(function (a) {
            return {
                id: a.id,
                name: a.name
            };
        });
        this._selectedOptions = [1, 2, 3, 4, 5, 9, 10, 11, 16]; // Default selection
    };
    ProductsTableComponent.prototype.updateFilter = function (val) {
        // remove existing
        this._products = [];
        // filter our data
        var temp = this._temp.filter(function (d) {
            return d.title.toLowerCase().indexOf(val) !== -1;
        });
        // update the rows
        this._products = temp;
        if (val) {
            this._count = this._products.length;
            this._currentPage = 0;
        }
        else {
            this._count = this._totalCountNow;
        }
    };
    ProductsTableComponent.prototype.onColumnsChange = function (val) {
        this.updateColumns();
    };
    ProductsTableComponent.prototype.isSelected = function (name) {
    };
    ProductsTableComponent.prototype.isSelectedIndex = function (index) {
        var isSelected = false;
        if (this._selectedOptions.indexOf(index) !== -1) {
            isSelected = true;
        }
        return isSelected;
    };
    ProductsTableComponent.prototype.updateColumns = function () {
        var _this = this;
        var result = this._options.filter(function (opt) { return _this._selectedOptions.indexOf(opt.id) !== -1; })
            .map(function (a) {
            return {
                name: a.name,
                prop: a.prop,
                cellTemplate: a.cellTemplate
            };
        });
        this._columns = result;
    };
    ProductsTableComponent.prototype.onPage = function (event) {
        var savedPages = Math.ceil(this._products.length / event.pageSize);
        this._currentPage = event.offset;
        var pageNumber = this._currentPage + 1;
        var page = savedPages + 1;
        while (page <= pageNumber) {
            this._loadingIndicator = true;
            this._productService.scrapePage(page);
            page++;
        }
    };
    ProductsTableComponent.prototype.onProductClick = function (event) {
        this._nativeWindow.open(event.row.url);
    };
    ProductsTableComponent.prototype.convertToCSV = function (objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";
        for (var index in objArray[0]) {
            //Now convert each value to string and comma-separated
            row += index + ',';
        }
        row = row.slice(0, -1);
        //append Label row with line break
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ',';
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    };
    return ProductsTableComponent;
}());
__decorate([
    core_1.ViewChild('productsTable'),
    __metadata("design:type", Object)
], ProductsTableComponent.prototype, "table", void 0);
__decorate([
    core_1.ViewChild('imgTmpl'),
    __metadata("design:type", core_1.TemplateRef)
], ProductsTableComponent.prototype, "imgTmpl", void 0);
ProductsTableComponent = __decorate([
    core_1.Component({
        selector: 'products-table',
        template: require('./productsTable.component.html'),
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [products_service_1.ProductsService, windowref_service_1.WindowRef])
], ProductsTableComponent);
exports.ProductsTableComponent = ProductsTableComponent;
//# sourceMappingURL=productsTable.component.js.map