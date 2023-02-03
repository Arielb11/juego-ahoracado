"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ahorcado = void 0;
var Ahorcado = /** @class */ (function () {
    function Ahorcado(palabra) {
        this.vidas = 6;
        this.palabra = palabra;
    }
    Ahorcado.prototype.adivinaPlabra = function (palabra) {
        var resultado;
        if (palabra === this.palabra) {
            resultado = true;
        }
        else {
            resultado = false;
        }
        return resultado;
    };
    Ahorcado.prototype.adivinarLetra = function (letter) {
        var resultado = false;
        if (this.palabra.includes(letter) && this.vidas > 0) {
            resultado = true;
        }
        return resultado;
    };
    ;
    return Ahorcado;
}());
exports.Ahorcado = Ahorcado;
