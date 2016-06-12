/**
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 *
 * @link https://www.freecodecamp.com/challenges/title-case-a-sentence
 * 
 * @param  {string} str
 * @return {string}
 */
var capitalizeEachWord = (function(str) {
    var strArray = str.toLowerCase().split(' ');
    var arrayLength = strArray.length;
    var i = 0;
    var modifiedStr = '';

    for (i; i < arrayLength; i++) {
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substr(1);
    }

    modifiedStr = strArray.join(' ');

    return modifiedStr;
});

module.exports = capitalizeEachWord;
