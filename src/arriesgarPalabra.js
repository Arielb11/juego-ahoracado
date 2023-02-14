"use strict";
let exports={};
exports.__esModule = true;
exports.Ahorcado = void 0;
//const exports={};
var words = ['Carne', 'Martillo', 'Lavadora', 'Sucio', 'Cangrejo', 'Lento', 'Alimentos', 'Delgado', 'Cubo', 'Comida', 'Caracol', 'Abajo', 'Alumno', 'Bonito', 'Cesta', 'Sol', 'Beber', 'Botella', 'Hamburguesa', 'Invierno'];
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
    Ahorcado.prototype.adivinaPlabra = function (palabra) {
        if (this.vidas > 0) {
            if (this.palabra.length !== palabra.length) {
                return false;
            }
            for (var i = 0; i < this.palabra.length; i++) {
                if (this.palabra[i] !== palabra[i]) {
                    return false;
                }
            }
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
            ahorcado.reiniciarJuego();
        typeof document !== "undefined" ? ahorcado.addLetter(letter) : null;
        typeof document !== "undefined" ? usedLetters.push(letter) : null;
        return resultado;
    };
    Ahorcado.prototype.reiniciarJuego = function () {
        ahorcado.vidas = 6;
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
            ahorcado.endGame();
            setTimeout(function () { return alert("PERDISTE :)"); }, 150);
        }
    };
    Ahorcado.prototype.endGame = function () {
        document.removeEventListener('keydown', ahorcado.letterEvent);
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
            ahorcado.endGame();
            setTimeout(function () { return alert("GANASTE :)"); }, 150);
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
        wordContainer.innerHTML = '';
        usedLettersElement.innerHTML = '';
        startButton.style.display = 'none';
        arriesgarButton.style.display = 'block';
        ahorcado.drawHangMan();
        ahorcado.selectRandomWord();
        ahorcado.drawWord();
        document.addEventListener('keydown', ahorcado.letterEvent);
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
