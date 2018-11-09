
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
		
		// 在jQuery Ajax success、error、complete执行之前添加before方法
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
		oData: undefined // 菜单数据
	};
	
	function fOutView(sIcon, sPid, sId, sTitle, sChildNodes) {
		return '<div class="accordion">'
			+ '    <div class="title">'
			+ '        <div class="right floated content">'
			+ '            <i class="dropdown icon"></i>'
			+ '        </div>'
			+ '        <div class="header tree-menu-title">'
			+ '            ' + sIcon
			+ '            <span data-menu-pid="' + sPid + '" data-menu-id="' + sId + '">' + sTitle + '</span>'
			+ '        </div>'
			+ '    </div>'
			+ '    <div class="content">'
			+ '    ' + sChildNodes
			+ '    </div>'
			+ '</div>';
	}
	
	hmg.Menu = menu;
})(window, document, $, hmg, _);

/**
 * 标签页
 */
; (function(window, document, $, hmg) {
	
	var tab = {
		headId: 'topTabHeadId',
		contentId: 'mainContentId',
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
		+ (sIFrameId?'<iframe style="border-width: 0px;" id="' + sIFrameId + '" width="100%" src=""></iframe>':'')
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
			$('#' + tab.headId + ' .item').tab('change tab', sId);
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
			$('#' + tab.headId + ' .item').tab();
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
		$('#' + tab.headId).append(_fOutHeadView(oOpt.sId, oOpt.sHeadId, oOpt.sTitle, false));
		$('#' + tab.contentId).append(_fOutContentView(oOpt.sId, oOpt.sContentId, false, false, oOpt.sIFrameId));
		
		// 初始化标签页
		$('#' + tab.headId + ' .item').tab().tab('change tab', oOpt.sId);
		
		// 双击关闭标签页
		$('#head_' + oOpt.sId).bind('dblclick', function() {
			// 移除标签页
			_fRemoveTab($(this).attr('data-tab'));
		});
		
		// 增加loading
		_fLoading(oOpt.sId, true);
		
		// sUrl判断是否为url
		var rReg = new RegExp('^\\' + hmg.getRootPath());
		if(oOpt.sIFrameId) {
			$('#' + oOpt.sIFrameId).attr('src', oOpt.sUrl);
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
		$('#' + oOpt.sHeadId).remove();
		$('#' + oOpt.sContentId).remove();
		
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
