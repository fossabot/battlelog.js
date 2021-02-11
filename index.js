(async function() {
	const axios = require('axios');
	const fs = require('fs');

	const cheerio = require('cheerio');
	const res = await axios({
		method: 'GET',
		url: 'https://battlelog.battlefield.com/bf3/overviewPopulateStats/280966984/bf3-us-assault/1/',
		headers: { 'X-Requested-With': 'XMLHttpRequest', 'X-AjaxNavigation': '1' }
	});
	console.log(res.data);
	


})();

// .icon-danger
