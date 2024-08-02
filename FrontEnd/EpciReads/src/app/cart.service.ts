import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  customerId:any;

  constructor(private http: HttpClient) {  }

  getCartItems(c_id:any){
    return this.http.get('http://localhost:8090/getCartItems/'+c_id);
  }

  addToCart(cartItem:any) {
    this.customerId = localStorage.getItem('customerId');
    return this.http.post('http://localhost:8090/addToCart/'+this.customerId, cartItem);
  }

  removeFromCart(cartId: number) {
    return this.http.delete(`http://localhost:8090/removeFromCart/${cartId}`);
  }

  updateCartItem(item: any) {
    return this.http.put(`http://localhost:8090/updateCartItem/${item.cartId}`, item);
  }

}
