import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Product } from '../product/product';


@Component({
  selector: 'app-tdf-input',
  templateUrl: './tdf-input.component.html',
  styleUrls: ['./tdf-input.component.css']
})
export class TdfInputComponent implements OnInit {

  public product: Product = { name: 'Input new product name', category: 'Category 1', price: 100 };

  public categories = new Array('Category 1', 'Category 2', 'Category 3');

  constructor() { }

  ngOnInit(): void {
  }


  @Output()
  addingEventTDF = new EventEmitter<Product>();

    add() {
        // duplicating object to avoid passing referrence into ngModel
        this.addingEventTDF.emit({ name: this.product.name, category: this.product.category, price: this.product.price });
        this.product.name = 'You may add another product';
        this.product.price = 0;
    }
}
