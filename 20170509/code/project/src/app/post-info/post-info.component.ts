import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router'
import { Http } from "@angular/http";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {
  inscricao: Subscription;
  item: any;
  page: number;
  http: any;

  constructor(http: Http, private route: ActivatedRoute) {
    this.http = http;
  }
   getPosts () {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/${id}")
    .map(res =>  res.json())
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.page = params['id'];
      this.getPosts().subscribe(
        (data) => {
          this.item = data;
        },
        (err) =>  console.log("Error Loging In:",err),
        () => { console.log("All Good With The Data")  }
      );
  }
    )}
  }


