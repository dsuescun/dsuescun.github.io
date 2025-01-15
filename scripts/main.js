// This file contains JavaScript code for interactive features of the portfolio.

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form validation example
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const email = form.querySelector('input[type="email"]');
            if (!email.value) {
                e.preventDefault();
                alert('Please enter a valid email address.');
            }
        });
    }
});