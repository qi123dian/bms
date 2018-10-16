package cn.hamgol.service.impl.test;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
	
	/**
	 * Custom sql
	 */
	@Override
	public List<TestModule> queryAllList() {
		return testModuleCustomMapperDao.selectAllList();
	}
	
	/**
	 * test Transaction
	 */
	@Transactional
	@Override
	public void testTransaction() {
		
		TestModule tm = new TestModule();
		tm.setId(UUID.randomUUID().toString().replace("-", "").toUpperCase());
		tm.setTitle("Test Transaction");
		tm.setCreateTime(new Date());
		tm.setCreateId("admin");
		tm.setUpdateId(null);
		tm.setUpdateTime(null);
		
		testModuleCustomMapperDao.insert(tm);
		
		TestModule t1 = testModuleCustomMapperDao.selectByPrimaryKey(tm.getId());
		
		System.out.println(t1);
		
		tm.setTitle("Test TransactionTest TransactionTest TransactionTest TransactionTest TransactionTest TransactionTest TransactionTest TransactionTest TransactionTest TransactionTest TransactionTest TransactionTest TransactionTest TransactionTest TransactionTest TransactionTest TransactionTest TransactionTest TransactionTest Transaction");
		// tm.setTitle("Test Transaction Update");
		
		testModuleCustomMapperDao.updateByPrimaryKey(tm);

		t1 = testModuleCustomMapperDao.selectByPrimaryKey(tm.getId());
		
		System.out.println(t1);
	}
}
