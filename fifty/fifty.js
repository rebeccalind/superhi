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

// animation squiggles

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

// animation sections

inView('.section')
	.on('enter', section => {
  			section.classList.add('in-viewport')
      })
	.on('exit', section => {
  			section.classList.remove('in-viewport')
})

inView.threshold(0.2)

const sections = document.querySelectorAll('.section')

sections.forEach((section, index) => {
  const artists = section.querySelectorAll('.lineup li')
  const shapes = section.querySelectorAll('.shape')
  
  artists.forEach((artist, index) => {
    const delay = index * 100
    artist.style.transitionDelay = delay + 'ms'
  })
  
  shapes.forEach((shape, index) => {
    const delay = (artists.length + index) * 100
    shape.style.transitionDelay = delay + 'ms'
  })
})

// smooth scroll with down arrow buttons

const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach(link => {
	
	// addEventListener is jQuery's .on()
  link.addEventListener('click', (event) => { 
    // preventDefault is jQuery's return false
    event.preventDefault()
		
    const href = link.getAttribute('href')
    console.log(href)
    document.querySelector(href).scrollIntoView({ 
      behavior: 'smooth' 
    })

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



























