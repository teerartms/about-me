document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initSkillBars();
    initContactForm();
});

/* Menu hamburger: toggle panel + tutup saat klik link, klik di luar, atau Escape. */
function initMobileMenu() {
    const toggle = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-menu]');
    if (!toggle || !menu) return;

    const setOpen = (open) => {
        menu.hidden = !open;
        toggle.setAttribute('aria-expanded', String(open));
    };

    setOpen(false);

    toggle.addEventListener('click', () => {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setOpen(false));
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape' || menu.hidden) return;
        setOpen(false);
        toggle.focus();
    });
}

/* Bar keahlian dianimasikan dari 0 saat pertama kali masuk viewport. */
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    if (!skillBars.length) return;

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const target = entry.target;
            const width = target.dataset.width || target.style.width;
            target.style.transition = 'none';
            target.style.width = '0';

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    target.style.transition = 'width 1.5s ease-in-out';
                    target.style.width = width;
                });
            });

            observer.unobserve(target);
        });
    }, { threshold: 0.5 });

    skillBars.forEach((bar) => observer.observe(bar));
}

/* Situs ini statis (GitHub Pages), jadi form dirutekan ke mailto alih-alih
   submit ke server yang tidak ada. */
function initContactForm() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const value = (id) => (form.querySelector('#' + id)?.value || '').trim();
        const subject = value('subject') || 'Pesan dari website';
        const body = 'Nama: ' + value('name') + '\nEmail: ' + value('email') + '\n\n' + value('message');

        window.location.href =
            'mailto:' + form.dataset.contactForm +
            '?subject=' + encodeURIComponent(subject) +
            '&body=' + encodeURIComponent(body);
    });
}
