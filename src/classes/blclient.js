
const utils = require("../utils/utils");
const { GameClient } = require("./gameclient");

class BattlelogClient {
	
	
	
	constructor(options = {}){
		if(options && typeof options !== "object"){
			throw Error(`Parameter 'options' is required to be an object.  While it is ${utils.getArticle(typeof options)} ${typeof options}.`);
		}


	}
	
	game() {

	}
	
}
	
