import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { HomeComponent } from "./store/home/home.component";
import { CategoryComponent } from "./store/category/category.component";
import { ResultsComponent } from "./store/results/results.component";
import { CheckoutComponent } from "./store/checkout/checkout.component";
import { CartDetailComponent } from "./store/cart/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    imports: [BrowserModule, StoreModule,
        RouterModule.forRoot([
            {
                path: "store", component: HomeComponent,
                canActivate: [StoreFirstGuard]
            },
            {
                path: "category/:name", component: CategoryComponent,
                canActivate: [StoreFirstGuard]
            },
            {
                path: "results", component: ResultsComponent,
                canActivate: [StoreFirstGuard]
            },
            {
                path: "cart", component: CartDetailComponent,
                canActivate: [StoreFirstGuard]
            },
            {
                path: "checkout", component: CheckoutComponent,
                canActivate: [StoreFirstGuard]
            },
            {
                path: "admin",
                loadChildren: "./admin/admin.module#AdminModule",
                canActivate: [StoreFirstGuard]
            },
            { path: "**", redirectTo: "/store" }
        ]),
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })],
    providers: [StoreFirstGuard],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
