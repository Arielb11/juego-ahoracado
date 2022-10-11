export class ahorcado {
    public vidas: number = 6;
    public palabra: string[];

    constructor(palabra: string[]) {
        this.palabra = palabra
    }

    public adivinaPlabra(palabra: string[]): boolean {
        let resultado;
        if (palabra != this.palabra) {
            resultado = false;
        } else {
            resultado = true;
        }
        return resultado;
    }

    public adivinarLetra(letra: string): boolean {
        let resultado = this.palabra.includes(letra);
        if (this.vidas > 0) {
            if (!this.palabra.includes(letra)) {
                this.vidas = this.vidas - 1;
                console.log(' Le quedan ', this.vidas, 'vidas');
            }
        } else {
            console.log('No tiene mas vidas');
            resultado = false
        }
        return resultado
    }
}
