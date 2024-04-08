package com.eps.cisco.domain.parkarea;

import java.util.List;

public interface ParkAreaRepository {
	void save(ParkArea obj);
	ParkArea findOnebyId(ParkAreaId id);
	List<ParkArea> findAll(); 
	List<ParkArea> findListByCanReserved();
}
