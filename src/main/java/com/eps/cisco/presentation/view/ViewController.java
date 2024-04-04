package com.eps.cisco.presentation.view;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 리액트 진입점
 */
@Controller
public class ViewController {
	
	@RequestMapping(value = "/")
	public String mainPage() {
		return "index";
	}
}
