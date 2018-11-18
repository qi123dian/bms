package cn.hamgol.common.arch;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

@Component
public class ApplicationContextUtil implements ApplicationContextAware {
	private static ApplicationContext context;

	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		context = applicationContext;
	}

	public static ApplicationContext getApplicationContext() {
		return context;
	}
	
	/**
	 * 获取Spring Bean
	 * @param beanName
	 * @return
	 * @throws Exception
	 */
	public static Object getBean(String beanName) throws Exception{
		return context.getBean(beanName);
	}
	
	public static <T> T getBean(String beanName, Class<T> clazz) throws Exception{
		return clazz.cast(getBean(beanName));
	}
}
