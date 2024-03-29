package com.eps.cisco.application.batch;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@EnableScheduling
@Service
public class SceduledTest {
	@Scheduled(cron = "0/5 * * * * ?")
	public void scheduledCron() {
//		log.info("TestScheduledCron");
	}
}
