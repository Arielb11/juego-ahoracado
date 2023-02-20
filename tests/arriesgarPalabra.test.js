"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arriesgarPalabra_1 = require("../src/arriesgarPalabra");
let describe;
describe('pruebas de ahorcado', function () {
    var test;
    var expect;
    var palabra = new String('hola').split('');
    var ahorcadoJuego = new arriesgarPalabra_1.Ahorcado(palabra);
    test('la palabra ingresada debe coincidir con la correcta', function () {
        expect(ahorcadoJuego.adivinaPlabra(palabra)).toBe(true);
    });
    test('la palabra ingresada no coicide con la correcta', function () {
        var palabraIncorrecta = new String('chau').split('');
        expect(ahorcadoJuego.adivinaPlabra(palabraIncorrecta)).toBe(false);
    });
});
describe('validar letra y restar vida', function () {
    var palabra = String('hola').split('');
    var ahorcadoJuego = new arriesgarPalabra_1.Ahorcado(palabra);
    var test;
    var expect;
    test('la letra ingresada se encuentra en la palabra mantiene las vidas iguales', function () {
        expect(ahorcadoJuego.adivinarLetra('l')).toBe(true);
    });
    test('la letra ingresada esta contenida en la palabra. No se resta una vida', function () {
        expect(ahorcadoJuego.vidas).toBe(6);
    });
    test('la letra ingresada NO se encuentra en la palabra', function () {
        expect(ahorcadoJuego.adivinarLetra('p')).toBe(false);
    });
    test('la letra ingresada no esta contenida en la palabra. se resta una vida', function () {
        expect(ahorcadoJuego.vidas - 1).toBe(5);
    });
    test('el jugador perdió', function () {
        ahorcadoJuego.vidas = 0;
        expect(ahorcadoJuego.adivinarLetra('h')).toBe(false);
    });
});
