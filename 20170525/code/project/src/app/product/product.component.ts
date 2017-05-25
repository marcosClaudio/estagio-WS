import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef} from '@angular/material';

import { ListProductComponent } from './list-product/list-product.component';
import { ActionCardComponent } from './action-card/action-card.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: String;
  naosei: any;

  constructor(
    public dialog: MdDialog
  ) { }

  openDialog() {
    let dialogRef = this.dialog.open(ListProductComponent, { 
    width: '1000px',
    height: '600px',
    position: 'center'
    });
}

  ngOnInit() {
    
   }
}
