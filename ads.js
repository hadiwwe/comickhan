function watchAdForReward() {
  showFakeAdStory(() => {
    rewardUser(20);
  });
}

function rewardUser(points) {
  let current = window.getScore() || 0;
  const next = current + points;
  window.setScore(next);

  if (typeof window.updateScoreUI === "function") {
    window.updateScoreUI();
  }
}

function showFakeAdStory(onFinish) {

  // ۵ تصویر 
  const ads = [
    {
      img: "https://app.puzzley.net/uploads/user/rWvb/%D8%AC%D8%AF%DB%8C%D8%AF/%D8%AA%D8%B3%D8%AA/d9b82b15b2df59e6d2c6bfc50ba93d4agif.gif?_t=1710686295",
      link: "https://freefiremax.ir"
    },
    {
      img: "https://app.puzzley.net/uploads/user/rWvb/app118232/test/1000161175_oxNvzOcv2N.jpeg",
      link: "https://youtu.be/IyK9twVw9N8"
    },
    {
      img: "https://app.puzzley.net/uploads/user/rWvb/app118232/test/1000160526_e0QD1Yjl29.jpeg",
      link: "https://youtu.be/phaS6r8TPXI"
    },
    {
      img: "https://app.puzzley.net/uploads/user/rWvb/app118232/test/Hello_i_want_202512232040_Ozrtxvsb2k.jpeg",
      link: "https://youtu.be/BvcduFcbYTY"
    },
    {
      img: "https://app.puzzley.net/uploads/user/rWvb/%D8%AC%D8%AF%DB%8C%D8%AF/4cd4d-16656490643960-1920_compress62.jpg",
      link: "https://freefiremax.ir"
    }
  ];

  // انتخاب تصادفی
  const randomAd = ads[Math.floor(Math.random() * ads.length)];

  // لایه استوری
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
  img.src = randomAd.img;
  img.style.maxWidth = "90%";
  img.style.maxHeight = "75%";
  img.style.borderRadius = "14px";
  img.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)";
  img.style.cursor = "pointer";
  img.style.animation = "zoomIn 0.5s ease";

  img.onclick = () => {
    window.open(randomAd.link, "_blank");
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

  // دکمه رد کردن (سمت راست)
  const skipBtn = document.createElement("div");
  skipBtn.innerText = "رد کردن";
  skipBtn.style.position = "absolute";
  skipBtn.style.top = "20px";
  skipBtn.style.right = "20px";   // ← اینجا تغییر کرد
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