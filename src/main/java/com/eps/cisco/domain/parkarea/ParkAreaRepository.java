package com.eps.cisco.domain.parkarea;

import com.eps.cisco.infrastructure.jpa.entity.ParkingEntity;

public interface ParkAreaRepository {
	void save(ParkArea obj);
	ParkingEntity findOnebyId(ParkAreaId id);
}
