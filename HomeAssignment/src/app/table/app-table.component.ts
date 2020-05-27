import { NgModule, Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RowComponent } from '../row/app-row.component';
import { RowInput } from '../row-input/app.row-input.component';
import { Product } from '../row/product'

@Component({
    selector: 'app-table',
    templateUrl: './app-table.component.html',
    styles: ['https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'],
    inputs: ['_table', 'rows']
})
export class TableComponent {
    _table: { id: number, name: string, category: 'Category 1' | 'Category 2' | 'Category 3', price: number }[] = [
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

    rows: number = 4;
    table: { id: number, name: string, category: 'Category 1' | 'Category 2' | 'Category 3', price: number }[];

    deleteRow(id: number) {
        this._table = this._table.filter(element => element.id != id);
        console.log(id);
    }

    addRow(product) {
        let [last] = this._table.slice(-1);
        let id = last.id + 1;
        let {name, category, price} = product;
        this._table.push({ id, name, category, price });
    }

    filter: 'Category 1' | 'Category 2' | 'Category 3' | 'All' = 'All';

    renderVisible() {
        this.table = this.filter === 'All'
        ? this._table.filter((el, i) => i < this.rows)
        : this._table.filter(el => el.category === this.filter).filter((el, i) => i < this.rows);
    }

    getStyle(price: number) {
        if (price > 500) return 'red';
    }

    ngOnInit() {
        this.renderVisible();
    }
    
    ngAfterContentChecked() {
        this.renderVisible();
    }
}