import { Route } from '@angular/router';

import { OfferComponent } from './offer.component';
import { OfferAddComponent } from './offer-add/offer-add.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferViewComponent } from './offer-view/offer-view.component';
import { OfferEditComponent } from './offer-edit/offer-edit.component';

export const OFFER_ROUTES: Route[] = [
  { path: 'offer', component: OfferComponent,
    children: [
  { path: '', component: OfferListComponent},
  { path: 'view/:id', component: OfferViewComponent },
  { path: 'edit/:id', component: OfferEditComponent },
  { path: 'add-offer', component: OfferAddComponent }
    ]}
  ];