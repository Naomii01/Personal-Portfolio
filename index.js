
// Function to toggle between dark and light mode
function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark"); // Toggle the 'dark' class on the body
  
  const modeIcon = document.getElementById("modeIcon");
  modeIcon.classList.toggle("fa-sun"); // Toggle sun icon
  modeIcon.classList.toggle("fa-moon"); // Toggle moon icon
  modeIcon.classList.toggle("text-yellow-500"); // Toggle sun color
  modeIcon.classList.toggle("text-gray-500"); // Toggle moon color
  modeIcon.classList.toggle("rotate-90"); // Rotate icon
}

// Add event listener to the toggle button
const toggleModeBtn = document.getElementById("toggleModeBtn");
toggleModeBtn.addEventListener("click", toggleMode);

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