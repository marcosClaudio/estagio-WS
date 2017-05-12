import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router'

import { CommentService } from './../services/comment.service';
import { UserService } from './../services/user.service';
import { PostService } from './../services/post.service';
import { Post } from './../models/post.model';
import { Author } from './../models/author.model';


@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {
  post: Post; // Exemplo de model
  author: Author; // TODO criar MODEL
  comments: any; // TODO criar MODEL

  constructor(
    private postService: PostService, 
    private userService: UserService,
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {
    this.post = new Post();
    this.author = new Author();
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      let id = params['id'];
      // PEGANDO O POST
      this.postService.get(id).subscribe( post => {
        this.post = post;
        this.getAuthor(post.userId);
        this.getComments(post.id);
      });
    });
  }

  // PEGANDO O AUTOR
  getAuthor(authorId: number){
    this.userService.get(authorId).subscribe( author => {
      this.author = author;
    } )
  }

  // PEGANDO OS COMENTARIOS DO POST
  getComments(postId: number){
    this.commentService.getListFromPost(postId).subscribe( comments => {
      console.log('comments', comments);
      this.comments = comments;
    } )
  }

}


