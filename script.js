const swiper = new Swiper('.swiper-container', {
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            enabled: false,
        },

    },
    on: {
        resize: function () {
            // переопределяю ширину элементов в слайдере при изменении размера экрана
            resizesSlide();
        },
    },
});
// переопределяет ширину элементов в слайдере
function resizesSlide() {
    const windowInnerWidth = window.innerWidth; // ширина окна браузера
    let slidesLength = swiper.slides; //коллекция слайдов

    for (let i = 0; i < slidesLength.length; i++) {
        if (windowInnerWidth < 768 || windowInnerWidth > 1020) {
            slidesLength[i].style.width = 240 + 'px';
        } else {
            slidesLength[i].style.width = 224 + 'px';
        }
    }
}
resizesSlide();




// кнопака Показать все 
let showBrandsBtn = document.getElementById('showBrands').querySelector('button');
// Картинака из кнопки Показать все
let showBrandsImg = document.getElementById('showBrands').querySelector('img');
// блок brands
let brands = document.querySelector('.brands');

// разворачивает и сворачивает brands
function showBrands(heightBlock, img, text) {
    brands.style.height = heightBlock; // меняем высоту
    showBrandsImg.src = img; // меняем картинку
    showBrandsBtn.textContent = text; // меняем текст в кнопке
}

showBrandsBtn.addEventListener('click', function () {
    if (brands.style.height !== '100%') {
        showBrands('100%', 'images/down-arrow.svg', 'Скрыть');
    } else {
        showBrands('160px', 'images/up-arrow.svg', 'Показать все');
    }

});