package com.eps.cisco.presentation.view;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CustomErrorController implements ErrorController {

    private static final String PATH = "/error";

    @RequestMapping(value = PATH)
    public String error() {
        // 커스텀 에러 페이지로 리다이렉트 또는 모델 및 뷰를 반환
        return "error";
    }

    public String getErrorPath() {
        return PATH;
    }
}