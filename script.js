const createStopwatch = (handleElapsedTime) => {
    let isRunning = false
    let interval = undefined;
    let elapsedTime = 0

    const start = () => {
        if (isRunning)
        return;

        isRunning = true;
        interval = setInterval(() => {
            elapsedTime += 1000
            handleElapsedTime(elapsedTime)
        }, 1000)
    }

    const stop = () => {
        if (!isRunning)
            return;

        isRunning = false
        clearInterval(interval)
    }

    const reset = () => {
        stop()
        elapsedTime = 0
        handleElapsedTime(elapsedTime)
    }

    return {
        start,
        stop,
        reset
    }
}

const formatTimeValue = (value) => value < 10 ? '0' + value : value

const formatTime = (horas, minutos, segundos) => `${formatTimeValue(horas)}: ${formatTimeValue(minutos)}: ${formatTimeValue(segundos)}`

const getTimeFromMilliseconds = (milliseconds) => {
    const segundos = Math.floor(milliseconds / 1000) % 60
    const minutos = Math.floor(segundos / 60) % 60
    const horas = Math.floor(minutos / 60) % 60

    return { horas, minutos, segundos }
}

const updateTimer = (cronometroElement) => (elapsedTime) => {
    const { horas, minutos, segundos } = getTimeFromMilliseconds(elapsedTime)
    const formattedTime = formatTime(horas, minutos, segundos)
    cronometroElement.textContent = formattedTime
}

const { start, stop, reset } = createStopwatch(updateTimer(document.getElementById('time')))

document.getElementById('start').addEventListener('click', start)
document.getElementById('stop').addEventListener('click', stop)
document.getElementById('reset').addEventListener('click', reset)