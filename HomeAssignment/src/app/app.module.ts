import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"; // для ngModel
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/app-table.component';
import { RowComponent } from './row/app-row.component';
import { RowInput } from './row-input/app.row-input.component';
import { DataProvider } from './data-provider/data-provider.service';
import { TdfInputComponent } from './tdf-input/tdf-input.component';
import { MdfComponentComponent } from './mdf-component/mdf-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RowComponent,
    RowInput,
    TdfInputComponent,
    MdfComponentComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
  ],
  providers: [DataProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
