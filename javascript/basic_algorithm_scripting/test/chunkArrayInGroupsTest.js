var test = require('tape');
var chunkArrayInGroups = require('../src/chunkArrayInGroups');

test('chunkArrayInGroups of 2', (assert) => {
    const expected = [["a", "b"], ["c", "d"]];
    const actual = chunkArrayInGroups(["a", "b", "c", "d"], 2);

    assert.deepEqual(actual, expected);

    assert.end();
});

test('chunkArrayInGroups of 3', (assert) => {
    const expected = [[0, 1, 2], [3, 4, 5]];
    const actual = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);

    assert.deepEqual(actual, expected);

    assert.end();
});

test('chunkArrayInGroups of 2', (assert) => {
    const expected = [[0, 1], [2, 3], [4, 5]];
    const actual = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);

    assert.deepEqual(expected, actual);

    assert.end();
});

test('chunkArrayInGroups of 4', (assert) => {
    const expected = [[0, 1, 2, 3], [4, 5]];
    const actual = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

    assert.deepEqual(expected, actual);

    assert.end();
});

test('chunkArrayInGroups of 3', (assert) => {
    const expected = [[0, 1, 2], [3, 4, 5], [6]];
    const actual = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);

    assert.deepEqual(expected, actual);

    assert.end();
});

test('chunkArrayInGroups of 4', (assert) => {
    const expected = [[0, 1, 2, 3], [4, 5, 6, 7], [8]];
    const actual = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);

    assert.deepEqual(expected, actual);

    assert.end();
});

test('chunkArrayInGroups of 2', (assert) => {
    const expected = [[0, 1], [2, 3], [4, 5], [6, 7], [8]];
    const actual = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

    assert.deepEqual(actual, expected);

    assert.end();
});
