import './example.test.js';

import { checkForYes } from '../utils.js';

const test = QUnit.test;

test('will take in words that start with y and return true', (expect) => {
    const expected = true;
    const actual = checkForYes('yes');

    expect.equal(actual, expected);

});

test('will take in words that does NOT start with y and return true', (expect) => {
    const expected = false;
    const actual = checkForYes('nope');

    expect.equal(actual, expected);

});