<template>
  <div class="dv-page" ref="pageRef">

    <div class="dv-section-num" :class="{ visible: inView }">05</div>

    <!-- HERO -->
    <section class="dv-hero" :class="{ visible: inView }">
      <div class="dv-hero__inner">
        <span class="dv-label">Política de la tienda</span>
        <h1 class="dv-hero__title">
          Sin<br>
          <em>devoluciones.</em>
        </h1>
        <div class="dv-hero__rule">
          <span /><em>✦</em><span />
        </div>
        <p class="dv-hero__sub">Ropa americana &amp; piezas vintage · Villarrica, Chile</p>
      </div>

      <!-- IMAGEN 1 — entra desde la derecha al hacer scroll -->
      <div class="dv-hero__img-wrap" :class="{ visible: inView }">
        <img
          src="/images/imagenesig/1.png"
          alt="Oliver Vintage"
          class="dv-hero__img"
        />
        <div class="dv-hero__img-frame" />
      </div>
    </section>

    <!-- BODY -->
    <section class="dv-body">
      <div class="dv-body__grid">

        <!-- IZQUIERDA -->
        <div class="dv-left" :class="{ visible: inView }">

          <!-- Card polaroid: política -->
          <div class="dv-card">
            <div class="dv-card__tape" />
            <div class="dv-card__icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.3" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <span class="dv-card__eyebrow">Nuestra política oficial</span>
            <p class="dv-card__statement">
              Oliver Vintage <strong>no acepta devoluciones ni cambios</strong> en ninguna de sus prendas.
            </p>
            <p class="dv-card__legal">
              Respaldado por la <em>Ley N° 19.496 de Protección al Consumidor</em> de Chile,
              que excluye la ropa usada del derecho a retracto, ya que su naturaleza
              impide garantizar las condiciones originales tras la entrega.
            </p>
          </div>

          <!-- Post-it: dirección -->
          <div class="dv-postit" :class="{ visible: inView }">
            <div class="dv-postit__tape" />
            <div class="dv-postit__lines" />
            <div class="dv-postit__header">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              <span>¿Consultas? Visítanos</span>
            </div>
            <p class="dv-postit__address">
              Pedro Montt 635<br>
              Villarrica, La Araucanía
            </p>
            <a
              href="https://www.google.com/maps/place/Oliver+Vintage/@-39.2837022,-72.2277588,21z"
              target="_blank"
              rel="noopener noreferrer"
              class="dv-postit__link"
            >
              Ver en Google Maps
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </a>
          </div>

          <!-- IMAGEN 2 — grande, ocupa el espacio vacío de la columna izquierda -->
          <div class="dv-img2-wrap" :class="{ visible: inView }">
            <img
              src="/images/imagenesig/2.png"
              alt="Oliver Vintage prendas"
              class="dv-img2"
            />
            <div class="dv-img2__badge">
              <span>♻</span>
              Consumo<br>consciente
            </div>
            <div class="dv-img2__frame" />
          </div>

        </div>

        <!-- DERECHA -->
        <div class="dv-right" :class="{ visible: inView }">

          <span class="dv-label">¿Por qué esta política?</span>
          <h2 class="dv-right__title">
            Cada pieza<br>
            <em>es irrepetible.</em>
          </h2>

          <div class="dv-reasons">
            <div
              class="dv-reason"
              v-for="(r, i) in reasons"
              :key="i"
              :class="{ visible: inView }"
              :style="{ transitionDelay: `${0.5 + i * 0.15}s` }"
            >
              <div class="dv-reason__num">0{{ i + 1 }}</div>
              <div>
                <strong>{{ r.title }}</strong>
                <p>{{ r.desc }}</p>
              </div>
            </div>
          </div>

          <div class="dv-rule">
            <span /><em>♻</em><span />
          </div>

          <div class="dv-wedo-wrap">
            <div class="dv-wedo">
              <div class="dv-wedo__tag">Lo que sí hacemos por ti</div>
              <ul>
                <li
                  v-for="(item, i) in wedo"
                  :key="i"
                  :class="{ visible: inView }"
                  :style="{ transitionDelay: `${0.9 + i * 0.1}s` }"
                >
                  <div class="dv-check">
                    <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <NuxtLink to="/contacto" class="dv-cta" :class="{ visible: inView }">
            ¿Dudas antes de comprar? Escríbenos
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M2 7h10M8 3l4 4-4 4"/>
            </svg>
          </NuxtLink>

        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <HomeFooter />

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const pageRef = ref<HTMLElement | null>(null)
const inView  = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) inView.value = true },
    { threshold: 0.04 }
  )
  if (pageRef.value) observer.observe(pageRef.value)
})
onUnmounted(() => observer?.disconnect())

const reasons = [
  { title: 'Prendas únicas', desc: 'Cada pieza es irrepetible. Una vez vendida, no podemos garantizar que vuelva en las mismas condiciones.' },
  { title: 'Higiene y cuidado', desc: 'La ropa usada requiere condiciones especiales. Por higiene no podemos aceptar prendas de vuelta.' },
  { title: 'Consumo consciente', desc: 'La moda circular funciona cuando cada compra es una decisión real. Elige con cuidado.' }
]

const wedo = [
  'Describimos cada prenda con medidas reales y estado detallado',
  'Respondemos todas tus dudas antes de confirmar la compra',
  'Puedes visitarnos y probarte las prendas en tienda',
  'Si hay un error de nuestra parte, lo resolvemos directamente'
]

useHead({
  title: 'Devoluciones — Oliver Vintage',
  meta: [{ name: 'description', content: 'Política de devoluciones de Oliver Vintage. Ropa americana y vintage en Villarrica, Chile.' }]
})
</script>

<style scoped>
.dv-page {
  --ink:      #2d3a2b;
  --ink-dim:  rgba(45, 58, 43, 0.65);
  --terra:    #c06e52;
  --terra-s:  rgba(192, 110, 82, 0.10);
  --bg:       #f5f0e8;
  --paper:    #ffffff;
  --postit:   #fff9e6;
  --shadow:   rgba(45, 58, 43, 0.11);

  position: relative;
  background: var(--bg);
  color: var(--ink);
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
  min-height: 100vh;
}

.dv-page::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, var(--terra) 30%, var(--terra) 70%, transparent 100%);
  opacity: 0.4;
}

.dv-page::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 50% at 80% 15%, rgba(192,110,82,0.06) 0%, transparent 55%),
    radial-gradient(ellipse 50% 40% at 15% 85%, rgba(45,58,43,0.04) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

/* Número editorial */
.dv-section-num {
  position: absolute;
  top: -0.1em; right: -0.02em;
  font-family: 'Playfair Display', serif;
  font-size: clamp(10rem, 22vw, 18rem);
  font-weight: 700;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(45, 58, 43, 0.04);
  user-select: none;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transform: translateX(30px);
  transition: opacity 1.2s ease 0.1s, transform 1.2s ease 0.1s;
}
.dv-section-num.visible { opacity: 1; transform: translateX(0); }

/* Label */
.dv-label {
  display: inline-block;
  font-size: 0.68rem;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: var(--terra);
  margin-bottom: 1.4rem;
  padding-left: 2rem;
  position: relative;
}
.dv-label::before {
  content: '';
  position: absolute;
  left: 0; top: 50%;
  width: 1.3rem; height: 1px;
  background: var(--terra);
}

/* ══════════════
   HERO
   ══════════════ */
.dv-hero {
  position: relative;
  z-index: 1;
  padding: 7rem 2rem 3.5rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 1s ease 0.1s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.1s;
}
.dv-hero.visible { opacity: 1; transform: translateY(0); }
.dv-hero__inner { max-width: 520px; flex-shrink: 0; }

.dv-hero__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 400;
  line-height: 1.0;
  letter-spacing: -0.015em;
  color: var(--ink);
  margin: 0 0 1.75rem;
}
.dv-hero__title em {
  font-style: italic;
  font-weight: 300;
  color: var(--terra);
}

.dv-hero__rule {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.1rem;
  max-width: 260px;
}
.dv-hero__rule span { flex: 1; height: 1px; background: rgba(45,58,43,0.14); }
.dv-hero__rule em { font-style: normal; font-size: 0.7rem; color: var(--terra); opacity: 0.65; }

.dv-hero__sub {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-dim);
}

/* IMAGEN 1 — hero derecha */
.dv-hero__img-wrap {
  position: relative;
  flex-shrink: 0;
  width: clamp(220px, 30vw, 380px);

  /* Estado inicial: invisible + desplazada a la derecha */
  opacity: 0;
  transform: translateX(60px) rotate(2.5deg);
  transition:
    opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.55s,
    transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.55s;
}
.dv-hero__img-wrap.visible {
  opacity: 1;
  transform: translateX(0) rotate(1.2deg);
}
.dv-hero__img-wrap:hover {
  transform: translateX(0) rotate(0deg) scale(1.02) !important;
  transition-delay: 0s !important;
  transition-duration: 0.4s !important;
}

.dv-hero__img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 4px;
  display: block;
  box-shadow:
    0 4px 12px rgba(0,0,0,0.06),
    0 24px 48px -10px rgba(45,58,43,0.18);
}

/* Marco decorativo detrás de la imagen */
.dv-hero__img-frame {
  position: absolute;
  inset: -10px -10px -14px 10px;
  border: 1.5px solid rgba(192,110,82,0.25);
  border-radius: 4px;
  z-index: -1;
  pointer-events: none;
}

/* ══════════════
   BODY
   ══════════════ */
.dv-body {
  position: relative;
  z-index: 1;
  padding: 0 2rem 7rem;
  max-width: 1200px;
  margin: 0 auto;
}
.dv-body__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* Columna izquierda */
.dv-left {
  opacity: 0;
  transform: translateX(-32px);
  transition: opacity 0.95s ease 0.25s, transform 0.95s cubic-bezier(0.22,1,0.36,1) 0.25s;
}
.dv-left.visible { opacity: 1; transform: translateX(0); }

/* Card polaroid */
.dv-card {
  position: relative;
  background: var(--paper);
  padding: 12px 12px 2.2rem;
  border-radius: 3px;
  box-shadow:
    0 2px 4px rgba(0,0,0,0.04),
    0 18px 38px -8px var(--shadow),
    inset 0 1px 0 rgba(255,255,255,0.9);
  border: 1px solid rgba(45,58,43,0.06);
  transform: rotate(-1.2deg);
  margin-bottom: 1.75rem;
  transition: transform 0.4s cubic-bezier(0.34,1.3,0.64,1),
              box-shadow 0.4s ease;
}
.dv-card:hover {
  transform: rotate(0deg) scale(1.015) translateY(-5px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.06), 0 28px 50px -10px var(--shadow);
}

.dv-card__tape {
  position: absolute;
  top: -10px; left: 50%;
  transform: translateX(-50%) rotate(-1.5deg);
  width: 52px; height: 19px;
  background: rgba(255,228,130,0.72);
  border-radius: 1px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.07);
}

.dv-card__icon {
  width: 42px; height: 42px;
  background: var(--terra-s);
  border-radius: 0.65rem;
  display: flex; align-items: center; justify-content: center;
  color: var(--terra);
  margin: 0 0 1rem;
}

.dv-card__eyebrow {
  display: block;
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(45,58,43,0.35);
  margin-bottom: 0.85rem;
}

.dv-card__statement {
  font-family: 'Playfair Display', serif;
  font-size: 1.12rem;
  font-style: italic;
  line-height: 1.55;
  color: var(--ink);
  margin-bottom: 1rem;
}
.dv-card__statement strong { color: var(--terra); font-style: normal; font-weight: 700; }

.dv-card__legal {
  font-size: 0.78rem;
  line-height: 1.88;
  color: var(--ink-dim);
  border-top: 1px solid rgba(45,58,43,0.07);
  padding-top: 0.9rem;
}
.dv-card__legal em { color: var(--ink); }

/* Post-it dirección */
.dv-postit {
  position: relative;
  background: var(--postit);
  padding: 1.4rem 1.4rem 1.9rem;
  border-radius: 2px;
  box-shadow: 0 3px 7px rgba(0,0,0,0.06), 0 14px 26px -8px var(--shadow);
  border-left: 2px solid #ffe87a;
  transform: rotate(1.3deg);
  opacity: 0;
  transition: opacity 0.8s ease 0.65s, transform 0.4s cubic-bezier(0.34,1.3,0.64,1);
}
.dv-postit.visible { opacity: 1; }
.dv-postit:hover { transform: rotate(0.2deg) scale(1.015); }

.dv-postit__tape {
  position: absolute;
  top: -8px; left: 18px;
  width: 36px; height: 13px;
  background: rgba(255,228,130,0.8);
  border-radius: 1px;
  transform: rotate(-2.5deg);
}

.dv-postit__lines {
  position: absolute;
  bottom: 10px; left: 1.4rem; right: 1.4rem;
  height: 12px;
  background: repeating-linear-gradient(
    transparent, transparent 3px,
    rgba(192,110,82,0.07) 3px, rgba(192,110,82,0.07) 6px
  );
  pointer-events: none;
}

.dv-postit__header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink);
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px dashed rgba(192,110,82,0.22);
}
.dv-postit__header svg { color: var(--terra); flex-shrink: 0; }

.dv-postit__address {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--ink);
  margin: 0 0 1.1rem;
  font-style: italic;
}

.dv-postit__link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--terra);
  text-decoration: none;
  padding: 0.45rem 1rem;
  border: 1px solid rgba(192,110,82,0.3);
  border-radius: 2rem;
  transition: all 0.25s ease;
}
.dv-postit__link:hover {
  background: var(--terra);
  border-color: var(--terra);
  color: white;
  gap: 0.65rem;
}

/* Columna derecha */
.dv-right {
  opacity: 0;
  transform: translateX(38px);
  transition: opacity 0.95s ease 0.4s, transform 0.95s cubic-bezier(0.22,1,0.36,1) 0.4s;
}
.dv-right.visible { opacity: 1; transform: translateX(0); }

.dv-right__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.9rem, 3.2vw, 2.7rem);
  font-weight: 400;
  line-height: 1.1;
  color: var(--ink);
  margin: 0 0 2rem;
}
.dv-right__title em { font-style: italic; font-weight: 300; color: var(--terra); }

/* Razones */
.dv-reasons { display: flex; flex-direction: column; }
.dv-reason {
  display: flex;
  gap: 1.4rem;
  padding: 1.4rem 0;
  border-bottom: 1px solid rgba(45,58,43,0.08);
  align-items: flex-start;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1);
}
.dv-reason:first-child { border-top: 1px solid rgba(45,58,43,0.08); }
.dv-reason.visible { opacity: 1; transform: translateY(0); }

.dv-reason__num {
  font-family: 'Courier New', monospace;
  font-size: 0.6rem;
  color: rgba(192,110,82,0.45);
  letter-spacing: 0.1em;
  flex-shrink: 0;
  padding-top: 0.1rem;
}
.dv-reason strong {
  display: block;
  font-size: 0.88rem;
  color: var(--ink);
  margin-bottom: 0.28rem;
  font-weight: 600;
}
.dv-reason p {
  font-size: 0.79rem;
  line-height: 1.78;
  color: var(--ink-dim);
  margin: 0;
}

/* Divider */
.dv-rule {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 1.8rem 0;
}
.dv-rule span { flex: 1; height: 1px; background: rgba(45,58,43,0.1); }
.dv-rule em { font-style: normal; font-size: 0.72rem; color: var(--terra); opacity: 0.55; }

/* ══════════════════════
   IMAGEN 2 — columna izquierda, grande
   ══════════════════════ */
.dv-img2-wrap {
  position: relative;
  width: 100%;
  margin-top: 2rem;

  /* Estado inicial: invisible + sube desde abajo con leve inclinación */
  opacity: 0;
  transform: translateY(50px) rotate(-1.5deg);
  transition:
    opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.7s,
    transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.7s;
}
.dv-img2-wrap.visible {
  opacity: 1;
  transform: translateY(0) rotate(-0.8deg);
}
.dv-img2-wrap:hover {
  transform: translateY(-6px) rotate(0deg) scale(1.015) !important;
  transition-delay: 0s !important;
  transition-duration: 0.45s !important;
}

.dv-img2 {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  border-radius: 4px;
  display: block;
  box-shadow:
    0 4px 14px rgba(0,0,0,0.07),
    0 28px 56px -12px rgba(45,58,43,0.18);
}

/* Badge sobre la imagen */
.dv-img2__badge {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: var(--terra);
  color: white;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1.4;
  padding: 0.6rem 0.9rem;
  border-radius: 4px;
  box-shadow: 0 6px 18px rgba(192,110,82,0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  text-align: center;
  backdrop-filter: blur(4px);
}
.dv-img2__badge span { font-size: 1.1rem; }

/* Marco decorativo detrás */
.dv-img2__frame {
  position: absolute;
  inset: 10px -10px -14px 10px;
  border: 1.5px solid rgba(192,110,82,0.2);
  border-radius: 4px;
  z-index: -1;
  pointer-events: none;
}

/* ══════════════════════
   WEDO WRAP (sin imagen, solo lista)
   ══════════════════════ */
.dv-wedo-wrap {
  /* ya no es flex, la imagen está en la otra columna */
}

.dv-wedo__tag {
  display: inline-block;
  font-size: 0.6rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--terra);
  border: 1px solid rgba(192,110,82,0.28);
  padding: 0.32rem 0.75rem;
  border-radius: 2rem;
  margin-bottom: 1.1rem;
}

.dv-wedo ul { list-style: none; padding: 0; margin: 0; }
.dv-wedo li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.81rem;
  color: var(--ink-dim);
  padding: 0.82rem 0;
  border-bottom: 1px solid rgba(45,58,43,0.06);
  opacity: 0;
  transform: translateX(12px);
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1), color 0.25s ease;
}
.dv-wedo li:first-child { border-top: 1px solid rgba(45,58,43,0.06); }
.dv-wedo li.visible { opacity: 1; transform: translateX(0); }
.dv-wedo li:hover { color: var(--ink); }

.dv-check {
  width: 21px; height: 21px;
  border-radius: 50%;
  background: var(--terra-s);
  border: 1px solid rgba(192,110,82,0.22);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  color: var(--terra);
}

/* CTA */
.dv-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.71rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink);
  padding-bottom: 0.38rem;
  border-bottom: 1px solid rgba(45,58,43,0.22);
  margin-top: 2rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.7s ease 1.4s, transform 0.7s ease 1.4s,
              color 0.25s ease, border-color 0.25s ease, gap 0.25s ease;
}
.dv-cta.visible { opacity: 1; transform: translateY(0); }
.dv-cta:hover { color: var(--terra); border-color: var(--terra); gap: 1.1rem; }

/* ══════════════════
   RESPONSIVE MOBILE
   ══════════════════ */
@media (max-width: 860px) {
  .dv-hero {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
  .dv-hero__img-wrap {
    width: min(320px, 70vw);
    align-self: center;
  }

  .dv-body__grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .dv-left {
    transform: translateY(22px);
    transition-property: opacity, transform;
  }
  .dv-right {
    transform: translateY(22px);
    transition-delay: 0.1s;
  }
  .dv-left.visible, .dv-right.visible { transform: translateY(0); }
}

@media (max-width: 640px) {
  .dv-hero { padding: 5.5rem 1.25rem 2.5rem; }
  .dv-body  { padding: 0 1.25rem 5rem; }

  .dv-hero__title { font-size: clamp(2.5rem, 12vw, 3.5rem); }

  .dv-card {
    transform: rotate(0);
    padding: 12px 12px 1.75rem;
  }
  .dv-card:hover { transform: scale(1.01) translateY(-3px); }

  .dv-postit { transform: rotate(0); }
  .dv-postit:hover { transform: scale(1.01); }

  .dv-card__statement { font-size: 1rem; }
  .dv-right__title    { font-size: clamp(1.7rem, 8vw, 2.2rem); }

  .dv-reason { gap: 1rem; padding: 1.1rem 0; }
  .dv-wedo li { font-size: 0.79rem; }

  /* Imagen 2 en móvil — sin rotación */
  .dv-img2-wrap.visible { transform: translateY(0) rotate(0deg); }
  .dv-img2 { aspect-ratio: 3/2; }
}

@media (max-width: 380px) {
  .dv-hero__title { font-size: 2.2rem; }
  .dv-postit__address { font-size: 0.92rem; }
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .dv-hero, .dv-left, .dv-right, .dv-section-num,
  .dv-card, .dv-postit, .dv-reason, .dv-wedo li, .dv-cta,
  .dv-hero__img-wrap, .dv-img2-wrap {
    transition: opacity 0.3s ease !important;
    transform: none !important;
    animation: none !important;
  }
}
</style>