function getArticle(str, plural) {
	if(!str) throw Error("Expected parameter 'str'. Found no parameters.");
	
	if(typeof str !== "string") throw Error(`Expected parameter 'str' to be a string. While it is actually ${getArticle(typeof str)} ${typeof str}.` );
	if(plural && plural === true) return 'some';
	if('aiueo'.includes(str[0])) return 'an';
	return 'a';
}

module.exports.getArticle = getArticle;