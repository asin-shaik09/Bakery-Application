package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.ProductDao;
import com.model.Products;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ProductController {

	@Autowired 
	ProductDao productdao;
	
	@GetMapping("getAllProducts")
	public List<Products> getAllProducts(){
		return productdao.getAllproducts();
	}
	
	@GetMapping("getProductsByCategory/{category}")
	public List<Products> getProductsByCategory(@PathVariable("category") String category){
		return productdao.getProductsByCategory(category);
	}
	
	@GetMapping("getProductsByName/{name}")
	public List<Products> getProductsByName(@PathVariable("name") String name){
		return productdao.getProductsByName(name);
	}
	
	@PostMapping("addProduct")
	public Products addProduct(@RequestBody Products products){
		return productdao.addProduct(products);
	}
	
	@PutMapping("updateProduct")
	public Products updateProduct(@RequestBody Products products){
		return productdao.addProduct(products);
	}
	
	@DeleteMapping("deleteProductById/{pId}")
	public String deleteProductById(@PathVariable("pId") int pId){
		productdao.deleteProduct(pId);
		return "Product Deleted Successfully!!!";
	}
}
