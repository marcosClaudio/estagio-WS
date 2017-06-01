import { Component, OnInit } from '@angular/core';

import { PanphletService } from './../../service/panphlet/panphlet.service';

@Component({
  selector: 'app-panphlet-list',
  templateUrl: './panphlet-list.component.html'
})
export class PanphletListComponent implements OnInit {
  panphletList = [];

  constructor(
    private panphletService: PanphletService
  ) { }

   delete(id) {
    this.panphletService.deleteById(id).subscribe( success => {
    alert('Deletado');
    },
    error => {
      alert('Erro');
    })
    location.reload();
  }

  ngOnInit() {
    this.panphletService.list().subscribe( panphlet => {
      this.panphletList = panphlet;
    },
    error => {
      alert("error")
    });
  }
}
