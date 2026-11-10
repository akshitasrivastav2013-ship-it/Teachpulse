// TECHPULSE WEBSITE JAVASCRIPT

// Welcome message in the browser console
console.log("Welcome to TechPulse!");

// Highlight the current navigation page
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")) {
        link.style.color = "#38bdf8";
    }
});

// Smooth scrolling for page links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Display the current year in copyright elements
document.querySelectorAll(".copyright").forEach(element => {
    element.textContent = "© " + new Date().getFullYear() +
        " TechPulse. All rights reserved.";
});