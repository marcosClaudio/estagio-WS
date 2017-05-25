import { Route } from '@angular/router';

import { PanphletComponent } from './panphlet.component';
import { PanphletViewComponent } from "./panphlet-view/panphlet-view.component";
import { PanphletAddComponent } from './panphlet-add/panphlet-add.component';
import { PanphletListComponent } from './panphlet-list/panphlet-list.component';

export const PANPHLET_ROUTES: Route[] = [
  { path: 'panphlet', component: PanphletComponent,
    children: [
  { path: '', component: PanphletListComponent},
  { path: 'view/:id', component: PanphletViewComponent },
  { path: 'add-panphlet', component: PanphletAddComponent }
    ]}
  ];