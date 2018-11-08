/**
 * 主页面
 */
; (function(window, document, $, hmg, _) {
	
	// 页面初始化
	function _initPage() {
		// $('.main-box').dimmer('show');
		
		$('.ui.accordion').accordion({
			duration: 100
		});
		
		$('.ui.dropdown').dropdown();
		
		$('.ui.accordion.tree-menu').accordion({
			duration: 100,
			exclusive: false
		});
		
		$('.tabular.menu .item').tab();
		
		// $('.attached.progress').progress();
		
		// $('.top-tabmenu .item').popup();
		
		$('#accordionBtId').click(function() {
			$('.main-menu.ui.accordion').accordion('toggle', 0);
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
		
		hmg.info('欢迎光临！');
		
		hmg.Tab.addTab({
			sId: 'template' + _.now(),
			sTitle: '模板界面',
			sUrl: '/page/template/template'
		});
		
		/*hmg.fAjax({
			url: hmg.getAppPath('rest/test/testError'),
			method: 'POST',
			contentType: 'application/json',
			global: true,
			success: function(d) {
				console.log('success', d);
			},
			error: function(d) {
				console.log('error', d);
			},
			complete: function(d) {
				console.log('complete', d);
			}
		});*/
		
		$('#testBtId').click(function() {
			hmg.Tab.addTab({
				sId: 'main' + _.now(),
				sTitle: '模板界面',
				sUrl: '/page/template/template'
			});
		});
	};
	
	_initPage();
	
	var main = {
		aa: 'asdfasdf'
	};
	
	hmg.Main = main;
})(window, document, $, hmg, _);

