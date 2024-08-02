 package com.fsd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages="com.dao")
@EntityScan(basePackages="com.model")
@SpringBootApplication(scanBasePackages="com")
public class StoreProApplication {

	public static void main(String[] args) {
		SpringApplication.run(StoreProApplication.class, args);
	}

}
