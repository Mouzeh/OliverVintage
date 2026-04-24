# Oliver Vintage 2026

**Plataforma de Moda Circular & Ropa Americana**  
Pedro Montt 635, Villarrica, Chile

---

## 🌲 Tech Stack

### Backend
- **WordPress** (Bedrock Framework)
- **WPGraphQL** - API GraphQL
- **ACF Pro** - Campos personalizados
- **MariaDB 11+** - Base de datos

### Frontend
- **Nuxt 3** - Framework Vue con SSR
- **Tailwind CSS 4.0** - Estilos
- **Pinia** - Gestión de estado
- **GSAP** - Animaciones premium
- **Lenis Scroll** - Smooth scrolling
- **Swiper.js** - Carruseles táctiles

### Infrastructure
- **Docker** - Contenedores para desarrollo
- **Nginx** - Proxy inverso
- **DigitalOcean** - Hosting producción (planificado)

---

## 🚀 Quick Start

### Prerequisitos
- Docker Desktop instalado
- Node.js 20+ (para desarrollo local)
- Composer 2+ (para backend)

### Desarrollo Local

1. **Clonar repositorio**
```bash
cd OliverVintage
```

2. **Configurar variables de entorno**
```bash
cp .env.example .env
# Editar .env con tus credenciales
```

3. **Levantar contenedores**
```bash
docker-compose up -d
```

4. **Acceder a los servicios**
- Frontend: http://olivervintage.test
- WordPress: http://wp.olivervintage.test
- GraphQL: http://wp.olivervintage.test/wp/graphql

### Frontend (Desarrollo directo)

```bash
cd frontend
npm install
npm run dev
```

### Backend (Instalación Bedrock)

```bash
cd backend
composer install
```

---

## 📁 Estructura del Proyecto

```
OliverVintage/
├── backend/                 # WordPress Bedrock
│   ├── composer.json
│   ├── web/
│   │   ├── wp-config.php
│   │   └── app/            # Plugins y temas
│   └── Dockerfile
│
├── frontend/                # Nuxt 3
│   ├── assets/
│   │   └── css/
│   ├── components/
│   │   ├── Header.vue
│   │   └── SearchOverlay.vue
│   ├── graphql/
│   │   └── queries.ts
│   ├── pages/
│   │   └── index.vue
│   ├── stores/
│   │   └── product.ts
│   ├── types/
│   │   └── product.ts
│   ├── utils/
│   │   └── graphql.ts
│   ├── app.vue
│   ├── nuxt.config.ts
│   ├── tailwind.config.js
│   └── package.json
│
├── nginx/                   # Configuración Nginx
│   ├── nginx.conf
│   └── conf.d/
│       └── default.conf
│
├── docker-compose.yml
└── .env.example
```

---

## 🎨 Design System

### Paleta de Colores (Bosque Vintage)
- **Fondo Base:** `#FAF8F5` (Crema)
- **Primario:** `#2C4C3B` (Verde Bosque)
- **Acento:** `#C06E52` (Terracota)
- **Texto:** `#1C1C1A` (Grafito Cálido)

### Tipografía
- **Display:** Segment A Type by Kobuzan (Bold)
- **Body:** Inter / Geist (Sans-Serif geométrica)

---

## 🔒 Seguridad

1. **Aislamiento:** WordPress en subdominio oculto
2. **Rate Limiting:** En endpoints GraphQL
3. **Cifrado:** SSL vía Let's Encrypt (producción)
4. **2FA:** Acceso al CMS restringido
5. **Sanitización:** DOMPurify en frontend
6. **IP Restriction:** WP-Admin protegido

---

## 📊 Custom Post Types

### Catálogo / Productos
- Ropa Americana
- Segunda Mano
- Niños & Bebé
- Moda Técnica (Motos, Nieve, Outdoor)
- Formal/Gala
- Accesorios
- Disfraces

---

## 🛠️ Comandos Útiles

```bash
# Detener contenedores
docker-compose down

# Rebuild contenedores
docker-compose up -d --build

# Ver logs
docker-compose logs -f nuxt-app
docker-compose logs -f wp-engine

# Acceder a contenedor
docker exec -it oliver-vintage-nuxt sh
docker exec -it oliver-vintage-wp bash

# Limpiar todo
docker-compose down -v
```

---

## 📝 License

© 2026 - SURE Studios | Todos los derechos reservados

**Lead Developer:** Rudy Edgardo Castillo Alarcón  
**Agencia:** SURE Studios, Villarrica, Chile
