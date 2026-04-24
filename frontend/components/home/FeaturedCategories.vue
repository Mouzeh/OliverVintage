<template>
  <section class="py-24 bg-gradient-to-br from-vintage-cream via-white to-vintage-cream w-full">
    <div class="w-full px-4 md:px-8 lg:px-12">
      <!-- Encabezado con decoración -->
      <div class="text-center mb-16 fade-up">
        <span class="text-vintage-terracota text-sm uppercase tracking-[0.3em] font-light mb-3 block">Colección</span>
        <h2 class="heading-h2 text-vintage-forest mb-4">Categorías Destacadas</h2>
        <div class="w-20 h-px bg-vintage-terracota/40 mx-auto"></div>
      </div>
      
      <!-- Layout personalizado de 3 columnas - FULL WIDTH -->
      <div class="custom-layout">
        <!-- Columna 1 - Mezclilla (ocupa toda la altura) -->
        <div class="col-1">
          <NuxtLink
            :to="`/catalogo?category=${categories[0].slug}`"
            class="group relative overflow-hidden rounded-2xl shadow-xl hover-lift card-glow h-full w-full block"
          >
            <div class="relative w-full h-full min-h-[500px] md:min-h-[600px] overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-vintage-forest/90 via-vintage-forest/30 to-transparent z-10 transition-all duration-500 group-hover:from-vintage-terracota/80 group-hover:via-vintage-terracota/30" />
              <img 
                :src="categories[0].imageUrl" 
                :alt="categories[0].name"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div class="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div class="bg-vintage-cream/90 backdrop-blur-sm rounded-full p-2">
                  <svg class="w-5 h-5 text-vintage-terracota" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              <div class="relative z-20 absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <h3 class="font-display text-2xl md:text-3xl font-bold text-vintage-cream mb-2 group-hover:scale-105 transition-transform duration-300">
                  {{ categories[0].name }}
                </h3>
                <p class="text-vintage-cream/80 text-sm flex items-center gap-2">
                  <span class="inline-block w-1 h-1 bg-vintage-terracota rounded-full"></span>
                  {{ categories[0].count }} prendas
                  <span class="inline-block w-1 h-1 bg-vintage-terracota rounded-full"></span>
                  Ver colección
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Columna 2 -->
        <div class="col-2">
          <!-- Categoría 2 - Cortavientos (arriba) -->
          <NuxtLink
            :to="`/catalogo?category=${categories[1].slug}`"
            class="group relative overflow-hidden rounded-2xl shadow-xl hover-lift card-glow w-full block"
          >
            <div class="relative w-full aspect-square overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-vintage-forest/90 via-vintage-forest/30 to-transparent z-10 transition-all duration-500 group-hover:from-vintage-terracota/80 group-hover:via-vintage-terracota/30" />
              <img 
                :src="categories[1].imageUrl" 
                :alt="categories[1].name"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div class="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div class="bg-vintage-cream/90 backdrop-blur-sm rounded-full p-2">
                  <svg class="w-5 h-5 text-vintage-terracota" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              <div class="relative z-20 absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <h3 class="font-display text-2xl md:text-3xl font-bold text-vintage-cream mb-2 group-hover:scale-105 transition-transform duration-300">
                  {{ categories[1].name }}
                </h3>
                <p class="text-vintage-cream/80 text-sm flex items-center gap-2">
                  <span class="inline-block w-1 h-1 bg-vintage-terracota rounded-full"></span>
                  {{ categories[1].count }} prendas
                  <span class="inline-block w-1 h-1 bg-vintage-terracota rounded-full"></span>
                  Ver colección
                </p>
              </div>
            </div>
          </NuxtLink>

          <!-- Categoría 3 - Chaquetas (abajo) -->
          <NuxtLink
            :to="`/catalogo?category=${categories[2].slug}`"
            class="group relative overflow-hidden rounded-2xl shadow-xl hover-lift card-glow w-full block"
          >
            <div class="relative w-full aspect-square overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-vintage-forest/90 via-vintage-forest/30 to-transparent z-10 transition-all duration-500 group-hover:from-vintage-terracota/80 group-hover:via-vintage-terracota/30" />
              <img 
                :src="categories[2].imageUrl" 
                :alt="categories[2].name"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div class="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div class="bg-vintage-cream/90 backdrop-blur-sm rounded-full p-2">
                  <svg class="w-5 h-5 text-vintage-terracota" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              <div class="relative z-20 absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <h3 class="font-display text-2xl md:text-3xl font-bold text-vintage-cream mb-2 group-hover:scale-105 transition-transform duration-300">
                  {{ categories[2].name }}
                </h3>
                <p class="text-vintage-cream/80 text-sm flex items-center gap-2">
                  <span class="inline-block w-1 h-1 bg-vintage-terracota rounded-full"></span>
                  {{ categories[2].count }} prendas
                  <span class="inline-block w-1 h-1 bg-vintage-terracota rounded-full"></span>
                  Ver colección
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Columna 3 - Vestidos (ocupa toda la altura) -->
        <div class="col-3">
          <NuxtLink
            :to="`/catalogo?category=${categories[3].slug}`"
            class="group relative overflow-hidden rounded-2xl shadow-xl hover-lift card-glow h-full w-full block"
          >
            <div class="relative w-full h-full min-h-[500px] md:min-h-[600px] overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-vintage-forest/90 via-vintage-forest/30 to-transparent z-10 transition-all duration-500 group-hover:from-vintage-terracota/80 group-hover:via-vintage-terracota/30" />
              <img 
                :src="categories[3].imageUrl" 
                :alt="categories[3].name"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div class="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div class="bg-vintage-cream/90 backdrop-blur-sm rounded-full p-2">
                  <svg class="w-5 h-5 text-vintage-terracota" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              <div class="relative z-20 absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                <h3 class="font-display text-2xl md:text-3xl font-bold text-vintage-cream mb-2 group-hover:scale-105 transition-transform duration-300">
                  {{ categories[3].name }}
                </h3>
                <p class="text-vintage-cream/80 text-sm flex items-center gap-2">
                  <span class="inline-block w-1 h-1 bg-vintage-terracota rounded-full"></span>
                  {{ categories[3].count }} prendas
                  <span class="inline-block w-1 h-1 bg-vintage-terracota rounded-full"></span>
                  Ver colección
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Category } from '~/types/product'

// Categorías actualizadas con las imágenes correctas
const categories: Category[] = [
  {
    slug: 'mezclilla',
    name: 'Mezclilla',
    count: 24,
    imageUrl: '/images/Modelos/Mezclilla.jpg',
    image: null,
    placeholder: '/images/Modelos/Mezclilla.jpg'
  },
  {
    slug: 'cortavientos',
    name: 'Cortavientos',
    count: 18,
    imageUrl: '/images/Modelos/Cortavientos.jpg',
    image: null,
    placeholder: '/images/Modelos/Cortavientos.jpg'
  },
  {
    slug: 'chaquetas',
    name: 'Chaquetas',
    count: 15,
    imageUrl: '/images/Modelos/Chquetas.jpg',
    image: null,
    placeholder: '/images/Modelos/Chquetas.jpg'
  },
  {
    slug: 'vestidos',
    name: 'Vestidos',
    count: 28,
    imageUrl: '/images/Modelos/vestidos.jpg',
    image: null,
    placeholder: '/images/Modelos/vestidos.jpg'
  }
]

defineProps<{ categories: Category[] }>()
</script>

<style scoped>
/* Fuentes personalizadas */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700&display=swap');

.heading-h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .heading-h2 {
    font-size: 3rem;
  }
}

.font-display {
  font-family: 'Playfair Display', serif;
}

/* Layout personalizado de 3 columnas - FULL WIDTH */
.custom-layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  align-items: stretch;
  width: 100%;
}

.col-1,
.col-2,
.col-3 {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.col-2 {
  gap: 1.5rem;
}

/* Asegurar que los enlaces ocupen todo el espacio */
.col-1 .group,
.col-2 .group,
.col-3 .group {
  width: 100%;
  display: block;
}

/* Estilos específicos para las columnas 1 y 3 (Mezclilla y Vestidos) */
.col-1 .group > div,
.col-3 .group > div {
  min-height: 500px;
}

/* Forzar aspect-square solo para la columna 2 */
.col-2 .group > div {
  aspect-ratio: 1 / 1;
}

/* Animaciones personalizadas */
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 0.8s ease forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efecto hover-lift */
.hover-lift {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.hover-lift:hover {
  transform: translateY(-8px);
}

/* Efecto de glow en las tarjetas */
.card-glow {
  transition: all 0.4s ease;
}

.card-glow:hover {
  box-shadow: 0 20px 40px rgba(192, 110, 82, 0.2), 0 0 0 2px rgba(192, 110, 82, 0.1);
}

/* RESPONSIVE DESIGN */
/* Tablets */
@media (max-width: 1024px) {
  .custom-layout {
    gap: 1rem;
  }
  
  .col-2 {
    gap: 1rem;
  }
  
  .col-1 .group > div,
  .col-3 .group > div {
    min-height: 400px;
  }
}

/* Móviles grandes */
@media (max-width: 768px) {
  .custom-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .col-2 {
    gap: 1.5rem;
  }
  
  .heading-h2 {
    font-size: 2rem;
  }
  
  /* En móvil, todas las tarjetas tienen aspect-square */
  .col-1 .group > div,
  .col-2 .group > div,
  .col-3 .group > div {
    min-height: auto;
    aspect-ratio: 1 / 1;
  }
}

/* Móviles pequeños */
@media (max-width: 480px) {
  .custom-layout {
    gap: 1rem;
  }
  
  .col-2 {
    gap: 1rem;
  }
  
  .p-6 {
    padding: 1rem;
  }
  
  .font-display {
    font-size: 1.5rem !important;
  }
}
</style>