package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CartService;
import com.model.CartItem;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CartController {

	private CartService cartService;
	
	@Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }
	
	@PostMapping("addToCart/{customerId}")
    public ResponseEntity<Void> addToCart(@RequestBody CartItem cartItem, @PathVariable("customerId") int customerId) {
		cartService.addToCart(customerId, cartItem.getImgSrc(), cartItem.getName(), cartItem.getPrice(), cartItem.getQuantity());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
	
	@DeleteMapping("removeFromCart/{cartItemId}")
    public ResponseEntity<Void> removeFromCart(@PathVariable int cartItemId) {
        cartService.removeFromCart(cartItemId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("getCartItems/{userId}")
    public List<CartItem> getCartItems(@PathVariable int userId) {
        List<CartItem> cartItems = cartService.getCartItems(userId);
        return cartItems;
    }
    
    @PutMapping("updateCartItem/{cartItemId}")
    public ResponseEntity<Void> updateCartItem(@PathVariable int cartItemId, @RequestBody CartItem cartItem) {
        if (cartItemId != cartItem.getCartId()) {
            return ResponseEntity.badRequest().build();
        }
        cartService.updateCartItem(cartItem);
        return ResponseEntity.ok().build();
    }
    
   
}
