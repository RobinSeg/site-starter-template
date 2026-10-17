(() => {
  const menuToggle = document.querySelector('#menuToggle');
  const mainNav = document.querySelector('#mainNav');
  const themeToggle = document.querySelector('#themeToggle');
  const year = document.querySelector('#year');

  if (menuToggle && mainNav) {
    const closeMenu = () => {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      const label = menuToggle.querySelector('.sr-only');
      if (label) label.textContent = 'Ouvrir le menu';
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      const label = menuToggle.querySelector('.sr-only');
      if (label) label.textContent = isOpen ? 'Fermer le menu' : 'Ouvrir le menu';
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 701px)').matches) closeMenu();
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-theme');
      themeToggle.setAttribute('aria-pressed', String(isLight));
      themeToggle.textContent = isLight ? '☾ Thème sombre' : '☼ Thème clair';
    });
  }

  if (year) year.textContent = new Date().getFullYear();
})();
