package cn.hamgol.service.test;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.github.pagehelper.PageHelper;

import cn.hamgol.common.test.BaseServiceTest;
import cn.hamgol.entity.db.test.TestModule;

public class TestModuleServiceTest extends BaseServiceTest{
	
	private static final Logger log = LoggerFactory.getLogger(TestModuleServiceTest.class);
	
	@Resource
	TestModuleService testModuleService;
	
	@Test
	public void test() {
		
		log.info("================================================");
		log.info("================================================");
		log.info("================================================");
		log.info("================================================");
		
		TestModule tm = new TestModule();
		tm.setId(UUID.randomUUID().toString().replace("-", "").toUpperCase());
		tm.setTitle("名字");
		tm.setCreateTime(new Date());
		tm.setCreateId("admin");
		tm.setUpdateId(null);
		tm.setUpdateTime(null);
		
		int rs = testModuleService.add(tm);
		
		log.info("add rs : " + rs);
		
		tm = testModuleService.queryOneById(tm.getId());
		
		log.info("add tm : " + tm);
		
		tm.setTitle("名字修改成功了吗？");
		
		rs = testModuleService.update(tm);
		
		log.info("update rs : " + rs);
		
		tm = testModuleService.queryOneById(tm.getId());
		
		log.info("update tm : " + tm);
		
		rs = testModuleService.delete(tm.getId());
		
		log.info("delete rs : " + rs);
		
		tm = testModuleService.queryOneById(tm.getId());
		
		log.info("delete tm : " + tm);
		
		log.info("---------------------------------------------------");
		log.info("---------------------------------------------------");
		log.info("---------------------------------------------------");
		log.info("---------------------------------------------------");
		
		testModuleService.queryUserOneById("admin");
		
		log.info("+++++++++++++++++++++++++++++++++++++++++++++++++++");
		log.info("+++++++++++++++++++++++++++++++++++++++++++++++++++");
		
		PageHelper.startPage(1, 10);
		List<TestModule> listD = testModuleService.queryAllList();
		
		log.info("listD : " + listD.toString());
		log.info("listD : " + listD.size());
		
		for(TestModule tm1 : listD) {
			log.info(tm1.toString());
		}
		
		log.info("******************************************************************************");
		try {
			testModuleService.testTransaction();
		} catch(Exception e) {
			log.info("Transaction Exception");
		}
		
		log.info("******************************************************************************");
	}
}
