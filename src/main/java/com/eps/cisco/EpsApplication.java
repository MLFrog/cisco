package com.eps.cisco;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class EpsApplication {

	public static void main(String[] args) {
		SpringApplication.run(EpsApplication.class, args);
	}

}