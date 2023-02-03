"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("@cucumber/cucumber");
var chai_1 = require("chai");
var arriesgarPalabra_1 = require("../../src/arriesgarPalabra");
var ahorcado;
var actual;
(0, cucumber_1.Given)("ahorcado letra", function () {
    ahorcado = new arriesgarPalabra_1.Ahorcado(new String('vicky').split(''));
    ahorcado.vidas = 6;
});
(0, cucumber_1.When)("quiero arriesgar la letra {string}", function (letra) {
    actual = ahorcado.adivinarLetra("v");
    return actual;
});
(0, cucumber_1.Then)("el resulado es {string}", function (expected) {
    var result = false;
    if (expected == "verdadero") {
        result = true;
    }
    (0, chai_1.expect)(actual).to.be.equal(result);
});
