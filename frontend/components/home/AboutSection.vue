<template>
  <section class="story" ref="sectionRef">

    <!-- Número de sección editorial -->
    <div class="story__section-num" :class="{ visible: inView }">02</div>

    <div class="story__inner">

      <!-- ════════════════════════════
           GALERÍA — POLAROIDS APILADOS
           ════════════════════════════ -->
      <div class="story__photos" :class="{ visible: inView }">

        <figure class="photo photo--back" style="--rot: 4.5deg; --delay: 0s">
          <img src="/images/modacircular/circular2.jpeg" alt="Prenda vintage" loading="lazy" />
          <figcaption>Oliver Vintage — 2026</figcaption>
        </figure>

        <figure class="photo photo--main" style="--rot: -2deg; --delay: 0.18s">
          <img src="/images/modacircular/ciruclar.jpeg" alt="Historia de moda circular" loading="lazy" />
          <figcaption>Moda circular</figcaption>
          <div class="photo__tape"></div>
        </figure>

        <figure class="photo photo--top" style="--rot: 6deg; --delay: 0.34s">
          <img src="/images/modacircular/circular3.jpeg" alt="Selección" loading="lazy" />
          <figcaption>Selección cuidadosa</figcaption>
        </figure>

        <figure class="photo photo--corner" style="--rot: -5deg; --delay: 0.5s">
          <img src="/images/modacircular/circular4.jpeg" alt="Estilo atemporal" loading="lazy" />
        </figure>

        <div class="story__year" :class="{ visible: inView }">2020</div>

      </div>

      <!-- ════════════════════════════
           TEXTO — EDITORIAL
           ════════════════════════════ -->
      <div class="story__text" :class="{ visible: inView }">

        <header class="story__header">
          <span class="story__overline">Historia &amp; Propósito</span>
          <h2 class="story__title">
            Cada prenda<br>
            <span class="story__title-accent">tiene vida</span><br>
            propia.
          </h2>
        </header>

        <div class="story__body">
          <p>
            En Oliver Vintage, la moda circular no es una tendencia:
            es nuestra esencia. Cada pieza que llega a nuestras manos
            ha vivido, ha sido amada y ahora busca un nuevo hogar donde
            seguir escribiendo su historia.
          </p>
          <p>
            Seleccionamos con cuidado prendas únicas, restauramos con
            respeto y las presentamos para que tú les des una segunda
            vida. Menos desperdicio, más estilo, infinitas historias.
          </p>
        </div>

        <div class="story__rule">
          <span></span>
          <em>♻</em>
          <span></span>
        </div>

        <div class="story__figures">
          <div class="story__figure">
            <strong>+2K</strong>
            <small>prendas<br>rescatadas</small>
          </div>
          <div class="story__figure">
            <strong>6</strong>
            <small>años de<br>historia</small>
          </div>
          <div class="story__figure">
            <strong>100%</strong>
            <small>moda<br>circular</small>
          </div>
        </div>

        <NuxtLink to="/nosotros" class="story__cta">
          Conoce nuestro viaje
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M2 7h10M8 3l4 4-4 4"/>
          </svg>
        </NuxtLink>

      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const inView = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { inView.value = entry.isIntersecting },
    { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.story {
  --ink:      #f0ebe0;
  --ink-dim:  rgba(240, 235, 224, 0.55);
  --terra:    #b85c38;
  --bg:       #141f17;
  --paper:    #ede8dc;
  --paper-shadow: rgba(0,0,0,0.55);

  position: relative;
  background: var(--bg);
  padding: 5rem 0 6rem;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  color: var(--ink);
}

.story::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, var(--terra) 30%, var(--terra) 70%, transparent 100%);
  opacity: 0.6;
}

.story::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 60% 100%, rgba(184,92,56,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 10% 10%, rgba(240,235,224,0.03) 0%, transparent 50%);
  pointer-events: none;
}

/* Número de sección gigante */
.story__section-num {
  position: absolute;
  top: -0.15em;
  right: -0.02em;
  font-family: 'Playfair Display', serif;
  font-size: clamp(10rem, 22vw, 18rem);
  font-weight: 700;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(240, 235, 224, 0.05);
  user-select: none;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 1.2s ease 0.1s, transform 1.2s ease 0.1s;
}
.story__section-num.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Layout */
.story__inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: center;
}

@media (max-width: 860px) {
  .story__inner {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
}

/* ── Galería ── */
.story__photos {
  position: relative;
  height: 520px;
}

.story__year {
  position: absolute;
  bottom: 0;
  left: -2rem;
  font-family: 'Playfair Display', serif;
  font-size: clamp(4rem, 8vw, 6.5rem);
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 1px rgba(184, 92, 56, 0.35);
  line-height: 1;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease 0.7s, transform 1s ease 0.7s;
}
.story__year.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Polaroid base */
.photo {
  position: absolute;
  background: var(--paper);
  padding: 10px 10px 40px;
  box-shadow:
    0 4px 6px -2px rgba(0,0,0,0.3),
    0 20px 48px -8px var(--paper-shadow),
    inset 0 1px 0 rgba(255,255,255,0.12);
  border-radius: 2px;
  cursor: pointer;

  /* Efecto cuarto oscuro: aparece de negro a color */
  opacity: 0;
  filter: brightness(0.08) contrast(1.5);
  transform: rotate(var(--rot, 0deg)) scale(0.88) translateY(28px);
  transition:
    opacity     0.7s cubic-bezier(0.4, 0, 0.2, 1) var(--delay, 0s),
    filter      1.2s cubic-bezier(0.4, 0, 0.2, 1) var(--delay, 0s),
    transform   0.85s cubic-bezier(0.34, 1.5, 0.64, 1) var(--delay, 0s);
}

.story__photos.visible .photo {
  opacity: 1;
  filter: brightness(1) contrast(1);
  transform: rotate(var(--rot, 0deg)) scale(1) translateY(0);
}

.photo:hover {
  transform: rotate(calc(var(--rot, 0deg) * 0.25)) scale(1.05) translateY(-10px) !important;
  z-index: 10 !important;
  box-shadow:
    0 10px 20px -5px rgba(0,0,0,0.4),
    0 40px 70px -12px rgba(0,0,0,0.7),
    inset 0 1px 0 rgba(255,255,255,0.12);
  transition: transform 0.3s cubic-bezier(0.34, 1.3, 0.64, 1), box-shadow 0.3s ease !important;
}

.photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: sepia(15%) contrast(1.06) saturate(0.88);
}

figcaption {
  position: absolute;
  bottom: 0;
  left: 0; right: 0;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  color: #5a5040;
  font-style: italic;
  font-family: 'Playfair Display', serif;
}

.photo__tape {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%) rotate(-1deg);
  width: 60px;
  height: 22px;
  background: rgba(255,230,150,0.55);
  border-radius: 1px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
}

.photo--back   { width: 220px; height: 260px; top: 60px;  left: 40px;  z-index: 1; }
.photo--main   { width: 270px; height: 320px; top: 30px;  left: 110px; z-index: 3; }
.photo--top    { width: 175px; height: 210px; top: 0;     right: 10px; z-index: 4; }
.photo--corner { width: 155px; height: 185px; bottom: 10px; right: 30px; z-index: 2; }

/* ── Texto ── */
.story__text {
  padding-left: 4rem;
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 0.9s ease 0.25s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.25s;
}

.story__text.visible {
  opacity: 1;
  transform: translateX(0);
}

.story__overline {
  display: block;
  font-size: 0.68rem;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: var(--terra);
  margin-bottom: 1.4rem;
  padding-left: 2rem;
  position: relative;
}
.story__overline::before {
  content: '';
  position: absolute;
  left: 0; top: 50%;
  width: 1.3rem; height: 1px;
  background: var(--terra);
}

.story__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.4rem, 4.5vw, 3.6rem);
  font-weight: 400;
  line-height: 1.08;
  color: var(--ink);
  margin: 0 0 2rem;
  letter-spacing: -0.01em;
}
.story__title-accent {
  font-style: italic;
  font-weight: 300;
  color: var(--terra);
}

.story__body p {
  font-size: 0.93rem;
  line-height: 1.9;
  color: var(--ink-dim);
  font-weight: 300;
  margin-bottom: 1rem;
}

.story__rule {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 1.8rem 0;
}
.story__rule span {
  flex: 1; height: 1px;
  background: rgba(240, 235, 224, 0.12);
}
.story__rule em {
  font-style: normal;
  font-size: 0.8rem;
  color: var(--terra);
  opacity: 0.7;
}

.story__figures {
  display: flex;
  margin-bottom: 2.5rem;
}
.story__figure {
  flex: 1;
  padding: 0 1.2rem 0 0;
  border-right: 1px solid rgba(240, 235, 224, 0.1);
}
.story__figure:first-child { padding-left: 0; }
.story__figure:last-child  { border-right: none; padding-right: 0; padding-left: 1.2rem; }
.story__figure:nth-child(2){ padding-left: 1.2rem; }

.story__figure strong {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1;
  margin-bottom: 0.3rem;
}
.story__figure small {
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-dim);
  line-height: 1.5;
}

.story__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.73rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink);
  padding-bottom: 0.4rem;
  border-bottom: 1px solid rgba(240, 235, 224, 0.3);
  transition: color 0.25s ease, border-color 0.25s ease, gap 0.25s ease;
}
.story__cta:hover {
  color: var(--terra);
  border-color: var(--terra);
  gap: 1.1rem;
}

/* ── Responsive ── */
@media (max-width: 860px) {
  .story__photos { height: 400px; max-width: 420px; margin: 0 auto; }
  .story__text   { padding-left: 0; transform: translateY(30px); }
  .story__text.visible { transform: translateY(0); }
  .story__year   { left: -0.5rem; font-size: 4.5rem; }

  .photo--back   { width: 190px; height: 225px; left: 20px;  top: 60px; }
  .photo--main   { width: 230px; height: 275px; left: 90px;  top: 25px; }
  .photo--top    { width: 150px; height: 180px; right: 5px;  top: 0; }
  .photo--corner { width: 135px; height: 162px; right: 20px; bottom: 5px; }
}

@media (max-width: 580px) {
  .story { padding: 4rem 0 5rem; }
  .story__inner { padding: 0 1.25rem; }
  .story__photos { height: 330px; }
  .photo--back { display: none; }
  .photo--main   { width: 200px; height: 240px; left: 50%; top: 20px;
                   transform: translateX(-60%) rotate(-2deg) scale(0.88) translateY(28px); }
  .story__photos.visible .photo--main {
    transform: translateX(-60%) rotate(-2deg) scale(1) translateY(0);
  }
  .photo--main:hover {
    transform: translateX(-60%) rotate(calc(-2deg * 0.25)) scale(1.05) translateY(-10px) !important;
  }
  .photo--top    { width: 130px; height: 155px; right: 0;    top: 0; }
  .photo--corner { width: 120px; height: 145px; right: 10px; bottom: 5px; }
  .story__title  { font-size: 2.1rem; }
  .story__figure strong { font-size: 1.5rem; }
}

@media (prefers-reduced-motion: reduce) {
  .photo, .story__text, .story__section-num, .story__year {
    transition: opacity 0.4s ease !important;
    transform: none !important;
    filter: none !important;
  }
}
</style>