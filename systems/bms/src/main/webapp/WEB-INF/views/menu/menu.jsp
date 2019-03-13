<%@page pageEncoding="UTF-8"%>
<%@include file="../comm/taglib.jsp"%>
<%@include file="../comm/core-page.jsp"%>

<!-- 主题页面容器 -->
<div class="ui grid">
	<!-- 主体页面标题操作区域 -->
	<div class="sixteen wide column center-page-top">
		<!-- 页面内容 -->
		<div class="ui segment">
			<h5 class="ui dividing header">
				功能区
				<div class="sub header">页面操作功能区域</div>
			</h5>
			<div class="ui form">
				<div class="sixteen wide field alignright">
					<button class="ui button">按钮 </button>
					<div class="ui button" tabindex="0">Focusable </div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="sixteen wide column">
		<div class="ui segment">
			<table id="menuTreeContentId" class="display" width="100%"></table>
		</div>
	</div>
</div>
<script type="text/javascript" src="<c:url value="/assets/resources/js/menu/menu.js" />"></script>
