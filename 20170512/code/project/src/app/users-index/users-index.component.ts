import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { UserService } from './../services/user.service';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit {
  user = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.list().subscribe( user =>{
      this.user = user;
    })
  }

}
