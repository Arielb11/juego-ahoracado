"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("@cucumber/cucumber");
var chai_1 = require("chai");
var arriesgarPalabra_1 = require("../../src/arriesgarPalabra");
var ahorcado;
var actual;
(0, cucumber_1.Given)("se resta una vida del juego", function () {
    ahorcado = new arriesgarPalabra_1.Ahorcado(String('vicky').split(''));
});
(0, cucumber_1.When)("Se resta una vida de 6 que tiene el participante", function () {
    actual = ahorcado.vidas - 1;
    return actual;
});
(0, cucumber_1.Then)("deben quedar {int} vidas", function (expected) {
    (0, chai_1.expect)(actual).to.be.equal(expected);
});
