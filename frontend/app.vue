<template>
  <div id="app" class="min-h-screen bg-vintage-cream">
    <NuxtLoadingIndicator color="#C06E52" />
    
    <Header />
    
    <main>
      <NuxtPage />
    </main>
    
    <Footer />

    <a
      href="https://www.instagram.com/olivervintagecl/"
      target="_blank"
      rel="noopener noreferrer"
      style="position:fixed;bottom:28px;right:28px;z-index:99999;width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#f9ce34,#ee2a7b,#6228d7);color:#fff;text-decoration:none;box-shadow:0 4px 20px rgba(238,42,123,0.5);"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:26px;height:26px;">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

let lenis: any = null

onMounted(async () => {
  const { default: Lenis } = await import('lenis')
  
  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
  })

  function raf(time: number) {
    lenis?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

onBeforeUnmount(() => {
  lenis?.destroy()
})
</script>

<style>
/* Global styles handled by Tailwind */
</style>