package com.eps.cisco.presentation.api.v1;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eps.cisco.application.parkarea.ParkAreaService;
import com.eps.cisco.domain.parkarea.ParkArea;
import com.eps.cisco.domain.parkarea.ParkAreaId;
import com.eps.cisco.presentation.ApiResponse;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@RestController("/api/v1/parkarea")
public class ParkAreaController {
	
	private final ParkAreaService service;

	/**
	 * 주차 예약
	 * @return
	 */
	@GetMapping("/reserve")
	public ApiResponse<String> reservationParkArea() {
		ApiResponse<String> res = new ApiResponse<String>();
		
		try {
			ParkArea reservedArea = this.service.reservedParkArea();
			
			res.setPayload(reservedArea.getParkAreaId().toString());
			res.setStatus(200);
			res.setMessage("[SUCCESS]");
		} catch(Exception e) {
			log.error("알 수 없는 에러 발생");
			res.setStatus(500);
			res.setMessage("[ERROR]");
		}
		
		return res;
	}
	
	/**
	 * 주차장 리스트 반환
	 * @return
	 */
	@GetMapping("/get/list")
	public ApiResponse<List<ParkArea>> getAreaList() {
		ApiResponse<List<ParkArea>> res = new ApiResponse<List<ParkArea>>();
		List<ParkArea> list = new ArrayList<>();
		
		try {
			list = this.service.getParkingList();
			
			res.setPayload(list);
			res.setStatus(200);
			res.setMessage("[SUCCESS]");
		} catch(Exception e) {
			log.error("알 수 없는 에러 발생");
			res.setStatus(500);
			res.setMessage("[ERROR]");
		}
		
		return res;
	}
	
	/**
	 * 주차 사용 완료
	 * @param id
	 * @return
	 */
	@GetMapping("/checkout/reserve")
	public ApiResponse<String> finishUsedArea(@RequestParam("id") String id) {
		ApiResponse<String> res = new ApiResponse<String>();
		
		try {
			this.service.finishUsedParkArea(ParkAreaId.of(id));
			
			res.setStatus(200);
			res.setMessage("[SUCCESS]");
		} catch(Exception e) {
			log.error("알 수 없는 에러 발생");
			res.setStatus(500);
			res.setMessage("[ERROR]");
		}
		
		return res;
	}
}
