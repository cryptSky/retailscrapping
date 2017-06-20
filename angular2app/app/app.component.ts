import { Component, NgModule, ViewEncapsulation } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    declarations: [DashboardComponent]
})

@Component({
    selector: 'app',
    template: require('./app.component.html'),

})

export class AppComponent { }