import { Component, OnInit } from '@angular/core';

import { Offer } from './../model/Offer.model';
import { OfferServiceService } from './../../service/offer/offer-service.service';

@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html'
})
export class OfferAddComponent implements OnInit {
  offerModel: Offer;

  constructor(
    private offerService: OfferServiceService
  ) { }

  ngOnInit() {
  }

save(name, initialDate, endDate) {
    this.offerModel = [{name:name ,initialDate:initialDate,endDate:endDate}];
    JSON.stringify(this.offerModel);
    console.log(this.offerModel);
    this.offerService.save(this.offerModel).subscribe( success => {
    alert('foi')},
    error => {
      alert('erro');
    });
  }

}
