import { NgModule, Component, Output, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms"; // для ngModel
import { EventEmitter } from '@angular/core';
import { Product } from '../row/product';

@Component({
    selector: 'app-row-input',
    templateUrl: './app.row-input.component.html'
})
export class RowInput {
    @Input()
    product: Product = {name: 'Some product', category: 'Category 1', price: 0 };
    
    @Output()
    addingEvent = new EventEmitter<Product>();

    add() {
        this.addingEvent.emit(this.product);
        this.product.name = 'You may add another product';
        this.product.price = 0;
    }
}