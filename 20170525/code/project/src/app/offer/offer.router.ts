import { Route } from '@angular/router';

import { OfferComponent } from './offer.component';
import { OfferAddComponent } from './offer-add/offer-add.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferViewComponent } from './offer-view/offer-view.component';

export const OFFER_ROUTES: Route[] = [
  { path: 'offer', component: OfferComponent,
    children: [
  { path: '', component: OfferListComponent},
  { path: 'view/:id', component: OfferViewComponent },
  { path: 'add-offer', component: OfferAddComponent }
    ]}
  ];