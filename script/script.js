
const  startBtn = document.querySelector(".timer__start")
const pauseBtn = document.querySelector(".timer__pause")
const stopBtn = document.querySelector(".timer__stop")
const timerTime = document.querySelector(".timer__time")

let interval 

let hh = 0 
let mm = 0
let ss = 0

const timerIncrement = () => {
     ss++
     if (mm === 59 && ss === 59) {
        ss = 0
        mm = 0
        hh++
     }
     if(ss === 59) {
        ss = 0
        mm++
     }
   
}

startBtn.addEventListener("click", () => {
    interval = setInterval(() => {
    timerIncrement()
    show()
  }, 1000)
})

pauseBtn.addEventListener("click", () => {
    clearInterval(interval)
})

  stopBtn.addEventListener("click", () => {
    clearInterval(interval)  
    ss = 0
    mm = 0
    hh = 0
    show()
})

const addZero = (num) => {
   const str = num.toString()
   if(str.length === 2) {
    return str
   } else {
    return `0${str}`
   }
}

const show = () => {
    timerTime.innerText = `${addZero(hh)}:${addZero(mm)}:${addZero(ss)}`

}

