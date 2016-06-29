const test = require('tape');
const palindrome = require('../src/palindrome');

test('Test that it returns boolean', (assert) => {
    const result = palindrome('eye');

    assert.true(typeof result === 'boolean', 'It should return a boolean');

    assert.end();
});

test('race car', (assert) => {
    const expected = true;
    const actual = palindrome('race car');

    assert.equal(expected, actual, 'Should return true');

    assert.end();
});

test('not a palindrome', (assert) => {
    const expected = false;
    const actual = palindrome('not a palindrome');

    assert.equal(expected, actual, 'Should return false');

    assert.end();
});

test('A man, a plan, a canal. Panama', (assert) => {
    const expected = true;
    const actual = palindrome('A man, a plan, a canal. Panama');

    assert.equal(expected, actual, 'Should return true');

    assert.end();
});

test('never odd or even', (assert) => {
    const expected = true;
    const actual = palindrome('never odd or even');

    assert.equal(expected, actual, 'Should return true');

    assert.end();
});

test('nope', (assert) => {
    const expected = false;
    const actual = palindrome('nope');

    assert.equal(expected, actual, 'Should return false');

    assert.end();
});

test('almostomla', (assert) => {
    const expected = false;
    const actual = palindrome('almostomla');

    assert.equal(expected, actual, 'Should return false');

    assert.end();
});

test('My age is 0, 0 si ega ym.', (assert) => {
    const expected = true;
    const actual = palindrome('My age is 0, 0 si ega ym.');

    assert.equal(expected, actual, 'Should return true');

    assert.end();
});

test('1 eye for of 1 eye.', (assert) => {
    const expected = false;
    const actual = palindrome('1 eye for of 1 eye.');

    assert.equal(expected, actual, 'Should return false');

    assert.end();
});

test('0_0 (: /-\ :) 0-0', (assert) => {
    const expected = true;
    const actual = palindrome('0_0 (: /-\ :) 0-0');

    assert.equal(expected, actual, 'Should return true');

    assert.end();
});

test('five|\_/|four', (assert) => {
    const expected = false;
    const actual = palindrome('five|\_/|four');

    assert.equal(expected, actual, 'Should return false');

    assert.end();
});
