document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleSwitch = document.getElementById("toggle-switch");

    // Check local storage for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    toggleSwitch.addEventListener("click", () => {
        // Toggle dark mode class on body
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");

        // Save theme preference to local storage
        const currentTheme = body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
        localStorage.setItem('theme', currentTheme);
    });
});
