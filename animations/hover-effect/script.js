$('.menu-link a').hover(function () {
    
    var link = $(this)
    var overlay = link.data('overlay')
    
    $('.overlay').removeClass('visible')
    
    $(overlay).addClass('visible')
    
    return false
    
})