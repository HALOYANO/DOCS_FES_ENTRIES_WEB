(() => {
  const ctaLinks = document.querySelectorAll('[data-cta]');

  ctaLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'click_entry_cta', {
          event_category: 'engagement',
          event_label: 'google_form'
        });
      }
    });
  });

  const header = document.querySelector('.site-header');
  const updateHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
})();
