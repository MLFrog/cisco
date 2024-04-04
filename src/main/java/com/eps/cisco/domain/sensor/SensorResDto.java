package com.eps.cisco.domain.sensor;

import lombok.Data;
import org.apache.logging.log4j.util.Strings;

@Data
public class SensorResDto {
    private String airLabel;  // 좋음, 보통, 나쁨
    private String airValue;  // value
    private String dustLabel; // 좋음, 보통, 나쁨, 매우나쁨
    private String dustValue; // value

    public SensorResDto of(String airValue, String dustValue) {
        if (!Strings.isEmpty(airValue) && !Strings.isEmpty(dustValue)) {
            this.airValue = airValue;
            double airV = Double.parseDouble(airValue);
            if (airV < 0.4) {
                this.airLabel = "좋음";
            } else if (0.5 < airV && airV < 0.8) {
                this.airLabel = "보통";
            } else if (airV < 0.9) {
                this.airLabel = "나쁨";
            }

            this.dustValue = dustValue;
            double dustV = Double.parseDouble(dustValue);
            if (dustV < 30) {
                this.dustLabel = "좋음";
            } else if (31 < dustV && dustV < 80) {
                this.dustLabel = "보통";
            } else if (dustV < 151) {
                this.dustLabel = "나쁨";
            }
        }
        return this;
    }
}
