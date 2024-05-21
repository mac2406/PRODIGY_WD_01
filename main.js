// main.js

document.addEventListener('DOMContentLoaded', (event) => {
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;
            if (inView) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };

    // Animate on page load
    animateOnScroll();

    // Animate on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Button hover animations
    const buttons = document.querySelectorAll('.btn, .btn2');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('animate__animated', 'animate__pulse');
        });
        button.addEventListener('animationend', () => {
            button.classList.remove('animate__animated', 'animate__pulse');
        });
    });
});