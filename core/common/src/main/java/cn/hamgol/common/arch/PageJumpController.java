package cn.hamgol.common.arch;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * 公共页面跳转
 * @author hamgol
 */
@Controller
@RequestMapping(value = "/page", method = {RequestMethod.GET, RequestMethod.POST})
public class PageJumpController {

	private static final Logger log = LoggerFactory.getLogger(PageJumpController.class);
	
	@RequestMapping("/{path}/{page}")
	public ModelAndView urlJump(@PathVariable(value="path") String path, @PathVariable(value="page") String page, HttpServletRequest req) {
		
		String url = req.getServletPath();
		
		log.info("url jump");
		log.info("url  : " + url);
		log.info("path : " + path);
		log.info("page : " + page);
		
		url = path + "/" + page;
		
		log.info("url : " + url);
		
		ModelAndView mav = new ModelAndView(url);
		
		return mav;
	}
}
