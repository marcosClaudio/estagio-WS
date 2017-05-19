import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "app/app.component";
import { NgModule, Component, ModuleWithProviders } from '@angular/core';

import { ProductComponent } from './product.component';
import { VisualizeProductComponent } from './visualize-product/visualize-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';

const productRoutes: Routes = [
    { path: 'product', component: ProductComponent,
        children: [
            { path: 'list', component: ListProductComponent },
            { path: 'edit/:id', component: EditProductComponent },
            { path: 'view', component: VisualizeProductComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports:  [RouterModule]
})
export class ProductRoutingModule {}