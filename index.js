document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleSwitch = document.getElementById("toggle-switch");
    const moonIcon = document.getElementById("moon");
    const sunIcon = document.getElementById("sun");

    // Check local storage for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        // Update icons based on saved theme
        if (savedTheme === 'dark') {
            moonIcon.style.display = "block";
            sunIcon.style.display = "none";
        } else {
            moonIcon.style.display = "none";
            sunIcon.style.display = "block";
        }
    }

    toggleSwitch.addEventListener("click", () => {
        // Toggle dark mode class on body
        body.classList.toggle("dark");

        // Save theme preference to local storage
        const currentTheme = body.classList.contains("dark") ? "dark" : "";
        localStorage.setItem('theme', currentTheme);

        // Update icons based on current theme
        if (currentTheme === 'dark') {
            moonIcon.style.display = "block";
            sunIcon.style.display = "none";
        } else {
            moonIcon.style.display = "none";
            sunIcon.style.display = "block";
        }
    });
});
