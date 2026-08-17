# DATTANUT — prototipo multipágina

Sitio estático responsive para **DATTANUT — Inteligencia que da frutos**, construido con Vite, Tailwind CSS y JavaScript vanilla. La versión actual está orientada a la demostración navegable del 19 de agosto de 2026.

## Páginas

- `index.html`: inicio, propuesta de valor, fuentes, beneficios, especies, biblioteca y CTA.
- `productos.html`: índice de especies y estructura homogénea.
- `pecanos.html`, `nueces.html`, `almendras.html`, `avellanas.html`: fichas técnicas por especie.
- `precios.html`: tabla interactiva preparada para referencias verificadas.
- `biblioteca.html`: búsqueda y filtros por especie y estado.
- `eventos.html`: estado “Próximamente”, sin eventos ficticios.
- `contacto.html`: formulario accesible y FAQ.
- `aviso-legal.html`, `privacidad.html`: textos provisionales para revisión.
- `404.html`, `robots.txt`, `sitemap.xml`: recursos públicos de soporte.

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
pnpm install
pnpm run dev
```

Abra la URL local indicada por Vite.

## Build de producción

```bash
pnpm run build
pnpm run preview
```

El resultado se genera en `dist/`. La configuración `base: './'` permite servir el mismo build desde la ruta de un repositorio de GitHub Pages.

## Dónde editar

- Contenido, fichas, FAQ, filtros y formulario: `src/assets/js/main.js`.
- Colores, tipografía, componentes y responsive: `src/assets/css/styles.css`.
- Títulos, descripciones, canonical y Open Graph: cada archivo `src/*.html`.
- Imágenes: `src/assets/img/`.
- Logo provisional: `src/assets/img/logo-placeholder.svg` y `public/logo-placeholder.svg`.
- Social preview: `public/og-image.png` (1200 × 630).
- Disclaimer: aparece en `src/assets/js/main.js`; conservar su redacción literal.
- Fuente de verdad y mapa de decisiones: `BRIEF_DATTANUT.md`.

## Formulario de contacto

El formulario usa FormSubmit sin backend:

```text
https://formsubmit.co/contacto@dattanut.com
```

Antes de usarlo en producción:

1. Enviar una prueba desde el dominio autorizado.
2. Abrir el email de activación que FormSubmit envía a `contacto@dattanut.com`.
3. Confirmar la dirección receptora.
4. Repetir una prueba y validar recepción, asunto y anti-spam.

El código conserva el endpoint marcado como `[CONFIGURAR: confirmar email en FormSubmit]`. Como alternativa, puede reemplazarse por un endpoint de Formspree manteniendo los mismos nombres de campos y estados accesibles.

## GA4, consentimiento y Search Console

- Reemplace `G-XXXXXXXXXX` en `src/assets/js/main.js` por el ID real de GA4.
- GA4 se inyecta solo después de que el visitante acepte las cookies analíticas.
- La preferencia se guarda en `localStorage` bajo `dattanut-analytics-consent`.
- Para volver a probar el banner, elimine esa clave desde las herramientas del navegador.
- Search Console queda pendiente de verificar `dattanut.com` mediante el método definido por el administrador del dominio.

## Integrar datos reales

No se publicaron cifras inventadas. Para reemplazar los placeholders:

1. Confirme la unidad exacta de cada referencia.
2. Añada especie, valor, periodo, fuente y fecha de corte.
3. Mantenga el estado de validación visible.
4. No publique valores identificables de exportadores individuales.
5. Actualice tanto la tabla de `preciosPage()` como la tabla común de `speciesPage()`.

Los artículos provisionales están definidos en el arreglo `articles`. Cada elemento requiere título, resumen, especie y estado (`Validado`, `En revisión` o `Por validar`).

## Imágenes generadas para el prototipo

Se generaron seis recursos con el generador integrado: huerto hero, pecanos, nueces, almendras, avellanas y tarjeta social. Los prompts finales siguieron una fotografía editorial dark, texturas reales, composición horizontal, acento verde y prohibición de texto/logos/marcas en las imágenes de contenido. La tarjeta social usa literalmente “DATTANUT”, “Inteligencia que da frutos” y “Frutos secos · Datos · Chile”.

Rutas finales consumidas por el proyecto:

- `src/assets/img/hero-orchard.webp`
- `src/assets/img/pecans.webp`
- `src/assets/img/walnuts.webp`
- `src/assets/img/almonds.webp`
- `src/assets/img/hazelnuts.webp`
- `public/og-image.png`

## Pendientes del cliente

- Sustituir el logo `[PLACEHOLDER]` por `logodattaparainformes.png`.
- Entregar o validar `Brief_Desarrollador_DATTANUT.pdf` y reemplazar los textos provisionales.
- Entregar cifras reales y trazables para referencias de mercado.
- Revisar los textos legales con asesoría adecuada para Chile.
- Confirmar `contacto@dattanut.com` en FormSubmit.
- Crear GA4, pegar el ID real y verificar Search Console.
- Definir el proceso editorial para biblioteca y eventos.
- Conectar el dominio final `dattanut.com` cuando se apruebe la versión de producción.

## Despliegue en GitHub Pages

El repositorio incluye el workflow `.github/workflows/deploy-pages.yml`. En cada push a `main`, GitHub Actions instala dependencias, compila Vite y publica `dist/` mediante GitHub Pages.

Para una publicación manual inicial con GitHub CLI:

```bash
gh auth status
gh repo create dattanut-landing --public --source . --remote origin --push
```

Luego habilite **Pages → GitHub Actions** si el workflow no lo activa automáticamente.
