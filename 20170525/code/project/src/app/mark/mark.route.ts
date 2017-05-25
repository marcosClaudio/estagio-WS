import { Route } from '@angular/router';

import { MarkComponent } from './mark.component';
import { MarkListComponent } from './mark-list/mark-list.component';
import { MarkAddComponent } from './mark-add/mark-add.component';
import { MarkViewComponent } from './mark-view/mark-view.component';

export const MARK_ROUTES: Route[] = [
  { path: 'mark', component: MarkComponent,
    children: [
  { path: '', component: MarkListComponent},
  { path: 'view/:id', component: MarkViewComponent },
  { path: 'add-mark', component: MarkAddComponent }
    ]}
  ];