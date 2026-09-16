'use strict';

const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const navLinks = Array.from(document.querySelectorAll('.nav-menu a'));
const samePageNavLinks = navLinks.filter((link) => (link.getAttribute('href') || '').startsWith('#'));

const setHeaderState = () => header?.classList.toggle('scrolled', window.scrollY > 12);
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

if (navToggle && navMenu) {
  const setMenuOpen = (open) => {
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navMenu.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  };
  navToggle.addEventListener('click', () => {
    setMenuOpen(navToggle.getAttribute('aria-expanded') !== 'true');
  });
  navLinks.forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      navToggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) setMenuOpen(false);
  });
  header.addEventListener('focusout', (event) => {
    if (event.relatedTarget && !header.contains(event.relatedTarget)) setMenuOpen(false);
  });
  window.matchMedia('(min-width: 781px)').addEventListener('change', (event) => {
    if (event.matches) setMenuOpen(false);
  });
  // Collapse mobile navigation only once its controls are functional.
  document.documentElement.classList.add('nav-ready');
}

if ('IntersectionObserver' in window && samePageNavLinks.length) {
  const activeNavObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      samePageNavLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  samePageNavLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) activeNavObserver.observe(section);
  });
}

// All research is in the HTML. JavaScript adds optional search and filters.
const publicationTools = document.querySelector('.publication-tools');
const publicationSearch = document.querySelector('#publication-search');
const publicationCount = document.querySelector('.publication-count');
const publicationEmpty = document.querySelector('.publication-empty');
const publicationFilters = Array.from(document.querySelectorAll('[data-filter]'));
const publicationGroups = Array.from(document.querySelectorAll('[data-publication-group]'));
const publications = Array.from(document.querySelectorAll('[data-publication]'));

if (publicationTools && publicationSearch && publicationCount && publicationEmpty) {
  const normalize = (text) => text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const searchable = publications.map((element) => ({
    element,
    text: normalize(`${element.textContent} ${element.dataset.search || ''}`),
    status: element.dataset.publication,
  }));
  let selectedStatus = 'all';
  const updatePublications = () => {
    const terms = normalize(publicationSearch.value).trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    searchable.forEach(({ element, text, status }) => {
      const matches = (selectedStatus === 'all' || selectedStatus === status) && terms.every((term) => text.includes(term));
      element.hidden = !matches;
      if (matches) visible += 1;
    });
    publicationGroups.forEach((group) => {
      group.hidden = !Array.from(group.querySelectorAll('[data-publication]')).some((paper) => !paper.hidden);
    });
    publicationCount.textContent = `Showing ${visible} of ${publications.length} recent works`;
    publicationEmpty.hidden = visible !== 0;
  };
  publicationSearch.addEventListener('input', updatePublications);
  publicationFilters.forEach((button) => {
    button.addEventListener('click', () => {
      selectedStatus = button.dataset.filter;
      publicationFilters.forEach((filter) => filter.setAttribute('aria-pressed', String(filter === button)));
      updatePublications();
    });
  });
  updatePublications();
  publicationTools.hidden = false;
  publicationCount.hidden = false;
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

// Include collapsed CV sections when printing, then restore the reader's view.
let detailsOpenedForPrint = [];
window.addEventListener('beforeprint', () => {
  detailsOpenedForPrint = Array.from(document.querySelectorAll('details:not([open])'));
  detailsOpenedForPrint.forEach((detail) => { detail.open = true; });
});
window.addEventListener('afterprint', () => {
  detailsOpenedForPrint.forEach((detail) => { detail.open = false; });
  detailsOpenedForPrint = [];
});
