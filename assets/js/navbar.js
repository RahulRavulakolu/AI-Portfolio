/**
 * Mobile Navigation Toggle
 */
document.addEventListener('DOMContentLoaded', function() {
    const navToggler = document.querySelector('[data-nav-toggler]');
    const navbar = document.querySelector('[data-navbar]');
    const header = document.querySelector('[data-header]');
    const navbarLinks = document.querySelectorAll('.navbar-link');

    // Toggle mobile menu
    const toggleNavbar = () => {
        navbar.classList.toggle('active');
        navToggler.classList.toggle('active');
        document.body.classList.toggle('nav-active');
    };

    // Toggle menu on button click
    if (navToggler) {
        navToggler.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleNavbar();
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navbar.classList.contains('active') && 
            !navbar.contains(e.target) && 
            e.target !== navToggler && 
            !navToggler.contains(e.target)) {
            toggleNavbar();
        }
    });

    // Close menu when clicking on a nav link
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                toggleNavbar();
            }
        });
    });

    // Add header background on scroll
    const headerScroll = () => {
        const scrollY = window.pageYOffset;
        
        if (scrollY > 50) {
            header.classList.add('active1');
        } else {
            header.classList.remove('active1');
        }
    };

    window.addEventListener('scroll', headerScroll);
    headerScroll(); // Initialize header state
});
