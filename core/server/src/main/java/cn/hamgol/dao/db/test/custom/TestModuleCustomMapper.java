package cn.hamgol.dao.db.test.custom;

import java.util.List;

import cn.hamgol.dao.db.test.TestModuleMapper;
import cn.hamgol.entity.db.test.custom.TestModuleCustom;


public interface TestModuleCustomMapper extends TestModuleMapper{
	List<TestModuleCustom> selectAllList();
}