import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { NgxPaginationModule } from 'ngx-pagination';

import { ProductComponent } from "./product.component";
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';
import { VisualizeProductComponent } from './visualize-product/visualize-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductRoutingModule } from "./product.routing.module";



@NgModule({
  declarations: [
    ProductComponent,
    ListProductComponent,
    EditProductComponent,
    RemoveProductComponent,
    VisualizeProductComponent,
    AddProductComponent
  ],
  imports: [
    ProductRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FlexLayoutModule,
    HttpModule
  ],
  providers: [
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
