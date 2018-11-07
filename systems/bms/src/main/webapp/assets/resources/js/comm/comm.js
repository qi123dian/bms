/**
 * Base Package
 */
window.hmg = hmg = {};

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
	$(document).ajaxStart = function() {
		console.log('ajaxStart');
	}
	$(document).ajaxSend = function() {
		console.log('ajaxSend');
	}
	$(document).ajaxSuccess = function() {
		console.log('ajaxSuccess');
	}
	$(document).ajaxComplete = function() {
		console.log('ajaxComplete');
	}
	$(document).ajaxError = function() {
		console.log('ajaxError');
	}
	$(document).ajaxStop = function() {
		console.log('ajaxStop');
	}
	
	$.ajax({
		url: 'https://www.datatables.net/examples/ajax/data/arrays.txt?_=1541474101667',
		method: 'GET',
		success: function(d) {
			console.log('success', d);
		},
		error: function(d) {
			console.log('error', d);
		},
		complete: function(d) {
			console.log('complete', d);
		}
	})
	
})(window, document, $, hmg, _);