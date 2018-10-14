package cn.hamgol.service.impl.test;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.hamgol.dao.auth.SysUserMapper;
import cn.hamgol.dao.test.custom.TestModuleCustomMapper;
import cn.hamgol.entity.auth.SysUser;
import cn.hamgol.entity.test.TestModule;
import cn.hamgol.service.test.TestModuleService;

@Service
public class TestModuleServiceImpl implements TestModuleService{

	@Autowired
	TestModuleCustomMapper testModuleCustomMapperDao;
	@Autowired
	SysUserMapper sysUserMapperDao;
	
	@Override
	public int add(TestModule record) {
		return testModuleCustomMapperDao.insert(record);
	}

	@Override
	public int update(TestModule record) {
		return testModuleCustomMapperDao.updateByPrimaryKey(record);
	}

	@Override
	public int delete(String id) {
		return testModuleCustomMapperDao.deleteByPrimaryKey(id);
	}

	@Override
	public TestModule queryOneById(String id) {
		return testModuleCustomMapperDao.selectByPrimaryKey(id);
	}
	
	@Override
	public SysUser queryUserOneById(String id) {
		return sysUserMapperDao.selectByPrimaryKey(id);
	}

	@Override
	public List<TestModule> queryAllList() {
		return testModuleCustomMapperDao.selectAllList();
	}
}
