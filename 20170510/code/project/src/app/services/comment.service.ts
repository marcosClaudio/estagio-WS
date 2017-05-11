import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CommentService {

  constructor(
    private http: Http
  ) { }

 list() {
    return this.http.get("https://jsonplaceholder.typicode.com/comments").map(res => 
      res.json()
    )
  }

  getListFromPost(postId: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).map(res => 
      res.json()
    )
  }

}
