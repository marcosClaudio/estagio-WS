import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MarkServiceService {

  constructor(private http: Http) { }

  list() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .map( res => res.json()
    )
  }

  getById(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).map(res => 
      res.json()
    )
  }

  deleteById(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`).map(res => 
      res.json()
    )
  }

  save(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let url: string = 'https://jsonplaceholder.typicode.com/users/';
    return this.http.post(url,data,headers).map(res =>
    res.json()
    )
  }

}
