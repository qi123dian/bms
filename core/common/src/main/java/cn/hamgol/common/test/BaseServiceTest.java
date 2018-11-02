package cn.hamgol.common.test;

import org.junit.runner.RunWith;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;

//配置Spring中的测试环境
@RunWith(SpringJUnit4ClassRunner.class)
// 指定Spring的配置文件路径
@ContextConfiguration(locations = { "classpath*:spring-servlet.xml" })
@WebAppConfiguration("src/main/resources")
// 测试类开启事务,需要指定事务管理器,默认测试完成后,数据库操作自动回滚
@Transactional(transactionManager = "transactionManager")
// 指定数据库操作不回滚,可选
@Rollback(value = false)
public class BaseServiceTest extends AbstractJUnit4SpringContextTests {
	
	// 获取日志配置文件
	/*static {
		URL url = Configurator.class.getClassLoader().getResource("logback.xml");
		
		LoggerContext lc = (LoggerContext) LoggerFactory.getILoggerFactory();
		JoranConfigurator configurator = new JoranConfigurator();
		configurator.setContext(lc);
		lc.reset();
		
		try {
			configurator.doConfigure(url);
		} catch (JoranException e) {
			e.printStackTrace();
		}
	}*/

}
