import { Component, OnInit } from '@angular/core';

import { ProductServiceService } from './../../service/product/product-service.service';
import { Product } from './../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent implements OnInit {
  productModel: Product;

  constructor(
    private productService: ProductServiceService
  ) { }

save(name, price, images) {
    this.productModel = [name , price, images];
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
