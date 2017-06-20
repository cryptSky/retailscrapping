import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { Configuration } from './app.constants';

import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect/src/multiselect-dropdown';

import { routing, appRoutingProviders } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ProductsTableComponent } from './components/productsTable/productsTable.component';
import { SearchFormComponent } from './components/searchForm/searchForm.component';

import { ProductsService } from './services/products.service';
import { WindowRef } from './services/windowref.service';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        DashboardComponent,
        ProductsTableComponent,
        SearchFormComponent
        
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule,
        FormsModule,
        NgxDatatableModule,
        MultiselectDropdownModule
    ],
    
    providers: [
        appRoutingProviders,
        Configuration,
        ProductsService,
        WindowRef
    ],
})

export class AppModule {
 
}


