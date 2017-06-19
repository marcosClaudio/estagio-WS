import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { NgxPaginationModule} from 'ngx-pagination';

import { PanphletModule } from './panphlet/panphlet.module';
import { PanphletService } from './service/panphlet/panphlet.service';
import { MarkModule } from './mark/mark.module';
import { AppComponent } from './app.component';
import { AppRoute } from "./app.route";
import { OfferComponent } from './offer/offer.component';
import { ProductModule } from './product/product.module';
import { ProductServiceService } from './service/product/product-service.service';
import { OfferServiceService } from './service/offer/offer-service.service';
import { MarkServiceService } from './service/mark/mark-service.service';
import { OfferAddComponent } from './offer/offer-add/offer-add.component';
import { OfferListComponent } from './offer/offer-list/offer-list.component';
import { OfferViewComponent } from './offer/offer-view/offer-view.component';
import { OfferModule } from './offer/offer.module';
import { InputExampleComponent } from './input-example/input-example.component';

@NgModule({
  declarations: [
    AppComponent,
    InputExampleComponent
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
    MarkModule,
    PanphletModule,
    OfferModule,
    FlexLayoutModule
  ],
  providers: [
    ProductServiceService,
    MarkServiceService,
    OfferServiceService,
    PanphletService
  ],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
