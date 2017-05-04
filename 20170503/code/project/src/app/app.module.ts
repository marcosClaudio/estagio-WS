import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { AppComponent } from './app.component';
import { MaterialModule } from "@angular/material";
import { TabGridComponent } from './tab-grid/tab-grid.component';
import { CardsComponent } from './cards/cards.component';
import { Cards2Component } from './cards2/cards2.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { ListIndexComponent } from './list-index/list-index.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    TabGridComponent,
    CardsComponent,
    Cards2Component,
    AutoCompleteComponent,
    ListIndexComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    TabGridComponent,
    CardsComponent,
    Cards2Component,
    AutoCompleteComponent,
    ListIndexComponent
  ]
})
export class AppModule { }
