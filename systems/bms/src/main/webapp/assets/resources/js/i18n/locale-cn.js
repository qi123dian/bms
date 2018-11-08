/**
 * 简单国际化
 */
; (function(window, document, $, hmg, _) {
	
	hmg.local = {
		language: 'cn',
		messages: {}
	};
	
	hmg.local.messages['cn'] = {
		local: {
			NOT_LOAD_LOCAL: '国际化文件缺失'
		},
		core: {
			TAB_ADD_LENGTH_OUT: '标签页数量不能超过三个',
			TAB_ADD_FAILED_PARAM: '参数异常'
		},
		main: {
			
		}
	}
	
})(window, document, $, hmg, _);