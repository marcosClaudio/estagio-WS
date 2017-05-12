import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "app/app.component";
import { ModuleWithProviders } from "@angular/core";

import { UserInfoComponent } from './user-info/user-info.component';
import { PostInfoComponent } from "app/post-info/post-info.component";
import { ListIndexComponent } from "app/list-index/list-index.component";
import { UsersIndexComponent } from "app/users-index/users-index.component";


const APP_ROUTES: Routes = [
    { path: '', component: ListIndexComponent},
    { path: 'users', component: UsersIndexComponent},
    { path: 'posts', component: ListIndexComponent},
    { path: 'post/:id', component: PostInfoComponent},
    { path: 'user/:id', component: UserInfoComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);