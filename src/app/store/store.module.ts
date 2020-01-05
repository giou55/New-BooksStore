import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { FooterComponent } from './footer/footer.component';
import { CartSummaryComponent } from "./cart/cartSummary.component";
import { CartDetailComponent } from "./cart/cartDetail.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [ModelModule, CommonModule, BrowserModule, FormsModule, RouterModule, 
              BrowserAnimationsModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent,
                   CartDetailComponent, CheckoutComponent, FooterComponent],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }
