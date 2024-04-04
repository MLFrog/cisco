package com.eps.cisco.domain.parkarea;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

import org.springframework.util.Assert;

import com.eps.cisco.domain.common.DomainEntity;
import com.eps.cisco.domain.parkarea.type.ParkedType;
import com.eps.cisco.domain.sensor.SensorId;
import com.eps.cisco.infrastructure.jpa.entity.ParkingEntity;

import lombok.Data;

@Data
@DomainEntity
public class ParkArea {
	private Long id;
	private ParkAreaId parkAreaId;
	private SensorId sensorId;
	private ParkedType parkedType;
	private Boolean isParked;
	private Boolean isReserved;
	private Instant createdAt;
	private Instant updatedAt;
	
	/**
	 * 저장
	 * @param repository
	 */
	public void save(ParkAreaRepository repository) {
		Assert.notNull(this.parkAreaId, "주차장 ID 값은 null일 수 없습니다.");
		
		repository.save(this);
	}
	
	/**
	 * Id 값으로 데이터 fetch
	 * @param repository
	 * @return
	 */
	public void fetchById(ParkAreaRepository repository) {
		Assert.notNull(this.parkAreaId, "주차장 ID 값은 null일 수 없습니다.");
		
		ParkingEntity obj = repository.findOnebyId(this.parkAreaId);
		this.id = Optional.ofNullable(obj.getRowId()).orElse(null);
		this.parkAreaId = Optional.ofNullable(ParkAreaId.of(obj.getParkingId())).orElse(null);
		this.sensorId = Optional.ofNullable(SensorId.of(obj.getSensorId())).orElse(null);
		this.parkedType = Optional.ofNullable(ParkedType.valueOfCode(obj.getParkedType())).orElse(null);
		this.isParked = Optional.ofNullable(obj.getIsParked()).orElse(false);
		this.isReserved = Optional.ofNullable(obj.getIsReserved()).orElse(false);
		this.createdAt = Optional.ofNullable(obj.getCreatedAt().toInstant()).orElse(Instant.now());
		this.updatedAt = Optional.ofNullable(obj.getUpdatedAt().toInstant()).orElse(Instant.now());
	}
	
	/**
	 * 주차 예약
	 * @param repository
	 */
	public void reservedParkArea(ParkAreaRepository repository) {
		Assert.notNull(this.parkAreaId, "주차장 ID 값은 null일 수 없습니다.");
		
		List<ParkArea> parkAreas = repository.findAll();
	}
}
