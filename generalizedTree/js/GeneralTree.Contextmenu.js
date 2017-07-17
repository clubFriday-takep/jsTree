/* 
 * GeneralTree Version 0.9 prototype
 * Author  : Takep @ ClubFriday
 * Lisence : MIT Lisense
 * 
 */
GeneralTree.Contextmenu = (function(){
	// Public Methods
	return {
		'items' : function($node){
			// タスクのメニュー
			if($node.original.treekind == 'task') {
				return {
					delete : {
						'label'  : 'タスクを削除',
						'action' : function(obj){
							console.log($node.original);
							console.log(GeneralTree.View.get());
							
							GeneralTree.View.get().getAll();
							// deleteTask($node.original);
						},
						'_class' : 'class'
					}
				}
			}
			// 教科のフォルダメニュー
			if($node.original.treekind == 'subject') {
				return {
					menu0201 : {
						'label'  : '新規フォルダを作成',
						'action' : function(obj){
							// createGroup($node.original);
						},
						'_class' : 'class'
					}
				}
			}
			// 自前フォルダーのメニュー
			if($node.original.treekind == 'group') {
				return {
					menu0201 : {
						'label'  : 'タスクを追加する',
						'action' : function(obj){
							// insertTask($node.original);
						},
						'_class' : 'class'
					},
					menu0202 : {
						'label'  : 'フォルダ名を変更する',
						'action' : function(){
							// changeTaskName($node.original);
						},
						'_class' : 'class'
					},
					menu0203 : {
						'label' : 'フォルダを削除する',
						'action' : function(){
							// deleteGroup($node.original);
						},
						'_class' : 'class'
					}
				};
			}
		}
	};
})();
