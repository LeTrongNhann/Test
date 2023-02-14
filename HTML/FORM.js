var openPopup = document.querySelector('.popup')
var cover = document.querySelector('.cover')
var iconClose = document.querySelector('.buy-card-top i')
var buyOpen = document.querySelector('.buy-card-bottom button')
var buySuccess = document.querySelector('.buy-success')
var cover1 = document.querySelector('.cover1')

function toggleCover(e){
    cover.classList.toggle('hide')
}

openPopup.addEventListener('click', toggleCover)
cover.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleCover()
    }
})
iconClose.addEventListener('click', toggleCover)

function openAnother(a){
    cover1.classList.toggle('hide1')
}

buyOpen.addEventListener('click', openAnother)
cover1.addEventListener('click', function(a){
    if(a.target == a.currentTarget){
        openAnother()
    }
})
buySuccess.addEventListener('click', openAnother)
