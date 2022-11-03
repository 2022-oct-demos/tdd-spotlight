// IMPORT MODULES under test here:
import { addExclamationPoints, myFunction, returnAsAnArray } from '../functions.js';

const { test, skip } = QUnit;

skip('this test should pass', (expect) => {
    const expected = 'hello world';
    const actual = myFunction('world');
    expect.equal(actual, expected, 'hello world');

    const expected2 = 'hello Doris';
    const actual2 = myFunction('Doris');
    expect.equal(actual2, expected2, 'Doris');

    const expected3 = 'hello DIN';
    const actual3 = myFunction('FIN');
    expect.equal(actual3, expected3, 'FIN');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('this test should add 3 exclamation points', (expect) => {
    const expected = 'run!!!';
    const actual = addExclamationPoints('run');
    expect.equal(actual, expected);
});

test('returnAsAnArray should return an array', (expect) => {
    const expected = [1, 2, 3];
    const actual = returnAsAnArray(1, 2, 3);
    expect.deepEqual(actual, expected);

    const expected2 = [-5, 6, 7];
    const actual2 = returnAsAnArray(-5, 6, 7);
    expect.deepEqual(actual2, expected2);
});
