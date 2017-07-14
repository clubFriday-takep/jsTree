/* 
 * モジュールパターン
 * グローバル空間に一意の名前を定義し、
 * モジュールを階層化したり公開したりするのに
 * 適した素晴らしいデザインパターン
 */
SimpleTree = (function(){
	// 各ボタンごとの処理
	// デフォルト処理＆閉じる
	var init = function(){
		var treedata = SimpleTree.datas.getMyData(1);
		render(treedata);
	};
	// 開く
	var openTree = function(){
		var treedata = SimpleTree.datas.getMyData(2);
		render(treedata);
	};
	// メニュー作成
	var context = function(){
		var treedata = SimpleTree.datas.getMyData(3);
		
		var mymenu = {
			'items' : function($node){
				// データの中からkind属性を取得し、どのメニューを表示させるか判定
				if($node.original.kind == '00') {
					return {
						menu0001 : {
							'label'  : 'フォルダメニュー１',
							'action' : function(obj){
								alert('イベント発火！');
							},
							'_class' : 'class'
						},
						menu0002 : {
							'label'  : 'フォルダメニュー２',
							'action' : function(obj){
								alert('イベント発火！');
							},
							'_class' : 'class'
						}
					}
				}
				if($node.original.kind == '01') {
					return {
						menu0001 : {
							'label'  : 'ファイルメニュー１',
							'action' : function(obj){
								alert('イベント発火！');
							},
							'_class' : 'class'
						},
						menu0002 : {
							'label'  : 'ファイルメニュー２',
							'action' : function(obj){
								alert('イベント発火！');
							},
							'_class' : 'class'
						}
					}
				}
			}
		};
		
		render(treedata, {context : mymenu});
	}
	
	// 共通描画処理
	var render = function(treedata, option){
		// オプションの設定
		var myoption = option || {};
		
		// コンテキストメニューの設定（ない場合はNull）
		var contextmenu = null;
		if('context' in myoption){
			contextmenu = myoption.context
		};
		
		// ツリーの初期化
		$.jstree.destroy();
		
		// ツリーの描画
		$('#tree').jstree({
			'core' : {
				'themes' : {
					'variant' : "large",
					'dots'    : false,
					'stripes' : false
				},
				'data' : treedata
			},
			'types' : {
				"default" : {
					"valid_children" : ["default","file"]
				},
				"file" : {
					"icon" : "jstree-icon jstree-file",
					"valid_children" : []
				}
			},
			'plugins' : ['types','sort','contextmenu'],
			'contextmenu': contextmenu,
		});
	};
	
	// 外部公開メソッド
	return {
		init     : init,
		openTree : openTree,
		context  : context
	};
})();
