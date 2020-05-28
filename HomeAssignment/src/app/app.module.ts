import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"; // для ngModel

import { AppComponent } from './app.component';
import { TableComponent } from './table/app-table.component';
import { RowComponent } from './row/app-row.component';
import { RowInput } from './row-input/app.row-input.component';
import { DataProvider } from './data-provider/data-provider.service';

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
  providers: [DataProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
