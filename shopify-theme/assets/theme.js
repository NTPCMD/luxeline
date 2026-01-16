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
