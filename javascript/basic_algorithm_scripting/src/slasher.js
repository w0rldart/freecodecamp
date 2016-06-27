/**
 * Return the remaining elements of an array after chopping off n elements from the head.
 * The head means the beginning of the array, or the zeroth index.
 *
 * @link https://www.freecodecamp.com/challenges/slasher-flick
 *
 * @param  {array} arr
 * @param  {number} howMany
 * @return {array}
 */
var slasher = (function(arr, howMany) {
    return arr.splice(howMany);
});

module.exports = slasher;
