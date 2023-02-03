import {Given, When, Then} from "@cucumber/cucumber";
import { expect } from "chai";
import { Ahorcado } from "../../src/arriesgarPalabra";

let ahorcado : Ahorcado;
let actual: number;
Given("se resta una vida del juego", ()=>{
ahorcado = new Ahorcado(String('vicky').split(''));
})
When("Se resta una vida de 6 que tiene el participante", ()=>{
actual = ahorcado.vidas-1;
return actual;
})
Then("deben quedar {int} vidas", (expected:number)=>{
expect(actual).to.be.equal(expected);
})