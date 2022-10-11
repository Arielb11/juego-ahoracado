"use strict";
exports.__esModule = true;
exports.add = void 0;
function add(numbers) {
    var integers = numbers.split(',').map(function (x) { return parseInt(x); });
    var negatives = integers.filter(function (x) { return x < 0; });
    if (negatives.length > 0)
        throw new RangeError('Negatives are not allowed: ' + negatives.join(', '));
    return integers
        .filter(function (x) { return x <= 1000; })
        .reduce(function (a, b) { return a + b; }, 0);
}
exports.add = add;
var result = add('1, 2, 4, 5');
console.log(result);
