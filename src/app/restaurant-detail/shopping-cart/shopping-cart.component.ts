import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from './shopping-cart.service'
import { CartItem } from './cart-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  clear() {
    this.shoppingCartService.clear();
  }

  removeItem(id: CartItem) {
    this.shoppingCartService.removeItem(id);
  }

  addItem(id: any) {
    this.shoppingCartService.addItem(id);
  }

  total(): number {
    return this.shoppingCartService.total();
  }

}
