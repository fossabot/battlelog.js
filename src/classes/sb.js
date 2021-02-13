const utils = require("../utils/utils");

class ServerBrowser {
	cache = new Map();

	constructor(client, data){
		this.client = client;
		
		
	}

	structureData(data){
		for(let server of data){
			this.cache.set(server.guid, new Server(client, server));
		}

		return this;
	}
}