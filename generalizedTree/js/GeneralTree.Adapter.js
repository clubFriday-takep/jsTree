/* 
 * GeneralTree Version 0.9 prototype
 * Author  : Takep @ ClubFriday
 * Lisence : MIT Lisense
 * 
 */
GeneralTree.Adapter = (function(){
	// Public Methods
	return {
		model : function(data){
			var obj = null;
			// console.log(data);
			if(data.treekind == 'group'){
				obj = {
					id       : 'g' + data.id,
					parent   : data.subject,
					text     : data.name,
					subject  : data.subject,
					treekind : data.treekind
				};
			}else if(data.treekind == 'task'){
				obj = {
					id       : data.id,
					parent   : 'g' + data.group_id,
					text     : data.title,
					subject  : data.subject,
					type     : 'file',
					treekind : data.treekind
				};
			}else{
				obj = data;
			}
			return obj;
		},
		collection : function(data){
			var res = [];
			var groups = data.parameters.groupList;
			var tasks  = data.parameters.taskList;
			
			for(var i=0,ilen=groups.length; i<ilen; i++){
				var group = groups[i];
				group.treekind = 'group';
				res.push(group);
			}
			
			for(var j=0,jlen=tasks.length;  j<jlen; j++){
				var task  = tasks[j];
				task.treekind = 'task';
				res.push(task);
			}
			
			return res;
		}
	};
})();
