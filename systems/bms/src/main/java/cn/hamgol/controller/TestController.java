package cn.hamgol.controller;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.hamgol.common.arch.BaseController;
import cn.hamgol.common.arch.CommResult;
import cn.hamgol.service.test.TestModuleService;

@Controller
public class TestController extends BaseController{

	private static final Logger log = LoggerFactory.getLogger(TestController.class);
	@Resource
	TestModuleService testModuleService;

	@RequestMapping(value="/test/test", produces={"application/json; charset=UTF-8"})
	@ResponseBody
	public CommResult test() {
		
		log.info("******************************************************************************");
		log.info("begin request");
		log.info("Test Transaction Demo");
		
		try {
			testModuleService.testTransaction();
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		log.info("end request");
		log.info("******************************************************************************");
		
		return new CommResult("成功了吗？");
	}
	
	@RequestMapping(value="/test/testError", produces={"application/xml; charset=UTF-8"})
	@ResponseBody
	public CommResult testError() {
		
		String[] arr = new String[]{"test"};
		String str = arr[2];
		log.info(str);
		
		return new CommResult("成功了吗？");
	}
}
