// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    // Change button icon based on dark mode state
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.innerHTML = "🌞"; // Sun icon for light mode
    } else {
        darkModeToggle.innerHTML = "🌙"; // Moon icon for dark mode
    }
});

// Fade-in Animation for Sections on Scroll
const fadeInSections = document.querySelectorAll('.fade-in');

function checkVisibility() {
    fadeInSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
}

// Call the function to check visibility on scroll
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
