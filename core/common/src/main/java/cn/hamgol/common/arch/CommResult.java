package cn.hamgol.common.arch;

/**
 * 公共请求返回包装类
 * @author hsbye
 *
 */
public class CommResult {
	
	private static final String SUCCESS = "0";
	
	private String retCode; // 状态码
	private String retMsg; // 状态信息
	private Object retData; // 返回数据
	
	public CommResult(String retCode, String retMsg, String retData) {
		result(retCode, retMsg, retData);
	}
	public CommResult(String retCode, String retMsg) {
		result(retCode, retMsg, null);
	}
	public CommResult(String retMsg) {
		result(SUCCESS, retMsg, null);
	}
	public void result(String retCode, String retMsg, String retData) {
		this.retCode = retCode;
		this.retMsg = retMsg;
		this.retData = retData;
	}
	public String getRetCode() {
		return retCode;
	}
	public void setRetCode(String retCode) {
		this.retCode = retCode;
	}
	public String getRetMsg() {
		return retMsg;
	}
	public void setRetMsg(String retMsg) {
		this.retMsg = retMsg;
	}
	public Object getRetData() {
		return retData;
	}
	public void setRetData(Object retData) {
		this.retData = retData;
	}
	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append(getClass().getSimpleName());
		sb.append(" {");
		sb.append("retCode=").append(retCode);
		sb.append(", retMsg=").append(retMsg);
		sb.append(", retData=").append(retData);
		sb.append("}");
		return sb.toString();
	}
	public static void main(String[] args) {
		System.out.println(new CommResult("success", "你好吗？"));
	}
}
