/**
 * We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
 *
 * @link https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range
 *
 * @param  {array} arr
 * @return {number}
 */
var sumAll = (function(arr) {
    // The lowest number might not always come first, so will order the array for just in case.
    arr = arr.sort(function(a, b) {
        return a - b;
    });

    var sum = arr[0] + arr[1];
    var i;

    var firstRange = arr[0] + 1;
    var lastRange = arr[1] - 1;

    for (i = firstRange; i <= lastRange; i++) {
        sum += i;
    }

    return sum;
});

module.exports = sumAll;
