<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden bg-black">
    
    <!-- Foto de fondo -->
    <div class="absolute inset-0">
      <NuxtImg 
  src="/images/hero.png" 
  alt="Oliver Vintage Store"
  class="w-full h-full object-cover opacity-60"
  preset="hero"
  loading="eager"
  fetchpriority="high"
/>
    </div>

    <!-- Capa de niebla oscura animada -->
    <div class="fog-overlay absolute inset-0 z-10" />

    <!-- Vignette permanente -->
    <div class="absolute inset-0 z-10 bg-radial-vignette" />

    <!-- Contenido -->
    <div class="relative z-20 text-center px-4" :class="{ 'content-visible': contentVisible }">
      
      <p class="content-item tracking-[0.4em] text-vintage-cream/60 text-sm md:text-base mb-6 uppercase">
        Colección 2026
      </p>

      <h1 class="content-item font-segment leading-[0.75] mb-2">
       <span class="block text-[20vw] md:text-[11vw] text-white title-shadow animate-glow">OLIVER</span>
      <span class="block text-[20vw] md:text-[11vw] text-vintage-terracota title-shadow-terracota animate-glow-delayed">VINTAGE</span>
      </h1>

      <!-- Texto bajado: más margen superior -->
      <p class="content-item text-lg md:text-2xl text-vintage-cream/80 mb-12 mt-8 tracking-widest font-light">
        Piezas únicas con historia
      </p>

      <!-- Botones rediseñados -->
      <div class="content-item flex flex-col sm:flex-row gap-6 justify-center">
        <NuxtLink to="https://www.instagram.com/olivervintagecl/" class="btn-modern btn-modern-primary group">
          <span>Ver Catálogo</span>
          <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
        
        <NuxtLink to="/nosotros" class="btn-modern btn-modern-secondary group">
          <span>Nuestra Historia</span>
          <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </NuxtLink>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20" :class="{ 'content-visible': contentVisible }">
      <span class="content-item tracking-[0.3em] text-vintage-cream/40 text-xs uppercase">Scroll</span>
      <div class="content-item w-px h-12 bg-gradient-to-b from-vintage-cream/40 to-transparent animate-pulse" />
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const contentVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    contentVisible.value = true
  }, 100)
})
</script>

<style scoped>
/* Niebla oscura que se disipa */
.fog-overlay {
  background: radial-gradient(ellipse at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 100%);
  animation: fogLift 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes fogLift {
  0%   { opacity: 1; }
  100% { opacity: 0; pointer-events: none; }
}

/* Vignette permanente en bordes */
.bg-radial-vignette {
  background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%);
}

/* Text shadows para profundidad */
.title-shadow {
  text-shadow: 
    0 2px 4px rgba(0,0,0,0.5),
    0 8px 24px rgba(0,0,0,0.6),
    0 20px 60px rgba(0,0,0,0.4);
}

.title-shadow-terracota {
  text-shadow: 
    0 2px 4px rgba(0,0,0,0.5),
    0 8px 24px rgba(192,110,82,0.4),
    0 20px 60px rgba(192,110,82,0.2);
}

/* Animación de glow para OLIVER */
.animate-glow {
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    text-shadow: 
      0 2px 4px rgba(0,0,0,0.5),
      0 8px 24px rgba(0,0,0,0.6),
      0 20px 60px rgba(0,0,0,0.4);
  }
  50% {
    text-shadow: 
      0 2px 4px rgba(0,0,0,0.5),
      0 0px 30px rgba(255,255,255,0.8),
      0 0px 50px rgba(255,255,255,0.6),
      0 20px 60px rgba(0,0,0,0.4);
  }
}

/* Animación de glow para VINTAGE (color terracota) */
.animate-glow-delayed {
  animation: glowPulseTerracota 3s ease-in-out infinite;
  animation-delay: 1.5s;
}

@keyframes glowPulseTerracota {
  0%, 100% {
    text-shadow: 
      0 2px 4px rgba(0,0,0,0.5),
      0 8px 24px rgba(192,110,82,0.4),
      0 20px 60px rgba(192,110,82,0.2);
  }
  50% {
    text-shadow: 
      0 2px 4px rgba(0,0,0,0.5),
      0 0px 35px rgba(192,110,82,0.9),
      0 0px 60px rgba(192,110,82,0.7),
      0 20px 60px rgba(0,0,0,0.4);
  }
}

/* Botones modernos rediseñados */
.btn-modern {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 0;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.btn-modern-primary {
  background: linear-gradient(135deg, rgba(192,110,82,0.9) 0%, rgba(150,80,60,0.9) 100%);
  border: 1px solid rgba(192,110,82,0.5);
  color: white;
}

.btn-modern-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.6s ease;
}

.btn-modern-primary:hover::before {
  left: 100%;
}

.btn-modern-primary:hover {
  background: linear-gradient(135deg, rgba(210,130,100,0.95) 0%, rgba(170,100,80,0.95) 100%);
  border-color: rgba(210,130,100,0.8);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(192,110,82,0.3);
}

.btn-modern-secondary {
  background: rgba(0,0,0,0.4);
  border: 1px solid rgba(245,235,220,0.6);
  color: rgba(245,235,220,0.9);
  backdrop-filter: blur(10px);
}

.btn-modern-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(245,235,220,0.2), transparent);
  transition: left 0.6s ease;
}

.btn-modern-secondary:hover::before {
  left: 100%;
}

.btn-modern-secondary:hover {
  background: rgba(245,235,220,0.15);
  border-color: rgba(245,235,220,0.9);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(245,235,220,0.1);
}

.btn-icon {
  width: 0;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.btn-modern:hover .btn-icon {
  width: 20px;
  opacity: 1;
}

.btn-modern:active {
  transform: translateY(0);
}

/* Animaciones de entrada escalonadas */
.content-item {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.content-visible .content-item:nth-child(1) { 
  transition-delay: 1.8s; 
  opacity: 1; 
  transform: translateY(0); 
}
.content-visible .content-item:nth-child(2) { 
  transition-delay: 2.2s; 
  opacity: 1; 
  transform: translateY(0); 
}
.content-visible .content-item:nth-child(3) { 
  transition-delay: 2.6s; 
  opacity: 1; 
  transform: translateY(0); 
}
.content-visible .content-item:nth-child(4) { 
  transition-delay: 3.0s; 
  opacity: 1; 
  transform: translateY(0); 
}
</style>