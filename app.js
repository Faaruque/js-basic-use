let time = document.getElementById('clockTime')
let formate = document.getElementById('formate')

function digitalClock(){
    let getDate = new Date()
    let hours = getDate.getHours()
    let minuts = getDate.getMinutes()
    let second = getDate.getSeconds()
    let dateFormat = 'AM'

    if(hours === 0){
        hours = 12
    }

    if(hours > 12){
        hours = hours -12
        dateFormat = 'PM'
    }

    hours = hours < 10 ? '0' + hours : hours
    minuts = minuts < 10 ? '0' + minuts : minuts
    second = second < 10 ? '0' + second : second

    
  
    let finalTime = `${hours}:${minuts}:${second}`
    time.innerText = finalTime
    formate.innerText = dateFormat
    setInterval(digitalClock, 1000)
}
digitalClock()