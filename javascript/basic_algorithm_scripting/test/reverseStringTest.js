var test = require('tape');
var reverseString = require('../src/reverseString');

test('Test for string', (assert) => {
    const result = reverseString('abc');

    assert.true(typeof result === 'string', 'It should return only a string');

    assert.end();
});

test('Test reversing empty string', (assert) => {
    const expected = '';
    const actual = reverseString('');

    assert.equal(expected, actual, 'Was expecting an empty string');

    assert.end();
});

test('Test reversing alphabetic string', (assert) => {
    const expected = '123-olleh';
    const actual = reverseString('hello-321');

    assert.equal(expected, actual, 'Outcome is not matching the expected');

    assert.end();
});
