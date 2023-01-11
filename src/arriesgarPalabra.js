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
        if (palabra !== this.palabra) {
            resultado = false;
        }
        else {
            resultado = true;
        }
        return resultado;
    };
    Ahorcado.prototype.adivinarLetra = function (letra) {
        var resultado = this.palabra.includes(letra);
        if (this.vidas > 0) {
            if (!this.palabra.includes(letra)) {
                this.vidas = this.vidas - 1;
            }
        }
        else {
            resultado = false;
        }
        return resultado;
    };
    return Ahorcado;
}());
exports.Ahorcado = Ahorcado;
