document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Scroll Effect (Glassmorphism intensity change)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 11, 0.95)';
            header.style.padding = '1rem 5%';
        } else {
            header.style.background = 'rgba(10, 10, 11, 0.8)';
            header.style.padding = '1.5rem 5%';
        }
    });

    // Form Submission Handling
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real scenario, this would send data to a backend
            alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
            form.reset();
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add animation styles to sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });

});
