import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }

  list() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => 
      res.json()
    );
  }

  get(authorId: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${authorId}`).map(res => 
      res.json()
    );
  }

}
