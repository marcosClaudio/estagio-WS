import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-grid',
  templateUrl: './tab-grid.component.html',
  styleUrls: ['./tab-grid.component.css']
})
export class TabGridComponent implements OnInit {
  item = [
    {
    name: "Folder",
    desc: "archives"
  },
  {
    name:"Anything",
    desc: "none"
  }
  ];


  constructor() { }

  ngOnInit() {
  }

}
