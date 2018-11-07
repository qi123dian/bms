<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="UTF-8">
<title>Test Load Html</title>
<style>
	#boxId {
		border: 1px dashed red; width: 100%; height: 600px; background-color: yellow;
	}
	.spanClass {
		color: blue; font-weight: bold; font-size: 18px;
	}
</style>
<link rel="stylesheet" type="text/css" href="<c:url value="/assets/index2.css" />">
<script>
	$(document).ready(function(){
		var html = document.getElementById('boxId').innerHTML;
		html += '页面JavaScript代码<br/>';
		for(var i=0;i<20;i++) {
			html += '这是一行数据，当前第<span class="spanClass">' + i + '</span>行<br/>';
		}
		document.getElementById('boxId').innerHTML = html;
	})
</script>
<script src="<c:url value="/assets/index2.js" />"></script>
</head>
<body>
	<div id="boxId">
		
	</div>
</body>
</html>