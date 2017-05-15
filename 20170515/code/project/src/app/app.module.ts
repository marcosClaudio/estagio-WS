import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { AppComponent } from './app.component';
import { MaterialModule } from "@angular/material";
import { routing } from "app/app.route";
import { FlexLayoutModule } from '@angular/flex-layout';
import { PanphletComponent } from "app/panphleto/panphlet/panphlet.component";
import { ProductComponent } from "app/product/product/product.component";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PanphletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    routing,
    FlexLayoutModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  exports: [
    ProductComponent,
    PanphletComponent
  ]
})
export class AppModule { }
