document.addEventListener('scroll', function () {
    window.scrollTo(0, document.body.scrollHeight);
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
  