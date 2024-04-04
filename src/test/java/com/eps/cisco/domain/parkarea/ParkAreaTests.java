package com.eps.cisco.domain.parkarea;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.eps.cisco.domain.parkarea.convert.ParkAreaConverter;
import com.eps.cisco.domain.parkarea.convert.impl.JpaParkAreaConverter;
import com.eps.cisco.domain.parkarea.repository.impl.JpaParkAreaRepository;
import com.eps.cisco.infrastructure.jpa.entity.ParkingEntity;
import com.eps.cisco.infrastructure.jpa.repository.ParkingJpaRepository;

import jakarta.annotation.PostConstruct;

@SpringBootTest
public class ParkAreaTests {
	
	private ParkAreaRepository repository;
	
	private ParkAreaConverter<ParkingEntity> converter;
	
	private ParkAreaFactory factory;
	
	@Autowired
	private ParkingJpaRepository jpaRepository;
	
	@PostConstruct
	public void init() {
		this.factory = new ParkAreaFactory();
		this.converter = new JpaParkAreaConverter();
		this.repository = new JpaParkAreaRepository(this.jpaRepository, this.converter);
	}
	
	@Test
	public void 테스트() {
		ParkArea tmp = this.factory.getInstance();
		
		tmp.getReservedParkArea(this.repository);
	}
}
