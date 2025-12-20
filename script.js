// Light/Dark Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
});

// Hero Parallax Tilt
const heroCard = document.querySelector('.hero .hero-card');
heroCard.addEventListener('mousemove', e => {
    const rect = heroCard.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    heroCard.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
});
heroCard.addEventListener('mouseleave', () => heroCard.style.transform = 'rotateX(0) rotateY(0)');

// Project Modal Viewer
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.getElementById('modalClose');


const modalVideo = document.getElementById('modalVideo');
const modalV = document.getElementById('modal-video');
const modalVideoClose = document.getElementById('modalVideoClose');

document.querySelectorAll('.grid .card img').forEach(img => {
    console.log("img: ", img.src);
    img.addEventListener('click', () => {
        modal.classList.add('active');
        modalImg.src = img.src;
    });
});
modalClose.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
});

document.querySelectorAll('.grid .card video').forEach(vid => {
    vid.addEventListener('click', () => {
        modalV.classList.add('active');
        modalVideo.src = vid.src;
    });
});

modalVideoClose.addEventListener('click', () => modalV.classList.remove('active'));
modalV.addEventListener('click', e => {
    if (e.target === modalV) modalV.classList.remove('active');
});

// Splash hide after load
document.addEventListener('DOMContentLoaded', () => {
    const s = document.getElementById('splash');

    setTimeout(() => {
        s.classList.add('hide');
    }, 300); // smooth delay

    setTimeout(() => {
        s.style.display = 'none';
    }, 800);
});


// IntersectionObserver for reveal animations & skill meters
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('show');
            // animate meters
            const meters = e.target.querySelectorAll('.meter > i');
            meters.forEach(m => {
                m.style.transform = 'translateX(0)';
            });
        }
    });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Projects filter
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.grid .card');
filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.getAttribute('data-filter');
    cards.forEach(c => {
        const cat = c.getAttribute('data-cat');
        if (f === 'all' || cat === f) {
            c.style.display = 'block';
        } else {
            c.style.display = 'none';
        }
    });
}));

// Hover subtle parallax on cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) / 20;
        const y = (e.clientY - r.top - r.height / 2) / 20;
        card.style.transform = `translateY(-6px) rotateX(${-y}deg) rotateY(${x}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});
