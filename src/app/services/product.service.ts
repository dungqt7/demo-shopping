import { Injectable } from '@angular/core';
import {Products} from '../product/list-product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product = Products;
  constructor() {
  }
  getAll() {
    return this.product;
  }
  find(id: string) {
    return this.product[this.getSelectedIndex(id)];
  }
  getSelectedIndex(id: string) {
    // tslint:disable-next-line:prefer-const
    for ( let i = 0; i < this.product.length; i++ ) {
      if ( this.product[i].id === id) {
        return i;
      }
    }
    return -1;
  }
}
