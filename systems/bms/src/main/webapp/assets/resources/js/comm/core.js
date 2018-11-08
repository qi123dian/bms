
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
		return hmg.local.messages[hmg.local.language][sModule][sMsg];
	}
	
	hmg.Util = util;
	
	hmg.getMsg = hmg.Util.getMsg; // 简写
	hmg.error = hmg.Util.error; // 简写
	hmg.info = hmg.Util.info; // 简写
})(window, document, $, hmg, _);

/**
 * 核心类
 */
; (function(window, document, $, hmg, _) {
	
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
		console.log('ajaxPrefilter');
	});
	$(document).ajaxStart(function() {
		console.log('ajaxStart');
	}).ajaxSend(function() {
		console.log('ajaxSend');
	}).ajaxSuccess(function() {
		console.log('ajaxSuccess');
	}).ajaxComplete(function() {
		console.log('ajaxComplete');
	}).ajaxError(function() {
		console.log('ajaxError');
	}).ajaxStop(function() {
		console.log('ajaxStop');
	});
	
	/**
	 * 封装jQuery Ajax
	 */
	function _fCustomAjax(oOpt) {
		oOpt = oOpt?oOpt:{};
		
		function successBefore() {
			console.log('successBefore');
			return true;
		}
		function errorBefore() {
			console.log('errorBefore');
			return true;
		}
		function completeBefore() {
			console.log('completeBefore');
			return true;
		}
		
		oOpt = $.extend({}, {
			success: function(d) {},
			global: true,
			error: function(d) {},
			complete: function(d) {}
		}, oOpt);
		
		var oPrm = $.extend({}, oOpt);
		
		oPrm.success = function() {
			if(successBefore.apply(this, arguments))
				oOpt.success.apply(this, arguments);
		}
		oPrm.error = function() {
			if(errorBefore.apply(this, arguments))
				oOpt.error.apply(this, arguments);
		}
		oPrm.complete = function() {
			if(completeBefore.apply(this, arguments))
				oOpt.complete.apply(this, arguments);
		}
		
		return $.ajax(oPrm);
	}
	
	/**
	 * 封装jQuery Get
	 */
	function _fCustomGet() {
		
		function successBefore() {
			console.log('successBefore');
			return true;
		}
		
		var aArr = [];
		
		for(var i=0;i<arguments.length;i++) {
			if($.isFunction(arguments[i])) {
				var fFn = arguments[i];
				aArr.push(function() {
					if(successBefore.apply(this, arguments))
						fFn.apply(this, arguments);
				});
			} else {
				aArr.push(arguments[i]);
			}
		}
		
		return $.get.apply(this, aArr);
	}
	
	function _fGetMsg(sMsg) {
		return hmg.local
	}
	
	/**
	 * 获取完整请求地址
	 */
	function _fGetAppPath(sUrl) {
		if(sUrl)
			return hmg.basePath + (/^\//.test(sUrl)?sUrl:'/'+sUrl);
		else
			return sUrl;
	}
	
	hmg.fAjax = _fCustomAjax; // jQuery Ajax封装
	hmg.fGet = _fCustomGet; // jQuery Get封装
	hmg.getAppPath = _fGetAppPath; // 获取完整请求地址
	
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
		addTab: _fAddTab
	};
	
	function _fOutHeadView(sId, sTitle, isActive) {
		var sActive = isActive?' active':'';
		return '<a class="item' + sActive + '" data-tab="' + sId + '" data-content="双击关闭" id="head_' + sId + '">' + sTitle + '</a>'
	}
	
	function _fOutContentView(sId, isActive, isLoading) {
		var sActive = isActive?' active':'';
		var loading = isLoading?' loading':'';
		return '<div class="ui bottom attached tab' + sActive + ' main-box' + loading + '" data-tab="' + sId + '" id="content_' + sId + '">'
		+ '</div>';
	}
	
	function _fLoadView(id, sHtml) {
		$('#content_' + id).empty().html(sHtml);
	}
	
	function _fLoading(sId, isShow) {
		var oEl = $('#content_' + sId);
		if(isShow) {
			oEl.addClass('loading');
		} else {
			oEl.removeClass('loading');
		}
	}
	
	function _fAddTab(oOpt) {
		
		oOpt = $.extend({}, {
			sId: '',
			sTitle: '',
			sUrl: ''
		}, oOpt);
		
		// 校验参数
		if(!oOpt.sTitle || !oOpt.sId) {
			hmg.error('core', 'TAB_ADD_FAILED_PARAM');
			return false;
		}
		
		var tabLen = _fGetTabLen();
		
		// 标签页数量不能超过三个
		if(tabLen>=3) {
			hmg.error('core', 'TAB_ADD_LENGTH_OUT');
			return false;
		}
		
		$('#' + tab.headId).append(_fOutHeadView(oOpt.sId, oOpt.sTitle, false));
		$('#' + tab.contentId).append(_fOutContentView(oOpt.sId, false, false));
		
		// 初始化标签页
		$('#' + tab.headId + ' .item').tab().tab('change tab', oOpt.sId);
		// 增加loading
		_fLoading(oOpt.sId, true);
		
		// sUrl判断是否为url
		if(/^\//.test(oOpt.sUrl)) {
			
			// 获取页面
			hmg.fAjax({
				url: hmg.getAppPath(oOpt.sUrl),
				dataType: 'html',
				contentType: 'text/html',
				success: function(d) {
					_fLoading(oOpt.sId, false);
					_fLoadView(oOpt.sId, d);
				}
			});
			
		} else {
			_fLoading(oOpt.sId, false);
			_fLoadView(oOpt.sId, oOpt.sUrl);
		}
	}
	
	function _fRemoveTab() {
		
	}
	
	function _fGetTabLen() {
		return $('#' + tab.headId + ' > .item').length;
	}
	
	hmg.Tab = tab;
})(window, document, $, hmg, _);