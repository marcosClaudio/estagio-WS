import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';

import { PANPHLET_ROUTES } from './panphlet.route';
import { PanphletComponent } from './panphlet.component';
import { PanphletViewComponent } from "./panphlet-view/panphlet-view.component";
import { PanphletAddComponent } from './panphlet-add/panphlet-add.component';
import { PanphletListComponent } from './panphlet-list/panphlet-list.component';
import { PanphletEditComponent } from './panphlet-edit/panphlet-edit.component';

@NgModule({
  declarations: [
    PanphletViewComponent,
    PanphletListComponent,
    PanphletAddComponent,
    PanphletComponent,
    PanphletEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FlexLayoutModule,
    HttpModule,
    RouterModule.forRoot(PANPHLET_ROUTES, {useHash : false})
  ],
  providers: [
  ],
  exports: [
  ]
})
export class PanphletModule { }
