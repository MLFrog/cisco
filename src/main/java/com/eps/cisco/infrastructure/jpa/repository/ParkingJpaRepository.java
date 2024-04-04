package com.eps.cisco.infrastructure.jpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eps.cisco.infrastructure.jpa.entity.ParkingEntity;

public interface ParkingJpaRepository extends JpaRepository<ParkingEntity, Long>  {
	ParkingEntity findByParkingId(String id);
	
    List<ParkingEntity> findAll();
}
