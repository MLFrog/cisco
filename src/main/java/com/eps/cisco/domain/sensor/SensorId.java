package com.eps.cisco.domain.sensor;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;

@Data
@EqualsAndHashCode
@RequiredArgsConstructor(staticName = "of")
public class SensorId {
	private final long value;
	
	static SensorId of(int value) { return SensorId.of((long) value); }
	
	@Override
	public String toString() { return Long.toString(this.value); }
}
