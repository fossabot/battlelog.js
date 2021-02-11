(async function() {
	const axios = require('axios');
	const fs = require('fs');

	const cheerio = require('cheerio');
	const res = await axios({
		method: 'GET',
		url: 'https://battlelog.battlefield.com/bf3/user/Nefomemes/',
		headers: { 'X-Requested-With': 'XMLHttpRequest', 'X-AjaxNavigation': '1' }
	});
	console.log(res.data);
	console.log(res.data.context)
	


})();

// .icon-danger
