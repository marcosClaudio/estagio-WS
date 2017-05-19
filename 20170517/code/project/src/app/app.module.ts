import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { AppRoute } from "./app.route";
import { PanphletComponent } from "app/panphlet/panphlet.component";
import { MarkComponent } from './mark/mark.component';
import { OfferComponent } from './offer/offer.component';
import { ProductModule } from "app/product/product.module";


@NgModule({
  declarations: [
    AppComponent,
    PanphletComponent,
    MarkComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    AppRoute,
    ProductModule,
    FlexLayoutModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  exports: [
    PanphletComponent
  ]
})
export class AppModule { }
