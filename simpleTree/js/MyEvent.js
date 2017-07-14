MyEvent = (function(){
	// デフォルト処理
	var init = function(){
		$('#openTree').on('click', function(){
			SimpleTree.openTree();
		});
		$('#closeTree').on('click', function(){
			SimpleTree.init();
		});
		$('#contextMenu').on('click', function(){
			SimpleTree.context();
			alert('画面を閉じて右クリックしてください。');
		});
	};
	
	return {
		init : init
	};
})();
