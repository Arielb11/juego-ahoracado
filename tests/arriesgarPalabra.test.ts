import { ahorcado } from "../src/arriesgarPalabra";

describe('pruebas de ahorcado', () => {
   const palabra = ['h', 'h', 'h', 'h'];
   const ahorcadoJuego = new ahorcado(palabra);
   test('la palabra ingresada debe coincidir con la correcta', () => {
      expect(ahorcadoJuego.adivinaPlabra(palabra)).toBe(true);
   });
   test('la palabra ingresada no coicide con la correcta', () => {
      const palabraIncorrecta = ['h', 'o', 'l', 'a'];
      expect(ahorcadoJuego.adivinaPlabra(palabraIncorrecta)).toBe(false);
   });

});

describe('validar letra y restar vida', () => {
   const palabra = ['h', 'o', 'l', 'a'];
   const ahorcadoJuego = new ahorcado(palabra);
   test('la letra ingresada se encuentra en la palabra mantiene las vidas iguales', () => {
      expect(ahorcadoJuego.adivinarLetra('l')).toBe(true);
   })
   test('la letra ingresada esta contenida en la palabra. No se resta una vida', () => {
      expect(ahorcadoJuego.vidas).toBe(6);
   })
   test('la letra ingresada NO se encuentra en la palabra', () => {
      expect(ahorcadoJuego.adivinarLetra('p')).toBe(false);
   })
   test('la letra ingresada no esta contenida en la palabra. se resta una vida', () => {
      expect(ahorcadoJuego.vidas).toBe(5);
   })
   test('el jugador perdió', () => {
      ahorcadoJuego.vidas = 0;
      expect(ahorcadoJuego.adivinarLetra('h')).toBe(false);
   })

});