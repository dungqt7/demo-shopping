import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import { Product } from './product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: Product[];
  constructor( private productService: ProductService ) { }

  ngOnInit() {
    this.product = this.productService.getAll();
  }

}
