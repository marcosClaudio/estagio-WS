import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { ProductServiceService } from '../../service/product/product-service.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public productList: [any];
  
  constructor(
    private productServiceService: ProductServiceService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
     this.productServiceService.list().subscribe( object => {
      this.productList = object;
       },
    error => {
      alert('error');
    })
  }

}
