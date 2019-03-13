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
%>

<div id="currentPageId" style="display: none;"></div>

<script type="text/javascript">
	// 解决无法获取页面ID问题
	var pagerId = 'pager_' + _.now();
	var pagerEl = undefined;
	var pageParam = <%=prmStr%>;
	
	$(document).ready(function(){
		var el = $('#currentPageId');
		pagerEl = el.nextAll('.ui.grid');
		el.remove();
		pagerEl.attr('id', pagerId);
	});
</script>
