document.addEventListener('DOMContentLoaded', function () {
  const fishElements = document.querySelectorAll('.fish');
  
  fishElements.forEach(fish => {
    // ランダムなスタート位置を設定
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    
    fish.style.transform = `translate(${startX}px, ${startY}px)`;
    
    // 魚の特性に基づくクラスを適用
    if (fish.textContent.includes('目梶木')) {
      fish.classList.add('fish-straight');
    } else if (fish.textContent.includes('鱈場蟹')) {
      fish.classList.add('fish-walk');
    }
    
    // その他の魚の特性も同様に適用
  });
});


document.addEventListener('scroll', function () {
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
  