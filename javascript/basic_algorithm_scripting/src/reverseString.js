/**
 * Reverse the provided string.
 *
 * @link https://www.freecodecamp.com/challenges/reverse-a-string
 * 
 * @param  {string} str
 * @return {string}
 */
var reverseString = (function(str) {
    'use strict';

    if (str === '') {
        return str;
    }

    var reversed = '';
    var i = str.length - 1;

    for (i; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
});

module.exports = reverseString;
