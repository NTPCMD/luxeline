// Global Luxeline Theme JS
document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const mobileMenuClose = document.querySelector('[data-mobile-menu-close]');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  
  // Header Scroll Behavior
  const header = document.querySelector('[data-header]');
  if (header) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      lastScroll = currentScroll;
    });
  }
  
  // Search Toggle
  const searchToggle = document.querySelector('[data-search-toggle]');
  const searchDrawer = document.querySelector('[data-search-drawer]');
  const searchClose = document.querySelector('[data-search-close]');
  
  if (searchToggle && searchDrawer) {
    searchToggle.addEventListener('click', () => {
      searchDrawer.classList.add('active');
      const searchInput = searchDrawer.querySelector('input');
      if (searchInput) searchInput.focus();
    });
  }
  
  if (searchClose && searchDrawer) {
    searchClose.addEventListener('click', () => {
      searchDrawer.classList.remove('active');
    });
  }
  
  // Countdown Timer
  const launchSections = document.querySelectorAll('[data-launch-date]');
  
  const updateCountdown = (section) => {
    const dateValue = section.dataset.launchDate;
    const countdown = section.querySelector('.countdown-grid');
    const placeholder = section.querySelector('.launch-placeholder');

    if (!dateValue) {
      if (countdown) countdown.style.display = 'none';
      if (placeholder) placeholder.style.display = 'block';
      return;
    }

    const launchDate = new Date(dateValue).getTime();
    if (Number.isNaN(launchDate)) {
      if (countdown) countdown.style.display = 'none';
      if (placeholder) placeholder.style.display = 'block';
      return;
    }

    const now = Date.now();
    const diff = launchDate - now;

    if (diff <= 0) {
      if (countdown) countdown.style.display = 'none';
      if (placeholder) {
        placeholder.textContent = 'We are live!';
        placeholder.style.display = 'block';
      }
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    section.querySelector('[data-countdown="days"]').textContent = String(days).padStart(2, '0');
    section.querySelector('[data-countdown="hours"]').textContent = String(hours).padStart(2, '0');
    section.querySelector('[data-countdown="minutes"]').textContent = String(minutes).padStart(2, '0');
    section.querySelector('[data-countdown="seconds"]').textContent = String(seconds).padStart(2, '0');

    if (countdown) countdown.style.display = 'flex';
    if (placeholder) placeholder.style.display = 'none';
  };

  if (launchSections.length) {
    launchSections.forEach((section) => {
      updateCountdown(section);
      setInterval(() => updateCountdown(section), 1000);
    });
  }
  
  // Accordion
  const accordionItems = document.querySelectorAll('[data-accordion-trigger]');
  accordionItems.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('[data-accordion-item]');
      const content = item.querySelector('[data-accordion-content]');
      const isOpen = item.classList.contains('active');
      
      item.classList.toggle('active');
      if (content) {
        content.style.maxHeight = isOpen ? '0' : content.scrollHeight + 'px';
      }
    });
  });
});
