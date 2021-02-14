const utils = require("../utils/utils");

class ServerBrowser {
	cache = new Map();

	constructor(client, data){
		this.client = client;
		
		structureData(data);
		
	}

	structureData(data){
		for(let server of data){
			this.cache.set(server.guid, new Server(client, server));
		}

		return this;
	}

	async fetch(){
		const res = await this.client.axios.get('/servers');

		this.structureData(res.data.context.servers);
	}
}