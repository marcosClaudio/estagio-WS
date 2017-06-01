import { OFFER_ROUTES } from './offer.router';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { NgxPaginationModule} from 'ngx-pagination';

import { OfferAddComponent } from './offer-add/offer-add.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferViewComponent } from './offer-view/offer-view.component';
import { OfferEditComponent } from './offer-edit/offer-edit.component';
import { OfferComponent } from "app/offer/offer.component";

@NgModule({
  declarations: [
    OfferComponent,
    OfferAddComponent,
    OfferListComponent,
    OfferViewComponent,
    OfferEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FlexLayoutModule,
    RouterModule.forRoot(OFFER_ROUTES, {useHash : false})
  ],
  providers: [
  ],
  exports: [
  ]
})
export class OfferModule { }
