document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.transition = 'none';
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.transition = 'width 1.5s ease-in-out';
                    entry.target.style.width = width;
                }, 50);
                observer.unobserve(entry.target);
             }
        });
    }, {threshold: 0.5});
            
    skillBars.forEach(bar => {
                observer.observe(bar);
    });
});