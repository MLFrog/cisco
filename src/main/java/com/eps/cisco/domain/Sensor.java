package com.eps.cisco.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name = "sensor", schema = "public")
@Entity
public class Sensor {

    @Id
    @Column(name = "row_id")
    private String rowId;
    @Column(name = "sensor_id")
    private String sensorId;
    @Column(name = "upstreampower")
    private String upStreamPower;
    @Column(name = "air_quality")
    private String airQuality;
    @Column(name = "air_quality_score")
    private String airQualityScore;
    @Column(name = "temperature_celsius")
    private String temperatureCelsius;
    @Column(name = "temperature_quality")
    private String temperatureQuality;
    @Column(name = "meta_data")
    private String metaData;
    @Column(name = "createdat")
    private String createdAt;
    @Column(name = "updatedat")
    private String updatedAt;
}
