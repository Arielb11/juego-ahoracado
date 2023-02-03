

export class Ahorcado {
    vidas= 6;
    palabra;

   constructor(palabra : string[]) {
       this.palabra = palabra
   }

    adivinaPlabra(palabra : string[]) {
       let resultado;
       if (palabra === this.palabra) {
           resultado = true;
       } else {
           resultado = false;
       }
       return resultado;
   }

    adivinarLetra(letter : string) {
        let resultado= false;
        if(this.palabra.includes(letter) && this.vidas>0) {
            resultado = true;
        }
        return resultado;
     };
    
    }