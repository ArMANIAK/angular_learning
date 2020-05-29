import { NgModule, Component } from '@angular/core';
import { DataProvider } from '../data-provider/data-provider.service';
import { Product } from '../product/product'

@Component({
    selector: 'app-table',
    templateUrl: './app-table.component.html',
    styles: ['../../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css'],
    inputs: ['rows']
})
export class TableComponent {

    constructor (private dataProvider: DataProvider) { }
    
    rows: number = 4;
    table: { id: number, product: Product }[];

    deleteRow(id: number) {
        this.dataProvider.remove(id);
        console.log(id);
    }

    addRow(product: Product) {
        this.dataProvider.add(product);
    }

    filter: 'Category 1' | 'Category 2' | 'Category 3' | 'All' = 'All';

    renderVisible() {
        this.table = this.filter === 'All'
        ? this.dataProvider.getList().filter((el, i) => i < this.rows)
        : this.dataProvider.getList().filter(el => el.product.category === this.filter).filter((el, i) => i < this.rows);
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