"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function add(numbers) {
    var integers = numbers.split(',').map(function (x) { return parseInt(x); });
    integers.push(parseInt(numbers.split('\n')[1]));
    return integers
        .filter(function (x) { return x <= 1000; })
        .reduce(function (a, b) { return a + b; }, 0);
}
exports.add = add;
var result = add('1, 2, 4\n 5');
