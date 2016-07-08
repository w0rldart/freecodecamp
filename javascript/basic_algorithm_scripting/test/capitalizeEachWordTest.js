const test = require('tape');
const capitalizeEachWord = require('../src/capitalizeEachWord');

test('function output is typeof string', (assert) => {
    const result = capitalizeEachWord('I\'m a little tea pot');

    assert.true(typeof result === 'string', 'capitalizeEachWord() should return a string.');

    assert.end();
});

test('capitalize', (assert) => {
    assert.plan(3);

    const case1 = {
        expected: 'I\'m A Little Tea Pot',
        actual: capitalizeEachWord('I\'m a little tea pot')
    };

    const case2 = {
        expected: 'Short And Stout',
        actual: capitalizeEachWord('sHoRt AnD sToUt')
    };

    const case3 = {
        expected: 'Here Is My Handle Here Is My Spout',
        actual: capitalizeEachWord('HERE IS MY HANDLE HERE IS MY SPOUT')
    };

    assert.equal(case1.actual, case1.expected, 'should return ' + case1.expected);
    assert.equal(case2.actual, case2.expected, 'should return ' + case2.expected);
    assert.equal(case3.actual, case3.expected, 'should return ' + case3.expected);

    assert.end();
});
