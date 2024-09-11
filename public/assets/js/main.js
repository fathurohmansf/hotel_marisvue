const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
    ...scrollRevealOption,
    interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
    ...scrollRevealOption,
    interval: 500,
    origin: "right",
});

document.addEventListener("DOMContentLoaded", function() {
    ScrollReveal().reveal('.room-details', { duration: 1000, origin: 'bottom', distance: '50px' });
});

// untuk familly room
// Get the slider and content elements
const slider = document.querySelector('.slider');
const content = document.querySelector('.content');

// Set the current slide index
let currentSlide = 0;

// Function to change the slide
function changeSlide() {
    // Get the current slide image
    const currentImage = slider.children[currentSlide];

    // Add the active class to the current slide
    currentImage.classList.add('active');

    // Remove the active class from the other slides
    for (let i = 0; i < slider.children.length; i++) {
        if (i !== currentSlide) {
            slider.children[i].classList.remove('active');
        }
    }

    // Update the content section
    const title = content.querySelector('#title');
    const shortDescription = content.querySelector('#short-description');
    const longDescription = content.querySelector('#long-description');

    // Update the content based on the current slide
    title.textContent = `Title ${currentSlide + 1}`;
    shortDescription.textContent = `Short description ${currentSlide + 1}`;
    longDescription.textContent = `Long description ${currentSlide + 1}`;
}

// Add event listeners to the slider images
slider.children.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentSlide = index;
        changeSlide();
    });
});

// Initialize the slider
changeSlide();