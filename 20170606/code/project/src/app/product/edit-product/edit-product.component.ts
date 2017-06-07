import { ActivatedRoute, Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProductServiceService } from './../../service/product/product-service.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent implements OnInit {
  product = [];
  productModel: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) { }

  save(id,name,price,image, mark, offer) {
    this.productModel = {id:id,name:name,price:price,image:image, markId: mark, offerID: offer};
    JSON.stringify(this.productModel);
    console.log(this.productModel);
    this.productService.edit(this.productModel).subscribe( success => {
    alert('Produto editado com sucesso')},
    error => {
      alert('erro');
    })
    window.location.href = "/product";
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
