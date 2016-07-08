const test = require('tape');
const chunkArrayInGroups = require('../src/chunkArrayInGroups');

test('chunk array in groups of 2', (assert) => {
    assert.plan(3);

    const case1 = {
        expected: [["a", "b"], ["c", "d"]],
        actual: chunkArrayInGroups(["a", "b", "c", "d"], 2)
    };

    const case2 = {
        expected: [[0, 1], [2, 3], [4, 5]],
        actual: chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)
    };

    const case3 = {
        expected: [[0, 1], [2, 3], [4, 5], [6, 7], [8]],
        actual: chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
    };

    assert.deepEqual(case1.actual, case1.expected, 'should return [["a", "b"], ["c", "d"]]');
    assert.deepEqual(case2.actual, case2.expected, 'should return [[0, 1], [2, 3], [4, 5]]');
    assert.deepEqual(case3.actual, case3.expected, 'should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]');

    assert.end();
});

test('chunk array in groups of 3', (assert) => {
    assert.plan(2);

    const case1 = {
        expected: [[0, 1, 2], [3, 4, 5]],
        actual: chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)
    };

    const case2 = {
        expected: [[0, 1, 2], [3, 4, 5], [6]],
        actual: chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
    };

    assert.deepEqual(case1.actual, case1.expected, 'should return [[0, 1, 2], [3, 4, 5]]');
    assert.deepEqual(case2.actual, case2.expected, 'should return [[0, 1, 2], [3, 4, 5], [6]]');

    assert.end();
});

test('chunk array in groups of 4', (assert) => {
    const case1 = {
        expected: [[0, 1, 2, 3], [4, 5]],
        actual: chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
    };

    const case2 = {
        expected: [[0, 1, 2, 3], [4, 5, 6, 7], [8]],
        actual: chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
    };

    assert.deepEqual(case1.expected, case1.actual, 'should return [[0, 1, 2, 3], [4, 5]]');
    assert.deepEqual(case2.expected, case2.actual, 'should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]');

    assert.end();
});
