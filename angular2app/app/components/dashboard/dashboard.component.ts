import { ProductsService } from '../../services/products.service';
import { OnInit, OnDestroy, Component, NgModule, ViewEncapsulation } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ProductsTableComponent } from '../productsTable/productsTable.component';
import { SearchFormComponent } from '../searchForm/searchForm.component';

@Component({
    selector: 'dashboard',
    template: require('./dashboard.component.html')
})

export class DashboardComponent implements OnInit, OnDestroy {
    
    constructor(private _productsService: ProductsService) {
        
    }

    ngOnInit() {
        
    }

    ngOnDestroy() {
        
    }

}