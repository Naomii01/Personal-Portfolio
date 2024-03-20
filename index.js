
function toggleMode() {
    const html = document.documentElement;
    const elementsToToggle = document.querySelectorAll('.dark-mode-toggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    html.classList.toggle('dark');
    elementsToToggle.forEach(element => {
        element.classList.toggle('dark:text-white');
    });
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
}
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.portfolio__container', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });