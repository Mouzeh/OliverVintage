<template>
  <div class="min-h-screen">
    <HomeHeroSection />
    <HomeBrandsBar />             
    <HomeFeaturedCategories :categories="featuredCategories" />
    <HomeLatestProducts :products="latestProducts" :loading="loading" />
    <HomeAboutSection />
    <HomeCtaSection />
    <HomeFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useProductStore } from '~/stores/product'
import type { Product, Category } from '~/types/product'

const productStore = useProductStore()
const loading = ref(true)

const latestProducts = ref<Product[]>([])
const featuredCategories = ref<Category[]>([
  { id: '1', name: 'Ropa Americana', slug: 'ropa-americana', description: '', count: 0 },
  { id: '2', name: 'Moda Técnica', slug: 'moda-tecnica', description: '', count: 0 },
  { id: '3', name: 'Formal & Gala', slug: 'formal-gala', description: '', count: 0 }
])

onMounted(async () => {
  try {
    await Promise.all([
      productStore.fetchProducts(8),
      productStore.fetchCategories()
    ])
    latestProducts.value = productStore.products
    featuredCategories.value = productStore.categories.slice(0, 3)
  } catch (error) {
    console.error('Error loading homepage:', error)
  } finally {
    loading.value = false
  }

  setTimeout(() => {
    document.querySelectorAll('.fade-up, .stagger-children').forEach(el => {
      el.classList.add('active')
    })
  }, 100)
})
</script>
