import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { Product } from './product/product';
import { Router, ActivatedRoute } from '@angular/router';

let data = {
  getData: function() {
    return [
      { id: 1, name : "product 1", category: 'Category 1', price : 100 },
      { id: 2, name : "product 2", category: 'Category 3', price : 200 },
      { id: 3, name : "product 3", category: 'Category 3', price : 300 },
      { id: 4, name : "product 4", category: 'Category 1', price : 400 },
      { id: 5, name : "product 5", category: 'Category 3', price : 500 },
      { id: 6, name : "product 6", category: 'Category 2', price : 600 },
      { id: 7, name : "product 7", category: 'Category 1', price : 700 },
      { id: 8, name : "product 8", category: 'Category 2', price : 800 },
      { id: 9, name : "product 9", category: 'Category 2', price : 900 },
      { id: 10, name : "product 10", category: 'Category 2', price : 1000 }];
  // вернуть массив products
  }
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ { provide: ProductDataService, useValue: data } ]
})
export class ProductsComponent implements OnInit {

  productList: Product[];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productDataService: ProductDataService) {
    this.productList = this.productDataService.getData();
  }

  ngOnInit(): void {
  }

  getAll(): Product[] {
    return this.productDataService.getData();
  }

  getProduct(id: number): Product {
    return this.productDataService.getData()
      .filter(product => product.id === id)[0];
  }

  getDetails(product: Product) {
    this.router.navigate([product.id], {relativeTo: this.activatedRoute})
  }

}
