<template>
  
    href="https://www.instagram.com/olivervintagecl/"
    target="_blank"
    rel="noopener noreferrer"
    class="ig-float"
    @mousemove="onMove"
    @mouseleave="onLeave"
    :style="glowStyle"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:26px;height:26px;flex-shrink:0;position:relative;z-index:1;">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  </a>
</template>

<script setup>
import { ref } from 'vue'

const glowStyle = ref({})

function onMove(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  glowStyle.value = {
    '--mx': x + '%',
    '--my': y + '%',
  }
}

function onLeave() {
  glowStyle.value = { '--mx': '50%', '--my': '35%' }
}
</script>

<style scoped>
.ig-float {
  position: fixed !important;
  bottom: 30px !important;
  right: 30px !important;
  z-index: 99999 !important;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7);
  color: #fff;
  text-decoration: none;
  overflow: hidden;
  position: relative;
  animation: ig-float 3s ease-in-out infinite;
}

/* Brillo foil giratorio */
.ig-float::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(
    from var(--angle, 0deg),
    transparent 0deg,
    rgba(255,255,255,0.55) 60deg,
    rgba(255,255,255,0.08) 120deg,
    transparent 180deg,
    rgba(255,255,255,0.3) 240deg,
    rgba(255,255,255,0.0) 300deg,
    transparent 360deg
  );
  mix-blend-mode: overlay;
  animation: ig-foil-spin 2.4s linear infinite;
  pointer-events: none;
}

/* Reflejo que sigue el cursor */
.ig-float::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(
    ellipse 60% 40% at var(--mx, 50%) var(--my, 35%),
    rgba(255,255,255,0.55) 0%,
    transparent 70%
  );
  mix-blend-mode: overlay;
  pointer-events: none;
  transition: background 0.1s;
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes ig-foil-spin {
  to { --angle: 360deg; }
}

@keyframes ig-float {
  0%, 100% {
    transform: translateY(0px);
    box-shadow: 0 4px 20px rgba(238,42,123,0.5);
  }
  50% {
    transform: translateY(-6px);
    box-shadow: 0 10px 28px rgba(238,42,123,0.55);
  }
}
</style>