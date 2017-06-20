webpackJsonp([0],{

/***/ 0:
/*!*********************************!*\
  !*** ./angular2App/app/main.ts ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	var app_module_1 = __webpack_require__(/*! ./app.module */ 23);
	__webpack_require__(/*! ./styles/custom.css */ 76);
	//import './styles/modern.css';
	//import './styles/green.css';
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/*!***************************************!*\
  !*** ./angular2App/app/app.module.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 21);
	var http_1 = __webpack_require__(/*! @angular/http */ 24);
	var app_constants_1 = __webpack_require__(/*! ./app.constants */ 25);
	var multiselect_dropdown_1 = __webpack_require__(/*! angular-2-dropdown-multiselect/src/multiselect-dropdown */ 26);
	var app_routes_1 = __webpack_require__(/*! ./app.routes */ 31);
	var forms_1 = __webpack_require__(/*! @angular/forms */ 27);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 68);
	var dashboard_component_1 = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 62);
	var ngx_datatable_1 = __webpack_require__(/*! @swimlane/ngx-datatable */ 70);
	var productsTable_component_1 = __webpack_require__(/*! ./components/productsTable/productsTable.component */ 71);
	var searchForm_component_1 = __webpack_require__(/*! ./components/searchForm/searchForm.component */ 74);
	var products_service_1 = __webpack_require__(/*! ./services/products.service */ 63);
	var windowref_service_1 = __webpack_require__(/*! ./services/windowref.service */ 72);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            bootstrap: [app_component_1.AppComponent],
	            declarations: [
	                app_component_1.AppComponent,
	                dashboard_component_1.DashboardComponent,
	                productsTable_component_1.ProductsTableComponent,
	                searchForm_component_1.SearchFormComponent
	            ],
	            imports: [
	                platform_browser_1.BrowserModule,
	                app_routes_1.routing,
	                http_1.HttpModule,
	                http_1.JsonpModule,
	                forms_1.ReactiveFormsModule,
	                forms_1.FormsModule,
	                ngx_datatable_1.NgxDatatableModule,
	                multiselect_dropdown_1.MultiselectDropdownModule
	            ],
	            providers: [
	                app_routes_1.appRoutingProviders,
	                app_constants_1.Configuration,
	                products_service_1.ProductsService,
	                windowref_service_1.WindowRef
	            ],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 25:
/*!******************************************!*\
  !*** ./angular2App/app/app.constants.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var Configuration = (function () {
	    function Configuration() {
	        this.Server = "http://localhost/";
	        this.ApiUrl = "api/";
	        this.ServerWithApiUrl = this.Server + this.ApiUrl;
	    }
	    Configuration = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Configuration);
	    return Configuration;
	}());
	exports.Configuration = Configuration;


/***/ },

/***/ 26:
/*!**********************************************************************!*\
  !*** ./~/angular-2-dropdown-multiselect/src/multiselect-dropdown.ts ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Angular 2 Dropdown Multiselect for Bootstrap
	 *
	 * Simon Lindh
	 * https://github.com/softsimon/angular-2-dropdown-multiselect
	 */
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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var common_1 = __webpack_require__(/*! @angular/common */ 22);
	var forms_1 = __webpack_require__(/*! @angular/forms */ 27);
	var MULTISELECT_VALUE_ACCESSOR = {
	    provide: forms_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return MultiselectDropdown; }),
	    multi: true
	};
	var MultiSelectSearchFilter = (function () {
	    function MultiSelectSearchFilter() {
	    }
	    MultiSelectSearchFilter.prototype.transform = function (options, args) {
	        return options.filter(function (option) {
	            return option.name
	                .toLowerCase()
	                .indexOf((args || '').toLowerCase()) > -1;
	        });
	    };
	    MultiSelectSearchFilter = __decorate([
	        core_1.Pipe({
	            name: 'searchFilter'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MultiSelectSearchFilter);
	    return MultiSelectSearchFilter;
	}());
	exports.MultiSelectSearchFilter = MultiSelectSearchFilter;
	var MultiselectDropdown = (function () {
	    function MultiselectDropdown(element, differs) {
	        this.element = element;
	        this.differs = differs;
	        this.selectionLimitReached = new core_1.EventEmitter();
	        this.dropdownClosed = new core_1.EventEmitter();
	        this.numSelected = 0;
	        this.isVisible = false;
	        this.searchFilterText = '';
	        this.defaultSettings = {
	            pullRight: false,
	            enableSearch: false,
	            checkedStyle: 'checkboxes',
	            buttonClasses: 'btn btn-default btn-secondary',
	            selectionLimit: 0,
	            closeOnSelect: false,
	            autoUnselect: false,
	            showCheckAll: false,
	            showUncheckAll: false,
	            dynamicTitleMaxItems: 3,
	            maxHeight: '300px',
	        };
	        this.defaultTexts = {
	            checkAll: 'Check all',
	            uncheckAll: 'Uncheck all',
	            checked: 'checked',
	            checkedPlural: 'checked',
	            searchPlaceholder: 'Search...',
	            defaultTitle: 'Select',
	        };
	        this.onModelChange = function (_) { };
	        this.onModelTouched = function () { };
	        this.differ = differs.find([]).create(null);
	    }
	    MultiselectDropdown.prototype.onClick = function (target) {
	        var parentFound = false;
	        while (target != null && !parentFound) {
	            if (target === this.element.nativeElement) {
	                parentFound = true;
	            }
	            target = target.parentElement;
	        }
	        if (!parentFound) {
	            this.isVisible = false;
	        }
	    };
	    MultiselectDropdown.prototype.ngOnInit = function () {
	        this.settings = Object.assign(this.defaultSettings, this.settings);
	        this.texts = Object.assign(this.defaultTexts, this.texts);
	        this.title = this.texts.defaultTitle;
	    };
	    MultiselectDropdown.prototype.writeValue = function (value) {
	        if (value !== undefined) {
	            this.model = value;
	        }
	    };
	    MultiselectDropdown.prototype.registerOnChange = function (fn) {
	        this.onModelChange = fn;
	    };
	    MultiselectDropdown.prototype.registerOnTouched = function (fn) {
	        this.onModelTouched = fn;
	    };
	    MultiselectDropdown.prototype.ngDoCheck = function () {
	        var changes = this.differ.diff(this.model);
	        if (changes) {
	            this.updateNumSelected();
	            this.updateTitle();
	        }
	    };
	    MultiselectDropdown.prototype.clearSearch = function () {
	        this.searchFilterText = '';
	    };
	    MultiselectDropdown.prototype.toggleDropdown = function () {
	        this.isVisible = !this.isVisible;
	        if (!this.isVisible) {
	            this.dropdownClosed.emit();
	        }
	    };
	    MultiselectDropdown.prototype.isSelected = function (option) {
	        return this.model && this.model.indexOf(option.id) > -1;
	    };
	    MultiselectDropdown.prototype.setSelected = function (event, option) {
	        if (!this.model) {
	            this.model = [];
	        }
	        var index = this.model.indexOf(option.id);
	        if (index > -1) {
	            this.model.splice(index, 1);
	        }
	        else {
	            if (this.settings.selectionLimit === 0 || this.model.length < this.settings.selectionLimit) {
	                this.model.push(option.id);
	            }
	            else {
	                if (this.settings.autoUnselect) {
	                    this.model.push(option.id);
	                    this.model.shift();
	                }
	                else {
	                    this.selectionLimitReached.emit(this.model.length);
	                    return;
	                }
	            }
	        }
	        if (this.settings.closeOnSelect) {
	            this.toggleDropdown();
	        }
	        this.onModelChange(this.model);
	    };
	    MultiselectDropdown.prototype.updateNumSelected = function () {
	        this.numSelected = this.model && this.model.length || 0;
	    };
	    MultiselectDropdown.prototype.updateTitle = function () {
	        var _this = this;
	        if (this.numSelected === 0) {
	            this.title = this.texts.defaultTitle;
	        }
	        else if (this.settings.dynamicTitleMaxItems >= this.numSelected) {
	            this.title = this.options
	                .filter(function (option) {
	                return _this.model && _this.model.indexOf(option.id) > -1;
	            })
	                .map(function (option) { return option.name; })
	                .join(', ');
	        }
	        else {
	            this.title = this.numSelected
	                + ' '
	                + (this.numSelected === 1 ? this.texts.checked : this.texts.checkedPlural);
	        }
	    };
	    MultiselectDropdown.prototype.checkAll = function () {
	        this.model = this.options.map(function (option) { return option.id; });
	        this.onModelChange(this.model);
	    };
	    MultiselectDropdown.prototype.uncheckAll = function () {
	        this.model = [];
	        this.onModelChange(this.model);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MultiselectDropdown.prototype, "options", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MultiselectDropdown.prototype, "settings", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MultiselectDropdown.prototype, "texts", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], MultiselectDropdown.prototype, "selectionLimitReached", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], MultiselectDropdown.prototype, "dropdownClosed", void 0);
	    __decorate([
	        core_1.HostListener('document: click', ['$event.target']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], MultiselectDropdown.prototype, "onClick", null);
	    MultiselectDropdown = __decorate([
	        core_1.Component({
	            selector: 'ss-multiselect-dropdown',
	            providers: [MULTISELECT_VALUE_ACCESSOR],
	            styles: ["\n\t   a { outline: none !important; }\n  "],
	            template: "\n\t<div class=\"dropdown\">\n\t    <button type=\"button\" class=\"dropdown-toggle\" [ngClass]=\"settings.buttonClasses\"\n\t    (click)=\"toggleDropdown()\">{{ title }}&nbsp;<span class=\"caret\"></span></button>\n\t    <ul *ngIf=\"isVisible\" class=\"dropdown-menu\" [class.pull-right]=\"settings.pullRight\" [class.dropdown-menu-right]=\"settings.pullRight\"\n\t    [style.max-height]=\"settings.maxHeight\" style=\"display: block; height: auto; overflow-y: auto;\">\n\t\t<li class=\"dropdown-item\" *ngIf=\"settings.enableSearch\">\n\t\t    <div class=\"input-group input-group-sm\">\n\t\t\t<span class=\"input-group-addon\" id=\"sizing-addon3\"><i class=\"fa fa-search\"></i></span>\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"{{ texts.searchPlaceholder }}\"\n\t\t\taria-describedby=\"sizing-addon3\" [(ngModel)]=\"searchFilterText\">\n\t\t\t<span class=\"input-group-btn\" *ngIf=\"searchFilterText.length > 0\">\n\t\t\t    <button class=\"btn btn-default\" type=\"button\" (click)=\"clearSearch()\"><i class=\"fa fa-times\"></i></button>\n\t\t\t</span>\n\t\t    </div>\n\t\t</li>\n\t\t<li class=\"dropdown-divider divider\" *ngIf=\"settings.enableSearch\"></li>\n\t\t<li class=\"dropdown-item\" *ngIf=\"settings.showCheckAll\">\n\t\t    <a href=\"javascript:;\" role=\"menuitem\" tabindex=\"-1\" (click)=\"checkAll()\">\n\t\t\t<span style=\"width: 16px;\" class=\"glyphicon glyphicon-ok\"></span>\n\t\t\t{{ texts.checkAll }}\n\t\t    </a>\n\t\t</li>\n\t\t<li class=\"dropdown-item\" *ngIf=\"settings.showUncheckAll\">\n\t\t    <a href=\"javascript:;\" role=\"menuitem\" tabindex=\"-1\" (click)=\"uncheckAll()\">\n\t\t\t<span style=\"width: 16px;\" class=\"glyphicon glyphicon-remove\"></span>\n\t\t\t{{ texts.uncheckAll }}\n\t\t    </a>\n\t\t</li>\n\t\t<li *ngIf=\"settings.showCheckAll || settings.showUncheckAll\" class=\"dropdown-divider divider\"></li>\n\t\t<li class=\"dropdown-item\" style=\"cursor: pointer;\"  *ngFor=\"let option of options | searchFilter:searchFilterText\" (click)=\"setSelected($event, option)\">\n\t\t    <a href=\"javascript:;\" role=\"menuitem\" tabindex=\"-1\">\n\t\t\t<input *ngIf=\"settings.checkedStyle === 'checkboxes'\" type=\"checkbox\" [checked]=\"isSelected(option)\" />\n\t\t\t<span *ngIf=\"settings.checkedStyle === 'glyphicon'\" style=\"width: 16px;\"\n\t\t\tclass=\"glyphicon\" [class.glyphicon-ok]=\"isSelected(option)\"></span>\n\t\t\t<span *ngIf=\"settings.checkedStyle === 'fontawsome'\" style=\"width: 16px;display: inline-block;\">\n\t\t\t    <i *ngIf=\"isSelected(option)\" class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t</span>\n\t\t\t{{ option.name }}\n\t\t    </a>\n\t\t</li>\n\t    </ul>\n\t</div>\n"
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.IterableDiffers !== 'undefined' && core_1.IterableDiffers) === 'function' && _b) || Object])
	    ], MultiselectDropdown);
	    return MultiselectDropdown;
	    var _a, _b;
	}());
	exports.MultiselectDropdown = MultiselectDropdown;
	var MultiselectDropdownModule = (function () {
	    function MultiselectDropdownModule() {
	    }
	    MultiselectDropdownModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule],
	            exports: [MultiselectDropdown],
	            declarations: [MultiselectDropdown, MultiSelectSearchFilter],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MultiselectDropdownModule);
	    return MultiselectDropdownModule;
	}());
	exports.MultiselectDropdownModule = MultiselectDropdownModule;


/***/ },

/***/ 27:
/*!***********************************************!*\
  !*** ./~/@angular/forms/bundles/forms.umd.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v2.4.7
	 * (c) 2010-2017 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(/*! @angular/core */ 3), __webpack_require__(/*! rxjs/operator/toPromise */ 28), __webpack_require__(/*! rxjs/Subject */ 6), __webpack_require__(/*! rxjs/Observable */ 7), __webpack_require__(/*! rxjs/observable/fromPromise */ 29)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
	}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * Base class for control directives.
	     *
	     * Only used internally in the forms module.
	     *
	     * \@stable
	     * @abstract
	     */
	    var AbstractControlDirective = (function () {
	        function AbstractControlDirective() {
	        }
	        Object.defineProperty(AbstractControlDirective.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { throw new Error('unimplemented'); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "value", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.value : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.valid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.invalid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.pending : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.errors : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.pristine : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.dirty : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.touched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.untouched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.disabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.enabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.statusChanges : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.valueChanges : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        AbstractControlDirective.prototype.reset = function (value) {
	            if (value === void 0) { value = undefined; }
	            if (this.control)
	                this.control.reset(value);
	        };
	        /**
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControlDirective.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return this.control ? this.control.hasError(errorCode, path) : false;
	        };
	        /**
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControlDirective.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return this.control ? this.control.getError(errorCode, path) : null;
	        };
	        return AbstractControlDirective;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * A directive that contains multiple {\@link NgControl}s.
	     *
	     * Only used by the forms module.
	     *
	     * \@stable
	     */
	    var ControlContainer = (function (_super) {
	        __extends$1(ControlContainer, _super);
	        function ControlContainer() {
	            _super.apply(this, arguments);
	        }
	        Object.defineProperty(ControlContainer.prototype, "formDirective", {
	            /**
	             * Get the form to which this container belongs.
	             * @return {?}
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ControlContainer.prototype, "path", {
	            /**
	             * Get the path to this container.
	             * @return {?}
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return ControlContainer;
	    }(AbstractControlDirective));
	
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isPresent(obj) {
	        return obj != null;
	    }
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isBlank(obj) {
	        return obj == null;
	    }
	    /**
	     * @param {?} a
	     * @param {?} b
	     * @return {?}
	     */
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    /**
	     * @param {?} o
	     * @return {?}
	     */
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	
	    /**
	     * Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        /**
	         * @param {?} m1
	         * @param {?} m2
	         * @return {?}
	         */
	        StringMapWrapper.merge = function (m1, m2) {
	            var /** @type {?} */ m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        /**
	         * @param {?} m1
	         * @param {?} m2
	         * @return {?}
	         */
	        StringMapWrapper.equals = function (m1, m2) {
	            var /** @type {?} */ k1 = Object.keys(m1);
	            var /** @type {?} */ k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var /** @type {?} */ i = 0; i < k1.length; i++) {
	                var /** @type {?} */ key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        /**
	         * @param {?} arr
	         * @param {?} condition
	         * @return {?}
	         */
	        ListWrapper.findLast = function (arr, condition) {
	            for (var /** @type {?} */ i = arr.length - 1; i >= 0; i--) {
	                if (condition(arr[i])) {
	                    return arr[i];
	                }
	            }
	            return null;
	        };
	        /**
	         * @param {?} list
	         * @param {?} items
	         * @return {?}
	         */
	        ListWrapper.removeAll = function (list, items) {
	            for (var /** @type {?} */ i = 0; i < items.length; ++i) {
	                var /** @type {?} */ index = list.indexOf(items[i]);
	                if (index > -1) {
	                    list.splice(index, 1);
	                }
	            }
	        };
	        /**
	         * @param {?} list
	         * @param {?} el
	         * @return {?}
	         */
	        ListWrapper.remove = function (list, el) {
	            var /** @type {?} */ index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        /**
	         * @param {?} a
	         * @param {?} b
	         * @return {?}
	         */
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var /** @type {?} */ i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        /**
	         * @param {?} list
	         * @return {?}
	         */
	        ListWrapper.flatten = function (list) {
	            return list.reduce(function (flat, item) {
	                var /** @type {?} */ flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
	                return ((flat)).concat(flatItem);
	            }, []);
	        };
	        return ListWrapper;
	    }());
	
	    var /** @type {?} */ isPromise = _angular_core.__core_private__.isPromise;
	    var /** @type {?} */ isObservable = _angular_core.__core_private__.isObservable;
	
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    function isEmptyInputValue(value) {
	        // we don't check for string here so it also works with arrays
	        return value == null || value.length === 0;
	    }
	    /**
	     * Providers for validators to be used for {@link FormControl}s in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * ### Example
	     *
	     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	     * @stable
	     */
	    var /** @type {?} */ NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
	    /**
	     * Providers for asynchronous validators to be used for {@link FormControl}s
	     * in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * See {@link NG_VALIDATORS} for more details.
	     *
	     * @stable
	     */
	    var /** @type {?} */ NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
	    /**
	     * Provides a set of validators used by form controls.
	     *
	     * A validator is a function that processes a {\@link FormControl} or collection of
	     * controls and returns a map of errors. A null map means that validation has passed.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * var loginControl = new FormControl("", Validators.required)
	     * ```
	     *
	     * \@stable
	     */
	    var Validators = (function () {
	        function Validators() {
	        }
	        /**
	         * Validator that requires controls to have a non-empty value.
	         * @param {?} control
	         * @return {?}
	         */
	        Validators.required = function (control) {
	            return isEmptyInputValue(control.value) ? { 'required': true } : null;
	        };
	        /**
	         * Validator that requires control value to be true.
	         * @param {?} control
	         * @return {?}
	         */
	        Validators.requiredTrue = function (control) {
	            return control.value === true ? null : { 'required': true };
	        };
	        /**
	         * Validator that requires controls to have a value of a minimum length.
	         * @param {?} minLength
	         * @return {?}
	         */
	        Validators.minLength = function (minLength) {
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var /** @type {?} */ length = control.value ? control.value.length : 0;
	                return length < minLength ?
	                    { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires controls to have a value of a maximum length.
	         * @param {?} maxLength
	         * @return {?}
	         */
	        Validators.maxLength = function (maxLength) {
	            return function (control) {
	                var /** @type {?} */ length = control.value ? control.value.length : 0;
	                return length > maxLength ?
	                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires a control to match a regex to its value.
	         * @param {?} pattern
	         * @return {?}
	         */
	        Validators.pattern = function (pattern) {
	            if (!pattern)
	                return Validators.nullValidator;
	            var /** @type {?} */ regex;
	            var /** @type {?} */ regexStr;
	            if (typeof pattern === 'string') {
	                regexStr = "^" + pattern + "$";
	                regex = new RegExp(regexStr);
	            }
	            else {
	                regexStr = pattern.toString();
	                regex = pattern;
	            }
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var /** @type {?} */ value = control.value;
	                return regex.test(value) ? null :
	                    { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
	            };
	        };
	        /**
	         * No-op validator.
	         * @param {?} c
	         * @return {?}
	         */
	        Validators.nullValidator = function (c) { return null; };
	        /**
	         * Compose multiple validators into a single function that returns the union
	         * of the individual error maps.
	         * @param {?} validators
	         * @return {?}
	         */
	        Validators.compose = function (validators) {
	            if (!validators)
	                return null;
	            var /** @type {?} */ presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                return _mergeErrors(_executeValidators(control, presentValidators));
	            };
	        };
	        /**
	         * @param {?} validators
	         * @return {?}
	         */
	        Validators.composeAsync = function (validators) {
	            if (!validators)
	                return null;
	            var /** @type {?} */ presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                var /** @type {?} */ promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	                return Promise.all(promises).then(_mergeErrors);
	            };
	        };
	        return Validators;
	    }());
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function _convertToPromise(obj) {
	        return isPromise(obj) ? obj : rxjs_operator_toPromise.toPromise.call(obj);
	    }
	    /**
	     * @param {?} control
	     * @param {?} validators
	     * @return {?}
	     */
	    function _executeValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    /**
	     * @param {?} control
	     * @param {?} validators
	     * @return {?}
	     */
	    function _executeAsyncValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    /**
	     * @param {?} arrayOfErrors
	     * @return {?}
	     */
	    function _mergeErrors(arrayOfErrors) {
	        var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
	            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
	        }, {});
	        return Object.keys(res).length === 0 ? null : res;
	    }
	
	    /**
	     * Used to provide a {@link ControlValueAccessor} for form controls.
	     *
	     * See {@link DefaultValueAccessor} for how to implement one.
	     * @stable
	     */
	    var /** @type {?} */ NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');
	
	    var /** @type {?} */ CHECKBOX_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
	        multi: true,
	    };
	    /**
	     * The accessor for writing a value and listening to changes on a checkbox input element.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="checkbox" name="rememberLogin" ngModel>
	     *  ```
	     *
	     *  \@stable
	     */
	    var CheckboxControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function CheckboxControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        CheckboxControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                        providers: [CHECKBOX_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return CheckboxControlValueAccessor;
	    }());
	
	    var /** @type {?} */ DEFAULT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The default accessor for writing a value and listening to changes that is used by the
	     * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="text" name="searchQuery" ngModel>
	     *  ```
	     *
	     *  \@stable
	     */
	    var DefaultValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function DefaultValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.writeValue = function (value) {
	            var /** @type {?} */ normalizedValue = value == null ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        DefaultValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                        // TODO: vsavkin replace the above selector with the one below it once
	                        // https://github.com/angular/angular/issues/3011 is implemented
	                        // selector: '[ngControl],[ngModel],[ngFormControl]',
	                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [DEFAULT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        DefaultValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return DefaultValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * @param {?} validator
	     * @return {?}
	     */
	    function normalizeValidator(validator) {
	        if (((validator)).validate) {
	            return function (c) { return ((validator)).validate(c); };
	        }
	        else {
	            return (validator);
	        }
	    }
	    /**
	     * @param {?} validator
	     * @return {?}
	     */
	    function normalizeAsyncValidator(validator) {
	        if (((validator)).validate) {
	            return function (c) { return ((validator)).validate(c); };
	        }
	        else {
	            return (validator);
	        }
	    }
	
	    var /** @type {?} */ NUMBER_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a number value and listening to changes that is used by the
	     * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="number" [(ngModel)]="age">
	     *  ```
	     */
	    var NumberValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function NumberValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.writeValue = function (value) {
	            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	            var /** @type {?} */ normalizedValue = value == null ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        NumberValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [NUMBER_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        NumberValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return NumberValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @return {?}
	     */
	    function unimplemented() {
	        throw new Error('unimplemented');
	    }
	    /**
	     * A base class that all control directive extend.
	     * It binds a {\@link FormControl} object to a DOM element.
	     *
	     * Used internally by Angular forms.
	     *
	     * \@stable
	     * @abstract
	     */
	    var NgControl = (function (_super) {
	        __extends$2(NgControl, _super);
	        function NgControl() {
	            _super.apply(this, arguments);
	            /** @internal */
	            this._parent = null;
	            this.name = null;
	            this.valueAccessor = null;
	            /** @internal */
	            this._rawValidators = [];
	            /** @internal */
	            this._rawAsyncValidators = [];
	        }
	        Object.defineProperty(NgControl.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return (unimplemented()); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgControl.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return (unimplemented()); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @abstract
	         * @param {?} newValue
	         * @return {?}
	         */
	        NgControl.prototype.viewToModelUpdate = function (newValue) { };
	        return NgControl;
	    }(AbstractControlDirective));
	
	    var /** @type {?} */ RADIO_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * Internal class used by Angular to uncheck radio buttons with the matching name.
	     */
	    var RadioControlRegistry = (function () {
	        function RadioControlRegistry() {
	            this._accessors = [];
	        }
	        /**
	         * @param {?} control
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype.add = function (control, accessor) {
	            this._accessors.push([control, accessor]);
	        };
	        /**
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype.remove = function (accessor) {
	            for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
	                if (this._accessors[i][1] === accessor) {
	                    this._accessors.splice(i, 1);
	                    return;
	                }
	            }
	        };
	        /**
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype.select = function (accessor) {
	            var _this = this;
	            this._accessors.forEach(function (c) {
	                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                    c[1].fireUncheck(accessor.value);
	                }
	            });
	        };
	        /**
	         * @param {?} controlPair
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	            if (!controlPair[0].control)
	                return false;
	            return controlPair[0]._parent === accessor._control._parent &&
	                controlPair[1].name === accessor.name;
	        };
	        RadioControlRegistry.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        RadioControlRegistry.ctorParameters = function () { return []; };
	        return RadioControlRegistry;
	    }());
	    /**
	     * \@whatItDoes Writes radio control values and listens to radio control changes.
	     *
	     * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
	     * to keep the view synced with the {\@link FormControl} model.
	     *
	     * \@howToUse
	     *
	     * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
	     * value accessor will be active on any radio control that has a form directive. You do
	     * **not** need to add a special selector to activate it.
	     *
	     * ### How to use radio buttons with form directives
	     *
	     * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
	     * in the same group have the same `name` attribute.  Radio buttons with different `name`
	     * attributes do not affect each other.
	     *
	     * {\@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
	     *
	     * When using radio buttons in a reactive form, radio buttons in the same group should have the
	     * same `formControlName`. You can also add a `name` attribute, but it's optional.
	     *
	     * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
	     *
	     *  * **npm package**: `\@angular/forms`
	     *
	     *  \@stable
	     */
	    var RadioControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         * @param {?} _registry
	         * @param {?} _injector
	         */
	        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this._registry = _registry;
	            this._injector = _injector;
	            this.onChange = function () { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.ngOnInit = function () {
	            this._control = this._injector.get(NgControl);
	            this._checkName();
	            this._registry.add(this._control, this);
	        };
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.writeValue = function (value) {
	            this._state = value === this.value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this._fn = fn;
	            this.onChange = function () {
	                fn(_this.value);
	                _this._registry.select(_this);
	            };
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype._checkName = function () {
	            if (this.name && this.formControlName && this.name !== this.formControlName) {
	                this._throwNameError();
	            }
	            if (!this.name && this.formControlName)
	                this.name = this.formControlName;
	        };
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype._throwNameError = function () {
	            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	        };
	        RadioControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                        providers: [RADIO_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RadioControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	            { type: RadioControlRegistry, },
	            { type: _angular_core.Injector, },
	        ]; };
	        RadioControlValueAccessor.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'formControlName': [{ type: _angular_core.Input },],
	            'value': [{ type: _angular_core.Input },],
	        };
	        return RadioControlValueAccessor;
	    }());
	
	    var /** @type {?} */ RANGE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RangeValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a range value and listening to changes that is used by the
	     * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="range" [(ngModel)]="age" >
	     *  ```
	     */
	    var RangeValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function RangeValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        RangeValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [RANGE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RangeValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return RangeValueAccessor;
	    }());
	
	    var /** @type {?} */ SELECT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * @param {?} id
	     * @param {?} value
	     * @return {?}
	     */
	    function _buildValueString(id, value) {
	        if (id == null)
	            return "" + value;
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    /**
	     * @param {?} valueString
	     * @return {?}
	     */
	    function _extractId(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * \@whatItDoes Writes values and listens to changes on a select element.
	     *
	     * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
	     * to keep the view synced with the {\@link FormControl} model.
	     *
	     * \@howToUse
	     *
	     * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
	     * value accessor will be active on any select control that has a form directive. You do
	     * **not** need to add a special selector to activate it.
	     *
	     * ### How to use select controls with form directives
	     *
	     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
	     * attribute to the main `<select>` tag.
	     *
	     * If your option values are simple strings, you can bind to the normal `value` property
	     * on the option.  If your option values happen to be objects (and you'd like to save the
	     * selection in your form as an object), use `ngValue` instead:
	     *
	     * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
	     *
	     * In reactive forms, you'll also want to add your form directive (`formControlName` or
	     * `formControl`) on the main `<select>` tag. Like in the former example, you have the
	     * choice of binding to the  `value` or `ngValue` property on the select's options.
	     *
	     * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
	     *
	     * Note: We listen to the 'change' event because 'input' events aren't fired
	     * for selects in Firefox and IE:
	     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
	     *
	     * * **npm package**: `\@angular/forms`
	     *
	     * \@stable
	     */
	    var SelectControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function SelectControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.writeValue = function (value) {
	            this.value = value;
	            var /** @type {?} */ id = this._getOptionId(value);
	            if (id == null) {
	                this._renderer.setElementProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
	            }
	            var /** @type {?} */ valueString = _buildValueString(id, value);
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (valueString) {
	                _this.value = valueString;
	                fn(_this._getOptionValue(valueString));
	            };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /**
	         * \@internal
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	        /**
	         * \@internal
	         * @param {?} value
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id), value))
	                    return id;
	            }
	            return null;
	        };
	        /**
	         * \@internal
	         * @param {?} valueString
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var /** @type {?} */ id = _extractId(valueString);
	            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
	        };
	        SelectControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return SelectControlValueAccessor;
	    }());
	    /**
	     * \@whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * \@howToUse
	     *
	     * See docs for {\@link SelectControlValueAccessor} for usage examples.
	     *
	     * \@stable
	     */
	    var NgSelectOption = (function () {
	        /**
	         * @param {?} _element
	         * @param {?} _renderer
	         * @param {?} _select
	         */
	        function NgSelectOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (this._select)
	                this.id = this._select._registerOption();
	        }
	        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._select._optionMap.set(this.id, value);
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectOption.prototype, "value", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                this._setElementValue(value);
	                if (this._select)
	                    this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * \@internal
	         * @param {?} value
	         * @return {?}
	         */
	        NgSelectOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /**
	         * @return {?}
	         */
	        NgSelectOption.prototype.ngOnDestroy = function () {
	            if (this._select) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectOption.ctorParameters = function () { return [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ]; };
	        NgSelectOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectOption;
	    }());
	
	    var /** @type {?} */ SELECT_MULTIPLE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * @param {?} id
	     * @param {?} value
	     * @return {?}
	     */
	    function _buildValueString$1(id, value) {
	        if (id == null)
	            return "" + value;
	        if (typeof value === 'string')
	            value = "'" + value + "'";
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    /**
	     * @param {?} valueString
	     * @return {?}
	     */
	    function _extractId$1(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * The accessor for writing a value and listening to changes on a select element.
	     *
	     * \@stable
	     */
	    var SelectMultipleControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	            var _this = this;
	            this.value = value;
	            var /** @type {?} */ optionSelectedStateSetter;
	            if (Array.isArray(value)) {
	                // convert values to ids
	                var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
	                optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
	            }
	            else {
	                optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
	            }
	            this._optionMap.forEach(optionSelectedStateSetter);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (_) {
	                var /** @type {?} */ selected = [];
	                if (_.hasOwnProperty('selectedOptions')) {
	                    var /** @type {?} */ options = _.selectedOptions;
	                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
	                        var /** @type {?} */ opt = options.item(i);
	                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	                else {
	                    var /** @type {?} */ options = (_.options);
	                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
	                        var /** @type {?} */ opt = options.item(i);
	                        if (opt.selected) {
	                            var /** @type {?} */ val = _this._getOptionValue(opt.value);
	                            selected.push(val);
	                        }
	                    }
	                }
	                _this.value = selected;
	                fn(selected);
	            };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /**
	         * \@internal
	         * @param {?} value
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	            var /** @type {?} */ id = (this._idCounter++).toString();
	            this._optionMap.set(id, value);
	            return id;
	        };
	        /**
	         * \@internal
	         * @param {?} value
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id)._value, value))
	                    return id;
	            }
	            return null;
	        };
	        /**
	         * \@internal
	         * @param {?} valueString
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var /** @type {?} */ id = _extractId$1(valueString);
	            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
	        };
	        SelectMultipleControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectMultipleControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return SelectMultipleControlValueAccessor;
	    }());
	    /**
	     * Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * ### Example
	     *
	     * ```
	     * <select multiple name="city" ngModel>
	     *   <option *ngFor="let c of cities" [value]="c"></option>
	     * </select>
	     * ```
	     */
	    var NgSelectMultipleOption = (function () {
	        /**
	         * @param {?} _element
	         * @param {?} _renderer
	         * @param {?} _select
	         */
	        function NgSelectMultipleOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (this._select) {
	                this.id = this._select._registerOption(this);
	            }
	        }
	        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._value = value;
	                this._setElementValue(_buildValueString$1(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                if (this._select) {
	                    this._value = value;
	                    this._setElementValue(_buildValueString$1(this.id, value));
	                    this._select.writeValue(this._select.value);
	                }
	                else {
	                    this._setElementValue(value);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * \@internal
	         * @param {?} value
	         * @return {?}
	         */
	        NgSelectMultipleOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /**
	         * \@internal
	         * @param {?} selected
	         * @return {?}
	         */
	        NgSelectMultipleOption.prototype._setSelected = function (selected) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	        };
	        /**
	         * @return {?}
	         */
	        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	            if (this._select) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectMultipleOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectMultipleOption.ctorParameters = function () { return [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ]; };
	        NgSelectMultipleOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectMultipleOption;
	    }());
	
	    /**
	     * @param {?} name
	     * @param {?} parent
	     * @return {?}
	     */
	    function controlPath(name, parent) {
	        return parent.path.concat([name]);
	    }
	    /**
	     * @param {?} control
	     * @param {?} dir
	     * @return {?}
	     */
	    function setUpControl(control, dir) {
	        if (!control)
	            _throwError(dir, 'Cannot find control with');
	        if (!dir.valueAccessor)
	            _throwError(dir, 'No value accessor for form control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	        dir.valueAccessor.writeValue(control.value);
	        // view -> model
	        dir.valueAccessor.registerOnChange(function (newValue) {
	            dir.viewToModelUpdate(newValue);
	            control.markAsDirty();
	            control.setValue(newValue, { emitModelToViewChange: false });
	        });
	        // touched
	        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	        control.registerOnChange(function (newValue, emitModelEvent) {
	            // control -> view
	            dir.valueAccessor.writeValue(newValue);
	            // control -> ngModel
	            if (emitModelEvent)
	                dir.viewToModelUpdate(newValue);
	        });
	        if (dir.valueAccessor.setDisabledState) {
	            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
	        }
	        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
	        dir._rawValidators.forEach(function (validator) {
	            if (((validator)).registerOnValidatorChange)
	                ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (((validator)).registerOnValidatorChange)
	                ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	    }
	    /**
	     * @param {?} control
	     * @param {?} dir
	     * @return {?}
	     */
	    function cleanUpControl(control, dir) {
	        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
	        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
	        dir._rawValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange) {
	                validator.registerOnValidatorChange(null);
	            }
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange) {
	                validator.registerOnValidatorChange(null);
	            }
	        });
	        if (control)
	            control._clearChangeFns();
	    }
	    /**
	     * @param {?} control
	     * @param {?} dir
	     * @return {?}
	     */
	    function setUpFormContainer(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    }
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    function _noControlError(dir) {
	        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
	    }
	    /**
	     * @param {?} dir
	     * @param {?} message
	     * @return {?}
	     */
	    function _throwError(dir, message) {
	        var /** @type {?} */ messageEnd;
	        if (dir.path.length > 1) {
	            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	        }
	        else if (dir.path[0]) {
	            messageEnd = "name: '" + dir.path + "'";
	        }
	        else {
	            messageEnd = 'unspecified name attribute';
	        }
	        throw new Error(message + " " + messageEnd);
	    }
	    /**
	     * @param {?} validators
	     * @return {?}
	     */
	    function composeValidators(validators) {
	        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
	    }
	    /**
	     * @param {?} validators
	     * @return {?}
	     */
	    function composeAsyncValidators(validators) {
	        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
	            null;
	    }
	    /**
	     * @param {?} changes
	     * @param {?} viewModel
	     * @return {?}
	     */
	    function isPropertyUpdated(changes, viewModel) {
	        if (!changes.hasOwnProperty('model'))
	            return false;
	        var /** @type {?} */ change = changes['model'];
	        if (change.isFirstChange())
	            return true;
	        return !looseIdentical(viewModel, change.currentValue);
	    }
	    var /** @type {?} */ BUILTIN_ACCESSORS = [
	        CheckboxControlValueAccessor,
	        RangeValueAccessor,
	        NumberValueAccessor,
	        SelectControlValueAccessor,
	        SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor,
	    ];
	    /**
	     * @param {?} valueAccessor
	     * @return {?}
	     */
	    function isBuiltInAccessor(valueAccessor) {
	        return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
	    }
	    /**
	     * @param {?} dir
	     * @param {?} valueAccessors
	     * @return {?}
	     */
	    function selectValueAccessor(dir, valueAccessors) {
	        if (!valueAccessors)
	            return null;
	        var /** @type {?} */ defaultAccessor;
	        var /** @type {?} */ builtinAccessor;
	        var /** @type {?} */ customAccessor;
	        valueAccessors.forEach(function (v) {
	            if (v.constructor === DefaultValueAccessor) {
	                defaultAccessor = v;
	            }
	            else if (isBuiltInAccessor(v)) {
	                if (builtinAccessor)
	                    _throwError(dir, 'More than one built-in value accessor matches form control with');
	                builtinAccessor = v;
	            }
	            else {
	                if (customAccessor)
	                    _throwError(dir, 'More than one custom value accessor matches form control with');
	                customAccessor = v;
	            }
	        });
	        if (customAccessor)
	            return customAccessor;
	        if (builtinAccessor)
	            return builtinAccessor;
	        if (defaultAccessor)
	            return defaultAccessor;
	        _throwError(dir, 'No valid value accessor for form control with');
	        return null;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * This is a base class for code shared between {\@link NgModelGroup} and {\@link FormGroupName}.
	     *
	     * \@stable
	     */
	    var AbstractFormGroupDirective = (function (_super) {
	        __extends(AbstractFormGroupDirective, _super);
	        function AbstractFormGroupDirective() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @return {?}
	         */
	        AbstractFormGroupDirective.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormGroup(this);
	        };
	        /**
	         * @return {?}
	         */
	        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormGroup(this);
	            }
	        };
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	            /**
	             * Get the {\@link FormGroup} backing this binding.
	             * @return {?}
	             */
	            get: function () { return this.formDirective.getFormGroup(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	            /**
	             * Get the path to this control group.
	             * @return {?}
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	            /**
	             * Get the {\@link Form} to which this group belongs.
	             * @return {?}
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * \@internal
	         * @return {?}
	         */
	        AbstractFormGroupDirective.prototype._checkParentType = function () { };
	        return AbstractFormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var AbstractControlStatus = (function () {
	        /**
	         * @param {?} cd
	         */
	        function AbstractControlStatus(cd) {
	            this._cd = cd;
	        }
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.untouched : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.touched : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.pristine : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.dirty : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.valid : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.invalid : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.pending : false; },
	            enumerable: true,
	            configurable: true
	        });
	        return AbstractControlStatus;
	    }());
	    var /** @type {?} */ ngControlStatusHost = {
	        '[class.ng-untouched]': 'ngClassUntouched',
	        '[class.ng-touched]': 'ngClassTouched',
	        '[class.ng-pristine]': 'ngClassPristine',
	        '[class.ng-dirty]': 'ngClassDirty',
	        '[class.ng-valid]': 'ngClassValid',
	        '[class.ng-invalid]': 'ngClassInvalid',
	        '[class.ng-pending]': 'ngClassPending',
	    };
	    /**
	     * Directive automatically applied to Angular form controls that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * \@stable
	     */
	    var NgControlStatus = (function (_super) {
	        __extends$3(NgControlStatus, _super);
	        /**
	         * @param {?} cd
	         */
	        function NgControlStatus(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatus.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
	        ];
	        /** @nocollapse */
	        NgControlStatus.ctorParameters = function () { return [
	            { type: NgControl, decorators: [{ type: _angular_core.Self },] },
	        ]; };
	        return NgControlStatus;
	    }(AbstractControlStatus));
	    /**
	     * Directive automatically applied to Angular form groups that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * \@stable
	     */
	    var NgControlStatusGroup = (function (_super) {
	        __extends$3(NgControlStatusGroup, _super);
	        /**
	         * @param {?} cd
	         */
	        function NgControlStatusGroup(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatusGroup.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
	                        host: ngControlStatusHost
	                    },] },
	        ];
	        /** @nocollapse */
	        NgControlStatusGroup.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
	        ]; };
	        return NgControlStatusGroup;
	    }(AbstractControlStatus));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Use by directives and components to emit custom Events.
	     *
	     * ### Examples
	     *
	     * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	     * title gets clicked:
	     *
	     * ```
	     * \@Component({
	     *   selector: 'zippy',
	     *   template: `
	     *   <div class="zippy">
	     *     <div (click)="toggle()">Toggle</div>
	     *     <div [hidden]="!visible">
	     *       <ng-content></ng-content>
	     *     </div>
	     *  </div>`})
	     * export class Zippy {
	     *   visible: boolean = true;
	     *   \@Output() open: EventEmitter<any> = new EventEmitter();
	     *   \@Output() close: EventEmitter<any> = new EventEmitter();
	     *
	     *   toggle() {
	     *     this.visible = !this.visible;
	     *     if (this.visible) {
	     *       this.open.emit(null);
	     *     } else {
	     *       this.close.emit(null);
	     *     }
	     *   }
	     * }
	     * ```
	     *
	     * The events payload can be accessed by the parameter `$event` on the components output event
	     * handler:
	     *
	     * ```
	     * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	     * ```
	     *
	     * Uses Rx.Observable but provides an adapter to make it work as specified here:
	     * https://github.com/jhusain/observable-spec
	     *
	     * Once a reference implementation of the spec is available, switch to it.
	     * \@stable
	     */
	    var EventEmitter = (function (_super) {
	        __extends$5(EventEmitter, _super);
	        /**
	         * Creates an instance of [EventEmitter], which depending on [isAsync],
	         * delivers events synchronously or asynchronously.
	         * @param {?=} isAsync
	         */
	        function EventEmitter(isAsync) {
	            if (isAsync === void 0) { isAsync = false; }
	            _super.call(this);
	            this.__isAsync = isAsync;
	        }
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	        /**
	         * @param {?=} generatorOrNext
	         * @param {?=} error
	         * @param {?=} complete
	         * @return {?}
	         */
	        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	            var /** @type {?} */ schedulerFn;
	            var /** @type {?} */ errorFn = function (err) { return null; };
	            var /** @type {?} */ completeFn = function () { return null; };
	            if (generatorOrNext && typeof generatorOrNext === 'object') {
	                schedulerFn = this.__isAsync ? function (value) {
	                    setTimeout(function () { return generatorOrNext.next(value); });
	                } : function (value) { generatorOrNext.next(value); };
	                if (generatorOrNext.error) {
	                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                        function (err) { generatorOrNext.error(err); };
	                }
	                if (generatorOrNext.complete) {
	                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                        function () { generatorOrNext.complete(); };
	                }
	            }
	            else {
	                schedulerFn = this.__isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                    function (value) { generatorOrNext(value); };
	                if (error) {
	                    errorFn =
	                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	                }
	                if (complete) {
	                    completeFn =
	                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	                }
	            }
	            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	        };
	        return EventEmitter;
	    }(rxjs_Subject.Subject));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	     */
	    var /** @type {?} */ VALID = 'VALID';
	    /**
	     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	     */
	    var /** @type {?} */ INVALID = 'INVALID';
	    /**
	     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	     * errors are not yet available for the input value.
	     */
	    var /** @type {?} */ PENDING = 'PENDING';
	    /**
	     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
	     * calculations of validity or value.
	     */
	    var /** @type {?} */ DISABLED = 'DISABLED';
	    /**
	     * @param {?} control
	     * @param {?} path
	     * @param {?} delimiter
	     * @return {?}
	     */
	    function _find(control, path, delimiter) {
	        if (path == null)
	            return null;
	        if (!(path instanceof Array)) {
	            path = ((path)).split(delimiter);
	        }
	        if (path instanceof Array && (path.length === 0))
	            return null;
	        return ((path)).reduce(function (v, name) {
	            if (v instanceof FormGroup) {
	                return v.controls[name] || null;
	            }
	            if (v instanceof FormArray) {
	                return v.at(/** @type {?} */ (name)) || null;
	            }
	            return null;
	        }, control);
	    }
	    /**
	     * @param {?} r
	     * @return {?}
	     */
	    function toObservable(r) {
	        return isPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
	    }
	    /**
	     * @param {?} validator
	     * @return {?}
	     */
	    function coerceToValidator(validator) {
	        return Array.isArray(validator) ? composeValidators(validator) : validator;
	    }
	    /**
	     * @param {?} asyncValidator
	     * @return {?}
	     */
	    function coerceToAsyncValidator(asyncValidator) {
	        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
	    }
	    /**
	     * \@whatItDoes This is the base class for {\@link FormControl}, {\@link FormGroup}, and
	     * {\@link FormArray}.
	     *
	     * It provides some of the shared behavior that all controls and groups of controls have, like
	     * running validators, calculating status, and resetting state. It also defines the properties
	     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
	     * instantiated directly.
	     *
	     * \@stable
	     * @abstract
	     */
	    var AbstractControl = (function () {
	        /**
	         * @param {?} validator
	         * @param {?} asyncValidator
	         */
	        function AbstractControl(validator, asyncValidator) {
	            this.validator = validator;
	            this.asyncValidator = asyncValidator;
	            /** @internal */
	            this._onCollectionChange = function () { };
	            this._pristine = true;
	            this._touched = false;
	            /** @internal */
	            this._onDisabledChange = [];
	        }
	        Object.defineProperty(AbstractControl.prototype, "value", {
	            /**
	             * The value of the control.
	             * @return {?}
	             */
	            get: function () { return this._value; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "parent", {
	            /**
	             * The parent control.
	             * @return {?}
	             */
	            get: function () { return this._parent; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "status", {
	            /**
	             * The validation status of the control. There are four possible
	             * validation statuses:
	             *
	             * * **VALID**:  control has passed all validation checks
	             * * **INVALID**: control has failed at least one validation check
	             * * **PENDING**: control is in the midst of conducting a validation check
	             * * **DISABLED**: control is exempt from validation checks
	             *
	             * These statuses are mutually exclusive, so a control cannot be
	             * both valid AND invalid or invalid AND disabled.
	             * @return {?}
	             */
	            get: function () { return this._status; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valid", {
	            /**
	             * A control is `valid` when its `status === VALID`.
	             *
	             * In order to have this status, the control must have passed all its
	             * validation checks.
	             * @return {?}
	             */
	            get: function () { return this._status === VALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "invalid", {
	            /**
	             * A control is `invalid` when its `status === INVALID`.
	             *
	             * In order to have this status, the control must have failed
	             * at least one of its validation checks.
	             * @return {?}
	             */
	            get: function () { return this._status === INVALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pending", {
	            /**
	             * A control is `pending` when its `status === PENDING`.
	             *
	             * In order to have this status, the control must be in the
	             * middle of conducting a validation check.
	             * @return {?}
	             */
	            get: function () { return this._status == PENDING; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "disabled", {
	            /**
	             * A control is `disabled` when its `status === DISABLED`.
	             *
	             * Disabled controls are exempt from validation checks and
	             * are not included in the aggregate value of their ancestor
	             * controls.
	             * @return {?}
	             */
	            get: function () { return this._status === DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "enabled", {
	            /**
	             * A control is `enabled` as long as its `status !== DISABLED`.
	             *
	             * In other words, it has a status of `VALID`, `INVALID`, or
	             * `PENDING`.
	             * @return {?}
	             */
	            get: function () { return this._status !== DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "errors", {
	            /**
	             * Returns any errors generated by failing validation. If there
	             * are no errors, it will return null.
	             * @return {?}
	             */
	            get: function () { return this._errors; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pristine", {
	            /**
	             * A control is `pristine` if the user has not yet changed
	             * the value in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             * @return {?}
	             */
	            get: function () { return this._pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "dirty", {
	            /**
	             * A control is `dirty` if the user has changed the value
	             * in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             * @return {?}
	             */
	            get: function () { return !this.pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "touched", {
	            /**
	             * A control is marked `touched` once the user has triggered
	             * a `blur` event on it.
	             * @return {?}
	             */
	            get: function () { return this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "untouched", {
	            /**
	             * A control is `untouched` if the user has not yet triggered
	             * a `blur` event on it.
	             * @return {?}
	             */
	            get: function () { return !this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	            /**
	             * Emits an event every time the value of the control changes, in
	             * the UI or programmatically.
	             * @return {?}
	             */
	            get: function () { return this._valueChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	            /**
	             * Emits an event every time the validation status of the control
	             * is re-calculated.
	             * @return {?}
	             */
	            get: function () { return this._statusChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Sets the synchronous validators that are active on this control.  Calling
	         * this will overwrite any existing sync validators.
	         * @param {?} newValidator
	         * @return {?}
	         */
	        AbstractControl.prototype.setValidators = function (newValidator) {
	            this.validator = coerceToValidator(newValidator);
	        };
	        /**
	         * Sets the async validators that are active on this control. Calling this
	         * will overwrite any existing async validators.
	         * @param {?} newValidator
	         * @return {?}
	         */
	        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	            this.asyncValidator = coerceToAsyncValidator(newValidator);
	        };
	        /**
	         * Empties out the sync validator list.
	         * @return {?}
	         */
	        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	        /**
	         * Empties out the async validator list.
	         * @return {?}
	         */
	        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	        /**
	         * Marks the control as `touched`.
	         *
	         * This will also mark all direct ancestors as `touched` to maintain
	         * the model.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = true;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `untouched`.
	         *
	         * If the control has any children, it will also mark all children as `untouched`
	         * to maintain the model, and re-calculate the `touched` status of all parent
	         * controls.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsUntouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = false;
	            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `dirty`.
	         *
	         * This will also mark all direct ancestors as `dirty` to maintain
	         * the model.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsDirty = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = false;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsDirty({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pristine`.
	         *
	         * If the control has any children, it will also mark all children as `pristine`
	         * to maintain the model, and re-calculate the `pristine` status of all parent
	         * controls.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsPristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = true;
	            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pending`.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsPending = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._status = PENDING;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsPending({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Disables the control. This means the control will be exempt from validation checks and
	         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
	         *
	         * If the control has children, all children will be disabled to maintain the model.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.disable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = DISABLED;
	            this._errors = null;
	            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	            this._updateValue();
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
	        };
	        /**
	         * Enables the control. This means the control will be included in validation checks and
	         * the aggregate value of its parent. Its status is re-calculated based on its value and
	         * its validators.
	         *
	         * If the control has children, all children will be enabled.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.enable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = VALID;
	            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
	        };
	        /**
	         * @param {?} onlySelf
	         * @return {?}
	         */
	        AbstractControl.prototype._updateAncestors = function (onlySelf) {
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity();
	                this._parent._updatePristine();
	                this._parent._updateTouched();
	            }
	        };
	        /**
	         * @param {?} parent
	         * @return {?}
	         */
	        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	        /**
	         * Sets the value of the control. Abstract method (implemented in sub-classes).
	         * @abstract
	         * @param {?} value
	         * @param {?=} options
	         * @return {?}
	         */
	        AbstractControl.prototype.setValue = function (value, options) { };
	        /**
	         * Patches the value of the control. Abstract method (implemented in sub-classes).
	         * @abstract
	         * @param {?} value
	         * @param {?=} options
	         * @return {?}
	         */
	        AbstractControl.prototype.patchValue = function (value, options) { };
	        /**
	         * Resets the control. Abstract method (implemented in sub-classes).
	         * @abstract
	         * @param {?=} value
	         * @param {?=} options
	         * @return {?}
	         */
	        AbstractControl.prototype.reset = function (value, options) { };
	        /**
	         * Re-calculates the value and validation status of the control.
	         *
	         * By default, it will also update the value and validity of its ancestors.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.updateValueAndValidity = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._setInitialStatus();
	            this._updateValue();
	            if (this.enabled) {
	                this._errors = this._runValidator();
	                this._status = this._calculateStatus();
	                if (this._status === VALID || this._status === PENDING) {
	                    this._runAsyncValidator(emitEvent);
	                }
	            }
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            }
	        };
	        /**
	         * \@internal
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype._updateTreeValidity = function (_a) {
	            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
	            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._runValidator = function () {
	            return this.validator ? this.validator(this) : null;
	        };
	        /**
	         * @param {?} emitEvent
	         * @return {?}
	         */
	        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	            var _this = this;
	            if (this.asyncValidator) {
	                this._status = PENDING;
	                this._cancelExistingSubscription();
	                var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
	                if (!(isObservable(obs))) {
	                    throw new Error("expected the following validator to return Promise or Observable: " + this.asyncValidator + ". If you are using FormBuilder; did you forget to brace your validators in an array?");
	                }
	                this._asyncValidationSubscription =
	                    obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	            }
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._cancelExistingSubscription = function () {
	            if (this._asyncValidationSubscription) {
	                this._asyncValidationSubscription.unsubscribe();
	            }
	        };
	        /**
	         * Sets errors on a form control.
	         *
	         * This is used when validations are run manually by the user, rather than automatically.
	         *
	         * Calling `setErrors` will also update the validity of the parent control.
	         *
	         * ### Example
	         *
	         * ```
	         * const login = new FormControl("someLogin");
	         * login.setErrors({
	         *   "notUnique": true
	         * });
	         *
	         * expect(login.valid).toEqual(false);
	         * expect(login.errors).toEqual({"notUnique": true});
	         *
	         * login.setValue("someOtherLogin");
	         *
	         * expect(login.valid).toEqual(true);
	         * ```
	         * @param {?} errors
	         * @param {?=} __1
	         * @return {?}
	         */
	        AbstractControl.prototype.setErrors = function (errors, _a) {
	            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	            this._errors = errors;
	            this._updateControlsErrors(emitEvent !== false);
	        };
	        /**
	         * Retrieves a child control given the control's name or path.
	         *
	         * Paths can be passed in as an array or a string delimited by a dot.
	         *
	         * To get a control nested within a `person` sub-group:
	         *
	         * * `this.form.get('person.name');`
	         *
	         * -OR-
	         *
	         * * `this.form.get(['person', 'name']);`
	         * @param {?} path
	         * @return {?}
	         */
	        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns null or undefined.
	         *
	         * If no path is given, it checks for the error on the present control.
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControl.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            var /** @type {?} */ control = path ? this.get(path) : this;
	            return control && control._errors ? control._errors[errorCode] : null;
	        };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns false.
	         *
	         * If no path is given, it checks for the error on the present control.
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControl.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return !!this.getError(errorCode, path);
	        };
	        Object.defineProperty(AbstractControl.prototype, "root", {
	            /**
	             * Retrieves the top-level ancestor of this control.
	             * @return {?}
	             */
	            get: function () {
	                var /** @type {?} */ x = this;
	                while (x._parent) {
	                    x = x._parent;
	                }
	                return x;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * \@internal
	         * @param {?} emitEvent
	         * @return {?}
	         */
	        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	            this._status = this._calculateStatus();
	            if (emitEvent) {
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent) {
	                this._parent._updateControlsErrors(emitEvent);
	            }
	        };
	        /**
	         * \@internal
	         * @return {?}
	         */
	        AbstractControl.prototype._initObservables = function () {
	            this._valueChanges = new EventEmitter();
	            this._statusChanges = new EventEmitter();
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._calculateStatus = function () {
	            if (this._allControlsDisabled())
	                return DISABLED;
	            if (this._errors)
	                return INVALID;
	            if (this._anyControlsHaveStatus(PENDING))
	                return PENDING;
	            if (this._anyControlsHaveStatus(INVALID))
	                return INVALID;
	            return VALID;
	        };
	        /**
	         * \@internal
	         * @abstract
	         * @return {?}
	         */
	        AbstractControl.prototype._updateValue = function () { };
	        /**
	         * \@internal
	         * @abstract
	         * @param {?} cb
	         * @return {?}
	         */
	        AbstractControl.prototype._forEachChild = function (cb) { };
	        /**
	         * \@internal
	         * @abstract
	         * @param {?} condition
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControls = function (condition) { };
	        /**
	         * \@internal
	         * @abstract
	         * @return {?}
	         */
	        AbstractControl.prototype._allControlsDisabled = function () { };
	        /**
	         * \@internal
	         * @param {?} status
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	            return this._anyControls(function (control) { return control.status === status; });
	        };
	        /**
	         * \@internal
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControlsDirty = function () {
	            return this._anyControls(function (control) { return control.dirty; });
	        };
	        /**
	         * \@internal
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControlsTouched = function () {
	            return this._anyControls(function (control) { return control.touched; });
	        };
	        /**
	         * \@internal
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype._updatePristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = !this._anyControlsDirty();
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * \@internal
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype._updateTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = this._anyControlsTouched();
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * \@internal
	         * @param {?} formState
	         * @return {?}
	         */
	        AbstractControl.prototype._isBoxedValue = function (formState) {
	            return typeof formState === 'object' && formState !== null &&
	                Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
	        };
	        /**
	         * \@internal
	         * @param {?} fn
	         * @return {?}
	         */
	        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
	        return AbstractControl;
	    }());
	    /**
	     * \@whatItDoes Tracks the value and validation status of an individual form control.
	     *
	     * It is one of the three fundamental building blocks of Angular forms, along with
	     * {\@link FormGroup} and {\@link FormArray}.
	     *
	     * \@howToUse
	     *
	     * When instantiating a {\@link FormControl}, you can pass in an initial value as the
	     * first argument. Example:
	     *
	     * ```ts
	     * const ctrl = new FormControl('some value');
	     * console.log(ctrl.value);     // 'some value'
	     * ```
	     *
	     * You can also initialize the control with a form state object on instantiation,
	     * which includes both the value and whether or not the control is disabled.
	     * You can't use the value key without the disabled key; both are required
	     * to use this way of initialization.
	     *
	     * ```ts
	     * const ctrl = new FormControl({value: 'n/a', disabled: true});
	     * console.log(ctrl.value);     // 'n/a'
	     * console.log(ctrl.status);   // 'DISABLED'
	     * ```
	     *
	     * To include a sync validator (or an array of sync validators) with the control,
	     * pass it in as the second argument. Async validators are also supported, but
	     * have to be passed in separately as the third arg.
	     *
	     * ```ts
	     * const ctrl = new FormControl('', Validators.required);
	     * console.log(ctrl.value);     // ''
	     * console.log(ctrl.status);   // 'INVALID'
	     * ```
	     *
	     * See its superclass, {\@link AbstractControl}, for more properties and methods.
	     *
	     * * **npm package**: `\@angular/forms`
	     *
	     * \@stable
	     */
	    var FormControl = (function (_super) {
	        __extends$6(FormControl, _super);
	        /**
	         * @param {?=} formState
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         */
	        function FormControl(formState, validator, asyncValidator) {
	            if (formState === void 0) { formState = null; }
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	            /** @internal */
	            this._onChange = [];
	            this._applyFormState(formState);
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	            this._initObservables();
	        }
	        /**
	         * Set the value of the form control to `value`.
	         *
	         * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	         * and not its parent component. This defaults to false.
	         *
	         * If `emitEvent` is `true`, this
	         * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
	         * to true (as it falls through to `updateValueAndValidity`).
	         *
	         * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	         * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	         * specified.
	         *
	         * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	         * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormControl.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	            this._value = value;
	            if (this._onChange.length && emitModelToViewChange !== false) {
	                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange !== false); });
	            }
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * Patches the value of a control.
	         *
	         * This function is functionally the same as {\@link FormControl.setValue} at this level.
	         * It exists for symmetry with {\@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
	         * where it does behave differently.
	         * @param {?} value
	         * @param {?=} options
	         * @return {?}
	         */
	        FormControl.prototype.patchValue = function (value, options) {
	            if (options === void 0) { options = {}; }
	            this.setValue(value, options);
	        };
	        /**
	         * Resets the form control. This means by default:
	         *
	         * * it is marked as `pristine`
	         * * it is marked as `untouched`
	         * * value is set to null
	         *
	         * You can also reset to a specific form state by passing through a standalone
	         * value or a form state object that contains both a value and a disabled state
	         * (these are the only two properties that cannot be calculated).
	         *
	         * Ex:
	         *
	         * ```ts
	         * this.control.reset('Nancy');
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * ```
	         *
	         * OR
	         *
	         * ```
	         * this.control.reset({value: 'Nancy', disabled: true});
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * console.log(this.control.status);  // 'DISABLED'
	         * ```
	         * @param {?=} formState
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormControl.prototype.reset = function (formState, _a) {
	            if (formState === void 0) { formState = null; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._applyFormState(formState);
	            this.markAsPristine({ onlySelf: onlySelf });
	            this.markAsUntouched({ onlySelf: onlySelf });
	            this.setValue(this._value, { onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * \@internal
	         * @return {?}
	         */
	        FormControl.prototype._updateValue = function () { };
	        /**
	         * \@internal
	         * @param {?} condition
	         * @return {?}
	         */
	        FormControl.prototype._anyControls = function (condition) { return false; };
	        /**
	         * \@internal
	         * @return {?}
	         */
	        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
	        /**
	         * Register a listener for change events.
	         * @param {?} fn
	         * @return {?}
	         */
	        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	        /**
	         * \@internal
	         * @return {?}
	         */
	        FormControl.prototype._clearChangeFns = function () {
	            this._onChange = [];
	            this._onDisabledChange = [];
	            this._onCollectionChange = function () { };
	        };
	        /**
	         * Register a listener for disabled events.
	         * @param {?} fn
	         * @return {?}
	         */
	        FormControl.prototype.registerOnDisabledChange = function (fn) {
	            this._onDisabledChange.push(fn);
	        };
	        /**
	         * \@internal
	         * @param {?} cb
	         * @return {?}
	         */
	        FormControl.prototype._forEachChild = function (cb) { };
	        /**
	         * @param {?} formState
	         * @return {?}
	         */
	        FormControl.prototype._applyFormState = function (formState) {
	            if (this._isBoxedValue(formState)) {
	                this._value = formState.value;
	                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
	                    this.enable({ onlySelf: true, emitEvent: false });
	            }
	            else {
	                this._value = formState;
	            }
	        };
	        return FormControl;
	    }(AbstractControl));
	    /**
	     * \@whatItDoes Tracks the value and validity state of a group of {\@link FormControl}
	     * instances.
	     *
	     * A `FormGroup` aggregates the values of each child {\@link FormControl} into one object,
	     * with each control name as the key.  It calculates its status by reducing the statuses
	     * of its children. For example, if one of the controls in a group is invalid, the entire
	     * group becomes invalid.
	     *
	     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {\@link FormControl} and {\@link FormArray}.
	     *
	     * \@howToUse
	     *
	     * When instantiating a {\@link FormGroup}, pass in a collection of child controls as the first
	     * argument. The key for each child will be the name under which it is registered.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   first: new FormControl('Nancy', Validators.minLength(2)),
	     *   last: new FormControl('Drew'),
	     * });
	     *
	     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
	     * console.log(form.status);  // 'VALID'
	     * ```
	     *
	     * You can also include group-level validators as the second arg, or group-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   password: new FormControl('', Validators.minLength(2)),
	     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
	     * }, passwordMatchValidator);
	     *
	     *
	     * function passwordMatchValidator(g: FormGroup) {
	     *    return g.get('password').value === g.get('passwordConfirm').value
	     *       ? null : {'mismatch': true};
	     * }
	     * ```
	     *
	     * * **npm package**: `\@angular/forms`
	     *
	     * \@stable
	     */
	    var FormGroup = (function (_super) {
	        __extends$6(FormGroup, _super);
	        /**
	         * @param {?} controls
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         */
	        function FormGroup(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Registers a control with the group's list of controls.
	         *
	         * This method does not update value or validity of the control, so for
	         * most cases you'll want to use {\@link FormGroup.addControl} instead.
	         * @param {?} name
	         * @param {?} control
	         * @return {?}
	         */
	        FormGroup.prototype.registerControl = function (name, control) {
	            if (this.controls[name])
	                return this.controls[name];
	            this.controls[name] = control;
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	            return control;
	        };
	        /**
	         * Add a control to this group.
	         * @param {?} name
	         * @param {?} control
	         * @return {?}
	         */
	        FormGroup.prototype.addControl = function (name, control) {
	            this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove a control from this group.
	         * @param {?} name
	         * @return {?}
	         */
	        FormGroup.prototype.removeControl = function (name) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         * @param {?} name
	         * @param {?} control
	         * @return {?}
	         */
	        FormGroup.prototype.setControl = function (name, control) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            if (control)
	                this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Check whether there is an enabled control with the given name in the group.
	         *
	         * It will return false for disabled controls. If you'd like to check for
	         * existence in the group only, use {\@link AbstractControl.get} instead.
	         * @param {?} controlName
	         * @return {?}
	         */
	        FormGroup.prototype.contains = function (controlName) {
	            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
	        };
	        /**
	         *  Sets the value of the {\@link FormGroup}. It accepts an object that matches
	         *  the structure of the group, with control names as keys.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.setValue({first: 'Nancy', last: 'Drew'});
	         *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
	         *
	         *  ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormGroup.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._checkAllValuesPresent(value);
	            Object.keys(value).forEach(function (name) {
	                _this._throwIfControlMissing(name);
	                _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of the {\@link FormGroup}. It accepts an object with control
	         *  names as keys, and will do its best to match the values to the correct controls
	         *  in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the group without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.patchValue({first: 'Nancy'});
	         *  console.log(form.value);   // {first: 'Nancy', last: null}
	         *
	         *  ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormGroup.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            Object.keys(value).forEach(function (name) {
	                if (_this.controls[name]) {
	                    _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * Resets the {\@link FormGroup}. This means by default:
	         *
	         * * The group and all descendants are marked `pristine`
	         * * The group and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in a map of states
	         * that matches the structure of your form, with control names as keys. The state
	         * can be a standalone value or a form state object with both a value and a disabled
	         * status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.form.reset({first: 'name', last: 'last name'});
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.form.reset({
	         *   first: {value: 'name', disabled: true},
	         *   last: 'last'
	         * });
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * console.log(this.form.get('first').status);  // 'DISABLED'
	         * ```
	         * @param {?=} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormGroup.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = {}; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._forEachChild(function (control, name) {
	                control.reset(value[name], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the {\@link FormGroup}, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the group.
	         * @return {?}
	         */
	        FormGroup.prototype.getRawValue = function () {
	            return this._reduceChildren({}, function (acc, control, name) {
	                acc[name] = control.value;
	                return acc;
	            });
	        };
	        /**
	         * \@internal
	         * @param {?} name
	         * @return {?}
	         */
	        FormGroup.prototype._throwIfControlMissing = function (name) {
	            if (!Object.keys(this.controls).length) {
	                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.controls[name]) {
	                throw new Error("Cannot find form control with name: " + name + ".");
	            }
	        };
	        /**
	         * \@internal
	         * @param {?} cb
	         * @return {?}
	         */
	        FormGroup.prototype._forEachChild = function (cb) {
	            var _this = this;
	            Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
	        };
	        /**
	         * \@internal
	         * @return {?}
	         */
	        FormGroup.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) {
	                control.setParent(_this);
	                control._registerOnCollectionChange(_this._onCollectionChange);
	            });
	        };
	        /**
	         * \@internal
	         * @return {?}
	         */
	        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	        /**
	         * \@internal
	         * @param {?} condition
	         * @return {?}
	         */
	        FormGroup.prototype._anyControls = function (condition) {
	            var _this = this;
	            var /** @type {?} */ res = false;
	            this._forEachChild(function (control, name) {
	                res = res || (_this.contains(name) && condition(control));
	            });
	            return res;
	        };
	        /**
	         * \@internal
	         * @return {?}
	         */
	        FormGroup.prototype._reduceValue = function () {
	            var _this = this;
	            return this._reduceChildren({}, function (acc, control, name) {
	                if (control.enabled || _this.disabled) {
	                    acc[name] = control.value;
	                }
	                return acc;
	            });
	        };
	        /**
	         * \@internal
	         * @param {?} initValue
	         * @param {?} fn
	         * @return {?}
	         */
	        FormGroup.prototype._reduceChildren = function (initValue, fn) {
	            var /** @type {?} */ res = initValue;
	            this._forEachChild(function (control, name) { res = fn(res, control, name); });
	            return res;
	        };
	        /**
	         * \@internal
	         * @return {?}
	         */
	        FormGroup.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
	                var controlName = _a[_i];
	                if (this.controls[controlName].enabled) {
	                    return false;
	                }
	            }
	            return Object.keys(this.controls).length > 0 || this.disabled;
	        };
	        /**
	         * \@internal
	         * @param {?} value
	         * @return {?}
	         */
	        FormGroup.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, name) {
	                if (value[name] === undefined) {
	                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
	                }
	            });
	        };
	        return FormGroup;
	    }(AbstractControl));
	    /**
	     * \@whatItDoes Tracks the value and validity state of an array of {\@link FormControl},
	     * {\@link FormGroup} or {\@link FormArray} instances.
	     *
	     * A `FormArray` aggregates the values of each child {\@link FormControl} into an array.
	     * It calculates its status by reducing the statuses of its children. For example, if one of
	     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
	     *
	     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {\@link FormControl} and {\@link FormGroup}.
	     *
	     * \@howToUse
	     *
	     * When instantiating a {\@link FormArray}, pass in an array of child controls as the first
	     * argument.
	     *
	     * ### Example
	     *
	     * ```
	     * const arr = new FormArray([
	     *   new FormControl('Nancy', Validators.minLength(2)),
	     *   new FormControl('Drew'),
	     * ]);
	     *
	     * console.log(arr.value);   // ['Nancy', 'Drew']
	     * console.log(arr.status);  // 'VALID'
	     * ```
	     *
	     * You can also include array-level validators as the second arg, or array-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Adding or removing controls
	     *
	     * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	     * the `FormArray` directly, as that will result in strange and unexpected behavior such
	     * as broken change detection.
	     *
	     * * **npm package**: `\@angular/forms`
	     *
	     * \@stable
	     */
	    var FormArray = (function (_super) {
	        __extends$6(FormArray, _super);
	        /**
	         * @param {?} controls
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         */
	        function FormArray(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Get the {\@link AbstractControl} at the given `index` in the array.
	         * @param {?} index
	         * @return {?}
	         */
	        FormArray.prototype.at = function (index) { return this.controls[index]; };
	        /**
	         * Insert a new {\@link AbstractControl} at the end of the array.
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype.push = function (control) {
	            this.controls.push(control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Insert a new {\@link AbstractControl} at the given `index` in the array.
	         * @param {?} index
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype.insert = function (index, control) {
	            this.controls.splice(index, 0, control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove the control at the given `index` in the array.
	         * @param {?} index
	         * @return {?}
	         */
	        FormArray.prototype.removeAt = function (index) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         * @param {?} index
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype.setControl = function (index, control) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            if (control) {
	                this.controls.splice(index, 0, control);
	                this._registerControl(control);
	            }
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        Object.defineProperty(FormArray.prototype, "length", {
	            /**
	             * Length of the control array.
	             * @return {?}
	             */
	            get: function () { return this.controls.length; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the value of the {\@link FormArray}. It accepts an array that matches
	         *  the structure of the control.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.setValue(['Nancy', 'Drew']);
	         *  console.log(arr.value);   // ['Nancy', 'Drew']
	         *  ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormArray.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._checkAllValuesPresent(value);
	            value.forEach(function (newValue, index) {
	                _this._throwIfControlMissing(index);
	                _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of the {\@link FormArray}. It accepts an array that matches the
	         *  structure of the control, and will do its best to match the values to the correct
	         *  controls in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the array without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.patchValue(['Nancy']);
	         *  console.log(arr.value);   // ['Nancy', null]
	         *  ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormArray.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            value.forEach(function (newValue, index) {
	                if (_this.at(index)) {
	                    _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * Resets the {\@link FormArray}. This means by default:
	         *
	         * * The array and all descendants are marked `pristine`
	         * * The array and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in an array of states
	         * that matches the structure of the control. The state can be a standalone value
	         * or a form state object with both a value and a disabled status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.arr.reset(['name', 'last name']);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.arr.reset([
	         *   {value: 'name', disabled: true},
	         *   'last'
	         * ]);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * console.log(this.arr.get(0).status);  // 'DISABLED'
	         * ```
	         * @param {?=} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormArray.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = []; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._forEachChild(function (control, index) {
	                control.reset(value[index], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the array, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the array.
	         * @return {?}
	         */
	        FormArray.prototype.getRawValue = function () { return this.controls.map(function (control) { return control.value; }); };
	        /**
	         * \@internal
	         * @param {?} index
	         * @return {?}
	         */
	        FormArray.prototype._throwIfControlMissing = function (index) {
	            if (!this.controls.length) {
	                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.at(index)) {
	                throw new Error("Cannot find form control at index " + index);
	            }
	        };
	        /**
	         * \@internal
	         * @param {?} cb
	         * @return {?}
	         */
	        FormArray.prototype._forEachChild = function (cb) {
	            this.controls.forEach(function (control, index) { cb(control, index); });
	        };
	        /**
	         * \@internal
	         * @return {?}
	         */
	        FormArray.prototype._updateValue = function () {
	            var _this = this;
	            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
	                .map(function (control) { return control.value; });
	        };
	        /**
	         * \@internal
	         * @param {?} condition
	         * @return {?}
	         */
	        FormArray.prototype._anyControls = function (condition) {
	            return this.controls.some(function (control) { return control.enabled && condition(control); });
	        };
	        /**
	         * \@internal
	         * @return {?}
	         */
	        FormArray.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) { return _this._registerControl(control); });
	        };
	        /**
	         * \@internal
	         * @param {?} value
	         * @return {?}
	         */
	        FormArray.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, i) {
	                if (value[i] === undefined) {
	                    throw new Error("Must supply a value for form control at index: " + i + ".");
	                }
	            });
	        };
	        /**
	         * \@internal
	         * @return {?}
	         */
	        FormArray.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
	                var control = _a[_i];
	                if (control.enabled)
	                    return false;
	            }
	            return this.controls.length > 0 || this.disabled;
	        };
	        /**
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype._registerControl = function (control) {
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	        };
	        return FormArray;
	    }(AbstractControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formDirectiveProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgForm; })
	    };
	    var /** @type {?} */ resolvedPromise = Promise.resolve(null);
	    /**
	     * \@whatItDoes Creates a top-level {\@link FormGroup} instance and binds it to a form
	     * to track aggregate form value and validation status.
	     *
	     * \@howToUse
	     *
	     * As soon as you import the `FormsModule`, this directive becomes active by default on
	     * all `<form>` tags.  You don't need to add a special selector.
	     *
	     * You can export the directive into a local template variable using `ngForm` as the key
	     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
	     * {\@link FormGroup} instance are duplicated on the directive itself, so a reference to it
	     * will give you access to the aggregate value and validity status of the form, as well as
	     * user interaction properties like `dirty` and `touched`.
	     *
	     * To register child controls with the form, you'll want to use {\@link NgModel} with a
	     * `name` attribute.  You can also use {\@link NgModelGroup} if you'd like to create
	     * sub-groups within the form.
	     *
	     * You can listen to the directive's `ngSubmit` event to be notified when the user has
	     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	     * submission event.
	     *
	     * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * * **npm package**: `\@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     *  \@stable
	     */
	    var NgForm = (function (_super) {
	        __extends$4(NgForm, _super);
	        /**
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function NgForm(validators, asyncValidators) {
	            _super.call(this);
	            this._submitted = false;
	            this.ngSubmit = new EventEmitter();
	            this.form =
	                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	        }
	        Object.defineProperty(NgForm.prototype, "submitted", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "controls", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form.controls; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.addControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                dir._control = (container.registerControl(dir.name, dir.control));
	                setUpControl(dir.control, dir);
	                dir.control.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.removeControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                if (container) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.addFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                var /** @type {?} */ group = new FormGroup({});
	                setUpFormContainer(group, dir);
	                container.registerControl(dir.name, group);
	                group.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.removeFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                if (container) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @param {?} value
	         * @return {?}
	         */
	        NgForm.prototype.updateModel = function (dir, value) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ ctrl = (_this.form.get(dir.path));
	                ctrl.setValue(value);
	            });
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	        /**
	         * @param {?} $event
	         * @return {?}
	         */
	        NgForm.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        /**
	         * @return {?}
	         */
	        NgForm.prototype.onReset = function () { this.resetForm(); };
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        NgForm.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /**
	         * \@internal
	         * @param {?} path
	         * @return {?}
	         */
	        NgForm.prototype._findContainer = function (path) {
	            path.pop();
	            return path.length ? (this.form.get(path)) : this.form;
	        };
	        NgForm.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                        providers: [formDirectiveProvider],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        outputs: ['ngSubmit'],
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgForm.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        return NgForm;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var /** @type {?} */ Examples = {
	        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	    };
	
	    var TemplateDrivenErrors = (function () {
	        function TemplateDrivenErrors() {
	        }
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.modelParentException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + Examples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Examples.ngModelWithFormGroup);
	        };
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.formGroupNameException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.missingNameException = function () {
	            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	        };
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.modelGroupParentException = function () {
	            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        return TemplateDrivenErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ modelGroupProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
	    };
	    /**
	     * \@whatItDoes Creates and binds a {\@link FormGroup} instance to a DOM element.
	     *
	     * \@howToUse
	     *
	     * This directive can only be used as a child of {\@link NgForm} (or in other words,
	     * within `<form>` tags).
	     *
	     * Use this directive if you'd like to create a sub-group within a form. This can
	     * come in handy if you want to validate a sub-group of your form separately from
	     * the rest of your form, or if some values in your domain model make more sense to
	     * consume together in a nested object.
	     *
	     * Pass in the name you'd like this sub-group to have and it will become the key
	     * for the sub-group in the form's full value. You can also export the directive into
	     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
	     *
	     * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
	     *
	     * * **npm package**: `\@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     * \@stable
	     */
	    var NgModelGroup = (function (_super) {
	        __extends$8(NgModelGroup, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function NgModelGroup(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /**
	         * \@internal
	         * @return {?}
	         */
	        NgModelGroup.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelGroupParentException();
	            }
	        };
	        NgModelGroup.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
	        ];
	        /** @nocollapse */
	        NgModelGroup.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        NgModelGroup.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
	        };
	        return NgModelGroup;
	    }(AbstractFormGroupDirective));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formControlBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return NgModel; })
	    };
	    /**
	     * `ngModel` forces an additional change detection run when its inputs change:
	     * E.g.:
	     * ```
	     * <div>{{myModel.valid}}</div>
	     * <input [(ngModel)]="myValue" #myModel="ngModel">
	     * ```
	     * I.e. `ngModel` can export itself on the element and then be used in the template.
	     * Normally, this would result in expressions before the `input` that use the exported directive
	     * to have and old value as they have been
	     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
	     * detection run.
	     *
	     * Notes:
	     * - this is just one extra run no matter how many `ngModel` have been changed.
	     * - this is a general problem when using `exportAs` for directives!
	     */
	    var /** @type {?} */ resolvedPromise$1 = Promise.resolve(null);
	    /**
	     * \@whatItDoes Creates a {\@link FormControl} instance from a domain model and binds it
	     * to a form control element.
	     *
	     * The {\@link FormControl} instance will track the value, user interaction, and
	     * validation status of the control and keep the view synced with the model. If used
	     * within a parent form, the directive will also register itself with the form as a child
	     * control.
	     *
	     * \@howToUse
	     *
	     * This directive can be used by itself or as part of a larger form. All you need is the
	     * `ngModel` selector to activate it.
	     *
	     * It accepts a domain model as an optional {\@link \@Input}. If you have a one-way binding
	     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
	     * class will set the value in the view. If you have a two-way binding with `[()]` syntax
	     * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
	     * the domain model in your class as well.
	     *
	     * If you wish to inspect the properties of the associated {\@link FormControl} (like
	     * validity state), you can also export the directive into a local template variable using
	     * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
	     * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
	     * will fall through to the control anyway, so you can access them directly. You can see a
	     * full list of properties directly available in {\@link AbstractControlDirective}.
	     *
	     * The following is an example of a simple standalone control using `ngModel`:
	     *
	     * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
	     *
	     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
	     * so that the control can be registered with the parent form under that name.
	     *
	     * It's worth noting that in the context of a parent form, you often can skip one-way or
	     * two-way binding because the parent form will sync the value for you. You can access
	     * its properties by exporting it into a local template variable using `ngForm` (ex:
	     * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
	     *
	     * If you do need to populate initial values into your form, using a one-way binding for
	     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
	     * than the domain model's value on submit.
	     *
	     * Take a look at an example of using `ngModel` within a form:
	     *
	     * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * To see `ngModel` examples with different form control types, see:
	     *
	     * * Radio buttons: {\@link RadioControlValueAccessor}
	     * * Selects: {\@link SelectControlValueAccessor}
	     *
	     * **npm package**: `\@angular/forms`
	     *
	     * **NgModule**: `FormsModule`
	     *
	     *  \@stable
	     */
	    var NgModel = (function (_super) {
	        __extends$7(NgModel, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         * @param {?} valueAccessors
	         */
	        function NgModel(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            /** @internal */
	            this._control = new FormControl();
	            /** @internal */
	            this._registered = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        NgModel.prototype.ngOnChanges = function (changes) {
	            this._checkForErrors();
	            if (!this._registered)
	                this._setUpControl();
	            if ('isDisabled' in changes) {
	                this._updateDisabled(changes);
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this._updateValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	        Object.defineProperty(NgModel.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return this._parent ? controlPath(this.name, this._parent) : [this.name];
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} newValue
	         * @return {?}
	         */
	        NgModel.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._setUpControl = function () {
	            this._isStandalone() ? this._setUpStandalone() :
	                this.formDirective.addControl(this);
	            this._registered = true;
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._isStandalone = function () {
	            return !this._parent || (this.options && this.options.standalone);
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._setUpStandalone = function () {
	            setUpControl(this._control, this);
	            this._control.updateValueAndValidity({ emitEvent: false });
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._checkForErrors = function () {
	            if (!this._isStandalone()) {
	                this._checkParentType();
	            }
	            this._checkName();
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                TemplateDrivenErrors.formGroupNameException();
	            }
	            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelParentException();
	            }
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._checkName = function () {
	            if (this.options && this.options.name)
	                this.name = this.options.name;
	            if (!this._isStandalone() && !this.name) {
	                TemplateDrivenErrors.missingNameException();
	            }
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgModel.prototype._updateValue = function (value) {
	            var _this = this;
	            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	        };
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        NgModel.prototype._updateDisabled = function (changes) {
	            var _this = this;
	            var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
	            var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
	            resolvedPromise$1.then(function () {
	                if (isDisabled && !_this.control.disabled) {
	                    _this.control.disable();
	                }
	                else if (!isDisabled && _this.control.disabled) {
	                    _this.control.enable();
	                }
	            });
	        };
	        NgModel.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[ngModel]:not([formControlName]):not([formControl])',
	                        providers: [formControlBinding],
	                        exportAs: 'ngModel'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgModel.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ]; };
	        NgModel.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	        };
	        return NgModel;
	    }(NgControl));
	
	    var ReactiveErrors = (function () {
	        function ReactiveErrors() {
	        }
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.controlParentException = function () {
	            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.ngModelGroupException = function () {
	            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.missingFormException = function () {
	            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.groupParentException = function () {
	            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.arrayParentException = function () {
	            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.disabledAttrWarning = function () {
	            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
	        };
	        return ReactiveErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formControlBinding$1 = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
	    };
	    /**
	     * \@whatItDoes Syncs a standalone {\@link FormControl} instance to a form control element.
	     *
	     * In other words, this directive ensures that any values written to the {\@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {\@link FormControl} instance (view -> model).
	     *
	     * \@howToUse
	     *
	     * Use this directive if you'd like to create and manage a {\@link FormControl} instance directly.
	     * Simply create a {\@link FormControl}, save it to your component class, and pass it into the
	     * {\@link FormControlDirective}.
	     *
	     * This directive is designed to be used as a standalone control.  Unlike {\@link FormControlName},
	     * it does not require that your {\@link FormControl} instance be part of any parent
	     * {\@link FormGroup}, and it won't be registered to any {\@link FormGroupDirective} that
	     * exists above it.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {\@link FormControl} instance. See a full list of available properties in
	     * {\@link AbstractControl}.
	     *
	     * **Set the value**: You can pass in an initial value when instantiating the {\@link FormControl},
	     * or you can set it programmatically later using {\@link AbstractControl.setValue} or
	     * {\@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
	     * {\@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
	     *
	     * * **npm package**: `\@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     *  \@stable
	     */
	    var FormControlDirective = (function (_super) {
	        __extends$9(FormControlDirective, _super);
	        /**
	         * @param {?} validators
	         * @param {?} asyncValidators
	         * @param {?} valueAccessors
	         */
	        function FormControlDirective(validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this.update = new EventEmitter();
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
	            /**
	             * @param {?} isDisabled
	             * @return {?}
	             */
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormControlDirective.prototype.ngOnChanges = function (changes) {
	            if (this._isControlChanged(changes)) {
	                setUpControl(this.form, this);
	                if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                    this.valueAccessor.setDisabledState(true);
	                }
	                this.form.updateValueAndValidity({ emitEvent: false });
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.form.setValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        Object.defineProperty(FormControlDirective.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} newValue
	         * @return {?}
	         */
	        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormControlDirective.prototype._isControlChanged = function (changes) {
	            return changes.hasOwnProperty('form');
	        };
	        FormControlDirective.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
	        ];
	        /** @nocollapse */
	        FormControlDirective.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ]; };
	        FormControlDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlDirective;
	    }(NgControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$11 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formDirectiveProvider$1 = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
	    };
	    /**
	     * \@whatItDoes Binds an existing {\@link FormGroup} to a DOM element.
	     *
	     * \@howToUse
	     *
	     * This directive accepts an existing {\@link FormGroup} instance. It will then use this
	     * {\@link FormGroup} instance to match any child {\@link FormControl}, {\@link FormGroup},
	     * and {\@link FormArray} instances to child {\@link FormControlName}, {\@link FormGroupName},
	     * and {\@link FormArrayName} directives.
	     *
	     * **Set value**: You can set the form's initial value when instantiating the
	     * {\@link FormGroup}, or you can set it programmatically later using the {\@link FormGroup}'s
	     * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue} methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
	     * to the {\@link FormGroup}'s {\@link AbstractControl.valueChanges} event.  You can also listen to
	     * its {\@link AbstractControl.statusChanges} event to be notified when the validation status is
	     * re-calculated.
	     *
	     * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
	     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	     * submission event.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * **npm package**: `\@angular/forms`
	     *
	     * **NgModule**: {\@link ReactiveFormsModule}
	     *
	     *  \@stable
	     */
	    var FormGroupDirective = (function (_super) {
	        __extends$11(FormGroupDirective, _super);
	        /**
	         * @param {?} _validators
	         * @param {?} _asyncValidators
	         */
	        function FormGroupDirective(_validators, _asyncValidators) {
	            _super.call(this);
	            this._validators = _validators;
	            this._asyncValidators = _asyncValidators;
	            this._submitted = false;
	            this.directives = [];
	            this.form = null;
	            this.ngSubmit = new EventEmitter();
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormGroupDirective.prototype.ngOnChanges = function (changes) {
	            this._checkFormPresent();
	            if (changes.hasOwnProperty('form')) {
	                this._updateValidators();
	                this._updateDomValue();
	                this._updateRegistrations();
	            }
	        };
	        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.addControl = function (dir) {
	            var /** @type {?} */ ctrl = this.form.get(dir.path);
	            setUpControl(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	            this.directives.push(dir);
	            return ctrl;
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.addFormGroup = function (dir) {
	            var /** @type {?} */ ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.addFormArray = function (dir) {
	            var /** @type {?} */ ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.removeFormArray = function (dir) { };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.getFormArray = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @param {?} value
	         * @return {?}
	         */
	        FormGroupDirective.prototype.updateModel = function (dir, value) {
	            var /** @type {?} */ ctrl = (this.form.get(dir.path));
	            ctrl.setValue(value);
	        };
	        /**
	         * @param {?} $event
	         * @return {?}
	         */
	        FormGroupDirective.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        FormGroupDirective.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /**
	         * \@internal
	         * @return {?}
	         */
	        FormGroupDirective.prototype._updateDomValue = function () {
	            var _this = this;
	            this.directives.forEach(function (dir) {
	                var /** @type {?} */ newCtrl = _this.form.get(dir.path);
	                if (dir._control !== newCtrl) {
	                    cleanUpControl(dir._control, dir);
	                    if (newCtrl)
	                        setUpControl(newCtrl, dir);
	                    dir._control = newCtrl;
	                }
	            });
	            this.form._updateTreeValidity({ emitEvent: false });
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._updateRegistrations = function () {
	            var _this = this;
	            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
	            if (this._oldForm)
	                this._oldForm._registerOnCollectionChange(function () { });
	            this._oldForm = this.form;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._updateValidators = function () {
	            var /** @type {?} */ sync = composeValidators(this._validators);
	            this.form.validator = Validators.compose([this.form.validator, sync]);
	            var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._checkFormPresent = function () {
	            if (!this.form) {
	                ReactiveErrors.missingFormException();
	            }
	        };
	        FormGroupDirective.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroup]',
	                        providers: [formDirectiveProvider$1],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        FormGroupDirective.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        FormGroupDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
	            'ngSubmit': [{ type: _angular_core.Output },],
	        };
	        return FormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$12 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formGroupNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
	    };
	    /**
	     * \@whatItDoes Syncs a nested {\@link FormGroup} to a DOM element.
	     *
	     * \@howToUse
	     *
	     * This directive can only be used with a parent {\@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {\@link FormGroup} you want to link, and
	     * will look for a {\@link FormGroup} registered with that name in the parent
	     * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
	     *
	     * Nested form groups can come in handy when you want to validate a sub-group of a
	     * form separately from the rest or when you'd like to group the values of certain
	     * controls into their own nested object.
	     *
	     * **Access the group**: You can access the associated {\@link FormGroup} using the
	     * {\@link AbstractControl.get} method. Ex: `this.form.get('name')`.
	     *
	     * You can also access individual controls within the group using dot syntax.
	     * Ex: `this.form.get('name.first')`
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {\@link FormGroup}. See a full list of available properties in {\@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {\@link FormGroup}, or you can set it programmatically later using
	     * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the group, you can
	     * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
	     * {\@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
	     *
	     * * **npm package**: `\@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * \@stable
	     */
	    var FormGroupName = (function (_super) {
	        __extends$12(FormGroupName, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function FormGroupName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /**
	         * \@internal
	         * @return {?}
	         */
	        FormGroupName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.groupParentException();
	            }
	        };
	        FormGroupName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormGroupName.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        FormGroupName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
	        };
	        return FormGroupName;
	    }(AbstractFormGroupDirective));
	    var /** @type {?} */ formArrayNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
	    };
	    /**
	     * \@whatItDoes Syncs a nested {\@link FormArray} to a DOM element.
	     *
	     * \@howToUse
	     *
	     * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {\@link FormArray} you want to link, and
	     * will look for a {\@link FormArray} registered with that name in the parent
	     * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
	     *
	     * Nested form arrays can come in handy when you have a group of form controls but
	     * you're not sure how many there will be. Form arrays allow you to create new
	     * form controls dynamically.
	     *
	     * **Access the array**: You can access the associated {\@link FormArray} using the
	     * {\@link AbstractControl.get} method on the parent {\@link FormGroup}.
	     * Ex: `this.form.get('cities')`.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {\@link FormArray}. See a full list of available properties in {\@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {\@link FormArray}, or you can set the value programmatically later using the
	     * {\@link FormArray}'s {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}
	     * methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the array, you can
	     * subscribe to the {\@link FormArray}'s {\@link AbstractControl.valueChanges} event.  You can also
	     * listen to its {\@link AbstractControl.statusChanges} event to be notified when the validation
	     * status is re-calculated.
	     *
	     * **Add new controls**: You can add new controls to the {\@link FormArray} dynamically by
	     * calling its {\@link FormArray.push} method.
	     *  Ex: `this.form.get('cities').push(new FormControl());`
	     *
	     * ### Example
	     *
	     * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
	     *
	     * * **npm package**: `\@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * \@stable
	     */
	    var FormArrayName = (function (_super) {
	        __extends$12(FormArrayName, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function FormArrayName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /**
	         * @return {?}
	         */
	        FormArrayName.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormArray(this);
	        };
	        /**
	         * @return {?}
	         */
	        FormArrayName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormArray(this);
	            }
	        };
	        Object.defineProperty(FormArrayName.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.formDirective.getFormArray(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return this._parent ? (this._parent.formDirective) : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @return {?}
	         */
	        FormArrayName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.arrayParentException();
	            }
	        };
	        FormArrayName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormArrayName.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        FormArrayName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
	        };
	        return FormArrayName;
	    }(ControlContainer));
	    /**
	     * @param {?} parent
	     * @return {?}
	     */
	    function _hasInvalidParent(parent) {
	        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
	            !(parent instanceof FormArrayName);
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$10 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ controlNameBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
	    };
	    /**
	     * \@whatItDoes Syncs a {\@link FormControl} in an existing {\@link FormGroup} to a form control
	     * element by name.
	     *
	     * In other words, this directive ensures that any values written to the {\@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {\@link FormControl} instance (view -> model).
	     *
	     * \@howToUse
	     *
	     * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the {\@link FormControl} instance you want to
	     * link, and will look for a {\@link FormControl} registered with that name in the
	     * closest {\@link FormGroup} or {\@link FormArray} above it.
	     *
	     * **Access the control**: You can access the {\@link FormControl} associated with
	     * this directive by using the {\@link AbstractControl.get} method.
	     * Ex: `this.form.get('first');`
	     *
	     * **Get value**: the `value` property is always synced and available on the {\@link FormControl}.
	     * See a full list of available properties in {\@link AbstractControl}.
	     *
	     *  **Set value**: You can set an initial value for the control when instantiating the
	     *  {\@link FormControl}, or you can set it programmatically later using
	     *  {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
	     * {\@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * To see `formControlName` examples with different form control types, see:
	     *
	     * * Radio buttons: {\@link RadioControlValueAccessor}
	     * * Selects: {\@link SelectControlValueAccessor}
	     *
	     * **npm package**: `\@angular/forms`
	     *
	     * **NgModule**: {\@link ReactiveFormsModule}
	     *
	     *  \@stable
	     */
	    var FormControlName = (function (_super) {
	        __extends$10(FormControlName, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         * @param {?} valueAccessors
	         */
	        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this._added = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlName.prototype, "isDisabled", {
	            /**
	             * @param {?} isDisabled
	             * @return {?}
	             */
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormControlName.prototype.ngOnChanges = function (changes) {
	            if (!this._added)
	                this._setUpControl();
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.viewModel = this.model;
	                this.formDirective.updateModel(this, this.model);
	            }
	        };
	        /**
	         * @return {?}
	         */
	        FormControlName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeControl(this);
	            }
	        };
	        /**
	         * @param {?} newValue
	         * @return {?}
	         */
	        FormControlName.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        Object.defineProperty(FormControlName.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @return {?}
	         */
	        FormControlName.prototype._checkParentType = function () {
	            if (!(this._parent instanceof FormGroupName) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                ReactiveErrors.ngModelGroupException();
	            }
	            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
	                !(this._parent instanceof FormArrayName)) {
	                ReactiveErrors.controlParentException();
	            }
	        };
	        /**
	         * @return {?}
	         */
	        FormControlName.prototype._setUpControl = function () {
	            this._checkParentType();
	            this._control = this.formDirective.addControl(this);
	            if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                this.valueAccessor.setDisabledState(true);
	            }
	            this._added = true;
	        };
	        FormControlName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
	        ];
	        /** @nocollapse */
	        FormControlName.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ]; };
	        FormControlName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlName;
	    }(NgControl));
	
	    var __extends$13 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
	        multi: true
	    };
	    var /** @type {?} */ CHECKBOX_REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxRequiredValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `required` validator to any controls marked with the
	     * `required` attribute, via the {\@link NG_VALIDATORS} binding.
	     *
	     * ### Example
	     *
	     * ```
	     * <input name="fullName" ngModel required>
	     * ```
	     *
	     * \@stable
	     */
	    var RequiredValidator = (function () {
	        function RequiredValidator() {
	        }
	        Object.defineProperty(RequiredValidator.prototype, "required", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._required; },
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                this._required = value != null && value !== false && "" + value !== 'false';
	                if (this._onChange)
	                    this._onChange();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        RequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.required(c) : null;
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        RequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
	                        providers: [REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required ? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        RequiredValidator.ctorParameters = function () { return []; };
	        RequiredValidator.propDecorators = {
	            'required': [{ type: _angular_core.Input },],
	        };
	        return RequiredValidator;
	    }());
	    /**
	     * A Directive that adds the `required` validator to checkbox controls marked with the
	     * `required` attribute, via the {\@link NG_VALIDATORS} binding.
	     *
	     * ### Example
	     *
	     * ```
	     * <input type="checkbox" name="active" ngModel required>
	     * ```
	     *
	     * \@experimental
	     */
	    var CheckboxRequiredValidator = (function (_super) {
	        __extends$13(CheckboxRequiredValidator, _super);
	        function CheckboxRequiredValidator() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        CheckboxRequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.requiredTrue(c) : null;
	        };
	        CheckboxRequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
	                        providers: [CHECKBOX_REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required ? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxRequiredValidator.ctorParameters = function () { return []; };
	        return CheckboxRequiredValidator;
	    }(RequiredValidator));
	    /**
	     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='min'}
	     */
	    var /** @type {?} */ MIN_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {\@link MinLengthValidator} for any `formControlName`,
	     * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
	     *
	     * \@stable
	     */
	    var MinLengthValidator = (function () {
	        function MinLengthValidator() {
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        MinLengthValidator.prototype.ngOnChanges = function (changes) {
	            if ('minlength' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        MinLengthValidator.prototype.validate = function (c) {
	            return this.minlength == null ? null : this._validator(c);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        /**
	         * @return {?}
	         */
	        MinLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.minLength(parseInt(this.minlength, 10));
	        };
	        MinLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                        providers: [MIN_LENGTH_VALIDATOR],
	                        host: { '[attr.minlength]': 'minlength ? minlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MinLengthValidator.ctorParameters = function () { return []; };
	        MinLengthValidator.propDecorators = {
	            'minlength': [{ type: _angular_core.Input },],
	        };
	        return MinLengthValidator;
	    }());
	    /**
	     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='max'}
	     */
	    var /** @type {?} */ MAX_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {\@link MaxLengthValidator} for any `formControlName,
	     * `formControl`,
	     * or control with `ngModel` that also has a `maxlength` attribute.
	     *
	     * \@stable
	     */
	    var MaxLengthValidator = (function () {
	        function MaxLengthValidator() {
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
	            if ('maxlength' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        MaxLengthValidator.prototype.validate = function (c) {
	            return this.maxlength != null ? this._validator(c) : null;
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        /**
	         * @return {?}
	         */
	        MaxLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
	        };
	        MaxLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                        providers: [MAX_LENGTH_VALIDATOR],
	                        host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MaxLengthValidator.ctorParameters = function () { return []; };
	        MaxLengthValidator.propDecorators = {
	            'maxlength': [{ type: _angular_core.Input },],
	        };
	        return MaxLengthValidator;
	    }());
	    var /** @type {?} */ PATTERN_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `pattern` validator to any controls marked with the
	     * `pattern` attribute, via the {\@link NG_VALIDATORS} binding. Uses attribute value
	     * as the regex to validate Control value against.  Follows pattern attribute
	     * semantics; i.e. regex must match entire Control value.
	     *
	     * ### Example
	     *
	     * ```
	     * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
	     * ```
	     * \@stable
	     */
	    var PatternValidator = (function () {
	        function PatternValidator() {
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        PatternValidator.prototype.ngOnChanges = function (changes) {
	            if ('pattern' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        /**
	         * @return {?}
	         */
	        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
	        PatternValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                        providers: [PATTERN_VALIDATOR],
	                        host: { '[attr.pattern]': 'pattern ? pattern : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        PatternValidator.ctorParameters = function () { return []; };
	        PatternValidator.propDecorators = {
	            'pattern': [{ type: _angular_core.Input },],
	        };
	        return PatternValidator;
	    }());
	
	    /**
	     * \@whatItDoes Creates an {\@link AbstractControl} from a user-specified configuration.
	     *
	     * It is essentially syntactic sugar that shortens the `new FormGroup()`,
	     * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
	     * forms.
	     *
	     * \@howToUse
	     *
	     * To use, inject `FormBuilder` into your component class. You can then call its methods
	     * directly.
	     *
	     * {\@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
	     *
	     *  * **npm package**: `\@angular/forms`
	     *
	     *  * **NgModule**: {\@link ReactiveFormsModule}
	     *
	     * \@stable
	     */
	    var FormBuilder = (function () {
	        function FormBuilder() {
	        }
	        /**
	         * Construct a new {\@link FormGroup} with the given map of configuration.
	         * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
	         *
	         * See the {\@link FormGroup} constructor for more details.
	         * @param {?} controlsConfig
	         * @param {?=} extra
	         * @return {?}
	         */
	        FormBuilder.prototype.group = function (controlsConfig, extra) {
	            if (extra === void 0) { extra = null; }
	            var /** @type {?} */ controls = this._reduceControls(controlsConfig);
	            var /** @type {?} */ validator = isPresent(extra) ? extra['validator'] : null;
	            var /** @type {?} */ asyncValidator = isPresent(extra) ? extra['asyncValidator'] : null;
	            return new FormGroup(controls, validator, asyncValidator);
	        };
	        /**
	         * Construct a new {\@link FormControl} with the given `formState`,`validator`, and
	         * `asyncValidator`.
	         *
	         * `formState` can either be a standalone value for the form control or an object
	         * that contains both a value and a disabled status.
	         *
	         * @param {?} formState
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         * @return {?}
	         */
	        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            return new FormControl(formState, validator, asyncValidator);
	        };
	        /**
	         * Construct a {\@link FormArray} from the given `controlsConfig` array of
	         * configuration, with the given optional `validator` and `asyncValidator`.
	         * @param {?} controlsConfig
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         * @return {?}
	         */
	        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	            var _this = this;
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            var /** @type {?} */ controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	            return new FormArray(controls, validator, asyncValidator);
	        };
	        /**
	         * \@internal
	         * @param {?} controlsConfig
	         * @return {?}
	         */
	        FormBuilder.prototype._reduceControls = function (controlsConfig) {
	            var _this = this;
	            var /** @type {?} */ controls = {};
	            Object.keys(controlsConfig).forEach(function (controlName) {
	                controls[controlName] = _this._createControl(controlsConfig[controlName]);
	            });
	            return controls;
	        };
	        /**
	         * \@internal
	         * @param {?} controlConfig
	         * @return {?}
	         */
	        FormBuilder.prototype._createControl = function (controlConfig) {
	            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	                controlConfig instanceof FormArray) {
	                return controlConfig;
	            }
	            else if (Array.isArray(controlConfig)) {
	                var /** @type {?} */ value = controlConfig[0];
	                var /** @type {?} */ validator = controlConfig.length > 1 ? controlConfig[1] : null;
	                var /** @type {?} */ asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	                return this.control(value, validator, asyncValidator);
	            }
	            else {
	                return this.control(controlConfig);
	            }
	        };
	        FormBuilder.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        FormBuilder.ctorParameters = function () { return []; };
	        return FormBuilder;
	    }());
	
	    /**
	     * @stable
	     */
	    var /** @type {?} */ VERSION = new _angular_core.Version('2.4.7');
	
	    var /** @type {?} */ SHARED_FORM_DIRECTIVES = [
	        NgSelectOption,
	        NgSelectMultipleOption,
	        DefaultValueAccessor,
	        NumberValueAccessor,
	        RangeValueAccessor,
	        CheckboxControlValueAccessor,
	        SelectControlValueAccessor,
	        SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor,
	        NgControlStatus,
	        NgControlStatusGroup,
	        RequiredValidator,
	        MinLengthValidator,
	        MaxLengthValidator,
	        PatternValidator,
	        CheckboxRequiredValidator,
	    ];
	    var /** @type {?} */ TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
	    var /** @type {?} */ REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
	    /**
	     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
	     */
	    var InternalFormsSharedModule = (function () {
	        function InternalFormsSharedModule() {
	        }
	        InternalFormsSharedModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: SHARED_FORM_DIRECTIVES,
	                        exports: SHARED_FORM_DIRECTIVES,
	                    },] },
	        ];
	        /** @nocollapse */
	        InternalFormsSharedModule.ctorParameters = function () { return []; };
	        return InternalFormsSharedModule;
	    }());
	
	    /**
	     * The ng module for forms.
	     * \@stable
	     */
	    var FormsModule = (function () {
	        function FormsModule() {
	        }
	        FormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
	                        providers: [RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        FormsModule.ctorParameters = function () { return []; };
	        return FormsModule;
	    }());
	    /**
	     * The ng module for reactive forms.
	     * \@stable
	     */
	    var ReactiveFormsModule = (function () {
	        function ReactiveFormsModule() {
	        }
	        ReactiveFormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
	                        providers: [FormBuilder, RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        ReactiveFormsModule.ctorParameters = function () { return []; };
	        return ReactiveFormsModule;
	    }());
	
	    exports.AbstractControlDirective = AbstractControlDirective;
	    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	    exports.ControlContainer = ControlContainer;
	    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
	    exports.DefaultValueAccessor = DefaultValueAccessor;
	    exports.NgControl = NgControl;
	    exports.NgControlStatus = NgControlStatus;
	    exports.NgControlStatusGroup = NgControlStatusGroup;
	    exports.NgForm = NgForm;
	    exports.NgModel = NgModel;
	    exports.NgModelGroup = NgModelGroup;
	    exports.RadioControlValueAccessor = RadioControlValueAccessor;
	    exports.FormControlDirective = FormControlDirective;
	    exports.FormControlName = FormControlName;
	    exports.FormGroupDirective = FormGroupDirective;
	    exports.FormArrayName = FormArrayName;
	    exports.FormGroupName = FormGroupName;
	    exports.NgSelectOption = NgSelectOption;
	    exports.SelectControlValueAccessor = SelectControlValueAccessor;
	    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	    exports.CheckboxRequiredValidator = CheckboxRequiredValidator;
	    exports.MaxLengthValidator = MaxLengthValidator;
	    exports.MinLengthValidator = MinLengthValidator;
	    exports.PatternValidator = PatternValidator;
	    exports.RequiredValidator = RequiredValidator;
	    exports.FormBuilder = FormBuilder;
	    exports.AbstractControl = AbstractControl;
	    exports.FormArray = FormArray;
	    exports.FormControl = FormControl;
	    exports.FormGroup = FormGroup;
	    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
	    exports.NG_VALIDATORS = NG_VALIDATORS;
	    exports.Validators = Validators;
	    exports.VERSION = VERSION;
	    exports.FormsModule = FormsModule;
	    exports.ReactiveFormsModule = ReactiveFormsModule;
	
	}));

/***/ },

/***/ 31:
/*!***************************************!*\
  !*** ./angular2App/app/app.routes.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(/*! @angular/router */ 32);
	var dashboard_component_1 = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 62);
	var appRoutes = [
	    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
	    { path: '**', redirectTo: 'dashboard' }
	];
	exports.appRoutingProviders = [];
	exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ },

/***/ 62:
/*!*********************************************************************!*\
  !*** ./angular2App/app/components/dashboard/dashboard.component.ts ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var products_service_1 = __webpack_require__(/*! ../../services/products.service */ 63);
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var DashboardComponent = (function () {
	    function DashboardComponent(_productsService) {
	        this._productsService = _productsService;
	    }
	    DashboardComponent.prototype.ngOnInit = function () {
	    };
	    DashboardComponent.prototype.ngOnDestroy = function () {
	    };
	    DashboardComponent = __decorate([
	        core_1.Component({
	            selector: 'dashboard',
	            template: __webpack_require__(/*! ./dashboard.component.html */ 67)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof products_service_1.ProductsService !== 'undefined' && products_service_1.ProductsService) === 'function' && _a) || Object])
	    ], DashboardComponent);
	    return DashboardComponent;
	    var _a;
	}());
	exports.DashboardComponent = DashboardComponent;


/***/ },

/***/ 63:
/*!******************************************************!*\
  !*** ./angular2App/app/services/products.service.ts ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var http_1 = __webpack_require__(/*! @angular/http */ 24);
	__webpack_require__(/*! rxjs/add/operator/map */ 64);
	__webpack_require__(/*! rxjs/add/operator/catch */ 65);
	var BehaviorSubject_1 = __webpack_require__(/*! rxjs/BehaviorSubject */ 33);
	var product_interface_1 = __webpack_require__(/*! ../interfaces/product.interface */ 66);
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
	    ProductsService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], ProductsService);
	    return ProductsService;
	    var _a;
	}());
	exports.ProductsService = ProductsService;


/***/ },

/***/ 66:
/*!*********************************************************!*\
  !*** ./angular2App/app/interfaces/product.interface.ts ***!
  \*********************************************************/
/***/ function(module, exports) {

	"use strict";
	var Filter = (function () {
	    function Filter(title, brand, gender, category, country, priceLow, priceHigh, priceChangeLow, priceChangeHigh, discountLow, discountHigh, onlineStoreName, pageNumber) {
	        this.title = title;
	        this.brand = brand;
	        this.gender = gender;
	        this.category = category;
	        this.country = country;
	        this.priceLow = priceLow;
	        this.priceHigh = priceHigh;
	        this.priceChangeLow = priceChangeLow;
	        this.priceChangeHigh = priceChangeHigh;
	        this.discountLow = discountLow;
	        this.discountHigh = discountHigh;
	        this.onlineStoreName = onlineStoreName;
	        this.pageNumber = pageNumber;
	    }
	    return Filter;
	}());
	exports.Filter = Filter;
	var Product = (function () {
	    function Product(title, brand, gender, category, subCategory, country, type, originalPrice, salePrice, discount, url, imageUrl, rating, reviews, specialOffers, badges, onlineStoreName) {
	        this.title = title;
	        this.brand = brand;
	        this.gender = gender;
	        this.category = category;
	        this.subCategory = subCategory;
	        this.country = country;
	        this.type = type;
	        this.originalPrice = originalPrice;
	        this.salePrice = salePrice;
	        this.discount = discount;
	        this.url = url;
	        this.imageUrl = imageUrl;
	        this.rating = rating;
	        this.reviews = reviews;
	        this.specialOffers = specialOffers;
	        this.badges = badges;
	        this.onlineStoreName = onlineStoreName;
	    }
	    return Product;
	}());
	exports.Product = Product;
	var PageResult = (function () {
	    function PageResult(products, count) {
	        if (products === void 0) { products = []; }
	        this.products = products;
	        this.count = count;
	    }
	    return PageResult;
	}());
	exports.PageResult = PageResult;


/***/ },

/***/ 67:
/*!***********************************************************************!*\
  !*** ./angular2App/app/components/dashboard/dashboard.component.html ***!
  \***********************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    \r\n    <div>\r\n        <search-form></search-form>\r\n    </div>\r\n\r\n    <div>\r\n        <products-table></products-table>\r\n    </div>\r\n\r\n</div>";

/***/ },

/***/ 68:
/*!******************************************!*\
  !*** ./angular2App/app/app.component.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var dashboard_component_1 = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 62);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.NgModule({
	            declarations: [dashboard_component_1.DashboardComponent]
	        }),
	        core_1.Component({
	            selector: 'app',
	            template: __webpack_require__(/*! ./app.component.html */ 69),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 69:
/*!********************************************!*\
  !*** ./angular2App/app/app.component.html ***!
  \********************************************/
/***/ function(module, exports) {

	module.exports = "<router-outlet></router-outlet>";

/***/ },

/***/ 70:
/*!****************************************************!*\
  !*** ./~/@swimlane/ngx-datatable/release/index.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * angular2-data-table v"6.0.2" (https://github.com/swimlane/angular2-data-table)
	 * Copyright 2016
	 * Licensed under MIT
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(/*! @angular/core */ 3), __webpack_require__(/*! @angular/common */ 22));
		else if(typeof define === 'function' && define.amd)
			define("angular2-data-table", ["@angular/core", "@angular/common"], factory);
		else if(typeof exports === 'object')
			exports["angular2-data-table"] = factory(require("@angular/core"), require("@angular/common"));
		else
			root["angular2-data-table"] = factory(root["@angular/core"], root["@angular/common"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// identity function for calling harmony imports with the correct context
	/******/ 	__webpack_require__.i = function(value) { return value; };
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, {
	/******/ 				configurable: false,
	/******/ 				enumerable: true,
	/******/ 				get: getter
	/******/ 			});
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
	/******/ })
	/************************************************************************/
	/******/ ({
	
	/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js?sourceMap!./node_modules/sass-loader/index.js?sourceMap!./src/components/datatable.component.scss":
	/***/ (function(module, exports, __webpack_require__) {
	
	exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
	// imports
	
	
	// module
	exports.push([module.i, ".ngx-datatable {\n  display: block;\n  overflow: hidden;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  -webkit-transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }\n  .ngx-datatable [hidden] {\n    display: none !important; }\n  .ngx-datatable *, .ngx-datatable *:before, .ngx-datatable *:after {\n    box-sizing: border-box; }\n  .ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }\n    .ngx-datatable.scroll-vertical .datatable-body .datatable-row-wrapper {\n      position: absolute; }\n  .ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n  .ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }\n    .ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }\n    .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }\n      .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  .ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-header-inner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-flow: row;\n    -o-flex-flow: row;\n    flex-flow: row; }\n  .ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none; }\n    .ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }\n  .ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }\n  .ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }\n  .ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }\n    .ngx-datatable .datatable-header .datatable-header-inner {\n      -webkit-box-align: stretch;\n          -ms-flex-align: stretch;\n              align-items: stretch;\n      -webkit-align-items: stretch; }\n    .ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }\n      .ngx-datatable .datatable-header .datatable-header-cell.longpress {\n        cursor: move; }\n      .ngx-datatable .datatable-header .datatable-header-cell.sortable {\n        cursor: pointer; }\n      .ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block; }\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 8px;\n        visibility: hidden;\n        cursor: ew-resize; }\n      .ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }\n  .ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }\n    .ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }\n    .ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }\n    .ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n      flex-direction: column; }\n    .ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }\n      .ngx-datatable .datatable-body .datatable-body-row > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n  .ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%; }\n    .ngx-datatable .datatable-footer > div {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: 100%; }\n    .ngx-datatable .datatable-footer .page-count {\n      display: inline-block;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 20%;\n              flex: 1 1 20%; }\n    .ngx-datatable .datatable-footer .datatable-pager {\n      display: inline-block;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 80%;\n              flex: 1 1 80%;\n      text-align: right; }\n      .ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }\n      .ngx-datatable .datatable-footer .datatable-pager .pager li, .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }\n      .ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }\n", ""]);
	
	// exports
	
	
	/***/ }),
	
	/***/ "./node_modules/css-loader/lib/css-base.js":
	/***/ (function(module, exports) {
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};
	
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/Observable.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
	var toSubscriber_1 = __webpack_require__("./node_modules/rxjs/util/toSubscriber.js");
	var observable_1 = __webpack_require__("./node_modules/rxjs/symbol/observable.js");
	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = (function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is  called when the Observable is
	     * initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or
	     * `complete` can be called to notify of a successful completion.
	     */
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * Creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @return {Observable} a new observable with the Operator applied
	     */
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
	        if (operator) {
	            operator.call(sink, this.source);
	        }
	        else {
	            sink.add(this._subscribe(sink));
	        }
	        if (sink.syncErrorThrowable) {
	            sink.syncErrorThrowable = false;
	            if (sink.syncErrorThrown) {
	                throw sink.syncErrorValue;
	            }
	        }
	        return sink;
	    };
	    /**
	     * @method forEach
	     * @param {Function} next a handler for each value emitted by the observable
	     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	     * @return {Promise} a promise that either resolves on observable completion or
	     *  rejects with the handled error
	     */
	    Observable.prototype.forEach = function (next, PromiseCtor) {
	        var _this = this;
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            }
	            else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        return new PromiseCtor(function (resolve, reject) {
	            var subscription = _this.subscribe(function (value) {
	                if (subscription) {
	                    // if there is a subscription, then we can surmise
	                    // the next handling is asynchronous. Any errors thrown
	                    // need to be rejected explicitly and unsubscribe must be
	                    // called manually
	                    try {
	                        next(value);
	                    }
	                    catch (err) {
	                        reject(err);
	                        subscription.unsubscribe();
	                    }
	                }
	                else {
	                    // if there is NO subscription, then we're getting a nexted
	                    // value synchronously during subscription. We can just call it.
	                    // If it errors, Observable's `subscribe` will ensure the
	                    // unsubscription logic is called, then synchronously rethrow the error.
	                    // After that, Promise will trap the error and send it
	                    // down the rejection path.
	                    next(value);
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        return this.source.subscribe(subscriber);
	    };
	    /**
	     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	     * @method Symbol.observable
	     * @return {Observable} this instance of the observable
	     */
	    Observable.prototype[observable_1.$$observable] = function () {
	        return this;
	    };
	    // HACK: Since TypeScript inherits static properties too, we have to
	    // fight against TypeScript here so Subject can have a different static create signature
	    /**
	     * Creates a new cold Observable by calling the Observable constructor
	     * @static true
	     * @owner Observable
	     * @method create
	     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	     * @return {Observable} a new cold observable
	     */
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}());
	exports.Observable = Observable;
	//# sourceMappingURL=Observable.js.map
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/Observer.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	exports.empty = {
	    closed: true,
	    next: function (value) { },
	    error: function (err) { throw err; },
	    complete: function () { }
	};
	//# sourceMappingURL=Observer.js.map
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/Subscriber.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__("./node_modules/rxjs/util/isFunction.js");
	var Subscription_1 = __webpack_require__("./node_modules/rxjs/Subscription.js");
	var Observer_1 = __webpack_require__("./node_modules/rxjs/Observer.js");
	var rxSubscriber_1 = __webpack_require__("./node_modules/rxjs/symbol/rxSubscriber.js");
	/**
	 * Implements the {@link Observer} interface and extends the
	 * {@link Subscription} class. While the {@link Observer} is the public API for
	 * consuming the values of an {@link Observable}, all Observers get converted to
	 * a Subscriber, in order to provide Subscription-like capabilities such as
	 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
	 * implementing operators, but it is rarely used as a public API.
	 *
	 * @class Subscriber<T>
	 */
	var Subscriber = (function (_super) {
	    __extends(Subscriber, _super);
	    /**
	     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
	     * defined Observer or a `next` callback function.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     */
	    function Subscriber(destinationOrNext, error, complete) {
	        _super.call(this);
	        this.syncErrorValue = null;
	        this.syncErrorThrown = false;
	        this.syncErrorThrowable = false;
	        this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                this.destination = Observer_1.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    this.destination = Observer_1.empty;
	                    break;
	                }
	                if (typeof destinationOrNext === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        this.destination = destinationOrNext;
	                        this.destination.add(this);
	                    }
	                    else {
	                        this.syncErrorThrowable = true;
	                        this.destination = new SafeSubscriber(this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                this.syncErrorThrowable = true;
	                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
	                break;
	        }
	    }
	    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () { return this; };
	    /**
	     * A static factory for a Subscriber, given a (potentially partial) definition
	     * of an Observer.
	     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
	     * Observer represented by the given arguments.
	     */
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `next` from
	     * the Observable, with a value. The Observable may call this method 0 or more
	     * times.
	     * @param {T} [value] The `next` value.
	     * @return {void}
	     */
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `error` from
	     * the Observable, with an attached {@link Error}. Notifies the Observer that
	     * the Observable has experienced an error condition.
	     * @param {any} [err] The `error` exception.
	     * @return {void}
	     */
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive a valueless notification of type
	     * `complete` from the Observable. Notifies the Observer that the Observable
	     * has finished sending push-based notifications.
	     * @return {void}
	     */
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.closed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    return Subscriber;
	}(Subscription_1.Subscription));
	exports.Subscriber = Subscriber;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SafeSubscriber = (function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parent, observerOrNext, error, complete) {
	        _super.call(this);
	        this._parent = _parent;
	        var next;
	        var context = this;
	        if (isFunction_1.isFunction(observerOrNext)) {
	            next = observerOrNext;
	        }
	        else if (observerOrNext) {
	            context = observerOrNext;
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if (isFunction_1.isFunction(context.unsubscribe)) {
	                this.add(context.unsubscribe.bind(context));
	            }
	            context.unsubscribe = this.unsubscribe.bind(this);
	        }
	        this._context = context;
	        this._next = next;
	        this._error = error;
	        this._complete = complete;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parent = this._parent;
	            if (!_parent.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            }
	            else if (this.__tryOrSetError(_parent, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._error) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._error, err);
	                    this.unsubscribe();
	                }
	            }
	            else if (!_parent.syncErrorThrowable) {
	                this.unsubscribe();
	                throw err;
	            }
	            else {
	                _parent.syncErrorValue = err;
	                _parent.syncErrorThrown = true;
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._complete) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._complete);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._complete);
	                    this.unsubscribe();
	                }
	            }
	            else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            this.unsubscribe();
	            throw err;
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            parent.syncErrorValue = err;
	            parent.syncErrorThrown = true;
	            return true;
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parent = this._parent;
	        this._context = null;
	        this._parent = null;
	        _parent.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber));
	//# sourceMappingURL=Subscriber.js.map
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/Subscription.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isArray_1 = __webpack_require__("./node_modules/rxjs/util/isArray.js");
	var isObject_1 = __webpack_require__("./node_modules/rxjs/util/isObject.js");
	var isFunction_1 = __webpack_require__("./node_modules/rxjs/util/isFunction.js");
	var tryCatch_1 = __webpack_require__("./node_modules/rxjs/util/tryCatch.js");
	var errorObject_1 = __webpack_require__("./node_modules/rxjs/util/errorObject.js");
	var UnsubscriptionError_1 = __webpack_require__("./node_modules/rxjs/util/UnsubscriptionError.js");
	/**
	 * Represents a disposable resource, such as the execution of an Observable. A
	 * Subscription has one important method, `unsubscribe`, that takes no argument
	 * and just disposes the resource held by the subscription.
	 *
	 * Additionally, subscriptions may be grouped together through the `add()`
	 * method, which will attach a child Subscription to the current Subscription.
	 * When a Subscription is unsubscribed, all its children (and its grandchildren)
	 * will be unsubscribed as well.
	 *
	 * @class Subscription
	 */
	var Subscription = (function () {
	    /**
	     * @param {function(): void} [unsubscribe] A function describing how to
	     * perform the disposal of resources when the `unsubscribe` method is called.
	     */
	    function Subscription(unsubscribe) {
	        /**
	         * A flag to indicate whether this Subscription has already been unsubscribed.
	         * @type {boolean}
	         */
	        this.closed = false;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    /**
	     * Disposes the resources held by the subscription. May, for instance, cancel
	     * an ongoing Observable execution or cancel any other type of work that
	     * started when the Subscription was created.
	     * @return {void}
	     */
	    Subscription.prototype.unsubscribe = function () {
	        var hasErrors = false;
	        var errors;
	        if (this.closed) {
	            return;
	        }
	        this.closed = true;
	        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
	        this._subscriptions = null;
	        if (isFunction_1.isFunction(_unsubscribe)) {
	            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
	            if (trial === errorObject_1.errorObject) {
	                hasErrors = true;
	                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
	                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
	            }
	        }
	        if (isArray_1.isArray(_subscriptions)) {
	            var index = -1;
	            var len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject_1.isObject(sub)) {
	                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
	                    if (trial === errorObject_1.errorObject) {
	                        hasErrors = true;
	                        errors = errors || [];
	                        var err = errorObject_1.errorObject.e;
	                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
	                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
	                        }
	                        else {
	                            errors.push(err);
	                        }
	                    }
	                }
	            }
	        }
	        if (hasErrors) {
	            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
	        }
	    };
	    /**
	     * Adds a tear down to be called during the unsubscribe() of this
	     * Subscription.
	     *
	     * If the tear down being added is a subscription that is already
	     * unsubscribed, is the same reference `add` is being called on, or is
	     * `Subscription.EMPTY`, it will not be added.
	     *
	     * If this subscription is already in an `closed` state, the passed
	     * tear down logic will be executed immediately.
	     *
	     * @param {TeardownLogic} teardown The additional logic to execute on
	     * teardown.
	     * @return {Subscription} Returns the Subscription used or created to be
	     * added to the inner subscriptions list. This Subscription can be used with
	     * `remove()` to remove the passed teardown logic from the inner subscriptions
	     * list.
	     */
	    Subscription.prototype.add = function (teardown) {
	        if (!teardown || (teardown === Subscription.EMPTY)) {
	            return Subscription.EMPTY;
	        }
	        if (teardown === this) {
	            return this;
	        }
	        var sub = teardown;
	        switch (typeof teardown) {
	            case 'function':
	                sub = new Subscription(teardown);
	            case 'object':
	                if (sub.closed || typeof sub.unsubscribe !== 'function') {
	                    return sub;
	                }
	                else if (this.closed) {
	                    sub.unsubscribe();
	                    return sub;
	                }
	                break;
	            default:
	                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
	        }
	        var childSub = new ChildSubscription(sub, this);
	        this._subscriptions = this._subscriptions || [];
	        this._subscriptions.push(childSub);
	        return childSub;
	    };
	    /**
	     * Removes a Subscription from the internal list of subscriptions that will
	     * unsubscribe during the unsubscribe process of this Subscription.
	     * @param {Subscription} subscription The subscription to remove.
	     * @return {void}
	     */
	    Subscription.prototype.remove = function (subscription) {
	        // HACK: This might be redundant because of the logic in `add()`
	        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
	            return;
	        }
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.closed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	}());
	exports.Subscription = Subscription;
	var ChildSubscription = (function (_super) {
	    __extends(ChildSubscription, _super);
	    function ChildSubscription(_innerSub, _parent) {
	        _super.call(this);
	        this._innerSub = _innerSub;
	        this._parent = _parent;
	    }
	    ChildSubscription.prototype._unsubscribe = function () {
	        var _a = this, _innerSub = _a._innerSub, _parent = _a._parent;
	        _parent.remove(this);
	        _innerSub.unsubscribe();
	    };
	    return ChildSubscription;
	}(Subscription));
	exports.ChildSubscription = ChildSubscription;
	function flattenUnsubscriptionErrors(errors) {
	    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
	}
	//# sourceMappingURL=Subscription.js.map
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/add/observable/fromEvent.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
	var fromEvent_1 = __webpack_require__("./node_modules/rxjs/observable/fromEvent.js");
	Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
	//# sourceMappingURL=fromEvent.js.map
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/observable/FromEventObservable.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
	var tryCatch_1 = __webpack_require__("./node_modules/rxjs/util/tryCatch.js");
	var isFunction_1 = __webpack_require__("./node_modules/rxjs/util/isFunction.js");
	var errorObject_1 = __webpack_require__("./node_modules/rxjs/util/errorObject.js");
	var Subscription_1 = __webpack_require__("./node_modules/rxjs/Subscription.js");
	var toString = Object.prototype.toString;
	function isNodeStyleEventEmmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
	}
	function isJQueryStyleEventEmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
	}
	function isNodeList(sourceObj) {
	    return !!sourceObj && toString.call(sourceObj) === '[object NodeList]';
	}
	function isHTMLCollection(sourceObj) {
	    return !!sourceObj && toString.call(sourceObj) === '[object HTMLCollection]';
	}
	function isEventTarget(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
	}
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromEventObservable = (function (_super) {
	    __extends(FromEventObservable, _super);
	    function FromEventObservable(sourceObj, eventName, selector, options) {
	        _super.call(this);
	        this.sourceObj = sourceObj;
	        this.eventName = eventName;
	        this.selector = selector;
	        this.options = options;
	    }
	    /* tslint:enable:max-line-length */
	    /**
	     * Creates an Observable that emits events of a specific type coming from the
	     * given event target.
	     *
	     * <span class="informal">Creates an Observable from DOM events, or Node
	     * EventEmitter events or others.</span>
	     *
	     * <img src="./img/fromEvent.png" width="100%">
	     *
	     * Creates an Observable by attaching an event listener to an "event target",
	     * which may be an object with `addEventListener` and `removeEventListener`,
	     * a Node.js EventEmitter, a jQuery style EventEmitter, a NodeList from the
	     * DOM, or an HTMLCollection from the DOM. The event handler is attached when
	     * the output Observable is subscribed, and removed when the Subscription is
	     * unsubscribed.
	     *
	     * @example <caption>Emits clicks happening on the DOM document</caption>
	     * var clicks = Rx.Observable.fromEvent(document, 'click');
	     * clicks.subscribe(x => console.log(x));
	     *
	     * // Results in:
	     * // MouseEvent object logged to console everytime a click
	     * // occurs on the document.
	     *
	     * @see {@link from}
	     * @see {@link fromEventPattern}
	     *
	     * @param {EventTargetLike} target The DOMElement, event target, Node.js
	     * EventEmitter, NodeList or HTMLCollection to attach the event handler to.
	     * @param {string} eventName The event name of interest, being emitted by the
	     * `target`.
	     * @param {EventListenerOptions} [options] Options to pass through to addEventListener
	     * @param {SelectorMethodSignature<T>} [selector] An optional function to
	     * post-process results. It takes the arguments from the event handler and
	     * should return a single value.
	     * @return {Observable<T>}
	     * @static true
	     * @name fromEvent
	     * @owner Observable
	     */
	    FromEventObservable.create = function (target, eventName, options, selector) {
	        if (isFunction_1.isFunction(options)) {
	            selector = options;
	            options = undefined;
	        }
	        return new FromEventObservable(target, eventName, selector, options);
	    };
	    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber, options) {
	        var unsubscribe;
	        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
	            for (var i = 0, len = sourceObj.length; i < len; i++) {
	                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
	            }
	        }
	        else if (isEventTarget(sourceObj)) {
	            var source_1 = sourceObj;
	            sourceObj.addEventListener(eventName, handler, options);
	            unsubscribe = function () { return source_1.removeEventListener(eventName, handler); };
	        }
	        else if (isJQueryStyleEventEmitter(sourceObj)) {
	            var source_2 = sourceObj;
	            sourceObj.on(eventName, handler);
	            unsubscribe = function () { return source_2.off(eventName, handler); };
	        }
	        else if (isNodeStyleEventEmmitter(sourceObj)) {
	            var source_3 = sourceObj;
	            sourceObj.addListener(eventName, handler);
	            unsubscribe = function () { return source_3.removeListener(eventName, handler); };
	        }
	        else {
	            throw new TypeError('Invalid event target');
	        }
	        subscriber.add(new Subscription_1.Subscription(unsubscribe));
	    };
	    FromEventObservable.prototype._subscribe = function (subscriber) {
	        var sourceObj = this.sourceObj;
	        var eventName = this.eventName;
	        var options = this.options;
	        var selector = this.selector;
	        var handler = selector ? function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(errorObject_1.errorObject.e);
	            }
	            else {
	                subscriber.next(result);
	            }
	        } : function (e) { return subscriber.next(e); };
	        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
	    };
	    return FromEventObservable;
	}(Observable_1.Observable));
	exports.FromEventObservable = FromEventObservable;
	//# sourceMappingURL=FromEventObservable.js.map
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/observable/fromEvent.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var FromEventObservable_1 = __webpack_require__("./node_modules/rxjs/observable/FromEventObservable.js");
	exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/symbol/observable.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
	function getSymbolObservable(context) {
	    var $$observable;
	    var Symbol = context.Symbol;
	    if (typeof Symbol === 'function') {
	        if (Symbol.observable) {
	            $$observable = Symbol.observable;
	        }
	        else {
	            $$observable = Symbol('observable');
	            Symbol.observable = $$observable;
	        }
	    }
	    else {
	        $$observable = '@@observable';
	    }
	    return $$observable;
	}
	exports.getSymbolObservable = getSymbolObservable;
	exports.$$observable = getSymbolObservable(root_1.root);
	//# sourceMappingURL=observable.js.map
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/symbol/rxSubscriber.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var root_1 = __webpack_require__("./node_modules/rxjs/util/root.js");
	var Symbol = root_1.root.Symbol;
	exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
	    Symbol.for('rxSubscriber') : '@@rxSubscriber';
	//# sourceMappingURL=rxSubscriber.js.map
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/util/UnsubscriptionError.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when one or more errors have occurred during the
	 * `unsubscribe` of a {@link Subscription}.
	 */
	var UnsubscriptionError = (function (_super) {
	    __extends(UnsubscriptionError, _super);
	    function UnsubscriptionError(errors) {
	        _super.call(this);
	        this.errors = errors;
	        var err = Error.call(this, errors ?
	            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
	        this.name = err.name = 'UnsubscriptionError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return UnsubscriptionError;
	}(Error));
	exports.UnsubscriptionError = UnsubscriptionError;
	//# sourceMappingURL=UnsubscriptionError.js.map
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/util/errorObject.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	// typeof any so that it we don't have to cast when comparing a result to the error object
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/util/isArray.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/util/isFunction.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/util/isObject.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function isObject(x) {
	    return x != null && typeof x === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/util/root.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * window: browser in DOM main thread
	 * self: browser in WebWorker
	 * global: Node.js/other
	 */
	exports.root = (typeof window == 'object' && window.window === window && window
	    || typeof self == 'object' && self.self === self && self
	    || typeof global == 'object' && global.global === global && global);
	if (!exports.root) {
	    throw new Error('RxJS could not find any global context (window, self, global)');
	}
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/util/toSubscriber.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var Subscriber_1 = __webpack_require__("./node_modules/rxjs/Subscriber.js");
	var rxSubscriber_1 = __webpack_require__("./node_modules/rxjs/symbol/rxSubscriber.js");
	var Observer_1 = __webpack_require__("./node_modules/rxjs/Observer.js");
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver) {
	        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
	            return nextOrObserver;
	        }
	        if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
	            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
	        }
	    }
	    if (!nextOrObserver && !error && !complete) {
	        return new Subscriber_1.Subscriber(Observer_1.empty);
	    }
	    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	}
	exports.toSubscriber = toSubscriber;
	//# sourceMappingURL=toSubscriber.js.map
	
	/***/ }),
	
	/***/ "./node_modules/rxjs/util/tryCatch.js":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var errorObject_1 = __webpack_require__("./node_modules/rxjs/util/errorObject.js");
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    }
	    catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map
	
	/***/ }),
	
	/***/ "./node_modules/webpack/buildin/global.js":
	/***/ (function(module, exports) {
	
	var g;
	
	// This works in non-strict mode
	g = (function() {
		return this;
	})();
	
	try {
		// This works if eval is allowed (see CSP)
		g = g || Function("return this")() || (1,eval)("this");
	} catch(e) {
		// This works if the window reference is available
		if(typeof window === "object")
			g = window;
	}
	
	// g can still be undefined, but nothing to do about it...
	// We return undefined, instead of nothing here, so it's
	// easier to handle this case. if(!global) { ...}
	
	module.exports = g;
	
	
	/***/ }),
	
	/***/ "./src/components/body/body-cell.component.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var utils_1 = __webpack_require__("./src/utils/index.ts");
	var types_1 = __webpack_require__("./src/types/index.ts");
	var DataTableBodyCellComponent = (function () {
	    function DataTableBodyCellComponent(element) {
	        this.activate = new core_1.EventEmitter();
	        this.isFocused = false;
	        this.element = element.nativeElement;
	    }
	    Object.defineProperty(DataTableBodyCellComponent.prototype, "sorts", {
	        get: function () {
	            return this._sorts;
	        },
	        set: function (val) {
	            this._sorts = val;
	            this.calcSortDir = this.calcSortDir(val);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyCellComponent.prototype, "columnCssClasses", {
	        get: function () {
	            var cls = 'datatable-body-cell';
	            if (this.column.cssClasses)
	                cls += ' ' + this.column.cssClasses;
	            return cls;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyCellComponent.prototype, "isSortActive", {
	        get: function () {
	            return !this.sortDir;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyCellComponent.prototype, "isSortAscending", {
	        get: function () {
	            return this.sortDir === types_1.SortDirection.asc;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyCellComponent.prototype, "isSortDescending", {
	        get: function () {
	            return this.sortDir === types_1.SortDirection.desc;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyCellComponent.prototype, "width", {
	        get: function () {
	            return this.column.width;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyCellComponent.prototype, "height", {
	        get: function () {
	            var height = this.rowHeight;
	            if (isNaN(height))
	                return height;
	            return height + 'px';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyCellComponent.prototype, "value", {
	        get: function () {
	            if (!this.row || !this.column || !this.column.prop)
	                return '';
	            var val = utils_1.deepValueGetter(this.row, this.column.prop);
	            var userPipe = this.column.pipe;
	            if (userPipe)
	                return userPipe.transform(val);
	            if (val !== undefined)
	                return val;
	            return '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DataTableBodyCellComponent.prototype.onFocus = function () {
	        this.isFocused = true;
	    };
	    DataTableBodyCellComponent.prototype.onBlur = function () {
	        this.isFocused = false;
	    };
	    DataTableBodyCellComponent.prototype.onClick = function (event) {
	        this.activate.emit({
	            type: 'click',
	            event: event,
	            row: this.row,
	            column: this.column,
	            value: this.value,
	            cellElement: this.element
	        });
	    };
	    DataTableBodyCellComponent.prototype.onDblClick = function (event) {
	        this.activate.emit({
	            type: 'dblclick',
	            event: event,
	            row: this.row,
	            column: this.column,
	            value: this.value,
	            cellElement: this.element
	        });
	    };
	    DataTableBodyCellComponent.prototype.onKeyDown = function (event) {
	        var keyCode = event.keyCode;
	        var isTargetCell = event.target === this.element;
	        var isAction = keyCode === utils_1.Keys.return ||
	            keyCode === utils_1.Keys.down ||
	            keyCode === utils_1.Keys.up ||
	            keyCode === utils_1.Keys.left ||
	            keyCode === utils_1.Keys.right;
	        if (isAction && isTargetCell) {
	            event.preventDefault();
	            event.stopPropagation();
	            this.activate.emit({
	                type: 'keydown',
	                event: event,
	                row: this.row,
	                column: this.column,
	                value: this.value,
	                cellElement: this.element
	            });
	        }
	    };
	    DataTableBodyCellComponent.prototype.onCheckboxChange = function (event) {
	        this.activate.emit({
	            type: 'checkbox',
	            event: event,
	            row: this.row,
	            column: this.column,
	            value: this.value,
	            cellElement: this.element
	        });
	    };
	    DataTableBodyCellComponent.prototype.calcSortDir = function (sorts) {
	        var _this = this;
	        if (!sorts)
	            return;
	        var sort = sorts.find(function (s) {
	            return s.prop === _this.column.prop;
	        });
	        if (sort)
	            return sort.dir;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableBodyCellComponent.prototype, "row", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableBodyCellComponent.prototype, "column", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableBodyCellComponent.prototype, "rowHeight", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableBodyCellComponent.prototype, "isSelected", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array), 
	        __metadata('design:paramtypes', [Array])
	    ], DataTableBodyCellComponent.prototype, "sorts", null);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableBodyCellComponent.prototype, "activate", void 0);
	    __decorate([
	        core_1.HostBinding('class'), 
	        __metadata('design:type', Object)
	    ], DataTableBodyCellComponent.prototype, "columnCssClasses", null);
	    __decorate([
	        core_1.HostBinding('class.active'), 
	        __metadata('design:type', Boolean)
	    ], DataTableBodyCellComponent.prototype, "isFocused", void 0);
	    __decorate([
	        core_1.HostBinding('class.sort-active'), 
	        __metadata('design:type', Boolean)
	    ], DataTableBodyCellComponent.prototype, "isSortActive", null);
	    __decorate([
	        core_1.HostBinding('class.sort-asc'), 
	        __metadata('design:type', Boolean)
	    ], DataTableBodyCellComponent.prototype, "isSortAscending", null);
	    __decorate([
	        core_1.HostBinding('class.sort-desc'), 
	        __metadata('design:type', Boolean)
	    ], DataTableBodyCellComponent.prototype, "isSortDescending", null);
	    __decorate([
	        core_1.HostBinding('style.width.px'), 
	        __metadata('design:type', Number)
	    ], DataTableBodyCellComponent.prototype, "width", null);
	    __decorate([
	        core_1.HostBinding('style.height'), 
	        __metadata('design:type', Object)
	    ], DataTableBodyCellComponent.prototype, "height", null);
	    __decorate([
	        core_1.HostListener('focus'), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], DataTableBodyCellComponent.prototype, "onFocus", null);
	    __decorate([
	        core_1.HostListener('blur'), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], DataTableBodyCellComponent.prototype, "onBlur", null);
	    __decorate([
	        core_1.HostListener('click', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [MouseEvent]), 
	        __metadata('design:returntype', void 0)
	    ], DataTableBodyCellComponent.prototype, "onClick", null);
	    __decorate([
	        core_1.HostListener('dblclick', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [MouseEvent]), 
	        __metadata('design:returntype', void 0)
	    ], DataTableBodyCellComponent.prototype, "onDblClick", null);
	    __decorate([
	        core_1.HostListener('keydown', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [KeyboardEvent]), 
	        __metadata('design:returntype', void 0)
	    ], DataTableBodyCellComponent.prototype, "onKeyDown", null);
	    DataTableBodyCellComponent = __decorate([
	        core_1.Component({
	            selector: 'datatable-body-cell',
	            template: "\n    <div class=\"datatable-body-cell-label\">\n      <label\n        *ngIf=\"column.checkboxable\" \n        class=\"datatable-checkbox\">\n        <input \n          type=\"checkbox\"\n          [checked]=\"isSelected\"\n          (click)=\"onCheckboxChange($event)\" \n        />\n      </label>\n      <span\n        *ngIf=\"!column.cellTemplate\"\n        [innerHTML]=\"value\">\n      </span>\n      <template\n        *ngIf=\"column.cellTemplate\"\n        [ngTemplateOutlet]=\"column.cellTemplate\"\n        [ngOutletContext]=\"{ value: value, row: row, column: column }\">\n      </template>\n    </div>\n  ",
	            host: {
	                class: 'datatable-body-cell'
	            }
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], DataTableBodyCellComponent);
	    return DataTableBodyCellComponent;
	}());
	exports.DataTableBodyCellComponent = DataTableBodyCellComponent;
	
	
	/***/ }),
	
	/***/ "./src/components/body/body-row-wrapper.component.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var DataTableRowWrapperComponent = (function () {
	    function DataTableRowWrapperComponent() {
	        this.expanded = false;
	        this.rowContextmenu = new core_1.EventEmitter(false);
	    }
	    DataTableRowWrapperComponent.prototype.onContextmenu = function ($event) {
	        this.rowContextmenu.emit({ event: $event, row: this.row });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableRowWrapperComponent.prototype, "rowDetail", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableRowWrapperComponent.prototype, "detailRowHeight", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableRowWrapperComponent.prototype, "expanded", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableRowWrapperComponent.prototype, "row", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], DataTableRowWrapperComponent.prototype, "rowContextmenu", void 0);
	    __decorate([
	        core_1.HostListener('contextmenu', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [MouseEvent]), 
	        __metadata('design:returntype', void 0)
	    ], DataTableRowWrapperComponent.prototype, "onContextmenu", null);
	    DataTableRowWrapperComponent = __decorate([
	        core_1.Component({
	            selector: 'datatable-row-wrapper',
	            template: "\n    <ng-content></ng-content>\n    <div \n      *ngIf=\"expanded\"\n      [style.height.px]=\"detailRowHeight\" \n      class=\"datatable-row-detail\">\n      <template\n        *ngIf=\"rowDetail && rowDetail.template\"\n        [ngTemplateOutlet]=\"rowDetail.template\"\n        [ngOutletContext]=\"{ row: row }\">\n      </template>\n    </div>\n  ",
	            host: {
	                class: 'datatable-row-wrapper'
	            }
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DataTableRowWrapperComponent);
	    return DataTableRowWrapperComponent;
	}());
	exports.DataTableRowWrapperComponent = DataTableRowWrapperComponent;
	
	
	/***/ }),
	
	/***/ "./src/components/body/body-row.component.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var utils_1 = __webpack_require__("./src/utils/index.ts");
	var DataTableBodyRowComponent = (function () {
	    function DataTableBodyRowComponent(element) {
	        this.activate = new core_1.EventEmitter();
	        this.element = element.nativeElement;
	    }
	    Object.defineProperty(DataTableBodyRowComponent.prototype, "columns", {
	        get: function () {
	            return this._columns;
	        },
	        set: function (val) {
	            this._columns = val;
	            this.recalculateColumns(val);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyRowComponent.prototype, "innerWidth", {
	        get: function () {
	            return this._innerWidth;
	        },
	        set: function (val) {
	            this._innerWidth = val;
	            this.recalculateColumns();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyRowComponent.prototype, "isEvenRow", {
	        get: function () {
	            return this.row.$$index % 2 === 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyRowComponent.prototype, "isOddRow", {
	        get: function () {
	            return this.row.$$index % 2 !== 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DataTableBodyRowComponent.prototype.trackByGroups = function (index, colGroup) {
	        return colGroup.type;
	    };
	    DataTableBodyRowComponent.prototype.columnTrackingFn = function (index, column) {
	        return column.$$id;
	    };
	    DataTableBodyRowComponent.prototype.stylesByGroup = function (group) {
	        var widths = this.columnGroupWidths;
	        var offsetX = this.offsetX;
	        var styles = {
	            width: widths[group] + "px"
	        };
	        if (group === 'left') {
	            utils_1.translateXY(styles, offsetX, 0);
	        }
	        else if (group === 'right') {
	            var bodyWidth = parseInt(this.innerWidth + '', 0);
	            var totalDiff = widths.total - bodyWidth;
	            var offsetDiff = totalDiff - offsetX;
	            var offset = (offsetDiff + utils_1.scrollbarWidth) * -1;
	            utils_1.translateXY(styles, offset, 0);
	        }
	        return styles;
	    };
	    DataTableBodyRowComponent.prototype.onActivate = function (event, index) {
	        event.cellIndex = index;
	        event.rowElement = this.element;
	        this.activate.emit(event);
	    };
	    DataTableBodyRowComponent.prototype.onKeyDown = function (event) {
	        var keyCode = event.keyCode;
	        var isTargetRow = event.target === this.element;
	        var isAction = keyCode === utils_1.Keys.return ||
	            keyCode === utils_1.Keys.down ||
	            keyCode === utils_1.Keys.up ||
	            keyCode === utils_1.Keys.left ||
	            keyCode === utils_1.Keys.right;
	        if (isAction && isTargetRow) {
	            event.preventDefault();
	            event.stopPropagation();
	            this.activate.emit({
	                type: 'keydown',
	                event: event,
	                row: this.row,
	                rowElement: this.element
	            });
	        }
	    };
	    DataTableBodyRowComponent.prototype.recalculateColumns = function (val) {
	        if (val === void 0) { val = this.columns; }
	        var colsByPin = utils_1.columnsByPin(val);
	        this.columnsByPin = utils_1.columnsByPinArr(val);
	        this.columnGroupWidths = utils_1.columnGroupWidths(colsByPin, val);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array), 
	        __metadata('design:paramtypes', [Array])
	    ], DataTableBodyRowComponent.prototype, "columns", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], DataTableBodyRowComponent.prototype, "innerWidth", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableBodyRowComponent.prototype, "row", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableBodyRowComponent.prototype, "offsetX", void 0);
	    __decorate([
	        core_1.HostBinding('style.height.px'),
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableBodyRowComponent.prototype, "rowHeight", void 0);
	    __decorate([
	        core_1.HostBinding('class.active'),
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableBodyRowComponent.prototype, "isSelected", void 0);
	    __decorate([
	        core_1.HostBinding('class.datatable-row-even'), 
	        __metadata('design:type', Boolean)
	    ], DataTableBodyRowComponent.prototype, "isEvenRow", null);
	    __decorate([
	        core_1.HostBinding('class.datatable-row-odd'), 
	        __metadata('design:type', Boolean)
	    ], DataTableBodyRowComponent.prototype, "isOddRow", null);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableBodyRowComponent.prototype, "activate", void 0);
	    __decorate([
	        core_1.HostListener('keydown', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [KeyboardEvent]), 
	        __metadata('design:returntype', void 0)
	    ], DataTableBodyRowComponent.prototype, "onKeyDown", null);
	    DataTableBodyRowComponent = __decorate([
	        core_1.Component({
	            selector: 'datatable-body-row',
	            template: "\n    <div\n      *ngFor=\"let colGroup of columnsByPin; let i = index; trackBy: trackByGroups\"\n      class=\"datatable-row-{{colGroup.type}} datatable-row-group\"\n      [ngStyle]=\"stylesByGroup(colGroup.type)\">\n      <datatable-body-cell\n        *ngFor=\"let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn\"\n        tabindex=\"-1\"\n        [row]=\"row\"\n        [isSelected]=\"isSelected\"\n        [column]=\"column\"\n        [rowHeight]=\"rowHeight\"\n        (activate)=\"onActivate($event, ii)\">\n      </datatable-body-cell>\n    </div>\n  ",
	            host: {
	                class: 'datatable-body-row'
	            }
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], DataTableBodyRowComponent);
	    return DataTableBodyRowComponent;
	}());
	exports.DataTableBodyRowComponent = DataTableBodyRowComponent;
	
	
	/***/ }),
	
	/***/ "./src/components/body/body.component.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var utils_1 = __webpack_require__("./src/utils/index.ts");
	var types_1 = __webpack_require__("./src/types/index.ts");
	var scroller_component_1 = __webpack_require__("./src/components/body/scroller.component.ts");
	var DataTableBodyComponent = (function () {
	    function DataTableBodyComponent() {
	        this.selected = [];
	        this.scroll = new core_1.EventEmitter();
	        this.page = new core_1.EventEmitter();
	        this.activate = new core_1.EventEmitter();
	        this.select = new core_1.EventEmitter();
	        this.detailToggle = new core_1.EventEmitter();
	        this.rowContextmenu = new core_1.EventEmitter(false);
	        this.rowHeightsCache = new utils_1.RowHeightCache();
	        this.temp = [];
	        this.offsetY = 0;
	        this.indexes = {};
	        // declare fn here so we can get access to the `this` property
	        this.rowTrackingFn = function (index, row) {
	            if (this.trackByProp) {
	                return row.$$index + "-" + this.trackByProp;
	            }
	            else {
	                return row.$$index;
	            }
	        }.bind(this);
	    }
	    Object.defineProperty(DataTableBodyComponent.prototype, "pageSize", {
	        get: function () {
	            return this._pageSize;
	        },
	        set: function (val) {
	            this._pageSize = val;
	            this.recalcLayout();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyComponent.prototype, "rows", {
	        get: function () {
	            return this._rows;
	        },
	        set: function (val) {
	            this._rows = val;
	            this.recalcLayout();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyComponent.prototype, "columns", {
	        get: function () {
	            return this._columns;
	        },
	        set: function (val) {
	            this._columns = val;
	            var colsByPin = utils_1.columnsByPin(val);
	            this.columnGroupWidths = utils_1.columnGroupWidths(colsByPin, val);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyComponent.prototype, "offset", {
	        get: function () {
	            return this._offset;
	        },
	        set: function (val) {
	            this._offset = val;
	            this.recalcLayout();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyComponent.prototype, "rowCount", {
	        get: function () {
	            return this._rowCount;
	        },
	        set: function (val) {
	            this._rowCount = val;
	            this.recalcLayout();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyComponent.prototype, "bodyWidth", {
	        get: function () {
	            if (this.scrollbarH) {
	                return this.innerWidth + 'px';
	            }
	            else {
	                return '100%';
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyComponent.prototype, "bodyHeight", {
	        get: function () {
	            return this._bodyHeight;
	        },
	        set: function (val) {
	            if (this.scrollbarV) {
	                this._bodyHeight = val + 'px';
	            }
	            else {
	                this._bodyHeight = 'auto';
	            }
	            this.recalcLayout();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyComponent.prototype, "selectEnabled", {
	        /**
	         * Returns if selection is enabled.
	         *
	         * @readonly
	         * @type {boolean}
	         * @memberOf DataTableBodyComponent
	         */
	        get: function () {
	            return !!this.selectionType;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyComponent.prototype, "scrollHeight", {
	        /**
	         * Property that would calculate the height of scroll bar
	         * based on the row heights cache for virtual scroll. Other scenarios
	         * calculate scroll height automatically (as height will be undefined).
	         *
	         * @readonly
	         * @type {number}
	         * @memberOf DataTableBodyComponent
	         */
	        get: function () {
	            if (this.scrollbarV) {
	                return this.rowHeightsCache.query(this.rowCount - 1);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableBodyComponent.prototype, "detailRowHeight", {
	        get: function () {
	            if (!this.rowDetail)
	                return 0;
	            return this.rowDetail.rowHeight;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Called after the constructor, initializing input properties
	     *
	     * @memberOf DataTableBodyComponent
	     */
	    DataTableBodyComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        if (this.rowDetail) {
	            this.listener = this.rowDetail.toggle.subscribe(function (_a) {
	                var type = _a.type, value = _a.value;
	                if (type === 'row')
	                    _this.toggleRowExpansion(value);
	                if (type === 'all')
	                    _this.toggleAllRows(value);
	            });
	        }
	    };
	    /**
	     * Called once, before the instance is destroyed.
	     *
	     * @memberOf DataTableBodyComponent
	     */
	    DataTableBodyComponent.prototype.ngOnDestroy = function () {
	        if (this.rowDetail)
	            this.listener.unsubscribe();
	    };
	    /**
	     * Updates the Y offset given a new offset.
	     *
	     * @param {number} [offset]
	     *
	     * @memberOf DataTableBodyComponent
	     */
	    DataTableBodyComponent.prototype.updateOffsetY = function (offset) {
	        // scroller is missing on empty table
	        if (!this.scroller) {
	            return;
	        }
	        if (this.scrollbarV && offset) {
	            // First get the row Index that we need to move to.
	            var rowIndex = this.pageSize * offset;
	            offset = this.rowHeightsCache.query(rowIndex - 1);
	        }
	        this.scroller.setOffset(offset || 0);
	    };
	    /**
	     * Body was scrolled, this is mainly useful for
	     * when a user is server-side pagination via virtual scroll.
	     *
	     * @param {*} event
	     *
	     * @memberOf DataTableBodyComponent
	     */
	    DataTableBodyComponent.prototype.onBodyScroll = function (event) {
	        var scrollYPos = event.scrollYPos;
	        var scrollXPos = event.scrollXPos;
	        // if scroll change, trigger update
	        // this is mainly used for header cell positions
	        if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
	            this.scroll.emit({
	                offsetY: scrollYPos,
	                offsetX: scrollXPos
	            });
	        }
	        this.offsetY = scrollYPos;
	        this.offsetX = scrollXPos;
	        this.updateIndexes();
	        this.updatePage(event.direction);
	        this.updateRows();
	    };
	    /**
	     * Updates the page given a direction.
	     *
	     * @param {string} direction
	     *
	     * @memberOf DataTableBodyComponent
	     */
	    DataTableBodyComponent.prototype.updatePage = function (direction) {
	        var offset = this.indexes.first / this.pageSize;
	        if (direction === 'up') {
	            offset = Math.floor(offset);
	        }
	        else if (direction === 'down') {
	            offset = Math.ceil(offset);
	        }
	        if (direction !== undefined && !isNaN(offset)) {
	            this.page.emit({ offset: offset });
	        }
	    };
	    /**
	     * Updates the rows in the view port
	     *
	     * @memberOf DataTableBodyComponent
	     */
	    DataTableBodyComponent.prototype.updateRows = function () {
	        var _a = this.indexes, first = _a.first, last = _a.last;
	        var rowIndex = first;
	        var idx = 0;
	        var temp = [];
	        while (rowIndex < last && rowIndex < this.rowCount) {
	            var row = this.rows[rowIndex];
	            if (row) {
	                row.$$index = rowIndex;
	                temp[idx] = row;
	            }
	            idx++;
	            rowIndex++;
	        }
	        this.temp = temp;
	    };
	    /**
	     * Calculate row height based on the expanded state of the row.
	     *
	     * @param {*} row the row for which the height need to be calculated.
	     * @returns {number} height of the row.
	     *
	     * @memberOf DataTableBodyComponent
	     */
	    DataTableBodyComponent.prototype.getRowHeight = function (row) {
	        // Adding detail row height if its expanded.
	        return this.rowHeight +
	            (row.$$expanded === 1 ? this.detailRowHeight : 0);
	    };
	    /**
	     * Calculates the styles for the row so that the rows can be moved in 2D space
	     * during virtual scroll inside the DOM.   In the below case the Y position is
	     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
	     * 100 px then following styles are generated:
	     *
	     * transform: translate3d(0px, 0px, 0px);    ->  row0
	     * transform: translate3d(0px, 30px, 0px);   ->  row1
	     * transform: translate3d(0px, 130px, 0px);  ->  row2
	     *
	     * Row heights have to be calculated based on the row heights cache as we wont
	     * be able to determine which row is of what height before hand.  In the above
	     * case the positionY of the translate3d for row2 would be the sum of all the
	     * heights of the rows before it (i.e. row0 and row1).
	     *
	     * @param {*} row The row that needs to be placed in the 2D space.
	     * @returns {*} Returns the CSS3 style to be applied
	     *
	     * @memberOf DataTableBodyComponent
	     */
	    DataTableBodyComponent.prototype.getRowsStyles = function (row) {
	        var rowHeight = this.getRowHeight(row);
	        var styles = {
	            height: rowHeight + 'px'
	        };
	        if (this.scrollbarV) {
	            var idx = row ? row.$$index : 0;
	            // const pos = idx * rowHeight;
	            // The position of this row would be the sum of all row heights
	            // until the previous row position.
	            var pos = this.rowHeightsCache.query(idx - 1);
	            utils_1.translateXY(styles, 0, pos);
	        }
	        return styles;
	    };
	    /**
	     * Hides the loading indicator
	     *
	     *
	     * @memberOf DataTableBodyComponent
	     */
	    DataTableBodyComponent.prototype.hideIndicator = function () {
	        var _this = this;
	        setTimeout(function () { return _this.loadingIndicator = false; }, 500);
	    };
	    /**
	     * Updates the index of the rows in the viewport
	     *
	     * @memberOf DataTableBodyComponent
	     */
	    DataTableBodyComponent.prototype.updateIndexes = function () {
	        var first = 0;
	        var last = 0;
	        if (this.scrollbarV) {
	            // Calculation of the first and last indexes will be based on where the
	            // scrollY position would be at.  The last index would be the one
	            // that shows up inside the view port the last.
	            var height = parseInt(this.bodyHeight, 0);
	            first = this.rowHeightsCache.getRowIndex(this.offsetY);
	            last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
	        }
	        else {
	            first = Math.max(this.offset * this.pageSize, 0);
	            last = Math.min((first + this.pageSize), this.rowCount);
	        }
	        this.indexes = { first: first, last: last };
	    };
	    /**
	     * Refreshes the full Row Height cache.  Should be used
	     * when the entire row array state has changed.
	     *
	     * @returns {void}
	     *
	     * @memberOf DataTableBodyComponent
	     */
	    DataTableBodyComponent.prototype.refreshRowHeightCache = function () {
	        if (!this.scrollbarV)
	            return;
	        // clear the previous row height cache if already present.
	        // this is useful during sorts, filters where the state of the
	        // rows array is changed.
	        this.rowHeightsCache.clearCache();
	        // Initialize the tree only if there are rows inside the tree.
	        if (this.rows && this.rows.length) {
	            this.rowHeightsCache.initCache(this.rows, this.rowHeight, this.detailRowHeight);
	        }
	    };
	    /**
	     * Gets the index for the view port
	     *
	     * @returns {number}
	     *
	     * @memberOf DataTableBodyComponent
	     */
	    DataTableBodyComponent.prototype.getAdjustedViewPortIndex = function () {
	        // Capture the row index of the first row that is visible on the viewport.
	        // If the scroll bar is just below the row which is highlighted then make that as the
	        // first index.
	        var viewPortFirstRowIndex = this.indexes.first;
	        if (this.scrollbarV) {
	            var offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
	            return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
	        }
	        return viewPortFirstRowIndex;
	    };
	    /**
	     * Toggle the Expansion of the row i.e. if the row is expanded then it will
	     * collapse and vice versa.   Note that the expanded status is stored as
	     * a part of the row object itself as we have to preserve the expanded row
	     * status in case of sorting and filtering of the row set.
	     *
	     * @param {*} row The row for which the expansion needs to be toggled.
	     *
	     * @memberOf DataTableBodyComponent
	     */
	    DataTableBodyComponent.prototype.toggleRowExpansion = function (row) {
	        // Capture the row index of the first row that is visible on the viewport.
	        var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
	        // If the detailRowHeight is auto --> only in case of non-virtualized scroll
	        if (this.scrollbarV) {
	            var detailRowHeight = this.detailRowHeight * (row.$$expanded ? -1 : 1);
	            this.rowHeightsCache.update(row.$$index, detailRowHeight);
	        }
	        // Update the toggled row and update the heights in the cache.
	        row.$$expanded ^= 1;
	        this.detailToggle.emit({
	            rows: [row],
	            currentIndex: viewPortFirstRowIndex
	        });
	    };
	    /**
	     * Expand/Collapse all the rows no matter what their state is.
	     *
	     * @param {boolean} expanded When true, all rows are expanded and when false, all rows will be collapsed.
	     *
	     * @memberOf DataTableBodyComponent
	     */
	    DataTableBodyComponent.prototype.toggleAllRows = function (expanded) {
	        var rowExpanded = expanded ? 1 : 0;
	        // Capture the row index of the first row that is visible on the viewport.
	        var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
	        for (var _i = 0, _a = this.rows; _i < _a.length; _i++) {
	            var row = _a[_i];
	            row.$$expanded = rowExpanded;
	        }
	        if (this.scrollbarV) {
	            // Refresh the full row heights cache since every row was affected.
	            this.refreshRowHeightCache();
	        }
	        // Emit all rows that have been expanded.
	        this.detailToggle.emit({
	            rows: this.rows,
	            currentIndex: viewPortFirstRowIndex
	        });
	    };
	    /**
	     * Recalculates the table
	     *
	     * @memberOf DataTableBodyComponent
	     */
	    DataTableBodyComponent.prototype.recalcLayout = function () {
	        this.refreshRowHeightCache();
	        this.updateIndexes();
	        this.updateRows();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableBodyComponent.prototype, "scrollbarV", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableBodyComponent.prototype, "scrollbarH", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableBodyComponent.prototype, "loadingIndicator", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableBodyComponent.prototype, "rowHeight", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableBodyComponent.prototype, "offsetX", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DataTableBodyComponent.prototype, "emptyMessage", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableBodyComponent.prototype, "selectionType", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], DataTableBodyComponent.prototype, "selected", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableBodyComponent.prototype, "rowIdentity", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableBodyComponent.prototype, "rowDetail", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableBodyComponent.prototype, "selectCheck", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DataTableBodyComponent.prototype, "trackByProp", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], DataTableBodyComponent.prototype, "pageSize", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array), 
	        __metadata('design:paramtypes', [Array])
	    ], DataTableBodyComponent.prototype, "rows", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array), 
	        __metadata('design:paramtypes', [Array])
	    ], DataTableBodyComponent.prototype, "columns", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], DataTableBodyComponent.prototype, "offset", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], DataTableBodyComponent.prototype, "rowCount", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableBodyComponent.prototype, "innerWidth", void 0);
	    __decorate([
	        core_1.HostBinding('style.width'), 
	        __metadata('design:type', String)
	    ], DataTableBodyComponent.prototype, "bodyWidth", null);
	    __decorate([
	        core_1.Input(),
	        core_1.HostBinding('style.height'), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], DataTableBodyComponent.prototype, "bodyHeight", null);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableBodyComponent.prototype, "scroll", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableBodyComponent.prototype, "page", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableBodyComponent.prototype, "activate", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableBodyComponent.prototype, "select", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableBodyComponent.prototype, "detailToggle", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], DataTableBodyComponent.prototype, "rowContextmenu", void 0);
	    __decorate([
	        core_1.ViewChild(scroller_component_1.ScrollerComponent), 
	        __metadata('design:type', scroller_component_1.ScrollerComponent)
	    ], DataTableBodyComponent.prototype, "scroller", void 0);
	    DataTableBodyComponent = __decorate([
	        core_1.Component({
	            selector: 'datatable-body',
	            template: "\n    <datatable-selection\n      #selector\n      [selected]=\"selected\"\n      [rows]=\"temp\"\n      [selectCheck]=\"selectCheck\"\n      [selectEnabled]=\"selectEnabled\"\n      [selectionType]=\"selectionType\"\n      [rowIdentity]=\"rowIdentity\"\n      (select)=\"select.emit($event)\"\n      (activate)=\"activate.emit($event)\">\n      <datatable-progress\n        *ngIf=\"loadingIndicator\">\n      </datatable-progress>\n      <datatable-scroller\n        *ngIf=\"rows?.length\"\n        [scrollbarV]=\"scrollbarV\"\n        [scrollbarH]=\"scrollbarH\"\n        [scrollHeight]=\"scrollHeight\"\n        [scrollWidth]=\"columnGroupWidths.total\"\n        (scroll)=\"onBodyScroll($event)\">\n        <datatable-row-wrapper\n          *ngFor=\"let row of temp; let i = index; trackBy: rowTrackingFn;\"\n          [ngStyle]=\"getRowsStyles(row)\"\n          [rowDetail]=\"rowDetail\"\n          [detailRowHeight]=\"detailRowHeight\"\n          [row]=\"row\"\n          [expanded]=\"row.$$expanded === 1\"\n          (rowContextmenu)=\"rowContextmenu.emit($event)\">\n          <datatable-body-row\n            tabindex=\"-1\"\n            [isSelected]=\"selector.getRowSelected(row)\"\n            [innerWidth]=\"innerWidth\"\n            [offsetX]=\"offsetX\"\n            [columns]=\"columns\"\n            [rowHeight]=\"rowHeight\"\n            [row]=\"row\"\n            (activate)=\"selector.onActivate($event, i)\">\n          </datatable-body-row>\n        </datatable-row-wrapper>\n      </datatable-scroller>\n      <div\n        class=\"empty-row\"\n        *ngIf=\"!rows?.length\"\n        [innerHTML]=\"emptyMessage\">\n      </div>\n    </datatable-selection>\n  ",
	            host: {
	                class: 'datatable-body'
	            }
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DataTableBodyComponent);
	    return DataTableBodyComponent;
	}());
	exports.DataTableBodyComponent = DataTableBodyComponent;
	
	
	/***/ }),
	
	/***/ "./src/components/body/index.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__("./src/components/body/body.component.ts"));
	__export(__webpack_require__("./src/components/body/body-cell.component.ts"));
	__export(__webpack_require__("./src/components/body/body-row.component.ts"));
	__export(__webpack_require__("./src/components/body/progress-bar.component.ts"));
	__export(__webpack_require__("./src/components/body/scroller.component.ts"));
	__export(__webpack_require__("./src/components/body/body-row-wrapper.component.ts"));
	__export(__webpack_require__("./src/components/body/selection.component.ts"));
	
	
	/***/ }),
	
	/***/ "./src/components/body/progress-bar.component.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var ProgressBarComponent = (function () {
	    function ProgressBarComponent() {
	    }
	    ProgressBarComponent = __decorate([
	        core_1.Component({
	            selector: 'datatable-progress',
	            template: "\n    <div class=\"progress-linear\" role=\"progressbar\">\n      <div class=\"container\">\n        <div class=\"bar\"></div>\n      </div>\n    </div>\n  ",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ProgressBarComponent);
	    return ProgressBarComponent;
	}());
	exports.ProgressBarComponent = ProgressBarComponent;
	
	
	/***/ }),
	
	/***/ "./src/components/body/scroller.component.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var ScrollerComponent = (function () {
	    function ScrollerComponent(element, renderer) {
	        this.renderer = renderer;
	        this.scrollbarV = false;
	        this.scrollbarH = false;
	        this.scroll = new core_1.EventEmitter();
	        this.scrollYPos = 0;
	        this.scrollXPos = 0;
	        this.prevScrollYPos = 0;
	        this.prevScrollXPos = 0;
	        this.element = element.nativeElement;
	    }
	    ScrollerComponent.prototype.ngOnInit = function () {
	        // manual bind so we don't always listen
	        if (this.scrollbarV || this.scrollbarH) {
	            this.parentElement = this.element.parentElement.parentElement;
	            this.onScrollListener = this.renderer.listen(this.parentElement, 'scroll', this.onScrolled.bind(this));
	        }
	    };
	    ScrollerComponent.prototype.ngOnDestroy = function () {
	        if (this.scrollbarV || this.scrollbarH) {
	            this.onScrollListener();
	        }
	    };
	    ScrollerComponent.prototype.setOffset = function (offsetY) {
	        if (this.parentElement) {
	            this.parentElement.scrollTop = offsetY;
	        }
	    };
	    ScrollerComponent.prototype.onScrolled = function (event) {
	        var dom = event.currentTarget;
	        this.scrollYPos = dom.scrollTop;
	        this.scrollXPos = dom.scrollLeft;
	        requestAnimationFrame(this.updateOffset.bind(this));
	    };
	    ScrollerComponent.prototype.updateOffset = function () {
	        var direction;
	        if (this.scrollYPos < this.prevScrollYPos) {
	            direction = 'down';
	        }
	        else if (this.scrollYPos > this.prevScrollYPos) {
	            direction = 'up';
	        }
	        this.scroll.emit({
	            direction: direction,
	            scrollYPos: this.scrollYPos,
	            scrollXPos: this.scrollXPos
	        });
	        this.prevScrollYPos = this.scrollYPos;
	        this.prevScrollXPos = this.scrollXPos;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], ScrollerComponent.prototype, "scrollbarV", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], ScrollerComponent.prototype, "scrollbarH", void 0);
	    __decorate([
	        core_1.HostBinding('style.height.px'),
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], ScrollerComponent.prototype, "scrollHeight", void 0);
	    __decorate([
	        core_1.HostBinding('style.width.px'),
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], ScrollerComponent.prototype, "scrollWidth", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], ScrollerComponent.prototype, "scroll", void 0);
	    ScrollerComponent = __decorate([
	        core_1.Component({
	            selector: 'datatable-scroller',
	            template: "\n    <ng-content></ng-content>\n  ",
	            host: {
	                class: 'datatable-scroll'
	            }
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], ScrollerComponent);
	    return ScrollerComponent;
	}());
	exports.ScrollerComponent = ScrollerComponent;
	
	
	/***/ }),
	
	/***/ "./src/components/body/selection.component.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var utils_1 = __webpack_require__("./src/utils/index.ts");
	var types_1 = __webpack_require__("./src/types/index.ts");
	var DataTableSelectionComponent = (function () {
	    function DataTableSelectionComponent() {
	        this.activate = new core_1.EventEmitter();
	        this.select = new core_1.EventEmitter();
	    }
	    DataTableSelectionComponent.prototype.selectRow = function (event, index, row) {
	        if (!this.selectEnabled)
	            return;
	        var chkbox = this.selectionType === types_1.SelectionType.checkbox;
	        var multi = this.selectionType === types_1.SelectionType.multi;
	        var multiClick = this.selectionType === types_1.SelectionType.multiClick;
	        var selected = [];
	        if (multi || chkbox || multiClick) {
	            if (event.shiftKey) {
	                selected = utils_1.selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
	            }
	            else if (event.ctrlKey || multiClick || chkbox) {
	                selected = utils_1.selectRows(this.selected.slice(), row, this.getRowSelectedIdx.bind(this));
	            }
	            else {
	                selected = utils_1.selectRows([], row, this.getRowSelectedIdx.bind(this));
	            }
	        }
	        else {
	            selected = utils_1.selectRows([], row, this.getRowSelectedIdx.bind(this));
	        }
	        if (typeof this.selectCheck === 'function') {
	            selected = selected.filter(this.selectCheck.bind(this));
	        }
	        this.selected.splice(0, this.selected.length);
	        (_a = this.selected).push.apply(_a, selected);
	        this.prevIndex = index;
	        this.select.emit({
	            selected: selected
	        });
	        var _a;
	    };
	    DataTableSelectionComponent.prototype.onActivate = function (model, index) {
	        var type = model.type, event = model.event, row = model.row;
	        var chkbox = this.selectionType === types_1.SelectionType.checkbox;
	        var select = (!chkbox && (type === 'click' || type === 'dblclick')) ||
	            (chkbox && type === 'checkbox');
	        if (select) {
	            this.selectRow(event, index, row);
	        }
	        else if (type === 'keydown') {
	            if (event.keyCode === utils_1.Keys.return) {
	                this.selectRow(event, index, row);
	            }
	            else {
	                this.onKeyboardFocus(model);
	            }
	        }
	        this.activate.emit(model);
	    };
	    DataTableSelectionComponent.prototype.onKeyboardFocus = function (model) {
	        var keyCode = model.event.keyCode;
	        var shouldFocus = keyCode === utils_1.Keys.up ||
	            keyCode === utils_1.Keys.down ||
	            keyCode === utils_1.Keys.right ||
	            keyCode === utils_1.Keys.left;
	        if (shouldFocus) {
	            var isCellSelection = this.selectionType === types_1.SelectionType.cell;
	            if (!model.cellElement || !isCellSelection) {
	                this.focusRow(model.rowElement, keyCode);
	            }
	            else if (isCellSelection) {
	                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
	            }
	        }
	    };
	    DataTableSelectionComponent.prototype.focusRow = function (rowElement, keyCode) {
	        var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
	        if (nextRowElement)
	            nextRowElement.focus();
	    };
	    DataTableSelectionComponent.prototype.getPrevNextRow = function (rowElement, keyCode) {
	        var parentElement = rowElement.parentElement;
	        if (parentElement) {
	            var focusElement = void 0;
	            if (keyCode === utils_1.Keys.up) {
	                focusElement = parentElement.previousElementSibling;
	            }
	            else if (keyCode === utils_1.Keys.down) {
	                focusElement = parentElement.nextElementSibling;
	            }
	            if (focusElement && focusElement.children.length) {
	                return focusElement.children[0];
	            }
	        }
	    };
	    DataTableSelectionComponent.prototype.focusCell = function (cellElement, rowElement, keyCode, cellIndex) {
	        var nextCellElement;
	        if (keyCode === utils_1.Keys.left) {
	            nextCellElement = cellElement.previousElementSibling;
	        }
	        else if (keyCode === utils_1.Keys.right) {
	            nextCellElement = cellElement.nextElementSibling;
	        }
	        else if (keyCode === utils_1.Keys.up || keyCode === utils_1.Keys.down) {
	            var nextRowElement = this.getPrevNextRow(rowElement, keyCode);
	            if (nextRowElement) {
	                var children = nextRowElement.getElementsByClassName('datatable-body-cell');
	                if (children.length)
	                    nextCellElement = children[cellIndex];
	            }
	        }
	        if (nextCellElement)
	            nextCellElement.focus();
	    };
	    DataTableSelectionComponent.prototype.getRowSelected = function (row) {
	        return this.getRowSelectedIdx(row, this.selected) > -1;
	    };
	    DataTableSelectionComponent.prototype.getRowSelectedIdx = function (row, selected) {
	        var _this = this;
	        if (!selected || !selected.length)
	            return -1;
	        var rowId = this.rowIdentity(row);
	        return selected.findIndex(function (r) {
	            var id = _this.rowIdentity(r);
	            return id === rowId;
	        });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], DataTableSelectionComponent.prototype, "rows", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], DataTableSelectionComponent.prototype, "selected", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableSelectionComponent.prototype, "selectEnabled", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableSelectionComponent.prototype, "selectionType", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableSelectionComponent.prototype, "rowIdentity", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableSelectionComponent.prototype, "selectCheck", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableSelectionComponent.prototype, "activate", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableSelectionComponent.prototype, "select", void 0);
	    DataTableSelectionComponent = __decorate([
	        core_1.Component({
	            selector: 'datatable-selection',
	            template: "\n    <ng-content></ng-content>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DataTableSelectionComponent);
	    return DataTableSelectionComponent;
	}());
	exports.DataTableSelectionComponent = DataTableSelectionComponent;
	
	
	/***/ }),
	
	/***/ "./src/components/columns/column-cell.directive.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var DataTableColumnCellDirective = (function () {
	    function DataTableColumnCellDirective(template) {
	        this.template = template;
	    }
	    ;
	    DataTableColumnCellDirective = __decorate([
	        core_1.Directive({ selector: '[ngx-datatable-cell-template]' }), 
	        __metadata('design:paramtypes', [core_1.TemplateRef])
	    ], DataTableColumnCellDirective);
	    return DataTableColumnCellDirective;
	}());
	exports.DataTableColumnCellDirective = DataTableColumnCellDirective;
	
	
	/***/ }),
	
	/***/ "./src/components/columns/column-header.directive.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var DataTableColumnHeaderDirective = (function () {
	    function DataTableColumnHeaderDirective(template) {
	        this.template = template;
	    }
	    ;
	    DataTableColumnHeaderDirective = __decorate([
	        core_1.Directive({ selector: '[ngx-datatable-header-template]' }), 
	        __metadata('design:paramtypes', [core_1.TemplateRef])
	    ], DataTableColumnHeaderDirective);
	    return DataTableColumnHeaderDirective;
	}());
	exports.DataTableColumnHeaderDirective = DataTableColumnHeaderDirective;
	
	
	/***/ }),
	
	/***/ "./src/components/columns/column.directive.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var column_header_directive_1 = __webpack_require__("./src/components/columns/column-header.directive.ts");
	var column_cell_directive_1 = __webpack_require__("./src/components/columns/column-cell.directive.ts");
	var DataTableColumnDirective = (function () {
	    function DataTableColumnDirective() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DataTableColumnDirective.prototype, "name", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DataTableColumnDirective.prototype, "prop", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableColumnDirective.prototype, "frozenLeft", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableColumnDirective.prototype, "frozenRight", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableColumnDirective.prototype, "flexGrow", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableColumnDirective.prototype, "resizeable", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], DataTableColumnDirective.prototype, "comparator", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableColumnDirective.prototype, "pipe", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableColumnDirective.prototype, "sortable", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableColumnDirective.prototype, "draggable", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableColumnDirective.prototype, "canAutoResize", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableColumnDirective.prototype, "minWidth", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableColumnDirective.prototype, "width", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableColumnDirective.prototype, "maxWidth", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableColumnDirective.prototype, "checkboxable", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableColumnDirective.prototype, "headerCheckboxable", void 0);
	    __decorate([
	        core_1.Input(),
	        core_1.ContentChild(column_cell_directive_1.DataTableColumnCellDirective, { read: core_1.TemplateRef }), 
	        __metadata('design:type', core_1.TemplateRef)
	    ], DataTableColumnDirective.prototype, "cellTemplate", void 0);
	    __decorate([
	        core_1.Input(),
	        core_1.ContentChild(column_header_directive_1.DataTableColumnHeaderDirective, { read: core_1.TemplateRef }), 
	        __metadata('design:type', core_1.TemplateRef)
	    ], DataTableColumnDirective.prototype, "headerTemplate", void 0);
	    DataTableColumnDirective = __decorate([
	        core_1.Directive({ selector: 'ngx-datatable-column' }), 
	        __metadata('design:paramtypes', [])
	    ], DataTableColumnDirective);
	    return DataTableColumnDirective;
	}());
	exports.DataTableColumnDirective = DataTableColumnDirective;
	
	
	/***/ }),
	
	/***/ "./src/components/columns/index.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__("./src/components/columns/column.directive.ts"));
	__export(__webpack_require__("./src/components/columns/column-header.directive.ts"));
	__export(__webpack_require__("./src/components/columns/column-cell.directive.ts"));
	
	
	/***/ }),
	
	/***/ "./src/components/datatable.component.scss":
	/***/ (function(module, exports, __webpack_require__) {
	
	
	        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/index.js?sourceMap!./node_modules/sass-loader/index.js?sourceMap!./src/components/datatable.component.scss");
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    
	
	/***/ }),
	
	/***/ "./src/components/datatable.component.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var utils_1 = __webpack_require__("./src/utils/index.ts");
	var types_1 = __webpack_require__("./src/types/index.ts");
	var body_1 = __webpack_require__("./src/components/body/index.ts");
	var columns_1 = __webpack_require__("./src/components/columns/index.ts");
	var row_detail_1 = __webpack_require__("./src/components/row-detail/index.ts");
	var DatatableComponent = (function () {
	    function DatatableComponent(element, differs) {
	        /**
	         * List of row objects that should be
	         * represented as selected in the grid.
	         * Default value: `[]`
	         *
	         * @type {any[]}
	         * @memberOf DatatableComponent
	         */
	        this.selected = [];
	        /**
	         * Enable vertical scrollbars
	         *
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        this.scrollbarV = false;
	        /**
	         * Enable horz scrollbars
	         *
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        this.scrollbarH = false;
	        /**
	         * The row height; which is necessary
	         * to calculate the height for the lazy rendering.
	         *
	         * @type {number}
	         * @memberOf DatatableComponent
	         */
	        this.rowHeight = 30;
	        /**
	         * Type of column width distribution formula.
	         * Example: flex, force, standard
	         *
	         * @type {ColumnMode}
	         * @memberOf DatatableComponent
	         */
	        this.columnMode = types_1.ColumnMode.standard;
	        /**
	         * The minimum header height in pixels.
	         * Pass a falsey for no header
	         *
	         * @type {*}
	         * @memberOf DatatableComponent
	         */
	        this.headerHeight = 30;
	        /**
	         * The minimum footer height in pixels.
	         * Pass falsey for no footer
	         *
	         * @type {number}
	         * @memberOf DatatableComponent
	         */
	        this.footerHeight = 0;
	        /**
	         * If the table should use external paging
	         * otherwise its assumed that all data is preloaded.
	         *
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        this.externalPaging = false;
	        /**
	         * If the table should use external sorting or
	         * the built-in basic sorting.
	         *
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        this.externalSorting = false;
	        /**
	         * The page size to be shown.
	         * Default value: `undefined`
	         *
	         * @type {number}
	         * @memberOf DatatableComponent
	         */
	        this.limit = undefined;
	        /**
	         * The current offset ( page - 1 ) shown.
	         * Default value: `0`
	         *
	         * @type {number}
	         * @memberOf DatatableComponent
	         */
	        this.offset = 0;
	        /**
	         * Show the linear loading bar.
	         * Default value: `false`
	         *
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        this.loadingIndicator = false;
	        /**
	         * Enable/Disable ability to re-order columns
	         * by dragging them.
	         *
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        this.reorderable = true;
	        /**
	         * The type of sorting
	         *
	         * @type {SortType}
	         * @memberOf DatatableComponent
	         */
	        this.sortType = types_1.SortType.single;
	        /**
	         * Array of sorted columns by property and type.
	         * Default value: `[]`
	         *
	         * @type {any[]}
	         * @memberOf DatatableComponent
	         */
	        this.sorts = [];
	        /**
	         * Css class overrides
	         *
	         * @type {*}
	         * @memberOf DatatableComponent
	         */
	        this.cssClasses = {
	            sortAscending: 'icon-down',
	            sortDescending: 'icon-up',
	            pagerLeftArrow: 'icon-left',
	            pagerRightArrow: 'icon-right',
	            pagerPrevious: 'icon-prev',
	            pagerNext: 'icon-skip'
	        };
	        /**
	         * Message overrides for localization
	         *
	         * @type {*}
	         * @memberOf DatatableComponent
	         */
	        this.messages = {
	            // Message to show when array is presented
	            // but contains no values
	            emptyMessage: 'No data to display',
	            // Footer total message
	            totalMessage: 'total'
	        };
	        /**
	         * This will be used when displaying or selecting rows.
	         * when tracking/comparing them, we'll use the value of this fn,
	         *
	         * (`fn(x) === fn(y)` instead of `x === y`)
	         *
	         * @memberOf DatatableComponent
	         */
	        this.rowIdentity = (function (x) { return x; });
	        /**
	         * Body was scrolled typically in a `scrollbarV:true` scenario.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf DatatableComponent
	         */
	        this.scroll = new core_1.EventEmitter();
	        /**
	         * A cell or row was focused via keyboard or mouse click.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf DatatableComponent
	         */
	        this.activate = new core_1.EventEmitter();
	        /**
	         * A cell or row was selected.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf DatatableComponent
	         */
	        this.select = new core_1.EventEmitter();
	        /**
	         * Column sort was invoked.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf DatatableComponent
	         */
	        this.sort = new core_1.EventEmitter();
	        /**
	         * The table was paged either triggered by the pager or the body scroll.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf DatatableComponent
	         */
	        this.page = new core_1.EventEmitter();
	        /**
	         * Columns were re-ordered.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf DatatableComponent
	         */
	        this.reorder = new core_1.EventEmitter();
	        /**
	         * Column was resized.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf DatatableComponent
	         */
	        this.resize = new core_1.EventEmitter();
	        /**
	         * The context menu was invoked on a row.
	         *
	         * @memberOf DatatableComponent
	         */
	        this.rowContextmenu = new core_1.EventEmitter(false);
	        this.offsetX = 0;
	        this._count = 0;
	        // get ref to elm for measuring
	        this.element = element.nativeElement;
	        this.rowDiffer = differs.find({}).create(null);
	    }
	    Object.defineProperty(DatatableComponent.prototype, "rows", {
	        /**
	         * Gets the rows.
	         *
	         * @readonly
	         * @type {*}
	         * @memberOf DatatableComponent
	         */
	        get: function () {
	            return this._rows;
	        },
	        /**
	         * Rows that are displayed in the table.
	         *
	         * @memberOf DatatableComponent
	         */
	        set: function (val) {
	            // auto sort on new updates
	            if (!this.externalSorting) {
	                val = utils_1.sortRows(val, this.columns, this.sorts);
	            }
	            this._rows = val;
	            // recalculate sizes/etc
	            this.recalculate();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DatatableComponent.prototype, "columns", {
	        /**
	         * Get the columns.
	         *
	         * @readonly
	         * @type {any[]}
	         * @memberOf DatatableComponent
	         */
	        get: function () {
	            return this._columns;
	        },
	        /**
	         * Columns to be displayed.
	         *
	         * @memberOf DatatableComponent
	         */
	        set: function (val) {
	            if (val) {
	                utils_1.setColumnDefaults(val);
	                this.recalculateColumns(val);
	            }
	            this._columns = val;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DatatableComponent.prototype, "count", {
	        /**
	         * Gets the count.
	         *
	         * @readonly
	         * @type {number}
	         * @memberOf DatatableComponent
	         */
	        get: function () {
	            return this._count;
	        },
	        /**
	         * The total count of all rows.
	         * Default value: `0`
	         *
	         * @type {number}
	         * @memberOf DatatableComponent
	         */
	        set: function (val) {
	            this._count = val;
	            // recalculate sizes/etc
	            this.recalculate();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DatatableComponent.prototype, "isFixedHeader", {
	        /**
	         * CSS class applied if the header height if fixed height.
	         *
	         * @readonly
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        get: function () {
	            var headerHeight = this.headerHeight;
	            return (typeof headerHeight === 'string') ?
	                headerHeight !== 'auto' : true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DatatableComponent.prototype, "isFixedRow", {
	        /**
	         * CSS class applied to the root element if
	         * the row heights are fixed heights.
	         *
	         * @readonly
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        get: function () {
	            var rowHeight = this.rowHeight;
	            return (typeof rowHeight === 'string') ?
	                rowHeight !== 'auto' : true;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DatatableComponent.prototype, "isVertScroll", {
	        /**
	         * CSS class applied to root element if
	         * vertical scrolling is enabled.
	         *
	         * @readonly
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        get: function () {
	            return this.scrollbarV;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DatatableComponent.prototype, "isHorScroll", {
	        /**
	         * CSS class applied to the root element
	         * if the horziontal scrolling is enabled.
	         *
	         * @readonly
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        get: function () {
	            return this.scrollbarH;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DatatableComponent.prototype, "isSelectable", {
	        /**
	         * CSS class applied to root element is selectable.
	         *
	         * @readonly
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        get: function () {
	            return this.selectionType !== undefined;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DatatableComponent.prototype, "isCheckboxSelection", {
	        /**
	         * CSS class applied to root is checkbox selection.
	         *
	         * @readonly
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        get: function () {
	            return this.selectionType === types_1.SelectionType.checkbox;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DatatableComponent.prototype, "isCellSelection", {
	        /**
	         * CSS class applied to root if cell selection.
	         *
	         * @readonly
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        get: function () {
	            return this.selectionType === types_1.SelectionType.cell;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DatatableComponent.prototype, "isSingleSelection", {
	        /**
	         * CSS class applied to root if single select.
	         *
	         * @readonly
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        get: function () {
	            return this.selectionType === types_1.SelectionType.single;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DatatableComponent.prototype, "isMultiSelection", {
	        /**
	         * CSS class added to root element if mulit select
	         *
	         * @readonly
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        get: function () {
	            return this.selectionType === types_1.SelectionType.multi;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DatatableComponent.prototype, "isMultiClickSelection", {
	        /**
	         * CSS class added to root element if mulit click select
	         *
	         * @readonly
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        get: function () {
	            return this.selectionType === types_1.SelectionType.multiClick;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DatatableComponent.prototype, "columnTemplates", {
	        /**
	         * Returns the column templates.
	         *
	         * @readonly
	         * @type {QueryList<DataTableColumnDirective>}
	         * @memberOf DatatableComponent
	         */
	        get: function () {
	            return this._columnTemplates;
	        },
	        /**
	         * Column templates gathered from `ContentChildren`
	         * if described in your markup.
	         *
	         * @memberOf DatatableComponent
	         */
	        set: function (val) {
	            this._columnTemplates = val;
	            if (val) {
	                // only set this if results were brought back
	                var arr = val.toArray();
	                if (arr.length) {
	                    // translate them to normal objects
	                    this.columns = utils_1.translateTemplates(arr);
	                }
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DatatableComponent.prototype, "allRowsSelected", {
	        /**
	         * Returns if all rows are selected.
	         *
	         * @readonly
	         * @private
	         * @type {boolean}
	         * @memberOf DatatableComponent
	         */
	        get: function () {
	            return this.selected &&
	                this.rows &&
	                this.selected.length === this.rows.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Lifecycle hook that is called after data-bound
	     * properties of a directive are initialized.
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.ngOnInit = function () {
	        // need to call this immediatly to size
	        // if the table is hidden the visibility
	        // listener will invoke this itself upon show
	        this.recalculate();
	    };
	    /**
	     * Lifecycle hook that is called after a component's
	     * view has been fully initialized.
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        // this has to be done to prevent the change detection
	        // tree from freaking out because we are readjusting
	        setTimeout(function () { return _this.recalculate(); });
	    };
	    /**
	     * Lifecycle hook that is called when Angular dirty checks a directive.
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.ngDoCheck = function () {
	        if (this.rowDiffer.diff(this.rows)) {
	            this.recalculatePages();
	        }
	    };
	    /**
	     * Recalc's the sizes of the grid.
	     *
	     * Updated automatically on changes to:
	     *
	     *  - Columns
	     *  - Rows
	     *  - Paging related
	     *
	     * Also can be manually invoked or upon window resize.
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.recalculate = function () {
	        this.recalculateDims();
	        this.recalculateColumns();
	    };
	    /**
	     * Window resize handler to update sizes.
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.onWindowResize = function () {
	        this.recalculate();
	    };
	    /**
	     * Recalulcates the column widths based on column width
	     * distribution mode and scrollbar offsets.
	     *
	     * @param {any[]} [columns=this.columns]
	     * @param {number} [forceIdx=false]
	     * @param {boolean} [allowBleed=this.scrollH]
	     * @returns {any[]}
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.recalculateColumns = function (columns, forceIdx, allowBleed) {
	        if (columns === void 0) { columns = this.columns; }
	        if (forceIdx === void 0) { forceIdx = -1; }
	        if (allowBleed === void 0) { allowBleed = this.scrollbarH; }
	        if (!columns)
	            return;
	        var width = this.innerWidth;
	        if (this.scrollbarV) {
	            width = width - utils_1.scrollbarWidth;
	        }
	        if (this.columnMode === types_1.ColumnMode.force) {
	            utils_1.forceFillColumnWidths(columns, width, forceIdx, allowBleed);
	        }
	        else if (this.columnMode === types_1.ColumnMode.flex) {
	            utils_1.adjustColumnWidths(columns, width);
	        }
	        return columns;
	    };
	    /**
	     * Recalculates the dimensions of the table size.
	     * Internally calls the page size and row count calcs too.
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.recalculateDims = function () {
	        var _a = this.element.getBoundingClientRect(), height = _a.height, width = _a.width;
	        this.innerWidth = Math.floor(width);
	        if (this.scrollbarV) {
	            if (this.headerHeight)
	                height = height - this.headerHeight;
	            if (this.footerHeight)
	                height = height - this.footerHeight;
	            this.bodyHeight = height;
	        }
	        this.recalculatePages();
	    };
	    /**
	     * Recalculates the pages after a update.
	     *
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.recalculatePages = function () {
	        this.pageSize = this.calcPageSize();
	        this.rowCount = this.calcRowCount();
	    };
	    /**
	     * Body triggered a page event.
	     *
	     * @param {*} { offset }
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.onBodyPage = function (_a) {
	        var offset = _a.offset;
	        this.offset = offset;
	        this.page.emit({
	            count: this.count,
	            pageSize: this.pageSize,
	            limit: this.limit,
	            offset: this.offset
	        });
	    };
	    /**
	     * The body triggered a scroll event.
	     *
	     * @param {MouseEvent} event
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.onBodyScroll = function (event) {
	        this.offsetX = event.offsetX;
	        this.scroll.emit(event);
	    };
	    /**
	     * The footer triggered a page event.
	     *
	     * @param {*} event
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.onFooterPage = function (event) {
	        this.offset = event.page - 1;
	        this.bodyComponent.updateOffsetY(this.offset);
	        this.page.emit({
	            count: this.count,
	            pageSize: this.pageSize,
	            limit: this.limit,
	            offset: this.offset
	        });
	    };
	    /**
	     * Recalculates the sizes of the page
	     *
	     * @param {any[]} [val=this.rows]
	     * @returns {number}
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.calcPageSize = function (val) {
	        if (val === void 0) { val = this.rows; }
	        // Keep the page size constant even if the row has been expanded.
	        // This is because an expanded row is still considered to be a child of
	        // the original row.  Hence calculation would use rowHeight only.
	        if (this.scrollbarV) {
	            var size = Math.ceil(this.bodyHeight / this.rowHeight);
	            return Math.max(size, 0);
	        }
	        // if limit is passed, we are paging
	        if (this.limit !== undefined)
	            return this.limit;
	        // otherwise use row length
	        if (val)
	            return val.length;
	        // other empty :(
	        return 0;
	    };
	    /**
	     * Calculates the row count.
	     *
	     * @param {any[]} [val=this.rows]
	     * @returns {number}
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.calcRowCount = function (val) {
	        if (val === void 0) { val = this.rows; }
	        if (!this.externalPaging) {
	            if (!val)
	                return 0;
	            return val.length;
	        }
	        return this.count;
	    };
	    /**
	     * The header triggered a column resize event.
	     *
	     * @param {*} { column, newValue }
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.onColumnResize = function (_a) {
	        var column = _a.column, newValue = _a.newValue;
	        var idx;
	        var cols = this.columns.map(function (c, i) {
	            c = Object.assign({}, c);
	            if (c.$$id === column.$$id) {
	                idx = i;
	                c.width = newValue;
	                // set this so we can force the column
	                // width distribution to be to this value
	                c.$$oldWidth = newValue;
	            }
	            return c;
	        });
	        this.recalculateColumns(cols, idx);
	        this._columns = cols;
	        this.resize.emit({
	            column: column,
	            newValue: newValue
	        });
	    };
	    /**
	     * The header triggered a column re-order event.
	     *
	     * @param {*} { column, newValue, prevValue }
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.onColumnReorder = function (_a) {
	        var column = _a.column, newValue = _a.newValue, prevValue = _a.prevValue;
	        var cols = this.columns.map(function (c) {
	            return Object.assign({}, c);
	        });
	        cols.splice(prevValue, 1);
	        cols.splice(newValue, 0, column);
	        this.columns = cols;
	        this.reorder.emit({
	            column: column,
	            newValue: newValue,
	            prevValue: prevValue
	        });
	    };
	    /**
	     * The header triggered a column sort event.
	     *
	     * @param {*} event
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.onColumnSort = function (event) {
	        var sorts = event.sorts;
	        // this could be optimized better since it will resort
	        // the rows again on the 'push' detection...
	        if (this.externalSorting === false) {
	            // don't use normal setter so we don't resort
	            this._rows = utils_1.sortRows(this.rows, this.columns, sorts);
	        }
	        this.sorts = sorts;
	        this.bodyComponent.updateOffsetY(0);
	        this.sort.emit(event);
	    };
	    /**
	     * Toggle all row selection
	     *
	     * @param {*} event
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.onHeaderSelect = function (event) {
	        // before we splice, chk if we currently have all selected
	        var allSelected = this.selected.length === this.rows.length;
	        // remove all existing either way
	        this.selected.splice(0, this.selected.length);
	        // do the opposite here
	        if (!allSelected) {
	            (_a = this.selected).push.apply(_a, this.rows);
	        }
	        this.select.emit({
	            selected: this.selected
	        });
	        var _a;
	    };
	    /**
	     * A row was selected from body
	     *
	     * @param {*} event
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableComponent.prototype.onBodySelect = function (event) {
	        this.select.emit(event);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], DatatableComponent.prototype, "rows", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array), 
	        __metadata('design:paramtypes', [Array])
	    ], DatatableComponent.prototype, "columns", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], DatatableComponent.prototype, "selected", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "scrollbarV", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "scrollbarH", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DatatableComponent.prototype, "rowHeight", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DatatableComponent.prototype, "columnMode", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DatatableComponent.prototype, "headerHeight", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DatatableComponent.prototype, "footerHeight", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "externalPaging", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "externalSorting", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DatatableComponent.prototype, "limit", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], DatatableComponent.prototype, "count", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DatatableComponent.prototype, "offset", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "loadingIndicator", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DatatableComponent.prototype, "selectionType", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "reorderable", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DatatableComponent.prototype, "sortType", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], DatatableComponent.prototype, "sorts", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DatatableComponent.prototype, "cssClasses", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DatatableComponent.prototype, "messages", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], DatatableComponent.prototype, "rowIdentity", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DatatableComponent.prototype, "selectCheck", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DatatableComponent.prototype, "trackByProp", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DatatableComponent.prototype, "scroll", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DatatableComponent.prototype, "activate", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DatatableComponent.prototype, "select", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DatatableComponent.prototype, "sort", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DatatableComponent.prototype, "page", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DatatableComponent.prototype, "reorder", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DatatableComponent.prototype, "resize", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], DatatableComponent.prototype, "rowContextmenu", void 0);
	    __decorate([
	        core_1.HostBinding('class.fixed-header'), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "isFixedHeader", null);
	    __decorate([
	        core_1.HostBinding('class.fixed-row'), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "isFixedRow", null);
	    __decorate([
	        core_1.HostBinding('class.scroll-vertical'), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "isVertScroll", null);
	    __decorate([
	        core_1.HostBinding('class.scroll-horz'), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "isHorScroll", null);
	    __decorate([
	        core_1.HostBinding('class.selectable'), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "isSelectable", null);
	    __decorate([
	        core_1.HostBinding('class.checkbox-selection'), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "isCheckboxSelection", null);
	    __decorate([
	        core_1.HostBinding('class.cell-selection'), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "isCellSelection", null);
	    __decorate([
	        core_1.HostBinding('class.single-selection'), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "isSingleSelection", null);
	    __decorate([
	        core_1.HostBinding('class.multi-selection'), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "isMultiSelection", null);
	    __decorate([
	        core_1.HostBinding('class.multi-click-selection'), 
	        __metadata('design:type', Boolean)
	    ], DatatableComponent.prototype, "isMultiClickSelection", null);
	    __decorate([
	        core_1.ContentChildren(columns_1.DataTableColumnDirective), 
	        __metadata('design:type', core_1.QueryList), 
	        __metadata('design:paramtypes', [core_1.QueryList])
	    ], DatatableComponent.prototype, "columnTemplates", null);
	    __decorate([
	        core_1.ContentChild(row_detail_1.DatatableRowDetailDirective), 
	        __metadata('design:type', row_detail_1.DatatableRowDetailDirective)
	    ], DatatableComponent.prototype, "rowDetail", void 0);
	    __decorate([
	        core_1.ViewChild(body_1.DataTableBodyComponent), 
	        __metadata('design:type', body_1.DataTableBodyComponent)
	    ], DatatableComponent.prototype, "bodyComponent", void 0);
	    __decorate([
	        core_1.HostListener('window:resize'),
	        utils_1.throttleable(5), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], DatatableComponent.prototype, "onWindowResize", null);
	    DatatableComponent = __decorate([
	        core_1.Component({
	            selector: 'ngx-datatable',
	            template: "\n    <div\n      visibility-observer\n      (visible)=\"recalculate()\">\n      <datatable-header\n        *ngIf=\"headerHeight\"\n        [sorts]=\"sorts\"\n        [sortType]=\"sortType\"\n        [scrollbarH]=\"scrollbarH\"\n        [innerWidth]=\"innerWidth\"\n        [offsetX]=\"offsetX\"\n        [columns]=\"columns\"\n        [headerHeight]=\"headerHeight\"\n        [reorderable]=\"reorderable\"\n        [sortAscendingIcon]=\"cssClasses.sortAscending\"\n        [sortDescendingIcon]=\"cssClasses.sortDescending\"\n        [allRowsSelected]=\"allRowsSelected\"\n        [selectionType]=\"selectionType\"\n        (sort)=\"onColumnSort($event)\"\n        (resize)=\"onColumnResize($event)\"\n        (reorder)=\"onColumnReorder($event)\"\n        (select)=\"onHeaderSelect($event)\">\n      </datatable-header>\n      <datatable-body\n        [rows]=\"rows\"\n        [scrollbarV]=\"scrollbarV\"\n        [scrollbarH]=\"scrollbarH\"\n        [loadingIndicator]=\"loadingIndicator\"\n        [rowHeight]=\"rowHeight\"\n        [rowCount]=\"rowCount\"\n        [offset]=\"offset\"\n        [trackByProp]=\"trackByProp\"\n        [columns]=\"columns\"\n        [pageSize]=\"pageSize\"\n        [offsetX]=\"offsetX\"\n        [rowDetail]=\"rowDetail\"\n        [selected]=\"selected\"\n        [innerWidth]=\"innerWidth\"\n        [bodyHeight]=\"bodyHeight\"\n        [selectionType]=\"selectionType\"\n        [emptyMessage]=\"messages.emptyMessage\"\n        [rowIdentity]=\"rowIdentity\"\n        [selectCheck]=\"selectCheck\"\n        (page)=\"onBodyPage($event)\"\n        (activate)=\"activate.emit($event)\"\n        (rowContextmenu)=\"rowContextmenu.emit($event)\"\n        (select)=\"onBodySelect($event)\"\n        (scroll)=\"onBodyScroll($event)\">\n      </datatable-body>\n      <datatable-footer\n        *ngIf=\"footerHeight\"\n        [rowCount]=\"rowCount\"\n        [pageSize]=\"pageSize\"\n        [offset]=\"offset\"\n        [footerHeight]=\"footerHeight\"\n        [totalMessage]=\"messages.totalMessage\"\n        [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n        [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n        [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n        [pagerNextIcon]=\"cssClasses.pagerNext\"\n        (page)=\"onFooterPage($event)\">\n      </datatable-footer>\n    </div>\n  ",
	            encapsulation: core_1.ViewEncapsulation.None,
	            styles: [__webpack_require__("./src/components/datatable.component.scss")],
	            host: {
	                class: 'ngx-datatable'
	            }
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.KeyValueDiffers])
	    ], DatatableComponent);
	    return DatatableComponent;
	}());
	exports.DatatableComponent = DatatableComponent;
	
	
	/***/ }),
	
	/***/ "./src/components/footer/footer.component.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var DataTableFooterComponent = (function () {
	    function DataTableFooterComponent() {
	        this.page = new core_1.EventEmitter();
	    }
	    Object.defineProperty(DataTableFooterComponent.prototype, "isVisible", {
	        get: function () {
	            return (this.rowCount / this.pageSize) > 1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableFooterComponent.prototype, "curPage", {
	        get: function () {
	            return this.offset + 1;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableFooterComponent.prototype, "footerHeight", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableFooterComponent.prototype, "rowCount", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableFooterComponent.prototype, "pageSize", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableFooterComponent.prototype, "offset", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DataTableFooterComponent.prototype, "pagerLeftArrowIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DataTableFooterComponent.prototype, "pagerRightArrowIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DataTableFooterComponent.prototype, "pagerPreviousIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DataTableFooterComponent.prototype, "pagerNextIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DataTableFooterComponent.prototype, "totalMessage", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableFooterComponent.prototype, "page", void 0);
	    DataTableFooterComponent = __decorate([
	        core_1.Component({
	            selector: 'datatable-footer',
	            template: "\n    <div\n      [style.height.px]=\"footerHeight\">\n      <div class=\"page-count\">{{rowCount.toLocaleString()}} {{totalMessage}}</div>\n      <datatable-pager\n        [pagerLeftArrowIcon]=\"pagerLeftArrowIcon\"\n        [pagerRightArrowIcon]=\"pagerRightArrowIcon\"\n        [pagerPreviousIcon]=\"pagerPreviousIcon\"\n        [pagerNextIcon]=\"pagerNextIcon\"\n        [page]=\"curPage\"\n        [size]=\"pageSize\"\n        [count]=\"rowCount\"\n        [hidden]=\"!isVisible\"\n        (change)=\"page.emit($event)\">\n       </datatable-pager>\n     </div>\n  ",
	            host: {
	                class: 'datatable-footer'
	            },
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DataTableFooterComponent);
	    return DataTableFooterComponent;
	}());
	exports.DataTableFooterComponent = DataTableFooterComponent;
	
	
	/***/ }),
	
	/***/ "./src/components/footer/index.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__("./src/components/footer/footer.component.ts"));
	__export(__webpack_require__("./src/components/footer/pager.component.ts"));
	
	
	/***/ }),
	
	/***/ "./src/components/footer/pager.component.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var DataTablePagerComponent = (function () {
	    function DataTablePagerComponent() {
	        this.change = new core_1.EventEmitter();
	        this._count = 0;
	        this._page = 1;
	        this._size = 0;
	    }
	    Object.defineProperty(DataTablePagerComponent.prototype, "size", {
	        get: function () {
	            return this._size;
	        },
	        set: function (val) {
	            this._size = val;
	            this.pages = this.calcPages();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTablePagerComponent.prototype, "count", {
	        get: function () {
	            return this._count;
	        },
	        set: function (val) {
	            this._count = val;
	            this.pages = this.calcPages();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTablePagerComponent.prototype, "page", {
	        get: function () {
	            return this._page;
	        },
	        set: function (val) {
	            this._page = val;
	            this.pages = this.calcPages();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTablePagerComponent.prototype, "totalPages", {
	        get: function () {
	            var count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
	            return Math.max(count || 0, 1);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DataTablePagerComponent.prototype.canPrevious = function () {
	        return this.page > 1;
	    };
	    DataTablePagerComponent.prototype.canNext = function () {
	        return this.page < this.totalPages;
	    };
	    DataTablePagerComponent.prototype.prevPage = function () {
	        this.selectPage(this.page - 1);
	    };
	    DataTablePagerComponent.prototype.nextPage = function () {
	        this.selectPage(this.page + 1);
	    };
	    DataTablePagerComponent.prototype.selectPage = function (page) {
	        if (page > 0 && page <= this.totalPages && page !== this.page) {
	            this.page = page;
	            this.change.emit({
	                page: page
	            });
	        }
	    };
	    DataTablePagerComponent.prototype.calcPages = function (page) {
	        var pages = [];
	        var startPage = 1;
	        var endPage = this.totalPages;
	        var maxSize = 5;
	        var isMaxSized = maxSize < this.totalPages;
	        page = page || this.page;
	        if (isMaxSized) {
	            startPage = ((Math.ceil(page / maxSize) - 1) * maxSize) + 1;
	            endPage = Math.min(startPage + maxSize - 1, this.totalPages);
	        }
	        for (var num = startPage; num <= endPage; num++) {
	            pages.push({
	                number: num,
	                text: num
	            });
	        }
	        return pages;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DataTablePagerComponent.prototype, "pagerLeftArrowIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DataTablePagerComponent.prototype, "pagerRightArrowIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DataTablePagerComponent.prototype, "pagerPreviousIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DataTablePagerComponent.prototype, "pagerNextIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], DataTablePagerComponent.prototype, "size", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], DataTablePagerComponent.prototype, "count", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number), 
	        __metadata('design:paramtypes', [Number])
	    ], DataTablePagerComponent.prototype, "page", null);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTablePagerComponent.prototype, "change", void 0);
	    DataTablePagerComponent = __decorate([
	        core_1.Component({
	            selector: 'datatable-pager',
	            template: "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"!canPrevious()\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"selectPage(1)\">\n          <i class=\"{{pagerPreviousIcon}}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canPrevious()\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"prevPage()\">\n          <i class=\"{{pagerLeftArrowIcon}}\"></i>\n        </a>\n      </li>\n      <li\n        class=\"pages\"\n        *ngFor=\"let pg of pages\"\n        [class.active]=\"pg.number === page\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"selectPage(pg.number)\">\n          {{pg.text}}\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"nextPage()\">\n          <i class=\"{{pagerRightArrowIcon}}\"></i>\n        </a>\n      </li>\n      <li [class.disabled]=\"!canNext()\">\n        <a\n          href=\"javascript:void(0)\"\n          (click)=\"selectPage(totalPages)\">\n          <i class=\"{{pagerNextIcon}}\"></i>\n        </a>\n      </li>\n    </ul>\n  ",
	            host: {
	                class: 'datatable-pager'
	            },
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DataTablePagerComponent);
	    return DataTablePagerComponent;
	}());
	exports.DataTablePagerComponent = DataTablePagerComponent;
	
	
	/***/ }),
	
	/***/ "./src/components/header/header-cell.component.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var types_1 = __webpack_require__("./src/types/index.ts");
	var utils_1 = __webpack_require__("./src/utils/index.ts");
	var DataTableHeaderCellComponent = (function () {
	    function DataTableHeaderCellComponent() {
	        this.sort = new core_1.EventEmitter();
	        this.select = new core_1.EventEmitter();
	        this.sortFn = this.onSort.bind(this);
	    }
	    Object.defineProperty(DataTableHeaderCellComponent.prototype, "sorts", {
	        get: function () {
	            return this._sorts;
	        },
	        set: function (val) {
	            this._sorts = val;
	            this.sortDir = this.calcSortDir(val);
	            this.sortClass = this.calcSortClass(this.sortDir);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableHeaderCellComponent.prototype, "columnCssClasses", {
	        get: function () {
	            var cls = 'datatable-header-cell';
	            if (this.column.sortable)
	                cls += ' sortable';
	            if (this.column.resizeable)
	                cls += ' resizeable';
	            if (this.column.cssClasses)
	                cls += ' ' + this.column.cssClasses;
	            var sortDir = this.sortDir;
	            if (sortDir) {
	                cls += " sort-active sort-" + sortDir;
	            }
	            return cls;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableHeaderCellComponent.prototype, "name", {
	        get: function () {
	            return this.column.name || this.column.prop;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableHeaderCellComponent.prototype, "minWidth", {
	        get: function () {
	            return this.column.minWidth;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableHeaderCellComponent.prototype, "maxWidth", {
	        get: function () {
	            return this.column.maxWidth;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableHeaderCellComponent.prototype, "width", {
	        get: function () {
	            return this.column.width;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableHeaderCellComponent.prototype, "isCheckboxable", {
	        get: function () {
	            return this.column.checkboxable &&
	                this.column.headerCheckboxable &&
	                this.selectionType === types_1.SelectionType.checkbox;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DataTableHeaderCellComponent.prototype.calcSortDir = function (sorts) {
	        var _this = this;
	        if (sorts && this.column) {
	            var sort = sorts.find(function (s) {
	                return s.prop === _this.column.prop;
	            });
	            if (sort)
	                return sort.dir;
	        }
	    };
	    DataTableHeaderCellComponent.prototype.onSort = function () {
	        if (!this.column.sortable)
	            return;
	        var newValue = utils_1.nextSortDir(this.sortType, this.sortDir);
	        this.sort.emit({
	            column: this.column,
	            prevValue: this.sortDir,
	            newValue: newValue
	        });
	    };
	    DataTableHeaderCellComponent.prototype.calcSortClass = function (sortDir) {
	        if (sortDir === types_1.SortDirection.asc) {
	            return "sort-btn sort-asc " + this.sortAscendingIcon;
	        }
	        else if (sortDir === types_1.SortDirection.desc) {
	            return "sort-btn sort-desc " + this.sortDescendingIcon;
	        }
	        else {
	            return "sort-btn";
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableHeaderCellComponent.prototype, "sortType", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableHeaderCellComponent.prototype, "column", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DataTableHeaderCellComponent.prototype, "sortAscendingIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], DataTableHeaderCellComponent.prototype, "sortDescendingIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableHeaderCellComponent.prototype, "allRowsSelected", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableHeaderCellComponent.prototype, "selectionType", void 0);
	    __decorate([
	        core_1.HostBinding('style.height.px'),
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableHeaderCellComponent.prototype, "headerHeight", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array), 
	        __metadata('design:paramtypes', [Array])
	    ], DataTableHeaderCellComponent.prototype, "sorts", null);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableHeaderCellComponent.prototype, "sort", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableHeaderCellComponent.prototype, "select", void 0);
	    __decorate([
	        core_1.HostBinding('class'), 
	        __metadata('design:type', Object)
	    ], DataTableHeaderCellComponent.prototype, "columnCssClasses", null);
	    __decorate([
	        core_1.HostBinding('attr.title'), 
	        __metadata('design:type', String)
	    ], DataTableHeaderCellComponent.prototype, "name", null);
	    __decorate([
	        core_1.HostBinding('style.minWidth.px'), 
	        __metadata('design:type', Number)
	    ], DataTableHeaderCellComponent.prototype, "minWidth", null);
	    __decorate([
	        core_1.HostBinding('style.maxWidth.px'), 
	        __metadata('design:type', Number)
	    ], DataTableHeaderCellComponent.prototype, "maxWidth", null);
	    __decorate([
	        core_1.HostBinding('style.width.px'), 
	        __metadata('design:type', Number)
	    ], DataTableHeaderCellComponent.prototype, "width", null);
	    DataTableHeaderCellComponent = __decorate([
	        core_1.Component({
	            selector: 'datatable-header-cell',
	            template: "\n    <div>\n      <label\n        *ngIf=\"isCheckboxable\" \n        class=\"datatable-checkbox\">\n        <input \n          type=\"checkbox\"\n          [attr.checked]=\"allRowsSelected\"\n          (change)=\"select.emit(!allRowsSelected)\" \n        />\n      </label>\n      <span class=\"datatable-header-cell-wrapper\">\n        <span\n          class=\"datatable-header-cell-label draggable\"\n          *ngIf=\"!column.headerTemplate\"\n          (click)=\"onSort()\"\n          [innerHTML]=\"name\">\n        </span>\n      </span>\n      <template\n        *ngIf=\"column.headerTemplate\"\n        [ngTemplateOutlet]=\"column.headerTemplate\"\n        [ngOutletContext]=\"{ \n          column: column, \n          sortDir: sortDir,\n          sortFn: sortFn\n        }\">\n      </template>\n      <span\n        [class]=\"sortClass\">\n      </span>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DataTableHeaderCellComponent);
	    return DataTableHeaderCellComponent;
	}());
	exports.DataTableHeaderCellComponent = DataTableHeaderCellComponent;
	
	
	/***/ }),
	
	/***/ "./src/components/header/header.component.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var types_1 = __webpack_require__("./src/types/index.ts");
	var utils_1 = __webpack_require__("./src/utils/index.ts");
	var DataTableHeaderComponent = (function () {
	    function DataTableHeaderComponent() {
	        this.sort = new core_1.EventEmitter();
	        this.reorder = new core_1.EventEmitter();
	        this.resize = new core_1.EventEmitter();
	        this.select = new core_1.EventEmitter();
	    }
	    Object.defineProperty(DataTableHeaderComponent.prototype, "headerHeight", {
	        get: function () {
	            return this._headerHeight;
	        },
	        set: function (val) {
	            if (val !== 'auto') {
	                this._headerHeight = val + "px";
	            }
	            else {
	                this._headerHeight = val;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableHeaderComponent.prototype, "columns", {
	        get: function () {
	            return this._columns;
	        },
	        set: function (val) {
	            this._columns = val;
	            var colsByPin = utils_1.columnsByPin(val);
	            this.columnsByPin = utils_1.columnsByPinArr(val);
	            this.columnGroupWidths = utils_1.columnGroupWidths(colsByPin, val);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DataTableHeaderComponent.prototype, "headerWidth", {
	        get: function () {
	            if (this.scrollbarH) {
	                return this.innerWidth + 'px';
	            }
	            return '100%';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    DataTableHeaderComponent.prototype.trackByGroups = function (index, colGroup) {
	        return colGroup.type;
	    };
	    DataTableHeaderComponent.prototype.columnTrackingFn = function (index, column) {
	        return column.$$id;
	    };
	    DataTableHeaderComponent.prototype.onColumnResized = function (width, column) {
	        if (width <= column.minWidth) {
	            width = column.minWidth;
	        }
	        else if (width >= column.maxWidth) {
	            width = column.maxWidth;
	        }
	        this.resize.emit({
	            column: column,
	            prevValue: column.width,
	            newValue: width
	        });
	    };
	    DataTableHeaderComponent.prototype.onColumnReordered = function (_a) {
	        var prevIndex = _a.prevIndex, newIndex = _a.newIndex, model = _a.model;
	        this.reorder.emit({
	            column: model,
	            prevValue: prevIndex,
	            newValue: newIndex
	        });
	    };
	    DataTableHeaderComponent.prototype.onSort = function (_a) {
	        var column = _a.column, prevValue = _a.prevValue, newValue = _a.newValue;
	        var sorts = this.calcNewSorts(column, prevValue, newValue);
	        this.sort.emit({
	            sorts: sorts,
	            column: column,
	            prevValue: prevValue,
	            newValue: newValue
	        });
	    };
	    DataTableHeaderComponent.prototype.calcNewSorts = function (column, prevValue, newValue) {
	        var idx = 0;
	        var sorts = this.sorts.map(function (s, i) {
	            s = Object.assign({}, s);
	            if (s.prop === column.prop)
	                idx = i;
	            return s;
	        });
	        if (newValue === undefined) {
	            sorts.splice(idx, 1);
	        }
	        else if (prevValue) {
	            sorts[idx].dir = newValue;
	        }
	        else {
	            if (this.sortType === types_1.SortType.single) {
	                sorts.splice(0, this.sorts.length);
	            }
	            sorts.push({ dir: newValue, prop: column.prop });
	        }
	        return sorts;
	    };
	    DataTableHeaderComponent.prototype.stylesByGroup = function (group) {
	        var widths = this.columnGroupWidths;
	        var offsetX = this.offsetX;
	        var styles = {
	            width: widths[group] + "px"
	        };
	        if (group === 'center') {
	            utils_1.translateXY(styles, offsetX * -1, 0);
	        }
	        else if (group === 'right') {
	            var totalDiff = widths.total - this.innerWidth;
	            var offset = totalDiff * -1;
	            utils_1.translateXY(styles, offset, 0);
	        }
	        return styles;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableHeaderComponent.prototype, "sortAscendingIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataTableHeaderComponent.prototype, "sortDescendingIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableHeaderComponent.prototype, "scrollbarH", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableHeaderComponent.prototype, "innerWidth", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableHeaderComponent.prototype, "offsetX", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], DataTableHeaderComponent.prototype, "sorts", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableHeaderComponent.prototype, "sortType", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableHeaderComponent.prototype, "allRowsSelected", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableHeaderComponent.prototype, "selectionType", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DataTableHeaderComponent.prototype, "reorderable", void 0);
	    __decorate([
	        core_1.HostBinding('style.height'),
	        core_1.Input(), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], DataTableHeaderComponent.prototype, "headerHeight", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array), 
	        __metadata('design:paramtypes', [Array])
	    ], DataTableHeaderComponent.prototype, "columns", null);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableHeaderComponent.prototype, "sort", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableHeaderComponent.prototype, "reorder", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableHeaderComponent.prototype, "resize", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DataTableHeaderComponent.prototype, "select", void 0);
	    __decorate([
	        core_1.HostBinding('style.width'), 
	        __metadata('design:type', String)
	    ], DataTableHeaderComponent.prototype, "headerWidth", null);
	    DataTableHeaderComponent = __decorate([
	        core_1.Component({
	            selector: 'datatable-header',
	            template: "\n    <div\n      orderable\n      (reorder)=\"onColumnReordered($event)\"\n      [style.width.px]=\"columnGroupWidths.total\"\n      class=\"datatable-header-inner\">\n      <div\n        *ngFor=\"let colGroup of columnsByPin; trackBy: trackByGroups\"\n        [class]=\"'datatable-row-' + colGroup.type\"\n        [ngStyle]=\"stylesByGroup(colGroup.type)\">\n        <datatable-header-cell\n          *ngFor=\"let column of colGroup.columns; trackBy: columnTrackingFn\"\n          resizeable\n          [resizeEnabled]=\"column.resizeable\"\n          (resize)=\"onColumnResized($event, column)\"\n          long-press\n          (longPress)=\"drag = true\"\n          (longPressEnd)=\"drag = false\"\n          draggable\n          [dragX]=\"reorderable && column.draggable && drag\"\n          [dragY]=\"false\"\n          [dragModel]=\"column\"\n          [headerHeight]=\"headerHeight\"\n          [column]=\"column\"\n          [sortType]=\"sortType\"\n          [sorts]=\"sorts\"\n          [selectionType]=\"selectionType\"\n          [sortAscendingIcon]=\"sortAscendingIcon\"\n          [sortDescendingIcon]=\"sortDescendingIcon\"\n          (sort)=\"onSort($event)\"\n          (select)=\"select.emit($event)\">\n        </datatable-header-cell>\n      </div>\n    </div>\n  ",
	            host: {
	                class: 'datatable-header'
	            }
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DataTableHeaderComponent);
	    return DataTableHeaderComponent;
	}());
	exports.DataTableHeaderComponent = DataTableHeaderComponent;
	
	
	/***/ }),
	
	/***/ "./src/components/header/index.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__("./src/components/header/header.component.ts"));
	__export(__webpack_require__("./src/components/header/header-cell.component.ts"));
	
	
	/***/ }),
	
	/***/ "./src/components/index.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__("./src/components/datatable.component.ts"));
	__export(__webpack_require__("./src/components/header/index.ts"));
	__export(__webpack_require__("./src/components/body/index.ts"));
	__export(__webpack_require__("./src/components/footer/index.ts"));
	__export(__webpack_require__("./src/components/columns/index.ts"));
	__export(__webpack_require__("./src/components/row-detail/index.ts"));
	
	
	/***/ }),
	
	/***/ "./src/components/row-detail/index.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__("./src/components/row-detail/row-detail.directive.ts"));
	__export(__webpack_require__("./src/components/row-detail/row-detail-template.directive.ts"));
	
	
	/***/ }),
	
	/***/ "./src/components/row-detail/row-detail-template.directive.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var DatatableRowDetailTemplateDirective = (function () {
	    function DatatableRowDetailTemplateDirective(template) {
	        this.template = template;
	    }
	    ;
	    DatatableRowDetailTemplateDirective = __decorate([
	        core_1.Directive({
	            selector: '[ngx-datatable-row-detail-template]'
	        }), 
	        __metadata('design:paramtypes', [core_1.TemplateRef])
	    ], DatatableRowDetailTemplateDirective);
	    return DatatableRowDetailTemplateDirective;
	}());
	exports.DatatableRowDetailTemplateDirective = DatatableRowDetailTemplateDirective;
	
	
	/***/ }),
	
	/***/ "./src/components/row-detail/row-detail.directive.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var row_detail_template_directive_1 = __webpack_require__("./src/components/row-detail/row-detail-template.directive.ts");
	var DatatableRowDetailDirective = (function () {
	    function DatatableRowDetailDirective() {
	        /**
	         * The detail row height is required especially
	         * when virtual scroll is enabled.
	         *
	         * @type {number}
	         * @memberOf DatatableComponent
	         */
	        this.rowHeight = 0;
	        /**
	         * Row detail row visbility was toggled.
	         *
	         * @type {EventEmitter<any>}
	         * @memberOf DatatableComponent
	         */
	        this.toggle = new core_1.EventEmitter();
	    }
	    /**
	     * Toggle the expansion of the row
	     *
	     * @param rowIndex
	     */
	    DatatableRowDetailDirective.prototype.toggleExpandRow = function (row) {
	        this.toggle.emit({
	            type: 'row',
	            value: row
	        });
	    };
	    /**
	     * API method to expand all the rows.
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableRowDetailDirective.prototype.expandAllRows = function () {
	        this.toggle.emit({
	            type: 'all',
	            value: true
	        });
	    };
	    /**
	     * API method to collapse all the rows.
	     *
	     * @memberOf DatatableComponent
	     */
	    DatatableRowDetailDirective.prototype.collapseAllRows = function () {
	        this.toggle.emit({
	            type: 'all',
	            value: false
	        });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DatatableRowDetailDirective.prototype, "rowHeight", void 0);
	    __decorate([
	        core_1.Input(),
	        core_1.ContentChild(row_detail_template_directive_1.DatatableRowDetailTemplateDirective, { read: core_1.TemplateRef }), 
	        __metadata('design:type', core_1.TemplateRef)
	    ], DatatableRowDetailDirective.prototype, "template", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DatatableRowDetailDirective.prototype, "toggle", void 0);
	    DatatableRowDetailDirective = __decorate([
	        core_1.Directive({ selector: 'ngx-datatable-row-detail' }), 
	        __metadata('design:paramtypes', [])
	    ], DatatableRowDetailDirective);
	    return DatatableRowDetailDirective;
	}());
	exports.DatatableRowDetailDirective = DatatableRowDetailDirective;
	
	
	/***/ }),
	
	/***/ "./src/datatable.module.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var common_1 = __webpack_require__(1);
	__webpack_require__("./node_modules/rxjs/add/observable/fromEvent.js");
	var components_1 = __webpack_require__("./src/components/index.ts");
	var directives_1 = __webpack_require__("./src/directives/index.ts");
	var NgxDatatableModule = (function () {
	    function NgxDatatableModule() {
	    }
	    NgxDatatableModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule
	            ],
	            declarations: [
	                directives_1.VisibilityDirective,
	                directives_1.DraggableDirective,
	                directives_1.ResizeableDirective,
	                directives_1.OrderableDirective,
	                directives_1.LongPressDirective,
	                components_1.ScrollerComponent,
	                components_1.DatatableComponent,
	                components_1.DataTableColumnDirective,
	                components_1.DataTableHeaderComponent,
	                components_1.DataTableHeaderCellComponent,
	                components_1.DataTableBodyComponent,
	                components_1.DataTableFooterComponent,
	                components_1.DataTablePagerComponent,
	                components_1.ProgressBarComponent,
	                components_1.DataTableBodyRowComponent,
	                components_1.DataTableRowWrapperComponent,
	                components_1.DatatableRowDetailDirective,
	                components_1.DatatableRowDetailTemplateDirective,
	                components_1.DataTableBodyCellComponent,
	                components_1.DataTableSelectionComponent,
	                components_1.DataTableColumnHeaderDirective,
	                components_1.DataTableColumnCellDirective
	            ],
	            exports: [
	                components_1.DatatableComponent,
	                components_1.DatatableRowDetailDirective,
	                components_1.DatatableRowDetailTemplateDirective,
	                components_1.DataTableColumnDirective,
	                components_1.DataTableColumnHeaderDirective,
	                components_1.DataTableColumnCellDirective
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgxDatatableModule);
	    return NgxDatatableModule;
	}());
	exports.NgxDatatableModule = NgxDatatableModule;
	
	
	/***/ }),
	
	/***/ "./src/directives/draggable.directive.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
	/**
	 * Draggable Directive for Angular2
	 *
	 * Inspiration:
	 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
	 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
	 *
	 */
	var DraggableDirective = (function () {
	    function DraggableDirective(element) {
	        this.dragX = true;
	        this.dragY = true;
	        this.dragStart = new core_1.EventEmitter();
	        this.dragging = new core_1.EventEmitter();
	        this.dragEnd = new core_1.EventEmitter();
	        this.isDragging = false;
	        this.element = element.nativeElement;
	    }
	    DraggableDirective.prototype.ngOnDestroy = function () {
	        if (this.subscription) {
	            this.subscription.unsubscribe();
	        }
	    };
	    DraggableDirective.prototype.onMouseup = function (event) {
	        this.isDragging = false;
	        this.element.classList.remove('dragging');
	        if (this.subscription) {
	            this.subscription.unsubscribe();
	            this.dragEnd.emit({
	                event: event,
	                element: this.element,
	                model: this.dragModel
	            });
	        }
	    };
	    DraggableDirective.prototype.onMousedown = function (event) {
	        var _this = this;
	        if (event.target.classList.contains('draggable')) {
	            event.preventDefault();
	            this.isDragging = true;
	            var mouseDownPos_1 = { x: event.clientX, y: event.clientY };
	            this.subscription = Observable_1.Observable.fromEvent(document, 'mousemove')
	                .subscribe(function (ev) { return _this.move(ev, mouseDownPos_1); });
	            this.dragStart.emit({
	                event: event,
	                element: this.element,
	                model: this.dragModel
	            });
	        }
	    };
	    DraggableDirective.prototype.move = function (event, mouseDownPos) {
	        if (!this.dragging)
	            return;
	        var x = event.clientX - mouseDownPos.x;
	        var y = event.clientY - mouseDownPos.y;
	        if (this.dragX)
	            this.element.style.left = x + "px";
	        if (this.dragY)
	            this.element.style.top = y + "px";
	        if (this.dragX || this.dragY) {
	            this.element.classList.add('dragging');
	            this.dragging.emit({
	                event: event,
	                element: this.element,
	                model: this.dragModel
	            });
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DraggableDirective.prototype, "dragModel", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DraggableDirective.prototype, "dragX", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], DraggableDirective.prototype, "dragY", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DraggableDirective.prototype, "dragStart", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DraggableDirective.prototype, "dragging", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], DraggableDirective.prototype, "dragEnd", void 0);
	    __decorate([
	        core_1.HostListener('document:mouseup', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [MouseEvent]), 
	        __metadata('design:returntype', void 0)
	    ], DraggableDirective.prototype, "onMouseup", null);
	    __decorate([
	        core_1.HostListener('mousedown', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [MouseEvent]), 
	        __metadata('design:returntype', void 0)
	    ], DraggableDirective.prototype, "onMousedown", null);
	    DraggableDirective = __decorate([
	        core_1.Directive({ selector: '[draggable]' }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], DraggableDirective);
	    return DraggableDirective;
	}());
	exports.DraggableDirective = DraggableDirective;
	
	
	/***/ }),
	
	/***/ "./src/directives/index.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__("./src/directives/draggable.directive.ts"));
	__export(__webpack_require__("./src/directives/long-press.directive.ts"));
	__export(__webpack_require__("./src/directives/orderable.directive.ts"));
	__export(__webpack_require__("./src/directives/resizeable.directive.ts"));
	__export(__webpack_require__("./src/directives/visibility.directive.ts"));
	
	
	/***/ }),
	
	/***/ "./src/directives/long-press.directive.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var LongPressDirective = (function () {
	    function LongPressDirective() {
	        this.duration = 500;
	        this.longPress = new core_1.EventEmitter();
	        this.longPressing = new core_1.EventEmitter();
	        this.longPressEnd = new core_1.EventEmitter();
	        this.mouseX = 0;
	        this.mouseY = 0;
	    }
	    Object.defineProperty(LongPressDirective.prototype, "press", {
	        get: function () { return this.pressing; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(LongPressDirective.prototype, "isLongPress", {
	        get: function () {
	            return this.isLongPressing;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    LongPressDirective.prototype.onMouseDown = function (event) {
	        var _this = this;
	        // don't do right/middle clicks
	        if (event.which !== 1)
	            return;
	        this.mouseX = event.clientX;
	        this.mouseY = event.clientY;
	        this.pressing = true;
	        this.isLongPressing = false;
	        this.timeout = setTimeout(function () {
	            _this.isLongPressing = true;
	            _this.longPress.emit(event);
	            _this.loop(event);
	        }, this.duration);
	        this.loop(event);
	    };
	    LongPressDirective.prototype.onMouseMove = function (event) {
	        if (this.pressing && !this.isLongPressing) {
	            var xThres = Math.abs(event.clientX - this.mouseX) > 10;
	            var yThres = Math.abs(event.clientY - this.mouseY) > 10;
	            if (xThres || yThres) {
	                this.endPress();
	            }
	        }
	    };
	    LongPressDirective.prototype.loop = function (event) {
	        var _this = this;
	        if (this.isLongPressing) {
	            this.timeout = setTimeout(function () {
	                _this.longPressing.emit(event);
	                _this.loop(event);
	            }, 50);
	        }
	    };
	    LongPressDirective.prototype.endPress = function () {
	        clearTimeout(this.timeout);
	        this.isLongPressing = false;
	        this.pressing = false;
	        this.longPressEnd.emit(true);
	    };
	    LongPressDirective.prototype.onMouseUp = function () { this.endPress(); };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], LongPressDirective.prototype, "duration", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], LongPressDirective.prototype, "longPress", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], LongPressDirective.prototype, "longPressing", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], LongPressDirective.prototype, "longPressEnd", void 0);
	    __decorate([
	        core_1.HostBinding('class.press'), 
	        __metadata('design:type', Boolean)
	    ], LongPressDirective.prototype, "press", null);
	    __decorate([
	        core_1.HostBinding('class.longpress'), 
	        __metadata('design:type', Boolean)
	    ], LongPressDirective.prototype, "isLongPress", null);
	    __decorate([
	        core_1.HostListener('mousedown', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [MouseEvent]), 
	        __metadata('design:returntype', void 0)
	    ], LongPressDirective.prototype, "onMouseDown", null);
	    __decorate([
	        core_1.HostListener('mousemove', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [MouseEvent]), 
	        __metadata('design:returntype', void 0)
	    ], LongPressDirective.prototype, "onMouseMove", null);
	    __decorate([
	        core_1.HostListener('mouseup'), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], LongPressDirective.prototype, "onMouseUp", null);
	    LongPressDirective = __decorate([
	        core_1.Directive({ selector: '[long-press]' }), 
	        __metadata('design:paramtypes', [])
	    ], LongPressDirective);
	    return LongPressDirective;
	}());
	exports.LongPressDirective = LongPressDirective;
	
	
	/***/ }),
	
	/***/ "./src/directives/orderable.directive.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var draggable_directive_1 = __webpack_require__("./src/directives/draggable.directive.ts");
	var OrderableDirective = (function () {
	    function OrderableDirective(differs) {
	        this.reorder = new core_1.EventEmitter();
	        this.differ = differs.find({}).create(null);
	    }
	    OrderableDirective.prototype.ngAfterContentInit = function () {
	        // HACK: Investigate Better Way
	        this.updateSubscriptions();
	        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
	    };
	    OrderableDirective.prototype.ngOnDestroy = function () {
	        this.draggables.forEach(function (d) {
	            d.dragStart.unsubscribe();
	            d.dragEnd.unsubscribe();
	        });
	    };
	    OrderableDirective.prototype.updateSubscriptions = function () {
	        var _this = this;
	        var diffs = this.differ.diff(this.draggables.toArray());
	        if (diffs) {
	            var subscribe = function (_a) {
	                var currentValue = _a.currentValue, previousValue = _a.previousValue;
	                unsubscribe_1({ previousValue: previousValue });
	                if (currentValue) {
	                    currentValue.dragStart.subscribe(_this.onDragStart.bind(_this));
	                    currentValue.dragEnd.subscribe(_this.onDragEnd.bind(_this));
	                }
	            };
	            var unsubscribe_1 = function (_a) {
	                var previousValue = _a.previousValue;
	                if (previousValue) {
	                    previousValue.dragStart.unsubscribe();
	                    previousValue.dragEnd.unsubscribe();
	                }
	            };
	            diffs.forEachAddedItem(subscribe.bind(this));
	            // diffs.forEachChangedItem(subscribe.bind(this));
	            diffs.forEachRemovedItem(unsubscribe_1.bind(this));
	        }
	    };
	    OrderableDirective.prototype.onDragStart = function () {
	        this.positions = {};
	        var i = 0;
	        for (var _i = 0, _a = this.draggables.toArray(); _i < _a.length; _i++) {
	            var dragger = _a[_i];
	            var elm = dragger.element;
	            this.positions[dragger.dragModel.prop] = {
	                left: parseInt(elm.offsetLeft.toString(), 0),
	                index: i++
	            };
	        }
	    };
	    OrderableDirective.prototype.onDragEnd = function (_a) {
	        var element = _a.element, model = _a.model;
	        var newPos = parseInt(element.offsetLeft.toString(), 0);
	        var prevPos = this.positions[model.prop];
	        var i = 0;
	        for (var prop in this.positions) {
	            var pos = this.positions[prop];
	            var movedLeft = newPos < pos.left && prevPos.left > pos.left;
	            var movedRight = newPos > pos.left && prevPos.left < pos.left;
	            if (movedLeft || movedRight) {
	                this.reorder.emit({
	                    prevIndex: prevPos.index,
	                    newIndex: i,
	                    model: model
	                });
	            }
	            i++;
	        }
	        element.style.left = 'auto';
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], OrderableDirective.prototype, "reorder", void 0);
	    __decorate([
	        core_1.ContentChildren(draggable_directive_1.DraggableDirective, { descendants: true }), 
	        __metadata('design:type', core_1.QueryList)
	    ], OrderableDirective.prototype, "draggables", void 0);
	    OrderableDirective = __decorate([
	        core_1.Directive({ selector: '[orderable]' }), 
	        __metadata('design:paramtypes', [core_1.KeyValueDiffers])
	    ], OrderableDirective);
	    return OrderableDirective;
	}());
	exports.OrderableDirective = OrderableDirective;
	
	
	/***/ }),
	
	/***/ "./src/directives/resizeable.directive.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
	var ResizeableDirective = (function () {
	    function ResizeableDirective(element) {
	        this.resizeEnabled = true;
	        this.resize = new core_1.EventEmitter();
	        this.resizing = false;
	        this.element = element.nativeElement;
	        if (this.resizeEnabled) {
	            var node = document.createElement('span');
	            node.classList.add('resize-handle');
	            this.element.appendChild(node);
	        }
	    }
	    ResizeableDirective.prototype.ngOnDestroy = function () {
	        if (this.subscription) {
	            this.subscription.unsubscribe();
	        }
	    };
	    ResizeableDirective.prototype.onMouseup = function () {
	        this.resizing = false;
	        if (this.subscription && !this.subscription.closed) {
	            this.subscription.unsubscribe();
	            this.resize.emit(this.element.clientWidth);
	        }
	    };
	    ResizeableDirective.prototype.onMousedown = function (event) {
	        var _this = this;
	        var isHandle = (event.target).classList.contains('resize-handle');
	        var initialWidth = this.element.clientWidth;
	        var mouseDownScreenX = event.screenX;
	        if (isHandle) {
	            event.stopPropagation();
	            this.resizing = true;
	            this.subscription = Observable_1.Observable.fromEvent(document, 'mousemove')
	                .subscribe(function (e) { return _this.move(e, initialWidth, mouseDownScreenX); });
	        }
	    };
	    ResizeableDirective.prototype.move = function (event, initialWidth, mouseDownScreenX) {
	        var movementX = event.screenX - mouseDownScreenX;
	        var newWidth = initialWidth + movementX;
	        var overMinWidth = !this.minWidth || newWidth >= this.minWidth;
	        var underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;
	        if (overMinWidth && underMaxWidth) {
	            this.element.style.width = newWidth + "px";
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], ResizeableDirective.prototype, "resizeEnabled", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], ResizeableDirective.prototype, "minWidth", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], ResizeableDirective.prototype, "maxWidth", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], ResizeableDirective.prototype, "resize", void 0);
	    __decorate([
	        core_1.HostListener('document:mouseup'), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', []), 
	        __metadata('design:returntype', void 0)
	    ], ResizeableDirective.prototype, "onMouseup", null);
	    __decorate([
	        core_1.HostListener('mousedown', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [MouseEvent]), 
	        __metadata('design:returntype', void 0)
	    ], ResizeableDirective.prototype, "onMousedown", null);
	    ResizeableDirective = __decorate([
	        core_1.Directive({
	            selector: '[resizeable]',
	            host: {
	                '[class.resizeable]': 'resizeEnabled'
	            }
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], ResizeableDirective);
	    return ResizeableDirective;
	}());
	exports.ResizeableDirective = ResizeableDirective;
	
	
	/***/ }),
	
	/***/ "./src/directives/visibility.directive.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
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
	var core_1 = __webpack_require__(0);
	/**
	 * Visibility Observer Directive
	 *
	 * Usage:
	 *
	 * 		<div
	 * 			visibility-observer
	 * 			(visible)="onVisible($event)">
	 * 		</div>
	 *
	 */
	var VisibilityDirective = (function () {
	    function VisibilityDirective(element, zone) {
	        this.element = element;
	        this.zone = zone;
	        this.isVisible = false;
	        this.visible = new core_1.EventEmitter();
	    }
	    VisibilityDirective.prototype.ngOnInit = function () {
	        this.runCheck();
	    };
	    VisibilityDirective.prototype.ngOnDestroy = function () {
	        clearTimeout(this.timeout);
	    };
	    VisibilityDirective.prototype.onVisibilityChange = function () {
	        var _this = this;
	        // trigger zone recalc for columns
	        this.zone.run(function () {
	            _this.isVisible = true;
	            _this.visible.emit(true);
	        });
	    };
	    VisibilityDirective.prototype.runCheck = function () {
	        var _this = this;
	        var check = function () {
	            // https://davidwalsh.name/offsetheight-visibility
	            var _a = _this.element.nativeElement, offsetHeight = _a.offsetHeight, offsetWidth = _a.offsetWidth;
	            if (offsetHeight && offsetWidth) {
	                clearTimeout(_this.timeout);
	                _this.onVisibilityChange();
	            }
	            else {
	                clearTimeout(_this.timeout);
	                _this.zone.runOutsideAngular(function () {
	                    _this.timeout = setTimeout(function () { return check(); }, 50);
	                });
	            }
	        };
	        setTimeout(function () { return check(); });
	    };
	    __decorate([
	        core_1.HostBinding('class.visible'), 
	        __metadata('design:type', Boolean)
	    ], VisibilityDirective.prototype, "isVisible", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], VisibilityDirective.prototype, "visible", void 0);
	    VisibilityDirective = __decorate([
	        core_1.Directive({ selector: '[visibility-observer]' }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.NgZone])
	    ], VisibilityDirective);
	    return VisibilityDirective;
	}());
	exports.VisibilityDirective = VisibilityDirective;
	
	
	/***/ }),
	
	/***/ "./src/index.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__("./src/datatable.module.ts"));
	__export(__webpack_require__("./src/types/index.ts"));
	__export(__webpack_require__("./src/components/index.ts"));
	
	
	/***/ }),
	
	/***/ "./src/types/click.type.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	(function (ClickType) {
	    ClickType[ClickType["single"] = 'single'] = "single";
	    ClickType[ClickType["double"] = 'double'] = "double";
	})(exports.ClickType || (exports.ClickType = {}));
	var ClickType = exports.ClickType;
	
	
	/***/ }),
	
	/***/ "./src/types/column-mode.type.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	(function (ColumnMode) {
	    ColumnMode[ColumnMode["standard"] = 'standard'] = "standard";
	    ColumnMode[ColumnMode["flex"] = 'flex'] = "flex";
	    ColumnMode[ColumnMode["force"] = 'force'] = "force";
	})(exports.ColumnMode || (exports.ColumnMode = {}));
	var ColumnMode = exports.ColumnMode;
	
	
	/***/ }),
	
	/***/ "./src/types/index.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__("./src/types/column-mode.type.ts"));
	__export(__webpack_require__("./src/types/sort.type.ts"));
	__export(__webpack_require__("./src/types/sort-direction.type.ts"));
	__export(__webpack_require__("./src/types/selection.type.ts"));
	__export(__webpack_require__("./src/types/click.type.ts"));
	
	
	/***/ }),
	
	/***/ "./src/types/selection.type.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	(function (SelectionType) {
	    SelectionType[SelectionType["single"] = 'single'] = "single";
	    SelectionType[SelectionType["multi"] = 'multi'] = "multi";
	    SelectionType[SelectionType["multiClick"] = 'multiClick'] = "multiClick";
	    SelectionType[SelectionType["cell"] = 'cell'] = "cell";
	    SelectionType[SelectionType["checkbox"] = 'checkbox'] = "checkbox";
	})(exports.SelectionType || (exports.SelectionType = {}));
	var SelectionType = exports.SelectionType;
	
	
	/***/ }),
	
	/***/ "./src/types/sort-direction.type.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	(function (SortDirection) {
	    SortDirection[SortDirection["asc"] = 'asc'] = "asc";
	    SortDirection[SortDirection["desc"] = 'desc'] = "desc";
	})(exports.SortDirection || (exports.SortDirection = {}));
	var SortDirection = exports.SortDirection;
	
	
	/***/ }),
	
	/***/ "./src/types/sort.type.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	(function (SortType) {
	    SortType[SortType["single"] = 'single'] = "single";
	    SortType[SortType["multi"] = 'multi'] = "multi";
	})(exports.SortType || (exports.SortType = {}));
	var SortType = exports.SortType;
	
	
	/***/ }),
	
	/***/ "./src/utils/camel-case.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	/**
	 * Converts strings from something to camel case
	 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
	 * @param  {string} str
	 * @return {string} camel case string
	 */
	function camelCase(str) {
	    // Replace special characters with a space
	    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
	    // put a space before an uppercase letter
	    str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
	    // Lower case first character and some other stuff
	    str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase();
	    // uppercase characters preceded by a space or number
	    str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
	        return b.trim() + c.toUpperCase();
	    });
	    return str;
	}
	exports.camelCase = camelCase;
	/**
	 * Converts strings from camel case to words
	 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
	 *
	 * @export
	 * @param {any} str
	 * @returns string
	 */
	function deCamelCase(str) {
	    return str
	        .replace(/([A-Z])/g, function (match) { return (" " + match); })
	        .replace(/^./, function (match) { return match.toUpperCase(); });
	}
	exports.deCamelCase = deCamelCase;
	
	
	/***/ }),
	
	/***/ "./src/utils/column-helper.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var utils_1 = __webpack_require__("./src/utils/index.ts");
	/**
	 * Sets the column defaults
	 *
	 * @export
	 * @param {any[]} columns
	 * @returns
	 */
	function setColumnDefaults(columns) {
	    if (!columns)
	        return;
	    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
	        var column = columns_1[_i];
	        if (!column.$$id) {
	            column.$$id = utils_1.id();
	        }
	        // translate name => prop
	        if (!column.prop && column.name) {
	            column.prop = utils_1.camelCase(column.name);
	        }
	        // format props if no name passed
	        if (column.prop && !column.name) {
	            column.name = utils_1.deCamelCase(column.prop);
	        }
	        if (!column.hasOwnProperty('resizeable')) {
	            column.resizeable = true;
	        }
	        if (!column.hasOwnProperty('sortable')) {
	            column.sortable = true;
	        }
	        if (!column.hasOwnProperty('draggable')) {
	            column.draggable = true;
	        }
	        if (!column.hasOwnProperty('canAutoResize')) {
	            column.canAutoResize = true;
	        }
	        if (!column.hasOwnProperty('width')) {
	            column.width = 150;
	        }
	    }
	}
	exports.setColumnDefaults = setColumnDefaults;
	/**
	 * Translates templates definitions to objects
	 *
	 * @export
	 * @param {DataTableColumnDirective[]} templates
	 * @returns {any[]}
	 */
	function translateTemplates(templates) {
	    var result = [];
	    for (var _i = 0, templates_1 = templates; _i < templates_1.length; _i++) {
	        var temp = templates_1[_i];
	        var col = {};
	        var props = Object.getOwnPropertyNames(temp);
	        for (var _a = 0, props_1 = props; _a < props_1.length; _a++) {
	            var prop = props_1[_a];
	            col[prop] = temp[prop];
	        }
	        if (temp.headerTemplate) {
	            col.headerTemplate = temp.headerTemplate;
	        }
	        if (temp.cellTemplate) {
	            col.cellTemplate = temp.cellTemplate;
	        }
	        result.push(col);
	    }
	    return result;
	}
	exports.translateTemplates = translateTemplates;
	
	
	/***/ }),
	
	/***/ "./src/utils/column.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	/**
	 * Returns the columns by pin.
	 * @param {array} cols
	 */
	function columnsByPin(cols) {
	    var ret = {
	        left: [],
	        center: [],
	        right: []
	    };
	    if (cols) {
	        for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
	            var col = cols_1[_i];
	            if (col.frozenLeft) {
	                ret.left.push(col);
	            }
	            else if (col.frozenRight) {
	                ret.right.push(col);
	            }
	            else {
	                ret.center.push(col);
	            }
	        }
	    }
	    return ret;
	}
	exports.columnsByPin = columnsByPin;
	/**
	 * Returns the widths of all group sets of a column
	 * @param {object} groups
	 * @param {array} all
	 */
	function columnGroupWidths(groups, all) {
	    return {
	        left: columnTotalWidth(groups.left),
	        center: columnTotalWidth(groups.center),
	        right: columnTotalWidth(groups.right),
	        total: columnTotalWidth(all)
	    };
	}
	exports.columnGroupWidths = columnGroupWidths;
	/**
	 * Calculates the total width of all columns and their groups
	 * @param {array} columns
	 * @param {string} prop width to get
	 */
	function columnTotalWidth(columns, prop) {
	    var totalWidth = 0;
	    if (columns) {
	        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
	            var c = columns_1[_i];
	            var has = prop && c[prop];
	            var width = has ? c[prop] : c.width;
	            totalWidth = totalWidth + parseFloat(width);
	        }
	    }
	    return totalWidth;
	}
	exports.columnTotalWidth = columnTotalWidth;
	/**
	 * Calculates the total width of all columns and their groups
	 * @param {array} columns
	 * @param {string} property width to get
	 */
	function columnsTotalWidth(columns, prop) {
	    var totalWidth = 0;
	    for (var _i = 0, columns_2 = columns; _i < columns_2.length; _i++) {
	        var column = columns_2[_i];
	        var has = prop && column[prop];
	        totalWidth = totalWidth + (has ? column[prop] : column.width);
	    }
	    return totalWidth;
	}
	exports.columnsTotalWidth = columnsTotalWidth;
	function columnsByPinArr(val) {
	    var colsByPinArr = [];
	    var colsByPin = columnsByPin(val);
	    colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
	    colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
	    colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });
	    return colsByPinArr;
	}
	exports.columnsByPinArr = columnsByPinArr;
	
	
	/***/ }),
	
	/***/ "./src/utils/deep-getter.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	/**
	 * Returns a deep object given a string. zoo['animal.type']
	 * @param {object} obj
	 * @param {string} path
	 */
	function deepValueGetter(obj, path) {
	    if (!obj || !path)
	        return obj;
	    var current = obj;
	    var split = path.split('.');
	    if (split.length) {
	        for (var i = 0, len = split.length; i < len; i++) {
	            current = current[split[i]];
	            // if found undefined, return empty string
	            if (current === undefined || current === null)
	                return '';
	        }
	    }
	    return current;
	}
	exports.deepValueGetter = deepValueGetter;
	
	
	/***/ }),
	
	/***/ "./src/utils/id.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	/**
	 * Creates a unique object id.
	 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
	 */
	function id() {
	    return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
	}
	exports.id = id;
	
	
	/***/ }),
	
	/***/ "./src/utils/index.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__("./src/utils/id.ts"));
	__export(__webpack_require__("./src/utils/column.ts"));
	__export(__webpack_require__("./src/utils/deep-getter.ts"));
	__export(__webpack_require__("./src/utils/camel-case.ts"));
	__export(__webpack_require__("./src/utils/keys.ts"));
	__export(__webpack_require__("./src/utils/math.ts"));
	__export(__webpack_require__("./src/utils/prefixes.ts"));
	__export(__webpack_require__("./src/utils/scrollbar-width.ts"));
	__export(__webpack_require__("./src/utils/selection.ts"));
	__export(__webpack_require__("./src/utils/translate.ts"));
	__export(__webpack_require__("./src/utils/throttle.ts"));
	__export(__webpack_require__("./src/utils/sort.ts"));
	__export(__webpack_require__("./src/utils/row-height-cache.ts"));
	__export(__webpack_require__("./src/utils/column-helper.ts"));
	
	
	/***/ }),
	
	/***/ "./src/utils/keys.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	(function (Keys) {
	    Keys[Keys["up"] = 38] = "up";
	    Keys[Keys["down"] = 40] = "down";
	    Keys[Keys["return"] = 13] = "return";
	    Keys[Keys["escape"] = 27] = "escape";
	    Keys[Keys["left"] = 37] = "left";
	    Keys[Keys["right"] = 39] = "right";
	})(exports.Keys || (exports.Keys = {}));
	var Keys = exports.Keys;
	
	
	/***/ }),
	
	/***/ "./src/utils/math.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var column_1 = __webpack_require__("./src/utils/column.ts");
	/**
	 * Calculates the Total Flex Grow
	 * @param {array}
	 */
	function getTotalFlexGrow(columns) {
	    var totalFlexGrow = 0;
	    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
	        var c = columns_1[_i];
	        totalFlexGrow += c.flexGrow || 0;
	    }
	    return totalFlexGrow;
	}
	exports.getTotalFlexGrow = getTotalFlexGrow;
	/**
	 * Adjusts the column widths.
	 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
	 * @param {array} all columns
	 * @param {int} width
	 */
	function adjustColumnWidths(allColumns, expectedWidth) {
	    var columnsWidth = column_1.columnsTotalWidth(allColumns);
	    var totalFlexGrow = getTotalFlexGrow(allColumns);
	    var colsByGroup = column_1.columnsByPin(allColumns);
	    if (columnsWidth !== expectedWidth) {
	        scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
	    }
	}
	exports.adjustColumnWidths = adjustColumnWidths;
	/**
	 * Resizes columns based on the flexGrow property, while respecting manually set widths
	 * @param {array} colsByGroup
	 * @param {int} maxWidth
	 * @param {int} totalFlexGrow
	 */
	function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
	    // calculate total width and flexgrow points for coulumns that can be resized
	    for (var attr in colsByGroup) {
	        for (var _i = 0, _a = colsByGroup[attr]; _i < _a.length; _i++) {
	            var column = _a[_i];
	            if (!column.canAutoResize) {
	                maxWidth -= column.width;
	                totalFlexGrow -= column.flexGrow;
	            }
	            else {
	                column.width = 0;
	            }
	        }
	    }
	    var hasMinWidth = {};
	    var remainingWidth = maxWidth;
	    // resize columns until no width is left to be distributed
	    do {
	        var widthPerFlexPoint = remainingWidth / totalFlexGrow;
	        remainingWidth = 0;
	        for (var attr in colsByGroup) {
	            for (var _b = 0, _c = colsByGroup[attr]; _b < _c.length; _b++) {
	                var column = _c[_b];
	                // if the column can be resize and it hasn't reached its minimum width yet
	                if (column.canAutoResize && !hasMinWidth[column.prop]) {
	                    var newWidth = column.width + column.flexGrow * widthPerFlexPoint;
	                    if (column.minWidth !== undefined && newWidth < column.minWidth) {
	                        remainingWidth += newWidth - column.minWidth;
	                        column.width = column.minWidth;
	                        hasMinWidth[column.prop] = true;
	                    }
	                    else {
	                        column.width = newWidth;
	                    }
	                }
	            }
	        }
	    } while (remainingWidth !== 0);
	}
	/**
	 * Forces the width of the columns to
	 * distribute equally but overflowing when nesc.
	 *
	 * Rules:
	 *
	 *  - If combined withs are less than the total width of the grid,
	 *    proporation the widths given the min / max / noraml widths to fill the width.
	 *
	 *  - If the combined widths, exceed the total width of the grid,
	 *    use the standard widths.
	 *
	 *  - If a column is resized, it should always use that width
	 *
	 *  - The proporational widths should never fall below min size if specified.
	 *
	 *  - If the grid starts off small but then becomes greater than the size ( + / - )
	 *    the width should use the orginial width; not the newly proporatied widths.
	 *
	 * @param {array} allColumns
	 * @param {int} expectedWidth
	 */
	function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth) {
	    if (defaultColWidth === void 0) { defaultColWidth = 300; }
	    var columnsToResize = allColumns
	        .slice(startIdx + 1, allColumns.length)
	        .filter(function (c) {
	        return c.canAutoResize !== false;
	    });
	    for (var _i = 0, columnsToResize_1 = columnsToResize; _i < columnsToResize_1.length; _i++) {
	        var column = columnsToResize_1[_i];
	        if (!column.$$oldWidth) {
	            column.$$oldWidth = column.width;
	        }
	    }
	    var additionWidthPerColumn = 0;
	    var exceedsWindow = false;
	    var contentWidth = getContentWidth(allColumns, defaultColWidth);
	    var remainingWidth = expectedWidth - contentWidth;
	    var columnsProcessed = [];
	    // This loop takes care of the
	    do {
	        additionWidthPerColumn = remainingWidth / columnsToResize.length;
	        exceedsWindow = contentWidth >= expectedWidth;
	        for (var _a = 0, columnsToResize_2 = columnsToResize; _a < columnsToResize_2.length; _a++) {
	            var column = columnsToResize_2[_a];
	            if (exceedsWindow && allowBleed) {
	                column.width = column.$$oldWidth || column.width || defaultColWidth;
	            }
	            else {
	                var newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
	                if (column.minWidth && newSize < column.minWidth) {
	                    column.width = column.minWidth;
	                    columnsProcessed.push(column);
	                }
	                else if (column.maxWidth && newSize > column.maxWidth) {
	                    column.width = column.maxWidth;
	                    columnsProcessed.push(column);
	                }
	                else {
	                    column.width = newSize;
	                }
	            }
	            column.width = Math.max(0, column.width);
	        }
	        contentWidth = getContentWidth(allColumns);
	        remainingWidth = expectedWidth - contentWidth;
	        removeProcessedColumns(columnsToResize, columnsProcessed);
	    } while (remainingWidth > 0 && columnsToResize.length !== 0);
	}
	exports.forceFillColumnWidths = forceFillColumnWidths;
	/**
	 * Remove the processed columns from the current active columns.
	 *
	 * @param columnsToResize  Array containing the columns that need to be resized.
	 * @param columnsProcessed Array containing the columns that have already been processed.
	 */
	function removeProcessedColumns(columnsToResize, columnsProcessed) {
	    for (var _i = 0, columnsProcessed_1 = columnsProcessed; _i < columnsProcessed_1.length; _i++) {
	        var column = columnsProcessed_1[_i];
	        var index = columnsToResize.indexOf(column);
	        columnsToResize.splice(index, 1);
	    }
	}
	/**
	 * Gets the width of the columns
	 *
	 * @param {array} allColumns
	 * @param {number} [defaultColWidth=300]
	 * @returns {number}
	 */
	function getContentWidth(allColumns, defaultColWidth) {
	    if (defaultColWidth === void 0) { defaultColWidth = 300; }
	    var contentWidth = 0;
	    for (var _i = 0, allColumns_1 = allColumns; _i < allColumns_1.length; _i++) {
	        var column = allColumns_1[_i];
	        contentWidth += (column.width || defaultColWidth);
	    }
	    return contentWidth;
	}
	
	
	/***/ }),
	
	/***/ "./src/utils/prefixes.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var camel_case_1 = __webpack_require__("./src/utils/camel-case.ts");
	var cache = {};
	var testStyle = document.createElement('div').style;
	// Get Prefix
	// http://davidwalsh.name/vendor-prefix
	var prefix = (function () {
	    var styles = window.getComputedStyle(document.documentElement, '');
	    var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/))[1];
	    var dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
	    return {
	        dom: dom,
	        lowercase: pre,
	        css: "-" + pre + "-",
	        js: pre[0].toUpperCase() + pre.substr(1)
	    };
	})();
	function getVendorPrefixedName(property) {
	    var name = camel_case_1.camelCase(property);
	    if (!cache[name]) {
	        if (testStyle[prefix.css + property] !== undefined) {
	            cache[name] = prefix.css + property;
	        }
	        else if (testStyle[property] !== undefined) {
	            cache[name] = property;
	        }
	    }
	    return cache[name];
	}
	exports.getVendorPrefixedName = getVendorPrefixedName;
	
	
	/***/ }),
	
	/***/ "./src/utils/row-height-cache.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	/**
	 * This object contains the cache of the various row heights that are present inside
	 * the data table.   Its based on Fenwick tree data structure that helps with
	 * querying sums that have time complexity of log n.
	 *
	 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
	 * https://github.com/mikolalysenko/fenwick-tree
	 *
	 */
	var RowHeightCache = (function () {
	    function RowHeightCache() {
	        /**
	         * Tree Array stores the cumulative information of the row heights to perform efficient
	         * range queries and updates.  Currently the tree is initialized to the base row
	         * height instead of the detail row height.
	         */
	        this.treeArray = [];
	    }
	    /**
	     * Clear the Tree array.
	     */
	    RowHeightCache.prototype.clearCache = function () {
	        this.treeArray = [];
	    };
	    /**
	     * Initialize the Fenwick tree with row Heights.
	     *
	     * @param rows The array of rows which contain the expanded status.
	     * @param rowHeight The row height.
	     * @param detailRowHeight The detail row height.
	     */
	    RowHeightCache.prototype.initCache = function (rows, rowHeight, detailRowHeight) {
	        if (isNaN(rowHeight)) {
	            throw new Error("Row Height cache initialization failed. Please ensure that 'rowHeight' is a\n        valid number value: (" + rowHeight + ") when 'scrollbarV' is enabled.");
	        }
	        // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.
	        if (isNaN(detailRowHeight)) {
	            throw new Error("Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a\n        valid number value: (" + detailRowHeight + ") when 'scrollbarV' is enabled.");
	        }
	        var n = rows.length;
	        this.treeArray = new Array(n);
	        for (var i = 0; i < n; ++i) {
	            this.treeArray[i] = 0;
	        }
	        for (var i = 0; i < n; ++i) {
	            var currentRowHeight = rowHeight;
	            // Add the detail row height to the already expanded rows.
	            // This is useful for the table that goes through a filter or sort.
	            if (rows[i] && rows[i].$$expanded === 1) {
	                currentRowHeight += detailRowHeight;
	            }
	            this.update(i, currentRowHeight);
	        }
	    };
	    /**
	     * Given the ScrollY position i.e. sum, provide the rowIndex
	     * that is present in the current view port.  Below handles edge cases.
	     *
	     * @param scrollY - The scrollY position.
	     * @returns {number} - Index representing the first row visible in the viewport
	     */
	    RowHeightCache.prototype.getRowIndex = function (scrollY) {
	        if (scrollY === 0)
	            return 0;
	        return this.calcRowIndex(scrollY);
	    };
	    /**
	     * When a row is expanded or rowHeight is changed, update the height.  This can
	     * be utilized in future when Angular Data table supports dynamic row heights.
	     *
	     *
	     * @param atRowIndex Update the data at this index row in the grid.
	     * @param byRowHeight Update by the rowHeight provided.
	     */
	    RowHeightCache.prototype.update = function (atRowIndex, byRowHeight) {
	        if (!this.treeArray.length) {
	            throw new Error("Update at index " + atRowIndex + " with value " + byRowHeight + " failed:\n        Row Height cache not initialized.");
	        }
	        var n = this.treeArray.length;
	        atRowIndex |= 0;
	        while (atRowIndex < n) {
	            this.treeArray[atRowIndex] += byRowHeight;
	            atRowIndex |= (atRowIndex + 1);
	        }
	    };
	    /**
	     * Range Sum query from 1 to the rowIndex
	     *
	     * @param atIndex The row index until which the total height needs to be obtained.
	     * @returns {number} The total height from row 1 to the rowIndex.
	     */
	    RowHeightCache.prototype.query = function (atIndex) {
	        if (!this.treeArray.length) {
	            throw new Error("query at index " + atIndex + " failed: Fenwick tree array not initialized.");
	        }
	        var sum = 0;
	        atIndex |= 0;
	        while (atIndex >= 0) {
	            sum += this.treeArray[atIndex];
	            atIndex = (atIndex & (atIndex + 1)) - 1;
	        }
	        return sum;
	    };
	    /**
	     * Find the total height between 2 row indexes
	     * @param atIndexA The row index from
	     * @param atIndexB The row index to
	     * @returns {number} total pixel height between 2 row indexes.
	     */
	    RowHeightCache.prototype.queryBetween = function (atIndexA, atIndexB) {
	        return this.query(atIndexB) - this.query(atIndexA - 1);
	    };
	    /**
	     * Given the ScrollY position i.e. sum, provide the rowIndex
	     * that is present in the current view port.
	     *
	     * @param sum - The scrollY position.
	     * @returns {number} - Index representing the first row visible in the viewport
	     */
	    RowHeightCache.prototype.calcRowIndex = function (sum) {
	        if (!this.treeArray.length)
	            return 0;
	        var pos = -1;
	        var dataLength = this.treeArray.length;
	        // Get the highest bit for the block size.
	        var highestBit = Math.pow(2, dataLength.toString(2).length - 1);
	        for (var blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
	            var nextPos = pos + blockSize;
	            if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
	                sum -= this.treeArray[nextPos];
	                pos = nextPos;
	            }
	        }
	        return pos + 1;
	    };
	    return RowHeightCache;
	}());
	exports.RowHeightCache = RowHeightCache;
	
	
	/***/ }),
	
	/***/ "./src/utils/scrollbar-width.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	/**
	 * Gets the width of the scrollbar.  Nesc for windows
	 * http://stackoverflow.com/a/13382873/888165
	 * @return {int} width
	 */
	function getScrollBarWidth() {
	    var outer = document.createElement('div');
	    outer.style.visibility = 'hidden';
	    outer.style.width = '100px';
	    outer.style.msOverflowStyle = 'scrollbar';
	    document.body.appendChild(outer);
	    var widthNoScroll = outer.offsetWidth;
	    outer.style.overflow = 'scroll';
	    var inner = document.createElement('div');
	    inner.style.width = '100%';
	    outer.appendChild(inner);
	    var widthWithScroll = inner.offsetWidth;
	    outer.parentNode.removeChild(outer);
	    return widthNoScroll - widthWithScroll;
	}
	exports.getScrollBarWidth = getScrollBarWidth;
	;
	exports.scrollbarWidth = getScrollBarWidth();
	
	
	/***/ }),
	
	/***/ "./src/utils/selection.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function selectRows(selected, row, comparefn) {
	    var selectedIndex = comparefn(row, selected);
	    if (selectedIndex > -1) {
	        selected.splice(selectedIndex, 1);
	    }
	    else {
	        selected.push(row);
	    }
	    return selected;
	}
	exports.selectRows = selectRows;
	function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
	    var reverse = index < prevIndex;
	    for (var i = 0, len = rows.length; i < len; i++) {
	        var row = rows[i];
	        var greater = i >= prevIndex && i <= index;
	        var lesser = i <= prevIndex && i >= index;
	        var range = { start: 0, end: 0 };
	        if (reverse) {
	            range = {
	                start: index,
	                end: (prevIndex - index)
	            };
	        }
	        else {
	            range = {
	                start: prevIndex,
	                end: index + 1
	            };
	        }
	        if ((reverse && lesser) || (!reverse && greater)) {
	            // if in the positive range to be added to `selected`, and
	            // not already in the selected array, add it
	            if (i >= range.start && i <= range.end) {
	                selected.push(row);
	            }
	        }
	    }
	    return selected;
	}
	exports.selectRowsBetween = selectRowsBetween;
	
	
	/***/ }),
	
	/***/ "./src/utils/sort.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var types_1 = __webpack_require__("./src/types/index.ts");
	var deep_getter_1 = __webpack_require__("./src/utils/deep-getter.ts");
	/**
	 * Gets the next sort direction
	 * @param  {SortType}      sortType
	 * @param  {SortDirection} currentSort
	 * @return {SortDirection}
	 */
	function nextSortDir(sortType, current) {
	    if (sortType === types_1.SortType.single) {
	        if (current === types_1.SortDirection.asc) {
	            return types_1.SortDirection.desc;
	        }
	        else {
	            return types_1.SortDirection.asc;
	        }
	    }
	    else {
	        if (!current) {
	            return types_1.SortDirection.asc;
	        }
	        else if (current === types_1.SortDirection.asc) {
	            return types_1.SortDirection.desc;
	        }
	        else if (current === types_1.SortDirection.desc) {
	            return undefined;
	        }
	    }
	}
	exports.nextSortDir = nextSortDir;
	;
	/**
	 * Adapted from fueld-ui on 6/216
	 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
	 * @param  {any}    a
	 * @param  {any}    b
	 * @return {number} position
	 */
	function orderByComparator(a, b) {
	    if (a === null || typeof a === 'undefined')
	        a = 0;
	    if (b === null || typeof b === 'undefined')
	        b = 0;
	    if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
	        // Convert to string in case of a=0 or b=0
	        a = String(a);
	        b = String(b);
	        // Isn't a number so lowercase the string to properly compare
	        if (a.toLowerCase() < b.toLowerCase())
	            return -1;
	        if (a.toLowerCase() > b.toLowerCase())
	            return 1;
	    }
	    else {
	        // Parse strings as numbers to compare properly
	        if (parseFloat(a) < parseFloat(b))
	            return -1;
	        if (parseFloat(a) > parseFloat(b))
	            return 1;
	    }
	    // equal each other
	    return 0;
	}
	exports.orderByComparator = orderByComparator;
	/**
	 * Sorts the rows
	 *
	 * @export
	 * @param {any[]} rows
	 * @param {any[]} columns
	 * @param {any[]} dirs
	 * @returns
	 */
	function sortRows(rows, columns, dirs) {
	    if (!rows || !dirs || !dirs.length || !columns)
	        return rows;
	    var temp = rows.slice();
	    var cols = columns.reduce(function (obj, col) {
	        if (col.comparator && typeof col.comparator === 'function') {
	            obj[col.prop] = col.comparator;
	        }
	        return obj;
	    }, {});
	    return temp.sort(function (a, b) {
	        for (var _i = 0, dirs_1 = dirs; _i < dirs_1.length; _i++) {
	            var _a = dirs_1[_i], prop = _a.prop, dir = _a.dir;
	            var propA = deep_getter_1.deepValueGetter(a, prop);
	            var propB = deep_getter_1.deepValueGetter(b, prop);
	            var compareFn = cols[prop] || orderByComparator;
	            var comparison = dir !== types_1.SortDirection.desc ?
	                compareFn(propA, propB) :
	                -compareFn(propA, propB);
	            // Don't return 0 yet in case of needing to sort by next property
	            if (comparison !== 0)
	                return comparison;
	        }
	        // equal each other
	        return 0;
	    });
	}
	exports.sortRows = sortRows;
	
	
	/***/ }),
	
	/***/ "./src/utils/throttle.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	/**
	 * Throttle a function
	 *
	 * @export
	 * @param {*} func
	 * @param {number} wait
	 * @param {*} [options]
	 * @returns
	 */
	function throttle(func, wait, options) {
	    options = options || {};
	    var context;
	    var args;
	    var result;
	    var timeout = null;
	    var previous = 0;
	    function later() {
	        previous = options.leading === false ? 0 : +new Date();
	        timeout = null;
	        result = func.apply(context, args);
	    }
	    return function () {
	        var now = +new Date();
	        if (!previous && options.leading === false) {
	            previous = now;
	        }
	        var remaining = wait - (now - previous);
	        context = this;
	        args = arguments;
	        if (remaining <= 0) {
	            clearTimeout(timeout);
	            timeout = null;
	            previous = now;
	            result = func.apply(context, args);
	        }
	        else if (!timeout && options.trailing !== false) {
	            timeout = setTimeout(later, remaining);
	        }
	        return result;
	    };
	}
	exports.throttle = throttle;
	/**
	 * Throttle decorator
	 *
	 *  class MyClass {
	 *    throttleable(10)
	 *    myFn() { ... }
	 *  }
	 *
	 * @export
	 * @param {number} duration
	 * @param {*} [options]
	 * @returns
	 */
	function throttleable(duration, options) {
	    return function innerDecorator(target, key, descriptor) {
	        return {
	            configurable: true,
	            enumerable: descriptor.enumerable,
	            get: function getter() {
	                Object.defineProperty(this, key, {
	                    configurable: true,
	                    enumerable: descriptor.enumerable,
	                    value: throttle(descriptor.value, duration, options)
	                });
	                return this[key];
	            }
	        };
	    };
	}
	exports.throttleable = throttleable;
	
	
	/***/ }),
	
	/***/ "./src/utils/translate.ts":
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var prefixes_1 = __webpack_require__("./src/utils/prefixes.ts");
	var camel_case_1 = __webpack_require__("./src/utils/camel-case.ts");
	// browser detection and prefixing tools
	var transform = prefixes_1.getVendorPrefixedName('transform');
	var backfaceVisibility = prefixes_1.getVendorPrefixedName('backfaceVisibility');
	var hasCSSTransforms = !!prefixes_1.getVendorPrefixedName('transform');
	var hasCSS3DTransforms = !!prefixes_1.getVendorPrefixedName('perspective');
	var ua = window.navigator.userAgent;
	var isSafari = (/Safari\//).test(ua) && !(/Chrome\//).test(ua);
	function translateXY(styles, x, y) {
	    if (hasCSSTransforms) {
	        if (!isSafari && hasCSS3DTransforms) {
	            styles[transform] = "translate3d(" + x + "px, " + y + "px, 0)";
	            styles[backfaceVisibility] = 'hidden';
	        }
	        else {
	            styles[camel_case_1.camelCase(transform)] = "translate(" + x + "px, " + y + "px)";
	        }
	    }
	    else {
	        styles.top = y + "px";
	        styles.left = x + "px";
	    }
	}
	exports.translateXY = translateXY;
	
	
	/***/ }),
	
	/***/ 0:
	/***/ (function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_0__;
	
	/***/ }),
	
	/***/ 1:
	/***/ (function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
	
	/***/ })
	
	/******/ });
	});
	//# sourceMappingURL=index.map

/***/ },

/***/ 71:
/*!*****************************************************************************!*\
  !*** ./angular2App/app/components/productsTable/productsTable.component.ts ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	//our root app component
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var products_service_1 = __webpack_require__(/*! ../../services/products.service */ 63);
	var windowref_service_1 = __webpack_require__(/*! ../../services/windowref.service */ 72);
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
	    __decorate([
	        core_1.ViewChild('productsTable'), 
	        __metadata('design:type', Object)
	    ], ProductsTableComponent.prototype, "table", void 0);
	    __decorate([
	        core_1.ViewChild('imgTmpl'), 
	        __metadata('design:type', (typeof (_a = typeof core_1.TemplateRef !== 'undefined' && core_1.TemplateRef) === 'function' && _a) || Object)
	    ], ProductsTableComponent.prototype, "imgTmpl", void 0);
	    ProductsTableComponent = __decorate([
	        core_1.Component({
	            selector: 'products-table',
	            template: __webpack_require__(/*! ./productsTable.component.html */ 73),
	            encapsulation: core_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof products_service_1.ProductsService !== 'undefined' && products_service_1.ProductsService) === 'function' && _b) || Object, (typeof (_c = typeof windowref_service_1.WindowRef !== 'undefined' && windowref_service_1.WindowRef) === 'function' && _c) || Object])
	    ], ProductsTableComponent);
	    return ProductsTableComponent;
	    var _a, _b, _c;
	}());
	exports.ProductsTableComponent = ProductsTableComponent;


/***/ },

/***/ 72:
/*!*******************************************************!*\
  !*** ./angular2App/app/services/windowref.service.ts ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var WindowRef = (function () {
	    function WindowRef() {
	    }
	    WindowRef.prototype.getNativeWindow = function () {
	        return window;
	    };
	    WindowRef = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], WindowRef);
	    return WindowRef;
	}());
	exports.WindowRef = WindowRef;


/***/ },

/***/ 73:
/*!*******************************************************************************!*\
  !*** ./angular2App/app/components/productsTable/productsTable.component.html ***!
  \*******************************************************************************/
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3 col-sm-4\">\r\n            <input type='text'\r\n                   placeholder='Type to search...'\r\n                   class=\"form-control\"\r\n                   [ngModel]='val'\r\n                   (ngModelChange)='updateFilter($event)' />\r\n        </div>\r\n\r\n        <div class=\"col-md-3 col-sm-4\">\r\n            <ss-multiselect-dropdown [options]=\"_myOptions\" [texts]=\"_myTexts\" (ngModelChange)=\"onColumnsChange($event)\"\r\n                                     [settings]=\"_mySettings\" [(ngModel)]=\"_selectedOptions\"></ss-multiselect-dropdown>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <ngx-datatable #productsTable\r\n                           class=\"material\"\r\n                           [columns]=\"_columns\"\r\n                           [rows]=\"_products\"\r\n                           [columnMode]=\"'force'\"\r\n                           [draggable]=\"true\"\r\n                           [headerHeight]=\"30\"\r\n                           [footerHeight]=\"30\"\r\n                           [rowHeight]=\"'auto'\"\r\n                           [scrollbarH]=\"true\"\r\n                           [loadingIndicator]=\"_loadingIndicator\"\r\n                           [externalPaging]=\"true\"\r\n                           [limit]=\"60\"\r\n                           [offset]=\"_currentPage\"\r\n                           [count]=\"_count\"\r\n                           (activate)='onProductClick($event)' \r\n                           (page)='onPage($event)'>                \r\n                                   \r\n            </ngx-datatable>\r\n\r\n            <template let-row=\"row\" #imgTmpl>\r\n                <div>\r\n                    <img src=\"{{row.imageUrl}}\" width=\"150\">\r\n                </div>\r\n            </template>\r\n\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },

/***/ 74:
/*!***********************************************************************!*\
  !*** ./angular2App/app/components/searchForm/searchForm.component.ts ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

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
	var products_service_1 = __webpack_require__(/*! ../../services/products.service */ 63);
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
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
	            }];
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
	    SearchFormComponent = __decorate([
	        core_1.Component({
	            selector: 'search-form',
	            template: __webpack_require__(/*! ./searchForm.component.html */ 75)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof products_service_1.ProductsService !== 'undefined' && products_service_1.ProductsService) === 'function' && _a) || Object])
	    ], SearchFormComponent);
	    return SearchFormComponent;
	    var _a;
	}());
	exports.SearchFormComponent = SearchFormComponent;


/***/ },

/***/ 75:
/*!*************************************************************************!*\
  !*** ./angular2App/app/components/searchForm/searchForm.component.html ***!
  \*************************************************************************/
/***/ function(module, exports) {

	module.exports = "\r\n<form #myForm=\"ngForm\" novalidate (ngSubmit)=\"scrape(myForm, myForm.value, myForm.valid)\" class=\"form-vertical\">\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2\">\r\n            <label for=\"source\">Select online store</label>\r\n            <select [(ngModel)]=\"filter.onlineStoreName\" class=\"form-control\" name=\"onlineStoreName\" id=\"onlineStoreName\">\r\n                <option *ngFor=\"let source of sources\" [ngValue]=\"source.value\">{{source.name}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"col-md-2 form-group\">\r\n            <label for=\"title\">Title</label>\r\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"filter.title\" #title=\"ngModel\" name=\"title\" id=\"title\" (focusout)=\"getCategories($event)\" required>\r\n        </div>\r\n\r\n        <div class=\"col-md-2 form-group\">\r\n            <label for=\"brand\">Brand</label>\r\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"filter.brand\" #brand=\"ngModel\" name=\"brand\" id=\"brand\">\r\n        </div>\r\n\r\n        <div class=\"col-md-2 form-group\">\r\n            <label for=\"gender\">Gender</label>\r\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"filter.gender\" #gender=\"ngModel\" id=\"gender\" name=\"gender\">\r\n        </div>\r\n\r\n        <div class=\"col-md-2 form-group\">\r\n            <label for=\"category\">Category</label>\r\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"filter.category\" #category=\"ngModel\" name=\"category\" id=\"category\">\r\n\r\n        </div>\r\n    </div>\r\n\r\n      \r\n    <div class=\"row form-group\">\r\n        <div class=\"col-md-2\">\r\n            <label for=\"priceLow\">Price Now, $</label>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <label for=\"discountLow\">Discount, %</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"row form-group\">\r\n        <div class=\"col-md-2 form-group\">\r\n             \r\n                 <input class=\"form-control\" type=\"number\" [(ngModel)]=\"filter.priceLow\" #priceLow=\"ngModel\" name=\"priceLow\" id=\"priceLow\" min=\"0\" placeholder=\"From\" style=\"margin-bottom: 5px;\">\r\n             \r\n                 <input class=\"form-control\" type=\"number\" [(ngModel)]=\"filter.priceHigh\" #priceHigh=\"ngModel\" name=\"priceHigh\" id=\"priceHigh\" min=\"0\" placeholder=\"To\" style=\"margin-top: 5px;\">\r\n    \r\n         </div>\r\n        <div class=\"col-md-2 form-group\">\r\n             \r\n                 <input class=\"form-control\" type=\"number\" [(ngModel)]=\"filter.discountLow\" #discountLow=\"ngModel\" name=\"discountLow\" id=\"discountLow\" min=\"0\" max=\"100\" placeholder=\"From\" style=\"margin-bottom: 5px;\">\r\n            \r\n                 <input class=\"form-control\" type=\"number\" [(ngModel)]=\"filter.discountHigh\" #discountHigh=\"ngModel\" name=\"discountHigh\" id=\"discountHigh\" min=\"0\" placeholder=\"To\" style=\"margin-top: 5px;\">\r\n             \r\n         </div>\r\n        <div class=\"col-md-2 form-group\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Search</button>\r\n        </div>\r\n    </div>\r\n\r\n</form>";

/***/ },

/***/ 76:
/*!*******************************************!*\
  !*** ./angular2App/app/styles/custom.css ***!
  \*******************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=app-5f1e2721.bundle.js.map