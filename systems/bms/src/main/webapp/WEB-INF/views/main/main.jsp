<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../comm/taglib.jsp"%>

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Hamgol</title>
		
		<%@include file="../comm/core-css.jsp"%>
		<link rel="stylesheet" type="text/css" href="<c:url value="/assets/resources/css/main/main.css" />">
	</head>
	<body>
		<!-- 顶部菜单 -->
		<div class="main-top ui fixed borderless menu" id="topContentId">
			<!-- 网站标题 -->
			<div class="item top-title">
				<div class="ui medium header">
					<h4>HamgoL</h4>
				</div>
			</div>
			
			<!-- 多页面标签 -->
			<div class="ui secondary pointing tabular menu top-tabmenu" id="topTabHeadId"></div>
			
			<!-- 顶部菜单 -->
			<div class="right borderless item top-toolbar" id="topToolbarContentId">
				
				<div class="ui top left pointing dropdown category search top-search" id="topSearchBtId">
					<div class="ui icon input">
						<input class="prompt" type="text" placeholder="Search animals...">
						<i class="circular search link icon" id="topSearchQueryBtId"></i>
					</div>
					<div class="results" id="topSearchQueryResultContentId"><div class="category"><div class="name">Animals</div><div class="results"><a class="result"><div class="content"><div class="title">African Elephant</div><div class="description">Vulnerable</div></div></a><a class="result"><div class="content"><div class="title">African Wild Dog</div><div class="description">Endangered</div></div></a><a class="result"><div class="content"><div class="title">Albacore Tuna</div><div class="description">Near Threatened</div></div></a></div></div><div class="category"><div class="name">Animals</div><div class="results"><a class="result"><div class="content"><div class="title">African Elephant</div><div class="description">Vulnerable</div></div></a><a class="result"><div class="content"><div class="title">African Wild Dog</div><div class="description">Endangered</div></div></a><a class="result"><div class="content"><div class="title">Albacore Tuna</div><div class="description">Near Threatened</div></div></a></div></div><div class="category"><div class="name">Animals</div><div class="results"><a class="result"><div class="content"><div class="title">African Elephant</div><div class="description">Vulnerable</div></div></a><a class="result"><div class="content"><div class="title">African Wild Dog</div><div class="description">Endangered</div></div></a><a class="result"><div class="content"><div class="title">Albacore Tuna</div><div class="description">Near Threatened</div></div></a></div></div><div class="category"><div class="name">Passwords</div><div class="results"><a class="result"><div class="content"><div class="title">abc123</div></div></a><a class="result"><div class="content"><div class="title">andrew</div></div></a><a class="result"><div class="content"><div class="title">asshole</div></div></a></div></div><div class="category"><div class="name">Dogs</div><div class="results"><a class="result"><div class="content"><div class="title">Abby</div><div class="description">13th most popular Female name</div></div></a><a class="result"><div class="content"><div class="title">Abby</div><div class="description">53th most popular Female name</div></div></a><a class="result"><div class="content"><div class="title">Alex</div><div class="description">25th most popular Female name</div></div></a></div></div><div class="category"><div class="name">Cats</div><div class="results"><a class="result"><div class="content"><div class="title">Abby</div><div class="description">13th most popular Female name</div></div></a><a class="result"><div class="content"><div class="title">Abby</div><div class="description">53th most popular Female name</div></div></a><a class="result"><div class="content"><div class="title">Alex</div><div class="description">25th most popular Female name</div></div></a></div></div></div>
				</div>
				
				<!-- 顶部按钮区域 -->
				<div class="circular ui icon top left pointing dropdown button top-menu-botton">
					<i class="wrench icon"></i><div class="floating ui teal label">22</div>
					
					<div class="ui vertical massive menu top-menu-menu">
						<div class="header">
							<i class="calendar icon"></i> Filter by date
						</div>
						<div class="divider"></div>
						<div class="ui search icon input">
							<i class="search icon"></i>
							<input type="text" name="search" placeholder="Search issues...">
						</div>
						<div class="scrolling menu">
							<div class="item">
								<i class="olive circle icon"></i> This Week
							</div>
							<div class="item">
								<i class="violet circle icon"></i> This Month
							</div>
							<div class="item">
								<i class="orange circle icon"></i> This Year
							</div>
							<div class="item" data-value="jenny"><img class="ui mini avatar image" src="<c:url value="/assets/resources/img/main/avatar1.jpg" />"> Jenny Hess </div>
							<div class="item"><i class="conversation right floated icon"></i> Discussion </div>
							<div class="item">
								<i class="grid layout icon"></i> Browse
							</div>
							<div class="item">
								<span class="description">2 new</span>
								<span class="text">Important</span>
							</div>
							<div class="item">
								<h5 class="ui header">
									<img class="ui small avatar image" src="<c:url value="/assets/resources/img/main/avatar1.jpg" />">
									<div class="content">
										<span>账户设置账户设置账户设置账户设置账户设置</span>
										<div class="sub header">Manage your preferences Manage your preferences Manage your preferences Manage your preferences Manage your preferences Manage your preferences</div>
									</div>
								</h5>
							</div>
							<div class="item">
								<h5 class="ui header">
									<div class="content">
										<span>账户设置账户设置账户设置账户设置账户设置账户设置账户设置账户设置账户设置账户设置</span>
										<div class="sub header">Manage your preferences Manage your preferences Manage your preferences Manage your preferences Manage your preferences Manage your preferences</div>
									</div>
								</h5>
							</div>
							<div class="fitted item">
								<h5 class="ui header">
									<img class="ui small avatar image" src="<c:url value="/assets/resources/img/main/avatar1.jpg" />">
									<div class="content">
										<span>账户设置</span>
									</div>
								</h5>
							</div>
						</div>
						<div class="divider"></div>
						<div class="header top-menu-last-button">
							<a href="javascript:void(0)"><i class="icon wifi"></i>更多</a>
							<!-- <button class="ui fluid basic button"><i class="icon wifi"></i>WIFI</button> -->
						</div>
					</div>
					
				</div>
				
			</div>
		</div>
		
		<!-- 左侧菜单区域 -->
		<div class="main-left ui sidebar vertical menu visible" data-show-flag="1" id="leftContentId">
			<!-- 个人资料 -->
			<div class="card" id="profileBackgroundImgContentId">
				<div class="content">
					<img class="ui medium circular image" id="profileAvatarImgContentId" src="<c:url value="/assets/resources/img/main/avatar1.jpg" />">
				</div>
				<button class="fluid ui primary basic button" id="profileAccordionBtId"><span id="profileTitleContentId">Primary</span><i class="angle down icon"></i><div class="cleaxfix"></div></button>
			</div>
			
			<!-- 个人设置 -->
			<div class="main-menu ui accordion" id="profileAccordionId">
				<div class="title"><i class="dropdown icon"></i></div>
				<div class="content">
					<div class="ui vertical fluid buttons" id="profileMenuListContentId">
						<!-- 菜单内容 -->
					</div>
				</div>
			</div>
			
			<!-- 菜单 -->
			<div class="ui middle aligned list tree-menu-box">
				<div class="item" id="leftMenuBoxId">
					<!-- 菜单内容 -->
				</div>
			</div>
			
		</div>
		
		<!-- 网页主体 -->
		<div class="main-center" id="centerContentId">
			<!-- 页面主题内容 -->
		</div>
		
		<!-- 网页底部 -->
		<div class="main-footer">
			<div class="footer-box">
				<div class="ui vertical segment">
					<div class="ui center aligned container">
						<div class="ui section divider"></div>
						<div class="ui stackable grid">
							<div class="three wide column">
								<h4 class="ui header">社区</h4>
								<div class="ui link list">
									<a class="item" href="" target="_blank">协助翻译</a>
									<a class="item" href="" target="_blank">提交问题</a>
									<a class="item" href="" target="_blank">加入讨论</a>
									<a class="item" href="" target="_blank">CLA</a>
								</div>
							</div>
							<div class="three wide column">
								<h4 class="ui header">网络</h4>
								<div class="ui link list">
									<a class="item" href="" target="_blank">GitHub 库</a>
									<a class="item" href="" target="_blank">用户论坛</a>
									<a class="item" href="">1.x 版本文档</a>
									<a class="item" href="">0.x 版本文档</a>
								</div>
							</div>
							<div class="seven wide right floated column">
								<h4 class="ui header">帮助维持本项目</h4>
								<p> 社区为 Semantic UI 持续不断的发展提供了直接的支持。</p>
								<form action="" method="post" target="_top">
									<input type="hidden" name="cmd" value="_s-xclick">
									<input type="hidden" name="hosted_button_id" value="7ZAF2Q8DBZAQL">
									<button type="submit" class="ui large teal button">现在捐赠</button>
								</form>
							</div>
						</div>
						<div class="ui section divider"></div>
						<img src="<c:url value="/assets/resources/img/main/avatar1.jpg" />" class="ui centered mini image">
						<div class="ui horizontal small divided link list">
							<a class="item" href="" target="_blank">Free &amp; Open Source (MIT)</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<%@include file="../comm/core-js.jsp"%>
		<script type="text/javascript" src="<c:url value="/assets/resources/js/main/main.js" />"></script>
	</body>
</html>