export default function Controls({
  buttonPlay,
  buttonPause,
  chooseForest,
  chooseRain,
  chooseCoffeeShop,
  chooseFireplace,
  chooseSoundOff,
  lightButton,
  darkButton
}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function light() {
    lightButton.classList.add('hide')
    darkButton.classList.remove('hide')
  }
  
  function dark() {
    darkButton.classList.add('hide')
    lightButton.classList.remove('hide')
  }

  function forest() {
    chooseForest.classList.add('selected')
    chooseRain.classList.remove('selected')
    chooseCoffeeShop.classList.remove('selected')
    chooseFireplace.classList.remove('selected')
    chooseSoundOff.classList.remove('selected')
  }

  function rain() {
    chooseRain.classList.add('selected')
    chooseForest.classList.remove('selected')
    chooseCoffeeShop.classList.remove('selected')
    chooseFireplace.classList.remove('selected')
    chooseSoundOff.classList.remove('selected')
  }

  function coffee() {
    chooseCoffeeShop.classList.add('selected')
    chooseForest.classList.remove('selected')
    chooseRain.classList.remove('selected')
    chooseFireplace.classList.remove('selected')
    chooseSoundOff.classList.remove('selected')
  }

  function fireplace() {
    chooseFireplace.classList.add('selected')
    chooseForest.classList.remove('selected')
    chooseRain.classList.remove('selected')
    chooseCoffeeShop.classList.remove('selected')
    chooseSoundOff.classList.remove('selected')
  }

  function soundOff() {
    chooseSoundOff.classList.add('selected')
    chooseForest.classList.remove('selected')
    chooseRain.classList.remove('selected')
    chooseCoffeeShop.classList.remove('selected')
    chooseFireplace.classList.remove('selected')
  }
  
  return {
    play,
    reset,
    forest,
    rain,
    coffee,
    fireplace,
    soundOff,
    light,
    dark
  }
}

