let previouslyClickedImageName = '';
const images = document.querySelectorAll('.div-image');
const result = document.getElementById('Result')
console.log(images)

images.forEach(img => {
    img.addEventListener('click', (e) => {
        Result.innerText = '';
        img.classList.add('flipped');

        const clickedImageName = img.dataset.name;
        const flippedImages = document.querySelectorAll('.flipped');
        const correctImages = document.querySelectorAll('.correct');

        if(Array.from(img.classList).includes(clickedImageName)) {
            Result.innerText = 'Don not click on the same one!'
        } else {
            img.classList.add(clickedImageName);
            console.log(clickedImageName)
            console.log(previouslyClickedImageName)
            if (previouslyClickedImageName === clickedImageName) {
                Result.innerText = 'You did it'
                previouslyClickedImageName = ''
                flippedImages.forEach(image => {
                    image.classList.add('correct');
                })
            } else if(previouslyClickedImageName) {
                setTimeout(() => {
                    const previousImage = document.getElementsByClassName(previouslyClickedImageName)[0].classList.remove(previouslyClickedImageName);
                    const currentImage = document.getElementsByClassName(clickedImageName)[0].classList.remove(clickedImageName);
                    previouslyClickedImageName = ''
                }, 500)
            } else {
                previouslyClickedImageName = clickedImageName;
            }
        }
    })
})


