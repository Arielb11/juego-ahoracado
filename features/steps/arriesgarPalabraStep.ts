import {Given, When, Then} from "@cucumber/cucumber";
import { expect } from "chai";
import { Ahorcado } from "../../src/arriesgarPalabra";

let ahorcado : Ahorcado;
let actual: boolean;
Given("ahorcado", ()=>{
ahorcado = new Ahorcado(String('vicky').split(''));
})
When("quiero arriesgar {string}", (palabra: string[])=>{
actual = ahorcado.adivinaPlabra(palabra);
return actual;
})
Then("el resulado debe ser {string}", (expected:string)=>{
  let result=false;
    if(expected == "verdadero") {
    result =true;
   }
expect(actual).to.be.equal(result);
})