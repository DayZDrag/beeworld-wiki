(() => {
  const menuButton = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-nav]');
  const quietButton = document.querySelector('[data-quiet]');
  const header = document.querySelector('[data-header]');

  const closeMenu = () => {
    if (!menuButton || !nav) return;
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  };

  menuButton?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  quietButton?.addEventListener('click', () => {
    const enabled = document.body.classList.toggle('quiet');
    quietButton.setAttribute('aria-pressed', String(enabled));
    quietButton.innerHTML = enabled
      ? '<span aria-hidden="true">◌</span> Вернуть движение'
      : '<span aria-hidden="true">〰</span> Тихий режим';
  });

  document.querySelector('[data-year]').textContent = new Date().getFullYear();

  const refreshHeader = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  window.addEventListener('scroll', refreshHeader, { passive: true });
  refreshHeader();
})();
