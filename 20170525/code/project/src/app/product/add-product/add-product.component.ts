import { Component, OnInit } from '@angular/core';

import { ProductServiceService } from './../../service/product/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productModel = [];

  constructor(
    private productService: ProductServiceService
  ) { }

  save(name, price) {
    this.productModel = [name , price];
    JSON.stringify(this.productModel);
    console.log(this.productModel);
    this.productService.save(this.productModel).subscribe( success => {
    alert('foi')},
    error => {
      alert('erro');
    });
  }

  ngOnInit() {
  }

}
