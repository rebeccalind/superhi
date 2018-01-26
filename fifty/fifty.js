// spinning text

function makeMarquee () {
 
  const title = 'FIFTY Music Festival — November 10–12, Desert Valley'

  const marqueeText = new Array(50).fill(title).join(' — ')
  
  const marquee = document.querySelector('.marquee span')
  marquee.innerHTML = marqueeText
  
}

makeMarquee()

function random(min, max) {
    return Math.floor(Math.random () * (max - min + 1)) + min;
}

// animation circles

const circles = document.querySelectorAll('.circle')

circles.forEach((circle, index) => {
  
    circle.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.2)' },
      { transform: 'scale(1)' }

  ], {
    delay: 300 * index,
    duration: 3000,
    iterations: Infinity
  })
  
})

const squiggles = document.querySelectorAll('.squiggle')

squiggles.forEach((squiggle, index) => {
  
  const randomNumber = random(0, 45)
  
  squiggle.animate([
      { transform: 'rotate(0deg)' },
      { transform: `rotate(${randomNumber}deg)`},
      { transform: 'rotate(0deg)' }

  ], {
    delay: 300 * index,
    duration: 5000,
    iterations: Infinity
  })
  
})

// TRADITIONAL JS
// var doSometing = function(foo) {}

// MORE MODERN WAY OF JS
// const doSomething = (foo) => {}

// OLDER var REPLACED WITH const
// var profile = name + ' is ' + age
// const profile = `${name} is ${age}`
// transform: 'rotate(' + randomNumber + 'deg)'
// transform: `rotate(${randomNumber}deg)`,



























