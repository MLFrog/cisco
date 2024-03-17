package com.eps.cisco.presentation.view;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Thymeleaf 컨트롤 전용
 */
@Controller
public class ViewController {
	
	@RequestMapping(value = "/main")
	public String mainPage() {
		return "index";
	}
}
