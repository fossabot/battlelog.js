(async function() { const axios = require("axios");
const fs = require("fs");

const cheerio = require("cheerio");
const res = await axios({
	method: "POST",
	url: "https://battlelog.battlefield.com/bf3/gate/login/",
	headers: {"X-Requested-With":"XMLHttpRequest", "X-AjaxNavigation":"1"},
	data: {
		redirect: '',
		submit: 'Sign in',
		email: process.env.EMAIL,
		password: process.env.PASSWORD
	}
})
console.log(res)

const $ = cheerio.load(res.data);
console.log($(".icon-danger")[0].next)
console.log(res.headers)
})()

// .icon-danger 