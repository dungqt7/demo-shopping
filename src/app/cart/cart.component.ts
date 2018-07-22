import { Component, OnInit } from '@angular/core';
import {Product} from '../product/product';
import {Item} from '../product/item';
import {ProductService} from '../services/product.service';
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private items:  Item[] = [];
  private total = 0;
  constructor( private productService: ProductService, public route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(values => {
     const id = values['id'];
     if (id) {
      const item: Item = {
       product: this.productService.find(id),
       quantity: 1
      };
      if (localStorage.getItem('cart') == null) {
         const cart: any = [];
         cart.push(JSON.stringify(item));
         localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        const cart: any = JSON.parse(localStorage.getItem('cart'));
        let index = -1;
        for ( let i = 0; i < cart.length; i++) {
            // tslint:disable-next-line:no-shadowed-variable
            const item: Item = JSON.parse(cart[i]);
            if (item.product.id === id) {
                 index = i;
                 break;
            }
        }
        if (index === -1) {
         cart.push(JSON.stringify(item));
         localStorage.setItem('cart', JSON.stringify(cart));
        } else {
         // tslint:disable-next-line:no-shadowed-variable
         const item: Item = JSON.parse(cart[index]);
         item.quantity += 1;
         cart[index] = JSON.stringify(item);
         localStorage.setItem('cart', JSON.stringify(cart));
        }
      }
      this.loadCart();
     } else {
      this.loadCart();
     }
    });
  }
  loadCart(): void {
    this.items = [];
    this.total = 0;
    const cart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < cart.length; i++ ) {
       const item = JSON.parse(cart[i]);
       this.items.push({
        product: item.product,
        quantity: item.quantity,
       });
       this.total += item.product.price * item.quantity;
    }
  }
  remove(id: string): void {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let index = -1;
    for ( let i = 0; i < cart.length; i++) {
        // tslint:disable-next-line:no-shadowed-variable
        const item: Item = JSON.parse(cart[i]);
        if (item.product.id === id) {
             cart.splice(i, 1);
             break;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.loadCart();
  }

}
