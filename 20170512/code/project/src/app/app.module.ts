import { Post } from './models/post.model';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { AppComponent } from './app.component';
import { MaterialModule } from "@angular/material";
import { ListIndexComponent } from './list-index/list-index.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { routing } from "app/app.route";
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostInfoComponent } from './post-info/post-info.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ListIndexComponent,
    UsersIndexComponent,
    PostInfoComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    routing,
    FlexLayoutModule
  ],
  providers: [
    CommentService,
    PostService,
    UserService
  ],
  bootstrap: [AppComponent],
  exports: [
    ListIndexComponent
  ]
})
export class AppModule { }
