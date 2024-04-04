package com.eps.cisco.domain.parkarea.type;

public enum ParkedType {
	OIL("O", "일반 차량 구역"),
	ELECTRONIC("E", "전기자 전용 구역"),
	DISABLED("D", "장애인 전용 구역");
	
	private final String code;
	private final String comment;

	ParkedType(String code, String comment) {
		this.code = code;
		this.comment = comment;
	}
	
	public static ParkedType valueOfCode(String code) {
		for(ParkedType type : values()) {
			if(type.code.equals(code)) {
				return type;
			}
		}
		throw new IllegalArgumentException("코드가 일치하지 않습니다.");
	}
	
	public String getCode() {
		return this.code;
	}

}
