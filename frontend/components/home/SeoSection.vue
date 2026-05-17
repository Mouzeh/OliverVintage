<template>
  <section class="seo-section" ref="sectionRef">
    <div class="seo-bg" />
    <canvas ref="snowCanvas" class="snow-canvas" aria-hidden="true" />

    <div class="seo-inner">
      <div class="seo-eyebrow">
        <span class="eyebrow-line" />
        <span class="eyebrow-text">Villarrica · Araucanía · Chile</span>
        <span class="eyebrow-line" />
      </div>

      <h2 class="seo-title" :class="{ visible: isVisible }">
        Ropa americana, ropa de invierno y moda circular<br />
        <em>En el corazón de Villarrica.</em>
      </h2>

      <div class="seo-divider" :class="{ visible: isVisible }" />

      <div class="seo-body" :class="{ visible: isVisible }">
        <p>
          Si buscas ropa para el <strong>Volcán Villarrica</strong>, abrigo para el frío
          de la Araucanía o prendas técnicas para la nieve, en <strong>Oliver Vintage</strong>
          encontrarás chaquetas, chaquetones, cortavientos y ropa de invierno seleccionadas a mano.
          Piezas únicas con la calidad de las grandes marcas americanas.
        </p>
        <p>
          Somos la tienda de <strong>ropa americana en Villarrica</strong> con más historia
          de la región. Más de 10.000 prendas rescatadas, 26 años historia en Villarrica.
          Esto es <strong>moda circular desde la Araucanía</strong>.
        </p>
      </div>

      <div class="seo-tags" :class="{ visible: isVisible }">
        <span>Ropa Americana Villarrica</span>
        <span>Ropa De Invierno Araucanía</span>
        <span>Moda Circular</span>
        <span>Ropa De Nieve</span>
        <span>Segunda Mano Villarrica</span>
        <span>Ropa Térmica</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const snowCanvas = ref<HTMLCanvasElement | null>(null)
const isVisible = ref(false)

let observer: IntersectionObserver
let animFrame = 0

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) isVisible.value = true },
    { threshold: 0.15 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
  initSnow()
})

onUnmounted(() => {
  observer?.disconnect()
  cancelAnimationFrame(animFrame)
})

interface Flake { x: number; y: number; r: number; speed: number; drift: number; opacity: number }

function initSnow() {
  const canvas = snowCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')!
  let W = 0, H = 0
  const flakes: Flake[] = []

  function resize() {
    W = canvas.offsetWidth
    H = canvas.offsetHeight
    canvas.width = W
    canvas.height = H
  }

  function spawn(): Flake {
    return {
      x: Math.random() * W,
      y: -10,
      r: Math.random() * 2.5 + 1,
      speed: Math.random() * 1.2 + 0.4,
      drift: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.2,
    }
  }

  resize()
  for (let i = 0; i < 60; i++) {
    const f = spawn()
    f.y = Math.random() * H
    flakes.push(f)
  }

  window.addEventListener('resize', resize)

  function draw() {
    ctx.clearRect(0, 0, W, H)
    if (Math.random() < 0.4) flakes.push(spawn())
    for (let i = flakes.length - 1; i >= 0; i--) {
      const f = flakes[i]
      f.y += f.speed
      f.x += f.drift
      if (f.y > H + 10) { flakes.splice(i, 1); continue }
      ctx.beginPath()
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${f.opacity})`
      ctx.fill()
    }
    animFrame = requestAnimationFrame(draw)
  }
  draw()
}
</script>

<style scoped>
.seo-section {
  position: relative;
  overflow: hidden;
  padding: 5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 520px;
}

.seo-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, rgba(10,20,40,0.6) 0%, rgba(8,30,55,0.72) 60%, rgba(5,15,30,0.88) 100%),
    url('/images/hero.png') center / cover no-repeat;
  z-index: 0;
}

.snow-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.seo-inner {
  position: relative;
  z-index: 2;
  max-width: 640px;
  width: 100%;
  text-align: center;
}

.seo-eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1.5rem;
}
.eyebrow-line {
  display: block;
  height: 1px;
  width: 36px;
  background: rgba(255,255,255,0.3);
}
.eyebrow-text {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
}

.seo-title {
  font-size: clamp(1.5rem, 5vw, 2.4rem);
  font-weight: 700;
  line-height: 1.25;
  color: #fff;
  margin: 0 0 0.75rem;
  letter-spacing: -0.01em;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.seo-title.visible { opacity: 1; transform: translateY(0); }
.seo-title em {
  font-style: italic;
  font-weight: 300;
  color: rgba(180,210,255,0.85);
}

.seo-divider {
  width: 32px;
  height: 1px;
  background: rgba(255,255,255,0.2);
  margin: 1.25rem auto 1.75rem;
  opacity: 0;
  transition: opacity 0.6s ease 0.15s;
}
.seo-divider.visible { opacity: 1; }

.seo-body {
  font-size: 0.93rem;
  line-height: 1.8;
  color: rgba(255,255,255,0.68);
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s;
}
.seo-body.visible { opacity: 1; transform: translateY(0); }
.seo-body p { margin: 0 0 0.75rem; }
.seo-body p:last-child { margin: 0; }
.seo-body strong { color: rgba(255,255,255,0.95); font-weight: 600; }

.seo-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  justify-content: center;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s;
}
.seo-tags.visible { opacity: 1; transform: translateY(0); }
.seo-tags span {
  font-size: 0.68rem;
  padding: 0.28rem 0.85rem;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 999px;
  color: rgba(255,255,255,0.55);
  background: rgba(255,255,255,0.05);
  letter-spacing: 0.04em;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.seo-tags span:hover {
  background: rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.9);
  border-color: rgba(255,255,255,0.35);
}

@media (max-width: 480px) {
  .seo-section { padding: 4rem 1rem; min-height: 460px; }
}
</style>