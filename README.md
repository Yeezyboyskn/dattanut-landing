# DATTANUT — landing multipágina

Sitio estático accesible para **DATTANUT — Inteligencia que da frutos**, publicado como demostración en GitHub Pages: <https://yeezyboyskn.github.io/dattanut-landing/>.

## Arquitectura

- Doce documentos HTML completos y navegables sin JavaScript.
- `scripts/generate-pages.mjs` contiene el modelo de contenido, metadatos y componentes compartidos; `pnpm run build` regenera los HTML antes de compilar.
- `src/assets/js/main.js` solo mejora la experiencia: menú, filtros, navegación con teclado, validación, consentimiento y revelados.
- `src/assets/css/styles.css` concentra tokens, componentes, responsive y estados de foco.
- `brand/concepts/` conserva tres rutas exploradas; se eligió **Data Seed** por integrar fruto, crecimiento y nodos de información con mejor legibilidad a escala pequeña.

## Desarrollo y build

Requiere Node.js 20 o superior y pnpm 11.

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
```

El build queda en `dist/`. La configuración relativa funciona bajo la subruta del repositorio de GitHub Pages.

## Formulario

El formulario usa el endpoint AJAX de FormSubmit e incluye `_subject`, `_template`, `_captcha`, `_url` y honeypot. Antes de producción:

1. Enviar una prueba controlada desde el dominio publicado.
2. Activar `contacto@dattanut.com` desde el email de FormSubmit.
3. Repetir la prueba y validar recepción, asunto, consentimiento y anti-spam.
4. No enviar datos personales reales durante QA.

## Analítica y privacidad

La interfaz registra la preferencia en `localStorage` con la clave `dattanut-analytics-consent`. GA4 no se carga en esta demostración porque el ID real no fue entregado. La política de privacidad y el aviso legal requieren revisión profesional antes de producción.

## Medición de referencia

Baseline Lighthouse del prototipo anterior (`lighthouse-report.json`):

| Métrica | Antes | Ahora |
|---|---:|---:|
| Performance | 90 | **98** |
| Accessibility | 100 | **100** |
| Best Practices | 100 | **100** |
| SEO | 100 | **100** |
| FCP | 2.6 s | **0.9 s** |
| LCP | 3.0 s | **2.3 s** |
| TBT | 0 ms | **0 ms** |
| CLS | 0.012 | **0** |

La medición final se ejecutó con Lighthouse 13.4.1 en perfil móvil local. La versión actual reduce el JavaScript de producción a ~2.4 kB gzip, el CSS a ~5.2 kB gzip y cada HTML a ~3.3–4.7 kB gzip. `public/og-image.png` pesa menos de 150 KB.

## Activos de marca

- `src/assets/img/logo.svg`: firma horizontal.
- `src/assets/img/logo-mark.svg`: isotipo Data Seed.
- `public/logo.svg`: URL estable para JSON-LD.
- `public/favicon.svg`, `public/favicon.ico`, `public/apple-touch-icon.png`.
- `public/og-image.png`: tarjeta 1200 × 630 con fondo editorial generado y tipografía exacta aplicada localmente.

Prompt final del fondo social, generado con la herramienta integrada: paisaje de datos premium que fusiona huerto chileno, textura de nuez y curvas topográficas; interés visual a la derecha, espacio negativo oscuro a la izquierda; paleta verde bosque y acento hoja; sin texto, logos, personas ni marcas.

## Pendientes del cliente

- Entregar y validar `Brief_Desarrollador_DATTANUT.pdf` (no estaba entre los archivos disponibles).
- Confirmar biografías, credenciales y fotografías del equipo.
- Entregar cifras reales con especie, unidad, periodo, fuente y fecha de corte.
- Validar eventos mediante fecha, organización y enlace oficial.
- Revisar los textos legales para Chile.
- Activar `contacto@dattanut.com` en FormSubmit.
- Entregar el ID de GA4 y verificar Search Console.
- Conectar el dominio final `dattanut.com` cuando se apruebe producción.

## Publicación

`.github/workflows/deploy-pages.yml` compila y despliega `dist/` al hacer push a `main`. `robots.txt`, `sitemap.xml`, canonical, Open Graph y JSON-LD apuntan a la URL real de esta demostración.
