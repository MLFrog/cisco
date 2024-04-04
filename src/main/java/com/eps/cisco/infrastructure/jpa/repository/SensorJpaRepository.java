package com.eps.cisco.infrastructure.jpa.repository;

import com.eps.cisco.infrastructure.jpa.entity.SensorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository("SensorJpaRepository")
public interface SensorJpaRepository extends JpaRepository<SensorEntity, Long> {

    @Query("SELECT S from SensorEntity S where S.sensorId = :sensorId")
    SensorEntity findBySensorById(@Param("sensorId") Long sensorId);

}
