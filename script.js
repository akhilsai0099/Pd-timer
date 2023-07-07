let timerbg = document.getElementById("timer-bg")
let clock = document.getElementById("time")
let start = document.getElementById("start")
let viewportHeight = window.innerHeight;

totalDuration = 30
breakDuration = 300

start.addEventListener('click', (e) => {
    // e.preventDefault()
    timerbg.style.height = "0px";

    startTimer(totalDuration - 1, totalDuration)




})

const startTimer = (durationCompleted, totalDuration) => {
    intervalId = setInterval(() => {
        mins = Math.floor(durationCompleted / 60)
        secs = durationCompleted % 60
        clock.innerHTML = `${mins}:${secs < 10 ? '0' : ''}${secs}`
        console.log(`${mins}:${secs < 10 ? '0' : ''}${secs}`)
        durationCompleted--;
        let newHeight = window.innerHeight * (totalDuration - durationCompleted) / totalDuration;
        timerbg.style.height = newHeight + "px";

        if (timerbg.offsetHeight >= viewportHeight) {
            clearInterval(intervalId);
        }
    }, 1000)
}