/**
 * 用户档案
 */
; (function(window, document, $, hmg, _) {
	
	var menuPage = {
		pageId: pageId,
		pageBoxEl: hmg.getJel(pageId),
		init: _init
	}
	
	function _init(opt) {
		$(document).ready(function(){
			hmg.PageOpera.init(opt, '.center-page-top', 'list alternate outline icon', '菜单管理', '页面操作功能区域', [{
				type: 'help',
				msg: menuPage.pageId
			},
			{
				type: 'action',
				items: ['refresh', 'close', 'fullscreen']
			}])
		});
	}
	
	_init(menuPage.pageId);
})(window, document, $, hmg, _);

