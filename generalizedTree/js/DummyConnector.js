/* 
 * GeneralTree Version 0.9 prototype
 * Author  : Takep @ ClubFriday
 * Lisence : MIT Lisense
 * 
 * This Module provides a repository as Request's' Object' which contains 'Request Object'.
 * 'Request Object' can make a REST request.
 * You can add any repository to 'Request Object' and use it.
 *
 */
DummyConnector = (function(){
	// Ajax Setting Repository
	var requests = new Requests();
	
	function Requests(){
		this.repo = {}
		return this;
	};
	Requests.prototype.set = function(param){
		if( ('service' in param) && ('name' in param) && ('type' in param) ){
			// サービス未存在時、リポジトリにサービスを追加する。
			if( !(param.service in this.repo) ){ this.repo[param.service] = {}; };
			// ワーク変数
			var myreq = this.repo[param.service];
			// URLの登録
			if( 'url' in param ){
				myreq['baseUri'] = param.url;
			}
			myreq[param.name] = new Request(myreq.baseUri, param.type);
			return myreq[param.name];
		}
	};
	Requests.prototype.get = function(service, name){
		var res = this.repo;
		if(service){ res = res[service]; };
		if(name)   { res = res[name]; };
		if(res)    { return res; }else{ return false; };
	}
	
	function Request(baseUri, type){
		this.baseUri = baseUri;
		this.type = type;
		return this;
	};
	// タイプごとのパラメータ差分を吸収し、リクエストを発行する
	Request.prototype.execute = function(module, option){
		var id,success,error;
		if(!option){ option = {}; };
		if('id' in option){ id  = option.id; }
		if('success' in option){ success = option.success; };
		if('error' in option){ error = option.error; };
		
		this[this.type](module, option);
	};
	Request.prototype.get = function(module, option){
		var url  = this.baseUri,
			that = this;
		// id指定時URLに付加
		if('id' in option){ url = url + option.id +'/'; };
		
		// Ajaxdummy
		var data = Stub;
		if('success' in option){
			that.callback(data, module, option.success);
		}else if('callback' in module){
			that.callback(data, module);
		}
	};
	Request.prototype.callback = function(data, module, option){
		if(option){
			module[option](data);
		}else{
			module.callback(data);
		}
	};
	
	var set = function(param){
		return requests.set(param);
	};
	var get = function(){
		return requests.get(service, name);
	}
	
	// Public Methods
	return {
		requests : requests,
		set : set,
		get : get
	};
})();
