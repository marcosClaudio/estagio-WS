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
  offerModel: Offer;

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

    save(id,name,price,image) {
    this.offerModel = [id,name,price,image];
    JSON.stringify(this.offerModel);
    console.log(this.offerModel);
    this.offerService.save(this.offerModel).subscribe( success => {
    alert('foi')},
    error => {
      alert('erro');
    });
  }
}