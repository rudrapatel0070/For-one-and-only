/* ============================================================
   SURPRISE WEBSITE — script.js
   ============================================================ */

// ─── CONFIG ──────────────────────────────────────────────────
const PASSWORD = "ludla";
const START_DATE = "2022-12-10"; // December 10, 2022

const LETTER_TEXT = `Every single day, I find myself grateful that you exist, just your exictence makes me feel some special emotions which i can't express in words
    
You make even the most ordinary moments feel like something out of a dream
   
The way you laugh, the way you care, the way you make me feel special — it's one of the most beautiful things I've ever FELT
   
I wrote this for you because sometimes words need more than just a message You deserve a whole world built just for you
   
And so, here it is — your little world, filled with all the things I want you to know but sometimes I forget to say out loud
   
Thank you for being you.Thank you for being mine. `;

const REASONS = [
  { emoji: "😂", text: "Your laugh makes my whole day better instantly" },
  { emoji: "💪", text: "How strong you are, even when things are hard" },
  { emoji: "👀", text: "The way you look at me" },
  { emoji: "🤌🏻", text: "Your sweetness towards me" },
  { emoji: "🤗", text: "Your hugs that make everything feel safe" },
  { emoji: "✨", text: "How you light up my world" },
  { emoji: "💬", text: "The way you listen like I'm the only person in the world" },
  { emoji: "🌻", text: "Your kindness — it's rare and it's beautiful" },
  { emoji: "🎨", text: "The way you see beauty in little things" },
  { emoji: "🔥", text: "your hotness, out of the world, like sun" },
  { emoji: "🌈", text: "How you make even bad days feel colorful" },
  { emoji: "💖", text: "Everything about you. Absolutely everything." },
];

const TIMELINE = [
  { date: "Aug 14, 2006 & May 03, 2006", title: "The Beginning", desc: "The dates on which our story was about to begin. The best start to the best story. - OUR BIRTH", emoji: "✨" },
  { date: "Nov 07, 2021", title: "Muh deekhai", desc: "A day on which our path crossed for the first time ever, We saw each other for the first time.", emoji: "😍" },
  { date: "Dec 10, 2022", title: "The couragous step", desc: "The day when i asked you to be mine and you said yes, unbelievable right?, but true.", emoji: "🙈" },
  { date: "Dec 18, 2022", title: "First Hug", desc: "Shaking arms, light speed heartbeat, but a warm place where everything was calm and comfort.", emoji: "🫂" },
  { date: "Jan 16, 2023", title: "Lips HUG?", desc: "The most amazing moment of my life, It was magical. I can still feel your lips, all the time.", emoji: "😘" },
  { date: "April 20 - 24, 2024", title: "Best and First Trip", desc: "I still remember the way we looked at each other in the whole trip, just pure and innocent LOVE.", emoji: "😆" },
  { date: "Today", title: "Our Forever", desc: "Every day since has been a gift. I can't wait for all the chapters we haven't written yet.", emoji: "♾️" },
];

const ENVELOPES = [
  { label: "Open when you miss me", emoji: "🥺", text: "Just remember that I am only a heartbeat away. Close your eyes, take a deep breath, and feel my arms around you. I'm always with you, always." },
  { label: "Open when you're happy", emoji: "😁", text: "Your happiness is my favorite thing in the world! Keep that beautiful smile shining—it's the most gorgeous thing I've ever seen. I love seeing you glow!" },
  { label: "Open when you need a laugh", emoji: "😂", text: "Just remember My face whenever you have annoyed me, this is enough to make you laugh non-stop." },
  { label: "Open when you're stressed", emoji: "🍵", text: "Take a moment for yourself. You are doing amazing, and I am so proud of you. Everything will be okay because you are stronger than you know." },
  { label: "Open when you can't sleep", emoji: "🌙", text: "I'm probably thinking about you right now too. Imagine us stargazing together, peaceful and quiet, imagine I will be next to you one day, holding your hand, and we will be sleeping together, just you and me, for now Goodnight, my love." },
  { label: "Open when you need a hug", emoji: "🫂", text: "Consider this a digital squeeze! I'm holding you tight in my thoughts. I can't wait for the next time I get to hold you for real." },
];

const FLOWER_MESSAGES = [
  "You are my world 🌎",
  "You make my heart skip a beat 💓",
  "My favorite person 💖",
  "You're so smart 🧠",
  "I love your smile 😊",
  "You're my sunshine ☀️",
  "Always thinking of you 💭",
  "You make me better ✨",
  "Forever yours 💍",
  "You're beautiful 🌸",
  "My happy place 🏡",
  "Thank you for being you 🌹",
  "I'm so lucky 🍀",
  "My everything ♾️",
  "You are amazing 🌟",
  "I love our memories 🎞️",
  "You're my queen 👑",
  "My soulmate 👩‍❤️‍👨",
  "Love you to the moon 🌙",
  "You're my forever 💖",
  "You're the best part of my day 🌅",
  "I love your kindness 🌸",
  "You're my favorite adventure 🗺️",
  "My heart belongs to you ❤️",
  "You make me so happy 😄",
  "I'm always on your side 🤝",
  "You're my better half 🌓",
  "I love the way you think 💭",
  "You're my dream come true ✨",
  "I'll always be here for you 🤗",
  "You're my reason to smile 😊",
  "I love our long talks 📞",
  "You're my brightest star 🌟",
  "My love for you is endless ♾️",
  "You're the one and only ☝️",
  "I love your energy ⚡",
  "You're my safe haven ⚓",
  "I'm so proud of you 🏆",
  "You're my perfect match 🔥",
  "I love your soft heart 💖",
  "You're my treasure 💎",
  "I love your unique soul 🌌",
  "You're my miracle 🕊️",
  "I love your sense of humor 😂",
  "You're my light in the dark 💡",
  "I love your passion ❤️‍🔥",
  "You're my sweetest dream 🍭",
  "I love your gentleness 🦢",
  "You're my inspiration 🎨",
  "I love your strength 💪",
  "You're my joy 🎈",
  "I love your laugh 😆",
  "You're my destiny 🎡",
  "I love your eyes 👀",
  "You're my harmony 🎵",
  "I love your support 🧱",
  "You're my spirit 🦁",
  "I love your warmth 🔥",
  "You're my peace 🌊",
  "I love your wisdom 🦉",
  "You're my comfort 🧸",
  "I love your bravery 🦁",
  "You're my gift 💝",
  "I love your presence 🎁",
  "You're my magic ✨",
  "I love your company 👫",
  "You're my home 🏠",
  "I love you more than words can say ❤️",
  "You're my soul's reflection 🪞",
  "I love our future together ⏳",
  "You're the song in my heart 🎵",
  "I love your quirky side 🤪",
  "You're my compass 🧭",
  "I love your perspective 🔭",
  "You're my anchor ⚓",
  "I love our shared dreams 🌙",
  "You're my ray of hope 🌈",
  "I love your patience ⏳",
  "You're my masterpiece 🖼️",
  "I love your voice 🗣️",
  "You're my favorite chapter 📖",
  "I love your curiosity 🔍",
  "You're my lighthouse 🏮",
  "I love your touch 🤝",
  "You're my serenity 🧘",
  "I love your ambition 🚀",
  "You're my sanctuary ⛩️",
  "I love your honesty 💎",
  "You're my firework 🎆",
  "I love your elegance 🦢",
  "You're my destiny 🎡",
  "I love your vibes ✨",
  "You're my wonder 🌌",
  "I love your persistence 🏔️",
  "You're my sunshine on a rainy day ☔",
  "I love your simplicity 🤍",
  "You're my lucky charm 🧿",
  "I love your creativity 🎭",
  "You're my endless summer ☀️",
  "I love you to infinity and beyond 🚀"
];

let usedFlowerMessages = [];




// ─── STATE ────────────────────────────────────────────────────
let revealedCount = 0;

let letterInterval = null;

// ─── LOCK SCREEN ─────────────────────────────────────────────
function checkPassword() {
  const input = document.getElementById("password-input");
  const error = document.getElementById("password-error");
  const val = input.value.trim().toLowerCase();
  if (val === PASSWORD) {
    error.classList.remove("show");
    unlockSite();
  } else {
    error.classList.add("show");
    input.value = "";
    input.focus();
    setTimeout(() => error.classList.remove("show"), 2500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Enter key on password
  document.getElementById("password-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkPassword();
  });

  // Generate stars
  const starsEl = document.getElementById("stars");
  for (let i = 0; i < 120; i++) {
    const s = document.createElement("div");
    s.className = "star";
    const size = Math.random() * 3 + 1;
    s.style.cssText = `width:${size}px;height:${size}px;top:${Math.random() * 100}%;left:${Math.random() * 100}%;--d:${(Math.random() * 3 + 1).toFixed(1)}s;animation-delay:${(Math.random() * 3).toFixed(1)}s`;
    starsEl.appendChild(s);
  }
});

function unlockSite() {
  launchConfetti(document.getElementById("confetti-canvas"), 180);
  setTimeout(() => {
    document.getElementById("lock-screen").style.animation = "unlockReveal 0.8s reverse forwards";
    setTimeout(() => {
      document.getElementById("lock-screen").classList.remove("active");
      document.getElementById("lock-screen").style.display = "none";
      const main = document.getElementById("main-site");
      main.classList.remove("hidden");
      main.style.animation = "unlockReveal 0.8s ease forwards";
      window.scrollTo(0, 0); // Reset scroll to top
      document.body.classList.add("lock-scroll");
      initMainSite();
    }, 800);
  }, 1200);
}

// ─── MAIN SITE INIT ───────────────────────────────────────────
function initMainSite() {
  updateDynamicStats(); // Calculate dynamic stats early
  generateFloatingHearts();
  buildTimeline();
  buildReasonCards();
  initGarden();
  buildEnvelopes();
  initStarsMap();

  initScrollObserver();
  // generateBalloons(); // Removed as requested
  // startLetterTyping() removed from here to trigger only on button click
}

// ─── FLOATING HEARTS ──────────────────────────────────────────
function generateFloatingHearts() {
  const container = document.getElementById("floating-hearts");
  const items = ["💕", "💖", "💗", "✨", "🌸", "💫", "⭐"];
  for (let i = 0; i < 18; i++) {
    const h = document.createElement("div");
    h.className = "fheart";
    h.textContent = items[Math.floor(Math.random() * items.length)];
    const dur = (Math.random() * 15 + 10).toFixed(1);
    h.style.cssText = `left:${Math.random() * 100}%;font-size:${Math.random() * 1.2 + 0.8}rem;animation-duration:${dur}s;animation-delay:${(Math.random() * dur).toFixed(1)}s`;
    container.appendChild(h);
  }
}

// ─── LETTER TYPING ────────────────────────────────────────────
let letterStarted = false;
function startLetterTyping() {
  if (letterStarted) return;
  letterStarted = true;
  const el = document.getElementById("letter-body");
  if (!el) return;

  el.innerHTML = "";
  const lines = LETTER_TEXT.trim().split("\n");

  lines.forEach((line, lineIdx) => {
    const lineContainer = document.createElement("div");
    lineContainer.className = "letter-line";
    lineContainer.style.width = "100%";

    const words = line.split(" ");
    words.forEach(word => {
      if (word === "") return;
      const span = document.createElement("span");
      span.className = "letter-word";
      span.textContent = word + " ";
      lineContainer.appendChild(span);
    });

    el.appendChild(lineContainer);
  });

  const wordSpans = el.querySelectorAll(".letter-word");
  const totalDuration = 20000; // Total duration in ms
  const intervalTime = totalDuration / wordSpans.length;

  let i = 0;
  const interval = setInterval(() => {
    if (i >= wordSpans.length) {
      clearInterval(interval);
      return;
    }
    wordSpans[i].classList.add("visible");
    i++;
  }, intervalTime);
}

// ─── REASON CARDS ─────────────────────────────────────────────
function buildReasonCards() {
  const grid = document.getElementById("reasons-grid");
  document.getElementById("total-count").textContent = REASONS.length;
  REASONS.forEach((r, idx) => {
    const card = document.createElement("div");
    card.className = "reason-card";
    card.id = `reason-${idx}`;
    card.innerHTML = `
      <div class="reason-card-inner">
        <div class="reason-card-front">
          <div class="card-num">${r.emoji}</div>
          <div class="card-tap">tap to reveal</div>
        </div>
        <div class="reason-card-back">${r.text}</div>
      </div>`;
    card.addEventListener("click", () => flipCard(card, idx));
    grid.appendChild(card);
  });
}

// ─── TIMELINE ─────────────────────────────────────────────────
function buildTimeline() {
  const container = document.getElementById("timeline-container");
  TIMELINE.forEach((item, idx) => {
    const side = idx % 2 === 0 ? "left" : "right";
    const el = document.createElement("div");
    el.className = `timeline-item timeline-item-${side}`;
    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-date">${item.date} ${item.emoji}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `;
    container.appendChild(el);
  });
}

function animateTimeline() {
  const items = document.querySelectorAll(".timeline-item");
  items.forEach((item, idx) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, idx * 200);
  });
}

// ─── OPEN WHEN ENVELOPES ──────────────────────────────────────
function buildEnvelopes() {
  const grid = document.getElementById("envelopes-grid");
  if (!grid) return;
  ENVELOPES.forEach((env, idx) => {
    const card = document.createElement("div");
    card.className = "envelope-card";
    card.innerHTML = `
      <span class="envelope-icon">${env.emoji}</span>
      <h3 class="envelope-label">${env.label}</h3>
      <span class="envelope-tap">Click to open</span>
    `;
    card.addEventListener("click", () => {
      console.log("Envelope clicked:", idx);
      openEnvelope(idx);
    });
    grid.appendChild(card);
  });
}

function openEnvelope(idx) {
  const env = ENVELOPES[idx];
  const modal = document.getElementById("envelope-modal");

  if (!env || !modal) return;

  document.getElementById("modal-emoji").textContent = env.emoji;
  document.getElementById("modal-title").textContent = env.label;
  document.getElementById("modal-text").textContent = env.text;

  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scroll
}

function closeEnvelope() {
  const modal = document.getElementById("envelope-modal");
  if (modal) {
    modal.classList.remove("active");
  }
  document.body.style.overflow = "auto";
}

// ─── VIRTUAL GARDEN ──────────────────────────────────────────
function initGarden() {
  const area = document.getElementById("garden-area");
  const flowers = ["🌸", "🌹", "🌷", "🌻", "🌼", "🌺", "💐", "💮", "🏵️", "🪴", "🌿"];

  area.addEventListener("click", (e) => {
    const rect = area.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = x + "px";
    flower.style.top = y + "px";

    const head = document.createElement("div");
    head.className = "flower-head";
    head.textContent = flowers[Math.floor(Math.random() * flowers.length)];

    const stem = document.createElement("div");
    stem.className = "flower-stem";

    const msg = document.createElement("div");
    msg.className = "flower-message";

    // Non-repeating logic
    if (usedFlowerMessages.length === FLOWER_MESSAGES.length) {
      usedFlowerMessages = []; // Reset when all used
    }

    let availableMessages = FLOWER_MESSAGES.filter(m => !usedFlowerMessages.includes(m));
    let selectedMsg = availableMessages[Math.floor(Math.random() * availableMessages.length)];
    usedFlowerMessages.push(selectedMsg);

    msg.textContent = selectedMsg;

    flower.appendChild(msg);
    flower.appendChild(head);
    flower.appendChild(stem);
    area.appendChild(flower);

    if (area.children.length > 500) area.removeChild(area.firstChild);
  });
}

// ─── STARS MAP ────────────────────────────────────────────────
function initStarsMap() {
  const canvas = document.getElementById("stars-map-canvas");
  const emojiLayer = document.getElementById("stars-emoji-layer");
  if (!canvas || !emojiLayer) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  // Create animated star emojis
  const starEmojis = ["⭐", "✨", "🌟", "💫"];
  for (let i = 0; i < 25; i++) {
    const s = document.createElement("div");
    s.className = "star-emoji";
    s.textContent = starEmojis[Math.floor(Math.random() * starEmojis.length)];
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.fontSize = Math.random() * 1 + 0.5 + "rem";
    s.style.setProperty('--dur', (Math.random() * 3 + 2) + 's');
    s.style.animationDelay = Math.random() * 5 + 's';
    emojiLayer.appendChild(s);
  }

  const stars = Array.from({ length: 300 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 1.5,
    opacity: Math.random(),
    speed: 0.003 + Math.random() * 0.007
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.opacity += s.speed;
      if (s.opacity > 1 || s.opacity < 0) s.speed *= -1;
      ctx.globalAlpha = s.opacity;
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw connecting lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 0.4;
    ctx.beginPath();
    for (let i = 0; i < 20; i++) {
      ctx.moveTo(stars[i].x, stars[i].y);
      ctx.lineTo(stars[i + 1].x, stars[i + 1].y);
    }
    ctx.stroke();

    requestAnimationFrame(draw);
  }
  draw();
}

function flipCard(card, idx) {
  if (card.classList.contains("flipped")) return;
  card.classList.add("flipped");
  revealedCount++;
  document.getElementById("revealed-count").textContent = revealedCount;
  launchMiniConfetti(card);
  if (revealedCount === REASONS.length) {
    setTimeout(() => { alert("You found all the reasons! 💖 There are infinite more..."); }, 600);
  }
}



// ─── FINALE BALLOONS ──────────────────────────────────────────
function generateBalloons() {
  const container = document.getElementById("finale-balloons");
  const items = ["🎈", "🎉", "🎊", "💖", "🌸", "✨", "🎈", "🎈"];
  for (let i = 0; i < 14; i++) {
    const b = document.createElement("div");
    b.className = "balloon";
    b.textContent = items[Math.floor(Math.random() * items.length)];
    const dur = (Math.random() * 8 + 6).toFixed(1);
    b.style.cssText = `left:${Math.random() * 100}%;font-size:${Math.random() * 1.5 + 1.5}rem;animation-duration:${dur}s;animation-delay:${(Math.random() * dur).toFixed(1)}s`;
    container.appendChild(b);
  }
}

// ─── DYNAMIC STATS ───────────────────────────────────────────
function updateDynamicStats() {
  const cards = document.querySelectorAll(".stat-card");
  cards.forEach(card => {
    const label = card.querySelector(".stat-label");
    const number = card.querySelector(".stat-number");
    if (label && label.textContent.toLowerCase().includes("days of happiness") && number) {
      const start = new Date(START_DATE);
      const now = new Date();
      const diff = now - start;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      number.setAttribute("data-target", days);
    }
  });
}

// ─── COUNTER ANIMATION ────────────────────────────────────────
function animateCounters() {
  document.querySelectorAll(".stat-number[data-target]").forEach(el => {
    const targetValue = el.getAttribute("data-target");
    if (!targetValue || isNaN(targetValue)) return;

    const target = parseInt(targetValue);
    let current = 0;
    const duration = 2000; // 2 seconds
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    const step = target / totalFrames;

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target.toLocaleString();
        clearInterval(interval);
      } else {
        el.textContent = Math.floor(current).toLocaleString();
      }
    }, 1000 / fps);
  });
}

// ─── I LOVE YOU SHOWER ────────────────────────────────────────
let ilyInterval = null;
function startILYShower() {
  if (ilyInterval) return;
  const container = document.getElementById("ily-container");
  if (!container) return;
  const phrases = ["Love You Aneri", "You're My World", "Tu Maza Jeevan", "Mi Amor!"];
  const colors = ["#ff6b9d", "#c77dff", "#ffd700", "#ff4d6d", "#fff"];

  let cellIndex = 0;
  const gridRows = 3;
  const gridCols = 3;

  ilyInterval = setInterval(() => {
    const el = document.createElement("div");
    el.className = "ily-pop";
    el.textContent = phrases[Math.floor(Math.random() * phrases.length)];

    // Calculate cell coordinates for even spreading
    const row = Math.floor(cellIndex / gridCols);
    const col = cellIndex % gridCols;

    // Add some randomness within the cell
    const left = (col * (100 / gridCols)) + (Math.random() * (100 / gridCols));
    const top = (row * (100 / gridRows)) + (Math.random() * (100 / gridRows));

    el.style.left = left + "%";
    el.style.top = top + "%";
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
    el.style.fontSize = Math.random() * 1.5 + 1 + "rem";
    const delay = Math.random() * 0.5;
    el.style.animationDelay = delay + "s";
    container.appendChild(el);

    cellIndex = (cellIndex + 1) % (gridRows * gridCols); // Move to next cell

    setTimeout(() => el.remove(), (4 + delay) * 1000);
  }, 400); // Slightly slower interval for cleaner look
}

// (Duplicate animateCounters removed)

// ─── SCROLL OBSERVER ─────────────────────────────────────────
function initScrollObserver() {
  const sections = document.querySelectorAll(".section");
  let finaleAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const idx = Array.from(sections).indexOf(entry.target);

      // Section-specific effects
      if (idx === 2) animateTimeline();
      if (idx === 7 && !finaleAnimated) {
        finaleAnimated = true;
        animateCounters();
        startILYShower();
        launchConfetti(document.getElementById("finale-confetti"), 200);
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => observer.observe(s));
}

function beginExperience() {
  document.body.classList.remove("lock-scroll");
  scrollToSection(1);
  // Start typing after a small delay to allow scroll to complete or start
  setTimeout(() => startLetterTyping(), 500);
}

function scrollToSection(idx) {
  const sections = document.querySelectorAll(".section");
  if (sections[idx]) sections[idx].scrollIntoView({ behavior: "smooth" });
}

// ─── DYNAMIC SHOOTING STARS ──────────────────────────────────
function initShootingStars() {
  const containers = document.querySelectorAll(".shooting-stars");
  containers.forEach(container => {
    // Spawn stars at random intervals
    const spawn = () => {
      spawnOneStar(container);
      // Increased frequency: 0.5s to 2.5s
      setTimeout(spawn, 500 + Math.random() * 2000);
    };
    spawn();
  });
}

function spawnOneStar(container) {
  const star = document.createElement("div");
  star.className = "shooting-star";

  // Random start position (From top or right edge to ensure they cross the page)
  const startX = 10 + Math.random() * 110;
  const startY = -10 + Math.random() * 50;

  star.style.left = startX + "%";
  star.style.top = startY + "%";

  // Random duration
  const duration = 1.5 + Math.random() * 2.5;
  star.style.animationDuration = duration + "s";

  container.appendChild(star);

  // Cleanup after animation finishes
  setTimeout(() => {
    star.remove();
  }, duration * 1000);
}

// ─── CONFETTI ────────────────────────────────────────────────
function launchConfetti(canvas, count = 120) {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");
  const particles = [];
  const colors = ["#ff6b9d", "#c77dff", "#ffd700", "#ff4d6d", "#00c9a7", "#fff", "#ff9a3c", "#7b2ff7"];

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * 200,
      vx: (Math.random() - 0.5) * 6,
      vy: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      shape: Math.random() > 0.5 ? "rect" : "circle",
    });
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1;
      p.rotation += p.rotSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, 1 - frame / 180);
      if (p.shape === "rect") ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      else { ctx.beginPath(); ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore();
    });
    frame++;
    if (frame < 200) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

function launchMiniConfetti(el) {
  const rect = el.getBoundingClientRect();
  const canvas = document.createElement("canvas");
  canvas.style.cssText = `position:fixed;inset:0;pointer-events:none;z-index:9999`;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
  const colors = ["#ff6b9d", "#c77dff", "#ffd700", "#ff4d6d", "#fff"];
  const particles = Array.from({ length: 30 }, () => ({
    x: cx, y: cy,
    vx: (Math.random() - 0.5) * 10, vy: (Math.random() - 0.5) * 10 - 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 6 + 3, life: 1
  }));
  let f = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.3; p.life -= 0.03;
      ctx.save(); ctx.globalAlpha = Math.max(0, p.life); ctx.fillStyle = p.color;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    });
    f++;
    if (f < 50) requestAnimationFrame(draw);
    else document.body.removeChild(canvas);
  }
  draw();
}
