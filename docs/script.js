document.addEventListener("DOMContentLoaded", () => {
  const poemText = "海の深き蒼に魚たちの影が揺れる\n波音の囁きに秘められし物語\n\n月の光が水面を照らし\n銀の鱗がきらめく\n夜の静寂に包まれ\n夢見る魚たち\n\n潮の香り漂う遠い水平線の彼方\n冒険を求めて泳ぐ勇者の群れ\n珊瑚の森の中\n色とりどりの魚たち\n隠れ家となりし海の宝石箱\n嵐の夜も  凪の朝も\n変わらぬ海の心\n魚たちの故郷\n波間に消えゆく小さき命の歌\n海と共に生きる魚たちの詩"; // 改行を含む詩
  const poemContainer = document.createElement('div');
  poemContainer.id = "poem";
  poemContainer.classList.add('poem');

  // 改行で分けられた詩を配置
  poemText.split('\n').forEach(line => {
    const poemLine = document.createElement('div');
    poemLine.classList.add('poem-line');
    poemLine.textContent = line;
    poemContainer.appendChild(poemLine);
  });

  document.body.insertBefore(poemContainer, document.getElementById('container'));

  // モーダルの設定
  const modal = document.getElementById("modal");
  const span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  fetch('fish.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const textElement = document.createElement('div');
        textElement.classList.add('text', item.animation);

        // サイズを設定
        switch (item.size) {
          case 'small':
            textElement.style.fontSize = '2em';
            break;
          case 'medium':
            textElement.style.fontSize = '3em';
            break;
          case 'large':
            textElement.style.fontSize = '4em';
            break;
        }

        // 移動パターンを設定
        switch (item.movement) {
          case 'normal':
            textElement.classList.add('normal');
            textElement.style.animationDuration = `${Math.random() * 5 + 5}s`;
            break;
          case 'fast':
            textElement.classList.add('fast');
            break;
          case 'flutter':
            textElement.classList.add('flutter');
            break;
            case 'slow':
            textElement.classList.add('slow');
            break;
          case 'walk':
            textElement.classList.add('walk');
            break;
        }

        textElement.textContent = item.name;

        textElement.dataset.read = item.read; // 読み方をデータ属性に追加

        // 読み方の要素を作成
        const readElement = document.createElement('span');
        readElement.classList.add('read');
        readElement.textContent = item.read;

        // 名前と読み方を同じ要素に追加
        textElement.appendChild(readElement);

        // ランダムな位置に配置
        const zoneElement = document.getElementById(item.zone);
        zoneElement.appendChild(textElement);

        const zoneWidth = zoneElement.clientWidth;
        const zoneHeight = zoneElement.clientHeight;
        const textWidth = textElement.clientWidth;
        const textHeight = textElement.clientHeight;

        const x = Math.random() * (zoneWidth - textWidth);
        const y = Math.random() * (zoneHeight - textHeight);
        textElement.style.left = `${x}px`;
        textElement.style.top = `${y}px`;
      });

      const bubbleTexts = ["海", "深", "蒼","魚","影","波","音","月","光","水","銀","鱗","夜","夢","潮","宝","凪","命","香","静","寂","珊","瑚"];
      const totalBubbles = 100000; // 表示する泡の総数
      for (let i = 0; i < totalBubbles; i++) {
      
          setTimeout(() => {
            const bubbleText = document.createElement('div');
            bubbleText.classList.add('bubble-text');
            bubbleText.textContent = bubbleTexts[Math.floor(Math.random() * bubbleTexts.length)];

            // ランダムな位置に配置
            const x = Math.random() * window.innerWidth;
            const y = document.body.scrollHeight; // ページの最下部から出現

            bubbleText.style.left = `${x}px`;
            bubbleText.style.top = `${y}px`;

            document.body.appendChild(bubbleText);
          }, i * 200); 
        }
      

      // ページの読み込み時にスクロール位置を最下部に設定
      window.scrollTo(0, document.body.scrollHeight);
    })
    .catch(error => console.error('Error loading the JSON data:', error));
});