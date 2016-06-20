var test = require('tape');
var confirmEnding = require('../src/confirmEnding');

test('confirmEnding should return a boolean in any case', (assert) => {
    const resultTrue = confirmEnding('Bastian', 'n');
    const resultFalse = confirmEnding('Bastian', 'a');

    assert.true(resultTrue, 'Bastian ends in n');
    assert.false(resultFalse, 'Bastian doesn\'t end in a');

    assert.end();
});

test('confirmEnding tests for false cases', (assert) => {
    const case1 = {
        string: 'Walking on water and developing software from a specification are easy if both are frozen',
        ending: 'specification',
        result: function() {
            return confirmEnding(this.string, this.ending);
        }
    };

    const case2 = {
        string: 'He has to give me a new name',
        ending: 'na',
        result: function() {
            return confirmEnding(this.string, this.ending);
        }
    };

    const case3 = {
        string: 'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
        ending: 'mountain',
        result: function() {
            return confirmEnding(this.string, this.ending);
        }
    };

    assert.false(case1.result(), 'Returns false that "' + case1.string + '" ends in "' + case1.ending + '"');
    assert.false(case2.result(), 'Returns false that "' + case2.string + '" ends in "' + case2.ending + '"');
    assert.false(case3.result(), 'Returns false that "' + case3.string + '" ends in "' + case3.ending + '"');

    assert.end();
});

test('confirmEnding tests for true cases', (assert) => {
    const case1 = {
        string: 'He has to give me a new name',
        ending: 'name',
        result: function() {
            return confirmEnding(this.string, this.ending);
        }
    };

    const case2 = {
        string: 'He has to give me a new name',
        ending: 'me',
        result: function() {
            return confirmEnding(this.string, this.ending);
        }
    };

    assert.true(case1.result(), 'Returns true that "' + case1.string + '" ends in "' + case1.ending + '"');
    assert.true(case2.result(), 'Returns true that "' + case2.string + '" ends in "' + case2.ending + '"');

    assert.end();
});
