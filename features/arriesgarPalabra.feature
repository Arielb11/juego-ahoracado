Feature:  Arriesgar una palabra a adivinar en el ahorcado

Scenario: arriesgo palabra

Given ahorcado

When quiero arriesgar "bicileta"

Then el resulado debe ser "falso"