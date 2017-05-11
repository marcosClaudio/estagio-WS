import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PostService {

  constructor(
    private http: Http
  ) { }

  list() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts").map(res => 
      res.json()
    )
  }

  get(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).map(res => 
      res.json()
    )
  }

}
