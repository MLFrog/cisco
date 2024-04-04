package com.eps.cisco.domain.parkarea.repository.impl;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.util.Assert;

import com.eps.cisco.domain.parkarea.ParkArea;
import com.eps.cisco.domain.parkarea.ParkAreaId;
import com.eps.cisco.domain.parkarea.ParkAreaRepository;
import com.eps.cisco.domain.parkarea.convert.ParkAreaConverter;
import com.eps.cisco.infrastructure.jpa.entity.ParkingEntity;
import com.eps.cisco.infrastructure.jpa.repository.ParkingJpaRepository;

public class JpaParkAreaRepository implements ParkAreaRepository {
	
	private final ParkingJpaRepository jpaRepository;
	private final ParkAreaConverter<ParkingEntity> converter;
	
	public JpaParkAreaRepository(ParkingJpaRepository repository, ParkAreaConverter<ParkingEntity> converter) {
		Assert.notNull(repository, "Repository는 null일 수 없습니다.");
		Assert.notNull(converter, "Converter는 null일 수 없습니다.");
		this.converter = converter;
		this.jpaRepository = repository;
	}

	@Override
	public void save(ParkArea obj) {
		Assert.notNull(obj, "주차 엔티티는 Null일 수 없습니다.");
		
		this.jpaRepository.save(convert(obj));
	}

	@Override
	public ParkArea findOnebyId(ParkAreaId id) {
		return Optional.ofNullable(this.jpaRepository.findByParkingId(id.toString()))
				.map(this.converter::convert)
				.orElse(null);
	}
	
	@Override
	public List<ParkArea> findAll() {
		return Optional.ofNullable(this.jpaRepository.findAllByIsReservedIs(false))
				.map(parkAreaList -> parkAreaList.stream()
						.map(this.converter::convert)
						.collect(Collectors.toList()))
				.orElse(Collections.emptyList());
	}

	private ParkingEntity convert(ParkArea data) {
		ParkingEntity obj = new ParkingEntity();
		
		obj.setRowId(Optional.ofNullable(data.getId()).orElse(null));
		obj.setParkingId(Optional.ofNullable(data.getParkAreaId().toString()).orElse(null));
		obj.setSensorId(Optional.ofNullable(data.getSensorId().getValue()).orElse(0l));
		obj.setParkedType(Optional.ofNullable(data.getParkedType().getCode()).orElse(null));
		obj.setIsParked(Optional.ofNullable(data.getIsParked()).orElse(false));
		obj.setIsReserved(Optional.ofNullable(data.getIsReserved()).orElse(false));
		obj.setCreatedAt(Optional.ofNullable(Timestamp.from(data.getCreatedAt())).orElse(Timestamp.from(Instant.now())));
		obj.setUpdatedAt(Timestamp.from(Instant.now()));
		
		return obj;
	}
}
