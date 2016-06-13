var test = require('tape');
var repeatString = require('../src/repeatString');

test('Repeat 3 times * character', (assert) => {
    const expected = '***';
    const actual = repeatString('*', 3);

    assert.equal(expected, actual, 'Not matching the expected');

    assert.end();
});

test('Repeat 3 times abc', (assert) => {
    const expected = 'abcabcabc';
    const actual = repeatString('abc', 3);

    assert.equal(expected, actual, 'Should return a repeated string');

    assert.end();
});

test('Repeat 4 times abc', (assert) => {
    const expected = 'abcabcabcabc';
    const actual = repeatString('abc', 4);

    assert.equal(expected, actual, 'Should return a repeated string');

    assert.end();
});

test('Repeat 1 time abc', (assert) => {
    const expected = 'abc';
    const actual = repeatString('abc', 1);

    assert.equal(expected, actual, 'Should return initial string');

    assert.end();
});

test('Repeat 8 times * character', (assert) => {
    const expected = '********';
    const actual = repeatString('*', 8);

    assert.equal(expected, actual, 'Not matching the expected');

    assert.end();
});

test('Repeat negative', (assert) => {
    const expected = '';
    const actual = repeatString('abc', -2);

    assert.equal(expected, actual, 'Not matching the expected');

    assert.end();
});
