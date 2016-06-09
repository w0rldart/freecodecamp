var test = require('tape');
var factorialize = require('../src/factorialize');

test('It should return a number', (assert) => {
    const result = factorialize(5);

    assert.true(typeof result === 'number', 'It should return a number');

    assert.end();
});

test('Factorialize 1', (assert) => {
    const expected = 1;
    const actual = factorialize(1);

    assert.equal(expected, actual, 'It should return 1');

    assert.end();
});

test('Factorialize 5', (assert) => {
    const expected = 120;
    const actual = factorialize(5);

    assert.equal(expected, actual, 'It should return 120');

    assert.end();
});

test('Factorialize 10', (assert) => {
    const expected = 3628800;
    const actual = factorialize(10);

    assert.equal(expected, actual, 'It should return 3628800');

    assert.end();
});

test('Factorialize 20', (assert) => {
    const expected = 2432902008176640000;
    const actual = factorialize(20);

    assert.equal(expected, actual, 'It should return 2432902008176640000');

    assert.end();
});
