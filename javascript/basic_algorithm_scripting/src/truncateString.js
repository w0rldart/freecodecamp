/**
 * Truncate a string (first argument) if it is longer than
 * the given maximum string length (second argument).
 * Return the truncated string with a ... ending.
 *
 * @link https://www.freecodecamp.com/challenges/truncate-a-string
 *
 * @param  {string} str
 * @param  {number} limit
 * @return {string}
 */
var truncateString = (function(str, limit) {
    var newStr = str;

    if (str.length > limit) {
        if (limit > 3) {
            limit = limit - 3;
        }
        newStr = str.slice(0, limit) + '...';
    }

    return newStr;
});

module.exports = truncateString;
