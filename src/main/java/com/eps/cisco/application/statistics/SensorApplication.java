package com.eps.cisco.application.statistics;

import com.eps.cisco.domain.Sensor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service("SensorApplication")
public class SensorApplication {

    private final SensorEm sensorEm;

    public SensorApplication(SensorEm sensorEm) {
        this.sensorEm = sensorEm;
    }

    public Sensor getAirByKey(String key) {
        return sensorEm.getAirByKey(key);
    }


}
