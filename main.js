const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        400: {
            enabled: false,
            spaceBetween: 0
        }
    }
});

const toggleButton = document.querySelector('.main--button_hide-button');
const allBrandCards = document.querySelectorAll('.brand-card');

toggleButton.textContent = 'Показать всё';
toggleButton.classList.add('show-all');

const hiddenElements = {
    desktop: document.querySelectorAll('.brand-card.hidden'),
    tablet: document.querySelectorAll('.brand-card.hidden_tablet')
};

toggleButton.addEventListener('click', () => {
    const isShowingAll = toggleButton.textContent.trim() === 'Показать всё';

    if (isShowingAll) {
        allBrandCards.forEach(card => {
            card.classList.remove('hidden', 'hidden_tablet');
        });
    } else {
        if (window.innerWidth >= 1120) {
            hiddenElements.desktop.forEach(card => card.classList.add('hidden'));
            hiddenElements.tablet.forEach(card => card.classList.remove('hidden_tablet'));
        } else if (window.innerWidth >= 768) {
            hiddenElements.tablet.forEach(card => card.classList.add('hidden_tablet'));
            hiddenElements.desktop.forEach(card => card.classList.remove('hidden'));
        }
    }

    toggleButton.textContent = isShowingAll ? 'Скрыть' : 'Показать всё';
    toggleButton.classList.toggle('show-all', !isShowingAll);
    toggleButton.classList.toggle('hide-all', isShowingAll);

    document.querySelector('.swiper-container').style.height = 'auto';
});
