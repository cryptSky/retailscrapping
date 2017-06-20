"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_constants_1 = require("./app.constants");
var multiselect_dropdown_1 = require("angular-2-dropdown-multiselect/src/multiselect-dropdown");
var app_routes_1 = require("./app.routes");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var productsTable_component_1 = require("./components/productsTable/productsTable.component");
var searchForm_component_1 = require("./components/searchForm/searchForm.component");
var products_service_1 = require("./services/products.service");
var windowref_service_1 = require("./services/windowref.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
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
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map