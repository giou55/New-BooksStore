import { Component, OnInit } from '@angular/core';
import { Product } from "../../model/product.model";
import { ProductRepository } from "../../model/product.repository";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private repository: ProductRepository) { }

  public selectedCategory = null;
  public selectedHome = true;

  get categories(): string[] {
    return this.repository.getCategories();
}

}
