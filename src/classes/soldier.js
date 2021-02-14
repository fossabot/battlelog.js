

class Soldier {
	constructor(user, data){
		this.user = user;
		
		
	}
	structureData(data){
		
	}
	
	async fetch(){
		const res = await this.user.client.axios.get(`overviewPopulateStats/280966984/bf3-us-assault/1`)

	}

}