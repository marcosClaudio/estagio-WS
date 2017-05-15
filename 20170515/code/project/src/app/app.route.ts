import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "app/app.component";
import { ModuleWithProviders } from "@angular/core";

import { PanphletComponent } from './panphleto/panphlet/panphlet.component';
import { ProductComponent } from './product/product/product.component';


const APP_ROUTES: Routes = [
    { path: '', component: PanphletComponent},
    { path: 'product', component: ProductComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);