import { MultiselectDropdown, IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

//our root app component
import { Component, TemplateRef, NgModule, OnInit, ViewChild, ViewEncapsulation, OnDestroy } from '@angular/core'
import { ProductsService } from '../../services/products.service';
import { WindowRef } from '../../services/windowref.service';

import { Product, Filter } from '../../interfaces/product.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'products-table',
  template: require('./productsTable.component.html'),
  encapsulation: ViewEncapsulation.None
})

export class ProductsTableComponent implements OnInit, OnDestroy {
  
  private _nativeWindow: any;
  @ViewChild('productsTable') table;
  @ViewChild('imgTmpl') imgTmpl: TemplateRef<any>;

  private _products: Product[] = [];
  private _count: number;
  private _totalCountNow: number = 0;

  private _temp: Product[] = [];

  private _productsSubscription: Subscription;
  private _countSubscription: Subscription;
  private _loadingIndSubscription: Subscription;
  private _filterChangedSubscr: Subscription;

  private _currentPage: number = 0;
  private _loadingIndicator: boolean = true;
  private _filterChanged: boolean = false;

  private _options: any[];

  private _myOptions: IMultiSelectOption[];

  private _selectedOptions: number[];

  private _mySettings: IMultiSelectSettings = {
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
  
  private _myTexts: IMultiSelectTexts = {
      checkAll: 'Check all',
      uncheckAll: 'Uncheck all',
      checked: 'checked',
      checkedPlural: 'checked',
      searchPlaceholder: 'Search...',
      defaultTitle: 'Select',
  };

  private _columns : any[];

  constructor (private _productService: ProductsService, private _winRef: WindowRef) {
        
  }    

  ngOnInit() {
        this.initOptions();
        this.updateColumns();

        this._nativeWindow = this._winRef.getNativeWindow();       

        this._productsSubscription = this._productService.products$.subscribe(res => {
            if (res.length === 0) {
                this._currentPage = 0;
            }
            let rows = [...res];    
            this._products = rows;
            this._temp = [...res];
        });

        this._countSubscription = this._productService.count$.subscribe(res => {
            this._count = res;
            this._totalCountNow = this._count;
        });

        this._loadingIndSubscription = this._productService.loadingInd$.subscribe(res => {
            this._loadingIndicator = res;
        });
       
    }

    ngOnDestroy() {
        // prevent memory leak when component is destroyed
        this._productsSubscription.unsubscribe();
        this._countSubscription.unsubscribe();
        this._loadingIndSubscription.unsubscribe();
        this._filterChangedSubscr.unsubscribe();

    }

  private initOptions() {
    this._options = [
            { id: 1, name: 'Image', prop: 'imageUrl', cellTemplate: this.imgTmpl },
            { id: 2, name: 'Title', prop: 'title'},
            { id: 3, name: 'Brand', prop: 'brand'},
            { id: 4, name: 'Gender', prop: 'gender'},
            { id: 5, name: 'Category', prop: 'category'},
            { id: 6, name: 'SubCategory', prop: 'subCategory'},
            { id: 7, name: 'Country', prop: 'country'},
            { id: 8, name: 'Type', prop: 'type'},
            { id: 9, name: 'Old Price, $', prop: 'originalPrice'},
            { id: 10, name: 'Price Now, $', prop: 'salePrice'},
            { id: 11, name: 'Discount, %', prop: 'discount'},
            { id: 12, name: 'Rating', prop: 'rating'},
            { id: 13, name: 'Reviews', prop: 'reviews'},
            { id: 14, name: 'Special Offers', prop: 'specialOffers'},
            { id: 15, name: 'Badges', prop: 'badges'},        
            { id: 16, name: 'Online Store', prop: 'onlineStoreName'}
        ];

    this._myOptions = this._options.map(function(a) {
                                return {
                                    id: a.id,
                                    name: a.name
                                }});

    this._selectedOptions = [1, 2, 3, 4, 5, 9, 10, 11, 16]; // Default selection
    
  }

  updateFilter(val) {
    // remove existing
    this._products = [];
    
    // filter our data
    let temp = this._temp.filter(function(d) {
      return d.title.toLowerCase().indexOf(val) !== -1;
    });

    // update the rows
    this._products = temp;

    if (val) {
        this._count = this._products.length;
        this._currentPage = 0;
    } else {
        this._count = this._totalCountNow;
    }
    
  }

  onColumnsChange(val) {
    this.updateColumns();
  }

  isSelected(name: string)
  {
  }

  isSelectedIndex(index: number)
  {
    let isSelected = false;
    if (this._selectedOptions.indexOf(index) !== -1) {
        isSelected = true;
    }

    return isSelected;
  }


  updateColumns() {
    
    let result = this._options.filter(opt => this._selectedOptions.indexOf(opt.id) !== -1)
                                .map(function(a) {
                                return {
                                    name: a.name,
                                    prop: a.prop,
                                    cellTemplate: a.cellTemplate
                                }});

    this._columns = result;
  }

  onPage(event) {

    let savedPages = Math.ceil(this._products.length / event.pageSize);
    this._currentPage = event.offset;
    let pageNumber = this._currentPage + 1;
    
    let page = savedPages + 1;
    while (page <= pageNumber) {
        this._loadingIndicator = true;
        this._productService.scrapePage(page);

        page++;        
    }

  }

  onProductClick(event) {
    this._nativeWindow.open(event.row.url);
    
  }

  private convertToCSV(objArray) {
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
            if (line != '') line += ','
    
            line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
  }

}


