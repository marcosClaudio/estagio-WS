import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  options = [
    {name: 'A', id: 1},
    {name: 'B', id: 2},
    {name: 'c', id: 3}
    ]

  constructor() { }

  ngOnInit() {
  }

}
