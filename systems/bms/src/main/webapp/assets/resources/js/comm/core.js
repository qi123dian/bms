
; (function(window, document, $, hmg, _) {
	
	var comm = {
		variable: {
			
		},
		elId: {
			topContentId: 'topContentId', // 头部元素编码
			topToolbarContentId: 'topToolbarContentId',
			leftContentId: 'leftContentId',
			centerContentId: 'centerContentId'
		}
	}
	
	hmg.Comm = comm;
	
})(window, document, $, hmg, _);

/**
 * 工具类
 */
; (function(window, document, $, hmg, _) {
	
	var util = {
		getMsg: _fGetMsg,
		error: _fError,
		info: _fInfo
	};
	
	/**
	 * 获取jQuery id选择器
	 */
	function _fGetJqueryIdSelect(s) {
		return /^#/.test(s)?s:('#' + s);
	}
	
	function _fGetJqueryEl(s) {
		return $(_fGetJqueryIdSelect(s));
	}
	
	/**
	 * 获取打印消息内容
	 */
	function _fGetPrintMsg() {
		if(arguments.length==0) {
			return;
		} if(arguments.length==2) {
			return (_fGetMsg(arguments[0], arguments[1]));
		} else {
			return (arguments[0]);
		}
	}
	
	/**
	 * 打印错误信息
	 */
	function _fError() {
		if(s = _fGetPrintMsg.apply(this, arguments))
			toastr.error(s);
	}
	
	/**
	 * 打印错误信息
	 */
	function _fInfo() {
		if(s = _fGetPrintMsg.apply(this, arguments))
			toastr.info(s);
	}
	
	/**
	 * 获取消息内容
	 */
	function _fGetMsg(sModule, sMsg) {
		return hmg.Local.messages[hmg.Local.language][sModule][sMsg];
	}
	
	/**
	 * 获取完整请求地址
	 */
	function _fGetAppPath(sUrl) {
		if(sUrl)
			return _fGetRootPath() + (/^\//.test(sUrl)?sUrl:'/'+sUrl);
		else
			return sUrl;
	}
	
	/**
	 * 获取项目名称
	 */
	function _fGetRootPath() {
		return hmg.basePath;
	}
	
	hmg.Util = util;
	
	hmg.getMsg = hmg.Util.getMsg; // 简写
	hmg.error = hmg.Util.error; // 简写
	hmg.info = hmg.Util.info; // 简写
	hmg.getAppPath = _fGetAppPath; // 获取完整请求地址
	hmg.getRootPath = _fGetRootPath; // 简写
	hmg.getJid = _fGetJqueryIdSelect;
	hmg.getJel = _fGetJqueryEl;
})(window, document, $, hmg, _);

/**
 * 核心类
 */
; (function(window, document, $, hmg, _) {
	
	var core = {
		ajax: _fCustomAjax,
		get: _fCustomGet,
		successBefore: function() {
			this.successBefore.apply(this, arguments);
		},
		errorBefore: function() {
			this.errorBefore.apply(this, arguments);
		},
		completeBefore: function() {
			this.completeBefore.apply(this, arguments);
		}
	}
	
	/**
	 * 封装jQuery Ajax
	 */
	function _fCustomAjax(oOpt) {
		oOpt = oOpt?oOpt:{};
		
		oOpt = $.extend({}, {
			success: function() {},
			global: true,
			error: function() {},
			complete: function() {},
			fSuccess: function() {},
			fError: function() {},
			fComplete: function() {},
			successBefore: function() {
				this.fSuccess.apply(this, arguments);
			},
			errorBefore: function() {
				this.fError.apply(this, arguments);
			},
			completeBefore: function() {
				this.fComplete.apply(this, arguments);
			}
		}, oOpt);
		
		var oPrm = $.extend({}, oOpt);
		
		oPrm.fSuccess = oOpt.success;
		oPrm.fError = oOpt.error;
		oPrm.fComplete = oOpt.complete;
		
		// 在jQuery Ajax在success、error、complete方法执行之前添加before方法
		oPrm.success = function() {
			core.successBefore.apply(this, arguments);
		}
		oPrm.error = function() {
			core.errorBefore.apply(this, arguments);
		}
		oPrm.complete = function() {
			core.completeBefore.apply(this, arguments);
		}
		
		return $.ajax(oPrm);
	}
	
	/**
	 * 封装jQuery Get
	 */
	function _fCustomGet() {
		
		var aArr = [];
		
		for(var i=0;i<arguments.length;i++) {
			if($.isFunction(arguments[i])) {
				var fFn = arguments[i];
				aArr.push(function() {
					if(core.successBefore.apply(this, arguments))
						fFn.apply(this, arguments);
				});
			} else {
				aArr.push(arguments[i]);
			}
		}
		
		return $.get.apply(this, aArr);
	}
	
	hmg.Core = core;
	
	hmg.ajax = _fCustomAjax; // jQuery Ajax封装
	hmg.get = _fCustomGet; // jQuery Get封装
	
})(window, document, $, hmg, _);

/**
 * 菜单
 */
; (function(window, document, $, hmg, _) {
	
	var menu = {
		options: {},
		oData: [], // 菜单数据
		sContentId: 'leftMenuBoxId',
		initView: _fInitView,
		loadChild: _fOutViewChilds,
		loading: _fLoading,
		sMenuItemTitleIdFix: 'mt_',
		sMenuItemContentIdFix: 'mc_',
		sMenuItemLoadIconIdFix: 'mli_',
		sMenuItemIconIdFix: 'mi_',
		menuCtrl: _fControlLeftMenu
	};
	
	/**
	 * 获取菜单项
	 */
	function _fOutItem(sId, sTitle, sUrl, sIcon, isChild) {
		sId = sId?sId:'';
		var sElId = sId + _.now();
		var sRightHtm = '    <div class="right floated content">'
			+ '        <i class="dropdown icon"></i>'
			+ '    </div>';
		var sChildTitleClass = ' child';
		var sChildBoxHtm = '<div class="content" data-menu-id="' + sId + '" data-menu-elid="' + sElId + '" data-menu-url="' + sUrl + '" data-menu-title="' + sTitle + '" data-menu-ischild="' + (isChild?'1':'0') + '" data-menu-isload="0" id="' + menu.sMenuItemTitleIdFix + sElId + '"></div>'
		var sIconHtm = '<i class="' + sIcon + '" id="' + menu.sMenuItemIconIdFix + sElId + '"></i>';
		
		if(!sIcon) {
			sIconHtm = '';
		}
		if(isChild) {
			sRightHtm = '';
			childBoxHtm = '';
		} else {
			sChildTitleClass = '';
		}
		
		return '<div class="title" id="' + menu.sMenuItemContentIdFix + sElId + '">'
			+ sRightHtm
			+ '    <div class="header tree-menu-title' + sChildTitleClass + '">'
			+ '        <i class="icon ui tiny active inline loader" id="' + menu.sMenuItemLoadIconIdFix + sElId + '" style="display: none;"></i>'
			+ '        ' + sIconHtm
			+ '        <span">' + sTitle + '</span>'
			+ '    </div>'
			+ '</div>'
			+ sChildBoxHtm;
	}
	
	/**
	 * 创建菜单项
	 */
	function _fOutView(list, isRoot) {
		var sItemsHtm = '';
		for(var i in list) {
			sItemsHtm += _fOutItem(list[i].id, list[i].title, list[i].url, list[i].icon, list[i].isChild);
		}
		
		var sRootClass = isRoot?'ui ':'';
		return '<div class="' + sRootClass + 'accordion tree-menu">'
		+ sItemsHtm;
		+ '</div>'
	}
	
	/**
	 * 创建子菜单
	 */
	function _fOutViewChilds($el, sPid, isRoot) {
		
		sPid = sPid?sPid:'';
		
		$el.empty();
		
		// 获取数据
		var aFnPrm = [sPid]; // 方法传递参数
		var aList = menu.options.loadData.apply(menu, aFnPrm); // 自定义获取数据，注意ajax请求必须为同步
		
		if(aList && _.isArray(aList)) {
			
			// 渲染子菜单，设置已读取状态
			var sHtm = _fOutView(aList, isRoot);
			$el.append(sHtm).attr('data-menu-isload', '1');
			
			/**
			 * TODO 维护menu.oData
			 */
			
			if(isRoot) {
				// 初始化一次插件
				$(hmg.getJid(menu.sContentId + ' .ui.accordion')).accordion({
					duration: 100,
					exclusive: false,
					onOpening: function(a, b, c) {
					},
					onOpen: function() {
						
						var self = $(this);
						var sElId = _fGetElId(self); // 获取元素id
						var sId = _fGetId(self);
						var sTitle = self.attr('data-menu-title');
						var sUrl = self.attr('data-menu-url');
						
						// 校验是否为叶子节点
						if(self.attr('data-menu-ischild')==='1') {
							// 菜单单击事件
							hmg.Tab.addTab({
								sId: sId + _.now(),
								sTitle: sTitle,
								sUrl: sUrl
							});
							
							return false;
						}
						
						// 校验是否重新加载已加载内容
						if(!menu.options.isChildRefresh && self.attr('data-menu-isload')==='1') {
							return false;
						}
						
						_fLoading(sElId, true); // 显示Loading
						
						_fOutViewChilds(self, sId, false); // 渲染
						
						_fLoading(sElId, false); // 关闭Loading
					}
				});
			}
		} else {
			// 数据加载失败时，可以重新加载数据
			$el.attr('data-menu-isload', '0');
		}
		return true;
	}
	
	/**
	 * Loading
	 */
	function _fLoading(sElId, isShow) {
		if(isShow) {
			$(hmg.getJid(menu.sMenuItemIconIdFix + sElId)).hide();
			$(hmg.getJid(menu.sMenuItemLoadIconIdFix + sElId)).show();
		} else {
			$(hmg.getJid(menu.sMenuItemLoadIconIdFix + sElId)).hide();
			$(hmg.getJid(menu.sMenuItemIconIdFix + sElId)).show();
		}
	}
	
	/**
	 * 获取菜单id
	 */
	function _fGetId($el) {
		return $el.attr('data-menu-id');
	}
	
	/**
	 * 获取元素编码
	 */
	function _fGetElId($el) {
		return $el.attr('data-menu-elid');
	}
	
	/**
	 * 初始化菜单页面
	 */
	function _fInitView(oOpt) {
		
		oOpt = $.extend({}, {
			loadData: function() {
				return [];
			},
			isChildRefresh: false // 指示子节点每次展开需要重新获取数据
		}, oOpt);
		
		menu.options = oOpt;
		
		// 加载根节点
		_fOutViewChilds($(hmg.getJid(menu.sContentId)), '', true);
	}
	
	// 左侧菜单显示/隐藏
	function _fControlLeftMenu() {
		var self = $(this);
		var $el = $(hmg.getJid(hmg.Comm.elId.leftContentId));
		if($el.attr('data-show-flag')=='1') {
			$el.animate({
				'left': '-20em'
			}, function() {
				$el.attr('data-show-flag', '0');
				self.find('span').text('显示左侧菜单');
			});
			$('.main-center').animate({'padding-left': '0em'});
			$('.main-footer').animate({'padding-left': '0em'});
		} else {
			$('.main-center').animate({'padding-left': '19em'});
			$('.main-footer').animate({'padding-left': '19em'});
			$el.animate({
				'left': '0'
			}, function() {
				$el.attr('data-show-flag', '1');
				self.find('span').text('隐藏左侧菜单');
			});
		}
	}
	
	hmg.Menu = menu;
})(window, document, $, hmg, _);

/**
 * 标签页
 */
; (function(window, document, $, hmg) {
	
	var tab = {
		headId: 'topTabHeadId',
		addTab: _fAddTab,
		removeTab: _fRemoveTab,
		items: []
	};
	
	/**
	 * 标签页操作HTML
	 */
	function _fOutHeadView(sId, sHeadId, sTitle, isActive) {
		var sActive = isActive?' active':'';
		return '<a class="item' + sActive + '" data-tab="' + sId + '" data-content="双击关闭" id="' + sHeadId + '">' + sTitle + '</a>'
	}
	
	/**
	 * 标签页内容HTML
	 */
	function _fOutContentView(sId, sContentId, isActive, isLoading, sIFrameId) {
		var sActive = isActive?' active':'';
		var loading = isLoading?' loading':'';
		return '<div class="ui bottom attached tab' + sActive + ' main-box' + loading + '" data-tab="' + sId + '" id="' + sContentId + '">'
		+ (sIFrameId?'<iframe style="border-width: 0px; width: 100%;" id="' + sIFrameId + '" width="100%" src=""></iframe>':'')
		+ '</div>';
	}
	
	/**
	 * 加载内容
	 */
	function _fLoadView(sId, sHtml) {
		$('#content_' + sId).empty().html(sHtml);
	}
	
	/**
	 * Loading
	 */
	function _fLoading(sId, isShow) {
		var oEl = $('#content_' + sId);
		if(isShow) {
			oEl.addClass('loading');
		} else {
			oEl.removeClass('loading');
		}
	}
	
	/**
	 * 获取标签页数量
	 */
	function _fGetTabLen() {
		return tab.items.length;
	}
	
	/**
	 * items 删除
	 */
	function _fRemoveItem(sId) {
		var aArr = [];
		for(var i in tab.items) {
			if(tab.items[i] && tab.items[i]['sId']===sId) {
			} else {
				aArr.push(tab.items[i]);
			}
		}
		tab.items = aArr;
	}
	
	/**
	 * 获取iIndex位置Id
	 */
	function _fGetIdOfIndex(iIndex) {
		var d = _fGetDataOfIndex(iIndex);
		return d?d['sId']:'';
	}
	
	/**
	 * 获取index位置数据
	 */
	function _fGetDataOfIndex(iIndex) {
		if(isNaN(iIndex)) {
			return '';
		}
		iIndex = parseInt(iIndex);
		if(iIndex>=_fGetTabLen()) {
			return '';
		}
		return tab.items[iIndex];
	}
	
	/**
	 * 获得焦点
	 */
	function _fActiveTabOfId(sId) {
		if(sId) {
			$(hmg.getJid(tab.headId + ' .item')).tab('change tab', sId);
		}
	}

	/**
	 * 获得焦点
	 */
	function _fActiveTabOfIndex(iIndex) {
		_fActiveTabOfId(_fGetIdOfIndex(iIndex));
	}
	
	/**
	 * 获取id对应位置
	 */
	function _fGetIndexOfId(sId) {
		if(!sId) {
			return -1;
		}
		var iIndex = -1;
		
		for(var i in tab.items) {
			if(tab.items[i] && tab.items[i]['sId']===sId) {
				iIndex = i;
				break;
			}
		}
		
		return iIndex;
	}
	
	/**
	 * items 添加
	 */
	function _fAddItem(oOpt) {
		tab.items.push(oOpt);
	}
	
	/**
	 * 初始化页面，iIndex获取焦点
	 */
	function _fInitTab() {
		if(_fGetTabLen()>0) {
			// 初始化tab
			$(hmg.getJid(tab.headId + ' .item')).tab();
		}
	}
	
	/**
	 * 新增标签页
	 */
	function _fAddTab(oOpt) {
		
		oOpt = $.extend({}, {
			sId: '',
			sTitle: '',
			sUrl: '',
			sHeadId: '',
			sContentId: '',
			isIFrame: false
		}, oOpt);
		
		// 校验参数
		if(!oOpt.sTitle || !oOpt.sId) {
			hmg.error('core', 'TAB_ADD_FAILED_PARAM');
			return false;
		}
		
		// 校验ID是否重复
		var isFind = false;
		for(var i in tab.items) {
			if(tab.items[i] && tab.items[i]['sId']===oOpt.sId) {
				isFind = true;
				break;
			}
		}
		
		// ID重复，获得焦点，不需要新建
		if(isFind) {
			_fActiveTabOfId(oOpt.sId);
			return false;
		}
		
		var tabLen = _fGetTabLen(); // 获取标签页数量
		
		// 标签页数量不能超过三个
		if(tabLen>=3) {
			hmg.error('core', 'TAB_ADD_LENGTH_OUT');
			return false;
		}
		
		oOpt.sHeadId = 'head_' + oOpt.sId;
		oOpt.sContentId = 'content_' + oOpt.sId;
		oOpt.sIFrameId = oOpt.isIFrame?('iframe_' + oOpt.sId):'';
		
		// 添加标签页HTML，增加事件
		$(hmg.getJid(tab.headId)).append(_fOutHeadView(oOpt.sId, oOpt.sHeadId, oOpt.sTitle, false));
		$(hmg.getJid(hmg.Comm.elId.centerContentId)).append(_fOutContentView(oOpt.sId, oOpt.sContentId, false, false, oOpt.sIFrameId));
		
		// 初始化标签页
		$(hmg.getJid(tab.headId + ' .item')).tab().tab('change tab', oOpt.sId);
		
		// 双击关闭标签页
		$('#head_' + oOpt.sId).bind('dblclick', function() {
			// 移除标签页
			_fRemoveTab($(this).attr('data-tab'));
		});
		
		// 增加loading
		_fLoading(oOpt.sId, true);
		
		if(/^\//.test(oOpt.sUrl)) {
			oOpt.sUrl = hmg.getAppPath(oOpt.sUrl);
		}
		
		// sUrl判断是否为url
		var rReg = new RegExp('^\\' + hmg.getRootPath());
		if(oOpt.sIFrameId) {
			var $iframeEl = $(hmg.getJid(oOpt.sIFrameId)).attr('src', oOpt.sUrl);
			var domIframeEl = $iframeEl[0];
			if(domIframeEl.attachEvent) {
				domIframeEl.attachEvent("onload", function() {
					// ie 处理方式
				});
			}else{
				domIframeEl.onload = function() {
					$iframeEl.css('height', domIframeEl.contentWindow.top.innerHeight + 'px');
				};
			}
			
			// 去掉Loading，加载页面
			_fLoading(oOpt.sId, false);
		} if(rReg.test(oOpt.sUrl) || /^[http|https|localhost]/.test(oOpt.sUrl)) {
			
			// Ajax Get获取页面
			hmg.ajax({
				url: oOpt.sUrl,
				dataType: 'html',
				contentType: 'text/html',
				success: function(d) {
					_fLoadView(oOpt.sId, d);
				},
				error: function(d) {
				},
				complete: function(d) {
					// 去掉Loading，加载页面
					_fLoading(oOpt.sId, false);
				}
			});
			
		} else {
			
			// 去掉Loading，加载页面
			_fLoading(oOpt.sId, false);
			_fLoadView(oOpt.sId, oOpt.sUrl);
		}
		
		// 维护标签页参数
		_fAddItem(oOpt);
	}
	
	/**
	 * 移除标签页
	 */
	function _fRemoveTab(sId) {
		// 不允许删除第一个标签页
		var iInd = _fGetIndexOfId(sId);
		if(iInd==0) {
			hmg.error('core', 'TAB_REMOVE_NOT_FIRST');
			return false;
		}
		
		var oOpt = _fGetDataOfIndex(iInd);
		
		// 移除active和loading
		$(hmg.getJid(oOpt.sHeadId)).remove();
		$(hmg.getJid(oOpt.sContentId)).remove();
		
		// 维护标签页参数
		_fRemoveItem(sId);
		// 初始化标签页
		_fInitTab();
		// 第0位置获得焦点
		_fActiveTabOfIndex(0);
	}
	
	hmg.Tab = tab;
})(window, document, $, hmg, _);

/**
 * 初始化项目
 */
; (function(window, document, $, hmg) {
	
	/**
	 * ajaxStart : ajax请求开始前
	 * ajaxSend : ajax请求时
	 * ajaxSuccess : ajax获取数据后
	 * ajaxComplete : ajax请求完成时
	 * ajaxError : ajax请求发生错误后
	 * ajaxStop : ajax请求停止后
	 */
	$.ajaxSetup({
		global: true
	});
	$.ajaxPrefilter(function() {
		// console.log('ajaxPrefilter');
	});
	$(document).ajaxStart(function() {
		// console.log('ajaxStart');
	}).ajaxSend(function() {
		// console.log('ajaxSend');
	}).ajaxSuccess(function() {
		// console.log('ajaxSuccess');
	}).ajaxComplete(function() {
		// console.log('ajaxComplete');
	}).ajaxError(function() {
		// console.log('ajaxError');
	}).ajaxStop(function() {
		// console.log('ajaxStop');
	});
	
	toastr.options = {
		"closeButton": true,
		"debug": false,
		"positionClass": "toast-bottom-left",
		"onclick": null,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	};
	
	/*hmg.Core.successBefore = function(a, b, c, d, e, f) {
		console.log('hmg.Core.successBefore', this);
		this.successBefore.apply(this, arguments);
	};
	hmg.Core.errorBefore = function(a, b, c, d, e, f) {
		console.log('hmg.Core.errorBefore', this);
		this.errorBefore.apply(this, arguments);
	};
	hmg.Core.completeBefore = function(a, b, c, d, e, f) {
		console.log('hmg.Core.completeBefore', this);
		this.completeBefore.apply(this, arguments);
	};*/
})(window, document, $, hmg, _);

/**
 * 顶部菜单
 */
; (function(window, document, $, hmg) {
	var control = {
		options: {},
		outHead: _fOutHead,
		initView: _fInitView,
		outDivider: _fOutDivider
	}
	
	/**
	 * 返回分隔符
	 */
	function _fOutDivider() {
		return '<div class="divider"></div>';
	}
	
	/**
	 * 返回头部项
	 */
	function _fOutHead() {
		return '<div class="header"></div>';
	}
	
	/**
	 * 创建元素
	 */
	function _fOutView(sBtId, sIcon, sMenuId, iCount, sCls, isScroll) {
		
		sCls = sCls?' ' + sCls:'';
		
		if(isNaN(iCount)) {
			iCount = 0;
		}
		iCount = parseInt(iCount);
		
		var sCountStr = '';
		if(iCount>0) {
			sCountStr = '<div class="floating ui teal label">' + (iCount>99?'99+':iCount) + '</div>';
		}
		
		return '<button class="circular ui icon top right pointing dropdown button top-menu-botton' + sCls + '" id="' + sBtId + '">' +
			'    <i class="' + sIcon + ' icon"></i>' + sCountStr +
			'    <div class="menu" id="' + sMenuId + '"></div>' +
			'</button>';
	}
	
	/**
	 * 初始化
	 */
	function _fInitView(oOpt) {
		control.options = $.extend({}, {
			btId: '',
			count: 0,
			icon: '',
			menuId: '',
			menuScroll: true,
			cls: ''
		}, oOpt);
		
		var htm = _fOutView(control.options.btId, control.options.icon, control.options.menuId, control.options.icon, control.options.cls);
		
		// 渲染及初始化插件
		hmg.getJel(hmg.Comm.elId.topToolbarContentId).append(htm).find(hmg.getJid(control.options.btId)).dropdown();
		
		return control;
	}
	
	hmg.Control = control;
	
})(window, document, $, hmg, _);


/**
 * 页面设置菜单
 */
; (function(window, document, $, hmg) {
	
	var settingPage = {
		sBtEl: 'topSettingPageBtId',
		sMenuContentEl: 'topSettingPageMenuContentId',
		sColorContentEl: 'topSettingPageColorContentId',
		options: {},
		oData: {},
		initView: _fInitView
	}
	
	/**
	 * 创建颜色项
	 */
	function _fOutColorItem(color) {
		return '<i class="circle icon" style="color: ' + color + ';"></i>';
	}
	
	/**
	 * 创建菜单项
	 */
	function _fOutMenuItem(title, icon) {
		icon = icon?'<i class="' + icon + ' icon"></i>':'';
		return '<div class="item">' + icon + '<span>' + title + '</span></div>';
	}
	
	/**
	 * 颜色按钮事件
	 */
	function _fSetTopBackColor(color) {
		// 设置顶部背景
		hmg.getJel(hmg.Comm.elId.topContentId).css('background', color);
	}
	
	/**
	 * 渲染颜色
	 */
	function _fOutColors($el, list) {
		$el = $el.append(hmg.Control.outHead()).find('.header');
		if(list && list.length && list.length>0) {
			for(var i in list) {
				// 渲染元素
				$el.append(_fOutColorItem(list[i]));
				// 在渲染元素上添加事件
				$el.find('i:eq(' + i + ')').click(function() {
					_fSetTopBackColor($(this).css('color'));
				});
			}
		}
	}
	
	/**
	 * 渲染菜单
	 */
	function _fOutMenus($el, list) {
		if(list && list.length && list.length>0) {
			for(var i in list) {
				$el.append(_fOutMenuItem(list[i].title, list[i].icon));
				var fFn = list[i]['callback'];
				if(fFn && _.isFunction(fFn)) {
					$el.find('.item:eq(' + i + ')').click(fFn);
				}
			}
		}
	}
	
	/**
	 * 初始化
	 */
	function _fInitView(oOpt) {
		
		settingPage.options = $.extend({}, {
			color: ['#2196F3', '#03A9F4', '#607D8B', '#00BCD4', '#009688', '#FF9800'],
			menu: [{
				title: '隐藏左侧菜单',
				icon: 'th',
				callback: hmg.Menu.menuCtrl
			}, {
				title: '存储页面设置',
				icon: 'save',
				callback: function() {
					hmg.info('存储页面设置成功');
				}
			}]
		}, oOpt);
		
		// 初始化下拉菜单按钮
		var control = hmg.Control.initView({
			btId: 'topControlSettingPageBtId',
			icon: 'cog',
			menuId: 'topControlSettingPageMenuId',
			count: 0,
			cls: 'setting-button'
		});
		
		var $menuEl = hmg.getJel(control.options.menuId);
		
		// 初始化颜色
		_fOutColors($menuEl, settingPage.options.color);
		$menuEl.append(hmg.Control.outDivider());
		// 初始化菜单
		_fOutMenus($menuEl, settingPage.options.menu);
		
		// 初始化下拉菜单
	}
	
	hmg.SettingPage = settingPage;
})(window, document, $, hmg, _);

