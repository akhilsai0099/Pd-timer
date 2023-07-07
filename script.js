let timerbg = document.getElementById("timer-bg")
let clock = document.getElementById("time")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let start = document.getElementById("start")
let viewportHeight = window.innerHeight;

totalDuration = 30
breakDuration = 300

plus.addEventListener('click', () => {
    totalDuration += 5
    updateClock(totalDuration)
})
minus.addEventListener('click', () => {
    totalDuration -= 5
    updateClock(totalDuration)
})

start.addEventListener('click', (e) => {
    // e.preventDefault()
    timerbg.style.height = "0px";

    startTimer(totalDuration - 1, totalDuration)

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
        console.log(`${mins}:${secs < 10 ? '0' : ''}${secs}`)
        durationCompleted--;
        let newHeight = window.innerHeight * (totalDuration - durationCompleted) / totalDuration;
        timerbg.style.height = newHeight + "px";

        if (timerbg.offsetHeight >= viewportHeight) {
            clearInterval(intervalId);
        }
    }, 1000)
}