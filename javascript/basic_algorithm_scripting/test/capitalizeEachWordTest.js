var test = require('tape');
var capitalizeEachWord = require('../src/capitalizeEachWord');

test('Test for string', (assert) => {
    const result = capitalizeEachWord('I\'m a little tea pot');

    assert.true(typeof result === 'string');

    assert.end();
});

test('I\'m a little tea pot', (assert) => {
    const expected = 'I\'m A Little Tea Pot';
    const actual = capitalizeEachWord('I\'m a little tea pot');

    assert.equal(expected, actual);

    assert.end();
});

test('sHoRt AnD sToUt', (assert) => {
    const expected = 'Short And Stout';
    const actual = capitalizeEachWord('sHoRt AnD sToUt');

    assert.equal(expected, actual);

    assert.end();
});

test('HERE IS MY HANDLE HERE IS MY SPOUT', (assert) => {
    const expected = 'Here Is My Handle Here Is My Spout';
    const actual = capitalizeEachWord('HERE IS MY HANDLE HERE IS MY SPOUT');

    assert.equal(expected, actual);

    assert.end();
});
