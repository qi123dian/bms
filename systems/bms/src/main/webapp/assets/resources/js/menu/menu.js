/**
 * 用户档案
 */
; (function(window, document, $, hmg, _) {
	
	var page = {
		pageId: pageId,
		pageBoxEl: hmg.getJel(pageId),
		init: _init
	}
	
	function _init(pageId) {
		
		hmg.PageOpera.init(pageId, '.center-page-top', 'list alternate outline icon', '菜单管理', '页面操作功能区域', [{
			type: 'help',
			msg: '菜单管理'
		},
		{
			type: 'action',
			items: ['refresh', 'close', 'fullscreen']
		}])
	}
	
	$(document).ready(function(){
		_init(page.pageId);
	});
})(window, document, $, hmg, _);

