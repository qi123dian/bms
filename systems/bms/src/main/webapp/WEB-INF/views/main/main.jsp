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
		<div class="main-top ui fixed borderless menu">
			<!-- 页面进度条 -->
			<!-- <div class="ui top attached progress warning">
				<div class="bar"></div>
			</div> -->
			<!-- 网站标题 -->
			<div class="item top-title">
				<div class="ui medium header">
					<h4>HamgoL</h4>
				</div>
			</div>
			
			<!-- 多页面标签 -->
			<div class="ui secondary pointing tabular menu top-tabmenu">
				<a class="item active" data-tab="tab-name" data-content="双击关闭">First</a>
				<a class="item" data-tab="tab-name2" data-content="双击关闭">Second</a>
				<a class="item" data-tab="tab-name3" data-content="双击关闭">Third</a>
			</div>
			
			<!-- 顶部菜单 -->
			<div class="right borderless item top-toolbar">
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
							<div class="header tree-menu-title"><i class="icon wifi"></i><span>Level Level Level Level Level Level Level Level Level Level 1 Level Level Level Level Level Level Level Level Level Level 1 Level Level Level Level Level Level Level Level Level Level 1 Level Level Level Level Level Level Level Level Level Level 1 Level Level Level Level Level Level Level Level Level Level 1</span></div>
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
			<div class="ui bottom attached tab active main-box" data-tab="tab-name">
				<div class="ui grid">
					<div class="sixteen wide column">
						<div class="ui segment" id="tabNameId1">
							First
						</div>
					</div>
				</div>
			</div>
			<div class="ui bottom attached tab main-box" data-tab="tab-name2">
				<div class="ui grid">
					<div class="sixteen wide column">
						<div class="ui segment">
							Second
						</div>
					</div>
				</div>
			</div>
			<div class="ui bottom attached tab main-box" data-tab="tab-name3">
				<div class="ui grid">
					<div class="sixteen wide column">
						<div class="ui segment">
							Third
						</div>
					</div>
				</div>
			</div>
			
			<!-- 主题页面容器 -->
			<div class="ui main-box">
				<div class="ui grid">
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
									左侧-中间-左侧
								</div>
							</div>
							<div class="column">
								<div class="ui segment" style="height: 400px;">
									left - center - right
								</div>
							</div>
						</div>
						<div class="ui two column grid">
							<div class="column">
								<div class="ui segment loading" style="height: 300px;">
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
						<div class="ui segment loading" style="height:  800px;">
							right
						</div>
					</div>
					<div class="sixteen wide column">
						<div class="ui segment" style="height: 200px;">
							I will no longer, as has ever been my habit, continue to ruminate on every petty vexation which fortune may dispense; I will enjoy the present, and the past shall be for me the past. 
							我绝不会再像以前一样，把命运加给我们的一点儿不幸拿来反复咀嚼(念念不忘)；我要享受现时，过去的事就让它过去吧。
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
								<div class="ui segment" style="height: 400px;">
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