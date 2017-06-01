import { Component, OnInit } from '@angular/core';

import { OfferServiceService } from './../../service/offer/offer-service.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html'
})
export class OfferListComponent implements OnInit {
  offerList = [];

  constructor(
    private offerService: OfferServiceService
  ) { }

    delete(id) {
    this.offerService.deleteById(id).subscribe( success => {
    alert('Deletado');
    },
    error => {
      alert('Erro')
    })
    location.reload();
  }

  ngOnInit() {
    this.offerService.list().subscribe( offers => {
      this.offerList = offers;
    },
    error => {
      alert("error")
    });
  }

}
