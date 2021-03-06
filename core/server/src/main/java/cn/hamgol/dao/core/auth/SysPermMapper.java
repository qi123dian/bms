package cn.hamgol.dao.core.auth;

import cn.hamgol.entity.core.auth.SysPerm;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

public interface SysPermMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table auth_sys_perm
     *
     * @mbg.generated
     */
    @Delete({
        "delete from auth_sys_perm",
        "where id = #{id,jdbcType=VARCHAR}"
    })
    int deleteByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table auth_sys_perm
     *
     * @mbg.generated
     */
    @Insert({
        "insert into auth_sys_perm (id, title, ",
        "create_time, create_user, ",
        "update_time, update_user)",
        "values (#{id,jdbcType=VARCHAR}, #{title,jdbcType=VARCHAR}, ",
        "#{createTime,jdbcType=TIMESTAMP}, #{createUser,jdbcType=VARCHAR}, ",
        "#{updateTime,jdbcType=TIMESTAMP}, #{updateUser,jdbcType=VARCHAR})"
    })
    int insert(SysPerm record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table auth_sys_perm
     *
     * @mbg.generated
     */
    int insertSelective(SysPerm record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table auth_sys_perm
     *
     * @mbg.generated
     */
    @Select({
        "select",
        "id, title, create_time, create_user, update_time, update_user",
        "from auth_sys_perm",
        "where id = #{id,jdbcType=VARCHAR}"
    })
    @ResultMap("cn.hamgol.dao.core.auth.SysPermMapper.BaseResultMap")
    SysPerm selectByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table auth_sys_perm
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(SysPerm record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table auth_sys_perm
     *
     * @mbg.generated
     */
    @Update({
        "update auth_sys_perm",
        "set title = #{title,jdbcType=VARCHAR},",
          "create_time = #{createTime,jdbcType=TIMESTAMP},",
          "create_user = #{createUser,jdbcType=VARCHAR},",
          "update_time = #{updateTime,jdbcType=TIMESTAMP},",
          "update_user = #{updateUser,jdbcType=VARCHAR}",
        "where id = #{id,jdbcType=VARCHAR}"
    })
    int updateByPrimaryKey(SysPerm record);
}