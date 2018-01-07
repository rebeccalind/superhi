var angle = 0

var changeBackground = function () {
    
    angle = angle + 3
    document.body.style.backgroundImage = "linear-gradient(" + angle + "deg, #afeeee, #00ced1)"
    
    requestAnimationFrame(changeBackground)
    
}

    changeBackground()