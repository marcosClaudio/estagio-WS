import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "app/app.component";
import { ModuleWithProviders } from "@angular/core";

import { PanphletComponent } from './panphlet/panphlet.component';
import { ProductComponent } from './product/product.component';
import { MarkComponent } from './mark/mark.component';
import { OfferComponent } from './offer/offer.component';


const APP_ROUTES: Routes = [
    { path: '', component: PanphletComponent},
    { path: 'product', component: ProductComponent},
    { path: 'offer', component: OfferComponent },
    { path: 'mark', component: MarkComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);