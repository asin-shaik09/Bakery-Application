import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any;
  emailId: any;
  customerId: any;
  cartValue: number = 0;
  totalCartValue: number = 0;
  cartLength: number = 0;
  gst: number = 0;
  deliveryCharges: number = 0;

  constructor(
    private cartService: CartService,
    private toastr: ToastrService,
    private router: Router // Inject Router here
  ) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.cartItems = [];
    this.emailId = localStorage.getItem('emailId');
    this.customerId = localStorage.getItem('customerId');
    this.cartService.getCartItems(this.customerId).subscribe((cartItems: any) => {
      this.cartItems = cartItems;
      this.calculateTotal();
      this.cartLength = this.cartItems.length;
    });
  }

  removeFromCart(cartId: any): void {
    this.cartService.removeFromCart(cartId).subscribe(() => {
      this.getCartItems();
    });
  }

  incrementQuantity(item: any): void {
    item.quantity++;
    this.cartService.updateCartItem(item).subscribe(() => {
      this.getCartItems();
    });
  }

  decrementQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.updateCartItem(item).subscribe(() => {
        this.getCartItems();
      });
    }
  }

  calculateTotal(): void {
    this.cartValue = 0;
    for (const item of this.cartItems) {
      this.cartValue += item.quantity * item.price;
    }
    this.deliveryCharges = this.cartValue <= 30000 && this.cartValue > 0 ? 50 : 0;
    this.totalCartValue = this.cartValue + this.deliveryCharges;
  }

  placeOrder(): void {
    if (this.cartItems.length === 0) {
      this.toastr.info('Your cart is empty. Please add items to proceed.', 'Empty Cart');
    } else {
      this.router.navigate(['/payments']); // Navigate to payments
    }
  }
}