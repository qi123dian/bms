<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.net.URLDecoder"%>
<%@page import="java.util.Enumeration"%>
<%@page pageEncoding="UTF-8"%>
<%
	Enumeration<String> prm = request.getParameterNames();
	String prmStr = "";
	String key = "";
	String val = "";
	while(prm.hasMoreElements()) {
		key = prm.nextElement();
		if(prmStr.length()==0) {
			prmStr = "\"" + key + "\":";
		} else {
			prmStr += ", \"" + key + "\":";
		}
		val = request.getParameter(key);
		val = val==null?"":val;
		try {
			val = URLDecoder.decode(val, "UTF-8");
		} catch(Exception e) {
			val = "";
		}
		prmStr += " \"" + val + "\"";
	}
	prmStr = "{" + prmStr + "}";
	
	String pageId = "id" + new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date());
%>

<script type="text/javascript">
	var pageParam = <%=prmStr%>;
	var pageId = "<%=pageId%>";
</script>
