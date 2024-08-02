package com.dao;

import java.util.List;

import com.model.CartItem;

public interface CartService {

	void addToCart(int userId, String imgSrc, String productName, double price, int quantity);
    void removeFromCart(int cartItemId);
    List<CartItem> getCartItems(int userId);
	void updateCartItem(CartItem cartItem);
	
	
	
}
