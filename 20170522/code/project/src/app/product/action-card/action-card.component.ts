import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.css']
})
export class ActionCardComponent implements OnInit {

  constructor(
    public dialogRefe: MdDialogRef<ActionCardComponent>
  ) { }

  ngOnInit() {
  }

}
