import { PRODUCT_ROUTES } from './product.route';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProductComponent } from "./product.component";
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RemoveProductComponent } from './list-product/remove-product.component';
import { VisualizeProductComponent } from './visualize-product/visualize-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ActionCardComponent } from './action-card/action-card.component';

@NgModule({
  declarations: [
    ProductComponent,
    ListProductComponent,
    EditProductComponent,
    RemoveProductComponent,
    VisualizeProductComponent,
    AddProductComponent,
    ActionCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FlexLayoutModule,
    HttpModule,
    RouterModule.forRoot(PRODUCT_ROUTES, {useHash : false})
  ],
  providers: [
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
