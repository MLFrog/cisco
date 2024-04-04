package com.eps.cisco.domain.parkarea.convert.impl;

import java.time.Instant;
import java.util.Optional;

import com.eps.cisco.domain.parkarea.ParkArea;
import com.eps.cisco.domain.parkarea.ParkAreaFactory;
import com.eps.cisco.domain.parkarea.ParkAreaId;
import com.eps.cisco.domain.parkarea.convert.ParkAreaConverter;
import com.eps.cisco.domain.parkarea.type.ParkedType;
import com.eps.cisco.domain.sensor.SensorId;
import com.eps.cisco.infrastructure.jpa.entity.ParkingEntity;

public class JpaParkAreaConverter implements ParkAreaConverter<ParkingEntity> {
	
	private final ParkAreaFactory factory = new ParkAreaFactory();

	@Override
	public ParkArea convert(ParkingEntity a) {
		ParkArea obj = this.factory.getInstance();
		
		obj.setId(a.getRowId());
		obj.setParkAreaId(Optional.ofNullable(ParkAreaId.of(a.getParkingId())).orElse(null));
		obj.setSensorId(Optional.ofNullable(SensorId.of(a.getSensorId())).orElse(null));
		obj.setParkedType(Optional.ofNullable(ParkedType.valueOfCode(a.getParkedType())).orElse(null));
		obj.setIsParked(Optional.ofNullable(a.getIsParked()).orElse(false));
		obj.setIsReserved(Optional.ofNullable(a.getIsReserved()).orElse(false));
		obj.setCreatedAt(Optional.ofNullable(a.getCreatedAt().toInstant()).orElse(Instant.now()));
		obj.setUpdatedAt(Instant.now());
		
		return obj;
	}
	
}
