const utils = require("../utils/utils");
const { Server } = require("./server")
class ServerBrowser {
	cache = new Map();

	constructor(client, data){
		this.client = client;
		
<<<<<<< HEAD
		structureData(data);
=======
this.structureData(data);
>>>>>>> e91eafa168cb93a426fd3c315c94e892461f29d8
		
	}



	async fetch(){
		const res = await this.client.axios.get('/servers');

		this.structureData(res.data.context.servers);

		for(let server of res.data.context.servers){
			new Server(this.client, server);
		}
	}
<<<<<<< HEAD
}
=======
}
>>>>>>> e91eafa168cb93a426fd3c315c94e892461f29d8
