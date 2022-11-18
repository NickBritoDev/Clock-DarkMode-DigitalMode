const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

const digitalSeconds = document.querySelector('.digital-seconds')
const digitalHours = document.querySelector('.digital-hours')
const digitalMinutes = document.querySelector('.digital-minutes')
const digitalAp = document.querySelector('.digital-ap')

clock = () => {
    let today = new Date()

    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()

    let am = hour >= 12 ? "PM" : "AM"
    digitalAp.innerHTML = am

    if(hour > 12){
        hour = hour - 12
    }

    digitalHours.innerHTML = hour
    digitalMinutes.innerHTML = minute
    digitalSeconds.innerHTML = second

    hour *= 30
    minute *= 6
    second *= 6
    
    rotation(hours, hour)
    rotation(minutes, minute)
    rotation(seconds, second)

    setTimeout(clock, 1000)
}

rotation = (target, vol) => {
    target.style.transform = `rotate(${vol}deg)`
}

window.onload = clock()

