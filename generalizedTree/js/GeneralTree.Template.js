GeneralTree.Template = (function(){
	return {
		collection : [
			{ "id" : "common", "parent" : "#", "text" : "0.共通" },
				{ "id" : "readme", "parent" : "common", "text" : "Readme", "type" : "file" },
			{ "id" : "TaskRoot", "parent" : "#", "text" : "1.タスク" },
				{ "id" : "01", "parent" : "TaskRoot", "text" : "国語", "treekind" : "subject" },
				{ "id" : "02", "parent" : "TaskRoot", "text" : "数学", "treekind" : "subject" },
				{ "id" : "03", "parent" : "TaskRoot", "text" : "英語", "treekind" : "subject" }
		]
	};
})();
