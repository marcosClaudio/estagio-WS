import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PanphletService {

  constructor(private http: Http) { }
  
list() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map( res => res.json()
    )
  }

  getById(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).map(res => 
      res.json()
    )
  }

  deleteById(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).map(res => 
      res.json()
    )
  }
}
