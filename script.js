//====Slider

const slides = document.querySelectorAll('.alloys')
const leftBtn = document.querySelector('.slider__btn--left')
const rightBtn = document.querySelector('.slider__btn--right')


let currentSlide = 0 ;
const maxSlide = slides.length;


const goSlider = function(slide) {
    slides.forEach((s , i) => s.style.transform = `translateX(${109 * (i - slide)}%) scale(0.9)`)
    slides[slide].style.transform = `scale(${1.2})`
}

goSlider(0);


const activeSlide = function(){
    slides.forEach((s)=> {
        s.classList.remove('active')
    })
    document.querySelector(`.slide-${currentSlide}`).classList.add('active')
}


const nextSlide = function(){
    if(currentSlide === maxSlide - 1){
        rightBtn.classList.add('disable')
    }
    else{
        currentSlide++
        leftBtn.classList.remove('disable')

    }
    goSlider(currentSlide);
    activeSlide()
}

const previousSlide = function(){
    if(currentSlide === 0 ){
        leftBtn.classList.add('disable')
    }
    else{
        currentSlide--
        rightBtn.classList.remove('disable')

    }
    goSlider(currentSlide)
    activeSlide()
}



rightBtn.addEventListener('click', nextSlide)

leftBtn.addEventListener('click', previousSlide)


