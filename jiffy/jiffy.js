fetch('https://api.giphy.com/v1/gifs/search?api_key=fdICJYJLE5msINhHiV5TlyNPB5gcagI2&q=dog&limit=50&offset=0&rating=PG-13&lang=en')

  .then(response => {
  return response.json();
})

  .then(json => {
  const gif = json.data[0]
  const src = gif.images.original.mp4
  
  const video = document.createElement('video')
  
  video.src = src
  video.autoplay = true
  video.loop = true
  
  const videosEl = document.querySelector('.videos')
  videosEl.appendChild(video)
})

.catch(error => {
  
})