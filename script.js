/* Mahesh & Muttu — wedding invitation
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
  siteLink: ""
};
const root = document.documentElement;
root.classList.add("js");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = id => document.getElementById(id);

const T = {
  en: {
    cardSign:"With love and warm regards, from both families",
    mantraEyebrow:"The Sacred Vow", mantraText:"With this sacred thread, so dear to my life, I tie the bond of marriage. May you live a hundred blessed autumns.",
    shubha:"Shubha Vivaha", scroll:"Scroll", weddingEyebrow:"The Auspicious Day", weddingHead:"Our Wedding Day", dateDay:"Sunday", dateFull:"06 December 2026", timeNote:"Indian Standard Time",
    coverPre:"The wedding of", openInvite:"Open Invitation", openQuiet:"Open without music", music:"Music",
    groom:"Mahesh", bride:"Muttu",
    blessing:"With the blessings of our beloved family and elders", inviteLine:"We joyfully invite you to the wedding of",
    dateLabel:"Date", muhurthamLabel:"Muhurtham", venueLabel:"Venue", dateLong:"Sunday, 06 December 2026", timeFull:"11:02 AM",
    countHead:"Counting down to the Muhurtham", days:"Days", hours:"Hours", minutes:"Minutes", seconds:"Seconds",
    married:"Happily married",
    introEyebrow:"A Beautiful Beginning", introHead:"Two hearts. One journey.",
    introText:"With the blessings of our beloved family and elders, we joyfully invite you to be part of the wedding celebration of Mahesh & Muttu. Your presence and blessings will make this special day even more meaningful.",
    venueEyebrow:"The Venue", scanLoc:"Scan for location", openLocation:"Open Location", addCal:"Add to Google Calendar", addIcs:"Apple / Outlook calendar",
    storyEyebrow:"Our Story", momentsHead:"Our Favourite Moments",
    blessHead:"Your Presence Means Everything",
    blessText:"We warmly invite you to celebrate this beautiful occasion with us and bless Mahesh & Muttu as they begin their new journey together.",
    share:"Share on WhatsApp", gratitude:"With Love & Gratitude", langSwitch:"ಕನ್ನಡ", langCode:"kn"
  },
  kn: {
    cardSign:"ಪ್ರೀತಿ ಮತ್ತು ಆತ್ಮೀಯ ವಂದನೆಗಳೊಂದಿಗೆ, ಎರಡೂ ಕುಟುಂಬಗಳಿಂದ",
    mantraEyebrow:"ಪವಿತ್ರ ಪ್ರತಿಜ್ಞೆ", mantraText:"ನನ್ನ ಜೀವನಕ್ಕೆ ಆಧಾರವಾದ ಈ ಮಂಗಳ ಸೂತ್ರದಿಂದ ನಿನ್ನನ್ನು ಬಂಧಿಸುತ್ತೇನೆ. ನೀನು ನೂರು ವರ್ಷ ಸುಖವಾಗಿ ಬಾಳು.",
    shubha:"ಶುಭ ವಿವಾಹ", scroll:"ಕೆಳಗೆ ಸರಿಸಿ", weddingEyebrow:"ಶುಭ ದಿನ", weddingHead:"ನಮ್ಮ ವಿವಾಹ ದಿನ", dateDay:"ಭಾನುವಾರ", dateFull:"06 ಡಿಸೆಂಬರ್ 2026", timeNote:"ಭಾರತೀಯ ಕಾಲಮಾನ",
    coverPre:"ಶುಭ ವಿವಾಹ", openInvite:"ಆಹ್ವಾನ ತೆರೆಯಿರಿ", openQuiet:"ಸಂಗೀತವಿಲ್ಲದೆ ತೆರೆಯಿರಿ", music:"ಸಂಗೀತ",
    groom:"ಮಹೇಶ್", bride:"ಮುತ್ತು",
    blessing:"ನಮ್ಮ ಪ್ರೀತಿಯ ಕುಟುಂಬ ಮತ್ತು ಹಿರಿಯರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ", inviteLine:"ಇವರ ಶುಭ ವಿವಾಹಕ್ಕೆ ತಮ್ಮನ್ನು ಸಂತೋಷದಿಂದ ಆಹ್ವಾನಿಸುತ್ತೇವೆ",
    dateLabel:"ದಿನಾಂಕ", muhurthamLabel:"ಮುಹೂರ್ತ", venueLabel:"ಸ್ಥಳ", dateLong:"ಭಾನುವಾರ, 06 ಡಿಸೆಂಬರ್ 2026", timeFull:"ಬೆಳಿಗ್ಗೆ 11:02",
    countHead:"ಶುಭ ಮುಹೂರ್ತಕ್ಕೆ ಇನ್ನು", days:"ದಿನಗಳು", hours:"ಗಂಟೆಗಳು", minutes:"ನಿಮಿಷಗಳು", seconds:"ಸೆಕೆಂಡುಗಳು",
    married:"ಶುಭ ವಿವಾಹ ಸಂಪನ್ನವಾಯಿತು",
    introEyebrow:"ಸುಂದರ ಆರಂಭ", introHead:"ಎರಡು ಹೃದಯಗಳು. ಒಂದೇ ಪಯಣ.",
    introText:"ನಮ್ಮ ಪ್ರೀತಿಯ ಕುಟುಂಬ ಮತ್ತು ಹಿರಿಯರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ, ಮಹೇಶ್ ಮತ್ತು ಮುತ್ತು ಅವರ ವಿವಾಹ ಮಹೋತ್ಸವದಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳಲು ತಮ್ಮನ್ನು ಸಂತೋಷದಿಂದ ಆಹ್ವಾನಿಸುತ್ತೇವೆ. ತಮ್ಮ ಉಪಸ್ಥಿತಿ ಮತ್ತು ಆಶೀರ್ವಾದ ಈ ವಿಶೇಷ ದಿನವನ್ನು ಇನ್ನಷ್ಟು ಅರ್ಥಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ.",
    venueEyebrow:"ವಿವಾಹ ಸ್ಥಳ", scanLoc:"ಸ್ಥಳಕ್ಕಾಗಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ", openLocation:"ಸ್ಥಳ ತೆರೆಯಿರಿ", addCal:"ಗೂಗಲ್ ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಿ", addIcs:"ಆಪಲ್ / ಔಟ್‌ಲುಕ್ ಕ್ಯಾಲೆಂಡರ್",
    storyEyebrow:"ನಮ್ಮ ಕಥೆ", momentsHead:"ನಮ್ಮ ಮೆಚ್ಚಿನ ಕ್ಷಣಗಳು",
    blessHead:"ತಮ್ಮ ಉಪಸ್ಥಿತಿಯೇ ನಮಗೆ ಎಲ್ಲವೂ",
    blessText:"ಈ ಸುಂದರ ಸಂದರ್ಭವನ್ನು ನಮ್ಮೊಂದಿಗೆ ಆಚರಿಸಿ, ಹೊಸ ಪಯಣ ಆರಂಭಿಸುತ್ತಿರುವ ಮಹೇಶ್ ಮತ್ತು ಮುತ್ತು ಅವರನ್ನು ಆಶೀರ್ವದಿಸಬೇಕೆಂದು ಆತ್ಮೀಯವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇವೆ.",
    share:"ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ", gratitude:"ಪ್ರೀತಿ ಮತ್ತು ಕೃತಜ್ಞತೆಯೊಂದಿಗೆ", langSwitch:"English", langCode:"en"
  }
};
let lang = "en";
try { if (localStorage.getItem("mm-lang") === "kn") lang = "kn"; } catch (e) {}
function shareText() {
  const en = `Wedding Invitation 🌸\nMahesh & Muttu\n📅 Sunday, 06 December 2026\n🕚 Muhurtham 11:02 AM\n📍 ${CONFIG.venue}\nMap: ${CONFIG.mapLink}`;
  const kn = `ಶುಭ ವಿವಾಹ ಆಹ್ವಾನ 🌸\nಮಹೇಶ್ ಮತ್ತು ಮುತ್ತು\n📅 ಭಾನುವಾರ, 06 ಡಿಸೆಂಬರ್ 2026\n🕚 ಮುಹೂರ್ತ ಬೆಳಿಗ್ಗೆ 11:02\n📍 ${CONFIG.venue}\nನಕ್ಷೆ: ${CONFIG.mapLink}`;
  return (lang === "kn" ? kn : en) + (CONFIG.siteLink ? `\n\n${CONFIG.siteLink}` : "");
}
function applyLanguage() {
  const t = T[lang];
  root.lang = lang;
  document.body.classList.toggle("kn", lang === "kn");
  document.querySelectorAll("[data-i18n]").forEach(el => { const v = t[el.dataset.i18n]; if (v !== undefined) el.textContent = v; });
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
  const q = new URLSearchParams({ action: "TEMPLATE", text: "Wedding of Mahesh & Muttu", dates: `${iso(startUTC)}/${iso(endUTC)}`,
    details: `Muhurtham 11:02 AM. Map: ${CONFIG.mapLink}` + (CONFIG.siteLink ? `\n${CONFIG.siteLink}` : ""), location: CONFIG.venue, ctz: "Asia/Kolkata" });
  $("calBtn").href = "https://calendar.google.com/calendar/render?" + q.toString();
})();
function setNum(id, v) {
  const el = $(id); v = String(v);
  if (el.textContent === v) return;
  el.textContent = v;
  if (!reduceMotion) { el.classList.remove("tick"); void el.offsetWidth; el.classList.add("tick"); }
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

/* Photos: shown when the file exists (any common format: jpg, jpeg, png, webp) */
document.querySelectorAll("img.photo").forEach(img => {
  const base = img.dataset.src.replace(/\.[a-z0-9]+$/i, "");
  const exts = ["jpg", "jpeg", "png", "webp", "JPG", "JPEG", "PNG", "WEBP"];
  (function tryNext(i) {
    if (i >= exts.length) return;
    const probe = new Image();
    probe.onload = () => { img.src = probe.src; img.classList.add("loaded"); };
    probe.onerror = () => tryNext(i + 1);
    probe.src = `${base}.${exts[i]}`;
  })(0);
});

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
    cover.classList.add("open"); window.scrollTo(0, 0);
    setTimeout(() => root.classList.remove("gated"), reduceMotion ? 0 : 900);
    setTimeout(() => { cover.hidden = true; }, reduceMotion ? 0 : 2000);
  }
  $("openInvite").addEventListener("click", () => open(true));
  $("openQuiet").addEventListener("click", () => open(false));
  $("openInvite").focus({ preventScroll: true });
})();
