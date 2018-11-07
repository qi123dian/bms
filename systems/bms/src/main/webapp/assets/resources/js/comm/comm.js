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
		}
		function errorBefore() {
			console.log('errorBefore');
		}
		function completeBefore() {
			console.log('completeBefore');
		}
		
		oOpt = $.extend({}, {
			success: function(d) {},
			global: true,
			error: function(d) {},
			complete: function(d) {}
		}, oOpt);
		
		var oPrm = $.extend({}, oOpt);
		
		oPrm.success = function() {
			successBefore();
			oOpt.success();
		}
		oPrm.error = function() {
			errorBefore();
			oOpt.error();
		}
		oPrm.complete = function() {
			completeBefore();
			oOpt.complete();
		}
		
		$.ajax = $.ajax(oPrm);
	}
	
	hmg.fAjax = _fCustomAjax;
	
	hmg.fAjax({
		url: ' http://localhost:8080/bms/rest/test/testError',
		method: 'POST',
		contentType: 'application/json',
		success: function(d) {
			console.log('success', d);
		},
		global: true,
		error: function(d) {
			console.log('error', d);
		},
		complete: function(d) {
			console.log('complete', d);
		}
	});
})(window, document, $, hmg, _);