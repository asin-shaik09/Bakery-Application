package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Products;

@Service
public class ProductDao {
	
	@Autowired
	ProductRepository productrepository ;

	public List<Products> getAllproducts() {
		return productrepository.findAll();
	}

	public List<Products> getProductsByCategory(String category) {
		return productrepository.findByCategory(category);
	}

	public List<Products> getProductsByName(String name) {
		return productrepository.findByName(name);
	}

	public Products addProduct(Products products) {
		return productrepository.save(products);
	}

	public void deleteProduct(int pId) {
		productrepository.deleteById(pId);
	}

//	public Products updateProduct(Products products) {
//		return productrepository.save(products);
//	}

}
