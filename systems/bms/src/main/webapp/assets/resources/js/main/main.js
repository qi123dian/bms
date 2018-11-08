/**
 * 菜单
 */
; (function(window, document, $, hmg) {
	
	function fOutView(sIcon, sPid, sId, sTitle, sChildNodes) {
		return '<div class="accordion">'
			+ '    <div class="title">'
			+ '        <div class="right floated content">'
			+ '            <i class="dropdown icon"></i>'
			+ '        </div>'
			+ '        <div class="header tree-menu-title">'
			+ '            ' + sIcon
			+ '            <span data-menu-pid="' + sPid + '" data-menu-id="' + sId + '">' + sTitle + '</span>'
			+ '        </div>'
			+ '    </div>'
			+ '    <div class="content">'
			+ '    ' + sChildNodes
			+ '    </div>'
			+ '</div>';
	}
	
	var menu = {
		oData: undefined, // 菜单数据
		
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
		
		// $('.top-tabmenu .item').popup();
		
		$('#accordionBtId').click(function() {
			console.log('---------------------------------------------------------------');
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
		
		toastr.info('欢迎光临！');
		
		hmg.fAjax({
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
		});
		
		hmg.fAjax({
			url: hmg.getAppPath('/index2.jsp'),
			dataType: 'html',
			contentType: 'text/html',
			success: function(d) {
				console.log('success', d);
				$('#tabNameId1').html(d);
			},
			error: function(d) {
				console.log('error', d);
			},
			complete: function(d) {
				console.log('complete', d);
			}
		});
		
		/*hmg.fGet('http://localhost:8080/bms/index2.jsp', function(d) {
			console.log(d);
			$('#tabNameId1').html(d);
		});*/
	};
	
	_initPage();
	
	var main = {
		aa: 'asdfasdf'
	};
	
	hmg.Main = main;
})(window, document, $, hmg);

