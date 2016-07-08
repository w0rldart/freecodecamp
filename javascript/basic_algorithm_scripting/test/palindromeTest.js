const test = require('tape');
const palindrome = require('../src/palindrome');

test('function output is typeof boolean', (assert) => {
    const result = palindrome('eye');

    assert.true(typeof result === 'boolean', 'It should return a boolean');

    assert.end();
});

test('string is palindrome', (assert) => {
    case1 = {
        expected: true,
        actual: palindrome('race car')
    };

    assert.equal(expected, actual, 'Should return true');

    assert.end();
});

test('string is not a palindrome', (assert) => {
    case1 = {
        expected: false,
        actual: palindrome('not a palindrome')
    };

    assert.equal(expected, actual, 'Should return false');

    assert.end();
});

test('A man, a plan, a canal. Panama', (assert) => {
    expected: true;
    actual: palindrome('A man, a plan, a canal. Panama');

    assert.equal(expected, actual, 'Should return true');

    assert.end();
});

test('never odd or even', (assert) => {
    expected: true;
    actual: palindrome('never odd or even');

    assert.equal(expected, actual, 'Should return true');

    assert.end();
});

test('nope', (assert) => {
    expected: false;
    actual: palindrome('nope');

    assert.equal(expected, actual, 'Should return false');

    assert.end();
});

test('almostomla', (assert) => {
    expected: false;
    actual: palindrome('almostomla');

    assert.equal(expected, actual, 'Should return false');

    assert.end();
});

test('My age is 0, 0 si ega ym.', (assert) => {
    expected: true;
    actual: palindrome('My age is 0, 0 si ega ym.');

    assert.equal(expected, actual, 'Should return true');

    assert.end();
});

test('1 eye for of 1 eye.', (assert) => {
    expected: false;
    actual: palindrome('1 eye for of 1 eye.');

    assert.equal(expected, actual, 'Should return false');

    assert.end();
});

test('0_0 (: /-\ :) 0-0', (assert) => {
    expected: true;
    actual: palindrome('0_0 (: /-\ :) 0-0');

    assert.equal(expected, actual, 'Should return true');

    assert.end();
});

test('five|\_/|four', (assert) => {
    expected: false;
    actual: palindrome('five|\_/|four');

    assert.equal(expected, actual, 'Should return false');

    assert.end();
});
