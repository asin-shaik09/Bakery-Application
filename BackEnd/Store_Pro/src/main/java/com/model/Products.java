package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Products {

	@Id@GeneratedValue
	
	private int pId;
	private String name;
	private String author;
	private String category;
	private double price;
	private String description;
	private String imgsrc;
	private int quantity;
	
	public Products() {
	}
	

	public String getAuthor() {
		return author;
	}


	public void setAuthor(String author) {
		this.author = author;
	}


	public Products(int pId, String name, String author, String category, double price, String description,
			String imgsrc, int quantity) {
		super();
		this.pId = pId;
		this.name = name;
		this.author = author;
		this.category = category;
		this.price = price;
		this.description = description;
		this.imgsrc = imgsrc;
		this.quantity = quantity;
	}


	public int getpId() {
		return pId;
	}
	public void setpId(int pId) {
		this.pId = pId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImgsrc() {
		return imgsrc;
	}
	public void setImgsrc(String imgsrc) {
		this.imgsrc = imgsrc;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	@Override
	public String toString() {
		return "Products [pId=" + pId + ", name=" + name + ", author=" + author + ", category=" + category + ", price="
				+ price + ", description=" + description + ", imgsrc=" + imgsrc + ", quantity=" + quantity + "]";
	}
	
	
}
