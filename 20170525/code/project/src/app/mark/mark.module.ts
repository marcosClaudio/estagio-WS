import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';

import { MARK_ROUTES } from './mark.route';
import { MarkComponent } from './mark.component';
import { MarkListComponent } from './mark-list/mark-list.component';
import { MarkAddComponent } from './mark-add/mark-add.component';
import { MarkViewComponent } from './mark-view/mark-view.component';

@NgModule({
  declarations: [
    MarkComponent,
    MarkListComponent,
    MarkViewComponent,
    MarkAddComponent
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
    RouterModule.forRoot(MARK_ROUTES, {useHash : false})
  ],
  providers: [
  ],
  exports: [
    MarkComponent
  ]
})
export class MarkModule { }