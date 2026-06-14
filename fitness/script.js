// ============================================
// ELEVATE FITNESS CLUB — INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Sticky navbar shadow on scroll ---- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll);

  /* ---- Hamburger menu toggle ---- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu after clicking a link
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---- Scroll reveal animations ---- */
  const revealTargets = document.querySelectorAll(
    '.card, .section-head, .hero-content, .hero-image-wrap, .about-image, .about-content, .contact-info, .contact-form'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach((el) => observer.observe(el));

  /* ---- Contact form submission (demo) ---- */
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    success.classList.add('visible');
    form.reset();

    setTimeout(() => success.classList.remove('visible'), 5000);
  });

});
