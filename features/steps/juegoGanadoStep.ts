import {Given, When, Then} from "@cucumber/cucumber";
import { expect } from "chai";
import { Ahorcado } from "../../src/arriesgarPalabra";

let ahorcado : Ahorcado;
let actual: boolean;
Given("se gana el juego del ahorcado", ()=>{
ahorcado = new Ahorcado(String('vicky').split(''));
})
When("el jugador arriesga la palabra {string}", (palabraGanadora: string)=>{
let palabra = palabraGanadora.split('')
actual = ahorcado.adivinaPlabra(palabra);
return actual;
})
Then("el resultado debe ser {string} y reiniciarse el juego", (expected:string)=>{
    let result=false;
    if(expected === "verdadero") {
    result =true;
   }
expect(actual).to.be.equal(result);
})