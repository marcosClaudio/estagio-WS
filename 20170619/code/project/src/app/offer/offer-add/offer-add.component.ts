import { Component, OnInit } from '@angular/core';

import { OfferServiceService } from './../../service/offer/offer-service.service';

@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html'
})
export class OfferAddComponent implements OnInit {
  offerModel: any;

  constructor(
    private offerService: OfferServiceService
  ) { }

  ngOnInit() {
  }

save(id, name, initialDate, endDate) {
    this.offerModel = {id: id, name:name, initialDate:initialDate, endDate:endDate, productList: []};
    JSON.stringify(this.offerModel);
    console.log(this.offerModel);
    this.offerService.save(this.offerModel).subscribe( success => {
    alert('Oferta adicionada com sucesso')},
    error => {
      alert('erro')
    });
  window.location.href = "/offer";
  }

}
