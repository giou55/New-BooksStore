import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";


@Component({
    selector: "store",
    templateUrl: "store.component.html",
    styleUrls: ['./store.component.css']
})
export class StoreComponent {
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
        this.showSnackbar();
        // let scrollToTop = window.setInterval(() => {
        //     let pos = window.pageYOffset;
        //     if (pos > 0) {
        //         window.scrollTo(0, pos - 20);
        //     } else {
        //         window.clearInterval(scrollToTop);
        //     }
        // }, 16);
    }

    navbarOpen = false;

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    doSearch(text:string) {
        this.selectedCategory = null;
        this.selectedHome = false;
        this.searchResults =  this.repository.getProducts().filter(x => x.name.toLowerCase().search(text.toLowerCase()) !== -1);
    }

    showSnackbar() {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
      
        // Add the "show" class to DIV
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }

}
