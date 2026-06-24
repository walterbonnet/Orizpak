# ORIZPAK — Packaging Sustentable de Cáscara de Arroz

Aplicación corporativa e institucional premium enfocada en captación B2B para envases biocompostables de alto rendimiento fabricados a partir de cáscara de arroz (agro-residuo de Corrientes, Argentina).

---

## 🛠️ Tecnologías Utilizadas

- **Core:** [Next.js 16](https://nextjs.org/) (App Router & Server Components por defecto)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Iconos:** [Lucide Icons](https://lucide.dev/)
- **Validación de Formularios:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

---

## ⚡ Optimizaciones de Producción e Impacto

1. **Rendimiento e Importaciones Dinámicas:**
   - Implementación de **Dynamic Imports** (`next/dynamic`) en las secciones pesadas o interactivas de la landing page (`Impacto`, `FAQ`, `ContactoSection`).
   - Reducción del tamaño del JS inicial para asegurar velocidades de carga ultrarrápidas (**Lighthouse Performance Score > 90**).

2. **Arquitectura Híbrida (SSR / SSG / Client Components):**
   - Las páginas principales (`/`, `/nosotros`, `/productos`, `/contacto`) son **Server Components puros** que manejan las solicitudes iniciales y exportan metadatos.
   - El dinamismo interactivo de los formularios e interfaces se aísla en subcomponentes de cliente optimizados (`*Client.tsx`), reduciendo la hidratación redundante en el navegador.

3. **SEO Semántico y Schema.org (JSON-LD):**
   - Integración nativa con la **Metadata API** de Next.js.
   - Scripts estructurados de **JSON-LD** para búsqueda en Google en la Home (`Organization`/`LocalBusiness`) y en el catálogo (`ItemList`/`Product`), logrando resultados enriquecidos y mejor indexación.
   - Generación dinámica de `sitemap.xml` y `robots.txt` a través de los generadores de ruta integrados en Next.js.

4. **Seguridad y Cabeceras HTTP:**
   - Inyección de cabeceras HTTP de seguridad robustas en `next.config.ts`, incluyendo **Content-Security-Policy (CSP)** restrictiva, **Strict-Transport-Security (HSTS)**, **X-Frame-Options: DENY**, **X-Content-Type-Options: nosniff** y directivas de permisos de navegador.
   - Validación robusta de formularios tanto en cliente (Zod Schemas) como saneamiento por defecto de caracteres especiales.

5. **Google Analytics Integrado:**
   - Carga diferida e interactiva de Google Tag Manager mediante `next/script` configurada a través de variables de entorno.

---

## 🚀 Instalación y Desarrollo Local

Sigue los siguientes pasos para instalar y ejecutar el proyecto localmente:

### Requisitos Previos

- [Node.js](https://nodejs.org/) (Versión v18 o superior recomendada)
- `npm` (o su gestor de paquetes favorito como `yarn` o `pnpm`)

### 1. Clonar o Instalar Dependencias

Navega a la carpeta del proyecto e instala todas las dependencias necesarias:

```bash
npm install
```

### 2. Configurar Variables de Entorno

Duplica el archivo de ejemplo para configurar tus variables locales:

```bash
cp .env.example .env.local
```

Abre el archivo `.env.local` y asigna tu ID de seguimiento de Google Analytics:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. Ejecutar Servidor de Desarrollo

Inicia el servidor local en modo desarrollo:

```bash
npm run dev
```

La aplicación estará disponible para previsualización en:
👉 [http://localhost:3000](http://localhost:3000)

### 4. Compilación para Producción

Para compilar y optimizar la aplicación para su distribución:

```bash
npm run build
```

Este comando verifica el tipado estático con TypeScript, comprueba la sintaxis con el Linter y genera un bundle óptimo y estático en la carpeta `.next`.

### 5. Iniciar Servidor de Producción

Una vez compilado, puedes simular y correr el servidor optimizado en local:

```bash
npm run start
```

---

## 📦 Despliegue en Vercel

El proyecto está completamente preparado para ser desplegado en la infraestructura de Vercel con un solo clic.

### Pasos para Desplegar:

1. **Subir a Git:** Sube tu código a un repositorio remoto en GitHub, GitLab o Bitbucket.
2. **Importar Proyecto:** Inicia sesión en [Vercel](https://vercel.com/) e importa tu repositorio.
3. **Configurar Variables:** En el panel de configuración de variables de entorno en Vercel, agrega la variable de producción:
   - `NEXT_PUBLIC_GA_ID` con tu ID de seguimiento correspondiente.
4. **Deploy:** Haz clic en **Deploy**. Vercel detectará la estructura de Next.js, configurará los scripts por defecto e iniciará el empaquetado de producción de forma automática.
