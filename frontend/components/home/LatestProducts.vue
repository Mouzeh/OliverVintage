<template>
  <NuxtLink to="https://www.instagram.com/olivervintagecl/" external target="_blank" rel="noopener noreferrer" class="banner group">
    <div class="banner-bg">
      <img src="/images/recienllegado.jpeg" alt="Recién Llegados" />
      <div class="banner-overlay"></div>
    </div>

    <div class="banner-content">
      <h2 class="banner-title">Recién<br>Llegados</h2>
      <div class="banner-link">
        <div class="arrow-wrap">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2">
            <path d="M2 7h10M8 3l4 4-4 4"/>
          </svg>
        </div>
        Ver toda la colección
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Tenor+Sans&display=swap');

.banner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 420px;
  overflow: hidden;
  background: #1a1510;
  font-family: 'Tenor Sans', sans-serif;
  text-decoration: none;
  color: inherit;
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.banner-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;          /* ← SUBE la imagen (menor % = más arriba) */
  filter: brightness(0.85) grayscale(20%); /* ← BAJA el brillo un 15% */
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.6s ease;
  display: block;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(245,240,232,0.95) 0%, rgba(245,240,232,0.7) 40%, rgba(245,240,232,0.2) 100%);
  z-index: 2;
  transition: opacity 0.4s ease;
}

.banner.group:hover .banner-bg img {
  transform: scale(1.04);
  filter: brightness(0.9) grayscale(0%); /* ← Hover: sube ligeramente el brillo sin pasar al original */
}

.banner.group:hover .banner-overlay {
  background: linear-gradient(90deg, rgba(245,240,232,0.98) 0%, rgba(245,240,232,0.85) 40%, rgba(245,240,232,0.4) 100%);
}

.banner-content {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 48px 52px;
  max-width: 60%;
  gap: 32px;
}

.banner-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 48px;
  font-weight: 300;
  letter-spacing: 0.12em;
  color: #1a1510;
  line-height: 1.1;
  margin: 0;
  text-shadow: 0 1px 2px rgba(245, 240, 232, 0.3);
}

.banner-link {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #7a6a52;
  transition: color 0.3s ease;
  font-weight: 400;
}

.banner.group:hover .banner-link {
  color: #1a1510;
}

.arrow-wrap {
  width: 40px;
  height: 40px;
  border: 0.5px solid #7a6a52;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
  flex-shrink: 0;
  color: #7a6a52;
  background: rgba(245, 240, 232, 0.6);
}

.banner.group:hover .arrow-wrap {
  background: #1a1510;
  border-color: #1a1510;
  color: #f5f0e8;
  transform: translateX(6px);
}

@media (max-width: 640px) {
  .banner {
    height: auto;
    min-height: 400px;
    align-items: flex-end;
  }
  .banner-content {
    padding: 36px 28px;
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
  .banner-title {
    font-size: 36px;
  }
  .banner-overlay {
    background: linear-gradient(0deg, rgba(245,240,232,0.95) 0%, rgba(245,240,232,0.6) 100%);
  }
}
</style>