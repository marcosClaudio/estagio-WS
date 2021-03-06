import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-index',
  templateUrl: './list-index.component.html',
  styleUrls: ['./list-index.component.css']
})
export class ListIndexComponent implements OnInit {

  items = [
    {title: 'Titulo 1', id: 1},
    {title: 'Titulo 2', id: 2},
    {title: 'Titulo 3', id: 3},
    {title: 'Titulo 4', id: 4},
    {title: 'Titulo 5', id: 5},
    {title: 'Titulo 6', id: 6},
    {title: 'Titulo 7', id: 7},
    {title: 'Titulo 8', id: 8},
    {title: 'Titulo 9', id: 9},
    {title: 'Titulo 10', id: 10},
    {title: 'Titulo 11', id: 11},
    {title: 'Titulo 12', id: 12},
    {title: 'Titulo 13', id: 13},
    {title: 'Titulo 14', id: 14},
    {title: 'Titulo 15', id: 15}
    ]

  constructor() { }

  ngOnInit() {
  }

}
