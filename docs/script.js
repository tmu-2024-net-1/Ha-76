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
    function checkVisibility() {
      const zones = document.querySelectorAll('.zone');
      zones.forEach(zone => {
        const rect = zone.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          zone.classList.add('visible');
        } else {
          zone.classList.remove('visible');
        }
      });
    }
    
    // スクロールイベントで可視性をチェック
    document.addEventListener('scroll', checkVisibility);
    // 初期表示時にも可視性をチェック
    checkVisibility();
  });
  