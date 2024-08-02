package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class CartItem {

	@Id@GeneratedValue
	private int cartId;
	private String imgSrc;
	private String name;
    private double price;
    private int quantity;
    
    
    @ManyToOne
    @JoinColumn(name="cId")
    
    private Customer customer;

	public CartItem() {
	}

	public CartItem(int cartId, String imgSrc, String name, double price, int quantity, Customer customer) {
		this.cartId = cartId;
		this.imgSrc = imgSrc;
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		this.customer = customer;
	}

	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}

	public String getImgSrc() {
		return imgSrc;
	}

	public void setImgSrc(String imgSrc) {
		this.imgSrc = imgSrc;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	@Override
	public String toString() {
		return "CartItem [cartId=" + cartId + ", imgSrc=" + imgSrc + ", name=" + name + ", price=" + price
				+ ", quantity=" + quantity + ", customer=" + customer + "]";
	}
	
	
}
