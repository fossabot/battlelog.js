
const utils = require("../utils/utils");
const { GameClient } = require("./gameclient");

class BattlelogClient {
	type = "BattlelogClient"
	
	
	constructor(options = {}){
		if(options && typeof options !== "object"){
			throw Error(`Parameter 'options' is required to be an object.  While it is ${utils.getArticle(typeof options)} ${typeof options}.`);
		}


	}
	
	game(...params) {
		return new GameClient(this, ...params);

	}
	
}
	
module.exports.BattlelogClient = BattlelogClient;