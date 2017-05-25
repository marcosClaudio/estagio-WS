import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panphlet-list',
  templateUrl: './panphlet-list.component.html'
})
export class PanphletListComponent implements OnInit {
  panphletList = [
    { dataInicio: '12/05/17', dataFim: '12/06/17' },
    { dataInicio: '14/06/17', dataFim: '15/07/17' },
    { dataInicio: '25/07/17', dataFim: '27/08/17' },
    { dataInicio: '31/08/17', dataFim: '20/09/17' },
    { dataInicio: '05/09/17', dataFim: '02/10/17' },
    { dataInicio: '07/10/17', dataFim: '09/11/17' },
    { dataInicio: '21/11/17', dataFim: '15/12/17' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
