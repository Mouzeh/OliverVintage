<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__brand">
        <div class="footer__logo">Ropa Americana</div>
        <p class="footer__tagline">
          Prendas originales importadas.<br />Moda que habla por sí sola.
        </p>
        <div class="footer__socials">
          <a href="#" aria-label="Instagram" class="social-icon">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100063597219507&locale=fy_NL" aria-label="Facebook" class="social-icon">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" aria-label="WhatsApp" class="social-icon">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer__links">
        <div class="footer__col">
          <h4>Tienda</h4>
          <ul>
            <li><NuxtLink to="https://www.instagram.com/olivervintagecl/">Todos los productos</NuxtLink></li>

          </ul>
        </div>
        <div class="footer__col">
          <h4>Información</h4>
          <ul>
            <li><NuxtLink to="/nosotros">Nosotros</NuxtLink></li>
            <li><NuxtLink to="/devoluciones">Devoluciones</NuxtLink></li>
            <li><NuxtLink to="/contacto">Contacto</NuxtLink></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Contacto</h4>
          <ul class="footer__contact">
            <li>
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Villarrica, Chile
            </li>
            <li>
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
              </svg>
              +56 9 20306235
            </li>
            <li>
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              olivervintagecl@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <!-- Nueva sección de Medios de Pago -->
      <div class="footer__payment">
        <h4>Medios de Pago</h4>
        <div class="payment-methods">
          <div class="payment-row">
            <div class="payment-item">
              <img src="/images/mediosdepago/images-7.png" alt="Medios de pago" class="payment-image" />
            </div>
          </div>
          <div class="payment-icons">
            <div class="payment-icon visa">
              <svg viewBox="0 0 32 20" fill="none">
                <rect width="32" height="20" rx="2" fill="#1A1F71"/>
                <path d="M12.5 6.5L9.5 13.5H7.5L6 7.5C5.8 6.7 5.3 6.1 4.5 5.8L5 4H9L9.5 6.5H12.5Z" fill="white"/>
                <path d="M19.5 4L17.5 13.5H15.5L17.5 4H19.5Z" fill="white"/>
                <path d="M28 4L26 13.5H24L26 4H28Z" fill="white"/>
              </svg>
            </div>
            <div class="payment-icon mastercard">
              <svg viewBox="0 0 32 20" fill="none">
                <rect width="32" height="20" rx="2" fill="#252525"/>
                <circle cx="12" cy="10" r="5" fill="#EB001B"/>
                <circle cx="20" cy="10" r="5" fill="#F79E1B"/>
              </svg>
            </div>
      
          </div>
          <p class="payment-text">Todo medio de pago</p>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <span>© {{ new Date().getFullYear() }} Oliver Vintage — Todos los derechos reservados.</span>
      <span class="footer__credit">Desarrollado por <a href="https://mouzeh.space" target="_blank">Mouzeh</a></span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #111;
  color: #d1d5db;
  font-family: 'Georgia', serif;
}

.footer__top {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 3.5rem 2rem 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer__brand {
  flex: 1;
  min-width: 200px;
  max-width: 260px;
  animation: fadeInUp 0.8s ease-out;
}

.footer__logo {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.footer__tagline {
  font-size: 0.82rem;
  line-height: 1.7;
  color: #9ca3af;
  margin-bottom: 1.25rem;
}

.footer__socials {
  display: flex;
  gap: 0.85rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid #374151;
  border-radius: 50%;
  color: #9ca3af;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both;
}

.social-icon:nth-child(1) { animation-delay: 0.1s; }
.social-icon:nth-child(2) { animation-delay: 0.2s; }
.social-icon:nth-child(3) { animation-delay: 0.3s; }

.social-icon:hover {
  border-color: #fff;
  color: #fff;
  background: #1f2937;
  transform: translateY(-3px);
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  flex: 2;
  animation: fadeInUp 0.8s ease-out 0.2s;
  animation-fill-mode: both;
}

.footer__col {
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both;
}

.footer__col:nth-child(1) { animation-delay: 0.3s; }
.footer__col:nth-child(2) { animation-delay: 0.4s; }
.footer__col:nth-child(3) { animation-delay: 0.5s; }

.footer__col h4 {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 1rem;
  font-family: 'Georgia', serif;
}

.footer__col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.footer__col ul li a,
.footer__col ul li {
  font-size: 0.83rem;
  color: #6b7280;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.footer__col ul li a:hover {
  color: #e5e7eb;
  transform: translateX(5px);
}

.footer__contact li {
  color: #6b7280;
  transition: color 0.3s ease;
}

.footer__contact li:hover {
  color: #e5e7eb;
}

.footer__contact svg {
  flex-shrink: 0;
  color: #4b5563;
  transition: color 0.3s ease;
}

/* Sección de Medios de Pago */
.footer__payment {
  flex: 1;
  min-width: 220px;
  max-width: 280px;
  animation: fadeInRight 0.8s ease-out 0.6s;
  animation-fill-mode: both;
}

.footer__payment h4 {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 1.2rem;
  font-family: 'Georgia', serif;
}

.payment-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.payment-row {
  margin-bottom: 0.5rem;
}

.payment-item {
  border-radius: 8px;
  overflow: hidden;
  background: #1a1a1a;
  padding: 0.5rem;
  transition: all 0.3s ease;
  border: 1px solid #2a2a2a;
}

.payment-item:hover {
  transform: scale(1.05);
  border-color: #4a4a4a;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.payment-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 6px;
}

.payment-icons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.payment-icon {
  width: 48px;
  height: 30px;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 0.7;
  filter: grayscale(50%);
}

.payment-icon:hover {
  opacity: 1;
  filter: grayscale(0%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.payment-icon svg {
  width: 100%;
  height: 100%;
  display: block;
}

.payment-text {
  font-size: 0.7rem;
  color: #6b7280;
  text-align: center;
  margin-top: 0.5rem;
  letter-spacing: 0.05em;
}

/* Animaciones */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.footer__bottom {
  border-top: 1px solid #1f2937;
  padding: 1.2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #4b5563;
  animation: fadeInUp 0.8s ease-out 0.8s;
  animation-fill-mode: both;
}

.footer__credit a {
  color: #6b7280;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
}

.footer__credit a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #d1d5db;
  transition: width 0.3s ease;
}

.footer__credit a:hover {
  color: #d1d5db;
}

.footer__credit a:hover::after {
  width: 100%;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer__top {
    gap: 2rem;
  }
  
  .footer__payment {
    max-width: 100%;
    margin-top: 1rem;
  }
}

@media (max-width: 640px) {
  .footer__brand {
    max-width: 100%;
  }
  
  .footer__bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .footer__top {
    padding: 2.5rem 1.5rem 1.5rem;
  }
  
  .footer__links {
    gap: 1.5rem;
  }
  
  .payment-icons {
    justify-content: flex-start;
  }
}
</style>