package com.eps.cisco.infrastructure.qrcode;

import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.view.AbstractView;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class QrCodeGenerator extends AbstractView {
	
	private Integer qrHeight;
	private Integer qrWidth;
	
    public QrCodeGenerator() {
        setContentType("image/png; charset=UTF-8");
    }

    @Override
	public void renderMergedOutputModel(Map<String, Object> model,
										HttpServletRequest request,
	                                    HttpServletResponse response) throws Exception {
    	
	    response.setContentType(getContentType());
	    response.setHeader("Content-Transfer-Encoding", "binary");
	
	    OutputStream outputStream = response.getOutputStream();
	
	    QRCodeWriter qrCodeWriter = new QRCodeWriter();
	
	    String content = (String) model.get("content");
	    
	    //한글 데이터 처리
	    content = new String(content.getBytes(StandardCharsets.UTF_8), "ISO-8859-1");
	    
	    //QR 코드 생성 및 출력
	    BitMatrix bitMatrix = qrCodeWriter.encode(content, BarcodeFormat.QR_CODE, this.qrWidth, this.qrHeight);
	    MatrixToImageWriter.writeToStream(bitMatrix, "png", outputStream);
	    outputStream.flush();
	}
    
    public void setSize(int width, int height) {
    	this.qrHeight = height;
    	this.qrWidth = width;
    }
}
