const axios = require("axios");
const utils = require("../utils/utils");
const cheerio = require("cheerio");

class BattlelogClient {
	
	
	
	constructor(options = {}){
		if(options && typeof options !== "object"){
			throw Error(`Parameter 'options' is required to be an object.  While it is ${utils.getArticle(typeof options)} ${typeof options}.`);
		}

		
		this.axios = axios.create({
			baseURL: 'https://battlelog.battlefield.com/',
  timeout: 1000,
  headers: {'X-Requested-With': 'XMLHttpRequest', 'X-AjaxNavigation': '1'}
		})
	}}
	
