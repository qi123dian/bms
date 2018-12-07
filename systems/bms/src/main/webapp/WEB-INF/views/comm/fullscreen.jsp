<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../comm/taglib.jsp"%>
<%
String pageId = "id" + new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date());
String pageUrl = request.getParameter("pageUrl");
pageUrl = pageUrl==null?"":pageUrl;
pageUrl = pageUrl.replace("/bms/page/", "../");
pageUrl = pageUrl + ".jsp";
%>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Hamgol</title>
		
		<%@include file="../comm/core-css.jsp"%>
		<link rel="stylesheet" type="text/css" href="<c:url value="/assets/resources/css/main/main.css" />">
		<style>
			.main-center {
				padding-left: 0;
				padding-top: 0;
			}
		</style>
		<%@include file="../comm/core-js.jsp"%>
	</head>
	<body>
		<!-- 网页主体 -->
		<div class="main-center" id="centerContentId">
			<!-- 页面主题内容 -->
			<div class="ui main-box" id="<%=pageId%>">
				<jsp:include page="<%=pageUrl%>"></jsp:include>
			</div>
		</div>
		
	</body>
</html>