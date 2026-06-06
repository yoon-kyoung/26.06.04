// Hero 순차 페이드인
const heroItems = document.querySelectorAll('.hero-photo, .hero-name, .hero-title, .hero-bio, .hero-contacts');

heroItems.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`;
});

window.addEventListener('DOMContentLoaded', () => {
  heroItems.forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
});

// 스크롤 시 섹션 페이드인
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  section.classList.add('fade-in');
  observer.observe(section);
});
