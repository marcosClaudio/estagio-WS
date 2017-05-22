import { Route } from '@angular/router';

import { ProductComponent } from './product.component';
import { VisualizeProductComponent } from './visualize-product/visualize-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';

export const PRODUCT_ROUTES: Route[] = [
  { path: 'product', component: ListProductComponent,
    children: [
      { path: 'edit/:id', component: EditProductComponent },
      { path: 'view', component: VisualizeProductComponent },
      { path: 'add-product', component: AddProductComponent }
    ]
  }
];