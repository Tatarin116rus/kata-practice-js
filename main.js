document.addEventListener('DOMContentLoaded', function () {
    let swiper;
    function initSwiper() {
        const swiperElement = document.getElementById('swiper');

        if (window.innerWidth < 768) {
            if (!swiper) {
                swiper = new Swiper(swiperElement, {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                    pagination: {
                        el: '.slider__pagination',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                        768: {
                            enabled: false,
                        }
                    }
                });
            }
        } else if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
    }

    initSwiper();
    window.addEventListener('resize', initSwiper);
});


const toggleButton = document.querySelector('.main--button_hide-button');
const hiddenItems = document.querySelectorAll('.hidden');
const hiddenTabletItems = document.querySelectorAll('.hidden_tablet');
// Начальная установка текста и класса для стрелки
toggleButton.textContent = 'Показать всё';
toggleButton.classList.add('show-all');

toggleButton.addEventListener('click', () => {
    // Скрытые элементы для ПК
    hiddenItems.forEach(item => {
        item.classList.toggle('hidden');
    });

    // Скрытые элементы для планшета
    hiddenTabletItems.forEach(item => {
        item.classList.toggle('hidden_tablet');
    });

    // Текст кнопки
    if (toggleButton.textContent.trim() === 'Показать всё') {
        toggleButton.textContent = 'Скрыть';
        toggleButton.classList.remove('show-all');
        toggleButton.classList.add('hide-all'); // Стрелка вверх
    } else {
        toggleButton.textContent = 'Показать всё';
        toggleButton.classList.remove('hide-all'); 
        toggleButton.classList.add('show-all');
    }
});