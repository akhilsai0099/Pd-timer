let timerbg = document.getElementById("timer-bg")
let clock = document.getElementById("time")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let timecontainer = document.getElementsByClassName("setTimerContainer")[0]
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let start = document.getElementById("start")
let viewportHeight = window.innerHeight;

totalDuration = 30
breakDuration = 300

plus.addEventListener('click', () => {
    timecontainer.classList.toggle('show');
})

minutes.addEventListener('focusout', () => {
    duration = getTime()
    updateClock(duration)
})

seconds.addEventListener('focusout', () => {
    duration = getTime()
    updateClock(duration)
})

const getTime = () => {
    min = parseInt(minutes.innerHTML)
    secs = parseInt(seconds.innerHTML)
    duration = min * 60 + secs
    return duration
}

start.addEventListener('click', (e) => {
    // e.preventDefault()
    timerbg.style.height = "0px";
    timecontainer.classList.remove('show')
    duration = getTime()
    updateClock(duration)
    startTimer(duration - 1, duration)

})

window.addEventListener('load', function () {
    updateClock(totalDuration)
});

const updateClock = (durationCompleted) => {
    mins = Math.floor(durationCompleted / 60)
    secs = durationCompleted % 60
    clock.innerHTML = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`
}

const startTimer = (durationCompleted, totalDuration) => {
    intervalId = setInterval(() => {
        updateClock(durationCompleted)
        durationCompleted--;
        let newHeight = window.innerHeight * (totalDuration - durationCompleted) / totalDuration;
        timerbg.style.height = newHeight + "px";

        if (timerbg.offsetHeight >= viewportHeight) {
            clearInterval(intervalId);
        }
    }, 1000)
}