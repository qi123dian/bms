package cn.hamgol.controller;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.hamgol.service.test.TestModuleService;

@Controller
@RequestMapping("/rest/test")
public class TestController {

	private static final Logger log = LoggerFactory.getLogger(TestController.class);
	@Resource
	TestModuleService testModuleService;

	@RequestMapping("/test")
	public String test() {
		log.info("******************************************************************************");
		log.info("begin request");
		log.info("Test Transaction Demo");
		
		testModuleService.testTransaction();
		
		log.info("end request");
		log.info("******************************************************************************");
		return "";
	}
}
