import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from "@angular/material";
import { TabGridComponent } from './tab-grid/tab-grid.component';
import { CardsComponent } from './cards/cards.component';
import { Cards2Component } from './cards2/cards2.component';

@NgModule({
  declarations: [
    AppComponent,
    TabGridComponent,
    CardsComponent,
    Cards2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    TabGridComponent,
    CardsComponent,
    Cards2Component
  ]
})
export class AppModule { }
