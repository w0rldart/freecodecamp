var reverseString = (function(string) {
    'use strict';

    if (string === '') {
        return string;
    }

    var reversed = '';
    var i = string.length - 1;

    for (i; i >= 0; i--) {
        reversed += string[i];
    }

    return reversed;
});

module.exports = reverseString;
