var test = require('tape');
var sumAll = require('../src/sumAll');

test('Test sumAll returns number', (assert) => {
    const output = sumAll([1, 5]);

    assert.true(typeof output === 'number', 'sumAll should return a number');

    assert.end();
});
