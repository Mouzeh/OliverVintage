<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-[100]">
        <!-- Backdrop -->
        <div 
          class="absolute inset-0 bg-vintage-graphite/50 backdrop-blur-sm"
          @click="$emit('close')"
        />

        <!-- Search Panel -->
        <div class="relative bg-vintage-cream shadow-xl max-w-3xl mx-auto mt-20 rounded-2xl p-6">
          <button 
            @click="$emit('close')"
            class="absolute top-4 right-4 p-2 text-vintage-graphite hover:text-vintage-terracota transition-colors"
            aria-label="Cerrar búsqueda"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 class="font-display text-2xl font-bold text-vintage-forest mb-4">
            Buscar en el catálogo
          </h2>

          <!-- Search Input -->
          <div class="relative">
            <input
              ref="searchInput"
              v-model="searchQuery"
              @input="handleSearch"
              type="text"
              placeholder="Buscar prendas, categorías, marcas..."
              class="w-full px-6 py-4 pr-12 bg-white border-2 border-vintage-forest/20 rounded-xl text-vintage-graphite placeholder:text-vintage-graphite/40 focus:outline-none focus:border-vintage-terracota transition-colors"
              autofocus
            />
            <svg 
              class="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-vintage-terracota" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <!-- Search Results -->
          <div v-if="searchQuery.length > 2" class="mt-4 max-h-96 overflow-y-auto">
            <div v-if="loading" class="py-8 text-center">
              <div class="animate-spin w-8 h-8 mx-auto border-2 border-vintage-forest border-t-transparent rounded-full" />
            </div>

            <div v-else-if="results.length > 0" class="space-y-2">
              <NuxtLink
                v-for="product in results"
                :key="product.id"
                :to="`/catalogo/${product.slug}`"
                @click="$emit('close')"
                class="flex items-center gap-4 p-4 hover:bg-vintage-forest/5 rounded-lg transition-colors"
              >
                <img 
                  v-if="product.images?.[0]?.url"
                  :src="product.images[0].url" 
                  :alt="product.images[0].alt"
                  class="w-16 h-16 object-cover rounded-lg"
                />
                <div class="flex-1">
                  <h3 class="font-semibold text-vintage-graphite">{{ product.title }}</h3>
                  <p class="text-sm text-vintage-graphite/60">
                    {{ product.metadata?.marca }} · {{ product.metadata?.talla }}
                  </p>
                </div>
              </NuxtLink>
            </div>

            <div v-else class="py-8 text-center text-vintage-graphite/60">
              No se encontraron resultados para "{{ searchQuery }}"
            </div>
          </div>

          <!-- Quick Categories -->
          <div v-else class="mt-6">
            <h3 class="text-sm font-semibold text-vintage-graphite/60 uppercase tracking-wider mb-3">
              Categorías populares
            </h3>
            <div class="flex flex-wrap gap-2">
              <NuxtLink
                v-for="cat in popularCategories"
                :key="cat.slug"
                :to="`/catalogo?category=${cat.slug}`"
                @click="$emit('close')"
                class="px-4 py-2 bg-vintage-forest/10 text-vintage-forest rounded-full hover:bg-vintage-terracota hover:text-vintage-cream transition-colors text-sm"
              >
                {{ cat.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useProductStore } from '~/stores/product'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const searchInput = ref<HTMLInputElement | null>(null)
const searchQuery = ref('')
const results = ref<any[]>([])
const loading = ref(false)

const productStore = useProductStore()

const popularCategories = computed(() => productStore.categories.slice(0, 8))

let searchTimeout: ReturnType<typeof setTimeout> | null = null

function handleSearch() {
  if (searchTimeout) clearTimeout(searchTimeout)
  
  if (searchQuery.value.length < 3) {
    results.value = []
    return
  }

  loading.value = true
  
  searchTimeout = setTimeout(async () => {
    try {
      await productStore.searchProducts({ query: searchQuery.value })
      results.value = productStore.getFilteredProducts.slice(0, 10)
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      loading.value = false
    }
  }, 300)
}

watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    setTimeout(() => searchInput.value?.focus(), 100)
  } else {
    searchQuery.value = ''
    results.value = []
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
