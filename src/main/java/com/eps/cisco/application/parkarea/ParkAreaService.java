package com.eps.cisco.application.parkarea;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import com.eps.cisco.domain.parkarea.ParkArea;
import com.eps.cisco.domain.parkarea.ParkAreaFactory;
import com.eps.cisco.domain.parkarea.ParkAreaId;
import com.eps.cisco.domain.parkarea.ParkAreaRepository;
import com.eps.cisco.domain.parkarea.convert.ParkAreaConverter;
import com.eps.cisco.domain.parkarea.convert.impl.JpaParkAreaConverter;
import com.eps.cisco.domain.parkarea.repository.impl.JpaParkAreaRepository;
import com.eps.cisco.infrastructure.jpa.entity.ParkingEntity;
import com.eps.cisco.infrastructure.jpa.repository.ParkingJpaRepository;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ParkAreaService {
	
	private ParkAreaFactory factory;
	
	private ParkAreaRepository repository;
	
	private ParkAreaConverter<ParkingEntity> converter;
	
	private final ParkingJpaRepository jpaRepository;
	
	@PostConstruct
	public void init() {
		this.factory = new ParkAreaFactory();
		this.converter = new JpaParkAreaConverter();
		this.repository = new JpaParkAreaRepository(this.jpaRepository, this.converter);
	}
	
	/**
	 * 주차 예약
	 */
	public ParkArea reservedParkArea() {
		ParkArea selectParking = this.factory.getInstance().getReservedParkArea(this.repository);
		
		Assert.notNull(selectParking, "선택할 주차장 데이터는 null일 수 없습니다.");
		
		return selectParking.reservedParkArea(this.repository);
	}
	
	/**
	 * 주차 구역 사용(Batch)
	 */
//	public void usedParkArea() {
//		ParkArea parking = this.factory.getInstance();
//		
//	}

	/**
	 * 주차 구역 사용 완료
	 * @param id
	 */
	public void finishUsedParkArea(ParkAreaId id) {
		ParkArea parking = this.factory.getInstance();
		
		parking.setParkAreaId(id);
		parking.fetchById(this.repository);
		
		parking.finishUsedParking(this.repository);
	}
	
	public List<ParkArea> getParkingList() {
		List<ParkArea> parkAreas = this.repository.findAll();
        return parkAreas.stream()
                .sorted(Comparator.comparing(ParkArea::getParkAreaId))
                .collect(Collectors.toList());
	}
}

