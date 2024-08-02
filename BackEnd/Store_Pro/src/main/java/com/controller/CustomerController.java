package com.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CustomerDao;
import com.model.Customer;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CustomerController {

	@Autowired
	CustomerDao customerDao;
	
	@GetMapping("getAllCustomer")
	public List<Customer> getAllCustomers(){
		return customerDao.getAllCustomer();
	}
	
	@GetMapping("getCustomerByEmail/{emailId}")
	public Customer getCustomerByEmail(@PathVariable("emailId") String emailId){
		return customerDao.getCustomerByEmail(emailId);
	}
	
	@GetMapping("getCustomerById/{cId}")
	public Customer getCustomerById(@PathVariable("cId") int cId){
		return customerDao.getCustomerById(cId);
	}
	
	@PostMapping("registerCustomer")
	public Customer registerCustomer(@RequestBody Customer customer){
		return customerDao.registerCustomer(customer);
	}
	
	@GetMapping("customerLogin/{emailId}/{password}")
	public Customer customerLogin(@PathVariable("emailId") String emailId, @PathVariable("password") String password){
		return customerDao.customerLogin(emailId, password);
	}

	@GetMapping("sendOtpToEmail/{emailId}")
	public String sendOtpToEmail(@PathVariable("emailId") String emailId){		
		return customerDao.sendOtpToEmail(emailId);
	}
	
	@PutMapping("updateCustomerPassword")
	public Customer updateCustomerPassword(@RequestBody Customer customer){
		return customerDao.updateCustomerPassword(customer);
	}
	
}
