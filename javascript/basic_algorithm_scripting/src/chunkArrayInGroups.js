/**
 * Write a function that splits an array (first argument) into groups the length
 * of size (second argument) and returns them as a two-dimensional array.
 *
 * @link https://www.freecodecamp.com/challenges/chunky-monkey
 *
 * @param  {array} arr
 * @param  {number} size
 * @return {array}
 */
var chunkArrayInGroups = (function(arr, size) {
    var newArr = [];
    var sliceEnd = size;

    for (var i = 0; i < arr.length; i++) {
        if (i % size === 0) {
            newArr.push(arr.slice(i, sliceEnd));
            sliceEnd += size;
        }
    }

    return newArr;
});

module.exports = chunkArrayInGroups;
