import { ActivatedRoute, Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProductServiceService } from './../../service/product/product-service.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product = [];
  productModel: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) {
    this.productModel = new Product();
   }

  save(id,name,price,image) {
    this.productModel = [{id:id,name:name,price:price,image:image}];
    JSON.stringify(this.productModel);
    console.log(this.productModel);
    this.productService.save(this.productModel).subscribe( success => {
    alert('foi')},
    error => {
      alert('erro');
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.productService.getById(id).subscribe( product => {
      this.product = product;
    },
     error => {
      alert('error: ');
      });
    });
  }

}
