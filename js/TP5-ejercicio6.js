/* Temporizador - Dificultad:  🟢🟡

6- Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset. 

*/

let input = [];
let form = document.querySelector("form");

form.addEventListener("submit", obtenerDato)

function obtenerDato(e){
    e.preventDefault();
    let input = parseInt(document.querySelector("input")).valueOf;
    
    console.log(input.valueOf);
    send();
}
let time = input.addEventListener(change,)

function timer(){
    if (input === 0 || input > 0){
        input--;
    }
}
function send(){
    document.getElementById("timer").innerHTML(`${timer}`)
}
// reset.onclick = function() {
    //     h1.textContent = "00:00:00";
    //     seconds = 0; minutes = 0; hours = 0;
    // }
    
    // for(let contador=timer; contador >0; contador--)

const idInterval = setInterval(timer, -1000);