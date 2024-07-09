document.addEventListener('DOMContentLoaded', function () {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
    const zones = document.querySelectorAll('.zone');
    zones.forEach(zone => {
      const rect = zone.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        zone.classList.add('visible');
      } else {
        zone.classList.remove('visible');
      }
    });
  });
  