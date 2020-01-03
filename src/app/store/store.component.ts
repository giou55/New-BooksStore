import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

//declare const doSearch:any;

@Component({
    selector: "store",
    templateUrl: "store.component.html",
    styleUrls: ['./store.component.css']
})
export class StoreComponent {
    public searchText = "";

    public selectedCategory = null;
    public selectedHome = true;
    public productsPerPage = 8;
    public selectedPage = 1;
    public searchResults = null;

    constructor( private repository: ProductRepository,
                 private cart: Cart,
                 private router: Router) { }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    showCategory(newCategory: string) {
        this.selectedCategory = newCategory;
        this.selectedHome = false;
        this.searchResults = null;
    }

    showHome() {
        this.selectedCategory = null;
        this.selectedHome = true;
        this.searchResults = null;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageCount(): number {
        return Math.ceil(this.repository
            .getProducts(this.selectedCategory).length / this.productsPerPage)
    }

    addProductToCart(product: Product) {
        this.cart.addLine(product);
        //this.router.navigateByUrl("/cart");
    }

    navbarOpen = false;

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    displayResults(results:string) {
        this.searchText = results;
        //this.selectedCategory = null;
        //this.selectedHome = false;
        //this.searchResults =  this.repository.getProducts().filter(x => x.name == results);
        //console.log(doSearch(this.products,results));
        //console.log(doSearch(this.products, results));
        //this.searchResults = doSearch(this.products, results); 
    }

}
