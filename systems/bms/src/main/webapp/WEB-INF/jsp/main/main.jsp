<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../comm/taglib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Hamgol</title>
		
		<link rel="stylesheet" type="text/css" href="<c:url value="/assets/components/semantic-ui-v2.2/semantic.min.css" />">
		<link rel="stylesheet" type="text/css" href="<c:url value="/assets/components/malihu-custom-scrollbar-plugin-master-v3.1.5/jquery.mCustomScrollbar.css" />">
		
		<style>
			body {
				background-color: #f3f3f3;
			}
			
			/* main-top begin */
			.main-top.ui.menu {
				height: 5em;
				box-shadow: 0 1px 4px rgba(0,0,0,.3);
				border: none;
				background: #2196F3;
				color: #FFF;
				z-index: 1001;
			}
			.main-top .top-title {
				width: 19em;
			}
			.main-top .ui.medium.header {
				color: #FFF;
			}
			.main-top .right.borderless.item .search:not(.icon) {
				margin-right: 2em;
			}
			.main-top .right.borderless.item .button {
				margin-right: 2em;
				color: rgba(0,0,0,.87);
				background-color: #FFF;
			}
			.main-top .right.borderless.item .button .floating.ui.teal.label{
				padding: .3833em .533em;
				background-color: red !important;
			}
			.main-top .right.borderless.item .dropdown.button .vertical.menu .scrolling.menu {
				margin: 0!important;
			}
			/* main-top end */
			
			/* main-left begin */
			.main-left.ui.sidebar {
				z-index: 100;
				padding-top: 5em;
				box-shadow: 0 1px 1px rgba(0,0,0,.1);
			}
			.main-left.ui.vertical.menu {
				width: 19em;
			}
			.main-left.ui.menu {
				border: none;
			}
			.main-left .card {
				height: 9em;
				background: url(/bms/assets/resources/img/main/profile-menu.png) left top no-repeat;
				background-size: 100%;
			}
			.main-left .card .content {
				height: 6.7em;
				padding-top: 0.9em;
				padding-left: 0.9em;
			}
			.main-left .card .content .image {
				border: 3px solid rgba(0,0,0,.14);
			}
			.main-left .card .ui.button {
				padding: .7em .5em .7em 1em;
				border-radius: 0;
			}
			.main-left .card .ui.basic.button {
				background: rgba(0,0,0,.37) !important;
				-webkit-box-shadow: 0 0 0 0 #2185d0 inset!important;
				box-shadow: 0 0 0 0 #2185d0 inset!important;
				border-radius: 0;
			}
			.main-left .card .ui.basic.primary.button {
				color: #FFF !important;
			}
			.main-left .card .button span {
				float: left;
				color: #FFF;
			}
			.main-left .card .button .icon {
				float: right;
				color: #FFF;
			}
			.main-left .card .image {
				width: 52px;
				height: 52px;
			}
			.main-left .main-menu.accordion .title {
				display: none;
			}
			.main-left .main-menu.accordion .content .buttons .ui.button {
				color: #262626 !important;
				font-weight: 500 !important;
				text-align: center;
				padding: 1em 1.5em 1em 2em;
				font-weight: bold;
			}
			.main-left .main-menu.accordion .content .buttons .button:hover {
				background: #f7f7f7 !important;
			}
			.main-left .main-menu.accordion .content .buttons .ui.button .icon {
				margin: 0 1.5em 0 -.21428571em;
			}
			.main-left .tree-menu-box .accordion .right.floated.content {
				margin-top: 2px;
			}
			.main-left .tree-menu-box .accordion .title .tree-menu-title {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.main-left .tree-menu-box .tree-menu.ui.accordion .accordion {
				margin: 0;
			}
			.main-left .tree-menu-box .tree-menu.ui.accordion .accordion .title {
				padding: 1em 1em 1em 1em;
				border-left: 2px solid #e0e1e2;
			}
			.main-left .tree-menu-box .accordion .title .header {
				font-weight: 400;
			}
			.main-left .tree-menu-box .tree-menu.ui.accordion .title {
				padding: 1em 1em 1em 1em;
			}
			.main-left .tree-menu-box .tree-menu.ui.accordion .content:not(.floated) {
				padding: 0 0 0 2em;
			}
			.main-left .tree-menu-box .tree-menu.ui.accordion .title .header .icon {
				margin: 0 1rem 0 0;
			}
			/* main-left end */
			
			/* main-center begin */
			.main-center {
				width: 100%;
				padding-left: 19em;
				padding-top: 5em;
				padding-right: 0;
				padding-bottom: 0;
			}
			.main-center .main-box {
				padding: 1em 2em 1em 2em;
			}
			.main-center .main-box .ui.secondary.menu {
				margin: 0;
				height: 4em;
			}
			.main-center .main-box>.ui.segment {
				margin-top: 0;
				border-width: 0px;
				border-radius: 2px;
				box-shadow: 0 1px 1px rgba(0,0,0,.1);
			}
			.main-center .main-box .column>.ui.segment {
				margin-top: 0;
				border-width: 0px;
				border-radius: 2px;
				box-shadow: 0 1px 1px rgba(0,0,0,.1);
			}
			.main-center .main-box .ui.header {
				color: #777 !important;
				font-weight: 400 !important;
			}
			.main-center .main-box .right.item .button {
				margin-right: .5em;
			}
			.main-center .main-box .right.item .ui.button {
				background: transparent;
			}
			.main-center .main-box .ui.segment .header {
				padding: 1em;
				color: #000;
			}
			.main-center .main-box .ui.segment .sub.header {
				padding: .6em 0;
				color: #777;
			}
			/* main-center end */
			
			/* main-footer begin */
			.main-footer {
				width: 100%;
				padding-left: 19em;
				padding-top: 0;
				padding-right: 0;
				padding-bottom: 0;
			}
			.main-footer .footer-box {
				padding: 1em 2em 1em 2em;
			}
			/* main-footer end */
			
			/* common begin */
			.cleaxfix {
				clear: both;
			}
			/* common end */
		</style>
	</head>
	<body>
		<!-- 顶部菜单 -->
		<div class="main-top ui fixed borderless menu">
			<!-- 网站标题 -->
			<div class="item top-title">
				<div class="ui medium header">
					<h4>HamgoL</h4>
				</div>
			</div>
			
			<!-- 多页面标签 -->
			<div class="ui secondary pointing tabular menu top-tabmenu">
				<a class="item" data-tab="tab-name">Link</a>
				<a class="item active" data-tab="tab-name2">Link</a>
				<a class="item" data-tab="tab-name3">Link</a>
			</div>
			
			<!-- 顶部菜单 -->
			<div class="right borderless item">
				<div class="ui fluid category search">
					<div class="ui icon input">
						<input class="prompt" type="text" placeholder="搜寻动物……">
						<i class="search icon"></i>
					</div>
					<div class="results"></div>
				</div>
				<button class="circular ui icon button">
					<i class="icon settings"></i>
					<div class="floating ui teal label">22</div>
				</button>
				<div class="circular ui icon top left pointing dropdown button">
					<i class="wrench icon"></i><div class="floating ui teal label">99+</div>
				</div>
				
				<div class="circular ui icon top left pointing dropdown button">
					<i class="wrench icon"></i><div class="floating ui teal label">22</div>
					
					<div class="ui vertical massive menu">
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
										账户设置 <div class="sub header">Manage your preferences</div>
									</div>
								</h5>
							</div>
						</div>
						<div class="divider"></div>
						<div class="header">
							<button class="ui fluid basic button"><i class="icon wifi"></i>WIFI</button>
						</div>
					</div>
					
				</div>
				
			</div>
		</div>
		
		<!-- 左侧菜单区域 -->
		<div class="main-left ui sidebar vertical menu visible">
			<!-- 个人资料 -->
			<div class="card">
				<div class="content">
					<img class="ui medium circular image" src="<c:url value="/assets/resources/img/main/avatar1.jpg" />">
				</div>
				<button class="fluid ui primary basic button" id="accordionBtId"><span>Primary</span><i class="angle down icon"></i><div class="cleaxfix"></div></button>
			</div>
			
			<!-- 个人设置 -->
			<div class="main-menu ui accordion">
				<div class="title"><i class="dropdown icon"></i></div>
				<div class="content">
					<div class="ui vertical fluid buttons">
						<button class="ui basic button"><i class="icon user"></i>User</button>
						<button class="ui basic button"><i class="icon music"></i>Music</button>
						<button class="ui basic button"><i class="icon wifi"></i>WIFI</button>
						<button class="ui basic button"><i class="icon cog"></i>Settings</button>
						<button class="ui basic button"><i class="icon calendar outline"></i>Date</button>
					</div>
				</div>
			</div>
			
			<!-- 菜单 -->
			<div class="tree-menu-box ui middle aligned list">
				<div class="item">
					<div class="ui accordion tree-menu">
						<div class="title">
							<div class="right floated content">
								<i class="dropdown icon"></i>
							</div>
							<div class="header tree-menu-title"><i class="icon wifi"></i>Level Level Level Level Level Level Level Level Level Level 1 Level Level Level Level Level Level Level Level Level Level 1 Level Level Level Level Level Level Level Level Level Level 1 Level Level Level Level Level Level Level Level Level Level 1 Level Level Level Level Level Level Level Level Level Level 1</div>
						</div>
						<div class="content">
							<div class="accordion">
								<div class="title">
									<div class="right floated content">
										<i class="dropdown icon"></i>
									</div>
									<div class="header tree-menu-title"><i class="icon wifi"></i> Level Level Level Level Level Level Level Level Level Level 1A</div>
								</div>
								<div class="content">
									<div class="accordion">
										<div class="title">
											<div class="right floated content">
												<i class="dropdown icon"></i>
											</div>
											<div class="header tree-menu-title">Level Level Level Level Level Level Level Level Level Level 1A-A</div>
										</div>
										<div class="content">
										</div>
										<div class="title">
											<div class="right floated content">
												<i class="dropdown icon"></i>
											</div>
											<div class="header tree-menu-title">Level Level Level Level Level Level Level Level Level Level 1A-B</div>
										</div>
										<div class="content">
										</div>
									</div>
								</div>
								<div class="title">
									<div class="right floated content">
										<i class="dropdown icon"></i>
									</div>
									<div class="header tree-menu-title"><i class="icon wifi"></i> Level Level Level Level Level Level Level Level Level Level 1B</div>
								</div>
								<div class="content">
								</div>
								<div class="title">
									<div class="right floated content">
										<i class="dropdown icon"></i>
									</div>
									<div class="header tree-menu-title"><i class="icon wifi"></i> Level Level Level Level Level Level Level Level Level Level 1C</div>
								</div>
								<div class="content">
								</div>
							</div>
						</div>
						<div class="title">
							<div class="right floated content">
								<i class="dropdown icon"></i>
							</div>
							<div class="header tree-menu-title"><i class="icon wifi"></i> Level Level Level Level Level Level Level Level Level Level 2</div>
						</div>
						<div class="content">
							<div class="accordion">
								<div class="title">
									<div class="right floated content">
										<i class="dropdown icon"></i>
									</div>
									<div class="header tree-menu-title"><i class="icon wifi"></i> Level Level Level Level Level Level Level Level Level Level 2A</div>
								</div>
								<div class="content">
									<div class="accordion">
										<div class="title">
											<div class="right floated content">
												<i class="dropdown icon"></i>
											</div>
											<div class="header tree-menu-title"><i class="icon wifi"></i> Level Level Level Level Level Level Level Level Level Level 2A-A</div>
										</div>
										<div class="content">
										</div>
										<div class="title">
											<div class="right floated content">
												<i class="dropdown icon"></i>
											</div>
											<div class="header tree-menu-title"><i class="icon wifi"></i> Level Level Level Level Level Level Level Level Level Level 2A-B</div>
										</div>
										<div class="content">
										</div>
									</div>
								</div>
								<div class="title">
									<div class="right floated content">
										<i class="dropdown icon"></i>
									</div>
									<div class="header tree-menu-title"><i class="icon wifi"></i> Level Level Level Level Level Level Level Level Level Level 2B</div>
								</div>
								<div class="content">
								</div>
								<div class="title">
									<div class="right floated content">
										<i class="dropdown icon"></i>
									</div>
									<div class="header tree-menu-title"><i class="icon wifi"></i> Level Level Level Level Level Level Level Level Level Level 2C</div>
								</div>
								<div class="content">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
		
		<!-- 网页主体 -->
		<div class="main-center">
			<!-- 主题页面容器 -->
			<div class="ui grid main-box">
				<!-- 主体页面标题操作区域 -->
				<div class="sixteen wide column">
					<div class="ui secondary menu page-header">
						<!-- 页面标题 -->
						<div class="item">
							<div class="ui medium header">
								<h4 class="ui header">
									<i class="settings icon"></i>
									<div class="content">
										账户设置
										<div class="sub header">Manage your preferences</div>
									</div>
								</h4>
							</div>
						</div>
						<!-- 页面操作 -->
						<div class="right borderless item">
							<button class="circular ui icon button">
								<i class="icon settings"></i>
							</button>
							<button class="circular ui icon button">
								<i class="icon question circle outline"></i>
							</button>
							<button class="circular ui icon button">
								<i class="icon ellipsis vertical"></i>
							</button>
						</div>
					</div>
					<!-- 页面内容 -->
					<div class="ui segment" style="height: 200px;">
						left - center - left
					</div>
				</div>
				<div class="sixteen wide column">
					<div class="ui segment">
						<h5 class="ui header">
							账户设置
							<div class="sub header">管理你的账户设置并设置邮箱</div>
						</h5>
						
						<table class="ui very basic table">
							<thead>
								<tr>
									<th>Name</th>
									<th>Status</th>
									<th>Notes</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>约翰</td>
									<td>已审核</td>
									<td>None</td>
								</tr>
								<tr>
									<td>杰米</td>
									<td>已审核</td>
									<td>必须回答</td>
								</tr>
								<tr>
									<td>吉尔</td>
									<td>Denied</td>
									<td>None</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="sixteen wide column">
					<div class="ui segment">
						<h5 class="ui header">
							账户设置
							<div class="sub header">管理你的账户设置并设置邮箱</div>
						</h5>
						
						<div class="ui form">
							<div class="two fields">
								<div class="field error">
									<label>First Name</label>
									<input placeholder="First Name" type="text">
								</div>
								<div class="field">
									<label>Last Name</label>
									<input placeholder="Last Name" type="text">
								</div>
							</div>
							<div class="field error">
								<label>Gender</label>
								<div class="ui selection dropdown">
									<div class="default text">Select</div>
									<i class="dropdown icon"></i>
									<input type="hidden" name="gender">
									<div class="menu">
										<div class="item" data-value="male">Male</div>
										<div class="item" data-value="female">Female</div>
									</div>
								</div>
							</div>
							<div class="inline field error">
								<div class="ui checkbox">
									<input type="checkbox" tabindex="0" class="hidden">
									<label>我同意本条款和条件</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				
				<div class="ten wide column">
					<div class="ui column grid">
						<div class="column">
							<div class="ui segment" style="height: 100px;">
								left - top
							</div>
						</div>
					</div>
					<div class="ui two column grid">
						<div class="column">
							<div class="ui segment" style="height: 200px;">
								left - center - left
							</div>
						</div>
						<div class="column">
							<div class="ui segment" style="height: 200px;">
								left - center - right
							</div>
						</div>
					</div>
					<div class="ui two column grid">
						<div class="column">
							<div class="ui segment" style="height: 200px;">
								left - center - left
							</div>
						</div>
						<div class="column">
							<div class="ui segment" style="height: 200px;">
								left - center - right
							</div>
						</div>
					</div>
				</div>
				<div class="six wide column">
					<div class="ui segment" style="height:  800px;">
						right
					</div>
				</div>
				<div class="sixteen wide column">
					<div class="ui segment" style="height: 200px;">
						left - center - right
					</div>
				</div>
				<div class="ten wide column">
					<div class="ui two column grid">
						<div class="column">
							<div class="ui segment" style="height: 200px;">
								left - center - right11111111111111
							</div>
						</div>
						<div class="column">
							<div class="ui segment" style="height: 200px;">
								left - center - right11111111111111
							</div>
						</div>
					</div>
					<div class="ui column grid">
						<div class="column">
							<div class="ui segment" style="height: 200px;">
								left - center - right11111111111111
							</div>
						</div>
					</div>
				</div>
				<div class="six wide column">
					<div class="ui column grid">
						<div class="column">
							<div class="ui segment" style="height: 200px;">
								left - center - right
							</div>
						</div>
					</div>
					<div class="ui column grid">
						<div class="column">
							<div class="ui segment" style="height: 200px;">
								left - center - right
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- 网页底部 -->
		<div class="main-footer">
			<div class="footer-box">
				<div class="ui vertical segment">
					<div class="ui center aligned container">
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
		
		<script type="text/javascript" src="<c:url value="/assets/components/jquery-v3.1.1/dist/jquery.min.js" />"></script>
		<script type="text/javascript" src="<c:url value="/assets/components/semantic-ui-v2.2/semantic.min.js" />"></script>
		<script type="text/javascript" src="<c:url value="/assets/components/malihu-custom-scrollbar-plugin-master-v3.1.5/jquery.mCustomScrollbar.concat.min.js" />"></script>
		
		<script type="text/javascript">
			// $('.main-box').dimmer('show');
			
			$('.ui.accordion').accordion({
				duration: 100
			});
			
			$('.ui.dropdown').dropdown();
			
			$('.ui.accordion.tree-menu').accordion({
				duration: 100,
				exclusive: false
			});
			
			$('.tabular.menu .item').tab();
			
			$('#accordionBtId').click(function() {
				console.log('---------------------------------------------------------------');
				$('.main-menu.ui.accordion').accordion('toggle', 0);
			});
		</script>
	</body>
</html>