package com.utils;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;



@Component
public class EmailUtil {

	@Autowired
	private JavaMailSender javaMailSender;
	
	public void sendOtpEmail(String email, String name, String otp) throws MessagingException {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("sheshank920@gmail.com");
		message.setTo(email);
		message.setSubject("OTP for Reset the Password");
		message.setText("Dear" + name + 
				"Please use the below One Time Password (OTP) to reset your password."+

				"One Time Password (OTP):  "+ otp);
		javaMailSender.send(message);		
	}
	
	public void sendEmail(String email, String subject, String body) throws MessagingException {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("sheshank920@gmail.com");
		message.setTo(email);
		message.setSubject(subject);
		message.setText(body);
		javaMailSender.send(message);		
		System.out.println("Mail successfully!");
	}
	
}
