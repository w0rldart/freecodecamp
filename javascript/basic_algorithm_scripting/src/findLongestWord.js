var findLongestWord = (function(str) {
    'use strict';

    var strArray = str.split(' ');
    var arrayLength = strArray.length;
    var i = 0;
    var longest = 0;

    for (i; i < arrayLength; i++) {
        if (strArray[i].length > longest) {
            longest = strArray[i].length;
        }
    }

    return longest;
});

module.exports = findLongestWord;
