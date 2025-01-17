function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function checkSlide(e) {
    for (const image of sliderImages) {
        const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
        const imageBottom = image.offsetTop + image.height;
        const isHalfShown = slideInAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        isHalfShown && isNotScrolledPast ? image.classList.add('active') : image.classList.remove('active');
    }
    
}

const sliderImages = document.querySelectorAll('.slide-in');

window.addEventListener('scroll', debounce(checkSlide));
