var test = require('tape');
var truncateString = require('../src/truncateString');

test('Truncate to 11 characters', (assert) => {
    const expected = 'A-tisket...';
    const actual = truncateString('A-tisket a-tasket A green and yellow basket', 11);

    assert.equal(expected, actual, 'Outcome is not matching the expected');

    assert.end();
});

test('Truncate to a length equal to the string', (assert) => {
    const string = 'A-tisket a-tasket A green and yellow basket';
    const limit = string.length;

    const expected = string;
    const actual = truncateString(string, limit);

    assert.equal(expected, actual, 'Outcome is not matching the expected');

    assert.end();
});

test('Truncate to a length higher than the string\'s', (assert) => {
    const string = 'A-tisket a-tasket A green and yellow basket';
    const limit = string.length + 2;

    const expected = string;
    const actual = truncateString(string, limit);

    assert.equal(expected, actual, 'Outcome is not matching the expected');

    assert.end();
});

test('Truncate limit set to 1', (assert) => {
    const expected = 'A...';
    const actual = truncateString('A-', 1);

    assert.equal(expected, actual, 'Outcome is not matching the expected');

    assert.end();
});

test('Truncate limit set to 2', (assert) => {
    const expected = 'Ab...';
    const actual = truncateString('Absolutely Longer', 2);

    assert.equal(expected, actual, 'Outcome is not matching the expected');

    assert.end();
});
