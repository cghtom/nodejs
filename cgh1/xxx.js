var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function xxx1(inStr) {
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], "****");
    }
    for (idx in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords[idx], "****");
    }
    return inStr;
}
function addXxx1(word){
    customCensoredWords.push(word);
}
function getXxx1(){
    return censoredWords.concat(customCensoredWords);
}
exports.xxx1 = xxx1;
exports.addXxx1 = addXxx1;
exports.getXxx1 = getXxx1;