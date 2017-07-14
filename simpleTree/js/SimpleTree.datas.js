SimpleTree.datas = (function(){
	
	var mydata = {
		// 通常のデータ
		1 : [
			 {"id" : "root", "parent" : "#", "text" : "第1階層"},
				 {"id" : "sub1-1", "parent" : "root", "text" : "第2階層-1"},
				 	{"id" : "sub2-1", "parent" : "sub1-1", "text" : "第3階層-1", "type" : "file" },
				 	{"id" : "sub2-2", "parent" : "sub1-1", "text" : "第3階層-2", "type" : "file" },
				 {"id" : "sub1-2", "parent" : "root", "text" : "第2階層-2"},
				 	{"id" : "sub2-3", "parent" : "sub1-2", "text" : "第3階層-3", "type" : "file" }
		],
		// 開いてみる
		2 : [
			 {"id" : "root", "parent" : "#", "text" : "第1階層", "state" : {"opened" : true} },
				 {"id" : "sub1-1", "parent" : "root", "text" : "第2階層-1", "state" : {"opened" : true} },
				 	{"id" : "sub2-1", "parent" : "sub1-1", "text" : "第3階層-1", "type" : "file" },
				 	{"id" : "sub2-2", "parent" : "sub1-1", "text" : "第3階層-2", "type" : "file" },
				 {"id" : "sub1-2", "parent" : "root", "text" : "第2階層-2", "state" : {"opened" : true} },
				 	{"id" : "sub2-3", "parent" : "sub1-2", "text" : "第3階層-3", "type" : "file" }
		],
		// メニューを作ってみる
		3 : [
			 {"id" : "root", "parent" : "#", "text" : "第1階層", "state" : {"opened" : true}, "kind" : "00" },
				 {"id" : "sub1-1", "parent" : "root", "text" : "第2階層-1", "state" : {"opened" : true}, "kind" : "00" },
				 	{"id" : "sub2-1", "parent" : "sub1-1", "text" : "第3階層-1", "type" : "file", "kind" : "01" },
				 	{"id" : "sub2-2", "parent" : "sub1-1", "text" : "第3階層-2", "type" : "file", "kind" : "01" },
				 {"id" : "sub1-2", "parent" : "root", "text" : "第2階層-2", "state" : {"opened" : true}, "kind" : "00" },
				 	{"id" : "sub2-3", "parent" : "sub1-2", "text" : "第3階層-3", "type" : "file", "kind" : "01" }
		]
	}
	
	var getMyData = function(num){
		return mydata[num];
	}
	
	return {
		getMyData : getMyData
	};
})();
