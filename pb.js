let slideIndex = 0;

function mudarSlide(direcao) {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    slideIndex += direcao;

    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    const offset = -slideIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    let autoSlide = setInterval(() => mudarSlide(1), 5000);

    const buttons = document.querySelectorAll('.anterior, .proximo');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            clearInterval(autoSlide);
            autoSlide = setInterval(() => mudarSlide(1), 5000);
        });
    });
});
