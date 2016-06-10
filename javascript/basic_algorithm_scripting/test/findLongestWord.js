var test = require('tape');
var findLongestWord = require('../src/findLongestWord');

test('It should return a number', (assert) => {
    const result = findLongestWord('The quick brown fox jumped over the lazy dog');

    assert.true(typeof result === 'number', 'It should return a number');

    assert.end();
});

test('The quick brown fox jumped over the lazy dog', (assert) => {
    const result = findLongestWord('The quick brown fox jumped over the lazy dog');

    assert.equal(6, result, 'It should return 6');

    assert.end();
});

test('May the force be with you', (assert) => {
    const result = findLongestWord('May the force be with you');

    assert.equal(5, result, 'It should return 5');

    assert.end();
});

test('Google do a barrel roll', (assert) => {
    const result = findLongestWord('Google do a barrel roll');

    assert.equal(6, result, 'It should return 6');

    assert.end();
});

test('"What is the average airspeed velocity of an unladen swallow', (assert) => {
    const result = findLongestWord('"What is the average airspeed velocity of an unladen swallow');

    assert.equal(8, result, 'It should return 8');

    assert.end();
});

test('What if we try a super-long word such as otorhinolaryngology', (assert) => {
    const result = findLongestWord('What if we try a super-long word such as otorhinolaryngology');

    assert.equal(19, result, 'It should return 19');

    assert.end();
});
