package com.eps.cisco.infrastructure.jpa.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "sensor_log", schema = "public")
public class SensorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "row_id")
    private String rowId;
    @Column(name = "sensor_id")
    private Long sensorId;
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
