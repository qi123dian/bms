/**
 * Base Package
 */
window.hmg = hmg = {};

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
	 * 封装Ajax
	 */
	var _fCustomAjax = function(oOpt) {
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
	
	var _fCustomGet = function() {
		
		function successBefore() {
			console.log('successBefore');
			return true;
		}
		
		var aArr = [];
		
		for(var i=0;i<arguments.length;i++) {
			if($.isFunction(arguments[i])) {
				var fFn = arguments[i];
				aArr.push(function() {
					successBefore.apply(this, arguments);
					fFn.apply(this, arguments);
				});
			} else {
				aArr.push(arguments[i]);
			}
		}
		
		return $.get.apply(_fCustomGet, aArr);
	}
	
	hmg.fAjax = _fCustomAjax;
	hmg.fGet = _fCustomGet;
	
})(window, document, $, hmg, _);