package com.eps.cisco.domain.parkarea;

import java.time.Instant;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.PriorityQueue;

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
	 * 
	 * @param repository
	 */
	public void save(ParkAreaRepository repository) {
		Assert.notNull(this.parkAreaId, "주차장 ID 값은 null일 수 없습니다.");

		repository.save(this);
	}

	/**
	 * Id 값으로 데이터 fetch
	 * 
	 * @param repository
	 * @return
	 */
	public void fetchById(ParkAreaRepository repository) {
		Assert.notNull(this.parkAreaId, "주차장 ID 값은 null일 수 없습니다.");

		ParkArea obj = repository.findOnebyId(this.parkAreaId);
		this.id = Optional.ofNullable(obj.getId()).orElse(null);
		this.parkAreaId = Optional.ofNullable(ParkAreaId.of(obj.getParkAreaId())).orElse(null);
		this.sensorId = Optional.ofNullable(obj.getSensorId()).orElse(null);
		this.parkedType = Optional.ofNullable(obj.getParkedType()).orElse(null);
		this.isParked = Optional.ofNullable(obj.getIsParked()).orElse(false);

		this.isReserved = Optional.ofNullable(obj.getIsReserved()).orElse(false);
		this.createdAt = Optional.ofNullable(obj.getCreatedAt()).orElse(Instant.now());
		this.updatedAt = Optional.ofNullable(obj.getUpdatedAt()).orElse(Instant.now());
	}

	/**
	 * 주차 예약을 위해 제일 가까운 주차칸 1개 얻기
	 * 
	 * @param repository
	 */
	public ParkArea getReservedParkArea(ParkAreaRepository repository) {
		List<ParkArea> parkAreas = repository.findAll();

		// 우선순위 큐 생성
		PriorityQueue<ParkArea> priorityQueue = new PriorityQueue<>(Comparator.comparingLong(ParkArea::getId));

		// 리스트의 요소를 우선순위 큐에 추가
		priorityQueue.addAll(parkAreas);

		return priorityQueue.poll();
	}

	/**
	 * 주차 예약
	 * 
	 * @param repository
	 * @return
	 */
	public ParkArea reservedParkArea(ParkAreaRepository repository) {
		Assert.notNull(this.parkAreaId, "주차장 ID 값은 null일 수 없습니다.");

		this.isReserved = true;

		repository.save(this);

		return this;
	}

	/**
	 * 주차 구역 사용 시작
	 * 
	 * @param repository
	 * @return
	 */
	public ParkArea UsedParking(ParkAreaRepository repository) {
		Assert.notNull(this.parkAreaId, "주차장 ID값은 null일 수 없습니다.");

		// TODO: 센서 데이터를 가져와서 비교한 다음 데이터를 변경해야 하나, 일단은 개발
		this.isParked = true;

		repository.save(this);

		return this;
	}

	/**
	 * 주차 구역 사용 완료(예약도 같이 제거됨)
	 * 
	 * @param repository
	 * @return
	 */
	public ParkArea finishUsedParking(ParkAreaRepository repository) {
		Assert.notNull(this.parkAreaId, "주차장 ID값은 null일 수 없습니다.");

		// TODO: 센서 데이터를 가져와서 비교한 다음 데이터를 변경해야 하나, 일단은 개발
		this.isParked = false;
		this.isReserved = false;

		repository.save(this);

		return this;
	}

	// 정렬을 위한 id데이터 get
	public String getParkAreaId() {
		return this.parkAreaId.toString();
	}
}
