/**
 * Return the factorial of the provided integer.
 * 
 * If the integer is represented with the letter n,
 * a factorial is the product of all positive integers less than or equal to n.
 * 
 * Factorials are often represented with the shorthand notation n!
 * 
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 *
 * @url https://www.freecodecamp.com/challenges/factorialize-a-number
 * 
 * @param  {number} number
 * @return {number}
 */
var factorialize = (function(number) {
    'use strict';

    if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorialize(number - 1);
});

module.exports = factorialize;
