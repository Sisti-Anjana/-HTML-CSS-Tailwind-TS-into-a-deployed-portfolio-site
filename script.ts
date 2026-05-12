// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking on links
        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Smooth scroll for nav links
    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Handle contact form
    const contactFormElement = document.getElementById('contact-form') as HTMLFormElement;
    if (contactFormElement) {
        contactFormElement.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = (contactFormElement.elements[0] as HTMLInputElement).value;
            const email = (contactFormElement.elements[1] as HTMLInputElement).value;
            const message = (contactFormElement.elements[2] as HTMLTextAreaElement).value;

            // Validate inputs
            if (!name.trim() || !email.trim() || !message.trim()) {
                alert('Please fill in all fields');
                return;
            }

            // Validate email
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Success message (in real app, this would send to backend)
            showSuccessMessage('Thank you! Your message has been sent.');
            contactFormElement.reset();
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe project cards
    const projectCards = document.querySelectorAll('[id="projects"] > div > div > div');
    projectCards.forEach(card => {
        observer.observe(card);
    });
});

// Helper function to validate email
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to show success message
function showSuccessMessage(message: string): void {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// Track page views (for analytics)
function trackPageView(page: string): void {
    console.log(`Page view: ${page}`);
    // Add your analytics code here
}

// Smooth page transitions
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    trackPageView('home');
});
