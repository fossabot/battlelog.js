(async function() {
	const axios = require('axios');
	const fs = require('fs');

	const cheerio = require('cheerio');
	const res = await axios({
		method: 'GET',
		url: 'https://battlelog.battlefield.com/bf3/user/DANNYonPC',
		headers: { 'X-Requested-With': 'XMLHttpRequest', 'X-AjaxNavigation': '1' }
	});
	console.log(res.data);
	var ok = res.data.context.profileCommon;

	delete ok.platoons;
	delete ok.platoonFans;

	console.log(ok.tenFriends);

})();

// .icon-danger
