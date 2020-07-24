import { Injectable } from '@angular/core';
import { Product } from './products/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor() { }

  private productList: Product[] = [
    { id: 1, name : "product 1", category: 'Category 1', price : 100 },
    { id: 2, name : "product 2", category: 'Category 3', price : 200 },
    { id: 3, name : "product 3", category: 'Category 3', price : 300 },
    { id: 4, name : "product 4", category: 'Category 1', price : 400 },
    { id: 5, name : "product 5", category: 'Category 3', price : 500 },
    { id: 6, name : "product 6", category: 'Category 2', price : 600 },
    { id: 7, name : "product 7", category: 'Category 1', price : 700 },
    { id: 8, name : "product 8", category: 'Category 2', price : 800 },
    { id: 9, name : "product 9", category: 'Category 2', price : 900 },
    { id: 10, name : "product 10", category: 'Category 2', price : 1000 }
  ];

  getData() {
    return this.productList;
  }
}
