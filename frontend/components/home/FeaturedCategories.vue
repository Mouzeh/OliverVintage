<template>
  <section class="banner-section">
    <div class="section-header fade-up">
      <span class="eyebrow">Colección</span>
      <h2 class="section-title">Podrás Encontrar</h2>
      <div class="divider" />
    </div>

    <div class="carousel-wrapper" ref="wrapperRef">
      <!-- Slides -->
      <div class="carousel-track" :style="trackStyle">
        <a
          v-for="(item, i) in banners"
          :key="i"
          :href="instagramUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="slide"
          @mouseenter="pauseAuto"
          @mouseleave="resumeAuto"
        >
          <NuxtImg
            :src="item.image"
            :alt="item.label"
            class="slide-img"
            format="webp"
            quality="80"
            width="1200"
            height="560"
            loading="lazy"
          />
          <div class="slide-overlay" />
          <div class="slide-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <div class="slide-content">
            <p class="slide-eyebrow">
              <span class="eyebrow-line" />
              Colección
            </p>
            <h3 class="slide-title">{{ item.label }}</h3>
            <p class="slide-meta">
              <span class="meta-dot" />
              Ver en Instagram
              <span class="meta-dot" />
            </p>
          </div>
        </a>
      </div>

      <!-- Nav arrows -->
      <button class="nav-btn nav-prev" aria-label="Anterior" @click="prev">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button class="nav-btn nav-next" aria-label="Siguiente" @click="next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <!-- Progress bar -->
      <div class="progress-bar">
        <div class="progress-fill" :style="progressStyle" />
      </div>
    </div>

    <!-- Dots -->
    <div class="dots">
      <button
        v-for="(item, i) in banners"
        :key="i"
        class="dot"
        :class="{ active: current === i }"
        :aria-label="`Ir a ${item.label}`"
        @click="goTo(i)"
      />
    </div>

    <!-- Category tags -->
    <div class="cat-tags">
      <button
        v-for="(item, i) in banners"
        :key="i"
        class="cat-tag"
        :class="{ active: current === i }"
        @click="goTo(i)"
      >
        {{ item.label }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const instagramUrl = 'https://www.instagram.com/olivervintagecl/'
const wrapperRef = ref<HTMLElement | null>(null)

const banners = [
  { label: 'Chaquetas',      image: '/images/Modelos/banner1.png' },
  { label: 'Cortavientos',   image: '/images/Modelos/cortavientosbanner.png' },
  { label: 'Vestidos',       image: '/images/Modelos/oliver2vestidos.png' },
  { label: 'Ropa de Nieve',  image: '/images/Modelos/ropanieve.png' },
  { label: 'Mezclilla',      image: '/images/Modelos/mezclilla.png' },
]

const INTERVAL = 4500
const current = ref(0)
const progress = ref(0)
let autoTimer: ReturnType<typeof setTimeout> | null = null
let pbRaf: number | null = null
let pbStart: number | null = null
let paused = false

const trackStyle = computed(() => ({
  transform: `translateX(-${current.value * 100}%)`,
}))

const progressStyle = computed(() => ({
  width: `${progress.value}%`,
}))

function animatePb(ts: number) {
  if (!pbStart) pbStart = ts
  const elapsed = ts - pbStart
  progress.value = Math.min((elapsed / INTERVAL) * 100, 100)
  if (elapsed < INTERVAL) {
    pbRaf = requestAnimationFrame(animatePb)
  }
}

function startPb() {
  if (pbRaf) cancelAnimationFrame(pbRaf)
  pbStart = null
  progress.value = 0
  pbRaf = requestAnimationFrame(animatePb)
}

function startAuto() {
  if (autoTimer) clearTimeout(autoTimer)
  startPb()
  autoTimer = setTimeout(() => {
    if (!paused) {
      current.value = (current.value + 1) % banners.length
      startAuto()
    }
  }, INTERVAL)
}

function goTo(i: number) {
  current.value = i
  startAuto()
}

function prev() {
  current.value = (current.value - 1 + banners.length) % banners.length
  startAuto()
}

function next() {
  current.value = (current.value + 1) % banners.length
  startAuto()
}

function pauseAuto() {
  paused = true
  if (autoTimer) clearTimeout(autoTimer)
  if (pbRaf) cancelAnimationFrame(pbRaf)
}

function resumeAuto() {
  paused = false
  startAuto()
}

let touchStartX = 0
function onTouchStart(e: TouchEvent) { touchStartX = e.touches[0].clientX }
function onTouchEnd(e: TouchEvent) {
  const dx = e.changedTouches[0].clientX - touchStartX
  if (Math.abs(dx) > 50) dx < 0 ? next() : prev()
}

onMounted(() => {
  startAuto()
  const el = wrapperRef.value
  if (el) {
    el.addEventListener('touchstart', onTouchStart as EventListener, { passive: true })
    el.addEventListener('touchend', onTouchEnd as EventListener)
  }
})

onBeforeUnmount(() => {
  if (autoTimer) clearTimeout(autoTimer)
  if (pbRaf) cancelAnimationFrame(pbRaf)
  const el = wrapperRef.value
  if (el) {
    el.removeEventListener('touchstart', onTouchStart as EventListener)
    el.removeEventListener('touchend', onTouchEnd as EventListener)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=Montserrat:wght@300;400;500&display=swap');

/* ── Variables ── */
.banner-section {
  --terracota: #C06E52;
  --terracota-glow: rgba(192, 110, 82, 0.55);
  --forest:    #1E3223;
  --cream:     #FFF8F0;
  --cream-dim: rgba(255, 245, 235, 0.82);

  padding: 6rem 0 3rem;
  background: linear-gradient(160deg, #fdf8f3 0%, #ffffff 50%, #faf5ef 100%);
  font-family: 'Montserrat', sans-serif;
  width: 100%;
}

/* ── Header ── */
.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
  padding: 0 1rem;
}
.eyebrow {
  display: block;
  font-size: 11px;
  letter-spacing: 0.38em;
  text-transform: uppercase;
  color: var(--terracota);
  margin-bottom: 0.7rem;
  font-weight: 400;
}
.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 700;
  color: var(--forest);
  margin-bottom: 0.8rem;
  letter-spacing: -0.01em;
}
.divider {
  width: 60px;
  height: 1px;
  background: rgba(192, 110, 82, 0.4);
  margin: 0 auto;
}

/* ── Carousel wrapper ── */
.carousel-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 28px 80px rgba(30, 50, 35, 0.18);
}

/* ── Track ── */
.carousel-track {
  display: flex;
  transition: transform 0.8s cubic-bezier(0.77, 0, 0.18, 1);
  will-change: transform;
}

/* ── Slide ── */
.slide {
  flex: 0 0 100%;
  position: relative;
  display: block;
  height: clamp(380px, 52vw, 560px);
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
}

.slide-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 1s ease;
}
.slide:hover .slide-img {
  transform: scale(1.05);
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(20, 40, 25, 0.9) 0%,
    rgba(20, 40, 25, 0.3) 45%,
    transparent 75%
  );
  transition: background 0.55s ease;
  z-index: 1;
}
.slide:hover .slide-overlay {
  background: linear-gradient(
    to top,
    rgba(160, 80, 50, 0.88) 0%,
    rgba(160, 80, 50, 0.28) 50%,
    transparent 78%
  );
}

/* Arrow badge */
.slide-arrow {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 3;
  background: rgba(255, 248, 240, 0.93);
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateX(12px);
  transition: opacity 0.35s, transform 0.4s;
}
.slide:hover .slide-arrow {
  opacity: 1;
  transform: translateX(0);
}
.slide-arrow svg {
  width: 18px;
  height: 18px;
  color: var(--terracota);
}

/* Slide content */
.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 2.5rem 3rem;
  transform: translateY(0);
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.slide:hover .slide-content {
  transform: translateY(-10px);
}

.slide-eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 235, 210, 0.72);
  margin-bottom: 0.5rem;
  font-weight: 400;
}
.eyebrow-line {
  display: inline-block;
  width: 24px;
  height: 1px;
  background: var(--terracota);
}

/* ── Glowing title ── */
.slide-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--cream);
  line-height: 1.05;
  margin-bottom: 0.6rem;
  letter-spacing: 0.01em;
  text-shadow:
    0 0 20px rgba(255, 200, 150, 0.6),
    0 0 50px rgba(192, 110, 82, 0.35),
    0 2px 4px rgba(0, 0, 0, 0.4);
  animation: glowPulse 3s ease-in-out infinite;
  transition: text-shadow 0.4s, transform 0.35s;
}
.slide:hover .slide-title {
  text-shadow:
    0 0 30px rgba(255, 200, 150, 0.85),
    0 0 70px rgba(192, 110, 82, 0.6),
    0 0 110px rgba(192, 110, 82, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.3);
  transform: scale(1.025);
  transform-origin: left;
}
@keyframes glowPulse {
  0%, 100% {
    text-shadow:
      0 0 18px rgba(255, 200, 150, 0.55),
      0 0 45px rgba(192, 110, 82, 0.3),
      0 2px 4px rgba(0, 0, 0, 0.4);
  }
  50% {
    text-shadow:
      0 0 28px rgba(255, 200, 150, 0.75),
      0 0 65px rgba(192, 110, 82, 0.5),
      0 2px 4px rgba(0, 0, 0, 0.35);
  }
}

.slide-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: rgba(255, 235, 210, 0.65);
  font-weight: 400;
  letter-spacing: 0.05em;
}
.meta-dot {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--terracota);
}

/* ── Nav buttons ── */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(255, 248, 240, 0.9);
  border: none;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, transform 0.25s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(0,0,0,0.18);
}
.nav-btn:hover {
  background: var(--cream);
  transform: translateY(-50%) scale(1.12);
  box-shadow: 0 6px 28px rgba(0,0,0,0.22);
}
.nav-btn svg {
  width: 20px;
  height: 20px;
  color: var(--terracota);
}
.nav-prev { left: 18px; }
.nav-next { right: 18px; }

/* ── Progress bar ── */
.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.12);
  z-index: 5;
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--terracota), #e8906e);
  border-radius: 0 2px 2px 0;
  box-shadow: 0 0 8px rgba(192, 110, 82, 0.6);
  transition: width 0.12s linear;
}

/* ── Dots ── */
.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 1.4rem;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(192, 110, 82, 0.22);
  cursor: pointer;
  padding: 0;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
}
.dot.active {
  background: var(--terracota);
  transform: scale(1.4);
  box-shadow: 0 0 8px rgba(192, 110, 82, 0.5);
}

/* ── Category tags ── */
.cat-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1.1rem;
  padding: 0 1rem;
}
.cat-tag {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
  padding: 6px 18px;
  border-radius: 20px;
  border: 1px solid rgba(192, 110, 82, 0.28);
  color: #8a5040;
  background: transparent;
  cursor: pointer;
  letter-spacing: 0.06em;
  transition: background 0.22s, border-color 0.22s, color 0.22s, box-shadow 0.22s;
}
.cat-tag.active,
.cat-tag:hover {
  background: rgba(192, 110, 82, 0.1);
  border-color: rgba(192, 110, 82, 0.5);
  color: var(--terracota);
  box-shadow: 0 0 12px rgba(192, 110, 82, 0.15);
}

/* ── Fade-up animation ── */
.fade-up {
  animation: fadeUp 0.9s ease both;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .banner-section    { padding: 4rem 0 2.5rem; }
  .slide-content     { padding: 1.75rem 1.5rem; }
  .nav-btn           { width: 38px; height: 38px; }
  .nav-btn svg       { width: 17px; height: 17px; }
  .nav-prev          { left: 10px; }
  .nav-next          { right: 10px; }
}

@media (max-width: 480px) {
  .slide-content     { padding: 1.25rem 1rem; }
  .carousel-wrapper  { border-radius: 12px; }
}

/* ← AQUÍ, al final del todo */
.slide-img img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 1s ease;
}
</style>
