
// Format price with Indian rupee symbol
function formatPrice(price) {
    return '₹' + Math.round(price).toLocaleString('en-IN');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Product card hover effect enhancement
document.querySelectorAll('.group').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('img').style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('img').style.transform = 'scale(1)';
    });
});
// Mobile menu toggle (will be used by navbar component)
window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
};

// Mobile search toggle
window.toggleSearch = function() {
    const search = document.getElementById('mobile-search');
    search.classList.toggle('hidden');
};

// Search functionality
document.querySelectorAll('input[type="text"][placeholder*="Search"]').forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                // In a real app, this would redirect to search results
                alert(`Searching for: ${query}`);
                // Alternatively: window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
            }
        }
    });
});
// Initialize animations when elements come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});