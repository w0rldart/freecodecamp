const test = require('tape');
const longestWord = require('../src/longestWord');

test('function output is typeof number', (assert) => {
    const result = longestWord('The quick brown fox jumped over the lazy dog');

    assert.true(typeof result === 'number', 'longestWord should return a number');

    assert.end();
});

test('longestWord', (assert) => {
    assert.plan(5);

    const case1 = {
        expected: 6,
        actual: longestWord('The quick brown fox jumped over the lazy dog')
    };

    const case2 = {
        expected: 5,
        actual: longestWord('May the force be with you')
    };

    const case3 = {
        expected: 6,
        actual: longestWord('Google do a barrel roll')
    };

    const case4 = {
        expected: 8,
        actual: longestWord('"What is the average airspeed velocity of an unladen swallow')
    };

    const case5 = {
        expected: 19,
        actual: longestWord('What if we try a super-long word such as otorhinolaryngology')
    };

    assert.equal(case1.actual, case1.expected, 'should return ' + case1.expected);
    assert.equal(case2.actual, case2.expected, 'should return ' + case2.expected);
    assert.equal(case3.actual, case3.expected, 'should return ' + case3.expected);
    assert.equal(case4.actual, case4.expected, 'should return ' + case4.expected);
    assert.equal(case5.actual, case5.expected, 'should return ' + case5.expected);

    assert.end();
});
