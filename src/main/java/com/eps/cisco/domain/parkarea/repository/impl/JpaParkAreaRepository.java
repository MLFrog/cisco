//package com.eps.cisco.domain.parkarea.repository.impl;
//
//import java.sql.Timestamp;
//import java.time.Instant;
//import java.util.Optional;
//
//import org.springframework.util.Assert;
//
//import com.eps.cisco.domain.parkarea.ParkArea;
//import com.eps.cisco.domain.parkarea.ParkAreaId;
//import com.eps.cisco.domain.parkarea.ParkAreaRepository;
//import com.eps.cisco.infrastructure.jpa.entity.ParkingEntity;
//import com.eps.cisco.infrastructure.jpa.repository.ParkingJpaRepository;
//
//public class JpaParkAreaRepository implements ParkAreaRepository {
//
//	private final ParkingJpaRepository jpaRepository;
//
//	public JpaParkAreaRepository(ParkingJpaRepository repository) {
//		this.jpaRepository = repository;
//	}
//
//	@Override
//	public void save(ParkArea obj) {
//		Assert.notNull(obj, "주차 엔티티는 Null일 수 없습니다.");
//
//		this.jpaRepository.save(convert(obj));
//	}
//
//	@Override
//	public ParkingEntity findOnebyId(ParkAreaId id) {
//		return this.jpaRepository.findbyParkAreaId(id);
//	}
//
//	private ParkingEntity convert(ParkArea data) {
//		ParkingEntity obj = new ParkingEntity();
//
//		obj.setRowId(Optional.ofNullable(data.getId()).orElse(null));
//		obj.setParkingId(Optional.ofNullable(data.getParkAreaId().toString()).orElse(null));
//		obj.setSensorId(Optional.ofNullable(data.getSensorId().getValue()).orElse(0l));
//		obj.setParkedType(Optional.ofNullable(data.getParkedType().getCode()).orElse(null));
//		obj.setIsParked(Optional.ofNullable(data.getIsParked()).orElse(false));
//		obj.setIsReserved(Optional.ofNullable(data.getIsReserved()).orElse(false));
//		obj.setCreatedAt(Optional.ofNullable(Timestamp.from(data.getCreatedAt())).orElse(Timestamp.from(Instant.now())));
//		obj.setUpdatedAt(Timestamp.from(Instant.now()));
//
//		return obj;
//	}
//}
