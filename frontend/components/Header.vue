<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-vintage-cream/95 backdrop-blur-sm border-b border-vintage-forest/10">
    <div class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <h1 class="font-display text-2xl font-bold text-vintage-forest">
            OLIVER VINTAGE
          </h1>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="text-vintage-graphite hover:text-vintage-terracota transition-colors duration-300 font-medium"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Search Icon -->
        <button 
          @click="toggleSearch"
          class="p-2 hover:text-vintage-terracota transition-colors"
          aria-label="Buscar"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2"
          aria-label="Menú"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-if="mobileMenuOpen" class="md:hidden bg-vintage-cream border-t border-vintage-forest/10">
        <nav class="container-custom py-4 flex flex-col gap-4">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            @click="mobileMenuOpen = false"
            class="text-vintage-graphite hover:text-vintage-terracota transition-colors py-2 font-medium"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>

    <!-- Search Overlay -->
    <SearchOverlay 
      :isOpen="searchOpen" 
      @close="searchOpen = false"
    />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
const searchOpen = ref(false)

const navItems = [
  { path: '/', label: 'Inicio' },
  { path: '/nosotros', label: 'Nosotros' },
  { path: '/contacto', label: 'Contacto' }
]

function toggleSearch() {
  searchOpen.value = !searchOpen.value
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
