let currentImgIndex = 0

const images = ['images/Dov.png', 'images/Dockmaster.jpg', 'images/Findalis.jpg', 'images/Hound.jpg', 'images/Nia.jpg']

const mainImage= document.getElementById('mainImage')

mainImage.setAttribute('src', images[currentImgIndex])

const next = document.querySelector('.next')

next.addEventListener('click', () => {
    if (currentImgIndex >= images.length - 1) {
         currentImgIndex = 0
    } else
        currentImgIndex += 1
    mainImage.setAttribute('src', images[currentImgIndex])
})
const prev = document.querySelector('.prev')

prev.addEventListener('click', () => {
    if (currentImgIndex <= 0) {
        currentImgIndex = images.length -1
    } else {
        currentImgIndex -= 1
    }
    mainImage.setAttribute('src', images[currentImgIndex])
})




next.addEventListener('play', () =>

setInterval(function(){
    '.next';
},
5000
)
)