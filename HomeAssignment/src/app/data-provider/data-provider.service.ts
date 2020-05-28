import { Injectable } from '@angular/core';
import { Product } from '../product/product';

@Injectable()
export class DataProvider {
    public data: { id: number, product: Product }[] = [
        { id: 1, product: { name : "product 1", category: 'Category 1', price : 100} },
        { id: 2, product: { name : "product 2", category: 'Category 3', price : 200} },
        { id: 3, product: { name : "product 3", category: 'Category 3', price : 300} },
        { id: 4, product: { name : "product 4", category: 'Category 1', price : 400} },
        { id: 5, product: { name : "product 5", category: 'Category 3', price : 500} },
        { id: 6, product: { name : "product 6", category: 'Category 2', price : 600} },
        { id: 7, product: { name : "product 7", category: 'Category 1', price : 700} },
        { id: 8, product: { name : "product 8", category: 'Category 2', price : 800} },
        { id: 9, product: { name : "product 9", category: 'Category 2', price : 900} },
        { id: 10, product: { name : "product 10", category: 'Category 2', price : 1000} }];

        getList() {
            return this.data;
        }

        remove(id: number) {
            this.data = this.data.filter(element => element.id != id);
        }

        add(product: Product) {
            let [last] = this.data.slice(-1);
            let id = last.id + 1;
            this.data.push({ id, product });
        }
}