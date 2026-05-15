<template>
  <div class="ct-page">

    <!-- ░░ HERO ░░ -->
    <section class="ct-hero" ref="heroRef" :class="{ visible: heroVisible }">
      <div class="ct-hero__img-wrap">
        <img src="/images/hero.png" alt="Oliver Vintage — Local" class="ct-hero__img" />
        <div class="ct-hero__overlay" />
      </div>
      <div class="ct-hero__content">
        <span class="ct-label">Estamos aquí para ti</span>
        <h1 class="ct-hero__title">
          Hablemos<br>
          <em>de moda.</em>
        </h1>
        <div class="ct-hero__rule">
          <span /><em>✦</em><span />
        </div>
        <p class="ct-hero__sub">Ropa americana &amp; piezas vintage · Villarrica, Chile</p>
      </div>
      <div class="ct-hero__scroll">
        <span>Escríbenos</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>

    <!-- ░░ BODY ░░ -->
    <section class="ct-body" ref="bodyRef">
      <div class="ct-body__grid">

        <!-- ── IZQUIERDA: info + dirección ── -->
        <div class="ct-info" :class="{ visible: bodyVisible }">

          <div class="ct-info__block">
            <span class="ct-label">Contáctanos</span>
            <h2 class="ct-info__title">
              Cada consulta<br>
              <em>merece respuesta.</em>
            </h2>
            <p class="ct-info__desc">
              ¿Dudas sobre una prenda, tallas, envíos o simplemente quieres saber si llegó algo nuevo?
              Escríbenos y te respondemos a la brevedad.
            </p>
          </div>

          <!-- Datos de contacto -->
          <div class="ct-data">
            <div
              class="ct-data__item"
              v-for="(d, i) in datos"
              :key="i"
              :class="{ visible: bodyVisible }"
              :style="{ transitionDelay: `${0.3 + i * 0.12}s` }"
            >
              <div class="ct-data__icon" v-html="d.icon" />
              <div>
                <span class="ct-data__label">{{ d.label }}</span>
                <a v-if="d.href" :href="d.href" target="_blank" rel="noopener" class="ct-data__val ct-data__val--link">{{ d.val }}</a>
                <span v-else class="ct-data__val">{{ d.val }}</span>
              </div>
            </div>
          </div>

          <!-- Card dirección estilo polaroid -->
          <div class="ct-map-card" :class="{ visible: bodyVisible }">
            <div class="ct-map-card__tape" />
            <div class="ct-map-card__eyebrow">
              <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              Nuestra tienda física
            </div>
            <p class="ct-map-card__address">
              Pedro Montt 635<br>
              Villarrica, La Araucanía<br>
              Chile
            </p>
            <div class="ct-map-card__hours">
              <div class="ct-map-card__hour-row">
                <span>Lun — Vie</span>
                <span>10:00 – 19:00</span>
              </div>
              <div class="ct-map-card__hour-row">
                <span>Sábado</span>
                <span>10:00 – 14:00</span>
              </div>
              <div class="ct-map-card__hour-row ct-map-card__hour-row--closed">
                <span>Domingo</span>
                <span>Cerrado</span>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/Oliver+Vintage/@-39.2837022,-72.2277588,21z"
              target="_blank"
              rel="noopener noreferrer"
              class="ct-map-card__btn"
            >
              Ver en Google Maps
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 7h8M7 3l4 4-4 4"/>
              </svg>
            </a>
          </div>

        </div>

        <!-- ── DERECHA: formulario ── -->
        <div class="ct-form-wrap" :class="{ visible: bodyVisible }">

          <div class="ct-form-card">
            <div class="ct-form-card__tape ct-form-card__tape--left" />
            <div class="ct-form-card__tape ct-form-card__tape--right" />

            <span class="ct-form-card__eyebrow">Formulario de contacto</span>
            <h3 class="ct-form-card__title">Déjanos tu mensaje</h3>

            <!-- Estados -->
            <div v-if="formState === 'success'" class="ct-success">
              <div class="ct-success__icon">
                <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h4>¡Mensaje enviado!</h4>
              <p>Te responderemos pronto a <strong>{{ form.email }}</strong></p>
              <button class="ct-btn ct-btn--outline" @click="resetForm">Enviar otro mensaje</button>
            </div>

            <div v-else-if="formState === 'error'" class="ct-error">
              <p>Hubo un problema al enviar. Intenta de nuevo o escríbenos directamente a <strong>olivervintagecl@gmail.com</strong></p>
              <button class="ct-btn ct-btn--outline" @click="formState = 'idle'">Intentar de nuevo</button>
            </div>

            <form v-else @submit.prevent="submitForm" class="ct-form" novalidate>

              <div class="ct-field" :class="{ 'ct-field--error': errors.nombre }">
                <label class="ct-field__label">Nombre completo</label>
                <input
                  v-model="form.nombre"
                  type="text"
                  class="ct-field__input"
                  placeholder="Tu nombre"
                  @blur="validate('nombre')"
                />
                <span v-if="errors.nombre" class="ct-field__err">{{ errors.nombre }}</span>
              </div>

              <div class="ct-field" :class="{ 'ct-field--error': errors.email }">
                <label class="ct-field__label">Correo electrónico</label>
                <input
                  v-model="form.email"
                  type="email"
                  class="ct-field__input"
                  placeholder="tu@correo.com"
                  @blur="validate('email')"
                />
                <span v-if="errors.email" class="ct-field__err">{{ errors.email }}</span>
              </div>

              <div class="ct-field">
                <label class="ct-field__label">Asunto <span class="ct-optional">(opcional)</span></label>
                <input
                  v-model="form.asunto"
                  type="text"
                  class="ct-field__input"
                  placeholder="¿En qué te podemos ayudar?"
                />
              </div>

              <div class="ct-field" :class="{ 'ct-field--error': errors.mensaje }">
                <label class="ct-field__label">Mensaje</label>
                <textarea
                  v-model="form.mensaje"
                  class="ct-field__textarea"
                  rows="5"
                  placeholder="Cuéntanos tu consulta..."
                  @blur="validate('mensaje')"
                />
                <span v-if="errors.mensaje" class="ct-field__err">{{ errors.mensaje }}</span>
              </div>

              <button
                type="submit"
                class="ct-btn"
                :class="{ 'ct-btn--loading': formState === 'sending' }"
                :disabled="formState === 'sending'"
              >
                <span v-if="formState !== 'sending'">
                  Enviar mensaje
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M2 7h10M8 3l4 4-4 4"/>
                  </svg>
                </span>
                <span v-else class="ct-spinner" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>

    <!-- ░░ FOOTER ░░ -->
    <HomeHomeFooter />

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'

// ── Animaciones por scroll ──────────────────────────────
const heroRef    = ref<HTMLElement | null>(null)
const bodyRef    = ref<HTMLElement | null>(null)
const heroVisible = ref(false)
const bodyVisible = ref(false)
let obsHero: IntersectionObserver | null = null
let obsBody: IntersectionObserver | null = null

onMounted(() => {
  obsHero = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) heroVisible.value = true },
    { threshold: 0.05 }
  )
  obsBody = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) bodyVisible.value = true },
    { threshold: 0.05 }
  )
  if (heroRef.value) obsHero.observe(heroRef.value)
  if (bodyRef.value) obsBody.observe(bodyRef.value)
})
onUnmounted(() => {
  obsHero?.disconnect()
  obsBody?.disconnect()
})

// ── Datos de contacto ──────────────────────────────────
const datos = [
  {
    label: 'Teléfono / WhatsApp',
    val: '+56 9 20306235',
    href: 'https://wa.me/56920306235',
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`
  },
  {
    label: 'Correo electrónico',
    val: 'olivervintagecl@gmail.com',
    href: 'mailto:olivervintagecl@gmail.com',
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
  },
  {
    label: 'Dirección',
    val: 'Pedro Montt 635, Villarrica',
    href: 'https://www.google.com/maps/place/Oliver+Vintage/@-39.2837022,-72.2277588,21z',
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`
  },
  {
    label: 'Instagram',
    val: '@olivervintage.cl',
    href: 'https://instagram.com/olivervintage.cl',
    icon: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>`
  },
]

// ── Formulario ─────────────────────────────────────────
const form = reactive({ nombre: '', email: '', asunto: '', mensaje: '' })
const errors = reactive({ nombre: '', email: '', mensaje: '' })
const formState = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const lastSent = ref(0)

function validate(field: 'nombre' | 'email' | 'mensaje') {
  if (field === 'nombre')  errors.nombre  = form.nombre.trim()  ? '' : 'El nombre es obligatorio'
  if (field === 'email')   errors.email   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Ingresa un correo válido'
  if (field === 'mensaje') errors.mensaje = form.mensaje.trim() ? '' : 'El mensaje no puede estar vacío'
}

function validateAll() {
  validate('nombre'); validate('email'); validate('mensaje')
  return !errors.nombre && !errors.email && !errors.mensaje
}

function resetForm() {
  form.nombre = ''; form.email = ''; form.asunto = ''; form.mensaje = ''
  errors.nombre = ''; errors.email = ''; errors.mensaje = ''
  formState.value = 'idle'
}

async function submitForm() {
  const now = Date.now()
  if (now - lastSent.value < 30000) {
    alert('Por favor espera unos segundos antes de enviar otro mensaje.')
    return
  }

  if (!validateAll()) return
  formState.value = 'sending'
  lastSent.value = now

  try {
    const SERVICE_ID  = 'service_dd9bao8'
    const TEMPLATE_ID = 'template_lo608of'
    const PUBLIC_KEY  = 'iJY_fRXMdVindDMgz'

    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id:  SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id:     PUBLIC_KEY,
        template_params: {
          from_name:    form.nombre,
          from_email:   form.email,
          subject:      form.asunto || 'Consulta desde el sitio web',
          message:      form.mensaje,
          to_email:     'olivervintagecl@gmail.com',
        }
      })
    })

    if (res.ok) {
      formState.value = 'success'
    } else {
      formState.value = 'error'
    }
  } catch {
    formState.value = 'error'
  }
}

useHead({
  title: 'Contacto — Oliver Vintage',
  meta: [{ name: 'description', content: 'Contáctanos. Ropa americana y vintage en Villarrica, Chile.' }]
})
</script>

<style scoped>
/* ══════════════════════════════
   VARIABLES
   ══════════════════════════════ */
.ct-page {
  --ink:     #2d3a2b;
  --ink-dim: rgba(45,58,43,0.6);
  --terra:   #c06e52;
  --terra-s: rgba(192,110,82,0.10);
  --bg:      #f5f0e8;
  --paper:   #ffffff;
  --postit:  #fff9e6;
  --shadow:  rgba(45,58,43,0.12);

  background: var(--bg);
  color: var(--ink);
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
}

/* ══════════════════════════════
   LABEL
   ══════════════════════════════ */
.ct-label {
  display: inline-block;
  font-size: 0.67rem;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: var(--terra);
  padding-left: 2rem;
  position: relative;
  margin-bottom: 1.2rem;
}
.ct-label::before {
  content: '';
  position: absolute;
  left: 0; top: 50%;
  width: 1.3rem; height: 1px;
  background: var(--terra);
}

/* ══════════════════════════════
   HERO
   ══════════════════════════════ */
.ct-hero {
  position: relative;
  height: 92vh;
  min-height: 560px;
  max-height: 860px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;

  opacity: 0;
  transition: opacity 1.1s ease 0.05s;
}
.ct-hero.visible { opacity: 1; }

.ct-hero__img-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.ct-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transform: scale(1.04);
  transition: transform 8s ease;
}
.ct-hero.visible .ct-hero__img { transform: scale(1); }

.ct-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(20,14,10,0.82) 0%,
    rgba(20,14,10,0.45) 45%,
    rgba(20,14,10,0.18) 100%
  );
}

.ct-hero__content {
  position: relative;
  z-index: 1;
  padding: 0 3rem 5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  transform: translateY(30px);
  transition: transform 1.1s cubic-bezier(0.22,1,0.36,1) 0.2s;
}
.ct-hero.visible .ct-hero__content { transform: translateY(0); }

.ct-hero__content .ct-label { color: rgba(255,210,190,0.85); }
.ct-hero__content .ct-label::before { background: rgba(255,210,190,0.85); }

.ct-hero__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #fff;
  margin: 0 0 1.5rem;
}
.ct-hero__title em {
  font-style: italic;
  font-weight: 300;
  color: rgba(255,180,150,0.9);
}

.ct-hero__rule {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  max-width: 220px;
}
.ct-hero__rule span { flex: 1; height: 1px; background: rgba(255,255,255,0.2); }
.ct-hero__rule em   { font-style: normal; font-size: 0.65rem; color: var(--terra); opacity: 0.8; }

.ct-hero__sub {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
}

.ct-hero__scroll {
  position: absolute;
  right: 2.5rem;
  bottom: 3rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  animation: scrollBounce 2.5s ease-in-out infinite;
}
@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
}

/* ══════════════════════════════
   BODY
   ══════════════════════════════ */
.ct-body {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem 7rem;
}

.ct-body__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

/* ── INFO izquierda ── */
.ct-info {
  opacity: 0;
  transform: translateX(-36px);
  transition: opacity 1s ease 0.1s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.1s;
}
.ct-info.visible { opacity: 1; transform: translateX(0); }

.ct-info__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 400;
  line-height: 1.1;
  color: var(--ink);
  margin: 0 0 1.2rem;
}
.ct-info__title em { font-style: italic; font-weight: 300; color: var(--terra); }

.ct-info__desc {
  font-size: 0.85rem;
  line-height: 1.85;
  color: var(--ink-dim);
  margin: 0 0 2.5rem;
  max-width: 380px;
}

/* Datos */
.ct-data { display: flex; flex-direction: column; gap: 0; margin-bottom: 2.5rem; }

.ct-data__item {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(45,58,43,0.07);

  opacity: 0;
  transform: translateX(-16px);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1);
}
.ct-data__item:first-child { border-top: 1px solid rgba(45,58,43,0.07); }
.ct-data__item.visible { opacity: 1; transform: translateX(0); }

.ct-data__icon {
  width: 38px; height: 38px;
  border-radius: 0.6rem;
  background: var(--terra-s);
  border: 1px solid rgba(192,110,82,0.15);
  display: flex; align-items: center; justify-content: center;
  color: var(--terra);
  flex-shrink: 0;
}

.ct-data__label {
  display: block;
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(45,58,43,0.4);
  margin-bottom: 0.2rem;
}

.ct-data__val {
  font-size: 0.84rem;
  color: var(--ink);
  font-weight: 500;
}
.ct-data__val--link {
  text-decoration: none;
  color: var(--ink);
  transition: color 0.2s ease;
}
.ct-data__val--link:hover { color: var(--terra); }

/* Card dirección */
.ct-map-card {
  position: relative;
  background: var(--postit);
  padding: 1.6rem 1.6rem 1.8rem;
  border-radius: 2px;
  border-left: 2px solid #ffe87a;
  box-shadow: 0 4px 10px rgba(0,0,0,0.06), 0 16px 32px -8px var(--shadow);
  transform: rotate(0.8deg);

  opacity: 0;
  transition: opacity 0.85s ease 0.75s, transform 0.4s cubic-bezier(0.34,1.3,0.64,1);
}
.ct-map-card.visible { opacity: 1; }
.ct-map-card:hover { transform: rotate(0deg) scale(1.01); }

.ct-map-card__tape {
  position: absolute;
  top: -9px; left: 20px;
  width: 40px; height: 14px;
  background: rgba(255,228,130,0.8);
  border-radius: 1px;
  transform: rotate(-2deg);
}

.ct-map-card__eyebrow {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink);
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px dashed rgba(192,110,82,0.2);
}
.ct-map-card__eyebrow svg { color: var(--terra); }

.ct-map-card__address {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-style: italic;
  line-height: 1.75;
  color: var(--ink);
  margin: 0 0 1.2rem;
}

.ct-map-card__hours {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-bottom: 1.4rem;
  padding: 0.9rem 0;
  border-top: 1px solid rgba(45,58,43,0.07);
  border-bottom: 1px solid rgba(45,58,43,0.07);
}

.ct-map-card__hour-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.77rem;
  color: var(--ink-dim);
}
.ct-map-card__hour-row--closed { color: rgba(45,58,43,0.35); }
.ct-map-card__hour-row span:last-child { font-weight: 600; color: var(--ink); }
.ct-map-card__hour-row--closed span:last-child { color: rgba(45,58,43,0.35); font-weight: 400; }

.ct-map-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--terra);
  padding: 0.45rem 1rem;
  border: 1px solid rgba(192,110,82,0.3);
  border-radius: 2rem;
  transition: all 0.25s ease;
}
.ct-map-card__btn:hover {
  background: var(--terra);
  border-color: var(--terra);
  color: white;
  gap: 0.75rem;
}

/* ── FORM derecha ── */
.ct-form-wrap {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 1s ease 0.3s, transform 1s cubic-bezier(0.22,1,0.36,1) 0.3s;
}
.ct-form-wrap.visible { opacity: 1; transform: translateX(0); }

.ct-form-card {
  position: relative;
  background: var(--paper);
  padding: 2.5rem 2.2rem 2.8rem;
  border-radius: 4px;
  box-shadow:
    0 2px 4px rgba(0,0,0,0.04),
    0 20px 44px -8px var(--shadow),
    inset 0 1px 0 rgba(255,255,255,0.9);
  border: 1px solid rgba(45,58,43,0.06);
  transform: rotate(-0.6deg);
  transition: transform 0.4s cubic-bezier(0.34,1.3,0.64,1);
}
.ct-form-card:focus-within { transform: rotate(0deg); }

.ct-form-card__tape {
  position: absolute;
  top: -10px;
  width: 44px; height: 16px;
  background: rgba(255,228,130,0.75);
  border-radius: 1px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.07);
}
.ct-form-card__tape--left  { left: 22%; transform: rotate(-1.5deg); }
.ct-form-card__tape--right { right: 22%; transform: rotate(1.5deg); }

.ct-form-card__eyebrow {
  display: block;
  font-size: 0.58rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(45,58,43,0.32);
  margin-bottom: 0.6rem;
}

.ct-form-card__title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;
  color: var(--ink);
  margin: 0 0 2rem;
}

/* Campos */
.ct-form { display: flex; flex-direction: column; gap: 1.35rem; }

.ct-field { display: flex; flex-direction: column; gap: 0.45rem; }

.ct-field__label {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink);
}

.ct-optional {
  font-weight: 400;
  color: var(--ink-dim);
  text-transform: none;
  letter-spacing: 0;
}

.ct-field__input,
.ct-field__textarea {
  background: rgba(245,240,232,0.6);
  border: 1px solid rgba(45,58,43,0.14);
  border-radius: 3px;
  padding: 0.8rem 1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.84rem;
  color: var(--ink);
  outline: none;
  transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
  resize: none;
}
.ct-field__input::placeholder,
.ct-field__textarea::placeholder { color: rgba(45,58,43,0.3); }
.ct-field__input:focus,
.ct-field__textarea:focus {
  border-color: var(--terra);
  background: #fff;
  box-shadow: 0 0 0 3px rgba(192,110,82,0.1);
}
.ct-field--error .ct-field__input,
.ct-field--error .ct-field__textarea {
  border-color: #c0524a;
  background: rgba(192,82,74,0.04);
}

.ct-field__err {
  font-size: 0.7rem;
  color: #c0524a;
  padding-left: 0.2rem;
}

/* Botón */
.ct-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: white;
  background: var(--terra);
  border: none;
  border-radius: 3px;
  padding: 1rem 2rem;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.25s ease, gap 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
  box-shadow: 0 4px 14px rgba(192,110,82,0.3);
}
.ct-btn:hover:not(:disabled) {
  background: #a85a41;
  gap: 1rem;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(192,110,82,0.35);
}
.ct-btn:disabled { opacity: 0.7; cursor: not-allowed; }

.ct-btn--outline {
  background: transparent;
  color: var(--terra);
  border: 1px solid rgba(192,110,82,0.4);
  box-shadow: none;
  margin-top: 1rem;
}
.ct-btn--outline:hover {
  background: var(--terra);
  color: white;
  transform: none;
}

/* Spinner */
.ct-spinner {
  display: inline-block;
  width: 18px; height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* Éxito / Error */
.ct-success,
.ct-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;
  gap: 0.75rem;
}

.ct-success__icon {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: rgba(192,110,82,0.1);
  border: 1.5px solid rgba(192,110,82,0.3);
  display: flex; align-items: center; justify-content: center;
  color: var(--terra);
  margin-bottom: 0.5rem;
}

.ct-success h4 {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 400;
  font-style: italic;
  color: var(--ink);
  margin: 0;
}
.ct-success p, .ct-error p {
  font-size: 0.83rem;
  color: var(--ink-dim);
  line-height: 1.7;
  margin: 0;
}

/* ══════════════════════════════
   RESPONSIVE
   ══════════════════════════════ */
@media (max-width: 900px) {
  .ct-body__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .ct-info  { transform: translateY(24px); transition-property: opacity, transform; }
  .ct-form-wrap { transform: translateY(24px); transition-delay: 0.15s; }
  .ct-info.visible, .ct-form-wrap.visible { transform: translateY(0); }
}

@media (max-width: 640px) {
  .ct-hero__content { padding: 0 1.5rem 4rem; }
  .ct-body { padding: 4rem 1.25rem 5rem; }
  .ct-form-card { padding: 2rem 1.4rem 2.2rem; transform: rotate(0); }
  .ct-map-card { transform: rotate(0); }
  .ct-hero__title { font-size: clamp(2.5rem, 13vw, 3.5rem); }
}

@media (prefers-reduced-motion: reduce) {
  .ct-hero, .ct-hero__img, .ct-hero__content,
  .ct-info, .ct-form-wrap, .ct-data__item, .ct-map-card {
    transition: opacity 0.3s ease !important;
    transform: none !important;
    animation: none !important;
  }
}
</style>