// 스크롤 시 섹션 페이드인 애니메이션
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
