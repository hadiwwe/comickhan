function watchAdForReward() {
  showFakeAdStory(() => {
    rewardUser(20);
  });
}

function rewardUser(points) {
  let current = 0;

  // گرفتن امتیاز فعلی
  if (typeof window.getScore === "function") {
    current = window.getScore() || 0;
  } else if (localStorage.getItem("comicScore")) {
    current = parseInt(localStorage.getItem("comicScore"), 10) || 0;
  }

  const next = current + points;

  // ذخیره امتیاز جدید
  if (typeof window.setScore === "function") {
    window.setScore(next);
  } else {
    localStorage.setItem("comicScore", String(next));
  }

  // آپدیت UI
  if (typeof window.updateScoreUI === "function") {
    window.updateScoreUI();
  }
}

function showFakeAdStory(onFinish) {
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.92)";
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "999999";
  overlay.style.animation = "fadeIn 0.4s ease";

  // تصویر
  const img = document.createElement("img");
  img.src = "https://app.puzzley.net/uploads/user/rWvb/کمیک/کلی/CH1_001.jpeg";
  img.style.maxWidth = "90%";
  img.style.maxHeight = "75%";
  img.style.borderRadius = "14px";
  img.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)";
  img.style.cursor = "pointer";
  img.style.animation = "zoomIn 0.5s ease";

  img.onclick = () => {
    window.open("https://freefiremax.ir", "_blank");
  };

  // نوار پیشرفت
  const barContainer = document.createElement("div");
  barContainer.style.width = "90%";
  barContainer.style.height = "6px";
  barContainer.style.background = "rgba(255,255,255,0.25)";
  barContainer.style.borderRadius = "4px";
  barContainer.style.marginTop = "20px";
  barContainer.style.overflow = "hidden";

  const bar = document.createElement("div");
  bar.style.width = "0%";
  bar.style.height = "100%";
  bar.style.background = "#ffcc00";
  bar.style.transition = "width 5s linear";

  barContainer.appendChild(bar);

  // دکمه رد کردن
  const skipBtn = document.createElement("div");
  skipBtn.innerText = "رد کردن";
  skipBtn.style.position = "absolute";
  skipBtn.style.top = "20px";
  skipBtn.style.left = "20px";
  skipBtn.style.padding = "8px 18px";
  skipBtn.style.background = "rgba(0,0,0,0.5)";
  skipBtn.style.color = "white";
  skipBtn.style.fontSize = "1.1rem";
  skipBtn.style.borderRadius = "20px";
  skipBtn.style.cursor = "pointer";
  skipBtn.style.backdropFilter = "blur(4px)";
  skipBtn.style.transition = "0.2s";

  skipBtn.onmouseenter = () => skipBtn.style.background = "rgba(255,255,255,0.25)";
  skipBtn.onmouseleave = () => skipBtn.style.background = "rgba(0,0,0,0.5)";

  skipBtn.onclick = () => {
    overlay.remove();
    if (onFinish) onFinish();
  };

  overlay.appendChild(skipBtn);
  overlay.appendChild(img);
  overlay.appendChild(barContainer);
  document.body.appendChild(overlay);

  // شروع انیمیشن
  setTimeout(() => {
    bar.style.width = "100%";
  }, 50);

  // پایان خودکار بعد از ۵ ثانیه
  setTimeout(() => {
    if (document.body.contains(overlay)) {
      overlay.remove();
      if (onFinish) onFinish();
    }
  }, 5000);

  // انیمیشن‌های CSS
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0 }
      to { opacity: 1 }
    }
    @keyframes zoomIn {
      from { transform: scale(0.85); opacity: 0 }
      to { transform: scale(1); opacity: 1 }
    }
  `;
  document.head.appendChild(style);
}