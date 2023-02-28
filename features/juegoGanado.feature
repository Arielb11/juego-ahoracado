Feature:  El jugador adivino la palabra oculta en el juego del ahorcado

Scenario: el jugador adivina la palabra y gana el juego

Given se inicia un nuevo juego con la palabra vicky

When el jugador arriesga la palabra "vicky"

Then el resultado debe ser "verdadero" y reiniciarse el juego