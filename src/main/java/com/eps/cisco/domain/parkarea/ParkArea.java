package com.eps.cisco.domain.parkarea;

import java.time.Instant;

import com.eps.cisco.domain.common.DomainEntity;
import com.eps.cisco.domain.parkarea.type.ParkedType;
import com.eps.cisco.domain.sensor.SensorId;

import lombok.Data;

@Data
@DomainEntity
public class ParkArea {
	private Integer id;
	private ParkAreaId parkareaId;
	private SensorId sensorId;
	private ParkedType parkedType;
	private Boolean isParked;
	private Boolean isReserved;
	private Instant createdAt;
	private Instant updatedAt;
	
	
}
