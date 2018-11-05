/**
 * Base Package
 */
window.hmg = hmg = {};

/**
 * 菜单
 */
; (function(window, document, $, hmg) {
	
	var menu = {
		cName: 'asdfasdf'
	};
	
	hmg.Menu = menu;
})(window, document, $, hmg);

/**
 * 标签页
 */
; (function(window, document, $, hmg) {
	
	var tab = {
		aa: 'asdfasdf'
	};
	
	hmg.Tab = tab;
})(window, document, $, hmg);

/**
 * 主页面
 */
; (function(window, document, $, hmg) {
	
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
		
		$('#accordionBtId').click(function() {
			console.log('---------------------------------------------------------------');
			$('.main-menu.ui.accordion').accordion('toggle', 0);
		});
	};
	
	_initPage();
	
	var main = {
		aa: 'asdfasdf'
	};
	
	hmg.Main = main;
})(window, document, $, hmg);

