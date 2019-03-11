<%@page pageEncoding="UTF-8"%>
<%@include file="../comm/taglib.jsp"%>
<%@include file="../comm/core-page.jsp"%>

<!-- 主题页面容器 -->
<div class="ui grid" id="<%=pageId%>">
	<!-- 主体页面标题操作区域 -->
	<div class="sixteen wide column page-cls">
		<!-- 页面内容 -->
		<div class="ui segment" style="height: 200px;">
			left - center - left
		</div>
	</div>
	<div class="sixteen wide column">
		<div class="ui segment">
			<h5 class="ui dividing header">
				查询展现
			</h5>
			<div class="ui dividing form">
				<div class="four fields">
					<div class="field error">
						<label>First Name</label>
						<input placeholder="First Name" type="text">
					</div>
					<div class="field">
						<label>Last Name</label>
						<input placeholder="Last Name" type="text">
					</div>
					<div class="field error">
						<label>First Name</label>
						<input placeholder="First Name" type="text">
					</div>
					<div class="field">
						<label>Last Name</label>
						<input placeholder="Last Name" type="text">
					</div>
				</div>
				<div class="four fields">
					<div class="field error">
						<label>First Name</label>
						<input placeholder="First Name" type="text">
					</div>
					<div class="field">
						<label>Last Name</label>
						<input placeholder="Last Name" type="text">
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
				</div>
				<div class="fields">
					<div class="sixteen wide field alignright">
						<button class="ui button">查询 </button>
						<button class="ui button">查询 </button>
						<button class="ui button">查询 </button>
						<button class="ui button">查询 </button>
						<button class="ui button">查询 </button>
						<button class="ui button">查询 </button>
					</div>
				</div>
			</div>
			<table id="example" class="display" width="100%"></table>
		</div>
	</div>
	<div class="sixteen wide column">
		<div class="ui segment">
			<h5 class="ui dividing header">
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
			<h5 class="ui dividing header">
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
<script type="text/javascript" src="<c:url value="/assets/resources/js/template/template.js" />"></script>