import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PanphletService {

  constructor(private http: Http) { }
  
list() {
    return this.http.get('https://localhost:3000/panphlet')
    .map( res => res.json()
    )
  }

  getById(id: number) {
    return this.http.get(`https://localhost:3000/panphlet/${id}`).map(res => 
      res.json()
    )
  }

  deleteById(id: number) {
    return this.http.delete(`https://localhost:3000/panphlet/${id}`).map(res => 
      res.json()
    )
  }

    save(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let url: string = 'https://localhost:3000/panphlet';
    return this.http.post(url,data,headers).map(res =>
    res.json()
    )
  }

}
