package com.eps.cisco.domain.parkarea;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;

@Data
@EqualsAndHashCode
@RequiredArgsConstructor(staticName = "of")
public class ParkAreaId {
	private final String value;
	
	@Override
	public String toString() { return this.value; }
}
