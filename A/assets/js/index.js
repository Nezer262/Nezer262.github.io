const arrow = document.querySelector(".facts__img")
const text = document.querySelector(".facts__card__text")
const title = document.querySelector(".facts__card__title")

let isClose = false
arrow.addEventListener('click', function() {
    if (isClose) {
        arrow.classList.remove('arrow-rotate');
        text.classList.remove('hidden');
        title.classList.remove('blue');
        isClose = false
    } else {
        isClose = true
        arrow.classList.add('arrow-rotate');
        text.classList.add('hidden');
        title.classList.add('blue');
    }
})
