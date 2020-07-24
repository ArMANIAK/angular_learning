import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../product/product';

@Component({
  selector: 'app-mdf-component',
  templateUrl: './mdf-component.component.html',
  styleUrls: ['./mdf-component.component.css']
})
export class MdfComponentComponent implements OnInit {

  productAddingForm: FormGroup;
  constructor() {  }

  product: Product;
  public categories = new Array('Category 1', 'Category 2', 'Category 3');

  @Output()
  addingEventMDF = new EventEmitter<Product>();

  submitMDF(form) {
    console.dir(form);
    this.addingEventMDF.emit({ name: form.controls.nameMDF.value, category: form.controls.categoryMDF.value, price: form.controls.priceMDF.value });
    form.controls.nameMDF.value = 'You may add another product';
    form.controls.priceMDF.value = 100;
  }

  ngOnInit(): void {
    this.productAddingForm = new FormGroup({
      nameMDF: new FormControl("Some product", [Validators.required, Validators.minLength(4)]),
      categoryMDF: new FormControl('Category 1'),
      priceMDF: new FormControl(100, Validators.required)
    });
  }

}
