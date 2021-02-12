
function getArticle(str, plural) {
	if(!str) throw Error("Expected parameter 'str'. Found no parameters.");
	
	if(typeof str !== "string") throw Error(`Expected parameter 'str' to be a string. While it is actually ${getArticle(typeof str)} ${typeof str}.` );
	if(plural && plural === true) return 'some';
	if('aiueo'.includes(str[0])) return 'an';
	return 'a';
}

function setDefault(obj, prop, value){
	if(!obj[prop]) return obj[prop] = value;

}


function validateParams(data, rules){
	if(rules.alias){
		for(let [name], [value] of Object.entries(rules.alias)){
			data[name] = data[name] || data[value];
		}
	}
	if(rules.required && rules.required.length){
		for(let required of rules.required){
			if(!data[required]) throw Error(`Option '${required}' is required. While it's not provided.`);
		}
	}
	
	return data;
	
}
function structureData(cls, data, options = {}) {
	if(!data) return;
	if(!cls) throw Error();

	setDefault(options, 'blacklist', []);
	setDefault(options, 'nicknames', {});

	


		for(let [name, value] of Object.entries(data)){
			if(!options.blacklist.includes(name)){

			cls[options.nicknames[name] || name] = value;

			} 
		}

		return cls;
}

module.exports.getArticle = getArticle;
module.exports.structureData = structureData;
