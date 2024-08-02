package com.dao;

import java.util.Collections;
import java.util.List;

import javax.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.model.Customer;

import com.utils.EmailUtil;
import com.utils.OtpUtil;

@Service
public class CustomerDao {

	@Autowired
	CustomerRepository customerRepository;
	
	@Autowired
	private OtpUtil otpUtil;
	
	@Autowired
	private EmailUtil emailUtil;

	public List<Customer> getAllCustomer() {
		return customerRepository.findAll();
	}

	public Customer registerCustomer(Customer customer) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String encryptedPassword = passwordEncoder.encode(customer.getPassword());
		customer.setPassword(encryptedPassword);
		
		 Customer savedCustomer = customerRepository.save(customer);

	        // Send a welcome email
	        String subject = "Successfully Registered!";
	        String body = "Welcome to EpicReads, " + customer.getFullName() + "!";
	        try {
	            emailUtil.sendEmail(customer.getEmailId(), subject, body);
	        } catch (Exception e) {
	            e.printStackTrace();
	        }

	        return savedCustomer;
	}

	public Customer customerLogin(String emailId, String password) {
		
		Customer customer = customerRepository.findByEmail(emailId);
		
		if(customer != null){
			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			if (passwordEncoder.matches(password, customer.getPassword())) {
	            
	            return customer;
	        }
		}
		
		return null;
	}

	public String sendOtpToEmail(String emailId) {
		Customer customer = customerRepository.findByEmail(emailId);
		String otp = otpUtil.generateOtp();
		if(customer != null){	
			try {
				emailUtil.sendOtpEmail(customer.getEmailId(), customer.getFullName() ,otp);
			} catch (MessagingException e) {
				throw new RuntimeException("Unable to Send OTP");
			}
		}else{
			return "Customer Not Found!!!...";
		}
		return otp;
	}

	public Customer getCustomerByEmail(String emailId) {
		return customerRepository.findByEmail(emailId);
	}
	
	public Customer getCustomerById(int cId) {
		return customerRepository.findById(cId).orElse(null);
	}

	public Customer updateCustomerPassword(Customer customer) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String encryptedPassword = passwordEncoder.encode(customer.getPassword());
		customer.setPassword(encryptedPassword);
		
		return customerRepository.save(customer);
	}
}
