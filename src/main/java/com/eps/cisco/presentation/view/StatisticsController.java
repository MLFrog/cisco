package com.eps.cisco.presentation.view;

import com.eps.cisco.application.statistics.SensorApplication;
import com.eps.cisco.domain.Sensor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping(value = "/stat")
public class StatisticsController {

    private final SensorApplication sensorApplication;

    public StatisticsController(SensorApplication sensorApplication) {
        this.sensorApplication = sensorApplication;
    }

    @GetMapping("info")
    public Sensor getInfoByKey(String key) {
        return sensorApplication.getAirByKey(key);
    }
}
