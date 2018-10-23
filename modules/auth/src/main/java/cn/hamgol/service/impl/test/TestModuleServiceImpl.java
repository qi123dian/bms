package cn.hamgol.service.impl.test;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cn.hamgol.dao.core.auth.SysUserMapper;
import cn.hamgol.dao.db.test.custom.TestModuleCustomMapper;
import cn.hamgol.entity.core.auth.SysUser;
import cn.hamgol.entity.db.test.TestModule;
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
		
		SysUser su = sysUserMapperDao.selectByPrimaryKey("admin");
		su.setUpdateTime(new Date());
		su.setUpdateUser("sysupdate001");
		
		su = new SysUser();
		
		su.setUserId(UUID.randomUUID().toString().replace("-", "").toUpperCase());
		su.setUserName("testTransaction");
		su.setUserPwd("123456");
		su.setCreateUser("admin");
		su.setCreateTime(new Date());
		
		sysUserMapperDao.insert(su);
		
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
