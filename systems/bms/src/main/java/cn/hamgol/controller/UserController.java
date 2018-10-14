package cn.hamgol.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test")
public class UserController {
	
	private static final Logger log = LoggerFactory.getLogger(UserController.class);
	
	@RequestMapping("/test")
    public String test() {
		System.out.println("=================================");
		System.out.println("愛你呦，寶寶");
		
		log.info("=================================");
		log.info("愛你呦，寶寶");
		
        return "helloWorld";
    }
}
