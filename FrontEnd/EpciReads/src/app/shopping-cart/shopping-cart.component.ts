import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any;
  emailId:any;
  customerId:any;
  cartValue:number = 0;
  totalCartValue: number = 0;
  cartLength:number = 0;
  gst:number=0;
  deliveryCharges:number=0;

  constructor(private cartService: CartService, private customerservice :CustomerService,
    private toastr: ToastrService,private router: Router,
  ) { }

  ngOnInit(): void {
    this.getCartItems();

  }

  getCartItems(): void {
    this.cartItems = [];
    this.emailId = localStorage.getItem('emailId');
    this.customerId = localStorage.getItem('customerId');
    this.cartService.getCartItems(this.customerId).subscribe((cartItems:any) => {
      this.cartItems = cartItems; 
      this.calculateTotal();   
      this.cartLength = this.cartItems.length; 
    });
  }

  removeFromCart(cartId:any){
    console.log("cartItemId "+ cartId);
    
    this.cartService.removeFromCart(cartId).subscribe(()=>{
      this.getCartItems();
    })
  }

  
  incrementQuantity(item: any): void {
    console.log("item : "+ item.cartId);
    console.log("p_id : "+ item.pId);
    console.log("ONly Item : "+ item);
    console.log("ONly Item : "+ item.customer);
    
    
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
    if(this.cartValue <= 30000 && this.cartValue > 0){
      this.deliveryCharges = 50;
    }else{
      this.deliveryCharges = 0;
    }
    this.totalCartValue = this.cartValue + this.deliveryCharges;
  }
  placeOrder(){
    this.toastr.success(
      "",
      "Order Placed Successfully",
      {timeOut:2000, progressBar : true, progressAnimation : 'increasing'});

      this.router.navigate(['']);
  }
}