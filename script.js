document.addEventListener("DOMContentLoaded", function () {
    // Select all navbar links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute("href").substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth" // Enables smooth scrolling
                });
            }
        });
    });
});
function toggleMenu() {
    let menu = document.getElementById("nav-links");
    if (menu) {
        menu.classList.toggle("show");
    } else {
        console.error("Element with ID 'nav-links' not found!");
    }
}

