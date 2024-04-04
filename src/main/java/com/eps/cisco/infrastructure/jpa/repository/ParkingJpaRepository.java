package com.eps.cisco.infrastructure.jpa.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.eps.cisco.domain.parkarea.ParkAreaId;
import com.eps.cisco.infrastructure.jpa.entity.ParkingEntity;

public interface ParkingJpaRepository  extends JpaRepository<ParkingEntity, Long>  {
	ParkingEntity findbyParkAreaId(ParkAreaId id);
	
	@Query("SELECT b FROM parking b WHERE b.isReserved = false")
	List<ParkingEntity> findAllNotReserved();
}
