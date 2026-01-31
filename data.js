// data.js - کامل با کمیک‌های جدید

const comics = [
  {
    id: 1,
    title: "کلی و دوستان",
    cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/CH1.jpeg?_t=1767784361",
    teaser: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/CH1.jpeg?_t=1767784361",
    summary: "کلی، دونده سریع و پرجنب‌وجوش دبیرستانی، همراه دوستان نزدیکش کارولین، میشا و مکاسیم، در ماجراهای هیجان‌انگیز و چالش‌برانگیز قرار می‌گیرند. کلی همیشه با سرعت و اراده‌اش جلو می‌رود و هیچ مانعی نمی‌تواند او را متوقف کند!",
    chaptersCount: 10,
    chapters: [
      { id: 1, title: "آغاز", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/CH1.jpeg?_t=1767784361", pageCount: 11, pages: Array.from({length: 11}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/CH1_${String(i+1).padStart(3,'0')}.jpeg?_t=1767784477`) },
      { id: 2, title: "کلی تازه وارد", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%AF%D9%88%D9%85/Ch2.jpeg?_t=1767811692", pageCount: 11, pages: Array.from({length: 11}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%AF%D9%88%D9%85/Ch2_${String(i+1).padStart(3,'0')}.jpeg?_t=1767811724`) },
      { id: 3, title: "دیدار دوستانه", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B3%D9%88%D9%85/CH3.jpeg?_t=1767875324", pageCount: 10, pages: Array.from({length: 10}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B3%D9%88%D9%85/CH3_${String(i+1).padStart(3,'0')}.jpeg?_t=1767875335`) },
      { id: 4, title: "گروه تشویق کننده", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%DA%86%D9%87%D8%A7%D8%B1%D9%85/CH4.jpeg?_t=1767955112", pageCount: 10, pages: Array.from({length: 10}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%DA%86%D9%87%D8%A7%D8%B1%D9%85/CH4_${String(i+1).padStart(3,'0')}.jpeg?_t=1767955125`) },
      { id: 5, title: "خوش گذرونی", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%BE%D9%86%D8%AC%D9%85/CH5.jpeg?_t=1768060336", pageCount: 11, pages: Array.from({length: 11}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%BE%D9%86%D8%AC%D9%85/CH5_${String(i+1).padStart(3,'0')}.jpeg?_t=1768060336`) },
      { id: 6, title: "از دور", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6.jpeg?_t=1769142455", pageCount: 12, pages: Array.from({length: 12}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6_${String(i+1).padStart(3,'0')}.jpeg?_t=1769142455`) },
      { id: 7, title: "ملکه مسابقات ماشینی", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%87%D9%81%D8%AA%D9%85/CH7.jpeg?_t=1769406286", pageCount: 11, pages: Array.from({length: 11}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%87%D9%81%D8%AA%D9%85/CH7_${String(i+1).padStart(3,'0')}.jpeg?_t=1769406286`) },
      { id: 8, title: "تفریح در سالن بازی", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%87%D8%B4%D8%AA%D9%85/CH8.jpeg?_t=1769419222", pageCount: 11, pages: Array.from({length: 11}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%87%D8%B4%D8%AA%D9%85/CH8_${String(i+1).padStart(3,'0')}.jpeg?_t=1769419222`) },
      { id: 9, title: "خط پایان ۱", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%86%D9%87%D9%85/CH9.jpeg?_t=1769448219", pageCount: 12, pages: Array.from({length: 12}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D9%86%D9%87%D9%85/CH9_${String(i+1).padStart(3,'0')}.jpeg?_t=1769448219`) },
      { id: 10, title: "خط پایان ۲", cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%AF%D9%87%D9%85/CH10.jpeg?_t=1769490433", pageCount: 10, pages: Array.from({length: 10}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%AF%D9%87%D9%85/CH10_${String(i+1).padStart(3,'0')}.jpeg?_t=1769490433`) }
    ]
  },

  // کمیک جدید: هایاتو
  {
    id: 2,
    title: "هایاتو",
    cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6.jpeg?_t=1769142455", // فصل اول = فصل ۶ کلی
    teaser: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6.jpeg?_t=1769142455",
    summary: "هایاتو، شمشیرزن مرموز و خونسرد، با گذشته‌ای تاریک و مهارت‌های بی‌نظیر شمشیرزنی، در جستجوی انتقام و حقیقت است. او با قدرت‌های آتشین و اراده آهنینش، در برابر دشمنان قدرتمند می‌ایستد و هیچ‌وقت تسلیم نمی‌شود.",
    chaptersCount: 3,
    chapters: [
      {
        id: 1,
        title: "از دور", // همان فصل ۶ کلی
        cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6.jpeg?_t=1769142455",
        pageCount: 12,
        pages: Array.from({length: 12}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%DA%A9%D9%84%DB%8C/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6_${String(i+1).padStart(3,'0')}.jpeg?_t=1769142455`)
      },
      {
        id: 2,
        title: "نمایش هایاتو",
        cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D9%87%D8%A7%DB%8C%D8%A7%D8%AA%D9%88/%D9%81%D8%B5%D9%84%20%D8%AF%D9%88%D9%85/CH11.jpeg?_t=1769505919",
        pageCount: 12,
        pages: Array.from({length: 12}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D9%87%D8%A7%DB%8C%D8%A7%D8%AA%D9%88/%D9%81%D8%B5%D9%84%20%D8%AF%D9%88%D9%85/CH11_${String(i+1).padStart(3,'0')}.jpeg?_t=1769505930`)
      },
      {
        id: 3,
        title: "برای خانواده",
        cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D9%87%D8%A7%DB%8C%D8%A7%D8%AA%D9%88/%D9%81%D8%B5%D9%84%20%D8%B3%D9%88%D9%85/CH12.jpeg?_t=1769535055",
        pageCount: 12,
        pages: Array.from({length: 12}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D9%87%D8%A7%DB%8C%D8%A7%D8%AA%D9%88/%D9%81%D8%B5%D9%84%20%D8%B3%D9%88%D9%85/CH12_${String(i+1).padStart(3,'0')}.jpeg?_t=1769535065`)
      }
    ]
  },

  // کمیک جدید: رافائل و لورا

{
  id: 3,
  title: "رافائل و لورا",
  cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%A7%D9%88%D9%84/CH1.jpeg?_t=1769594744",
  teaser: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%A7%D9%88%D9%84/CH1.jpeg?_t=1769594744",
  summary: "رافائل، تک‌تیرانداز خونسرد و دقیق، و لورا، دختر مرموز با قدرت‌های جادویی، در دنیایی پر از خطر و راز با هم آشنا می‌شوند. رابطه‌شان از یک همکاری ساده شروع می‌شود، اما به مرور به عشقی عمیق و پر از چالش تبدیل می‌گردد که هر دو را به مبارزه با گذشته و دشمنان مشترکشان می‌کشاند.",
  chaptersCount: 6,
  chapters: [
    {
      id: 1,
      title: "مخفی",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%A7%D9%88%D9%84/CH1.jpeg?_t=1769594744",
      pageCount: 14,
      pages: Array.from({length: 14}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%A7%D9%88%D9%84/CH1_${String(i+1).padStart(3,'0')}.jpeg?_t=1769594744`)
    },
    {
      id: 2,
      title: "نفوذی",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%AF%D9%88%D9%85/CH2.jpeg?_t=1769657868",
      pageCount: 12,
      pages: Array.from({length: 12}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%AF%D9%88%D9%85/CH2_${String(i+1).padStart(3,'0')}.jpeg?_t=1769657868`)
    },
    {
      id: 3,
      title: "شخصیت مرموز",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%B3%D9%88%D9%85/CH3.jpeg?_t=1769683122",
      pageCount: 11,
      pages: Array.from({length: 11}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%B3%D9%88%D9%85/CH3_${String(i+1).padStart(3,'0')}.jpeg?_t=1769683122`)
    },
    {
      id: 4,
      title: "یک شانس",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%DA%86%D9%87%D8%A7%D8%B1%D9%85/CH4.jpeg?_t=1769702450",
      pageCount: 14,
      pages: Array.from({length: 14}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%DA%86%D9%87%D8%A7%D8%B1%D9%85/CH4_${String(i+1).padStart(3,'0')}.jpeg?_t=1769702450`)
    },
    {
      id: 5,
      title: "شکار گوزن",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D9%BE%D9%86%D8%AC%D9%85/CH5.jpeg?_t=1769775597",
      pageCount: 14,
      pages: Array.from({length: 14}, (_, i) => `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D9%BE%D9%86%D8%AC%D9%85/CH5_${String(i+1).padStart(3,'0')}.jpeg?_t=1769775597`)
    },
    {
      id: 6,
      title: "رویارویی",
      cover: "https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6.jpeg?_t=1769781437",
      pageCount: 13,
      pages: Array.from({length: 13}, (_, i) => 
        `https://app.puzzley.net/uploads/user/rWvb/%DA%A9%D9%85%DB%8C%DA%A9/%D8%B1%D8%A7%D9%81%D8%A7%D8%A6%D9%84/%D9%81%D8%B5%D9%84%20%D8%B4%D8%B4%D9%85/CH6_${String(i+1).padStart(3,'0')}.jpeg?_t=1769781445`
      )
    }
  ]
},

  // placeholder برای بقیه
  { id: 4, title: "استفانی", chaptersCount: 4, cover: "https://via.placeholder.com/300x420?text=Stephanie", summary: "...", chapters: [] },
  { id: 5, title: "موکو", chaptersCount: 7, cover: "https://via.placeholder.com/300x420?text=Moco", summary: "...", chapters: [] },
  { id: 6, title: "موکو و استفانی", chaptersCount: 4, cover: "https://via.placeholder.com/300x420?text=Moco+Stephanie", summary: "...", chapters: [] }
];