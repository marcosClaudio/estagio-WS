import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {
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
