(async function() {
	const axios = require('axios');
	const fs = require('fs');
/*
const params = new URLSearchParams();
	params.append('redirect', '');
	params.append('submit', 'Sign in');
	params.append('email', process.env.EMAIL);
	params.append('password', process.env.PASSWORD);
 
	var res = await axios.post('https://battlelog.battlefield.com/bf3/gate', {
	params,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

	delete res.data;
	
	console.log(res);
	
*/

	var authRes = await axios.get('https://battlelog.battlefield.com/bf3/servers/show/pc/50790784-cb9b-4d22-b403-13df425a66d9/FHC-2-Main-Game-CQL-24-7-QQ-Group-299271357/', {

		headers: {
			"X-Requested-With": "XMLHttpRequest",
			"X-AjaxNavigation": "1",
		
		}
		
	});

	
	fs.writeFile(require('path').join(__dirname, 'src/assets/json/bf3/modes.json'), JSON.stringify(authRes.data.context.gameModes), function() {});

})();

// .icon-danger
 