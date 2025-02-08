// Typed Text Animation
document.addEventListener('DOMContentLoaded', () => {
    const typedElements = document.querySelectorAll('.typing-text');
    typedElements.forEach((element) => {
        const typed = new Typed(element, {
            strings: ['AI Engineer', 'ML Researcher', 'Data Scientist', 'Tech Innovator'],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop: true,
        });
    });
});

// Intersection Observer for fade-in animations
document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); // Stop observing after animation is applied
            }
        });
    }, observerOptions);

    // Observe all sections with 'animate-on-scroll' class
    document.querySelectorAll('.animate-on-scroll').forEach((section) => {
        fadeInObserver.observe(section);
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetElement = document.querySelector(targetId); // Find the target element

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'start', // Align to the top of the viewport
            });

            // Update URL hash without jumping
            history.pushState(null, null, targetId);
        }
    });
});

// Optional: Add a scroll-to-top button
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '↑';
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    // Show/hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Scroll to top when the button is clicked
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});