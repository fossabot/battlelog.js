const utils = require("../utils/utils");
const { User } = require("./user");
class Server {
	constructor(client, data) {
		this.client = client;
		this.structureData(data);


	}

	async fetch() {
		const res = await this.client.axios.get(`/servers/show/pc/${this.guid}`);
		this.structureData(res.data.context.server);
		this.players = res.data.context.players.map((i) => new User(this.client, i));
	}

	structureData(data) {
		utils.structureData(this, data, { 
			blacklist: ['settings'], 
			setBoolean: ['punkbuster', 'fairfight', 'hasPassword', 'ranked'] 
		})
		this.client.servers.cache.set(this.guid, this);

		this.settings = {};

		utils.structureData(this.settings, data.settings,
			{
				alias: {
					vhud: 'displayHUD',
					vffi: 'friendlyFire',
					vtkk: 'teamKillsBeforeKicked',
					vbdm: 'bulletDamageModifier',
					vmin: 'showMinimap',
					vkca: 'showKillcam',


				},
				setBoolean: [
					'vhud', 'vffi', 'vmin', 'vkca'
				]
			}
		)
			
		return this;
	}
}
//