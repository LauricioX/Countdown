let dias = document.querySelector("#dias")
let horas = document.querySelector("#horas")
let minutos = document.querySelector("#minutos")
let segundos = document.querySelector("#segundos")

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

const updateCountDown = () =>{
const currentTime = new Date();
const difference = newYearTime - currentTime

const days = Math.floor(difference / 1000 / 60 / 60 / 24)
const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24
const minutes = Math.floor(difference / 1000 / 60 ) % 60
const seconds = Math.floor(difference / 1000 ) % 60

  insertTime(days , hours, minutes, seconds)
}

const insertTime = (day, hor, min, sec) => {
     dias.textContent = day
     horas.textContent = hor < 10 ? "0" + hor : hor
     minutos.textContent = min < 10 ? "0" + min : min
     segundos.textContent = sec < 10 ? "0" + sec : sec
}
function pre(){
    document.querySelector(".preloader").style.display = "none"
    }

setTimeout(pre, 1000)

setInterval(updateCountDown,1000)