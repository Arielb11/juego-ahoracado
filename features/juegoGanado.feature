Feature:  El jugador adivino la palabra oculta en el juego del ahorcado

Scenario: el jugador adivina la palabra y gana el juego

Given se gana el juego del ahorcado

When el jugador arriesga la palabra "vicky"

Then el resultado debe ser "verdadero" y reiniciarse el juego