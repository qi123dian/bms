package cn.hamgol.dao.core.auth;

import cn.hamgol.entity.core.auth.SysCorpOrg;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

public interface SysCorpOrgMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table auth_sys_corp_org
     *
     * @mbg.generated
     */
    @Delete({
        "delete from auth_sys_corp_org",
        "where co_cid = #{coCid,jdbcType=VARCHAR}"
    })
    int deleteByPrimaryKey(String coCid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table auth_sys_corp_org
     *
     * @mbg.generated
     */
    @Insert({
        "insert into auth_sys_corp_org (co_cid, co_oid, ",
        "create_time, create_user, ",
        "update_time, update_user)",
        "values (#{coCid,jdbcType=VARCHAR}, #{coOid,jdbcType=VARCHAR}, ",
        "#{createTime,jdbcType=TIMESTAMP}, #{createUser,jdbcType=VARCHAR}, ",
        "#{updateTime,jdbcType=TIMESTAMP}, #{updateUser,jdbcType=VARCHAR})"
    })
    int insert(SysCorpOrg record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table auth_sys_corp_org
     *
     * @mbg.generated
     */
    int insertSelective(SysCorpOrg record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table auth_sys_corp_org
     *
     * @mbg.generated
     */
    @Select({
        "select",
        "co_cid, co_oid, create_time, create_user, update_time, update_user",
        "from auth_sys_corp_org",
        "where co_cid = #{coCid,jdbcType=VARCHAR}"
    })
    @ResultMap("cn.hamgol.dao.core.auth.SysCorpOrgMapper.BaseResultMap")
    SysCorpOrg selectByPrimaryKey(String coCid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table auth_sys_corp_org
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(SysCorpOrg record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table auth_sys_corp_org
     *
     * @mbg.generated
     */
    @Update({
        "update auth_sys_corp_org",
        "set co_oid = #{coOid,jdbcType=VARCHAR},",
          "create_time = #{createTime,jdbcType=TIMESTAMP},",
          "create_user = #{createUser,jdbcType=VARCHAR},",
          "update_time = #{updateTime,jdbcType=TIMESTAMP},",
          "update_user = #{updateUser,jdbcType=VARCHAR}",
        "where co_cid = #{coCid,jdbcType=VARCHAR}"
    })
    int updateByPrimaryKey(SysCorpOrg record);
}