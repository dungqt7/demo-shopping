import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';
const appRoutes: Routes = [
 { path: 'products', component: ProductComponent },
 { path: 'cart/:id', component: CartComponent },
 { path: 'cart', component: CartComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
