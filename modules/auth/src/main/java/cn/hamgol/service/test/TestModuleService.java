package cn.hamgol.service.test;

import java.util.List;

import cn.hamgol.entity.core.auth.SysUser;
import cn.hamgol.entity.db.test.TestModule;

public interface TestModuleService {
	
	int add(TestModule tm);
	
	int update(TestModule tm);
	
	int delete(String id);
	
	TestModule queryOneById(String id);

	SysUser queryUserOneById(String id);
	
	List<TestModule> queryAllList();

	void testTransaction();
}
