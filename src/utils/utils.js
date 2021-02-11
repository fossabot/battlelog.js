
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
/*
function checkEverythingOut(rules){
	checkEverythingOut({data: rules, })
}*/
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
