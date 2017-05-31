import { Component, OnInit } from '@angular/core';

import { MarkServiceService } from './../../service/mark/mark-service.service';
import { Mark } from './../mark.model';

@Component({
  selector: 'app-mark-add',
  templateUrl: './mark-add.component.html'
})
export class MarkAddComponent implements OnInit {
  markModel: Mark

  constructor(
    private markService: MarkServiceService
  ) { }

  ngOnInit() {
  }

  save(id,name, logo) {
    this.markModel = [id,name, logo];
    JSON.stringify(this.markModel);
    console.log(this.markModel);
    this.markService.save(this.markModel).subscribe( success => {
      alert('foi')
    },
    error => {
      alert('erro')
    })
  }

}
