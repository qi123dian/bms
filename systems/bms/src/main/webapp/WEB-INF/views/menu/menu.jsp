<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page pageEncoding="UTF-8"%>
<%@page import="java.net.URLDecoder"%>
<%@page import="java.util.Enumeration"%>
<%@include file="../comm/taglib.jsp"%>

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

<!-- 主题页面容器 -->
<div class="ui grid" id="<%=pageId%>">
	<!-- 主体页面标题操作区域 -->
	<div class="sixteen wide column center-page-top">
		<!-- 页面内容 -->
		<div class="ui segment">
			<h5 class="ui dividing header">
				功能区
				<div class="sub header">页面操作功能区域</div>
			</h5>
			<button class="ui button">按钮 </button>
			<div class="ui button" tabindex="0">Focusable </div>
		</div>
	</div>
	
	<div class="sixteen wide column">
		<div class="ui segment">
			<div id="menuTreeContentId"></div>
		</div>
	</div>
</div>

<script type="text/javascript">
	var pageParam = <%=prmStr%>;
	var pageId = "<%=pageId%>";
</script>
<script type="text/javascript" src="<c:url value="/assets/resources/js/menu/menu.js" />"></script>
