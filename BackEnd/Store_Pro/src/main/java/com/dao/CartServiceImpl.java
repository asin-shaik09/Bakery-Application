package com.dao;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.model.CartItem;
import com.model.Customer;

@Service()
public class CartServiceImpl implements CartService  {

	private CartItemRepository cartItemRepository;
    private CustomerRepository customerRepository;
    
    @Autowired
    public CartServiceImpl(CartItemRepository cartItemRepository, CustomerRepository customerRepository) {
        this.cartItemRepository = cartItemRepository;
        this.customerRepository = customerRepository;
    }
    
    @Override
    @Transactional
    public void addToCart(int userId, String imgSrc, String productName, double price, int quantity) {
        Customer customer = customerRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        CartItem cartItem = new CartItem();
        cartItem.setCustomer(customer);
        cartItem.setImgSrc(imgSrc);
        cartItem.setName(productName);
        cartItem.setPrice(price);
        cartItem.setQuantity(quantity);
        cartItemRepository.save(cartItem);
    }
    
    @Override
    @Transactional
    public void removeFromCart(int cartItemId) {
        cartItemRepository.deleteById(cartItemId);
    }
    
    @Override
    @Transactional(readOnly = true)
    public List<CartItem> getCartItems(int userId) {
    	Customer customer = customerRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        List<CartItem> cartItems = customer.getCartItems();
        return cartItems.stream().map(this::mapToDTO).collect(Collectors.toList());
    }
    
    private CartItem mapToDTO(CartItem cartItem) {
        CartItem cartItemDTO = new CartItem();
        cartItemDTO.setCartId(cartItem.getCartId());
        cartItemDTO.setImgSrc(cartItem.getImgSrc());
        cartItemDTO.setName(cartItem.getName());
        cartItemDTO.setPrice(cartItem.getPrice());
        cartItemDTO.setQuantity(cartItem.getQuantity());
        return cartItemDTO;
    }
    
    @Override
    @Transactional
    public void updateCartItem(CartItem cartItem) {
        // Retrieve the cart item from the database based on its ID
        CartItem existingCartItem = cartItemRepository.findById(cartItem.getCartId())
                .orElseThrow(() -> new RuntimeException("Cart item not found"));

        if (existingCartItem != null) {
            // Update the existing cart item with the new values
            existingCartItem.setImgSrc(cartItem.getImgSrc());
            existingCartItem.setName(cartItem.getName());
            existingCartItem.setPrice(cartItem.getPrice());
            existingCartItem.setQuantity(cartItem.getQuantity());
            
            // Save the updated cart item back to the database
            cartItemRepository.save(existingCartItem);
        } else {
            // Handle the case where the cart item with the given ID is not found
            throw new IllegalArgumentException("Cart item with ID " + cartItem.getCartId() + " not found");
        }
    }
    
}
