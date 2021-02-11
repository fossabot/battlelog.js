class Platoon {


	#badgePathRaw;

	constructor(client, data){
	if(data){
	this.structureData(data);
	}
	}

	structureData(data){
		for(let [name, value] of Object.entries(data)){
			if(!["badgePath"].includes(name)){
			this[name] = value;
			}
		}


		this.#badgePathRaw = data.badgePath;
		
	}

	getBadge(options = {}){

		if(!options.format) options.format = "png";

		if(!options.size) options.size = 128;

		if(typeof options.format !== 'string') throw Error("Option 'format' is required to be a string.");



		return this["#badgePathRaw"].split("[FORMAT]").join(options.format).split("[SIZE]").join(options.size);
	}

	async fetch(){
		const res = await this.client.axios.get(`/platoon/${this.id}/`);

		this.structureData(res.context.platoon);

		this.isFan = res.context.isFan;
	}
}

module.exports.Platoon = Platoon;