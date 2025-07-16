import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart';
import { CartItem } from '../shared/models/CartItem';
import { FoodService } from '../services/food/food';


@Component({
  selector: 'app-cart-page',
  standalone: false,
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css'
})
export class CartPage implements OnInit{

  cart!:Cart;

  constructor(private cartService:CartService){
   
    this.setCart();
    
  }

  setCart(){

    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInStrin: string){
    const quantity = parseInt(quantityInStrin);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  ngOnInit(): void {
    
  }
}
