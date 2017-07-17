/* 
 * GeneralTree Version 0.9 prototype
 * Author  : Takep @ ClubFriday
 * Lisence : MIT Lisense
 * 
 */
GeneralTree.Collection = (function(){
	// Collection
	function TreeCollection(model){
		this.model     = TreeModel;
		this.models    = [];
		this.template  = null;
		return this;
	};
	// Setter
	// If this collection has an adapter, use it.
	TreeCollection.prototype.set = function(data){
		var ary = [];
		
		if(this.template){ ary = this.template; };
		
		if(this.adapter){
			ary = ary.concat(this.adapter(data));
		}else{
			ary = ary.concat(data);
		}
		for(var i=0,len=ary.length; i<len; i++){
			var model = new this.model();
			this.models.push(model.set(ary[i]));
		}
		return this;
	};
	// This method returns an array object contains flat model datas.
	TreeCollection.prototype.serialize = function(){
		var result = [];
		for(var i=0,len=this.models.length; i<len; i++){
			var model = this.models[i];
			result.push(model.get());
		}
		return result;
	};
	TreeCollection.prototype.clearModels = function(){
		this.models = [];
	};
	
	// model
	function TreeModel(){
		this.node    = {};
		return this;
	};
	// Setter
	TreeModel.prototype.set = function(data){
		if(this.adapter){
			this.node = this.adapter(data);
		}else{
			this.node = data;
		}
		return this;
	};
	TreeModel.prototype.get = function(){
		return this.node;
	};
	
	// Module's method
	var create = function(param){
		var adps = {},
			temp = {};
		if(param){
			if('adapter'  in param){ adps = param.adapter;  };
			if('template' in param){ temp = param.template; };
		};
		
		// Model Generate
		if('model' in adps){ TreeModel.prototype.adapter = adps.model; };
		var model = new TreeModel();
		
		// Collection Generate
		if('collection' in adps){ TreeCollection.prototype.adapter = adps.collection; };
		var collection = new TreeCollection(model);
		if('collection' in temp){ collection.template = temp.collection; };
		
		return collection;
	}
	
	// Public Methods
	return {
		create : create
	};
})();
