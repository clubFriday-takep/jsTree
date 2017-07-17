GeneralTree.Events = (function(){
	return {
		normal : {
			refresh : {
				selector : '#refresh',
				action   : 'click',
				func     : function(){
					GeneralTree.View.MyView.getAll();
				}
			}
		},
		jstree : {
			taskdbclick : {
				action : 'dblclick.jstree',
				func   : function(e){
					var node = $(e.target).closest('li');
					console.log(node[0].id);
					
					var ary = $(this).jstree().get_json('#', {flat:true});
					console.log(ary);
					GeneralTree.View.MyView.setIsOpen(ary);
				}
			}
		}
	};
})();
