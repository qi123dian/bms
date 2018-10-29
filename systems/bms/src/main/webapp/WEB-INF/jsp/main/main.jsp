<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../comm/taglib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>HagmoL</title>
		
		<link rel="stylesheet" type="text/css" href="<c:url value="/assets/components/semantic-ui-v2.2/semantic.min.css" />">
		
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
			}
			.main-top .ui.header {
				color: #FFF;
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
			/* main-left end */
			
			/* main-center begin */
			.main-center {
				width: 100%;
				padding-left: 20em;
				padding-top: 6em;
				padding-right: 1em;
			}
			.main-center .main-box {
				margin-bottom: 1em;
			}
			.main-center .main-box .ui.secondary.menu {
				margin: 0;
				height: 4em;
			}
			.main-center .main-box .ui.segment {
				margin-top: 0;
				border-width: 0px;
				border-radius: 2px;
				box-shadow: 0 1px 1px rgba(0,0,0,.1);
			}
			.main-center .main-box .ui.header {
				color: #777;
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
			
			/* common begin */
			.cleaxfix {
				clear: both;
			}
			/* common end */
		</style>
	</head>
	<body>
		
		<div class="main-top ui fixed borderless menu">
			<div class="item">
				<div class="ui medium header">
					<h4>Uptime Guarantee </h4>
				</div>
			</div>
			<div class="right borderless item">
				<button class="circular ui icon button">
					<i class="icon settings"></i>
					<div class="floating ui teal label">22</div>
				</button>
			</div>
		</div>
		
		<div class="main-left ui sidebar vertical menu visible">
			<div class="card">
				<div class="content">
					<img class="ui medium circular image" src="<c:url value="/assets/resources/img/main/avatar1.jpg" />">
				</div>
				<button class="fluid ui primary basic button"><span>Primary</span><i class="angle down icon"></i><div class="cleaxfix"></div></button>
				
			</div>
			
			<a class="item">
				1
			</a>
			<a class="item">
				2
			</a>
			<a class="item">
				3
			</a>
		</div>
		
		<div class="main-center">
			<div class="main-box">
				<div class="ui secondary menu">
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
				
				<div class="ui segment">
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
				</div>
				
				<div class="ui horizontal segments">
					<div class="ui segment">
						<p>Top</p>
					</div>
					<div class="ui segment">
						<p>Middle</p>
					</div>
					<div class="ui segment">
						<p>Bottom</p>
					</div>
				</div>
			</div>
			
			<div class="main-box">
			
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
			
		</div>
		
		<script type="text/javascript" src="<c:url value="/assets/components/jquery/dist/jquery.min.js" />"></script>
		<script type="text/javascript" src="<c:url value="/assets/components/semantic-ui-v2.2/semantic.min.js" />"></script>
		
		<script>
		</script>
	</body>
</html>