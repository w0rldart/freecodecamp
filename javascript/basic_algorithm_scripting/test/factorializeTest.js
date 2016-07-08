const test = require('tape');
const factorialize = require('../src/factorialize');

test('function output is typeof number', (assert) => {
    const result = factorialize(5);

    assert.true(typeof result === 'number', 'should return a number');

    assert.end();
});

test('factorialize', (assert) => {
    assert.plan(4);

    const case1 = {
        expected: 1,
        actual: factorialize(1)
    };

    const case2 = {
        expected: 120,
        actual: factorialize(5)
    };

    const case3 = {
        expected: 3628800,
        actual: factorialize(10)
    };

    const case4 = {
        expected: 2432902008176640000,
        actual: factorialize(20)
    };

    assert.equal(case1.actual, case1.expected, 'should return 1');
    assert.equal(case2.actual, case2.expected, 'should return 120');
    assert.equal(case3.actual, case3.expected, 'should return 3628800');
    assert.equal(case4.actual, case4.expected, 'should return 2432902008176640000');

    assert.end();
});
