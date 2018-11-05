package cn.hamgol.entity.db.test.custom;

import cn.hamgol.entity.db.test.TestModule;

public class TestModuleCustom extends TestModule{
	private static final long serialVersionUID = 1L;
	
	private String customColumn = "run success?";
	
	public String getCustomColumn() {
		return customColumn;
	}
	public void setCustomColumn(String customColumn) {
		this.customColumn = customColumn;
	} 
	
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table test_module
     *
     * @mbg.generated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(", customColumn=").append(customColumn);
        sb.append("]");
        
        return super.toString().replaceAll("\\]$", sb.toString());
    }
}
