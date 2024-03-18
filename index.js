const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");
const moonIcon = document.getElementById("moon");
const sunIcon = document.getElementById("sun");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    // Toggle opacity of sun and moon icons
    const isDarkMode = body.classList.contains("dark");
    if (isDarkMode) {
        sunIcon.style.opacity = 0;
        moonIcon.style.opacity = 1;
    } else {
        sunIcon.style.opacity = 1;
        moonIcon.style.opacity = 0;
    }
});
