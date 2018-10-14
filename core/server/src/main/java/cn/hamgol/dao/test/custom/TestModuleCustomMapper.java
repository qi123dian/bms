package cn.hamgol.dao.test.custom;

import java.util.List;

import cn.hamgol.dao.test.TestModuleMapper;
import cn.hamgol.entity.test.TestModule;

public interface TestModuleCustomMapper extends TestModuleMapper{
	List<TestModule> selectAllList();
}