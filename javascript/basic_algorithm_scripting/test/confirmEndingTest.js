var test = require('tape');
var confirmEnding = require('../src/confirmEnding');

test('It should return a boolean', (assert) => {
    const result = confirmEnding('Bastian', 'n');

    assert.true(typeof result === 'boolean', 'It should return a boolean');

    assert.end();
});

test('test confirmEnding for false', (assert) => {
    const expected = false;
    const actual = confirmEnding('Walking on water and developing software from a specification are easy if both are frozen', 'specification');

    assert.equal(expected, actual, 'It should return false');

    assert.end();
});

test('test confirmEnding for true', (assert) => {
    const expected = true;
    const actual = confirmEnding('He has to give me a new name', 'name');

    assert.equal(expected, actual, 'It should return true');

    assert.end();
});

test('test confirmEnding for true', (assert) => {
    const expected = true;
    const actual = confirmEnding('He has to give me a new name', 'me');

    assert.equal(expected, actual, 'It should return true');

    assert.end();
});

test('test confirmEnding for false', (assert) => {
    const expected = false;
    const actual = confirmEnding('He has to give me a new name', 'na');

    assert.equal(expected, actual, 'It should return false');

    assert.end();
});

test('test confirmEnding for false', (assert) => {
    const expected = false;
    const actual = confirmEnding('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain');

    assert.equal(expected, actual, 'It should return false');

    assert.end();
});