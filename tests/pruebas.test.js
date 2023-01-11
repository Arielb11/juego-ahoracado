"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe('archivo de índice de prueba', function () {
    test('cadena vacía debe dar como resultado cero', function () {
        expect((0, index_1.add)('')).toBe(0);
    });
});
