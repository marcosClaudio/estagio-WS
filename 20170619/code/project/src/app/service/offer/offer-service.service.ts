import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class OfferServiceService {

  constructor(private http: Http) { }

    list() {
    return this.http.get('http://localhost:3000/offer')
    .map( res => res.json()
    )
  }

  getById(id: number) {
    return this.http.get(`http://localhost:3000/offer/${id}`).map(res => 
      res.json()
    )
  }

  deleteById(id: number) {
    return this.http.delete(`http://localhost:3000/offer/${id}`).map(res => 
      res.json()
    )
  }

   save(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let url: string = 'http://localhost:3000/offer';
    return this.http.post(url,data,headers).map(res =>
    res.json()
    )
  }

   edit(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let url: string = `http://localhost:3000/offer/${data.id}`;
    return this.http.put(url,data,headers).map(res =>
    res.json()
    )
  }

}
