/* Mahesh & Muttu — wedding reception invitation
   Everything you may want to change is in CONFIG below. */
const CONFIG = {
  muhurthamIST: { y: 2026, m: 12, d: 6, h: 11, min: 2 },   // Sunday, 06 December 2026, 11:02 AM IST
  calendarHours: 2,
  venue: "KEB Function Hall, M.Hosalli, Yadgiri, Karnataka 585202",
  mapLink: "https://maps.app.goo.gl/XNUv31upHitVHLnG6?g_st=aw",
  // Put an mp3 here to use your own song. If the file is missing, a gentle veena-and-tanpura tune plays instead.
  musicFile: "assets/music/wedding-music.mp3",
  // Also tried, in order, so a slightly different name or format still works:
  musicFallbacks: ["assets/music/wedding-music.mp3.mp3", "assets/music/wedding-music.m4a", "assets/music/wedding-music.wav", "assets/music/wedding-music.ogg", "assets/music/wedding-music.MP3", "assets/music/music.mp3", "assets/music/song.mp3"],
  // After you publish the site, paste its address here so WhatsApp shares include the link.
  siteLink: "https://maheshmuttu.space"
};
const root = document.documentElement;
root.classList.add("js");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = id => document.getElementById(id);

const T = {
  en: {
    cardSign:"With love and warm regards, from both families", dateCaps:"06 December 2026", thankYou:"Thank You", toTop:"Back to top",
    mantraEyebrow:"A Sacred Blessing", mantraText:"With this sacred thread, so dear to my life, I tie the bond of marriage. May you live a hundred blessed autumns.",
    shubha:"Wedding Reception", scroll:"Scroll", weddingEyebrow:"The Celebration", weddingHead:"Our Reception Day", dateDay:"Sunday", dateFull:"06 December 2026", timeNote:"Indian Standard Time",
    sealHint:"Tap to open the invitation", stackHint:"Tap or swipe the photo", prevPhoto:"Previous photo", nextPhoto:"Next photo", portraitEyebrow:"The Couple", mapNote:"Illustration, not to scale · tap the map to open Google Maps",
    coverPre:"The wedding reception of", openInvite:"Open Invitation", openQuiet:"Open without music", music:"Music",
    groom:"Mahesh", bride:"Muttu",
    blessing:"With the blessings of our beloved family and elders", inviteLine:"We joyfully invite you to the wedding reception of",
    dateLabel:"Date", muhurthamLabel:"Reception Time", venueLabel:"Venue", dateLong:"Sunday, 06 December 2026", timeFull:"11:02 AM",
    countHead:"Counting down to the Reception", days:"Days", hours:"Hours", minutes:"Minutes", seconds:"Seconds",
    married:"Thank you for celebrating with us",
    introEyebrow:"A Beautiful Beginning", introHead:"Two hearts. One journey.",
    introText:"With the blessings of our beloved family and elders, we joyfully invite you to the wedding reception of Mahesh & Muttu. Your presence and blessings will make this special day even more meaningful.",
    venueEyebrow:"The Venue", scanLoc:"Scan for location", openLocation:"Open Location", addCal:"Add to Google Calendar", addIcs:"Apple / Outlook calendar",
    storyEyebrow:"Our Story", momentsHead:"Our Favourite Moments",
    blessHead:"Your Presence Means Everything",
    blessText:"We warmly invite you to celebrate this beautiful occasion with us and bless Mahesh & Muttu as they begin their new journey together.",
    share:"Share on WhatsApp", gratitude:"With Love & Gratitude", langSwitch:"ಕನ್ನಡ", langCode:"kn"
  },
  kn: {
    cardSign:"ಪ್ರೀತಿ ಮತ್ತು ಆತ್ಮೀಯ ವಂದನೆಗಳೊಂದಿಗೆ, ಎರಡೂ ಕುಟುಂಬಗಳಿಂದ", dateCaps:"06 ಡಿಸೆಂಬರ್ 2026", thankYou:"ಧನ್ಯವಾದಗಳು", toTop:"ಮೇಲಕ್ಕೆ",
    mantraEyebrow:"ಮಂಗಳ ಆಶೀರ್ವಾದ", mantraText:"ನನ್ನ ಜೀವನಕ್ಕೆ ಆಧಾರವಾದ ಈ ಮಂಗಳ ಸೂತ್ರದಿಂದ ನಿನ್ನನ್ನು ಬಂಧಿಸುತ್ತೇನೆ. ನೀನು ನೂರು ವರ್ಷ ಸುಖವಾಗಿ ಬಾಳು.",
    shubha:"ಆರತಕ್ಷತೆ", scroll:"ಕೆಳಗೆ ಸರಿಸಿ", weddingEyebrow:"ಶುಭ ದಿನ", weddingHead:"ಆರತಕ್ಷತೆ ಸಮಾರಂಭ", dateDay:"ಭಾನುವಾರ", dateFull:"06 ಡಿಸೆಂಬರ್ 2026", timeNote:"ಭಾರತೀಯ ಕಾಲಮಾನ",
    sealHint:"ಆಹ್ವಾನ ತೆರೆಯಲು ಸ್ಪರ್ಶಿಸಿ", stackHint:"ಫೋಟೋವನ್ನು ಸ್ಪರ್ಶಿಸಿ ಅಥವಾ ಸರಿಸಿ", prevPhoto:"ಹಿಂದಿನ ಫೋಟೋ", nextPhoto:"ಮುಂದಿನ ಫೋಟೋ", portraitEyebrow:"ವಧೂವರರು", mapNote:"ಚಿತ್ರಣ ಮಾತ್ರ · ಗೂಗಲ್ ನಕ್ಷೆ ತೆರೆಯಲು ನಕ್ಷೆಯನ್ನು ಸ್ಪರ್ಶಿಸಿ",
    coverPre:"ಆರತಕ್ಷತೆ", openInvite:"ಆಹ್ವಾನ ತೆರೆಯಿರಿ", openQuiet:"ಸಂಗೀತವಿಲ್ಲದೆ ತೆರೆಯಿರಿ", music:"ಸಂಗೀತ",
    groom:"ಮಹೇಶ್", bride:"ಮುತ್ತು",
    blessing:"ನಮ್ಮ ಪ್ರೀತಿಯ ಕುಟುಂಬ ಮತ್ತು ಹಿರಿಯರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ", inviteLine:"ಇವರ ಆರತಕ್ಷತೆ ಸಮಾರಂಭಕ್ಕೆ ತಮ್ಮನ್ನು ಸಂತೋಷದಿಂದ ಆಹ್ವಾನಿಸುತ್ತೇವೆ",
    dateLabel:"ದಿನಾಂಕ", muhurthamLabel:"ಆರತಕ್ಷತೆ ಸಮಯ", venueLabel:"ಸ್ಥಳ", dateLong:"ಭಾನುವಾರ, 06 ಡಿಸೆಂಬರ್ 2026", timeFull:"ಬೆಳಿಗ್ಗೆ 11:02",
    countHead:"ಆರತಕ್ಷತೆಗೆ ಇನ್ನು", days:"ದಿನಗಳು", hours:"ಗಂಟೆಗಳು", minutes:"ನಿಮಿಷಗಳು", seconds:"ಸೆಕೆಂಡುಗಳು",
    married:"ನಮ್ಮೊಂದಿಗೆ ಸಂಭ್ರಮಿಸಿದ್ದಕ್ಕೆ ಧನ್ಯವಾದಗಳು",
    introEyebrow:"ಸುಂದರ ಆರಂಭ", introHead:"ಎರಡು ಹೃದಯಗಳು. ಒಂದೇ ಪಯಣ.",
    introText:"ನಮ್ಮ ಪ್ರೀತಿಯ ಕುಟುಂಬ ಮತ್ತು ಹಿರಿಯರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ, ಮಹೇಶ್ ಮತ್ತು ಮುತ್ತು ಅವರ ಆರತಕ್ಷತೆ ಸಮಾರಂಭದಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳಲು ತಮ್ಮನ್ನು ಸಂತೋಷದಿಂದ ಆಹ್ವಾನಿಸುತ್ತೇವೆ. ತಮ್ಮ ಉಪಸ್ಥಿತಿ ಮತ್ತು ಆಶೀರ್ವಾದ ಈ ವಿಶೇಷ ದಿನವನ್ನು ಇನ್ನಷ್ಟು ಅರ್ಥಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ.",
    venueEyebrow:"ಸಮಾರಂಭ ಸ್ಥಳ", scanLoc:"ಸ್ಥಳಕ್ಕಾಗಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ", openLocation:"ಸ್ಥಳ ತೆರೆಯಿರಿ", addCal:"ಗೂಗಲ್ ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಿ", addIcs:"ಆಪಲ್ / ಔಟ್‌ಲುಕ್ ಕ್ಯಾಲೆಂಡರ್",
    storyEyebrow:"ನಮ್ಮ ಕಥೆ", momentsHead:"ನಮ್ಮ ಮೆಚ್ಚಿನ ಕ್ಷಣಗಳು",
    blessHead:"ತಮ್ಮ ಉಪಸ್ಥಿತಿಯೇ ನಮಗೆ ಎಲ್ಲವೂ",
    blessText:"ಈ ಸುಂದರ ಸಂದರ್ಭವನ್ನು ನಮ್ಮೊಂದಿಗೆ ಆಚರಿಸಿ, ಹೊಸ ಪಯಣ ಆರಂಭಿಸುತ್ತಿರುವ ಮಹೇಶ್ ಮತ್ತು ಮುತ್ತು ಅವರನ್ನು ಆಶೀರ್ವದಿಸಬೇಕೆಂದು ಆತ್ಮೀಯವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇವೆ.",
    share:"ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ", gratitude:"ಪ್ರೀತಿ ಮತ್ತು ಕೃತಜ್ಞತೆಯೊಂದಿಗೆ", langSwitch:"English", langCode:"en"
  }
};
let lang = "en";
try { if (localStorage.getItem("mm-lang") === "kn") lang = "kn"; } catch (e) {}
function shareText() {
  const en = `Wedding Reception Invitation 🌸\nMahesh & Muttu\n📅 Sunday, 06 December 2026\n🕚 11:02 AM\n📍 ${CONFIG.venue}\nMap: ${CONFIG.mapLink}`;
  const kn = `ಆರತಕ್ಷತೆ ಆಹ್ವಾನ 🌸\nಮಹೇಶ್ ಮತ್ತು ಮುತ್ತು\n📅 ಭಾನುವಾರ, 06 ಡಿಸೆಂಬರ್ 2026\n🕚 ಬೆಳಿಗ್ಗೆ 11:02\n📍 ${CONFIG.venue}\nನಕ್ಷೆ: ${CONFIG.mapLink}`;
  return (lang === "kn" ? kn : en) + (CONFIG.siteLink ? `\n\n${CONFIG.siteLink}` : "");
}
function applyLanguage() {
  const t = T[lang];
  root.lang = lang;
  document.body.classList.toggle("kn", lang === "kn");
  document.querySelectorAll("[data-i18n]").forEach(el => { const v = t[el.dataset.i18n]; if (v !== undefined) el.textContent = v; });
  document.querySelectorAll("[data-i18n-label]").forEach(el => { const v = t[el.dataset.i18nLabel]; if (v !== undefined) el.setAttribute("aria-label", v); });
  const lb = $("langBtn"); lb.textContent = t.langSwitch; lb.lang = t.langCode;
  lb.setAttribute("aria-label", lang === "kn" ? "Switch to English" : "ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ");
  $("shareBtn").href = "https://wa.me/?text=" + encodeURIComponent(shareText());
}
$("langBtn").addEventListener("click", () => {
  lang = lang === "en" ? "kn" : "en";
  try { localStorage.setItem("mm-lang", lang); } catch (e) {}
  applyLanguage();
});
applyLanguage();

/* Reveal on scroll */
(function () {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || reduceMotion) { items.forEach(i => i.classList.add("in")); return; }
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .15 });
  items.forEach(i => io.observe(i));
})();

/* Calendar + countdown */
const M = CONFIG.muhurthamIST;
const startUTC = Date.UTC(M.y, M.m - 1, M.d, M.h, M.min) - 330 * 60000;
const endUTC = startUTC + CONFIG.calendarHours * 3600000;
(function () {
  const iso = ms => new Date(ms).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const q = new URLSearchParams({ action: "TEMPLATE", text: "Wedding Reception of Mahesh & Muttu", dates: `${iso(startUTC)}/${iso(endUTC)}`,
    details: `Reception 11:02 AM. Map: ${CONFIG.mapLink}` + (CONFIG.siteLink ? `\n${CONFIG.siteLink}` : ""), location: CONFIG.venue, ctz: "Asia/Kolkata" });
  $("calBtn").href = "https://calendar.google.com/calendar/render?" + q.toString();
})();
/* Flip-card digits: the old number folds down to reveal the new one */
function setNum(id, v) {
  const el = $(id); v = String(v);
  if (el.dataset.v === v) return;
  const old = el.dataset.v; el.dataset.v = v;
  const top = el.querySelector(".fh-top b"), bot = el.querySelector(".fh-bot b");
  if (reduceMotion || old === undefined || document.hidden) { top.textContent = v; bot.textContent = v; return; }
  el.querySelectorAll(".flap").forEach(f => f.remove());
  const ft = document.createElement("div"); ft.className = "fh fh-top flap flap-top"; ft.innerHTML = `<b>${old}</b>`;
  const fb = document.createElement("div"); fb.className = "fh fh-bot flap flap-bot"; fb.innerHTML = `<b>${v}</b>`;
  top.textContent = v;
  el.append(ft, fb);
  setTimeout(() => { bot.textContent = v; ft.remove(); fb.remove(); }, 640);
}
function tick() {
  const diff = startUTC - Date.now();
  if (diff <= 0) { $("count").hidden = true; $("countDone").hidden = false; return false; }
  const s = Math.floor(diff / 1000), pad = n => String(n).padStart(2, "0");
  setNum("cd-d", Math.floor(s / 86400)); setNum("cd-h", pad(Math.floor(s % 86400 / 3600)));
  setNum("cd-m", pad(Math.floor(s % 3600 / 60))); setNum("cd-s", pad(s % 60));
  return true;
}
if (tick()) { const t = setInterval(() => { if (!tick()) clearInterval(t); }, 1000); }

/* Location QR */
function drawQR() {
  const box = $("qr");
  if (!window.QRCode) { box.closest(".qr").hidden = true; return; }
  new QRCode(box, { text: CONFIG.mapLink, width: 220, height: 220, colorDark: "#2A0710", colorLight: "#FBF2DF", correctLevel: QRCode.CorrectLevel.M });
}
if (window.QRCode) drawQR(); else window.addEventListener("load", drawQR, { once: true });

/* Photos: shown when the file exists (any common format: jpg, jpeg, png, webp).
   The portrait falls back to couple-1 when there is no portrait file.
   Photo-stack cards with no photo are removed, so the stack shows exactly the photos that exist. */
(function () {
  const exts = ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG", "WEBP"];
  function load(img) {
    return new Promise(done => {
      const bases = [img.dataset.src, img.dataset.fallback].filter(Boolean).map(b => b.replace(/\.[a-z0-9]+$/i, ""));
      (function tryNext(k) {
        if (k >= bases.length * exts.length) return done(false);
        const probe = new Image();
        probe.onload = () => { img.src = probe.src; img.classList.add("loaded"); done(true); };
        probe.onerror = () => tryNext(k + 1);
        probe.src = `${bases[Math.floor(k / exts.length)]}.${exts[k % exts.length]}`;
      })(0);
    });
  }
  const imgs = [...document.querySelectorAll("img.photo")];
  const results = imgs.map(load);
  const stackImgs = imgs.filter(i => i.closest(".pcard"));
  Promise.all(stackImgs.map(i => results[imgs.indexOf(i)])).then(ok => {
    const sec = document.querySelector(".stack-sec"); if (!sec) return;
    const found = ok.filter(Boolean).length;
    stackImgs.forEach((img, i) => { if (found ? !ok[i] : i >= 5) img.closest(".pcard").remove(); });   // no photos yet: keep 5 placeholders
    const cards = [...sec.querySelectorAll(".pcard")];
    cards.forEach((c, i) => { c.style.setProperty("--i", i); c.querySelector("figcaption").textContent = `${String(i + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`; });
    sec.style.setProperty("--n", cards.length);
    window.dispatchEvent(new Event("resize"));
    if (typeof PhotoStack !== "undefined" && PhotoStack.refresh) PhotoStack.refresh();
  });
})();

/* Gold dust on the cover and hero */
document.querySelectorAll("canvas.dust").forEach(c => {
  const ctx = c.getContext("2d"), dpr = Math.min(devicePixelRatio || 1, 2);
  let w, h, parts = [], on = false, raf;
  function size() { w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
  function spawn(i) { return { x: Math.random() * w, y: i ? Math.random() * h : h + 6, r: .4 + Math.random() * 1.5, vy: -(.08 + Math.random() * .25), vx: (Math.random() - .5) * .12, t: Math.random() * 6.3, star: Math.random() < .14 }; }
  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.y += p.vy; p.x += p.vx; p.t += .03; if (p.y < -8) Object.assign(p, spawn(false));
      ctx.globalAlpha = .15 + .65 * (.5 + .5 * Math.sin(p.t)); ctx.fillStyle = "#F6E2AE";
      if (p.star) { const s = p.r * 3.4; ctx.beginPath(); ctx.moveTo(p.x, p.y - s); ctx.lineTo(p.x + s * .2, p.y - s * .2); ctx.lineTo(p.x + s, p.y); ctx.lineTo(p.x + s * .2, p.y + s * .2); ctx.lineTo(p.x, p.y + s); ctx.lineTo(p.x - s * .2, p.y + s * .2); ctx.lineTo(p.x - s, p.y); ctx.lineTo(p.x - s * .2, p.y - s * .2); ctx.fill(); }
      else { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.3); ctx.fill(); }
    }
    if (on) raf = requestAnimationFrame(frame);
  }
  size(); parts = Array.from({ length: Math.round(Math.min(90, w * h / 9000)) }, () => spawn(true));
  addEventListener("resize", size);
  if (reduceMotion || !("IntersectionObserver" in window)) { frame(); return; }
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !on) { on = true; raf = requestAnimationFrame(frame); }
    else if (!e.isIntersecting && on) { on = false; cancelAnimationFrame(raf); }
  }).observe(c.parentElement);
});

/* Soft falling petals (rose, marigold, jasmine) on the cover, hero and thank-you screen */
document.querySelectorAll("canvas.petals").forEach(c => {
  const ctx = c.getContext("2d"), dpr = Math.min(devicePixelRatio || 1, 2);
  const cols = ["#C9576E", "#E08A9B", "#E39B3A", "#F2BE5C", "#FBF2DF"];
  let w, h, parts = [], on = false, raf;
  function size() { w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
  function spawn(i) { return { x: Math.random() * w, y: i ? Math.random() * h : -16, r: 4 + Math.random() * 5, vy: .28 + Math.random() * .45, vx: (Math.random() - .5) * .3, a: Math.random() * 6.3, va: (Math.random() - .5) * .016, sw: Math.random() * 6.3, c: cols[Math.floor(Math.random() * cols.length)] }; }
  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.y += p.vy; p.sw += .01; p.x += p.vx + Math.sin(p.sw) * .3; p.a += p.va;
      if (p.y > h + 16) Object.assign(p, spawn(false));
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.globalAlpha = .75; ctx.fillStyle = p.c;
      ctx.beginPath(); ctx.moveTo(0, -p.r); ctx.quadraticCurveTo(p.r * .9, 0, 0, p.r); ctx.quadraticCurveTo(-p.r * .9, 0, 0, -p.r); ctx.fill(); ctx.restore();
    }
    if (on) raf = requestAnimationFrame(frame);
  }
  size(); parts = Array.from({ length: Math.round(Math.min(22, w / 55)) }, () => spawn(true));
  addEventListener("resize", size);
  if (reduceMotion || !("IntersectionObserver" in window)) return;
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !on) { on = true; raf = requestAnimationFrame(frame); }
    else if (!e.isIntersecting && on) { on = false; cancelAnimationFrame(raf); }
  }).observe(c.parentElement);
});

/* Marigold, jasmine and rose garlands for the corners */
(function () {
  const W = 340;
  const q = (a, c, b, t) => (1 - t) * (1 - t) * a + 2 * (1 - t) * t * c + t * t * b;
  let seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  function marigold(x, y, r) {
    let o = `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)})">`;
    o += `<circle r="${r}" fill="#C8641A"/>`;
    for (let k = 0; k < 10; k++) { const a = k * 36 + rnd() * 10; o += `<circle cx="${(Math.cos(a * Math.PI / 180) * r * .62).toFixed(1)}" cy="${(Math.sin(a * Math.PI / 180) * r * .62).toFixed(1)}" r="${(r * .48).toFixed(1)}" fill="${k % 2 ? "#E8892B" : "#F09A2E"}"/>`; }
    o += `<circle r="${(r * .55).toFixed(1)}" fill="#F7B53E"/><circle r="${(r * .28).toFixed(1)}" fill="#FCD271"/>`;
    o += `<circle cx="${(-r * .3).toFixed(1)}" cy="${(-r * .35).toFixed(1)}" r="${(r * .18).toFixed(1)}" fill="#FFE7A8" opacity=".8"/></g>`;
    return o;
  }
  function jasmine(x, y, rot) {
    return `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rot.toFixed(0)})"><ellipse rx="2.6" ry="5.4" cx="-2.6" fill="#FFFBF0" stroke="#E6D6B4" stroke-width=".5"/><ellipse rx="2.6" ry="5.4" cx="2.6" fill="#FFFBF0" stroke="#E6D6B4" stroke-width=".5"/></g>`;
  }
  function rose(x, y, r) {
    return `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)})"><circle r="${r}" fill="#8E1E35"/><circle r="${(r * .72).toFixed(1)}" fill="#B3304A"/><path d="M${-r * .45} 0a${r * .45} ${r * .45} 0 1 1 ${r * .9} 0" fill="none" stroke="#7A1529" stroke-width="1.2"/><circle r="${(r * .25).toFixed(1)}" fill="#D0566C"/></g>`;
  }
  // strand along a quadratic curve: jasmine underneath, marigolds on top, a rose every few flowers
  function strand(p0, c, p1, steps, r) {
    let back = "", front = "";
    for (let i = 0; i <= steps; i++) {
      const t = i / steps, x = q(p0[0], c[0], p1[0], t), y = q(p0[1], c[1], p1[1], t);
      back += jasmine(x + (rnd() - .5) * 4, y + r * .9, rnd() * 360) + jasmine(x + (rnd() - .5) * 4, y - r * .9, rnd() * 360);
      front += (i % 6 === 3) ? rose(x, y, r * .95) : marigold(x, y, r * (.9 + rnd() * .2));
    }
    return back + front;
  }
  function hanging(x, y0, len, bell) {
    let o = `<path d="M${x} ${y0}v${len}" stroke="#D4A34F" stroke-width="1.2"/>`;
    for (let k = 0; k < Math.floor(len / 11); k++) o += k % 2 ? jasmine(x, y0 + 8 + k * 11, 0) : marigold(x, y0 + 8 + k * 11, 5.5);
    if (bell) {
      const by = y0 + len;
      o += `<path d="M${x} ${by}c-7 0-10 7-10 15h20c0-8-3-15-10-15z" fill="url(#foil)" stroke="#8A5D1E" stroke-width=".6"/><circle cx="${x}" cy="${by + 18}" r="2.6" fill="#E7C878"/>`;
    }
    return o;
  }
  let svg = "";
  svg += strand([-6, 12], [150, 108], [W - 20, 8], 30, 10);       // main swag across the top
  svg += strand([-6, 4], [-2, 90], [14, 180], 16, 9);              // drape down the side
  svg += hanging(W - 20, 14, 52, true);                             // tassel with a small brass bell at the inner end
  svg += hanging(156, 66, 30, false);                               // short drop at the lowest point of the swag
  svg += marigold(W - 20, 10, 12) + rose(-2, 8, 12);
  document.querySelectorAll("svg.garland").forEach(el => { el.innerHTML = svg; });
})();

/* Photo stack: tap the top photo (or swipe it, or use the arrows) to send it away and show the next one */
const PhotoStack = (function () {
  const sec = document.querySelector(".stack-sec"); if (!sec) return {};
  const stack = sec.querySelector(".stack");
  const prev = $("stackPrev"), next = $("stackNext"), count = $("stackCount");
  const tilt = [-4, 3, -2, 4, -3, 2, -3];
  let cur = 0, gone = [];                                   // gone[i] = -1 (left) or 1 (right) once card i is sent away
  const cards = () => [...sec.querySelectorAll(".pcard")];
  function layout(dragX = 0) {
    const cs = cards(), n = cs.length;
    cs.forEach((c, i) => {
      const depth = i - cur;
      c.classList.toggle("top", depth === 0);
      c.setAttribute("aria-hidden", depth === 0 ? "false" : "true");
      if (depth < 0) {                                       // already sent away
        const dir = gone[i] || -1;
        c.style.transform = `translate(${dir * 135}%, -4%) rotate(${dir * 24}deg)`;
        c.style.opacity = "0"; c.style.zIndex = String(200 + i); return;
      }
      const d = Math.min(depth, 3);
      const x = depth === 0 ? dragX : 0;
      const rot = depth === 0 ? dragX / 18 : tilt[i % tilt.length] * .8;
      c.style.transform = `translate(${x}px, ${d * 12}px) rotate(${rot.toFixed(2)}deg) scale(${(1 - d * .045).toFixed(3)})`;
      c.style.opacity = depth > 3 ? "0" : "1";
      c.style.zIndex = String(100 - depth);
    });
    if (count) count.textContent = `${String(Math.min(cur + 1, n)).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
    if (prev) prev.disabled = cur === 0;
  }
  function go(step, dir) {
    const n = cards().length; if (!n) return;
    if (step > 0) {
      if (cur >= n - 1) { cur = 0; gone = []; }               // after the last photo, bring the pile back
      else { gone[cur] = dir || (cur % 2 ? 1 : -1); cur++; }
    } else if (cur > 0) { cur--; }
    stack.classList.remove("dragging"); layout();
  }
  // tap or swipe the top photo
  let startX = 0, startY = 0, dx = 0, dragging = false, moved = false, pid = null;
  stack.addEventListener("pointerdown", e => {
    if (!e.target.closest(".pcard.top")) return;
    dragging = true; moved = false; dx = 0; startX = e.clientX; startY = e.clientY; pid = e.pointerId;
  });
  stack.addEventListener("pointermove", e => {
    if (!dragging || e.pointerId !== pid) return;
    dx = e.clientX - startX;
    if (!moved && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(e.clientY - startY)) { moved = true; stack.setPointerCapture(pid); stack.classList.add("dragging"); }
    if (moved) { e.preventDefault(); layout(dx); }
  });
  function end(e) {
    if (!dragging || e.pointerId !== pid) return;
    dragging = false;
    if (!moved) { if (e.type === "pointerup") go(1); return; }
    const w = stack.clientWidth;
    if (Math.abs(dx) > w * .22) go(1, dx > 0 ? 1 : -1);
    else { stack.classList.remove("dragging"); layout(); }
  }
  stack.addEventListener("pointerup", end);
  stack.addEventListener("pointercancel", end);
  stack.addEventListener("keydown", e => {
    if (e.key === "ArrowRight" || e.key === "Enter" || e.key === " ") { e.preventDefault(); go(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
  });
  prev && prev.addEventListener("click", () => go(-1));
  next && next.addEventListener("click", () => go(1));
  addEventListener("resize", () => layout());
  layout();
  return { refresh() { cur = Math.min(cur, Math.max(0, cards().length - 1)); layout(); } };
})();

/* Scroll progress */
(function () {
  const bar = $("progressBar"); let t = false;
  function u() { t = false; const m = document.documentElement.scrollHeight - innerHeight; bar.style.transform = `scaleX(${m > 0 ? scrollY / m : 0})`; }
  addEventListener("scroll", () => { if (!t) { t = true; requestAnimationFrame(u); } }, { passive: true });
})();

/* Tilt cards */
if (matchMedia("(hover: hover) and (pointer: fine)").matches && !reduceMotion) {
  document.querySelectorAll(".tilt").forEach(w => {
    const card = w.querySelector(".info");
    w.addEventListener("mousemove", e => {
      const r = w.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      card.style.transition = "transform .15s ease-out";
      card.style.transform = `rotateY(${(x - .5) * 14}deg) rotateX(${(.5 - y) * 12}deg)`;
      card.style.setProperty("--gx", x * 100 + "%"); card.style.setProperty("--gy", y * 100 + "%");
    });
    w.addEventListener("mouseleave", () => { card.style.transition = ""; card.style.transform = ""; });
  });
}

/* Fine-line mandalas */
document.querySelectorAll("svg.mandala").forEach(svg => {
  const NS = "http://www.w3.org/2000/svg";
  svg.setAttribute("viewBox", "-200 -200 400 400");
  const g = document.createElementNS(NS, "g");
  g.setAttribute("fill", "none"); g.setAttribute("stroke", "currentColor"); g.setAttribute("stroke-width", ".8");
  let out = "";
  [40, 78, 120, 168, 196].forEach((r, i) => { out += `<circle r="${r}" ${i % 2 ? 'stroke-dasharray="2 5"' : ""}/>`; });
  const rings = [{ r: 40, n: 8, l: 34, w: 13 }, { r: 78, n: 16, l: 38, w: 12 }, { r: 120, n: 24, l: 44, w: 12 }, { r: 168, n: 32, l: 26, w: 8 }];
  rings.forEach(({ r, n, l, w }, i) => {
    for (let k = 0; k < n; k++) {
      const a = k * 360 / n + (i % 2 ? 180 / n : 0);
      out += `<path transform="rotate(${a.toFixed(2)})" d="M0 ${-r}C${w} ${-r - l * .35} ${w * .6} ${-r - l * .85} 0 ${-r - l}C${-w * .6} ${-r - l * .85} ${-w} ${-r - l * .35} 0 ${-r}Z"/>`;
      if (i === 2) out += `<circle transform="rotate(${(a + 180 / n).toFixed(2)})" cy="${-r - 8}" r="2.2" fill="currentColor"/>`;
    }
  });
  for (let k = 0; k < 64; k++) out += `<circle transform="rotate(${k * 360 / 64})" cy="-196" r="1.6" fill="currentColor"/>`;
  out += `<path d="M0-26l8 26-8 26-8-26z"/><circle r="6" fill="currentColor"/>`;
  g.innerHTML = out; svg.appendChild(g);
});

/* ---------------- Music ---------------- */
const Music = (() => {
  let mode = null, audio = null, ctx = null, master = null, timer = null, step = 0, playing = false;
  const sa = 146.83, r = { S: 1, R: 9 / 8, G: 5 / 4, P: 3 / 2, D: 5 / 3, S2: 2, R2: 9 / 4 };   // Raga Mohanam
  const tune = ["G", "P", "D", "S2", null, "D", "P", "G", "R", null, "S", "R", "G", "P", "G", null,
                "P", "D", "S2", "R2", "S2", null, "D", "P", "G", "P", "D", "P", "G", "R", "S", null];
  function pluck(f, t, v = .18, d = 2.2) {
    const o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain(), g2 = ctx.createGain(), lp = ctx.createBiquadFilter();
    o.type = "triangle"; o.frequency.value = f * 2; o2.type = "sine"; o2.frequency.value = f * 4.008; g2.gain.value = .22;
    lp.type = "lowpass"; lp.frequency.setValueAtTime(2800, t); lp.frequency.exponentialRampToValueAtTime(500, t + d);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + .012); g.gain.exponentialRampToValueAtTime(.0006, t + d);
    o.connect(lp); o2.connect(g2).connect(lp); lp.connect(g).connect(master); o.start(t); o2.start(t); o.stop(t + d); o2.stop(t + d);
  }
  function startSynth() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    if (!ctx) {
      ctx = new AC(); master = ctx.createGain(); master.gain.value = 0;
      const delay = ctx.createDelay(), fb = ctx.createGain(); delay.delayTime.value = .34; fb.gain.value = .28;
      master.connect(ctx.destination); master.connect(delay); delay.connect(fb).connect(delay); delay.connect(ctx.destination);
      [sa, sa * 1.5, sa * 2, sa / 2].forEach((f, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain(), lp = ctx.createBiquadFilter(), l = ctx.createOscillator(), lg = ctx.createGain();
        o.type = "sawtooth"; o.frequency.value = f; lp.type = "lowpass"; lp.frequency.value = 800; g.gain.value = .01;
        l.frequency.value = .12 + i * .04; lg.gain.value = .005; l.connect(lg).connect(g.gain); o.connect(lp).connect(g).connect(master); o.start(); l.start();
      });
    }
    ctx.resume(); master.gain.cancelScheduledValues(ctx.currentTime); master.gain.setTargetAtTime(.85, ctx.currentTime, 1.2);
    timer = setInterval(() => { const t = ctx.currentTime + .05, n = tune[step % tune.length]; if (n) pluck(sa * r[n], t); if (step % 8 === 0) pluck(sa, t, .06, 3); step++; }, 600);
    return true;
  }
  function stopSynth() { clearInterval(timer); if (ctx) master.gain.setTargetAtTime(0, ctx.currentTime, .4); }
  async function play() {
    if (mode === "file" && audio) {
      try { await audio.play(); return true; } catch (e) {}
    }
    if (mode !== "synth") {
      const list = [CONFIG.musicFile, ...(CONFIG.musicFallbacks || [])].filter(Boolean);
      for (const src of list) {
        try {
          const a = new Audio(src); a.loop = true; a.volume = 0; a.preload = "auto";
          await a.play();
          audio = a; mode = "file";
          let v = 0; const f = setInterval(() => { v = Math.min(.7, v + .05); audio.volume = v; if (v >= .7) clearInterval(f); }, 120);
          return true;
        } catch (e) { /* try the next name */ }
      }
    }
    mode = "synth"; return startSynth();
  }
  function pause() { if (mode === "file" && audio) audio.pause(); else stopSynth(); }
  return { get on() { return playing; }, async toggle() { if (playing) { pause(); playing = false; } else { playing = await play(); } return playing; } };
})();
function updateMusicLabel() {
  const b = $("musicBtn"), on = Music.on;
  b.classList.toggle("playing", on); b.setAttribute("aria-pressed", String(on));
}
$("musicBtn").addEventListener("click", async () => { await Music.toggle(); updateMusicLabel(); });

/* Open Invitation: the cover's two halves part and the music starts */
(function () {
  const cover = $("cover"); let opened = false;
  async function open(withMusic) {
    if (opened) return; opened = true;
    if (withMusic) { await Music.toggle(); updateMusicLabel(); }
    cover.classList.add("breaking");                       // the seal lifts away first
    const wait = reduceMotion ? 0 : 700;
    setTimeout(() => { cover.classList.add("open"); window.scrollTo(0, 0); }, wait);
    setTimeout(() => root.classList.remove("gated"), wait + (reduceMotion ? 0 : 900));
    setTimeout(() => { cover.hidden = true; }, wait + (reduceMotion ? 0 : 2000));
  }
  $("openInvite").addEventListener("click", () => open(true));
  $("openCta").addEventListener("click", () => open(true));
  // a tap anywhere on the cover opens it too (except "Open without music")
  cover.addEventListener("click", e => { if (!e.target.closest("#openQuiet, #openInvite, #openCta")) open(true); });
  $("openQuiet").addEventListener("click", () => open(false));
})();
