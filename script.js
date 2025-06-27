const images = [
  "img/cupcakes-380178_960_720.jpg",
  "img/bunch-of-flowers-1463377_1920.jpg",
  "img/celebration-4764395_1920.jpg",
  "img/strawberry-8214486_1920.jpg",
];

let currentIndex = 0;

// 背景画像を切り替える
function updateBackground() {
  const mainMessage = document.querySelector(".main-message");
  const nextImage = `url("${images[currentIndex]}")`;
  mainMessage.style.backgroundImage = nextImage;
  currentIndex = (currentIndex + 1) % images.length;
}

// タイプライター風テキスト表示
function typeWriterEffect(element, text, speed = 60) {
  element.innerHTML = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      // 改行は <br> に
      if (text[i] === "\n") {
        element.innerHTML += "<br>";
      } else {
        element.innerHTML += text[i];
      }
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// 初期ロード
window.addEventListener("DOMContentLoaded", () => {
  // 星空
  createStars(31);

  // ウェルカムメッセージを数秒後に非表示に
  setTimeout(() => {
    const welcome = document.getElementById("welcome-message");
    if (welcome) {
      welcome.style.display = "none";
    }
    // main-messageをふわっと表示
    const mainMsg = document.querySelector(".main-message");
    if (mainMsg) {
      mainMsg.classList.add("show");
      // 背景切り替え開始
      updateBackground();
      setInterval(updateBackground, 30000);
      // タイプライター開始
      const mainText = "今日はあなたの特別な日です！\n素敵な一年になりますように🎉";
      const overlay = document.getElementById("main-message-text");
      typeWriterEffect(overlay, mainText, 160);
    }
  }, 5000);
});

// Confetti effect
function createConfettiPiece() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
  confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
  document.body.appendChild(confetti);

  confetti.addEventListener('animationend', () => {
    confetti.remove();
  });
}
setInterval(createConfettiPiece, 200);

// --- Mail icons show/hide ---
window.addEventListener('scroll', () => {
  const wrapper = document.getElementById('mail-icons-wrapper');
  if (window.scrollY > 100) {
    wrapper.classList.add('show');
  } else {
    wrapper.classList.remove('show');
  }
});

// --- Mail icon 1 ---
const mailIcon = document.getElementById('mail-icon');
const overlay = document.getElementById('message-card-overlay');
const closeBtn = document.getElementById('close-message-card');

mailIcon.addEventListener('click', () => {
  mailIcon.classList.add('open');
  setTimeout(() => {
    overlay.style.display = 'flex';
  }, 700);
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  mailIcon.classList.remove('open');
});
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
    mailIcon.classList.remove('open');
  }
});

// --- Mail icon 2 ---
const mailIcon2 = document.getElementById('mail-icon2');
const overlay2 = document.getElementById('message-card2-overlay');
const closeBtn2 = document.getElementById('close-message-card2');

mailIcon2.addEventListener('click', () => {
  mailIcon2.classList.add('open');
  setTimeout(() => {
    overlay2.style.display = 'flex';
  }, 700);
});

closeBtn2.addEventListener('click', () => {
  overlay2.style.display = 'none';
  mailIcon2.classList.remove('open');
});
overlay2.addEventListener('click', (e) => {
  if (e.target === overlay2) {
    overlay2.style.display = 'none';
    mailIcon2.classList.remove('open');
  }
});

// 星空を生成
function createStars(num) {
  const starBg = document.querySelector('.star-bg');
  for (let i = 0; i < num; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2 + 1; // 1px〜3px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${1.5 + Math.random()}s`;
    starBg.appendChild(star);
  }
}