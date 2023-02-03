import { Ahorcado } from "../src/arriesgarPalabra";

describe('pruebas de ahorcado', () => {
   const palabra = new String('hola').split('');
   const ahorcadoJuego = new Ahorcado(palabra);
   test('la palabra ingresada debe coincidir con la correcta', () => {
      expect(ahorcadoJuego.adivinaPlabra(palabra)).toBe(true);
   });
   test('la palabra ingresada no coicide con la correcta', () => {
      const palabraIncorrecta = new String('chau').split('');
      expect(ahorcadoJuego.adivinaPlabra(palabraIncorrecta)).toBe(false);
   });

});

describe('validar letra y restar vida', () => {
   const palabra =String('hola').split('');
   const ahorcadoJuego = new Ahorcado(palabra);
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
      expect(ahorcadoJuego.vidas-1).toBe(5);
   })
   test('el jugador perdió', () => {
      ahorcadoJuego.vidas = 0;
      expect(ahorcadoJuego.adivinarLetra('h')).toBe(false);
   })

});
