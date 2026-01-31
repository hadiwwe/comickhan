// ads.js
// فرض: adivery.global.js لود شده است

const APP_ID = "83fc9705-8bb6-45ab-90cc-d3f145a774a1";
const REWARDED_PLACEMENT = "60a72aa7-d023-457b-9232-fb2f1782face";

function initAdivery() {
  if (typeof Adivery !== 'undefined') {
    Adivery.configure(APP_ID);
  }
}

async function watchAdForReward() {
  if (typeof Adivery === 'undefined') {
    alert("خطا: کتابخانه Adivery لود نشده است.");
    return;
  }

  try {
    const ad = await Adivery.requestRewardedAd(REWARDED_PLACEMENT);
    const isRewarded = await ad.show();

    if (isRewarded === true) {
      let score = getScore();
      score += 2;
      setScore(score);
      alert("تبریک! ۲ امتیاز اضافه شد.");
      if (typeof updateScoreUI === 'function') updateScoreUI(); // اگر در صفحه اصلی هستی
    } else {
      alert("تبلیغ کامل دیده نشد.");
    }
  } catch (err) {
    console.error(err);
    alert("خطا در بارگذاری تبلیغ. بعداً امتحان کنید.");
  }
}