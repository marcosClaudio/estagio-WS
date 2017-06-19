import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "app/app.component";
import { ModuleWithProviders, NgModule } from "@angular/core";

import { PanphletComponent } from './panphlet/panphlet.component';
import { InputExampleComponent } from './input-example/input-example.component';
import { OfferComponent } from './offer/offer.component';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/panphlet', pathMatch: 'full'},
    { path: 'example', component: InputExampleComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoute {}