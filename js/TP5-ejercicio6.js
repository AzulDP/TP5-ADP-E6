/* Temporizador - Dificultad:  🟢🟡

6- Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset. 

*/

let timeInput = [];
let timer = document.getElementById("timer");
let pausa = true;
let form = document.querySelector("form");

form.addEventListener("submit", obtenerDato)

function obtenerDato(e){
    e.preventDefault();
    let timeInput = parseInt(document.querySelector("input")).valueOf;
    console.log(timeInput);
    timer();
}


function timer(){
   timeInput 
    }

function start(){
    if (pausa){
        countdownTimer = setInterval(mostrar, 1000);
    pausa = false;
    }
    }
function pause(){
    clearInterval(timer);
    pausa = true;
}

function reset(){ 
    clearInterval(timer);
    pausa = true;
hrs = 0;
min = 0;
sec = 0;
document.getElementById("resetear").innerHTML = ``;
}
    

const idInterval = setInterval(timer, -1000);