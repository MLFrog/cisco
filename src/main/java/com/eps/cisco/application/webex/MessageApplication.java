package com.eps.cisco.application.webex;

import com.eps.cisco.domain.webex.MessageRes;
import com.eps.cisco.domain.webex.MessageText;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.net.ssl.HttpsURLConnection;
import java.io.OutputStream;
import java.net.URL;

@Slf4j
@Service("MessageApplication")
public class MessageApplication {

    public MessageRes sendMessage(String message) {
        MessageRes messageRes = new MessageRes();

        try {
            URL url = new URL("https://webexapis.com/v1/messages");
            HttpsURLConnection httpsConn = (HttpsURLConnection) url.openConnection();
            // 결과 Stream Data를 Stream객체에 할당하여 활용 가능하다.
            httpsConn.getInputStream();

            httpsConn.setRequestMethod("POST"); //요청 방식 설정 (GET/POST 등)
            httpsConn.setRequestProperty(
                    "Authorization",
                    "Bearer MmM1ZDQ4MmYtMzFiZC00ODY3LTljYWQtMjQ4YTU2MzlmYmMwZTA0ODk3ODktZWI3_P0A1_59695d7a-5b35-4974-960b-57b9fd96be59"); // request Header 설정 key-value 형식으로 다양한 요청 설정이 가능하다.
            //            httpsConn.setConnectTiomeOut(1000); //서버 연결 제한 시간
            //            httpsConn.setReadTimeOut(1000); // 서버 연결 후 데이터 read 제한 시간
            //  URL 호출시 발생하는 무한 대기 상태에 빠지지 않도록 connectionTimeOut 발생시, ReadTimeOut 발생시 시간 설정을 꼭 해두자.

            MessageText.of(
                    "Y2lzY29zcGFyazovL3VzL1JPT00vOTZhYjhhNjAtZGE5OS0xMWVlLTgxNDAtYjc4ZGRjZTM0YmZl",
                    message
            );

//            httpsConn.set
            // 본문을 쓸 수 있도록 OutputStream 가져오기
            httpsConn.setDoOutput(true);
            OutputStream os = httpsConn.getOutputStream();

            // 본문 데이터 작성
            String requestBody = "key1=value1&key2=value2";
            os.write(requestBody.getBytes());
            os.flush();
            os.close();

        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
        return messageRes;
    }
}
