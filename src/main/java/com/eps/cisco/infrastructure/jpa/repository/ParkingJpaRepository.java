package com.eps.cisco.infrastructure.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.eps.cisco.domain.parkarea.ParkAreaId;
import com.eps.cisco.infrastructure.jpa.entity.ParkingEntity;

public interface ParkingJpaRepository  extends JpaRepository<ParkingEntity, Long>  {
	ParkingEntity findbyParkAreaId(ParkAreaId id);
	List<ParkingEntity> findAll();
}
