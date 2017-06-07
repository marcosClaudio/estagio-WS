import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Route } from '@angular/router';
import { Offer } from './../model/Offer.model';
import { OfferServiceService } from './../../service/offer/offer-service.service';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html'
})
export class OfferEditComponent implements OnInit {
  offer = [];
  offerModel: object;

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferServiceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.offerService.getById(id).subscribe( offer => {
      this.offer = offer;
    },
     error => {
      alert('error: ');
      });
    });
  }

  save(id,name,initialDate,endDate,productList) {
    this.offerModel = {id: id, name:name, initialDate:initialDate, endDate:endDate, productList: []};
    console.log(this.offerModel);
    this.offerService.edit(this.offerModel).subscribe( success => {
    alert('Oferta editada com sucesso')},
    error => {
      alert('erro');
    });
  window.location.href = "/offer";
  }
}