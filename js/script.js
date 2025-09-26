// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Back to top button functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Copy citation to clipboard
function copyToClipboard() {
    const citationText = document.getElementById('citation-text').textContent;
    const copyBtn = document.querySelector('.copy-btn');

    // Clean up the citation text (remove extra whitespace)
    const cleanCitation = citationText.trim();

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(cleanCitation).then(() => {
            showCopySuccess(copyBtn);
        }).catch(err => {
            console.error('Clipboard API failed: ', err);
            fallbackCopyToClipboard(cleanCitation, copyBtn);
        });
    } else {
        fallbackCopyToClipboard(cleanCitation, copyBtn);
    }
}

function showCopySuccess(copyBtn) {
    const originalHTML = copyBtn.innerHTML;
    const originalStyle = copyBtn.style.cssText;

    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    copyBtn.style.background = '#10b981';
    copyBtn.style.transform = 'scale(1.05)';
    copyBtn.style.boxShadow = '0 4px 20px rgba(16, 185, 129, 0.4)';

    setTimeout(() => {
        copyBtn.innerHTML = originalHTML;
        copyBtn.style.cssText = originalStyle;
    }, 2500);
}

function fallbackCopyToClipboard(text, copyBtn) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopySuccess(copyBtn);
        } else {
            showCopyError(copyBtn);
        }
    } catch (err) {
        console.error('Fallback copy failed: ', err);
        showCopyError(copyBtn);
    }

    document.body.removeChild(textArea);
}

function showCopyError(copyBtn) {
    const originalHTML = copyBtn.innerHTML;
    const originalStyle = copyBtn.style.cssText;

    copyBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Failed';
    copyBtn.style.background = '#ef4444';

    setTimeout(() => {
        copyBtn.innerHTML = originalHTML;
        copyBtn.style.cssText = originalStyle;
    }, 2000);
}

// Coming soon button interaction
document.addEventListener('DOMContentLoaded', () => {
    const comingSoonBtn = document.getElementById('coming-soon-btn');
    if (comingSoonBtn) {
        comingSoonBtn.addEventListener('click', (e) => {
            e.preventDefault();

            // Create a tooltip
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Implementation will be released soon!';
            tooltip.style.cssText = `
                position: absolute;
                top: -40px;
                left: 50%;
                transform: translateX(-50%);
                background: #1e293b;
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 14px;
                white-space: nowrap;
                z-index: 1000;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;

            // Add arrow
            const arrow = document.createElement('div');
            arrow.style.cssText = `
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 6px solid #1e293b;
            `;
            tooltip.appendChild(arrow);

            // Position relative to button
            comingSoonBtn.style.position = 'relative';
            comingSoonBtn.appendChild(tooltip);

            // Show tooltip
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 10);

            // Hide tooltip after 3 seconds
            setTimeout(() => {
                tooltip.style.opacity = '0';
                setTimeout(() => {
                    if (tooltip.parentNode) {
                        tooltip.parentNode.removeChild(tooltip);
                    }
                }, 300);
            }, 3000);
        });
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .download-card, .author-card, .layer');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Removed conflicting parallax effect - handled in enhanced scroll effects below

// Enhanced mobile menu animation
const mobileMenuToggle = () => {
    const bars = document.querySelectorAll('.bar');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
};

hamburger.removeEventListener('click', hamburger.onclick);
hamburger.addEventListener('click', mobileMenuToggle);

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        if (navMenu.classList.contains('active')) {
            mobileMenuToggle();
        }
    }
});

// Preloader (optional - can be added if needed)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Enhanced scroll effects for sections
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;

    // Parallax for hero background
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `center ${scrollTop * 0.5}px`;
    }

    // Fade effect for navigation
    const nav = document.querySelector('.nav-container');
    if (nav) {
        const opacity = Math.max(0.95 - scrollTop / 500, 0.85);
        nav.style.background = `rgba(255, 255, 255, ${opacity})`;
    }
});

// Image lazy loading enhancement
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance optimization: debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll handlers
const debouncedScrollHandler = debounce(() => {
    // Your scroll handling code here
    const scrolled = window.pageYOffset;

    // Back to top button
    if (scrolled > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }

    // Header effects
    const header = document.querySelector('.header');
    if (scrolled > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading states for external links
document.querySelectorAll('a[href^="http"], a[href^="assets/"]').forEach(link => {
    link.addEventListener('click', function() {
        this.style.opacity = '0.7';
        this.style.pointerEvents = 'none';

        setTimeout(() => {
            this.style.opacity = '1';
            this.style.pointerEvents = 'auto';
        }, 1000);
    });
});

// Console easter egg for developers
console.log(`
🚀 LACP: LLM Agent Communication Protocol
📄 NeurIPS 2025 AI4NextG Workshop

Thanks for checking out the code!
Interested in contributing to the future of AI agent communication?

Contact: xin019@e.ntu.edu.sg
`);