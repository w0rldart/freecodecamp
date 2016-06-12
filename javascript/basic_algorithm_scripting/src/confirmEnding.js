/**
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 *
 * @url https://www.freecodecamp.com/challenges/confirm-the-ending
 * 
 * @param  {string} str
 * @param  {string} target
 * @return {boolean}
 */
var confirmEnding = (function(str, target) {
	return (str.substr(-target.length) ===  target);
});

module.exports = confirmEnding;