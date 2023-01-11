import {Given, When, Then} from "@cucumber/cucumber";
import { expect } from "chai";
import { Ahorcado } from "../../src/arriesgarPalabra";

let ahorcado : Ahorcado;
let actual: boolean;
Given("ahorcado letra", ()=>{
ahorcado = new Ahorcado('vicky');
})
When("quiero arriesgar la letra {string}", (letra: string)=>{
actual = ahorcado.adivinarLetra(letra);
return actual;
})
Then("el resulado es {string}", (expected:string)=>{
  let result=false;
    if(expected == "verdadero") {
    result =true;
   }
expect(actual).to.be.equal(result);
})