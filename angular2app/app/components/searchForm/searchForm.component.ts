import { ProductsService } from '../../services/products.service';
import { OnInit, OnDestroy, Component, NgModule,ViewEncapsulation, Renderer } from '@angular/core';
import { Filter } from '../../interfaces/product.interface';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'search-form',
    template: require('./searchForm.component.html')
})

export class SearchFormComponent implements OnInit {

    public submitted: boolean; // keep track on whether form is submitted
    public filter : Filter = {
        title : '',
        brand : '',
        gender : '',
        category : '',
        country : '',
        priceLow : '',
        priceHigh : '',
        priceChangeLow : '',
        priceChangeHigh : '',
        discountLow : '',
        discountHigh : '',
        onlineStoreName: '',
        pageNumber: 1
    };

    sources: any[] = [
        {
            name: "Macy's",
            value: "macys"
        },
        {
            name: "6pm",
            value: "sixpm"
        }];

    selectedValue = this.sources[0];
    
    constructor(private _productsService: ProductsService) {
        
    }

    ngOnInit() {
         
    }

    scrape(form: any, formModel: any, isValid: boolean) {
        this.submitted = true; // set form submit to true
        formModel.pageNumber = 1;

        if (isValid) {
            this._productsService.scrape(formModel);

        }
    }

    onSelect(source) {
    
        this._productsService.selectSource(source.value);
    }

    getCategories(value) {
        this._productsService.getCategories(value);
    }

}