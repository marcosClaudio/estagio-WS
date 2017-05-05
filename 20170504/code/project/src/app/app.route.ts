import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "app/app.component";
import { UsersIndexComponent } from "app/users-index/users-index.component";
import { ModuleWithProviders } from "@angular/core";
import { ListIndexComponent } from "app/list-index/list-index.component";

const APP_ROUTES: Routes = [
    { path: '', component: ListIndexComponent},
    { path: 'users', component: UsersIndexComponent},
    { path: 'posts', component: ListIndexComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);