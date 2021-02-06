class GameClient {
	constructor(client, options = {}) {
		if (!client) throw Error("The 'client' parameter is required. ");

		if (typeof options !== 'object')
			throw Error("Parameter 'options' is required to be an object. ");

		const game = options.game || 'bf4';
		if (typeof game !== 'string')
			throw Error("Parameter 'game' is required to be a string.");
		game = game.toLowerCase();

		if (!['bf3', 'bf4', 'mohw', 'bfh'].includes(game))
			throw Error('The game is not available in Battlelog.');

		this.game = game;
	}

	async login(email, password, options = {}) {
		if (!email && !password)
			throw Error("'email' and 'password' parameters are required.");

		if (!email) throw Error("Parameter 'email' is required.");
		if (!password) throw Error("Parameter 'password' is required.");
		const game = this.game;
		var res = await this.axios.post(`${game}/gate/login`, {
			data: {
				redirect: '',
				submit: 'Sign in',
				email: email,
				password: password
			}
		});
		
		
		
		
	}
}
