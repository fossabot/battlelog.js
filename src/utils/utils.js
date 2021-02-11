
function getArticle(str, plural) {
	if(!str) throw Error("Expected parameter 'str'. Found no parameters.");
	
	if(typeof str !== "string") throw Error(`Expected parameter 'str' to be a string. While it is actually ${getArticle(typeof str)} ${typeof str}.` );
	if(plural && plural === true) return 'some';
	if('aiueo'.includes(str[0])) return 'an';
	return 'a';
}


function structureData(cls, data, blacklist = []) {
	if(!data) return;
	if(!cls) throw Error();
	if(!['array', 'undefined'].includes(typeof blacklist)) throw Error();

		for(let [name, value] of Object.entries(data)){
			if(!blacklist.includes(name)){
			cls[name] = value;
			} 
		}

		return cls;
}

module.exports.getArticle = getArticle;
module.exports.structureData = structureData;
