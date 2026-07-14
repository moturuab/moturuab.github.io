const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const navLinks = Array.from(document.querySelectorAll('.nav-menu a'));
const samePageNavLinks = navLinks.filter((link) => (link.getAttribute('href') || '').startsWith('#'));
const sections = Array.from(document.querySelectorAll('main section[id]'));

const setHeaderState = () => {
  header?.classList.toggle('scrolled', window.scrollY > 12);
};

setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navMenu?.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    navMenu?.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));

  if (samePageNavLinks.length > 0) {
    const activeNavObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        samePageNavLinks.forEach((link) => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === `#${id}`);
        });
      });
    }, { rootMargin: '-35% 0px -50% 0px', threshold: 0 });

    sections.forEach((section) => activeNavObserver.observe(section));
  }
} else {
  revealElements.forEach((element) => element.classList.add('in-view'));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
