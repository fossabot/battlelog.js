const { Platoon } = require("./platoon");
const utils = require("../utils/utils");

class User {

	#gravatar;

	constructor (client, data){
		
	this.client = client;	
	if(typeof data === "object"){
	this.structureData(data);
	} else if(typeof data == "string"){
		this.name  = data;
	}
	}

	async fetch(){
			const res = await this.client.axios.get(`/user/${this.name}`);

			const profile = res.data.context.profileCommon;
			this.structureData(profile);
this.soldiers = res.data.context.soldiersBox;
	return this;
	}

	structureData(data){
		
		utils.structureData(this, data, {blacklist: ["userinfo", "user", "tenFriends", "tenFriends", "platoons", "platoonFans", "presence"]});
		if(data.user){
		utils.structureData(this, data.user, {blacklist: ["gravatarMd5"]});

		this.#gravatar = data.user.gravatarMd5;

		}


		if(data.tenFriends){
			this.friends = data.tenFriends.map((i) => new User(this.client, i));
		}

		if(data.platoons){
			this.platoons = data.platoons.map((i) => new Platoon(this.client, i));

		}
		
		if(data.platoonFans){
			this.platoonFans = data.platoonFans.map((i) => new Platoon(this.client, i));
		}

		if(data.presence){
	
		utils.structureData(this, data.presence, {nicknames: {updatedAt: "presenceUpdatedAt"}})
		}
		if(data.userinfo){
			utils.structureData(this, data.userinfo);
		}
		/*if(data.userStatusMessage){
			this.statusMessageChange
		}*/
		
		this.client.users.cache.set(this.userId,this);
	}

	
	displayAvatarURL(options = {}){
		if(options.size && options.size > 2048) throw Error("Option 'size' is required to be less than 2048.");
		if(options.size && options.size < 1) throw Error("Option 'size' is required to be more than 1.")
	}

}

module.exports.User = User;