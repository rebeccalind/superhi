const API_KEY = 'fdICJYJLE5msINhHiV5TlyNPB5gcagI2'

// all Elements in group at the top
// grab seach input
const searchEl = document.querySelector('.search-input')
const hintEl = document.querySelector('.search-hint')
const videosEl = document.querySelector('.videos')
const clearEl = document.querySelector('.search-clear')

const randomChoice = arr => {
  const randIndex = Math.floor(Math.random() * arr.length)
  return arr[randIndex]
}

const createVideo = src => {
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
    // disable search input while loading
    searchEl.disabled = true
  } else {
    document.body.classList.remove('loading')
    // enable new input
    searchEl.disabled = false
    searchEl.focus()
  }
}
  
const searchGiphy = searchTerm => {
  
  toggleLoading(true)
    
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=50&offset=0&rating=PG-13&lang=en`)

    .then(response => {
    	return response.json()
  	})

    .then(json => {
    	const gif = randomChoice(json.data)
    	const src = gif.images.original.mp4

   	 const video = createVideo(src)

    	videosEl.appendChild(video)
      // listen out for the video loaded event to fire
      video.addEventListener('loadeddata', event => {
       	video.classList.add('visible')
        toggleLoading(false)
        document.body.classList.add('has-results')
        // change the hint text to show more results
        hintEl.innerHTML = `Hit Enter to search more ${searchTerm}`
    })
  })
 
  // when the users types a search key
  // without results on Giphy
  // the fetch fails...
  .catch(error => {
    // toggle disabled
    toggleLoading(false)
    // tell the users that the search failed
    hintEl.innerHTML = `Nothing found for ${searchTerm}`
  })
}

const doSearch = event => {
  const searchTerm = searchEl.value
  
  if (searchTerm.length > 2) {
    hintEl.innerHTML = `Hit Enter to search ${searchTerm}`
    document.body.classList.add('show-hint')
  } else {
    document.body.classList.remove('show-hint')
  }
  
  if (event.key === 'Enter' && searchTerm.length > 2) {
    searchGiphy(searchTerm)
  }
}

// clear search results

const clearSearch = event => {
  document.body.classList.remove('has-results')
  // clear out all the content
  // empty string gets rid of everything in it
  videosEl.innerHTML = ''
  hintEl.innerHTML = ''
  searchEl.value = ''
  // focus the input
  searchEl.focus()
}

// listen out for keyup events
document.addEventListener('keyup', event => {
  // esc key
  if (event.key === 'Escape') {
    clearSearch()
  }
})

searchEl.addEventListener('keyup', doSearch)
clearEl.addEventListener('click', clearSearch)









