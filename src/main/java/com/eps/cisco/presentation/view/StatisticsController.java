package com.eps.cisco.presentation.view;

import com.eps.cisco.application.statistics.SensorApplication;
import com.eps.cisco.domain.sensor.SensorResDto;
import com.eps.cisco.infrastructure.jpa.entity.SensorEntity;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping(value = "/stat")
public class StatisticsController {

    private final SensorApplication sensorApplication;

    public StatisticsController(SensorApplication sensorApplication) {
        this.sensorApplication = sensorApplication;
    }

    @GetMapping("info")
    public SensorResDto getInfoByKey(@RequestParam("sensorId") Long sensorId) {
        return sensorApplication.getSensorByKey(sensorId);
    }


}
