import Sound from './sounds.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {

  let minutes = Number(minutesDisplay.textContent)
  let timerTimeOut

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function resetTimer() {
    clearTimeout(timerTimeOut)
    updateDisplay(minutes, 0)
  }

  function pauseTimer() {
    clearTimeout(timerTimeOut)
  }

  function removeTime() {
    let newMinutes = Number(minutesDisplay.textContent)

    updateMinutes(newMinutes)

    if (newMinutes <= 5) {
      minutes = 0
      return
    }

    minutes = newMinutes -= 5
  }

  function addTime() {
    let newMinutes = Number(minutesDisplay.textContent) 

    if (newMinutes >= 56) {
      newMinutes = 60
      alert("Você só pode ajustar até 60 minutos. Caso queria colocar mais tempo digite aqui: ")
      updateDisplay(newMinutes, 0)
      updateMinutes(newMinutes)
      resetControls()
      pauseTimer()
      getMinutes()
      return
    }
    
    minutes = newMinutes += 5
  }

  function countdown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      updateDisplay(minutes, 0)

      if (minutes <= 0 && seconds <= 0) {
        resetControls()
        updateDisplay()
        Sound().timeEnd()
        return
      }
    
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
      
      updateDisplay(minutes, String(seconds - 1))

      countdown()
    }, 1000)
  }

  function updateTimer() {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?') || minutes

    updateMinutes(newMinutes)
    updateDisplay(newMinutes, 0)
    pauseTimer()

    if(!newMinutes) {
      return false
    }
    
    return newMinutes
  }


  return {
    updateTimer,
    updateMinutes,
    updateDisplay,
    resetTimer,
    pauseTimer,
    removeTime,
    countdown,
    addTime,
    getMinutes
  }
}