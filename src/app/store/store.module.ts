import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";

import { TopbarComponent } from "./topbar/topbar.component";
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ResultsComponent } from './results/results.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { CartSummaryComponent } from "./cart/cartSummary.component";
import { CartDetailComponent } from "./cart/cartDetail.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        ModelModule, 
        CommonModule, 
        BrowserModule, 
        FormsModule, 
        RouterModule, 
        BrowserAnimationsModule],
    declarations: [
        StoreComponent, 
        CounterDirective, 
        TopbarComponent, 
        NavbarComponent,
        HomeComponent, 
        CategoryComponent,
        ResultsComponent,
        SidebarComponent,
        FooterComponent,
        CartSummaryComponent,
        CartDetailComponent, 
        CheckoutComponent],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }
