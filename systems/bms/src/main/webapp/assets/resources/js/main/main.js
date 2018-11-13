/**
 * 用户档案
 */
; (function(window, document, $, hmg, _) {
	
	var profile = {
		options: {}, // 参数
		sAvatarImgContent: 'profileAvatarImgContentId', // 头像
		sBackgroundImgContent: 'profileBackgroundImgContentId', // 背景
		sTitleContent: 'profileTitleContentId', // 用户名称、用户编码
		sMenuListContent: 'profileMenuListContentId', // 用户菜单
		sAccordionBtId: 'profileAccordionBtId', // 菜单展开操作按钮
		sAccordionId: 'profileAccordionId' // 菜单
	}
	
	/**
	 * 设置用户信息
	 */
	function _fSetProfileInfo() {
		$(hmg.getJid(profile.sAvatarImgContent)).attr('src', hmg.getAppPath(profile.options.sAvatarImg));
		$(hmg.getJid(profile.sBackgroundImgContent)).css('background', 'url(' + hmg.getAppPath(profile.options.sBackgroundImg) + ') left top no-repeat').css('background-size', '100%');
		$(hmg.getJid(profile.sTitleContent)).text(profile.options.sTitle).attr('data-profile-id', profile.options.sId);
	}
	
	/**
	 * 菜单内容
	 */
	function _fOutProfileMenu(list) {
		var sHtm = '';
		var o = undefined;
		for(var i in list) {
			o = list[i];
			sHtm += _fOutMenuItem(o.sBtId, o.sTitle, o.sIcon);
		}
		return sHtm;
	}
	
	/**
	 * 菜单项
	 */
	function _fOutMenuItem(sId, sTitle, sIcon) {
		return '<button class="ui basic button" id="' + sId + '"><i class="' + sIcon + '"></i><span class="profile-bt-text">' + sTitle + '</span></button>';
	}
	
	/**
	 * 初始化
	 */
	function _fInitView(oOpt) {
		
		oOpt = $.extend({}, {
			sAvatarImg: '/assets/resources/img/main/profile-avatar1.jpg', // 头像
			sBackgroundImg: '/assets/resources/img/main/profile-background1.png', // 背景
			sTitle: '系统管理员', // 用户名称
			sId: 'admin', // 用户编码
			aMenuList: [{ // 用户操作按钮
				sTitle: '查看档案',
				sBtId: 'showProfileBtid',
				sUrl: '',
				sIcon: 'user icon'
			}, {
				sTitle: '系统设置',
				sBtId: 'settingSysBtId',
				sUrl: '',
				sIcon: 'cog icon'
			}, {
				sTitle: '退出系统',
				sBtId: 'outSysBtId',
				sUrl: '',
				sIcon: 'power icon'
			}]
		}, oOpt);
		
		profile.options = oOpt;
		
		// 初始化下拉菜单
		$(hmg.getJid(profile.sAccordionId)).accordion({
			duration: 100,
			onOpen: function() {
				// 替换右侧图标
				$(hmg.getJid(profile.sAccordionBtId + ' i'))[0].className= 'angle up icon';
			},
			onClose: function() {
				// 替换右侧图标
				$(hmg.getJid(profile.sAccordionBtId + ' i'))[0].className= 'angle down icon';
			}
		});
		
		// 菜单展开/合并事件
		$(hmg.getJid(profile.sAccordionBtId)).click(function() {
			$(hmg.getJid(profile.sAccordionId)).accordion('toggle', 0);
		});
		
		// 初始化菜单
		$(hmg.getJid(profile.sMenuListContent)).empty().append(_fOutProfileMenu(profile.options.aMenuList));
		
		// 初始化用户信息
		_fSetProfileInfo();
	}
	
	// 初始化用户档案
	_fInitView();
	
	hmg.Profile = profile;
	
})(window, document, $, hmg, _);

/**
 * 主页面
 */
; (function(window, document, $, hmg, _) {
	
	// 页面初始化
	function _initPage() {
		
		$('.ui.dropdown').dropdown();
		
		// 欢迎语
		hmg.info('欢迎光临！');
		
		// 初始化页面设置
		hmg.SettingPage.initView();
		
		// 默认标签页
		hmg.Tab.addTab({
			sId: 'template' + _.now(),
			sTitle: '模板界面',
			sUrl: '/page/template/template'
		});
		
		var dd = [{
			id: 'id1',
			icon: 'add to calendar icon',
			title: '网站设置',
			url: '',
			isChild: false,
			children: [{
				id: 'id1-1',
				icon: 'alarm outline icon',
				title: '基本设置',
				url: '',
				isChild: false,
				children: [{
					id: 'id1-1-1',
					icon: 'alarm mute outline icon',
					title: '个人设置',
					url: '',
					isChild: true,
					children: []
				}, {
					id: 'id1-1-2',
					icon: 'alarm mute icon',
					title: '公司设置',
					url: '',
					isChild: true,
					children: []
				}]
			}, {
				id: 'id1-2',
				title: '高级设置',
				icon: 'alarm icon',
				url: '',
				isChild: false,
				children: [{
					id: 'id1-2-1',
					icon: 'at icon',
					title: '参数设置',
					url: '',
					isChild: true,
					children: []
				}]
			}]
		}, {
			id: 'id2',
			title: '生成管理',
			icon: 'browser icon',
			url: '',
			isChild: false,
			children: [{
				id: 'id2-1',
				title: '生成首页',
				icon: 'bug icon',
				url: '',
				isChild: false,
				children: [{
					id: 'id2-1-1',
					title: '菜单1',
					icon: 'calendar outline icon',
					url: '',
					isChild: true,
					children: []
				}]
			}, {
				id: 'id2-2',
				title: '生成列表',
				icon: 'calendar icon',
				url: '',
				isChild: false,
				children: [{
					id: 'id2-2-1',
					icon: 'checked calendar icon',
					title: '菜单2',
					url: '',
					isChild: true,
					children: []
				}]
			}]
		}, {
			id: 'id3',
			title: '系统管理',
			icon: 'cloud icon',
			url: '',
			isChild: false,
			children: [{
				id: 'id3-1',
				title: '会员管理',
				icon: 'code icon',
				url: '',
				isChild: false,
				children: [{
					id: 'id3-1-1',
					title: '菜单3-1-1',
					icon: 'comment outline icon',
					url: '',
					isChild: true,
					children: []
				}, {
					id: 'id3-1-2',
					icon: 'comment icon',
					title: '菜单3-1-2',
					url: '',
					isChild: true,
					children: []
				}]
			}, {
				id: 'id3-2',
				title: '管理员设置',
				icon: 'comments outline icon',
				url: '',
				isChild: false,
				children: [{
					id: 'id3-2-1',
					title: '菜单3-2-1',
					icon: 'comments icon',
					url: '',
					isChild: true,
					children: []
				}, {
					id: 'id3-2-2',
					icon: 'copyright icon',
					title: '菜单3-2-2',
					url: '',
					isChild: true,
					children: []
				}]
			}, {
				id: 'id3-3',
				icon: 'creative commons icon',
				title: '其他',
				url: '',
				isChild: false,
				children: []
			}, {
				id: 'id3-4',
				icon: 'creative commons icon',
				title: '退出系统',
				url: '',
				isChild: true,
				children: []
			}]
		}, {
			id: 'id5',
			icon: 'creative commons icon',
			title: '测试标签页2',
			url: '/page/template/template',
			isChild: true,
			children: []
		}]
		
		function find(list, idsss) {
			var arr = [];
			for(var i in list) {
				if(!idsss) {
					arr.push(list[i]);
					continue;
				}
				if(list[i].children.length>0) {
					var arr1 = find(list[i].children, idsss);
					arr = arr.concat(arr1);
				}
				if(list[i].id == idsss) {
					arr = list[i].children;
				}
			}
			return arr;
		}
		
		// 初始化菜单
		hmg.Menu.initView({
			loadData: function(id) {
				return find(dd, id);
			}
		});
		
		hmg.ajax({
			url: hmg.getAppPath('rest/test/test'),
			method: 'POST',
			contentType: 'application/json',
			global: true,
			errorBefore: function(a, b, c, d, e, f) {
				this.fError.apply(this, arguments);
			},
			successBefore: function(a, b, c, d, e, f) {
				this.fSuccess.apply(this, arguments);
			},
			success: function(d) {
				console.log('success', d);
			},
			error: function(d) {
				console.log('error', d);
			},
			complete: function(d) {
				console.log('complete', d);
			}
		});
		
		/*$('#testBtId').click(function() {
			var sNow = _.now();
			hmg.Tab.addTab({
				sId: 'main' + sNow,
				sTitle: '模板界面' + sNow,
				sUrl: 'http://semantic-ui.cn/modules/accordion.html#/settings',// 'https://www.baidu.com',
				isIFrame: true
			});
			
			console.log(hmg.Tab.items);
		});*/
	};
	
	_initPage();
	
	var main = {
	};
	
	hmg.Main = main;
})(window, document, $, hmg, _);

