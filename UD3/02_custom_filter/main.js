const assert = require('assert').strict;

function select(array, condition) {
    return array.filter(condition); 
}
function pairs(n) {
    return n % 2 === 0;
}
function gt15(n) {
    return n > 15;
}
function lt10(n) {
    return n < 10;
}
let values = [1, 2, 3, 5, 7, 13, 17, 23, 29];

assert.deepStrictEqual(select(values, pairs), [2]);
assert.deepStrictEqual(select(values, gt15), [17, 23, 29]);
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7]);