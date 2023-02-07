export default function() {
  const buttonPressAudio = document.querySelector('.buttonPress')
  const kitchenTimer = document.querySelector('.timeEnd')
  const audioForest = document.querySelector('.audioForest')
  const audioRain = document.querySelector('.audioRain')
  const audioCoffeeShop = document.querySelector('.audioCoffee')
  const audioFireplace = document.querySelector('.audioFireplace')
  
  audioForest.volume = 0.5
  audioRain.volume = 0.5
  audioCoffeeShop.volume = 0.5
  audioFireplace.volume = 0.5

  audioForest.loop = true
  audioRain.loop = true
  audioCoffeeShop.loop = true
  audioFireplace.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function forestSound() {
    audioForest.play()
    audioRain.pause()
    audioCoffeeShop.pause()
    audioFireplace.pause()
  }

  function rainSound() {
    audioRain.play()
    audioForest.pause()
    audioCoffeeShop.pause()
    audioFireplace.pause()
  }

  function coffeeShopSound() {
    audioCoffeeShop.play()
    audioForest.pause()
    audioRain.pause()
    audioFireplace.pause()
  }

  function fireplaceSound() {
    audioFireplace.play()
    audioForest.pause()
    audioRain.pause()
    audioCoffeeShop.pause()
  }

  function buttonStopSound() {
    audioForest.pause()
    audioRain.pause()
    audioCoffeeShop.pause()
    audioFireplace.pause()
  }
  
  return {
    pressButton,
    timeEnd,
    buttonStopSound,
    forestSound,
    rainSound,
    coffeeShopSound,
    fireplaceSound
  }
}