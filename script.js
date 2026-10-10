
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.textContent =
            `© ${new Date().getFullYear()} Jothilakshmi | Personal Portfolio`;
    }

    console.log("Portfolio website loaded successfully!");
});
