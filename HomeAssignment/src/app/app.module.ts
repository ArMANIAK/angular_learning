import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"; // для ngModel

import { AppComponent } from './app.component';
import { TableComponent } from './table/app-table.component';
import { RowComponent } from './row/app-row.component';
import { RowInput } from './row-input/app.row-input.component';
import { Product } from './row/product';

@NgModule({
  declarations: [
  AppComponent,
  TableComponent,
  RowComponent,
  RowInput
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
