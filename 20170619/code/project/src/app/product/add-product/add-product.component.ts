import { Component, OnInit } from '@angular/core';

import { ProductServiceService } from './../../service/product/product-service.service';
import { Product } from './../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent implements OnInit {
  productModel: any;

  constructor(
    private productService: ProductServiceService
  ) { }

save(id,name, price, image1, image2, mark, offer) {
    this.productModel = {id:id, name:name, price:price, image:[image1, image2], markID: mark, offerID: offer};
    JSON.stringify(this.productModel);
    console.log(this.productModel);
    this.productService.save(this.productModel).subscribe( success => {
    alert('Produto cadastrado com sucesso')},
    error => {
      alert('Erro, produto ja cadastrado ou erro no banco de dados');
    })
    window.location.href = "/product";
  }

  ngOnInit() {
  }

}
