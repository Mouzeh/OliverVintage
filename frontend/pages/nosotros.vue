<template>
  <div class="ns-page" ref="pageRef">

    <!-- Grain overlay -->
    <div class="ns-grain" aria-hidden="true" />

    <!-- Número editorial flotante -->
    <div class="ns-section-num" :class="{ visible: inView }" aria-hidden="true">02</div>

    <!-- ░░░ HERO ░░░ -->
    <section class="ns-hero" :class="{ visible: inView }">
      <div class="ns-hero__inner">
        <span class="ns-label">Nuestra historia · Villarrica, Araucanía</span>

        <h1 class="ns-hero__title">
          <span class="ns-hero__title-line ns-hero__title-line--1">Somos</span>
          <em class="ns-hero__title-line ns-hero__title-line--2">Oliver Vintage.</em>
        </h1>

        <div class="ns-hero__rule"><span /><em>✦</em><span /></div>

        <p class="ns-hero__sub">
          Ropa americana · Ropa vintage · Moda circular<br>
          <strong>Villarrica, Araucanía — Chile</strong>
        </p>

        <!-- Pills SEO visibles -->
        <div class="ns-pills">
          <span v-for="pill in pills" :key="pill" class="ns-pill">{{ pill }}</span>
        </div>
      </div>

      <!-- Imagen hero -->
      <div class="ns-hero__img-wrap" :class="{ visible: inView }">
        <div class="ns-hero__img-inner">
          <NuxtImg
          src="/images/imagenesig/1.png"
          alt="Oliver Vintage — tienda de ropa americana y vintage en Villarrica, Araucanía"
          class="ns-hero__img"
          preset="hero"
          loading="eager"
          fetchpriority="high"
        />
          <div class="ns-hero__img-shine" aria-hidden="true" />
        </div>
        <div class="ns-hero__img-frame" aria-hidden="true" />
        <div class="ns-hero__img-badge">
          <span aria-hidden="true">✦</span>
          5 años<br>en Villarrica
        </div>
        <div class="ns-hero__img-tag">
          <span aria-hidden="true">♻</span>
          Moda circular
        </div>
      </div>
    </section>

    <!-- ░░░ MARQUEE KEYWORDS ░░░ -->
    <div class="ns-marquee" aria-hidden="true">
      <div class="ns-marquee__track">
        <span v-for="(kw, i) in [...keywords, ...keywords]" :key="i" class="ns-marquee__item">
          {{ kw }} <em>✦</em>
        </span>
      </div>
    </div>

    <!-- ░░░ HISTORIA — TIMELINE ░░░ -->
    <section class="ns-timeline-section">
      <div class="ns-timeline-wrap">
        <div class="ns-timeline-header" :class="{ visible: inView }">
          <span class="ns-label">26 años de historia</span>
          <h2 class="ns-timeline__title">
            De Boutique Oliver<br>
            <em>a Oliver Vintage.</em>
          </h2>
          <p class="ns-timeline__intro">
            Todo empezó con un sueño pequeño en Villarrica. Un matrimonio,
            mucha pasión por la ropa con historia y las ganas de hacer las cosas bien.
            Hoy somos el referente de ropa americana, ropa vintage y moda circular
            en la Araucanía.
          </p>
        </div>

        <div class="ns-timeline">
          <div
            class="ns-timeline__item"
            v-for="(step, i) in timeline"
            :key="i"
            :class="{ visible: inView }"
            :style="{ transitionDelay: `${0.2 + i * 0.2}s` }"
          >
            <div class="ns-timeline__left">
              <div class="ns-timeline__dot-wrap">
                <div class="ns-timeline__dot" />
                <div class="ns-timeline__dot-ring" />
              </div>
              <div class="ns-timeline__connector" v-if="i < timeline.length - 1" />
            </div>
            <div class="ns-timeline__body">
              <span class="ns-timeline__tag">{{ step.tag }}</span>
              <strong class="ns-timeline__event">{{ step.event }}</strong>
              <p class="ns-timeline__desc">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░░ BODY GRID ░░░ -->
    <section class="ns-body">
      <div class="ns-body__grid">

        <!-- ── IZQUIERDA ── -->
        <div class="ns-left" :class="{ visible: inView }">

          <!-- Card matrimonio -->
          <article class="ns-card">
            <div class="ns-card__tape" aria-hidden="true" />
            <div class="ns-card__icon" aria-hidden="true">
              <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.4" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <span class="ns-card__eyebrow">Quiénes somos</span>
            <p class="ns-card__statement">
              Un matrimonio con <strong>pasión por lo auténtico</strong> y amor por la ropa con historia.
            </p>
            <p class="ns-card__body">
              Oliver Vintage nació del deseo de darle una segunda vida a prendas únicas.
              Somos un matrimonio que selecciona cada pieza a mano, buscando la calidad
              y el carácter que solo la ropa americana y el vintage tienen.
              Empezamos siendo <em>Boutique Oliver</em> — un local chiquitito al frente del correo
              de Villarrica — y fuimos creciendo junto a nuestra comunidad.
              Hoy somos <strong>Oliver Vintage</strong>, el espacio de ropa vintage y moda circular
              que siempre quisimos construir en la Araucanía.
            </p>
          </article>

          <!-- Post-it valores -->
          <div class="ns-postit" :class="{ visible: inView }">
            <div class="ns-postit__tape" aria-hidden="true" />
            <div class="ns-postit__lines" aria-hidden="true" />
            <div class="ns-postit__header">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>Nuestros valores</span>
            </div>
            <ul class="ns-postit__values">
              <li v-for="(v, i) in valores" :key="i">
                <span class="ns-postit__dot" aria-hidden="true" />
                {{ v }}
              </li>
            </ul>
          </div>

          <!-- Imagen 2 -->
          <div class="ns-img2-wrap" :class="{ visible: inView }">
            <NuxtImg
            src="/images/imagenesig/2.png"
            alt="Ropa americana y vintage en Oliver Vintage Villarrica — moda circular Araucanía"
            class="ns-img2"
            preset="product"
            loading="lazy"
          />
            <div class="ns-img2__overlay" aria-hidden="true" />
            <div class="ns-img2__badge">
              <span aria-hidden="true">♻</span>
              Moda circular
            </div>
            <div class="ns-img2__frame" aria-hidden="true" />
          </div>

        </div>

        <!-- ── DERECHA ── -->
        <div class="ns-right" :class="{ visible: inView }">

          <span class="ns-label">Lo que nos mueve</span>
          <h2 class="ns-right__title">
            Cada prenda<br>
            <em>tiene alma.</em>
          </h2>

          <!-- Stats -->
          <div class="ns-stats">
            <div
              class="ns-stat"
              v-for="(s, i) in stats"
              :key="i"
              :class="{ visible: inView }"
              :style="{ transitionDelay: `${0.3 + i * 0.15}s` }"
            >
              <span class="ns-stat__num">{{ s.num }}</span>
              <span class="ns-stat__label">{{ s.label }}</span>
            </div>
          </div>

          <!-- Pilares -->
          <div class="ns-pillars">
            <div
              class="ns-pillar"
              v-for="(p, i) in pillars_content"
              :key="i"
              :class="{ visible: inView }"
              :style="{ transitionDelay: `${0.55 + i * 0.16}s` }"
            >
              <div class="ns-pillar__num">0{{ i + 1 }}</div>
              <div>
                <strong>{{ p.title }}</strong>
                <p>{{ p.desc }}</p>
              </div>
            </div>
          </div>

          <div class="ns-rule"><span /><em>✦</em><span /></div>

          <!-- Datos -->
          <div class="ns-data-wrap">
            <div class="ns-data__tag">Encuéntranos en Villarrica</div>
            <ul class="ns-data__list">
              <li
                v-for="(item, i) in datos"
                :key="i"
                :class="{ visible: inView }"
                :style="{ transitionDelay: `${0.95 + i * 0.1}s` }"
              >
                <div class="ns-check" v-html="item.icon" />
                <div>
                  <span class="ns-data__label">{{ item.label }}</span>
                  <a
                    v-if="item.href"
                    :href="item.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="ns-data__val ns-data__val--link"
                  >{{ item.val }}</a>
                  <span v-else class="ns-data__val">{{ item.val }}</span>
                </div>
              </li>
            </ul>
          </div>

          <NuxtLink to="/contacto" class="ns-cta" :class="{ visible: inView }">
            Escríbenos
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4"/>
            </svg>
          </NuxtLink>

        </div>
      </div>
    </section>

    <!-- ░░░ CIERRE EMOCIONAL ░░░ -->
    <section class="ns-closing" :class="{ visible: inView }">
      <div class="ns-closing__bg" aria-hidden="true" />
      <div class="ns-closing__inner">
        <div class="ns-closing__rule"><span /><em>✦</em><span /></div>
        <blockquote class="ns-closing__quote">
          "Empezamos siendo <em>Boutique Oliver</em>, un local chiquitito al frente del correo.<br>
          Hoy somos <em>Oliver Vintage</em> — y seguimos siendo los mismos."
        </blockquote>
        <p class="ns-closing__sub">
          Oliver Vintage · Ropa americana · Ropa vintage · Moda circular<br>
          Pedro Montt 635, Villarrica, Araucanía · Chile
        </p>
      </div>
    </section>

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
    { threshold: 0.02 }
  )
  if (pageRef.value) observer.observe(pageRef.value)
})
onUnmounted(() => observer?.disconnect())

const pills = [
  'Ropa americana', 'Vintage', 'Moda circular', 'Villarrica', 'Araucanía',
]

const keywords = [
  'Ropa americana', 'Ropa vintage', 'Moda circular', 'Oliver Vintage',
  'Villarrica', 'Araucanía', 'Segunda vida', 'Prendas únicas',
]

const timeline = [
  {
    tag: 'El origen',
    event: 'Boutique Oliver — el local chiquitito al frente del correo',
    desc: 'Todo comenzó con pocas prendas seleccionadas a mano, mucha pasión y un espacio pequeño frente al correo de Villarrica. Era el primer paso de algo mucho más grande.'
  },
  {
    tag: 'Creciendo',
    event: 'De Boutique Oliver a Oliver Vintage',
    desc: 'Pieza a pieza, cliente a cliente. El local fue creciendo en espacio, en identidad y en comunidad. La ropa americana y el estilo vintage encontraron su lugar en la Araucanía.'
  },
  {
    tag: 'Hoy · 5 años',
    event: 'Oliver Vintage — referente de ropa americana y moda circular',
    desc: 'Cinco años después somos el referente de ropa vintage, ropa americana y moda circular en Villarrica y toda la Araucanía. Seguimos siendo un matrimonio que selecciona cada pieza con el mismo amor del primer día.'
  },
]

const valores = [
  'Autenticidad en cada prenda',
  'Selección artesanal a mano',
  'Moda circular y consumo consciente',
  'Trato cercano, honesto y familiar',
]

const stats = [
  { num: '5+', label: 'años en Villarrica' },
  { num: '100%', label: 'selección a mano' },
  { num: '♻', label: 'moda circular' },
]

const pillars_content = [
  {
    title: 'Ropa americana auténtica en Villarrica',
    desc: 'Denim, flannels, bombers y piezas clásicas americanas que llegan a Villarrica con toda su historia. Cada prenda pasa por nuestras manos antes de llegar a las tuyas.'
  },
  {
    title: 'Ropa vintage con carácter propio',
    desc: 'La ropa vintage no es moda retro: es cultura, es memoria. En Oliver Vintage encontrarás prendas únicas e irrepetibles para quienes buscan diferenciarse.'
  },
  {
    title: 'Moda circular desde la Araucanía',
    desc: 'Creemos que la mejor ropa ya fue hecha. Darle una segunda vida a prendas únicas es nuestra forma de hacer moda consciente desde Villarrica para todo Chile.'
  },
]

const datos = [
  {
    label: 'Dirección · Villarrica',
    val: 'Pedro Montt 635, Villarrica',
    href: 'https://www.google.com/maps/place/Oliver+Vintage/@-39.2837022,-72.2277588,21z',
    icon: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`
  },
  {
    label: 'Horario de atención',
    val: 'Lun–Vie 10:00–19:00 · Sáb 10:00–14:00',
    href: null,
    icon: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
  },
  {
    label: 'Instagram',
    val: '@olivervintage.cl',
    href: 'https://instagram.com/olivervintage.cl',
    icon: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>`
  },
  {
    label: 'WhatsApp',
    val: '+56 9 20306235',
    href: 'https://wa.me/56920306235',
    icon: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`
  },
]

useHead({
  title: 'Nosotros — Oliver Vintage | Ropa Americana y Vintage en Villarrica, Araucanía',
  meta: [
    {
      name: 'description',
      content: 'Oliver Vintage: tienda de ropa americana, ropa vintage y moda circular en Villarrica, Araucanía. 5 años seleccionando piezas únicas a mano. Visítanos en Pedro Montt 635.'
    },
    {
      name: 'keywords',
      content: 'Oliver Vintage, ropa americana Villarrica, ropa vintage Araucanía, moda circular Villarrica, tienda vintage Villarrica Chile, ropa americana Araucanía, segunda mano Villarrica, boutique vintage Villarrica'
    },
    { property: 'og:title', content: 'Oliver Vintage — Ropa Americana y Vintage en Villarrica, Araucanía' },
    { property: 'og:description', content: '26 años de historia, ropa americana auténtica y moda circular en el corazón de Villarrica, Araucanía.' },
    { property: 'og:type', content: 'website' },
    { name: 'robots', content: 'index, follow' },
  ],
  link: [
    { rel: 'canonical', href: 'https://olivervintage.cl/nosotros' }
  ]
})
</script>

<style scoped>
/* ════════════ TOKENS ════════════ */
.ns-page {
  --ink:        #2d3a2b;
  --ink-dim:    rgba(45, 58, 43, 0.62);
  --ink-ghost:  rgba(45, 58, 43, 0.12);
  --terra:      #c06e52;
  --terra-mid:  rgba(192, 110, 82, 0.18);
  --terra-s:    rgba(192, 110, 82, 0.09);
  --bg:         #f5f0e8;
  --bg2:        #ede8df;
  --paper:      #ffffff;
  --postit:     #fff9e6;
  --shadow:     rgba(45, 58, 43, 0.10);
  --shadow-md:  rgba(45, 58, 43, 0.18);

  position: relative;
  background: var(--bg);
  color: var(--ink);
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
  min-height: 100vh;
}

.ns-page::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--terra) 25%, var(--terra) 75%, transparent);
  opacity: 0.45;
  z-index: 10;
}

.ns-page::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 65% 45% at 85% 10%, rgba(192,110,82,0.07) 0%, transparent 55%),
    radial-gradient(ellipse 50% 40% at 10% 90%, rgba(45,58,43,0.04) 0%, transparent 50%),
    radial-gradient(ellipse 40% 30% at 50% 55%, rgba(192,110,82,0.03) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
}

/* Grain */
.ns-grain {
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
  opacity: 0.35;
}

/* Número editorial */
.ns-section-num {
  position: absolute;
  top: -0.08em; right: -0.02em;
  font-family: 'Playfair Display', serif;
  font-size: clamp(9rem, 20vw, 17rem);
  font-weight: 700;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(45, 58, 43, 0.045);
  user-select: none;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 1.4s ease 0.1s, transform 1.4s cubic-bezier(0.22,1,0.36,1) 0.1s;
}
.ns-section-num.visible { opacity: 1; transform: translateX(0); }

/* Label */
.ns-label {
  display: inline-block;
  font-size: 0.62rem;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: var(--terra);
  margin-bottom: 1.3rem;
  padding-left: 2rem;
  position: relative;
}
.ns-label::before {
  content: '';
  position: absolute;
  left: 0; top: 50%;
  width: 1.3rem; height: 1px;
  background: var(--terra);
}

/* ════════════ HERO ════════════ */
.ns-hero {
  position: relative;
  z-index: 2;
  padding: clamp(5rem, 12vw, 8rem) clamp(1.25rem, 5vw, 3rem) clamp(2rem, 5vw, 3.5rem);
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(2rem, 5vw, 4rem);
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 1s ease 0.05s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.05s;
}
.ns-hero.visible { opacity: 1; transform: translateY(0); }
.ns-hero__inner { max-width: 540px; flex-shrink: 0; }

.ns-hero__title {
  display: flex;
  flex-direction: column;
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.6rem, 8vw, 5.8rem);
  font-weight: 400;
  line-height: 0.98;
  letter-spacing: -0.018em;
  color: var(--ink);
  margin: 0 0 1.8rem;
  overflow: hidden;
}
.ns-hero__title-line {
  display: block;
  opacity: 0;
  transform: translateY(60%);
  transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.22,1,0.36,1);
}
.ns-hero.visible .ns-hero__title-line--1 { opacity: 1; transform: translateY(0); transition-delay: 0.15s; }
.ns-hero.visible .ns-hero__title-line--2 { opacity: 1; transform: translateY(0); transition-delay: 0.32s; }
.ns-hero__title em { font-style: italic; font-weight: 300; color: var(--terra); }

.ns-hero__rule { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1rem; max-width: 240px; }
.ns-hero__rule span { flex: 1; height: 1px; background: rgba(45,58,43,0.14); }
.ns-hero__rule em { font-style: normal; font-size: 0.68rem; color: var(--terra); opacity: 0.6; }

.ns-hero__sub {
  font-size: clamp(0.68rem, 1.8vw, 0.75rem);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-dim);
  line-height: 1.9;
  margin-bottom: 1.6rem;
}
.ns-hero__sub strong { color: var(--ink); }

/* Pills */
.ns-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.ns-pill {
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--terra);
  border: 1px solid rgba(192,110,82,0.3);
  background: var(--terra-s);
  padding: 0.3rem 0.8rem;
  border-radius: 2rem;
  white-space: nowrap;
  transition: background 0.25s, border-color 0.25s;
}
.ns-pill:hover { background: var(--terra-mid); border-color: rgba(192,110,82,0.5); }

/* Hero imagen */
.ns-hero__img-wrap {
  position: relative;
  flex-shrink: 0;
  width: clamp(200px, 32vw, 400px);
  opacity: 0;
  transform: translateX(70px) rotate(3deg);
  transition: opacity 1.2s cubic-bezier(0.22,1,0.36,1) 0.5s, transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.5s;
}
.ns-hero__img-wrap.visible { opacity: 1; transform: translateX(0) rotate(1.5deg); }
.ns-hero__img-wrap:hover {
  transform: translateX(0) rotate(0deg) scale(1.025) !important;
  transition-delay: 0s !important;
  transition-duration: 0.45s !important;
}

.ns-hero__img-inner { position: relative; overflow: hidden; border-radius: 4px; }
.ns-hero__img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  display: block;
  box-shadow: 0 6px 18px rgba(0,0,0,0.07), 0 28px 56px -10px var(--shadow-md);
  transition: transform 0.7s cubic-bezier(0.22,1,0.36,1);
}
.ns-hero__img-wrap:hover .ns-hero__img { transform: scale(1.04); }

.ns-hero__img-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
  pointer-events: none;
}
.ns-hero__img-wrap:hover .ns-hero__img-shine { transform: translateX(120%); }

.ns-hero__img-frame {
  position: absolute;
  inset: -10px -10px -16px 10px;
  border: 1.5px solid rgba(192,110,82,0.22);
  border-radius: 4px;
  z-index: -1;
  pointer-events: none;
  transition: transform 0.45s ease;
}
.ns-hero__img-wrap:hover .ns-hero__img-frame { transform: translate(4px, 4px); }

.ns-hero__img-badge {
  position: absolute;
  bottom: -14px; left: -16px;
  background: var(--ink);
  color: rgba(255,255,255,0.9);
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1.5;
  padding: 0.65rem 0.95rem;
  border-radius: 4px;
  box-shadow: 0 8px 22px rgba(45,58,43,0.32);
  display: flex; flex-direction: column; align-items: center;
  gap: 0.2rem; text-align: center;
  animation: badge-float 4s ease-in-out infinite;
}
.ns-hero__img-badge span { font-size: 0.9rem; color: var(--terra); }

.ns-hero__img-tag {
  position: absolute;
  top: -12px; right: -12px;
  background: var(--terra);
  color: white;
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.4rem 0.75rem;
  border-radius: 2rem;
  box-shadow: 0 4px 12px rgba(192,110,82,0.4);
  display: flex; align-items: center; gap: 0.3rem;
  animation: badge-float 4s ease-in-out 1.4s infinite;
}

@keyframes badge-float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-5px); }
}

/* ════════════ MARQUEE ════════════ */
.ns-marquee {
  position: relative;
  z-index: 2;
  overflow: hidden;
  background: var(--ink);
  padding: 0.9rem 0;
}
.ns-marquee__track {
  display: flex;
  width: max-content;
  animation: marquee 28s linear infinite;
}
.ns-marquee__item {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.65);
  white-space: nowrap;
  padding: 0 2.4rem;
  flex-shrink: 0;
}
.ns-marquee__item em { font-style: normal; color: var(--terra); margin-left: 2.4rem; }

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ════════════ TIMELINE ════════════ */
.ns-timeline-section {
  position: relative;
  z-index: 2;
  padding: clamp(3rem, 8vw, 5rem) clamp(1.25rem, 5vw, 3rem);
  max-width: 1240px;
  margin: 0 auto;
}
.ns-timeline-wrap { max-width: 700px; }

.ns-timeline-header {
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 1s ease 0.1s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.1s;
}
.ns-timeline-header.visible { opacity: 1; transform: translateY(0); }

.ns-timeline__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.6rem, 4vw, 2.5rem);
  font-weight: 400;
  line-height: 1.15;
  color: var(--ink);
  margin: 0 0 1.1rem;
}
.ns-timeline__title em { font-style: italic; font-weight: 300; color: var(--terra); }

.ns-timeline__intro {
  font-size: clamp(0.8rem, 2vw, 0.87rem);
  line-height: 1.9;
  color: var(--ink-dim);
  max-width: 560px;
  margin: 0;
}

.ns-timeline { display: flex; flex-direction: column; }

.ns-timeline__item {
  display: flex;
  gap: 1.4rem;
  opacity: 0;
  transform: translateX(-24px);
  transition: opacity 0.75s ease, transform 0.75s cubic-bezier(0.22,1,0.36,1);
}
.ns-timeline__item.visible { opacity: 1; transform: translateX(0); }

.ns-timeline__left {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 22px;
  padding-top: 3px;
}

.ns-timeline__dot-wrap { position: relative; }
.ns-timeline__dot {
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--terra);
  position: relative;
  z-index: 1;
}
.ns-timeline__dot-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1.5px solid rgba(192,110,82,0.3);
  animation: ring-pulse 2.8s ease-in-out infinite;
}

@keyframes ring-pulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50%       { transform: scale(1.4); opacity: 0; }
}

.ns-timeline__connector {
  flex: 1;
  width: 1.5px;
  background: linear-gradient(to bottom, rgba(192,110,82,0.4), rgba(192,110,82,0.06));
  margin-top: 5px;
  min-height: 48px;
}

.ns-timeline__body { padding-bottom: 2.5rem; }

.ns-timeline__tag {
  display: inline-block;
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--terra);
  background: var(--terra-s);
  padding: 0.2rem 0.65rem;
  border-radius: 2rem;
  border: 1px solid rgba(192,110,82,0.2);
  margin-bottom: 0.45rem;
}

.ns-timeline__event {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  font-style: italic;
  color: var(--ink);
  margin: 0.35rem 0 0.55rem;
  line-height: 1.35;
}

.ns-timeline__desc {
  font-size: clamp(0.75rem, 1.8vw, 0.82rem);
  line-height: 1.88;
  color: var(--ink-dim);
  margin: 0;
}

/* ════════════ BODY GRID ════════════ */
.ns-body {
  position: relative;
  z-index: 2;
  padding: 0 clamp(1.25rem, 5vw, 3rem) clamp(4rem, 10vw, 8rem);
  max-width: 1240px;
  margin: 0 auto;
}
.ns-body__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: start;
}

/* Columna izquierda */
.ns-left {
  opacity: 0;
  transform: translateX(-36px);
  transition: opacity 1s ease 0.25s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.25s;
}
.ns-left.visible { opacity: 1; transform: translateX(0); }

/* Card */
.ns-card {
  position: relative;
  background: var(--paper);
  padding: 12px 12px 2.4rem;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04), 0 20px 42px -8px var(--shadow), inset 0 1px 0 rgba(255,255,255,0.9);
  border: 1px solid rgba(45,58,43,0.06);
  transform: rotate(-1.3deg);
  margin-bottom: 1.75rem;
  transition: transform 0.45s cubic-bezier(0.34,1.3,0.64,1), box-shadow 0.4s ease;
}
.ns-card::after {
  content: '';
  position: absolute;
  bottom: -6px; left: 6px; right: -6px;
  height: 100%;
  background: var(--bg2);
  border-radius: 3px;
  z-index: -1;
  border: 1px solid rgba(45,58,43,0.05);
}
.ns-card:hover {
  transform: rotate(0deg) scale(1.018) translateY(-6px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.07), 0 32px 56px -10px var(--shadow);
}
.ns-card__tape {
  position: absolute;
  top: -11px; left: 50%;
  transform: translateX(-50%) rotate(-1.8deg);
  width: 54px; height: 20px;
  background: rgba(255,228,130,0.75);
  border-radius: 1px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
.ns-card__icon {
  width: 44px; height: 44px;
  background: var(--terra-s);
  border-radius: 0.7rem;
  display: flex; align-items: center; justify-content: center;
  color: var(--terra);
  margin: 0 0 1rem;
  transition: background 0.3s;
}
.ns-card:hover .ns-card__icon { background: var(--terra-mid); }
.ns-card__eyebrow { display: block; font-size: 0.58rem; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(45,58,43,0.32); margin-bottom: 0.85rem; }
.ns-card__statement { font-family: 'Playfair Display', serif; font-size: clamp(1rem, 2.5vw, 1.15rem); font-style: italic; line-height: 1.58; color: var(--ink); margin-bottom: 1rem; }
.ns-card__statement strong { color: var(--terra); font-style: normal; font-weight: 700; }
.ns-card__body { font-size: clamp(0.75rem, 1.8vw, 0.8rem); line-height: 1.92; color: var(--ink-dim); border-top: 1px solid rgba(45,58,43,0.07); padding-top: 0.95rem; margin: 0; }
.ns-card__body em { font-style: italic; color: var(--ink); }
.ns-card__body strong { color: var(--terra); font-weight: 600; }

/* Post-it */
.ns-postit {
  position: relative;
  background: var(--postit);
  padding: 1.4rem 1.4rem 2rem;
  border-radius: 2px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.05), 0 16px 30px -8px var(--shadow);
  border-left: 2px solid #ffe87a;
  transform: rotate(1.4deg);
  margin-bottom: 1.75rem;
  opacity: 0;
  transition: opacity 0.9s ease 0.65s, transform 0.45s cubic-bezier(0.34,1.3,0.64,1);
}
.ns-postit.visible { opacity: 1; }
.ns-postit:hover { transform: rotate(0.3deg) scale(1.015); }
.ns-postit__tape { position: absolute; top: -9px; left: 20px; width: 38px; height: 14px; background: rgba(255,228,130,0.82); border-radius: 1px; transform: rotate(-2.8deg); }
.ns-postit__lines { position: absolute; bottom: 12px; left: 1.4rem; right: 1.4rem; height: 16px; background: repeating-linear-gradient(transparent, transparent 4px, rgba(192,110,82,0.07) 4px, rgba(192,110,82,0.07) 7px); pointer-events: none; }
.ns-postit__header { display: flex; align-items: center; gap: 0.6rem; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: var(--ink); margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 1px dashed rgba(192,110,82,0.24); }
.ns-postit__header svg { color: var(--terra); flex-shrink: 0; }
.ns-postit__values { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.65rem; }
.ns-postit__values li { display: flex; align-items: center; gap: 0.65rem; font-size: clamp(0.75rem, 1.8vw, 0.82rem); color: var(--ink); line-height: 1.5; }
.ns-postit__dot { width: 6px; height: 6px; border-radius: 50%; background: var(--terra); opacity: 0.65; flex-shrink: 0; }

/* Imagen 2 */
.ns-img2-wrap {
  position: relative;
  width: 100%;
  opacity: 0;
  transform: translateY(55px) rotate(-1.8deg);
  transition: opacity 1.2s cubic-bezier(0.22,1,0.36,1) 0.7s, transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.7s;
}
.ns-img2-wrap.visible { opacity: 1; transform: translateY(0) rotate(-1deg); }
.ns-img2-wrap:hover {
  transform: translateY(-7px) rotate(0deg) scale(1.018) !important;
  transition-delay: 0s !important;
  transition-duration: 0.5s !important;
}
.ns-img2 { width: 100%; aspect-ratio: 4/5; object-fit: cover; border-radius: 4px; display: block; box-shadow: 0 6px 16px rgba(0,0,0,0.07), 0 30px 60px -12px var(--shadow-md); transition: transform 0.6s cubic-bezier(0.22,1,0.36,1); }
.ns-img2-wrap:hover .ns-img2 { transform: scale(1.03); }
.ns-img2__overlay { position: absolute; inset: 0; border-radius: 4px; background: linear-gradient(to top, rgba(45,58,43,0.15) 0%, transparent 50%); pointer-events: none; }
.ns-img2__badge { position: absolute; bottom: 16px; right: 16px; background: var(--terra); color: white; font-size: 0.56rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; line-height: 1.5; padding: 0.6rem 0.95rem; border-radius: 4px; box-shadow: 0 6px 20px rgba(192,110,82,0.42); display: flex; flex-direction: column; align-items: center; gap: 0.2rem; text-align: center; }
.ns-img2__badge span { font-size: 1.05rem; }
.ns-img2__frame { position: absolute; inset: 10px -10px -14px 10px; border: 1.5px solid rgba(192,110,82,0.18); border-radius: 4px; z-index: -1; pointer-events: none; transition: transform 0.5s ease; }
.ns-img2-wrap:hover .ns-img2__frame { transform: translate(4px, 4px); }

/* Columna derecha */
.ns-right {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 1s ease 0.4s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.4s;
}
.ns-right.visible { opacity: 1; transform: translateX(0); }

.ns-right__title { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 400; line-height: 1.1; color: var(--ink); margin: 0 0 1.75rem; }
.ns-right__title em { font-style: italic; font-weight: 300; color: var(--terra); }

/* Stats */
.ns-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 2rem; }
.ns-stat {
  background: var(--paper);
  border: 1px solid var(--ink-ghost);
  border-radius: 8px;
  padding: clamp(0.75rem, 2vw, 1.1rem) 0.6rem;
  text-align: center;
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, transform 0.3s ease;
  box-shadow: 0 2px 8px var(--shadow);
}
.ns-stat.visible { opacity: 1; transform: translateY(0); }
.ns-stat:hover { box-shadow: 0 6px 20px var(--shadow-md); transform: translateY(-3px) !important; }
.ns-stat__num { display: block; font-family: 'Playfair Display', serif; font-size: clamp(1.3rem, 3.5vw, 1.7rem); font-weight: 400; color: var(--terra); line-height: 1; margin-bottom: 0.4rem; }
.ns-stat__label { font-size: clamp(0.54rem, 1.2vw, 0.62rem); letter-spacing: 0.15em; text-transform: uppercase; color: var(--ink-dim); line-height: 1.45; }

/* Pilares */
.ns-pillars { display: flex; flex-direction: column; }
.ns-pillar {
  display: flex;
  gap: 1.4rem;
  padding: 1.35rem 0;
  border-bottom: 1px solid rgba(45,58,43,0.08);
  align-items: flex-start;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.75s ease, transform 0.75s cubic-bezier(0.22,1,0.36,1);
}
.ns-pillar:first-child { border-top: 1px solid rgba(45,58,43,0.08); }
.ns-pillar.visible { opacity: 1; transform: translateY(0); }
.ns-pillar__num { font-family: 'Courier New', monospace; font-size: 0.58rem; color: rgba(192,110,82,0.42); letter-spacing: 0.1em; flex-shrink: 0; padding-top: 0.1rem; }
.ns-pillar strong { display: block; font-size: clamp(0.82rem, 2vw, 0.9rem); color: var(--ink); margin-bottom: 0.3rem; font-weight: 600; }
.ns-pillar p { font-size: clamp(0.75rem, 1.8vw, 0.8rem); line-height: 1.82; color: var(--ink-dim); margin: 0; }

/* Divider */
.ns-rule { display: flex; align-items: center; gap: 0.8rem; margin: 1.75rem 0; }
.ns-rule span { flex: 1; height: 1px; background: rgba(45,58,43,0.1); }
.ns-rule em { font-style: normal; font-size: 0.7rem; color: var(--terra); opacity: 0.5; }

/* Datos */
.ns-data__tag { display: inline-block; font-size: 0.58rem; letter-spacing: 0.26em; text-transform: uppercase; color: var(--terra); border: 1px solid rgba(192,110,82,0.28); padding: 0.3rem 0.75rem; border-radius: 2rem; margin-bottom: 1.1rem; }
.ns-data__list { list-style: none; padding: 0; margin: 0; }
.ns-data__list li {
  display: flex; align-items: center; gap: 0.85rem;
  padding: 0.85rem 0.25rem;
  border-bottom: 1px solid rgba(45,58,43,0.06);
  opacity: 0;
  transform: translateX(14px);
  transition: opacity 0.65s ease, transform 0.65s cubic-bezier(0.22,1,0.36,1), background 0.2s;
  border-radius: 4px;
}
.ns-data__list li:first-child { border-top: 1px solid rgba(45,58,43,0.06); }
.ns-data__list li.visible { opacity: 1; transform: translateX(0); }
.ns-data__list li:hover { background: rgba(45,58,43,0.025); }
.ns-check { width: 34px; height: 34px; border-radius: 0.55rem; background: var(--terra-s); border: 1px solid rgba(192,110,82,0.14); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--terra); transition: background 0.25s; }
.ns-data__list li:hover .ns-check { background: var(--terra-mid); }
.ns-data__label { display: block; font-size: 0.56rem; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(45,58,43,0.36); margin-bottom: 0.1rem; }
.ns-data__val { font-size: clamp(0.78rem, 1.8vw, 0.84rem); color: var(--ink); font-weight: 500; }
.ns-data__val--link { text-decoration: none; color: var(--ink); transition: color 0.2s; }
.ns-data__val--link:hover { color: var(--terra); }

/* CTA */
.ns-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink);
  padding-bottom: 0.4rem;
  border-bottom: 1.5px solid rgba(45,58,43,0.2);
  margin-top: 2rem;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.7s ease 1.6s, transform 0.7s ease 1.6s, color 0.25s, border-color 0.25s, gap 0.3s;
}
.ns-cta.visible { opacity: 1; transform: translateY(0); }
.ns-cta:hover { color: var(--terra); border-color: var(--terra); gap: 1.2rem; }

/* ════════════ CIERRE ════════════ */
.ns-closing {
  position: relative;
  z-index: 2;
  padding: clamp(3rem, 8vw, 5.5rem) clamp(1.25rem, 5vw, 3rem) clamp(4rem, 10vw, 7rem);
  text-align: center;
  overflow: hidden;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 1s ease 0.2s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.2s;
}
.ns-closing.visible { opacity: 1; transform: translateY(0); }
.ns-closing__bg { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(192,110,82,0.06) 0%, transparent 70%); pointer-events: none; }
.ns-closing__inner { max-width: 700px; margin: 0 auto; position: relative; }
.ns-closing__rule { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 2.4rem; }
.ns-closing__rule span { flex: 1; height: 1px; background: rgba(45,58,43,0.1); }
.ns-closing__rule em { font-style: normal; font-size: 0.7rem; color: var(--terra); opacity: 0.5; }
.ns-closing__quote { font-family: 'Playfair Display', serif; font-size: clamp(1.1rem, 3vw, 1.6rem); font-style: italic; font-weight: 300; line-height: 1.7; color: var(--ink); margin: 0 0 1.75rem; padding: 0; border: none; }
.ns-closing__quote em { color: var(--terra); font-weight: 400; }
.ns-closing__sub { font-size: clamp(0.58rem, 1.4vw, 0.65rem); letter-spacing: 0.28em; text-transform: uppercase; color: var(--ink-dim); line-height: 2; margin: 0; }

/* ════════════ RESPONSIVE ════════════ */
@media (max-width: 900px) {
  .ns-hero { flex-direction: column; align-items: flex-start; gap: 2.5rem; }
  .ns-hero__inner { max-width: 100%; }
  .ns-hero__img-wrap { width: min(340px, 75vw); align-self: center; }
  .ns-body__grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .ns-left, .ns-right { transform: translateY(24px); }
  .ns-right { transition-delay: 0.12s; }
  .ns-left.visible, .ns-right.visible { transform: translateY(0); }
}

@media (max-width: 640px) {
  .ns-hero { gap: 2rem; }
  .ns-hero__title { font-size: clamp(2.4rem, 13vw, 3.5rem); }
  .ns-hero__img-wrap { width: min(280px, 80vw); }
  .ns-card { transform: rotate(0); }
  .ns-card:hover { transform: scale(1.01) translateY(-4px); }
  .ns-card::after { display: none; }
  .ns-postit { transform: rotate(0); }
  .ns-postit:hover { transform: scale(1.01); }
  .ns-img2-wrap.visible { transform: translateY(0) rotate(0); }
  .ns-img2 { aspect-ratio: 3/2; }
  .ns-img2-wrap:hover { transform: translateY(-4px) !important; }
  .ns-stats { grid-template-columns: repeat(3, 1fr); gap: 0.5rem; }
  .ns-closing__quote { font-size: clamp(1rem, 5vw, 1.3rem); }
  .ns-hero__img-badge { bottom: -10px; left: -10px; padding: 0.5rem 0.7rem; }
  .ns-hero__img-tag { top: -8px; right: -8px; padding: 0.35rem 0.6rem; }
}

@media (max-width: 400px) {
  .ns-hero__title { font-size: 2.1rem; }
  .ns-stat { padding: 0.7rem 0.4rem; }
  .ns-stat__num { font-size: 1.1rem; }
  .ns-stat__label { font-size: 0.5rem; }
  .ns-pills { gap: 0.4rem; }
  .ns-pill { font-size: 0.52rem; padding: 0.26rem 0.6rem; }
}

/* ════════════ REDUCED MOTION ════════════ */
@media (prefers-reduced-motion: reduce) {
  .ns-hero, .ns-left, .ns-right,
  .ns-timeline-header, .ns-timeline__item,
  .ns-stat, .ns-pillar, .ns-data__list li,
  .ns-cta, .ns-closing, .ns-section-num,
  .ns-hero__img-wrap, .ns-img2-wrap, .ns-postit,
  .ns-hero__title-line {
    transition: opacity 0.3s ease !important;
    transform: none !important;
    animation: none !important;
  }
  .ns-timeline__dot-ring,
  .ns-hero__img-badge,
  .ns-hero__img-tag { animation: none !important; }
  .ns-marquee__track { animation: none !important; }
}
</style>