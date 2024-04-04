package com.eps.cisco.application.statistics;

import com.eps.cisco.domain.sensor.SensorResDto;
import com.eps.cisco.infrastructure.jpa.entity.SensorEntity;
import com.eps.cisco.infrastructure.jpa.repository.SensorJpaRepository;
import org.springframework.stereotype.Service;

@Service("SensorApplication")
public class SensorApplication {

    private final SensorJpaRepository sensorJpaRepository;

    public SensorApplication(SensorJpaRepository sensorJpaRepository) {
        this.sensorJpaRepository = sensorJpaRepository;
    }

    public SensorResDto getSensorByKey(Long sensorId) {
        SensorEntity sensorEntity = sensorJpaRepository.findBySensorById(sensorId);
        return new SensorResDto().of(sensorEntity.getAirQuality(), sensorEntity.getAirQualityScore());
    }

    

}
