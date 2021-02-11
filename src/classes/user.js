const { Platoon } = require("./platoon");
const utils = require("../utils/utils");

class User {
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
		
		utils.structureData(this, data, ["userinfo", "user", "tenFriends", "tenFriends", "platoons", "platoonFans"]);
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
		this.isOnline = data.presence.isOnline || false;
		this.presenceUpdatedAt = data.presence.updatedAt;
		this.presenceStates = data.presence.presenceStates;
		}

		if(data.userStatusMessage){
			this.statusMessageChange
		}
		
		this.client.users.cache.set(this.userId,this);
	}

	


}

module.exports.User = User;