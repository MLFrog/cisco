package com.eps.cisco.presentation.view;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * 미사용 확인 시, 폐기 예정
 */
@Slf4j
@RestController
@RequestMapping("test")
public class TempController {

    @GetMapping("")
    public ResponseEntity<String> getTest(@RequestParam("req") String req) {
        log.info("req  {} ", req);
        return new ResponseEntity<>(req, HttpStatusCode.valueOf(200));
    }

}
