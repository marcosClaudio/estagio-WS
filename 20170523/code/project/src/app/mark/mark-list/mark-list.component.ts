import { Component, OnInit } from '@angular/core';

import { MarkServiceService } from '../../service/mark/mark-service.service';

@Component({
  selector: 'app-mark-list',
  templateUrl: './mark-list.component.html'
})
export class MarkListComponent implements OnInit {
  markList: any;

  constructor(
    private markServiceService: MarkServiceService
  ) { }

    delete(id) {
    this.markServiceService.deleteById(id).subscribe( success => {
    alert('Deletado');
    },
    error => {
      alert('Erro');
    })
  }

  ngOnInit() {
       this.markServiceService.list().subscribe( object => {
      this.markList = object;
       },
    error => {
      alert('error');
    })
  }

}
