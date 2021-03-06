package cn.hamgol.entity.core.auth;

import java.io.Serializable;
import java.util.Date;

public class SysRoleUser implements Serializable {
    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column auth_sys_role_user.ur_uid
     *
     * @mbg.generated
     */
    private String urUid;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column auth_sys_role_user.ur_rid
     *
     * @mbg.generated
     */
    private String urRid;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column auth_sys_role_user.create_time
     *
     * @mbg.generated
     */
    private Date createTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column auth_sys_role_user.create_user
     *
     * @mbg.generated
     */
    private String createUser;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column auth_sys_role_user.update_time
     *
     * @mbg.generated
     */
    private Date updateTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column auth_sys_role_user.update_user
     *
     * @mbg.generated
     */
    private String updateUser;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table auth_sys_role_user
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column auth_sys_role_user.ur_uid
     *
     * @return the value of auth_sys_role_user.ur_uid
     *
     * @mbg.generated
     */
    public String getUrUid() {
        return urUid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column auth_sys_role_user.ur_uid
     *
     * @param urUid the value for auth_sys_role_user.ur_uid
     *
     * @mbg.generated
     */
    public void setUrUid(String urUid) {
        this.urUid = urUid == null ? null : urUid.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column auth_sys_role_user.ur_rid
     *
     * @return the value of auth_sys_role_user.ur_rid
     *
     * @mbg.generated
     */
    public String getUrRid() {
        return urRid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column auth_sys_role_user.ur_rid
     *
     * @param urRid the value for auth_sys_role_user.ur_rid
     *
     * @mbg.generated
     */
    public void setUrRid(String urRid) {
        this.urRid = urRid == null ? null : urRid.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column auth_sys_role_user.create_time
     *
     * @return the value of auth_sys_role_user.create_time
     *
     * @mbg.generated
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column auth_sys_role_user.create_time
     *
     * @param createTime the value for auth_sys_role_user.create_time
     *
     * @mbg.generated
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column auth_sys_role_user.create_user
     *
     * @return the value of auth_sys_role_user.create_user
     *
     * @mbg.generated
     */
    public String getCreateUser() {
        return createUser;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column auth_sys_role_user.create_user
     *
     * @param createUser the value for auth_sys_role_user.create_user
     *
     * @mbg.generated
     */
    public void setCreateUser(String createUser) {
        this.createUser = createUser == null ? null : createUser.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column auth_sys_role_user.update_time
     *
     * @return the value of auth_sys_role_user.update_time
     *
     * @mbg.generated
     */
    public Date getUpdateTime() {
        return updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column auth_sys_role_user.update_time
     *
     * @param updateTime the value for auth_sys_role_user.update_time
     *
     * @mbg.generated
     */
    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column auth_sys_role_user.update_user
     *
     * @return the value of auth_sys_role_user.update_user
     *
     * @mbg.generated
     */
    public String getUpdateUser() {
        return updateUser;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column auth_sys_role_user.update_user
     *
     * @param updateUser the value for auth_sys_role_user.update_user
     *
     * @mbg.generated
     */
    public void setUpdateUser(String updateUser) {
        this.updateUser = updateUser == null ? null : updateUser.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table auth_sys_role_user
     *
     * @mbg.generated
     */
    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        SysRoleUser other = (SysRoleUser) that;
        return (this.getUrUid() == null ? other.getUrUid() == null : this.getUrUid().equals(other.getUrUid()))
            && (this.getUrRid() == null ? other.getUrRid() == null : this.getUrRid().equals(other.getUrRid()))
            && (this.getCreateTime() == null ? other.getCreateTime() == null : this.getCreateTime().equals(other.getCreateTime()))
            && (this.getCreateUser() == null ? other.getCreateUser() == null : this.getCreateUser().equals(other.getCreateUser()))
            && (this.getUpdateTime() == null ? other.getUpdateTime() == null : this.getUpdateTime().equals(other.getUpdateTime()))
            && (this.getUpdateUser() == null ? other.getUpdateUser() == null : this.getUpdateUser().equals(other.getUpdateUser()));
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table auth_sys_role_user
     *
     * @mbg.generated
     */
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getUrUid() == null) ? 0 : getUrUid().hashCode());
        result = prime * result + ((getUrRid() == null) ? 0 : getUrRid().hashCode());
        result = prime * result + ((getCreateTime() == null) ? 0 : getCreateTime().hashCode());
        result = prime * result + ((getCreateUser() == null) ? 0 : getCreateUser().hashCode());
        result = prime * result + ((getUpdateTime() == null) ? 0 : getUpdateTime().hashCode());
        result = prime * result + ((getUpdateUser() == null) ? 0 : getUpdateUser().hashCode());
        return result;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table auth_sys_role_user
     *
     * @mbg.generated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", urUid=").append(urUid);
        sb.append(", urRid=").append(urRid);
        sb.append(", createTime=").append(createTime);
        sb.append(", createUser=").append(createUser);
        sb.append(", updateTime=").append(updateTime);
        sb.append(", updateUser=").append(updateUser);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}