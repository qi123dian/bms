$(document).ready(function(){
	var html = document.getElementById('boxId').innerHTML;
	html += '外部Js文件引入后的效果<br/>';
	for(var i=0;i<20;i++) {
		html += '这是一行数据，当前第<span class="spanClass">' + i*30 + '</span>行<br/>';
	}
	document.getElementById('boxId').innerHTML = html;
})