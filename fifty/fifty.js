// spinning text

function makeMarquee () {
 
  const title = 'FIFTY Music Festival — November 10–12, Desert Valley'

  const marqueeText = new Array(50).fill(title).join(' — ')
  
  const marquee = document.querySelector('.marquee span')
  marquee.innerHTML = marqueeText
  
}

makeMarquee()


// animation circles

const circles = document.querySelectorAll('.circle')

circles.forEach(function(circle, index) {
  
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


























