package com.eps.cisco.presentation.view;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController("/")
@CrossOrigin("*")
public class TempController {

    @GetMapping("test")
    public ResponseEntity<String> getTest (@RequestParam("req") String req) {
        log.info("req  {} ", req);
        return new ResponseEntity<>(req, HttpStatusCode.valueOf(200));
    }

}
