"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("@cucumber/cucumber");
var chai_1 = require("chai");
var arriesgarPalabra_1 = require("../../src/arriesgarPalabra");
var ahorcado;
var actual;
(0, cucumber_1.Given)("se gana el juego del ahorcado", function () {
    ahorcado = new arriesgarPalabra_1.Ahorcado(new String('vicky').split(''));
});
(0, cucumber_1.When)("el jugador arriesga la palabra {string}", function (palabraGanadora) {
    var palabra = new String(palabraGanadora).split('');
    actual = ahorcado.adivinaPlabra(palabra);
    return actual;
});
(0, cucumber_1.Then)("el resultado debe ser {string} y reiniciarse el juego", function (expected) {
    var result = false;
    if (expected === "verdadero") {
        result = true;
    }
    (0, chai_1.expect)(actual).to.be.equal(result);
});
