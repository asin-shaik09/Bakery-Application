import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  customerId:any;

  
  private cartItemCountSource = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCountSource.asObservable();

  private apiUrl = 'http://localhost:4200';


  constructor(private http: HttpClient) {  }


  updateCartItemCount(count: number): void {
    this.cartItemCountSource.next(count);
  }

 
  getCartItems(c_id:any){
    return this.http.get('http://localhost:8000/getCartItems/'+c_id);
  }

  addToCart(cartItem:any) {
    this.customerId = localStorage.getItem('customerId');
    return this.http.post('http://localhost:8000/addToCart/'+this.customerId, cartItem);
  }

  removeFromCart(cartId: number) {
    return this.http.delete(`http://localhost:8000/removeFromCart/${cartId}`);
  }

  updateCartItem(item: any) {
    return this.http.put(`http://localhost:8000/updateCartItem/${item.cartId}`, item);
  }

}
