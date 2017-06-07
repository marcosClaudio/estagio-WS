import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

import { PanphletService } from './../../service/panphlet/panphlet.service';

@Component({
  selector: 'app-panphlet-edit',
  templateUrl: './panphlet-edit.component.html'
})
export class PanphletEditComponent implements OnInit {
  panphlet = [];
  panphletModel: object;
  panphletArray = [];

  constructor(
    private route: ActivatedRoute,
    private panphletService: PanphletService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.panphletService.getById(id).subscribe( panphlet => {
      this.panphlet = panphlet;
      this.panphletArray = panphlet.panphletUrl;
    },
     error => {
      alert('error: ');
      });
    });
  }

    save(id,initialDate,endDate,imageUrl, imageUrl2) {
    this.panphletModel = {id:id,initialDate:initialDate,endDate:endDate,panphletUrl:[imageUrl, imageUrl2]};
    JSON.stringify(this.panphletModel);
    console.log(this.panphletModel);
    this.panphletService.edit(this.panphletModel).subscribe( success => {
    alert('Panfleto editado com sucesso!')},
    error => {
      alert('erro');
    })
    window.location.href = "/panphlet";
  }
}