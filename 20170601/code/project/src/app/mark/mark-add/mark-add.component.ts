import { Component, OnInit } from '@angular/core';

import { MarkServiceService } from './../../service/mark/mark-service.service';
import { Mark } from './../mark.model';

@Component({
  selector: 'app-mark-add',
  templateUrl: './mark-add.component.html'
})
export class MarkAddComponent implements OnInit {
  markModel: object;

  constructor(
    private markService: MarkServiceService
  ) { }

  ngOnInit() {
  }

  save(id,name, logo) {
    this.markModel = {id:id, name:name, logo:logo};
    console.log(this.markModel);
    this.markService.save(this.markModel).subscribe( success => {
      alert('Marca cadastrada com sucesso');
    },
    error => {
      alert('erro')
    })
  window.location.href = "/mark";
  }

}
