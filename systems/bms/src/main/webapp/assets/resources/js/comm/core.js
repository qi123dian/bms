/**
 * Base Package
 */
window.hmg = hmg = {};

/**
 * 核心类
 */
; (function(window, document, $, hmg, _) {
	
	/**
	 * 获取项目名称
	 * 备用在JavaScript代码中使用
	 */
	hmg.basePath = _basePath;
	
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