<template>
  <section class="brands-bar">
    <div class="brands-bar__label">
      <span>Marcas</span>
    </div>
    <div class="brands-bar__track-wrapper">
      <div class="brands-bar__track">
        <div
          v-for="(brand, i) in duplicatedBrands"
          :key="i"
          class="brands-bar__item"
        >
          <img :src="brand.src" :alt="brand.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const brands = [
  { name: 'Calvin Klein',  src: '/images/marcas/Calvin_Klein.png.webp' },
  { name: 'Under Armour',  src: '/images/marcas/Under_Armour.png.webp' },
  { name: 'Columbia',      src: '/images/marcas/columbia-1.png' },
  { name: 'Nautica',       src: '/images/marcas/nautica.png' },
  { name: 'North Face',    src: '/images/marcas/north-face.png.webp' },
  { name: 'Pink',          src: '/images/marcas/pink.png.webp' },
  { name: 'Tommy',         src: '/images/marcas/tommy.png.webp' },
  { name: 'Docker',        src: '/images/marcas/docker-logo.png' },
]

// Triplicamos para una animación más suave
const duplicatedBrands = computed(() => [...brands, ...brands, ...brands])
</script>

<style scoped>
.brands-bar {
  display: flex;
  align-items: center;
  gap: 0;
  border-top: 2px solid #e5e7eb;
  border-bottom: 2px solid #e5e7eb;
  background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
  overflow: hidden;
  height: 120px;
  position: relative;
}

.brands-bar__label {
  flex-shrink: 0;
  padding: 0 2rem;
  border-right: 2px solid #e5e7eb;
  height: 100%;
  display: flex;
  align-items: center;
  background: white;
  position: relative;
  z-index: 2;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.02);
}

.brands-bar__label span {
  font-family: 'Georgia', serif;
  font-size: 0.8rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #4b5563;
  white-space: nowrap;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-weight: 500;
  position: relative;
  padding: 1rem 0;
}

.brands-bar__label span::before,
.brands-bar__label span::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  height: 20px;
  background: linear-gradient(180deg, transparent, #d1d5db, transparent);
}

.brands-bar__label span::before {
  top: -10px;
}

.brands-bar__label span::after {
  bottom: -10px;
}

.brands-bar__track-wrapper {
  flex: 1;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 5%,
    black 95%,
    transparent 100%
  );
}

.brands-bar__track {
  display: flex;
  align-items: center;
  gap: 5rem;
  width: max-content;
  animation: slide 40s linear infinite;
  padding: 0 2.5rem;
}

.brands-bar__track:hover {
  animation-play-state: paused;
}

.brands-bar__item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  opacity: 0.5;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  position: relative;
}

.brands-bar__item::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #9ca3af, transparent);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.brands-bar__item:hover {
  opacity: 1;
  transform: translateY(-2px);
}

.brands-bar__item:hover::after {
  transform: translateX(-50%) scaleX(1);
}

.brands-bar__item img {
  height: 100px;
  width: auto;
  max-width: 140px;
  object-fit: contain;
  filter: grayscale(100%) brightness(0.8);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
}

.brands-bar__item:hover img {
  filter: grayscale(0%) brightness(1.05);
  transform: scale(1.08);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-33.333%));
  }
}

/* Efecto de brillo sutil en hover */
.brands-bar__track-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    transparent 100%
  );
  transition: background 0.3s;
}

.brands-bar:hover .brands-bar__track-wrapper::after {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 70%
  );
}

/* Responsive */
@media (max-width: 768px) {
  .brands-bar {
    height: 100px;
  }
  
  .brands-bar__label {
    padding: 0 1.5rem;
  }
  
  .brands-bar__label span {
    font-size: 0.7rem;
  }
  
  .brands-bar__track {
    gap: 3.5rem;
    animation-duration: 35s;
  }
  
  .brands-bar__item img {
    height: 38px;
    max-width: 120px;
  }
}

@media (max-width: 480px) {
  .brands-bar {
    height: 85px;
  }
  
  .brands-bar__label {
    padding: 0 1rem;
  }
  
  .brands-bar__track {
    gap: 2.5rem;
    animation-duration: 30s;
  }
  
  .brands-bar__item img {
    height: 32px;
    max-width: 100px;
  }
}
</style>