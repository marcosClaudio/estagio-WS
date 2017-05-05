import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit {
  item: any;
  http: Http;

  constructor(http: Http) {
    this.http = http
    this.getUsers().subscribe(
        (data) => {
          this.item = data;
        },
        (err) =>  console.log("Error Loging In:",err),
        () => { console.log("All Good With The Data")  }
      );
  }

  getUsers () {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
    .map(res =>  res.json())

  }


  ngOnInit() {
  }

}
