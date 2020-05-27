import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../row/product'

@Component({
    selector: 'tr.ng-row',
    templateUrl: './app-row.component.html',
    inputs: ['id', 'product']
})
export class RowComponent {
    id: number;
    product: Product

    @Output()
    deletionEvent = new EventEmitter<number>();

    delete() {
        this.deletionEvent.emit(this.id);
    }
}