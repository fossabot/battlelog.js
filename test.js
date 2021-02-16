(async function(){
	
const bl = require("./src/index.js");

var client = bl();

var bf3 = client.game('bf4');

var user = await bf3.users.fetch( "DANNYonPC");



console.log(user);
})()

