"use strict";
const exports={};
exports.__esModule = true;
exports.Ahorcado = void 0;
var words = ['Invierno'];
var Ahorcado = /** @class */ (function () {
    function Ahorcado(palabra) {
        this.vidas = 6;
        this.drawHangMan = function () {
            ctx.canvas.width = 120;
            ctx.canvas.height = 160;
            ctx.scale(20, 20);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#d95d39';
            ctx.fillRect(0, 7, 4, 1);
            ctx.fillRect(1, 0, 1, 8);
            ctx.fillRect(2, 0, 3, 1);
            ctx.fillRect(4, 1, 1, 1);
        };
        this.palabra = palabra;
    }
    Ahorcado.prototype.botonArriesgar = function () {
        palabraArriesgada.style.display = 'block';
        arriesgarButton.style.display = 'none';
        listoButton.style.display = 'block';
        document.removeEventListener('keydown', ahorcado.letterEvent);
        listoButton.addEventListener('click', ahorcado.botonListo);
    };
    ;
    Ahorcado.prototype.botonListo = function () {
        ahorcado.adivinaPlabra(String(palabraArriesgada.value.toUpperCase()).split(''));
    };
    ;
    Ahorcado.prototype.adivinaPlabra = function (palabra) {
        if (this.vidas > 0) {
            if (this.palabra.length !== palabra.length) {
                typeof document !== "undefined" ? ahorcado.endGame("PERDISTE :)") : null;
                return false;
            }
            for (var i = 0; i < this.palabra.length; i++) {
                if (this.palabra[i] !== palabra[i]) {
                    typeof document !== "undefined" ? ahorcado.endGame("PERDISTE :)") : null;
                    return false;
                }
            }
            typeof document !== "undefined" ? ahorcado.endGame("GANASTE :)") : null;
            return true;
        }
    };
    Ahorcado.prototype.adivinarLetra = function (letter) {
        var resultado = false;
        if (this.vidas > 0) {
            if (this.palabra.includes(letter)) {
                typeof document !== "undefined" ? ahorcado.correctLetter(letter) : null;
                resultado = true;
            }
            else {
                typeof document !== "undefined" ? ahorcado.wrongLetter() : null;
                resultado = false;
            }
        }
        else
            this.reiniciarJuego();
        typeof document !== "undefined" ? ahorcado.addLetter(letter) : null;
        typeof document !== "undefined" ? usedLetters.push(letter) : null;
        return resultado;
    };
    Ahorcado.prototype.reiniciarJuego = function () {
        this.vidas = 6;
    };
    Ahorcado.prototype.addLetter = function (letter) {
        var letterElement = document.createElement('span');
        letterElement.innerHTML = letter.toUpperCase();
        usedLettersElement === null || usedLettersElement === void 0 ? void 0 : usedLettersElement.appendChild(letterElement);
    };
    Ahorcado.prototype.addBodyPart = function (bodyPart) {
        ctx.fillStyle = '#fff';
        ctx.fillRect(bodyPart[0], bodyPart[1], bodyPart[2], bodyPart[3]);
    };
    Ahorcado.prototype.wrongLetter = function () {
        ahorcado.addBodyPart(bodyParts[mistakes]);
        mistakes++;
        if (mistakes === bodyParts.length) {
            ahorcado.endGame("PERDISTE :)");
        }
    };
    Ahorcado.prototype.endGame = function (mensaje) {
        setTimeout(function () { return alert(mensaje); }, 150);
        document.removeEventListener('keydown', ahorcado.letterEvent);
        listoButton.style.display = 'none';
        palabraArriesgada.style.display = 'none';
        startButton.style.display = 'block';
    };
    Ahorcado.prototype.correctLetter = function (letter) {
        var children = wordContainer;
        for (var i = 0; i < children.childElementCount; i++) {
            if (children.children[i].textContent === letter) {
                children.children[i].classList.toggle('hidden');
                hits++;
            }
        }
        if (hits === ahorcado.palabra.length) {
            ahorcado.endGame("GANASTE :)");
        }
    };
    Ahorcado.prototype.letterInput = function (letter) {
        if (ahorcado.palabra.includes(letter)) {
            ahorcado.correctLetter(letter);
        }
        else {
            ahorcado.wrongLetter();
        }
        ahorcado.addLetter(letter);
        usedLetters.push(letter);
    };
    Ahorcado.prototype.letterEvent = function (event) {
        var newLetter = event.key.toUpperCase();
        if (newLetter.match(/^[a-zñ]$/i) && !usedLetters.includes(newLetter)) {
            ahorcado.adivinarLetra(newLetter);
        }
    };
    Ahorcado.prototype.drawWord = function () {
        ahorcado.palabra.forEach(function (letter) {
            var letterElement = document.createElement('span');
            letterElement.innerHTML = letter.toUpperCase();
            letterElement.classList.add('letter');
            letterElement.classList.add('hidden');
            wordContainer === null || wordContainer === void 0 ? void 0 : wordContainer.appendChild(letterElement);
        });
    };
    Ahorcado.prototype.selectRandomWord = function () {
        var word = words[Math.floor((Math.random() * words.length))].toUpperCase();
        ahorcado.palabra = word.split('');
    };
    Ahorcado.prototype.startGame = function () {
        usedLetters = [];
        mistakes = 0;
        hits = 0;
        palabraArriesgada.value = "";
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
    };
    ;
    return Ahorcado;
}());
exports.Ahorcado = Ahorcado;
if (typeof document !== "undefined") {
    var wordContainer = document.getElementById('wordContainer');
    var startButton = document.getElementById('startButton');
    var arriesgarButton = document.getElementById('arriesgarButton');
    arriesgarButton.style.display = 'none';
    var palabraArriesgada = document.getElementById('palabraArriesgada');
    palabraArriesgada.style.display = 'none';
    var listoButton = document.getElementById('listoButton');
    listoButton.style.display = 'none';
    var arriesgarButton = document.getElementById('arriesgarButton');
    arriesgarButton.style.display = 'none';
    var palabraArriesgada = document.getElementById('palabraArriesgada');
    palabraArriesgada.style.display = 'none';
    var usedLettersElement = document.getElementById('usedLetters');
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
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
    var usedLetters;
    var mistakes;
    var hits;
    var ahorcado = new Ahorcado(String("vicky").split(""));
    startButton.addEventListener('click', ahorcado.startGame);
}
