var factorialize = (function(number) {
    'use strict';

    if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorialize(number - 1);
});

module.exports = factorialize;
