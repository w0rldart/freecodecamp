/**
 * Return true if the given string is a palindrome. Otherwise, return false.
 * 
 * A palindrome is a word or sentence that's spelled the same way both forward and backward,
 * ignoring punctuation, case, and spacing.
 *
 * @url https://www.freecodecamp.com/challenges/check-for-palindromes
 *     
 * @param  {string} str
 * @return {string}
 */
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
