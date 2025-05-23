// This is a helpful function to generate a random number from 1 to 6
const pickRandomNumber = function(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
//   const pickRandomTemp = function() {
//     return Math.floor(Math.random() * 100) + 1;
//   }
  
  // Your code goes here...
  document.addEventListener("DOMContentLoaded", function(){
      document.querySelector("#weather-icon").addEventListener("click", changeicon)
      document.querySelector("#temperature").addEventListener("click", changetemp)
      document.querySelector("#humidity").addEventListener("click", changehumidity)
      document.querySelector("#wind-speed").addEventListener("click", changewindspeed)
  })
  
  function changeicon(event){
      const n1 = pickRandomNumber(7)
      const i = document.querySelector("#weather-icon")
      i.src = 'icons/' + n1 + '.png'
      console.log(i)
  }


  function changetemp(event){
    const n = pickRandomNumber(100)
    const temp = document.querySelector("#temperature")
    temp.textContent = n +' \u00B0F'
    console.log(temp.textContent)
  } 

  function changehumidity(event){
    const n = pickRandomNumber(100)
    const humid = document.querySelector("#percent")
    humid.textContent = n + '%'
  }

  function changewindspeed(event){
    const n = pickRandomNumber(20)
    const wind = document.querySelector("#mph")
    wind.textContent = n + 'mph'

  }