import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "app/app.component";
import { ModuleWithProviders, NgModule } from "@angular/core";

import { PanphletComponent } from './panphlet/panphlet.component';
import { MarkComponent } from './mark/mark.component';
import { OfferComponent } from './offer/offer.component';


const APP_ROUTES: Routes = [
    { path: '', component: PanphletComponent},
    { path: 'offer', component: OfferComponent },
    { path: 'mark', component: MarkComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoute {}