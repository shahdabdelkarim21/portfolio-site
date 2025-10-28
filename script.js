// Typing Effect for Header Title
const title = document.querySelector('#Home h1');
let index = 0;
function typeWriter() {
    if (index < text.length) {
        title.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation on scroll
$(document).ready(function() {
    $(window).scroll(function() {
        $('.fade-in').each(function() {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                $(this).addClass('visible');
            }
        });
    });
});

// Dark Mode Toggle
const toggle = document.getElementById('dark-mode-toggle');
if (toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
}

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        projects.forEach(project => {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden');
            }
        });
    });
});

// Modal for Projects
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');
const closeBtn = document.querySelector('.close');
document.querySelectorAll('.project a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const project = e.target.closest('.project');
        modalTitle.textContent = project.querySelector('h3').textContent;
        modalDesc.textContent = project.querySelector('p').textContent;
        modalLink.href = e.target.href;
        modal.style.display = 'block';
    });
});
if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
}
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
});

// Enhanced Form Validation
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;
        if (name && email && message) {
            alert('تم إرسال الرسالة بنجاح! شكراً لك.');
            this.reset();
        } else {
            alert('يرجى ملء جميع الحقول.');
        }
    });
}