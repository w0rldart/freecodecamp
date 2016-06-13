/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 *
 * @link https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string
 *
 * @param {string} str
 * @param {number} num
 * @return {string}
 */
var repeatString = (function(str, num) {
    var repeated = '';

    if (num < 1) {
        return repeated;
    }

    for (var i = 1; i <= num; i++) {
        repeated += str;
    }

    return repeated;
});

module.exports = repeatString;
