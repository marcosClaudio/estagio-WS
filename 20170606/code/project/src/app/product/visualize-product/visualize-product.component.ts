import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProductServiceService } from '../../service/product/product-service.service';

@Component({
  selector: 'app-visualize-product',
  templateUrl: './visualize-product.component.html'
})
export class VisualizeProductComponent implements OnInit {
  product = [];
  ProductImage1 = [];
  ProductImage2 = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) { }

  ngOnInit() {
  this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.productService.getById(id).subscribe( product => {
      console.log(product.title),
      this.product = product;
      this.ProductImage1 = product.image[0];
      this.ProductImage2 = product.image[1];
    },
     error => {
      alert('error: ');
      });
    });
  }
}
