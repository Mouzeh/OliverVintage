<template>
  <section class="visit-section" ref="sectionRef">
    <!-- Fondo con patrón sutil -->
    <div class="visit-bg"></div>
    
    <!-- Número de sección editorial -->
    <div class="visit__section-num" :class="{ visible: inView }">03</div>

    <div class="visit-container">
      
      <!-- ════════════════════════════
           COLUMNA IZQUIERDA: TEXTO
           ════════════════════════════ -->
      <div class="visit-content fade-in-left-delayed" :class="{ visible: inView }">
        <span class="visit-label">Visítanos</span>
        <h2 class="visit-title">
          Tu próxima prenda favorita<br>
          <em>te está esperando</em>
        </h2>
        <p class="visit-text">
          Ven a explorar nuestro catálogo físico en el corazón de Villarrica. 
          Cada visita es una nueva aventura llena de piezas únicas y historias por descubrir.
        </p>
        
        <!-- Tarjeta de ubicación estilo polaroid -->
        <div class="location-card scroll-reveal" :class="{ visible: inView }">
          <div class="location-card__tape"></div>
          <div class="location-card__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
          </div>
          <div class="location-card__info">
            <h3 class="location-card__title">Oliver Vintage</h3>
            <p class="location-card__address">
              Pedro Montt 635<br>
              Villarrica, La Araucanía
            </p>
          </div>
          <a 
            href="https://www.google.com/maps/place/Oliver+Vintage/@-39.2837022,-72.2277588,21z" 
            target="_blank" 
            rel="noopener noreferrer"
            class="location-card__link"
          >
            Abrir en Google Maps
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </a>
        </div>

        <!-- Post-it con horarios -->
        <div class="hours-postit scroll-reveal delay-1" :class="{ visible: inView }">
          <div class="hours-postit__tape"></div>
          <div class="hours-postit__header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <span>Horario de atención</span>
          </div>
          <div class="hours-postit__body">
            <div class="hours-row">
              <span>Lunes a Viernes</span>
              <strong>10:00 - 19:00</strong>
            </div>
            <div class="hours-row">
              <span>Sábados</span>
              <strong>11:00 - 18:00</strong>
            </div>
            <div class="hours-row">
              <span>Domingos</span>
              <em>Cerrado</em>
            </div>
          </div>
          <div class="hours-postit__lines"></div>
        </div>

        <!-- Botones de acción -->
        <div class="visit-actions scroll-reveal delay-2" :class="{ visible: inView }">
          <NuxtLink to="/catalogo" class="btn-primary">
            <span>Explorar Catálogo</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </NuxtLink>
          <NuxtLink to="/contacto" class="btn-secondary">
            Contactar
          </NuxtLink>
        </div>
      </div>

      <!-- ════════════════════════════
           COLUMNA DERECHA: MAPA POLAROID
           ════════════════════════════ -->
      <div class="visit-map fade-in-right" :class="{ visible: inView }">
        <div class="map-polaroid">
          
          <div class="map-polaroid__tape"></div>


          <div class="map-polaroid__frame">
            <a href="https://www.google.com/maps/place/Oliver+Vintage/@-39.2837022,-72.2277588,21z" target="_blank" rel="noopener noreferrer" class="map-img-link">
              <img src="/images/Modelos/OLIVADIRECCIÓN.png" alt="Ubicación Oliver Vintage" class="map-static-img" />
              <!-- Pin animado sobre la imagen -->
              <div class="map-main-pin">
                <div class="map-pin__pulse"></div>
                <div class="map-pin__pulse map-pin__pulse--2"></div>
                <div class="map-pin__body">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5" fill="white"/>
                  </svg>
                </div>
              </div>
              <div class="map-img-overlay"><span class="map-img-cta">Abrir en Google Maps</span></div>
            </a>
          </div>

          <div class="map-polaroid__caption">
            <span class="map-polaroid__caption-text">📍 Pedro Montt 635, Villarrica</span>
          </div>

          <!-- Pins flotantes -->
          <div class="map-pins">
            <div class="map-pin map-pin--side float-rotate" style="--rot: -6deg; --delay: 0s; top: 10%; right: -8%;">
              <span class="map-pin__label">✨ Nuevo ingreso</span>
            </div>
            <div class="map-pin map-pin--side float-rotate" style="--rot: 4deg; --delay: 0.3s; bottom: 15%; right: -5%;">
              <span class="map-pin__label">📍 Cerca de la<br>Municipalidad</span>
            </div>

            <!-- Compass decorativo -->
            <div class="map-compass float-slow">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z" fill="currentColor" opacity="0.2"/>
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
              </svg>
              <span class="map-compass__n">N</span>
            </div>
          </div>

          <div class="coords-badge">
            <code>-39.2837°, -72.2277°</code>
          </div>

        </div>

        <!-- Ondas de ubicación -->
        <div class="location-rings">
          <div class="ring ring-1"></div>
          <div class="ring ring-2"></div>
          <div class="ring ring-3"></div>
        </div>
        
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref<HTMLElement | null>(null)
const inView     = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { inView.value = entry.isIntersecting },
    { threshold: 0.12, rootMargin: '0px 0px -100px 0px' }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
/* =========================================
   VARIABLES Y BASE
   ========================================= */
.visit-section {
  --ink:        #2d3a2b;
  --ink-dim:    rgba(45, 58, 43, 0.7);
  --terra:      #c06e52;
  --terra-soft: rgba(192, 110, 82, 0.1);
  --bg:         #f5f0e8;
  --paper:      #ffffff;
  --paper-shadow: rgba(45, 58, 43, 0.12);
  --postit:     #fff9e6;

  position: relative;
  background: var(--bg);
  padding: 5rem 0 6rem;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  color: var(--ink);
}

.visit-bg {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 80% 20%, rgba(192, 110, 82, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 20% 80%, rgba(45, 58, 43, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.visit-section::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, var(--terra) 30%, var(--terra) 70%, transparent 100%);
  opacity: 0.4;
}

/* Número editorial */
.visit__section-num {
  position: absolute;
  top: -0.1em;
  right: -0.02em;
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
.visit__section-num.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Layout */
.visit-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

@media (max-width: 860px) {
  .visit-container { grid-template-columns: 1fr; gap: 4rem; }
}

/* =========================================
   COLUMNA DE TEXTO
   ========================================= */
.visit-content {
  padding-right: 1rem;
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.9s ease 0.5s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.5s;
}
.visit-content.visible { opacity: 1; transform: translateX(0); }

.visit-label {
  display: inline-block;
  font-size: 0.68rem;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: var(--terra);
  margin-bottom: 1.4rem;
  padding-left: 2rem;
  position: relative;
}
.visit-label::before {
  content: '';
  position: absolute;
  left: 0; top: 50%;
  width: 1.3rem; height: 1px;
  background: var(--terra);
}

.visit-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.4rem, 4.5vw, 3.6rem);
  font-weight: 400;
  line-height: 1.08;
  color: var(--ink);
  margin: 0 0 1.5rem;
  letter-spacing: -0.01em;
}
.visit-title em {
  font-style: italic;
  font-weight: 300;
  color: var(--terra);
}

.visit-text {
  font-size: 0.95rem;
  line-height: 1.9;
  color: var(--ink-dim);
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 480px;
}

/* ── Location card ── */
.location-card {
  position: relative;
  background: var(--paper);
  padding: 1.5rem 1.5rem 3.8rem;
  border-radius: 3px;
  box-shadow:
    0 4px 6px -2px rgba(0,0,0,0.05),
    0 20px 40px -8px var(--paper-shadow),
    inset 0 1px 0 rgba(255,255,255,0.8);
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: rotate(-1deg) scale(0.92) translateY(20px);
  transition:
    opacity 0.7s cubic-bezier(0.4,0,0.2,1) 0.6s,
    transform 0.85s cubic-bezier(0.34,1.5,0.64,1) 0.6s;
  border: 1px solid rgba(45,58,43,0.06);
}
.location-card.visible {
  opacity: 1;
  transform: rotate(-1deg) scale(1) translateY(0);
}
.location-card:hover {
  transform: rotate(0) scale(1.01) translateY(-5px) !important;
  transition: transform 0.3s cubic-bezier(0.34,1.3,0.64,1) !important;
  z-index: 5;
}
.location-card__tape {
  position: absolute;
  top: -10px; left: 50%;
  transform: translateX(-50%) rotate(-2deg);
  width: 55px; height: 20px;
  background: rgba(255,230,150,0.7);
  border-radius: 1px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.location-card__icon {
  position: absolute;
  top: 1.5rem; left: 1.5rem;
  width: 44px; height: 44px;
  background: var(--terra-soft);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--terra);
}
.location-card__info { margin-left: 3.5rem; margin-bottom: 0.5rem; }
.location-card__title {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--ink);
  margin: 0 0 0.2rem;
}
.location-card__address {
  font-size: 0.85rem;
  color: var(--ink-dim);
  line-height: 1.6;
  margin: 0;
}
.location-card__link {
  position: absolute;
  bottom: 1.2rem; left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--terra);
  text-decoration: none;
  padding: 0.5rem 1.2rem;
  border: 1px solid var(--terra-soft);
  border-radius: 2rem;
  transition: all 0.25s ease;
  white-space: nowrap;
}
.location-card__link:hover {
  background: var(--terra);
  border-color: var(--terra);
  color: white;
  gap: 0.7rem;
}

/* ── Hours post-it ── */
.hours-postit {
  position: relative;
  background: var(--postit);
  padding: 1.5rem 1.5rem 2rem;
  border-radius: 2px;
  box-shadow: 0 4px 8px -2px rgba(0,0,0,0.08), 0 15px 30px -8px var(--paper-shadow);
  margin-bottom: 2rem;
  opacity: 0;
  transform: rotate(1.5deg) translateY(20px);
  transition: all 0.7s ease 0.75s;
  border-left: 2px solid #ffeaa7;
}
.hours-postit.visible { opacity: 1; transform: rotate(1.5deg) translateY(0); }
.hours-postit__tape {
  position: absolute;
  top: -8px; left: 20px;
  width: 40px; height: 16px;
  background: rgba(255,230,150,0.8);
  border-radius: 1px;
  transform: rotate(-3deg);
}
.hours-postit__header {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--ink);
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.2rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px dashed rgba(192,110,82,0.2);
}
.hours-postit__header svg { color: var(--terra); }
.hours-postit__body { display: flex; flex-direction: column; gap: 0.8rem; }
.hours-row { display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; }
.hours-row span  { color: var(--ink-dim); }
.hours-row strong { color: var(--ink); font-weight: 700; font-size: 0.9rem; }
.hours-row em { color: var(--terra); font-style: normal; font-weight: 500; }
.hours-postit__lines {
  position: absolute;
  bottom: 10px; left: 1.5rem; right: 1.5rem;
  height: 20px;
  background: repeating-linear-gradient(transparent, transparent 3px, rgba(192,110,82,0.05) 3px, rgba(192,110,82,0.05) 6px);
  pointer-events: none;
}

/* ── Buttons ── */
.visit-actions {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  opacity: 0;
  transform: translateY(25px);
  transition: all 0.7s ease 0.9s;
}
.visit-actions.visible { opacity: 1; transform: translateY(0); }
@media (min-width: 640px) { .visit-actions { flex-direction: row; } }

.btn-primary, .btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 1.75rem;
  font-size: 0.73rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
}
.btn-primary {
  background: var(--terra);
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(192,110,82,0.25);
}
.btn-primary:hover { background: var(--ink); color: var(--bg); gap: 0.9rem; }
.btn-secondary {
  background: transparent;
  color: var(--ink);
  border: 1.5px solid rgba(45,58,43,0.25);
}
.btn-secondary:hover { background: var(--ink); color: white; border-color: var(--ink); }

/* =========================================
   MAPA POLAROID
   ========================================= */
.visit-map {
  position: relative;
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 0.9s ease 0.1s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s;
}
.visit-map.visible { opacity: 1; transform: translateX(0); }

.map-polaroid {
  position: relative;
  background: var(--paper);
  padding: 12px 12px 55px;
  border-radius: 3px;
  box-shadow:
    0 8px 16px -4px rgba(0,0,0,0.08),
    0 35px 60px -15px var(--paper-shadow),
    inset 0 1px 0 rgba(255,255,255,0.8);
  transform: rotate(1.5deg);
  transition: transform 0.4s cubic-bezier(0.34,1.3,0.64,1);
  z-index: 2;
  border: 1px solid rgba(45,58,43,0.06);
}
.map-polaroid:hover { transform: rotate(0) scale(1.01); }

.map-polaroid__tape {
  position: absolute;
  top: -11px; left: 50%;
  transform: translateX(-50%) rotate(2deg);
  width: 70px; height: 24px;
  background: rgba(255,230,150,0.8);
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.08);
  z-index: 3;
}

/* ── Leaflet map container ── */
.map-polaroid__frame {
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: 2px;
  overflow: hidden;
}

/* ── Pin animado sobre imagen ── */
.map-main-pin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  pointer-events: none;
  animation: pinBounce 2.5s ease-in-out infinite;
}

.map-pin__body {
  position: relative;
  width: 46px;
  height: 46px;
  background: #C06E52;
  border-radius: 50% 50% 50% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transform: rotate(-45deg);
  box-shadow: 0 6px 20px rgba(192, 110, 82, 0.5), 0 0 0 3px white;
}

.map-pin__body svg {
  transform: rotate(45deg);
}

.map-pin__pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(192, 110, 82, 0.25);
  border-radius: 50%;
  animation: pinPulse 2.2s ease-out infinite;
}

.map-pin__pulse--2 {
  width: 110px;
  height: 110px;
  background: rgba(192, 110, 82, 0.12);
  animation-delay: 0.6s;
}

@keyframes pinPulse {
  0%   { transform: translate(-50%, -50%) scale(0.5); opacity: 0.8; }
  70%  { opacity: 0.2; }
  100% { transform: translate(-50%, -50%) scale(1.3); opacity: 0; }
}

@keyframes pinBounce {
  0%, 100% { transform: translate(-50%, -50%) translateY(0); }
  50%       { transform: translate(-50%, -50%) translateY(-8px); }
}

.map-img-link {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.map-static-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s ease;
  display: block;
}

.map-img-link:hover .map-static-img {
  transform: scale(1.04);
}

.map-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(30,50,35,0.75) 0%, transparent 55%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1.5rem;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.map-img-link:hover .map-img-overlay {
  opacity: 1;
}

.map-img-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,248,240,0.95);
  color: #C06E52;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.6rem 1.4rem;
  border-radius: 2rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.map-polaroid__caption {
  position: absolute;
  bottom: 18px; left: 0; right: 0;
  text-align: center;
}
.map-polaroid__caption-text {
  font-family: 'Playfair Display', serif;
  font-size: 0.75rem;
  font-style: italic;
  color: var(--ink-dim);
  letter-spacing: 0.08em;
}

/* ── Floating pins ── */
.map-pins {
  position: absolute;
  inset: -20px -30px -20px -20px;
  pointer-events: none;
  z-index: 3;
}

.map-pin--side {
  position: absolute;
  background: var(--postit);
  padding: 0.6rem 1rem 1.8rem;
  border-radius: 2px;
  box-shadow: 0 4px 8px -2px rgba(0,0,0,0.1), 0 15px 25px -8px var(--paper-shadow);
  transform: rotate(var(--rot, 0deg));
  animation: floatRotate 7s ease-in-out infinite var(--delay, 0s);
  border-left: 2px solid #ffeaa7;
}
.map-pin--side::before {
  content: '';
  position: absolute;
  top: -6px; left: 30%;
  width: 32px; height: 12px;
  background: rgba(255,230,150,0.6);
  border-radius: 1px;
  transform: rotate(-2deg);
}
.map-pin__label { font-size: 0.6rem; font-weight: 600; letter-spacing: 0.05em; color: var(--ink); }

@keyframes floatRotate {
  0%, 100% { transform: rotate(var(--rot, 0deg)) translateY(0); }
  50%       { transform: rotate(calc(var(--rot, 0deg) * 0.5)) translateY(-8px); }
}

/* Compass */
.map-compass {
  position: absolute;
  top: 15px; right: 15px;
  width: 42px; height: 42px;
  background: var(--paper);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--terra);
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  animation: floatSlow 9s ease-in-out infinite;
  border: 1px solid rgba(45,58,43,0.08);
}
.map-compass__n {
  position: absolute;
  top: 4px;
  font-size: 0.55rem;
  font-weight: 700;
  color: var(--terra);
}
@keyframes floatSlow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%       { transform: translateY(-4px) rotate(2deg); }
}

/* Coords badge */
.coords-badge {
  position: absolute;
  bottom: -10px; right: 25px;
  background: var(--ink);
  padding: 0.35rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.6rem;
  font-family: 'Courier New', monospace;
  color: rgba(245,240,232,0.9);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Location rings */
.location-rings {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 1;
}
.ring {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  border: 1px solid rgba(192,110,82,0.12);
  border-radius: 50%;
  animation: ripple 3.5s ease-out infinite;
}
.ring-1 { width: 280px; height: 280px; animation-delay: 0s; }
.ring-2 { width: 420px; height: 420px; animation-delay: 1.2s; }
.ring-3 { width: 560px; height: 560px; animation-delay: 2.4s; }
@keyframes ripple {
  0%   { transform: translate(-50%,-50%) scale(0.7); opacity: 0.4; }
  100% { transform: translate(-50%,-50%) scale(1.3); opacity: 0; }
}

/* Delays */
.scroll-reveal.delay-1 { transition-delay: 0.75s !important; }
.scroll-reveal.delay-2 { transition-delay: 0.9s !important; }

/* =========================================
   RESPONSIVE
   ========================================= */
@media (max-width: 860px) {
  .visit-content { padding-right: 0; transform: translateY(30px); transition-delay: 0.3s; }
  .visit-content.visible { transform: translateY(0); }
  .map-polaroid__frame { height: 360px; }
  .map-polaroid { transform: rotate(0.5deg); }
  .location-rings { display: none; }
  .map-pin--side { display: none; }
}

@media (max-width: 580px) {
  .visit-section { padding: 4rem 0 5rem; }
  .visit-container { padding: 0 1.25rem; }
  .visit-title { font-size: 2.1rem; }
  .location-card { padding: 1.25rem 1.25rem 3.5rem; transform: rotate(0) !important; }
  .location-card.visible { transform: scale(1) !important; }
  .hours-postit { transform: rotate(0.5deg) !important; }
  .map-polaroid__frame { height: 300px; }
  .map-polaroid { padding: 10px 10px 45px; }
  .coords-badge { font-size: 0.5rem; padding: 0.25rem 0.6rem; }
  .map-compass { width: 34px; height: 34px; top: 12px; right: 12px; }
}

@media (prefers-reduced-motion: reduce) {
  .map-pin--side, .map-compass, .ring { animation: none !important; }
  .map-polaroid { transform: none !important; }
}
</style>