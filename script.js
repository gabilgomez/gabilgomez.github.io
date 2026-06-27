/* ============================================================
   i18n — string definitions
   ============================================================ */
const strings = {
  en: {
    'about.title':   'About',
    'exp.title':     'Experience',
    'skills.title':  'Skills',
    'edu.title':     'Education & Certifications',
    'contact.title': 'Contact',
  },
  pt: {
    'about.title':   'Sobre',
    'exp.title':     'Experiência',
    'skills.title':  'Competências',
    'edu.title':     'Formação & Certificações',
    'contact.title': 'Contacto',
  },
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (strings[lang][key] !== undefined) {
      el.textContent = strings[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ============================================================
   Language toggle
   ============================================================ */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* ============================================================
   Footer year
   ============================================================ */
document.getElementById('footer-year').textContent = new Date().getFullYear();

/* ============================================================
   Init
   ============================================================ */
applyLang(currentLang);
