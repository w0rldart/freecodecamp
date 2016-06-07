var test = require('tape');
var reverseString = require('../src/reverseString');

test('Test reversing empty string', (assert) => {
    var expected = '';
    var actual = reverseString('');

    assert.equal(expected, actual, 'Was expecting an empty string');

    assert.end();
});

test('Test reversing alphabetic string', (assert) => {
    var expected = '123-olleh';
    var actual = reverseString('hello-321');

    assert.equal(expected, actual, 'Outcome is not matching the expected');

    assert.end();
});
