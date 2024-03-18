package com.eps.cisco.application.config;

import java.io.IOException;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

public class WebMvcConfig implements WebMvcConfigurer {
	
	private static final String[] CLASSPATH_RESOURCE_LOCATIONS = {
			"classpath:/resources/",
			"classpath:/templates/",
			"classpath:/META-INF/resources/",
			"classpath:/static/"
	};
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/").resourceChain(true);
		registry.addResourceHandler("/**").addResourceLocations(CLASSPATH_RESOURCE_LOCATIONS);
		registry.addResourceHandler("/**")
			.addResourceLocations("classpath:/static/")
			.resourceChain(true)
			.addResolver(new PathResourceResolver() {
				@Override
				protected Resource getResource(String resourcePath, Resource location) throws IOException {
					Resource reqResource = location.createRelative(resourcePath);
					return reqResource.exists() && reqResource.isReadable() ? reqResource : new ClassPathResource("/static/index.html");
				}
			});
	}

}
