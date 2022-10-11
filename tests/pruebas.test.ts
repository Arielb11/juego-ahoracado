
import { add } from '../index';
 
describe('archivo de índice de prueba', () => {
  test('cadena vacía debe dar como resultado cero', () => {
    expect(add('')).toBe(0);
  });
});
