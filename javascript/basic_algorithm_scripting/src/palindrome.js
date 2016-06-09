var palindrome = (function(str) {
    var
        filteredStr,
        reversedStr,
        i
    ;

    filteredStr = str.toLowerCase();
    filteredStr = filteredStr.replace(/[\W_]+/g, '');

    i = filteredStr.length - 1;
    reversedStr = '';

    for (i; i >= 0; i--) {
        reversedStr += filteredStr[i];
    }

    return reversedStr === filteredStr;
});

module.exports = palindrome;
