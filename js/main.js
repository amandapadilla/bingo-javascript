"use strict";
//Generar 20 números aleatorios entre el 1 y el 100, enteros, que no se repitan.
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//Comprobar que no se repitan los números del array
function isInNumbersList(value, list) {
  let result = false;
  for (const item of list) {
    if (item == value) {
      result = true;
    }
  }
  return result;
}

let userNumbers = [];
//Generamos 20 números aleatorios (que se pueden repetir)
//for (let i = 0; i < 20; i++) {
while (userNumbers.length < 20) {
  let randomNumber = getRandomNumber(100);
  //Sólo metemos el número en el array si no existe previamente.
  if (isInNumbersList(randomNumber, userNumbers)) {
    //nada
  } else {
    userNumbers.push(randomNumber);
  }
}

//Declarar función del evento
const showNewNumber = function(ev) {
  ev.preventdefault();
};

const outputNumber = document.querySelector(".js-outputNumber");
//Ejecutar el evento
outputNumber.addEventListener("click", showNewNumber);
