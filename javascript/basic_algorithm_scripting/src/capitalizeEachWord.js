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
