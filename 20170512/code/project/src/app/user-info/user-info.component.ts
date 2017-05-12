
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Post } from './../models/post.model';
import { Author } from './../models/author.model';
import { UserService } from './../services/user.service';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: Author;
  post = [];
  address: Author;

  constructor(
    private postService: PostService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { 
    this.user = new Author();
    this.address = new Author();
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) =>{
      let id = params['id'];
      this.userService.get(id).subscribe( user => {
        this.user = user;
        this.address = user.address;
        this.getPost(id);
      });
    });
  }

  getPost(userId: any) {
    this.postService.getUserPosts(userId).subscribe( posts => {
      this.post = posts;
    });
  }

}
