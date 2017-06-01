import { Route } from '@angular/router';

import { PanphletComponent } from './panphlet.component';
import { PanphletViewComponent } from "./panphlet-view/panphlet-view.component";
import { PanphletAddComponent } from './panphlet-add/panphlet-add.component';
import { PanphletListComponent } from './panphlet-list/panphlet-list.component';
import { PanphletEditComponent } from './panphlet-edit/panphlet-edit.component';

export const PANPHLET_ROUTES: Route[] = [
  { path: 'panphlet', component: PanphletComponent,
    children: [
  { path: '', component: PanphletListComponent},
  { path: 'view/:id', component: PanphletViewComponent },
  { path: 'edit/:id', component: PanphletEditComponent},
  { path: 'add-panphlet', component: PanphletAddComponent }
    ]}
  ];