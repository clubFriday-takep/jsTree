/* 
 * GeneralTree Version 0.9 prototype
 * Author  : Takep @ ClubFriday
 * Lisence : MIT Lisense
 * 
 */
GeneralTree = (function(){
	// データ取得処理
	var init = function(){
		var adapter  = GeneralTree.Adapter;
		var template = GeneralTree.Template;
		var myEvents = GeneralTree.Events;
		console.log(myEvents);
		/*
		var req = Connector.set({
			service : 'generalTree',
			name    : 'getAll',
			type    : 'get',
			url     : 'http://localhost:8080/Sakura/tree/'
		});
		*/
		var req = DummyConnector.set({
			service : 'generalTree',
			name    : 'getAll',
			type    : 'get',
			url     : 'http://localhost/Dummy/'
		});
		var collection = GeneralTree.Collection.create({
			adapter  : adapter,
			template : template
		});
		
		var tv2 = GeneralTree.View.create({
			collection   : collection,
			//connector    : Connector.requests.get('generalTree'),
			connector    : DummyConnector.requests.get('generalTree'),
			contextmenu  : GeneralTree.Contextmenu,
			normalEvents : myEvents.normal,
			jstreeEvents : myEvents.jstree
		}, true);
		
		console.log(GeneralTree.View);
		
		tv2.getAll();
	};
	
	// 外部公開メソッド
	return {
		init     : init
	};
})();
