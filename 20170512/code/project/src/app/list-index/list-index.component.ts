import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { PostService } from './../services/post.service';

@Component({
  selector: 'app-list-index',
  templateUrl: './list-index.component.html',
  styleUrls: ['./list-index.component.css']
})
export class ListIndexComponent implements OnInit {
  post = [];

  constructor(
    private postService: PostService
  ) { 
    
  }

  ngOnInit() {
    this.postService.list().subscribe( post =>{
      this.post = post;
    });
  }

}
