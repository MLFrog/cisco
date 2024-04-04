package com.eps.cisco.domain.webex;

import lombok.Data;

@Data
public class MessageRes {
//    {
//        "id": "Y2lzY29zcGFyazovL3VzL01FU1NBR0UvNWNhMzIzYTAtZjI2OC0xMWVlLWI4NjgtMDFlMTQ5MzM2OTgw",
//            "roomId": "Y2lzY29zcGFyazovL3VzL1JPT00vOTZhYjhhNjAtZGE5OS0xMWVlLTgxNDAtYjc4ZGRjZTM0YmZl",
//            "roomType": "group",
//            "text": "test2",
//            "personId": "Y2lzY29zcGFyazovL3VzL1BFT1BMRS9hN2NmMWEzNy0zZjlkLTRjNzgtYWEzNy03ODRkYjdkYWNkNTg",
//            "personEmail": "chlehddh8062@gmail.com",
//            "created": "2024-04-04T09:47:33.978Z"
//    }

    private String id;
    private String roomId;
    private String roomType;
    private String text;
    private String personId;
    private String personEmail;
    private String created;
}
