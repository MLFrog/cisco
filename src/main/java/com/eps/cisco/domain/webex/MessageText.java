package com.eps.cisco.domain.webex;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor(staticName = "of")
public class MessageText {

//    {
//        "roomId": "Y2lzY29zcGFyazovL3VzL1JPT00vOTZhYjhhNjAtZGE5OS0xMWVlLTgxNDAtYjc4ZGRjZTM0YmZl",
//            "text": "test2"
//    }

    private String roomId;
    private String text;
}
