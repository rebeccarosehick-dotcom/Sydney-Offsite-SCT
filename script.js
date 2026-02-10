// Check if PDF can be displayed
document.addEventListener('DOMContentLoaded', function() {
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfFallback = document.querySelector('.pdf-fallback');
    
    // Check if PDF viewing is supported
    if (!navigator.pdfViewerEnabled && !navigator.mimeTypes['application/pdf']) {
        if (pdfViewer) {
            pdfViewer.style.display = 'none';
        }
        if (pdfFallback) {
            pdfFallback.style.display = 'block';
        }
    }

    // Handle PDF load error
    if (pdfViewer) {
        pdfViewer.addEventListener('error', function() {
            pdfViewer.style.display = 'none';
            if (pdfFallback) {
                pdfFallback.style.display = 'block';
            }
        });
    }

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.info-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    console.log('Sydney Offsite web app loaded successfully');
});
