import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

import { MarkServiceService } from './../../service/mark/mark-service.service';
import { ProductServiceService } from './../../service/product/product-service.service';

@Component({
  selector: 'app-mark-edit',
  templateUrl: './mark-edit.component.html'
})
export class MarkEditComponent implements OnInit {
  mark = [];
  markModel: object;
  constructor(
    private route: ActivatedRoute,
    private markService: MarkServiceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.markService.getById(id).subscribe( mark => {
        this.mark = mark;
      },
      error => {
        alert('Error');
      });
    });
  }

  saveEdit(id,name, logo) {
    this.markModel = {id:id, name:name, logo:logo};
    console.log(this.markModel);
    this.markService.save(this.markModel).subscribe( success => {
      alert('Marca editada com sucesso')
    },
    error => {
      alert('erro')
    })
  window.location.href = "/mark";
  }
}