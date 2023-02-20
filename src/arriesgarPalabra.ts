//const exports={};
var words = ['Invierno'];
export class Ahorcado {
        vidas = 6;
        palabra;

        constructor(palabra : String[]){
            this.palabra = palabra;
            
        } 
        botonArriesgar() {
            palabraArriesgada.style.display = 'block';
            arriesgarButton.style.display = 'none';
            listoButton.style.display = 'block'
            document.removeEventListener('keydown', ahorcado.letterEvent);
            listoButton.addEventListener('click', ahorcado.botonListo)
        }
        botonListo() {
            ahorcado.adivinaPlabra(String(palabraArriesgada.value.toUpperCase()).split(''));
        }
     adivinaPlabra(palabra: String[]) {
        if(this.vidas>0){
            if (this.palabra.length !== palabra.length) {
                typeof document !== "undefined"?  ahorcado.endGame("PERDISTE :)"):null;

                return false;
              }
              for (let i = 0; i < this.palabra.length; i++) {
                if (this.palabra[i] !== palabra[i]) {
                    typeof document !== "undefined"?  ahorcado.endGame("PERDISTE :)"):null;

                  return false;
                }
              }
              typeof document !== "undefined"?  ahorcado.endGame("GANASTE :)"):null;
               return true;
            }
    }
    adivinarLetra(letter:String) {
        var resultado=false;
        if(this.vidas>0){
            if (this.palabra.includes(letter)  ) {
              typeof document !== "undefined"?  ahorcado.correctLetter(letter):null;
                resultado = true;
            }
            else {
                typeof document !== "undefined"?  ahorcado.wrongLetter():null;
                resultado = false;
            }
            
        }else this.reiniciarJuego();
        typeof document !== "undefined"?  ahorcado.addLetter(letter):null;
        typeof document !== "undefined"? usedLetters.push(letter):null;
        return resultado;
    }
    reiniciarJuego(){
        this.vidas=6;
    }

    addLetter(letter:String) {
        var letterElement = document.createElement('span');
        letterElement.innerHTML = letter.toUpperCase();
        usedLettersElement?.appendChild(letterElement);
    }
    addBodyPart(bodyPart:any[]) {
        ctx.fillStyle = '#fff';
        ctx.fillRect(bodyPart[0],bodyPart[1],bodyPart[2],bodyPart[3]);
    }
    
    wrongLetter() {
        ahorcado.addBodyPart(bodyParts[mistakes]);
        mistakes++;
        if (mistakes === bodyParts.length){
            ahorcado.endGame("PERDISTE :)");
            }

    }
    endGame(mensaje:String) {
        setTimeout(()=>alert(mensaje),150);
        document.removeEventListener('keydown', ahorcado.letterEvent);
        listoButton.style.display = 'none';
        palabraArriesgada.style.display = 'none';
        startButton.style.display = 'block';
    }
    correctLetter(letter:String) {
        var children:any = wordContainer;
  
        for (var i = 0; i < children.childElementCount; i++) {
            if (children.children[i].textContent === letter) {
                children.children[i].classList.toggle('hidden');
                hits++;
            }
        }
        if (hits === ahorcado.palabra.length){
            ahorcado.endGame("GANASTE :)");
            }
            }
    letterInput(letter:String) {
        if (ahorcado.palabra.includes(letter)) {
            ahorcado.correctLetter(letter);
        }
        else {
            ahorcado.wrongLetter();
        }
        ahorcado.addLetter(letter);
        usedLetters.push(letter);
    }
    
    letterEvent(event:any) {
        var newLetter = event.key.toUpperCase();
        if (newLetter.match(/^[a-zñ]$/i) && !usedLetters.includes(newLetter)) {
            ahorcado.adivinarLetra(newLetter);
        }
        
    }
    
    drawWord() {
        ahorcado.palabra.forEach(function (letter:String) {
            var letterElement = document.createElement('span');
            letterElement.innerHTML = letter.toUpperCase();
            letterElement.classList.add('letter');
            letterElement.classList.add('hidden');
            wordContainer?.appendChild(letterElement);
        })
    }
    
    selectRandomWord() {
        var word = words[Math.floor((Math.random() * words.length))].toUpperCase();
        ahorcado.palabra = word.split('');
    }
    
    startGame() {
        usedLetters = [];
        mistakes = 0;
        hits = 0;
        palabraArriesgada.value="";
        listoButton.style.display = 'none';
        palabraArriesgada.style.display = 'none';
        wordContainer.innerHTML = '';
        usedLettersElement.innerHTML = '';
        startButton.style.display = 'none';
        arriesgarButton.style.display = 'block';
        ahorcado.drawHangMan();
        ahorcado.selectRandomWord();
        ahorcado.drawWord();
        document.addEventListener('keydown', ahorcado.letterEvent);
        arriesgarButton.addEventListener('click', ahorcado.botonArriesgar);
        
    }
    
    drawHangMan = () => {
        ctx!.canvas.width  = 120;
        ctx!.canvas.height = 160;
        ctx!.scale(20, 20);
        ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
        ctx!.fillStyle = '#d95d39';
        ctx!.fillRect(0, 7, 4, 1);
        ctx!.fillRect(1, 0, 1, 8);
        ctx!.fillRect(2, 0, 3, 1);
        ctx!.fillRect(4, 1, 1, 1);
    }
}


if(typeof document !== "undefined"){var wordContainer:any = document.getElementById('wordContainer');
var startButton:any = document.getElementById('startButton');
var arriesgarButton:any = document.getElementById('arriesgarButton');
arriesgarButton.style.display ='none';
var palabraArriesgada:any = document.getElementById('palabraArriesgada');
palabraArriesgada.style.display='none';
var listoButton:any = document.getElementById('listoButton');
listoButton.style.display = 'none';
var usedLettersElement:any = document.getElementById('usedLetters');
var canvas:any = document.getElementById('canvas');
var ctx:any = canvas.getContext('2d');
ctx.canvas.width = 0;
ctx.canvas.height = 0;
var bodyParts = [
    [4, 2, 1, 1],
    [4, 3, 1, 2],
    [3, 5, 1, 1],
    [5, 5, 1, 1],
    [3, 3, 1, 1],
    [5, 3, 1, 1]
];
//let ahorcado.palabra;
var usedLetters:String[];
var mistakes:number;
var hits:number;
var ahorcado : Ahorcado = new Ahorcado(String("vicky").split(""));
startButton.addEventListener('click', ahorcado.startGame);
}