package cn.hamgol.dao.db.test.custom;

import java.util.List;

import cn.hamgol.dao.db.test.TestModuleMapper;
import cn.hamgol.entity.db.test.TestModule;


public interface TestModuleCustomMapper extends TestModuleMapper{
	List<TestModule> selectAllList();
}