//Reemplaza en la palabra con guiones las letras encontradas
String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 

const palabras = ['casa', 'perro', 'gato', 'messi']; //Banco de palabras
const palabra = palabras[Math.floor(Math.random()*palabras.length)]; //A traves del indice te elige una palabra del banco
let palabraConGuiones = palabra.replace(/./g, "_ ");
let vida = 6;

document.querySelector('#output').innerHTML = palabraConGuiones; //Para ir agregando las letras

//Al apreptar el boton de id calcular se ejecuta la funcion
document.querySelector('#calcular').addEventListener('click', () => {
    let haFallado = true;
    const letra = document.querySelector('#letra').value;
    for (const i in palabra){
            if (letra == palabra[i]){
                palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
                haFallado = false;
            } 
    }
    if (haFallado){
        vida--;
        if(vida == 0){
            alert("Perdisote");
        }
    }
    document.querySelector('#vida').innerHTML = vida;
    document.querySelector('#output').innerHTML = palabraConGuiones;
});