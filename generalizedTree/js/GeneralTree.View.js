/* 
 * GeneralTree Version 0.9 prototype
 * Author  : Takep @ ClubFriday
 * Lisence : MIT Lisense
 * 
 */
GeneralTree.View = (function(){
	// Module's latest view by set method
	var MyView = null;
	
	// ---------- Default Settings Start ----------
	// Selector
	var defSelector = '#tree';
	// Core
	var defCore = {
		'themes' : {
			'variant' : 'small',
			'dots'    : true,
			'stripes' : false
		},
		'data' : null
	};
	var defTypes = {
		// Folder
		"default" : {
			// 配下に許容する者たち
			"valid_children" : ["default","file"]
		},
		"file" : {
			"icon" : "jstree-icon jstree-file",
			"valid_children" : []
		}
	};
	var defPlugins = ['types','sort','contextmenu'];
	var defContextmenu = null;
	// ---------- Default Settings End ----------
	
	// ---------- View Object Start ----------
	// Constractor
	function TreeView(param){
		var obj = param || {};
		this.connector    = obj.connector    || {};
		this.collection   = obj.collection   || [];
		this.normalEvents = obj.normalEvents || {};
		
		this.jstreeEvents = obj.jstreeEvents || {};
		this.selector     = obj.selector     || defSelector;
		this.core         = obj.core         || defCore;
		this.types        = obj.types        || defTypes;
		this.plugins      = obj.plugins      || defPlugins;
		this.contextmenu  = obj.contextmenu  || defContextmenu;
		return this;
	};
	// Common Render Method
	// You can call this method on the premise that view's collection has any models.
	TreeView.prototype.render = function(){
		// ツリーの初期化
		$.jstree.destroy();
		// データの最新化
		this.dataBind();
		// JSTREEの描画
		var jstree = $(this.selector).jstree({
			'core'    : this.core,
			'types'   : this.types,
			'plugins' : this.plugins,
			'contextmenu' : this.contextmenu
		});
		// Event Bind
		this.eventBindJstree(jstree);
		this.eventBindNormal();
		return this;
	};
	TreeView.prototype.dataBind = function(){
		this.core.data = this.collection.serialize();
		return this;
	};
	// Viewに登録されたイベントを全て発行する。
	TreeView.prototype.eventBindJstree = function(jstree){
		var keys = Object.keys(this.jstreeEvents);
		for(var i=0,len=keys.length; i<len; i++){
			var key  = keys[i];
			var eobj = this.jstreeEvents[key];
			jstree.on(eobj.action, eobj.func);
		}
	};
	TreeView.prototype.eventBindNormal = function(){
		var keys = Object.keys(this.normalEvents);
		for(var i=0,len=keys.length; i<len; i++){
			var key  = keys[i];
			var eobj = this.normalEvents[key];
			$(eobj.selector).off(eobj.action, eobj.func);
			$(eobj.selector).on(eobj.action, eobj.func);
		};
		return this;
	};
	TreeView.prototype.callback = function(data){
		this.collection.set(data);
		this.render();
	};
	TreeView.prototype.error = function(){
		alert('DB接続エラー');
	}
	TreeView.prototype.getAll = function(){
		this.collection.clearModels();
		this.connector.getAll.execute(this,{
			success : 'callback',
			error   : 'error'
		});
	};
	TreeView.prototype.setIsOpen = function(treeAry){
		this.collection.setIsOpen(treeAry);
		return this;
	}
	// ---------- View Object End ----------
	
	var create = function(obj,flg){
		var view = new TreeView(obj);
		if(flg){ this.MyView = view; };
		return view;
	};
	var get = function(){
		return this.MyView;
	};
	var set = function(view){
		this.MyView = view;
		return this.MyView;
	};
	
	// Public Methods
	return {
		MyView : MyView,
		create : create,
		get    : get,
		set    : set
	};
})();
