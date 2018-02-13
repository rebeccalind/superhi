const API_KEY = 'fdICJYJLE5msINhHiV5TlyNPB5gcagI2'

const randomChoice = arr => {
  const randIndex = Math.floor(Math.random() * arr.length)
  return arr[randIndex]
}

function createVideo (src) {
	const video = document.createElement('video')
  
  video.src = src
  video.autoplay = true
  video.loop = true
  video.className = 'video'

  return video
}

const toggleLoading = state => {
  if (state) {
    document.body.classList.add('loading')
  } else {
    document.body.classList.remove('loading')
  }
}
  
const searchGiphy = searchTerm => {
  
  toggleLoading(true)
    
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=50&offset=0&rating=PG-13&lang=en`)

    .then(response => {
    return response.json();
  })

    .then(json => {
    const gif = randomChoice(json.data)
    const src = gif.images.original.mp4

    const video = createVideo(src)

    const videosEl = document.querySelector('.videos')
  //   videosEl.appendChild(video)
    toggleLoading(false)
  })

  .catch(error => {
  })
}

const searchEl = document.querySelector('.search-input')

const hintEl = document.querySelector('.search-hint')

const doSearch = event => {
  const searchTerm = searchEl.value
  
  if (searchTerm.length > 2) {
    hintEl.innterHTML = `Hit enter to search ${searchTerm}`
    document.body.classList.add('.show-hint')
  } else {
    document.body.classList.remove('.show-hint')
  }
  
  if (event.key === 'Enter' && searchEl.value.length > 2) {
    searchGiphy(searchTerm)
  }
}

searchEl.addEventListener('keyup', doSearch)









