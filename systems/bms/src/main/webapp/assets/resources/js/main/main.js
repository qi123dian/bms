/**
 * 主页面
 */
; (function(window, document, $, hmg, _) {
	
	// 页面初始化
	function _initPage() {
		// $('.main-box').dimmer('show');
		
		/*$('.ui.accordion').accordion({
			duration: 100
		});*/
		
		$('.ui.dropdown').dropdown();
		
		/*$('.ui.accordion.tree-menu').accordion({
			duration: 100,
			exclusive: false,
			onOpening: function(a, b, c) {
				console.log('onOpening', a, b, c);
				return false;
			}
		});*/
		
		$('.tabular.menu .item').tab();
		
		// $('.attached.progress').progress();
		
		// $('.top-tabmenu .item').popup();
		
		$('#accordionBtId').click(function() {
			$('.main-menu.ui.accordion').accordion('toggle', 0);
		});
		
		hmg.info('欢迎光临！');
		
		hmg.Tab.addTab({
			sId: 'template' + _.now(),
			sTitle: '模板界面',
			sUrl: hmg.getAppPath('/page/template/template')
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
		
		$('#testBtId').click(function() {
			var sNow = _.now();
			hmg.Tab.addTab({
				sId: 'main' + sNow,
				sTitle: '模板界面' + sNow,
				sUrl: 'https://www.baidu.com',
				isIFrame: true
			});
			
			console.log(hmg.Tab.items);
		});
	};
	
	_initPage();
	
	var main = {
		aa: 'asdfasdf'
	};
	
	hmg.Main = main;
})(window, document, $, hmg, _);

