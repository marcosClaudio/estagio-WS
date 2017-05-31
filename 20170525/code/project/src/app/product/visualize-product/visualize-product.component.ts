import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProductServiceService } from '../../service/product/product-service.service';

@Component({
  selector: 'app-visualize-product',
  templateUrl: './visualize-product.component.html',
  styleUrls: ['./visualize-product.component.css']
})
export class VisualizeProductComponent implements OnInit {
  product = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService
  ) { }

  ngOnInit() {
  this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.productService.getById(id).subscribe( product => {
      console.log(product.image),
      this.product = product;
    },
     error => {
      alert('error: ');
      });
    });
  }
}
