package com.eps.cisco.infrastructure.jpa.entity;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "parking")
public class ParkingEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long rowId;
	
	@Column(name = "parking_id")
    private String parkingId;
	
	@Column(name = "sensor_id")
	private Long sensorId;
	
	@Column(name = "parked_type")
	private String parkedType;
	
	@Column(name = "is_parked")
	private Boolean isParked;
	
	@Column(name = "is_reserved")
	private Boolean isReserved;
	
	@Column(name = "createdat")
	private Timestamp createdAt;
	
	@Column(name = "updatedat")
	private Timestamp updatedAt;
}
