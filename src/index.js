const { User } = require("./classes/user");
const { Platoon } = require("./classes/platoon");
const { GameClient } = require("./classes/gameclient");
const { BattlelogClient } = require("./classes/blclient");
const { UsersManager } = require("./classes/usersmanager");

module.exports = (...params) => {
	return new BattlelogClient(...params);
};

module.exports.BattlelogClient = BattlelogClient;
module.exports.GameClient = GameClient;
module.exports.Platoon = Platoon;
module.exports.User = User;
module.exports.UsersManager = UsersManager;

