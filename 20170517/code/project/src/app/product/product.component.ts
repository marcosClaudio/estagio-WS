import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  marks = [
    {name: null, id: null},
    {name: 'Nestle', id: 1},
    {name: 'Coca Cola', id: 2},
    {name: 'Pepsi', id: 3},
    {name: 'Ouro do Sul', id: 4},
    {name: 'Rosa Branca', id: 5},
    {name: 'Blue vile', id: 6}
  ];

  constructor() { }

  ngOnInit() {
  }

}
