import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'app-list-index',
  templateUrl: './list-index.component.html',
  styleUrls: ['./list-index.component.css']
})
export class ListIndexComponent implements OnInit {
  item: any;
  http: any;

  constructor(http: Http) { 
    this.http = http
    this.getPosts().subscribe(
        (data) => {
          this.item = data;
        },
        (err) =>  console.log("Error Loging In:",err),
        () => { console.log("All Good With The Data")  }
      );
  }

  getPosts () {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
    .map(res =>  res.json())

  }

  ngOnInit() {
  }

}
