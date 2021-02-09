const { Platoon } = require("./platoon");

class User {
	constructor (client, data){
		
	this.client = client;	

	
	}

	async fetch(){
			const res = await this.client.axios.get(`/user/${this.name}`);

			const profile = res.data.context.profileCommon;
			this.structureData(profile);

	
	}

	structureData(data){
		for(let [name, value] of Object.entries(data)){
			if(!["userinfo", "user", "tenFriends", "tenFriends", "platoons"].includes(name)){
			this[name] = value;
			} else if(name === "user"){
				for(let [propName, propValue] of Object.entries(value)){
					this[propName] = propValue;
				}
			}
		}

		if(data.tenFriends){
			this.friends = data.tenFriends.map((i) => new User(this.client, i));
		}

		if(data.platoons){
			this.platoons = data.platoons.map((i) => new Platoon(this.client, i));

		}




	}


}

module.exports.User = User;