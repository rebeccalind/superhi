function makeMarquee () {
 
  const title = 'FIFTY Music Festival — November 10–12, Desert Valley'

  const marqueeText = new Array(50).fill(title).join(' — ')
  
  const marquee = document.querySelector('.marquee span')
  marquee.innerHTML = marqueeText
  
}

makeMarquee()












