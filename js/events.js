import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonRemove,
  buttonSet,
  chooseForest,
  chooseRain,
  chooseCoffeeShop,
  chooseFireplace,
  chooseSoundOff,
  lightButton,
  darkButton,
  darkMode,
  sliders,
} from './elements.js'

export default function ({
  controls,
  timer,
  sound
}) {

  function changeVolume(value) {
    const audioForest = document.querySelector('.audioForest')
    const audioRain = document.querySelector('.audioRain')
    const audioCoffeeShop = document.querySelector('.audioCoffee')
    const audioFireplace = document.querySelector('.audioFireplace')
    const sounds = [chooseRain, chooseForest, chooseCoffeeShop, chooseFireplace]
    
    let selected = null

    sounds.forEach(sound => {
      if (sound.className.includes("selected")) {
        selected = sound.className
      }
    })
    switch(selected) {
      case "forest selected":
        audioForest.volume = value.target.value / 100
        break
      case "rain selected":
        audioRain.volume = value.target.value / 100
        break
      case "coffee-shop selected":
        audioCoffeeShop.volume = value.target.value / 100
        break
      case "fireplace selected":
        audioFireplace.volume = value.target.value / 100
        break
      default:
        break
    }
  } 

  let slidersArray = [...sliders]

  slidersArray.forEach(slider => {
    slider.addEventListener("change", changeVolume)
  })

  lightButton.addEventListener('click', () => {
    controls.light()
    sound.pressButton()
    darkMode.classList.add('dark-mode')
  })

  darkButton.addEventListener('click', () => {
    controls.dark()
    sound.pressButton()
    darkMode.classList.remove('dark-mode')
  })

  buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', () => {
    controls.reset()
    timer.pauseTimer()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', () => {
    controls.reset()
    timer.resetTimer()
    sound.pressButton()
  })

  buttonAdd.addEventListener('click', () => {
    timer.addTime()
    timer.updateTimer()
    sound.pressButton()
  })

  buttonRemove.addEventListener('click', () => {
    timer.removeTime()
    timer.updateTimer()
    sound.pressButton()
  })
  
  buttonSet.addEventListener('click', () => {
    let newMinutes = timer.getMinutes()
    controls.reset()

    if (!newMinutes) {
      controls.reset()
      timer.pauseTimer()
      return
    }

    timer.updateDisplay(newMinutes, 0)
  })
  
  let isFirstTimeForest = false
  let isFirstTimeRain = false
  let isFirstTimeCoffee = false
  let isFirstTimeFireplace = false
  
  chooseForest.addEventListener('click', () => {
    controls.forest()
    sound.forestSound()
    
    if (!isFirstTimeForest) {
      sliders[0].value = 50
      isFirstTimeForest = true
    }
  })

  chooseRain.addEventListener('click', () => {
    controls.rain()
    sound.rainSound()

    if (!isFirstTimeRain) {
      sliders[1].value = 50
      isFirstTimeRain = true
    }
  })

  chooseCoffeeShop.addEventListener('click', () => {
    controls.coffee()
    sound.coffeeShopSound()

    if (!isFirstTimeCoffee) {
      sliders[2].value = 50
      isFirstTimeCoffee = true
    }
  })

  chooseFireplace.addEventListener('click', () => {
    controls.fireplace()
    sound.fireplaceSound()

    if (!isFirstTimeFireplace) {
      sliders[3].value = 50
      isFirstTimeFireplace = true
    }
  })

  chooseSoundOff.addEventListener('click', () => {
    controls.soundOff()
    sound.buttonStopSound()
  })
}