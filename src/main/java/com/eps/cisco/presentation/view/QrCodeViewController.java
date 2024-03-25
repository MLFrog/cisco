package com.eps.cisco.presentation.view;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eps.cisco.infrastructure.qrcode.QrCodeGenerator;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping(value = "/qr")
@RequiredArgsConstructor
public class QrCodeViewController {
	
	private final QrCodeGenerator qrCodeGenerator;
	
	/**
	 * QR 발급
	 * @param request
	 * @param response
	 */
	@GetMapping("/get")
	public void makeQr(@RequestParam(value="width", defaultValue = "500") int width,
					   @RequestParam(value="height", defaultValue = "500") int height,
					   HttpServletRequest request,
					   HttpServletResponse response) {
	    Map<String, Object> model = new HashMap<>();
	    model.put("content", "Success EPS parking");
	    try {
	    	this.qrCodeGenerator.setSize(width, height);
	        this.qrCodeGenerator.renderMergedOutputModel(model, request, response);
	    } catch (Exception e) {
	    	log.error("QR 생성 실패");
	        e.printStackTrace();
	    }
	}
}
