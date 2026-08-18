import { readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(process.cwd(), 'src');
const contentDir = resolve(process.cwd(), 'content');
const origin = 'https://dattanut.com/';

function load(name, fallback) {
  try {
    return JSON.parse(readFileSync(resolve(contentDir, `${name}.json`), 'utf8'));
  } catch {
    return fallback;
  }
}

const config = load('sitio', {
  marca: 'DATTANUT', tagline: 'Inteligencia que da frutos',
  demoBar: 'Demostración editorial · Los datos reales siguen sujetos a validación del cliente.',
  metaDescripcion: 'Datos y conocimiento para la industria chilena de frutos secos.',
  ogImagenAlt: 'DATTANUT, inteligencia y trazabilidad para frutos secos de Chile',
  nav: { inicio: 'Inicio', productos: 'Productos', precios: 'Precios', biblioteca: 'Biblioteca', eventos: 'Eventos', contacto: 'Contacto' },
  fuentes: ['ODEPA', 'Aduanas', 'INC', 'USDA'],
  contacto: { nombre: 'Richard López', email: 'contacto@dattanut.com', horario: 'Lunes a viernes · horario de oficina · Chile', respuesta: 'Richard López es el contacto del proyecto. Respondemos normalmente dentro de 48 horas hábiles.' },
  footer: {
    descripcion: 'Una plataforma chilena para ordenar y contextualizar información técnica y comercial sobre frutos secos.',
    fuentes: 'Fuentes de referencia: ODEPA, Aduanas, INC y USDA. Todo dato publicado debe indicar fuente, periodo y corte.',
    disclaimer: 'Información educativa y sectorial. No reemplaza asesoría agronómica, análisis de laboratorio, visita a terreno ni revisión normativa.',
    explorar: 'Explorar', contactoYLegal: 'Contacto y legal',
    enlaces: { productos: 'Productos', precios: 'Referencias de mercado', biblioteca: 'Biblioteca', eventos: 'Eventos', avisoLegal: 'Aviso legal', privacidad: 'Privacidad' },
  },
  cookie: { titulo: 'Analítica bajo su control.', texto: 'GA4 solo se activa después de su autorización.', aceptar: 'Aceptar', rechazar: 'Rechazar' },
  ui: { saltarAlContenido: 'Saltar al contenido', abrirMenu: 'Abrir menú', cerrarAviso: 'Cerrar aviso', irAlInicio: 'ir al inicio', breadcrumbInicio: 'Inicio', migasDePan: 'Migas de pan', conversemos: 'Conversemos', contactarEquipo: 'Contactar al equipo' },
});
const inicio = load('inicio', {
  seo: { titulo: 'Inicio', descripcion: config.metaDescripcion },
  hero: {
    imagen: 'hero-orchard.webp', imagenAlt: 'Huerto de nogales al amanecer',
    eyebrow: 'Inteligencia sectorial · Chile', titulo: 'Inteligencia que da frutos', resaltado: 'da frutos',
    texto: 'Datos de mercado y conocimiento técnico organizado para entender la industria chilena de pecanos, nueces, almendras y avellanas.',
    acciones: [{ label: 'Explorar productos', url: 'productos.html' }, { label: 'Ver referencias', url: 'precios.html' }],
    meta: ['Acceso abierto', 'Fuentes trazables', 'Datos anonimizados'],
  },
  trust: { label: 'Fuentes de referencia' },
  comoFunciona: {
    eyebrow: 'Cómo funciona', titulo: 'De la fuente a una lectura ', resaltado: 'útil',
    lede: 'DATTANUT propone una ruta simple para reducir dispersión sin convertir información incompleta en certezas.',
    pasos: [
      { titulo: 'Explorar', texto: 'Elija una especie o una pregunta sectorial.' },
      { titulo: 'Verificar', texto: 'Revise fuente, periodo, unidad y fecha de corte.' },
      { titulo: 'Profundizar', texto: 'Conecte la referencia con contenido técnico y contexto.' },
    ],
  },
  porEspecie: { eyebrow: 'Por especie', titulo: 'Cuatro cadenas. Una ', resaltado: 'misma lógica', texto: 'Una estructura homogénea para encontrar contexto, fuentes y contenidos relacionados.' },
  quienes: {
    eyebrow: 'Quiénes están detrás', titulo: 'Experiencia sectorial con ', resaltado: 'criterio editorial',
    lede: 'DATTANUT es impulsado por profesionales vinculados al sector agrícola chileno. {contacto} es el contacto del proyecto; las biografías y credenciales ampliadas se publicarán cuando el cliente las valide.',
    boton: { label: 'Conocer el proyecto', url: 'contacto.html' },
  },
  metricas: [
    { valor: '4', texto: 'especies cubiertas por la arquitectura actual' },
    { valor: '100%', texto: 'de las cifras futuras deberán mostrar trazabilidad mínima' },
    { valor: '0', texto: 'datos de mercado inventados en esta demostración' },
  ],
  agenda: {
    eyebrow: 'Agenda sectorial', titulo: 'Publicar solo cuando se puede ', resaltado: 'verificar',
    lede: 'La agenda está preparada, pero permanece sin eventos hasta contar con fecha, organización y enlace oficiales.',
    boton: { label: 'Ver criterio editorial', url: 'eventos.html' },
    card: { status: 'Agenda en preparación', titulo: 'Proponga una actividad', texto: 'Evaluaremos pertinencia sectorial, fuente oficial y vigencia antes de publicarla.', boton: { label: 'Proponer evento', url: 'contacto.html?motivo=Proponer%20contenido' } },
  },
  faq: { eyebrow: 'Preguntas frecuentes', titulo: 'Reglas claras desde el ', resaltado: 'inicio' },
  cta: { titulo: 'Conecte su experiencia con una mirada sectorial.', copy: 'Participe, proponga contenido o solicite información al equipo DATTANUT.' },
});
const productos = load('productos', {
  seo: { titulo: 'Productos', descripcion: '' },
  hero: { eyebrow: 'Productos', titulo: 'Datos por especie, ', resaltado: 'sin perder contexto', texto: 'Explore cuatro cadenas con una estructura común: panorama, trazabilidad y contenidos técnicos.' },
  cardCta: 'Contexto, referencias y biblioteca',
  arquitectura: {
    eyebrow: 'Arquitectura común', titulo: 'Tres capas para ', resaltado: 'interpretar mejor',
    cards: [
      { label: '01 · Contexto', titulo: 'Panorama técnico-comercial', texto: 'Variables principales y posición de la cadena.' },
      { label: '02 · Evidencia', titulo: 'Fuente, periodo y corte', texto: 'Trazabilidad visible junto a cada referencia.' },
      { label: '03 · Profundización', titulo: 'Biblioteca relacionada', texto: 'Contenidos vinculados por especie y estado editorial.' },
    ],
  },
  cta: { titulo: '¿Quiere aportar información sectorial?', copy: 'La participación se gestiona con anonimización, confidencialidad y revisión editorial.', boton: { label: 'Participar como exportador', url: 'contacto.html?motivo=Participar%20como%20exportador' } },
  especie: {
    fichaEyebrow: 'Ficha de especie · {latin}',
    panorama: { eyebrow: 'Panorama', titulo: 'Una lectura técnica y ', resaltado: 'trazable', notice: 'El panorama cuantitativo se incorporará cuando el cliente entregue y valide superficie, producción, calibres, destinos y temporadas.' },
    criterios: { label: 'Criterios mínimos', items: ['Fuente identificada', 'Periodo explícito', 'Unidad comparable', 'Fecha de corte visible'] },
    referencias: { eyebrow: 'Referencias de mercado', titulo: 'Estructura disponible; cifras ', resaltado: 'en validación', texto: 'No publicamos valores ficticios. Esta tabla documenta el esquema que recibirá los datos reales.' },
    acciones: { biblioteca: { label: 'Ver biblioteca', url: 'biblioteca.html?especie={especie}' }, solicitar: { label: 'Solicitar información', url: 'contacto.html' } },
    cta: { titulo: 'Fortalezcamos la referencia de {nombre}.', copy: 'La publicación agregada requiere anonimización, confidencialidad y revisión previa.', boton: { label: 'Participar como exportador', url: 'contacto.html?motivo=Participar%20como%20exportador' } },
  },
});
const precios = load('precios', {
  seo: { titulo: 'Referencias de mercado', descripcion: 'Referencias preparadas para publicar datos con fuente, periodo, unidad y fecha de corte.' },
  pagina: {
    hero: { eyebrow: 'Referencias de mercado', titulo: 'Precios con ', resaltado: 'contexto verificable', texto: 'La estructura está lista para cifras reales; el dataset final aún no ha sido entregado.' },
    filtros: { buscar: 'Buscar', placeholder: 'Especie, fuente o periodo', especie: 'Especie', todas: 'Todas' },
    tabla: { headers: ['Especie', 'Referencia', 'Periodo', 'Fuente', 'Corte'], unidad: 'Unidad: por definir', dataset: 'Dataset: pendiente del cliente', pendiente: 'Dato sujeto a validación', porConfirmar: 'Por confirmar' },
    vacio: 'No hay coincidencias con los filtros actuales.',
  },
  cta: { titulo: '¿Necesita una lectura específica?', copy: 'Cuéntenos qué especie, periodo y unidad necesita revisar.' },
  precios: [],
});
const biblioteca = load('biblioteca', {
  seo: { titulo: 'Biblioteca técnica', descripcion: 'Contenidos por especie con un estado editorial visible.' },
  hero: { eyebrow: 'Biblioteca técnica', titulo: 'Conocimiento con un estado ', resaltado: 'visible', texto: 'Busque por especie y nivel de revisión editorial.' },
  filtros: { buscar: 'Buscar', placeholder: 'Tema o palabra clave', especie: 'Especie', todas: 'Todas', estado: 'Estado', todos: 'Todos', estados: ['Validado', 'En revisión', 'Por validar'] },
  transversal: 'Transversal',
  vacio: { titulo: 'Sin resultados', texto: 'Pruebe otra palabra o restablezca los filtros.' },
  cta: { titulo: '¿Tiene conocimiento que aportar?', copy: 'Proponer no garantiza publicación: todo contenido pasa por revisión editorial.', boton: { label: 'Proponer contenido', url: 'contacto.html?motivo=Proponer%20contenido' } },
});
const eventosData = load('eventos', {
  seo: { titulo: 'Eventos', descripcion: 'Agenda sectorial con criterios de verificación antes de publicar.' },
  pagina: {
    hero: { eyebrow: 'Agenda sectorial', titulo: 'Eventos con ', resaltado: 'verificación previa', texto: 'Solo publicaremos actividades con fecha, organización y enlace oficial confirmados.' },
    estado: { eyebrow: 'Estado de agenda', conTitulo: 'Eventos ', conResaltado: 'confirmados', conLede: 'Actividades publicadas tras verificar organización, fecha y enlace oficial.', sinTitulo: 'Sin eventos confirmados ', sinResaltado: 'por ahora', sinLede: 'Preferimos una agenda breve y confiable a publicar información incompleta. El espacio ya está preparado para integrar encuentros validados.' },
    criterios: { status: 'Recepción abierta', titulo: 'Criterios para publicar', items: ['Organización identificable', 'Fecha y lugar confirmados', 'Enlace oficial vigente', 'Relevancia para frutos secos'], boton: { label: 'Proponer actividad', url: 'contacto.html?motivo=Proponer%20contenido' } },
  },
  estados: { confirmado: 'Confirmado', organiza: 'Organiza:', verDetalle: 'Ver detalle' },
  eventos: [],
});
const contactoData = load('contacto', {
  seo: { titulo: 'Contacto', descripcion: 'Converse con el equipo DATTANUT o proponga una colaboración sectorial.' },
  hero: { eyebrow: 'Contacto', titulo: 'Conversemos sobre ', resaltado: 'información que sirve', texto: 'Seleccione el motivo y entregue el contexto mínimo para orientar la respuesta.' },
  canal: { eyebrow: 'Canal directo', titulo: 'Una respuesta ', resaltado: 'contextualizada' },
  form: {
    nombre: 'Nombre', email: 'Email', organizacion: 'Organización', opcional: '(opcional)', motivo: 'Motivo', seleccione: 'Seleccione',
    opciones: ['Solicitar información', 'Participar como exportador', 'Proponer contenido', 'Otro'],
    mensaje: 'Mensaje', enviar: 'Enviar mensaje', nota: 'Datos usados solo para responder su consulta. Sin consentimiento, no se activa analítica.', asunto: 'Nuevo mensaje desde dattanut.com',
  },
});
const legales = load('legales', {
  seo: { aviso: { titulo: 'Aviso legal', descripcion: 'Alcance y condiciones de uso de esta demostración.' }, privacidad: { titulo: 'Privacidad', descripcion: 'Principios de privacidad, formularios y consentimiento analítico.' } },
  aviso: { heroTitulo: 'Alcance de esta ', heroResaltado: 'demostración', heroTexto: 'Condiciones editoriales y de uso que requieren revisión legal antes de producción.', eyebrow: 'Alcance', titulo: 'Uso informativo del sitio', intro: 'Este sitio es una demostración editorial de DATTANUT. El texto definitivo deberá ser revisado por asesoría legal antes del lanzamiento de producción.', secciones: [{ heading: 'Exactitud y actualización', parrafos: ['DATTANUT busca mostrar fuente, periodo, unidad y fecha de corte. La información cambia y debe revisarse antes de decidir.'] }, { heading: 'Propiedad y uso', parrafos: ['La identidad, estructura y contenidos no pueden reutilizarse de forma que induzca a error sobre su origen.'] }, { heading: 'Limitación sectorial', parrafos: ['El contenido no reemplaza asesoría agronómica, análisis de laboratorio, visita a terreno ni revisión normativa.'] }] },
  privacidad: { heroTitulo: 'Privacidad y ', heroResaltado: 'control', heroTexto: 'Principios aplicados al formulario y a la analítica opcional.', eyebrow: 'Principios', titulo: 'Datos mínimos y consentimiento', intro: 'Solicitamos nombre, email, motivo, mensaje y organización opcional para gestionar consultas. El formulario usa FormSubmit y la dirección receptora debe activarse antes de producción.', secciones: [{ heading: 'Analítica', parrafos: ['GA4 permanece desactivado hasta obtener consentimiento. La preferencia se guarda localmente.'] }, { heading: 'Conservación y derechos', parrafos: ['La política final deberá definir responsable, plazos y mecanismos de acceso, rectificación o eliminación.'] }, { heading: 'Datos sectoriales', parrafos: ['Los aportes de exportadores deben anonimizarse y publicarse de forma agregada.'] }] },
  aside: { status: 'Revisión legal pendiente', titulo: 'Responsable del proyecto' },
});
const especiesData = load('especies', { especies: [] });
const articles = load('articulos', { articulos: [] }).articulos;
const faqItems = load('faq', { faq: [] }).faq;
const priceRows = precios.precios;
const eventos = eventosData.eventos;

const species = Object.fromEntries(especiesData.especies.map((e) => [e.key, [e.name, e.latin, e.image, e.copy, e.alt, e.seo]]));
const speciesNames = Object.fromEntries(especiesData.especies.map((e) => [e.key, e.name]));
const speciesByKey = Object.fromEntries(especiesData.especies.map((e) => [e.key, e]));
const speciesDesc = (e) => (e.seo && e.seo.descripcion) || e.copy;
const pages = {
  index: [inicio.seo.titulo, inicio.seo.descripcion],
  productos: [productos.seo.titulo, productos.seo.descripcion || `Explore ${especiesData.especies.map((e) => e.name.toLowerCase()).join(', ')} con una estructura común.`],
  ...Object.fromEntries(especiesData.especies.map((e) => [e.key, [e.seo.titulo, speciesDesc(e)]])),
  precios: [precios.seo.titulo, precios.seo.descripcion],
  biblioteca: [biblioteca.seo.titulo, biblioteca.seo.descripcion],
  eventos: [eventosData.seo.titulo, eventosData.seo.descripcion],
  contacto: [contactoData.seo.titulo, contactoData.seo.descripcion],
  'aviso-legal': [legales.seo.aviso.titulo, legales.seo.aviso.descripcion],
  privacidad: [legales.seo.privacidad.titulo, legales.seo.privacidad.descripcion],
};
const nav = [['index', config.nav.inicio], ['productos', config.nav.productos], ['precios', config.nav.precios], ['biblioteca', config.nav.biblioteca], ['eventos', config.nav.eventos], ['contacto', config.nav.contacto]];
const href = (key) => `${key}.html`;
const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const subs = (s, map) => String(s).replace(/\{(\w+)\}/g, (m, k) => (k in map ? map[k] : m));
const arrow = '<span aria-hidden="true">↗</span>';
const img = (file) => `./assets/img/${String(file).split('/').pop()}`;
const gold = (title, resaltado) => (resaltado ? title.replace(resaltado, `<span class="text-gold">${resaltado}</span>`) : title);

function head(key) {
  const [title, description] = pages[key];
  const path = key === 'index' ? '' : `${key}.html`;
  const canonical = `${origin}${path}`;
  const image = `${origin}og-image.png`;
  const schema = { '@context': 'https://schema.org', '@type': key === 'index' ? 'WebSite' : 'WebPage', name: title, description, url: canonical, isPartOf: { '@type': 'WebSite', name: config.marca, url: origin }, publisher: { '@type': 'Organization', name: config.marca, url: origin, logo: { '@type': 'ImageObject', url: `${origin}logo.png`, width: 920, height: 260 } } };
  return `<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><script>document.documentElement.classList.add('js')</script>
  <title>${title === 'Inicio' ? `${config.marca} · ${config.tagline}` : `${title} · ${config.marca}`}</title><meta name="description" content="${esc(description)}"><meta name="theme-color" content="#0c0b08"><link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website"><meta property="og:locale" content="es_CL"><meta property="og:site_name" content="${config.marca}"><meta property="og:title" content="${esc(title)} · ${config.marca}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${image}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="${esc(config.ogImagenAlt)}">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)} · ${config.marca}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${image}">
  <link rel="icon" href="./favicon.png" type="image/png"><link rel="icon" href="./favicon.ico" sizes="any"><link rel="apple-touch-icon" href="./apple-touch-icon.png"><link rel="preload" href="./assets/fonts/space-grotesk.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="./assets/fonts/inter.woff2" as="font" type="font/woff2" crossorigin><script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

function brand(markSize, copyStrong) {
  return `<span class="brand__mark"><img src="${img('logo-mark.png')}" width="${markSize}" height="${markSize}" alt=""></span><span class="brand__copy"><strong style="font-size:${copyStrong}">${config.marca}</strong><small>${config.tagline}</small></span>`;
}
function header(key) {
  const active = species[key] ? 'productos' : key;
  return `<a class="skip-link" href="#main-content">${esc(config.ui.saltarAlContenido)}</a><aside class="demo-bar" data-demo><span>${esc(config.demoBar)}</span><button type="button" data-demo-close aria-label="${esc(config.ui.cerrarAviso)}">×</button></aside><header class="site-header" data-header><div class="container nav"><a class="brand" href="index.html" aria-label="${config.marca}, ${esc(config.ui.irAlInicio)}">${brand(54, '1.18rem')}</a><button class="nav__toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="${esc(config.ui.abrirMenu)}" data-nav-toggle><span></span></button><nav class="nav__links" id="primary-navigation" aria-label="Navegación principal" data-nav>${nav.map(([k, l]) => `<a href="${href(k)}"${active === k ? ' aria-current="page"' : ''}>${esc(l)}</a>`).join('')}</nav></div></header>`;
}
function footer() {
  return `<footer class="site-footer"><div class="container footer__grid"><div class="footer__about"><a class="brand brand--footer" href="index.html" aria-label="${config.marca}, ${esc(config.ui.irAlInicio)}">${brand(60, '1.35rem')}</a><p>${esc(config.footer.descripcion)}</p></div><nav class="footer__nav" aria-label="${esc(config.footer.explorar)}"><strong>${esc(config.footer.explorar)}</strong><a href="productos.html">${esc(config.footer.enlaces.productos)}</a><a href="precios.html">${esc(config.footer.enlaces.precios)}</a><a href="biblioteca.html">${esc(config.footer.enlaces.biblioteca)}</a><a href="eventos.html">${esc(config.footer.enlaces.eventos)}</a></nav><div class="footer__nav"><strong>${esc(config.footer.contactoYLegal)}</strong><a href="mailto:${config.contacto.email}">${config.contacto.email}</a><span>${esc(config.contacto.horario)}</span><a href="aviso-legal.html">${esc(config.footer.enlaces.avisoLegal)}</a><a href="privacidad.html">${esc(config.footer.enlaces.privacidad)}</a></div></div><div class="footer__disclaimer"><div class="container">${esc(config.footer.disclaimer)}</div></div><div class="container footer__bottom"><span>© <span data-year>2026</span> ${config.marca}.</span><span>${esc(config.footer.fuentes)}</span></div></footer><section class="cookie-banner" aria-label="Preferencias de analítica" data-cookie-banner hidden><p><strong>${esc(config.cookie.titulo)}</strong> ${esc(config.cookie.texto)}</p><div class="cookie-banner__actions"><button class="btn btn--primary" type="button" data-cookie-accept>${esc(config.cookie.aceptar)}</button><button class="btn btn--ghost" type="button" data-cookie-reject>${esc(config.cookie.rechazar)}</button><a class="btn btn--ghost" href="privacidad.html">${esc(config.footer.enlaces.privacidad)}</a></div></section>`;
}
function breadcrumb(current, parent = '') {
  return `<nav class="breadcrumb" aria-label="${esc(config.ui.migasDePan)}"><a href="index.html">${esc(config.ui.breadcrumbInicio)}</a><span aria-hidden="true">/</span>${parent ? `<a href="${parent}.html">${esc(pages[parent][0])}</a><span aria-hidden="true">/</span>` : ''}<span aria-current="page">${esc(current)}</span></nav>`;
}
function hero(eyebrow, title, copy, image = 'hero-orchard.webp', parent = '', current = eyebrow) {
  return `<section class="page-hero"><img class="page-hero__image" src="${img(image)}" width="1280" height="853" fetchpriority="high" alt=""><div class="container page-hero__content">${breadcrumb(current, parent)}<span class="eyebrow">${esc(eyebrow)}</span><h1>${title}</h1><p>${esc(copy)}</p></div></section>`;
}
function cta(title, copy, label = config.ui.contactarEquipo, url = 'contacto.html') {
  return `<section class="section"><div class="container"><div class="cta-panel reveal"><div><span class="eyebrow">${esc(config.ui.conversemos)}</span><h2>${esc(title)}</h2><p>${esc(copy)}</p></div><a class="btn btn--primary" href="${url}">${esc(label)} ${arrow}</a></div></div></section>`;
}
function speciesTabs(active = '') {
  return `<nav class="tabs" aria-label="Especies" data-tabs>${Object.entries(species).map(([k, v]) => `<a href="${k}.html"${active === k ? ' aria-current="page"' : ''}>${esc(v[0])}</a>`).join('')}</nav>`;
}
function cards() {
  return Object.entries(species).map(([k, [name, latin, file]]) => `<a class="card species-card reveal" href="${k}.html"><img src="${img(file)}" width="1280" height="853" loading="lazy" alt="${esc((speciesByKey[k].alt) || `${name} sobre una superficie oscura`)}"><span class="species-card__content"><span><span class="label">${esc(latin)}</span><h3>${esc(name)}</h3><p>${esc(productos.cardCta)}</p></span><span class="species-card__arrow" aria-hidden="true">↗</span></span></a>`).join('');
}
function faq(items, prefix = 'faq') {
  return `<div class="faq">${items.map(([q, a], i) => `<details class="faq__item" id="${prefix}-${i + 1}"><summary>${esc(q)}<span aria-hidden="true">+</span></summary><div><p>${esc(a)}</p></div></details>`).join('')}</div>`;
}

function home() {
  const highlighted = gold(inicio.hero.titulo, inicio.hero.resaltado);
  const how = inicio.comoFunciona.pasos.map((p, i) => [String(i + 1).padStart(2, '0'), p.titulo, p.texto]);
  return `<main id="main-content"><section class="hero"><img class="hero__image" src="${img(inicio.hero.imagen)}" width="1280" height="853" fetchpriority="high" alt="${esc(inicio.hero.imagenAlt)}"><div class="container hero__content"><div><span class="eyebrow">${esc(inicio.hero.eyebrow)}</span><h1>${highlighted}</h1><p>${esc(inicio.hero.texto)}</p></div><div class="hero__actions">${inicio.hero.acciones.map((a, i) => `<a class="btn ${i === 0 ? 'btn--primary' : 'btn--ghost'}" href="${a.url}">${esc(a.label)}${i === 0 ? ` ${arrow}` : ''}</a>`).join('')}</div><div class="hero__meta">${inicio.hero.meta.map((m) => `<span>${esc(m)}</span>`).join('')}</div></div></section><section class="trust-strip"><div class="container trust-strip__inner"><p>${esc(inicio.trust.label)}</p><div class="trust-list">${config.fuentes.map((f) => `<span>${esc(f)}</span>`).join('')}</div></div></section><section class="section"><div class="container"><div class="section-heading section-heading--split"><div><span class="eyebrow">${esc(inicio.comoFunciona.eyebrow)}</span><h2>${gold(inicio.comoFunciona.titulo, inicio.comoFunciona.resaltado)}</h2></div><p class="lede">${esc(inicio.comoFunciona.lede)}</p></div><div class="grid grid--3">${how.map((x) => `<article class="card card--padded process"><span>${esc(x[0])}</span><h3>${esc(x[1])}</h3><p>${esc(x[2])}</p></article>`).join('')}</div></div></section><section class="section surface"><div class="container"><div class="section-heading section-heading--split"><div><span class="eyebrow">${esc(inicio.porEspecie.eyebrow)}</span><h2>${gold(inicio.porEspecie.titulo, inicio.porEspecie.resaltado)}</h2></div><p>${esc(inicio.porEspecie.texto)}</p></div><div class="grid grid--4">${cards()}</div></div></section><section class="section"><div class="container split"><div><span class="eyebrow">${esc(inicio.quienes.eyebrow)}</span><h2>${gold(inicio.quienes.titulo, inicio.quienes.resaltado)}</h2><p class="lede space-top">${esc(subs(inicio.quienes.lede, { contacto: config.contacto.nombre }))}</p><a class="btn btn--ghost space-top" href="${inicio.quienes.boton.url}">${esc(inicio.quienes.boton.label)}</a></div><div class="metric-stack">${inicio.metricas.map((m) => `<article class="card metric"><strong>${esc(m.valor)}</strong><p>${esc(m.texto)}</p></article>`).join('')}</div></div></section><section class="section surface"><div class="container split"><div><span class="eyebrow">${esc(inicio.agenda.eyebrow)}</span><h2>${gold(inicio.agenda.titulo, inicio.agenda.resaltado)}</h2><p class="lede space-top">${esc(inicio.agenda.lede)}</p><a class="btn btn--ghost space-top" href="${inicio.agenda.boton.url}">${esc(inicio.agenda.boton.label)}</a></div><article class="card card--padded"><span class="status status--review">${esc(inicio.agenda.card.status)}</span><h3 class="space-top">${esc(inicio.agenda.card.titulo)}</h3><p class="space-top-sm">${esc(inicio.agenda.card.texto)}</p><a class="btn btn--primary space-top" href="${inicio.agenda.card.boton.url}">${esc(inicio.agenda.card.boton.label)}</a></article></div></section><section class="section"><div class="container"><div class="section-heading"><span class="eyebrow">${esc(inicio.faq.eyebrow)}</span><h2>${gold(inicio.faq.titulo, inicio.faq.resaltado)}</h2></div>${faq(faqItems.map((f) => [f.question, f.answer]), 'home-faq')}</div></section>${cta(inicio.cta.titulo, inicio.cta.copy)}</main>`;
}

function products() {
  return `<main id="main-content">${hero(productos.hero.eyebrow, gold(productos.hero.titulo, productos.hero.resaltado), productos.hero.texto, productos.hero.imagen)}<section class="section"><div class="container">${speciesTabs()}<div class="grid grid--4 space-top">${cards()}</div></div></section><section class="section surface"><div class="container"><div class="section-heading"><span class="eyebrow">${esc(productos.arquitectura.eyebrow)}</span><h2>${gold(productos.arquitectura.titulo, productos.arquitectura.resaltado)}</h2></div><div class="grid grid--3">${productos.arquitectura.cards.map((c) => `<article class="card card--padded"><span class="label">${esc(c.label)}</span><h3 class="space-top-sm">${esc(c.titulo)}</h3><p class="space-top-sm">${esc(c.texto)}</p></article>`).join('')}</div></div></section>${cta(productos.cta.titulo, productos.cta.copy, productos.cta.boton.label, productos.cta.boton.url)}</main>`;
}
function speciesPage(key) {
  const [name, latin, file, copy] = species[key];
  const esp = especiesData.especies.find((e) => e.key === key) || {};
  const price = priceRows.find((r) => r.species === key) || {};
  return `<main id="main-content">${hero(subs(productos.especie.fichaEyebrow, { latin }), name, copy, file, 'productos', name)}<section class="section--tight"><div class="container">${speciesTabs(key)}</div></section><section class="section surface"><div class="container split"><div><span class="eyebrow">${esc(productos.especie.panorama.eyebrow)}</span><h2>${gold(productos.especie.panorama.titulo, productos.especie.panorama.resaltado)}</h2><p class="lede space-top">${esc(copy)}</p><p class="notice space-top">${esc(productos.especie.panorama.notice)}</p></div><div class="card card--padded"><span class="label">${esc(productos.especie.criterios.label)}</span><ul class="check-list">${productos.especie.criterios.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div></div></section><section class="section"><div class="container"><div class="section-heading section-heading--split"><div><span class="eyebrow">${esc(productos.especie.referencias.eyebrow)}</span><h2>${gold(productos.especie.referencias.titulo, productos.especie.referencias.resaltado)}</h2></div><p>${esc(productos.especie.referencias.texto)}</p></div><div class="card data-panel"><div class="source-tags"><span>Fuente: ${esc(price.source || precios.pagina.tabla.pendiente)}</span><span>Periodo: ${esc(price.period || precios.pagina.tabla.pendiente)}</span><span>Corte: ${esc(price.cut || precios.pagina.tabla.pendiente)}</span></div><div class="table-wrap space-top"><table><thead><tr>${precios.pagina.tabla.headers.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody><tr><td>${esc(name)}</td><td>${esc(price.reference || precios.pagina.tabla.pendiente)}</td><td>${esc(price.period || '—')}</td><td>${esc(price.source || '—')}</td><td>${esc(price.cut || '—')}</td></tr></tbody></table></div></div><div class="actions space-top"><a class="btn btn--primary" href="${subs(productos.especie.acciones.biblioteca.url, { especie: key })}">${esc(productos.especie.acciones.biblioteca.label)} ${arrow}</a><a class="btn btn--ghost" href="${productos.especie.acciones.solicitar.url}">${esc(productos.especie.acciones.solicitar.label)}</a></div></div></section>${cta(subs(productos.especie.cta.titulo, { nombre: name.toLowerCase() }), productos.especie.cta.copy, productos.especie.cta.boton.label, productos.especie.cta.boton.url)}</main>`;
}
function prices() {
  const rows = priceRows.length ? priceRows.map((r) => `<tr data-price-row data-species="${esc(r.species)}"><td>${speciesNames[r.species] || esc(r.species)}</td><td>${esc(r.reference || precios.pagina.tabla.pendiente)}</td><td>${esc(r.period || precios.pagina.tabla.porConfirmar)}</td><td>${esc(r.source || precios.pagina.tabla.porConfirmar)}</td><td>${esc(r.cut || precios.pagina.tabla.porConfirmar)}</td></tr>`).join('') : Object.entries(species).map(([k, v]) => `<tr data-price-row data-species="${k}"><td>${v[0]}</td><td>${esc(precios.pagina.tabla.pendiente)}</td><td>${esc(precios.pagina.tabla.porConfirmar)}</td><td>${esc(precios.pagina.tabla.porConfirmar)}</td><td>${esc(precios.pagina.tabla.porConfirmar)}</td></tr>`).join('');
  return `<main id="main-content">${hero(precios.pagina.hero.eyebrow, gold(precios.pagina.hero.titulo, precios.pagina.hero.resaltado), precios.pagina.hero.texto, precios.pagina.hero.imagen)}<section class="section"><div class="container"><div class="filter-bar"><div class="field"><label for="price-search">${esc(precios.pagina.filtros.buscar)}</label><input class="input" id="price-search" type="search" placeholder="${esc(precios.pagina.filtros.placeholder)}" data-price-search></div><div class="field"><label for="price-species">${esc(precios.pagina.filtros.especie)}</label><select class="select" id="price-species" data-price-species><option value="todas">${esc(precios.pagina.filtros.todas)}</option>${Object.entries(species).map(([k, v]) => `<option value="${k}">${esc(v[0])}</option>`).join('')}</select></div></div><p class="result-count" aria-live="polite" data-price-count></p><div class="card data-panel"><div class="source-tags"><span>${esc(precios.pagina.tabla.unidad)}</span><span>${esc(precios.pagina.tabla.dataset)}</span></div><div class="table-wrap space-top"><table><thead><tr>${precios.pagina.tabla.headers.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div><p class="empty-state" data-price-empty hidden>${esc(precios.pagina.vacio)}</p></div></div></section>${cta(precios.cta.titulo, precios.cta.copy)}</main>`;
}
function library() {
  return `<main id="main-content">${hero(biblioteca.hero.eyebrow, gold(biblioteca.hero.titulo, biblioteca.hero.resaltado), biblioteca.hero.texto, biblioteca.hero.imagen)}<section class="section"><div class="container"><div class="filter-bar"><div class="field"><label for="library-search">${esc(biblioteca.filtros.buscar)}</label><input class="input" id="library-search" type="search" placeholder="${esc(biblioteca.filtros.placeholder)}" data-library-search></div><div class="field"><label for="library-species">${esc(biblioteca.filtros.especie)}</label><select class="select" id="library-species" data-library-species><option value="todas">${esc(biblioteca.filtros.todas)}</option>${Object.entries(species).map(([k, v]) => `<option value="${k}">${esc(v[0])}</option>`).join('')}</select></div><div class="field"><label for="library-state">${esc(biblioteca.filtros.estado)}</label><select class="select" id="library-state" data-library-state><option value="todos">${esc(biblioteca.filtros.todos)}</option>${biblioteca.filtros.estados.map((s) => `<option>${esc(s)}</option>`).join('')}</select></div></div><p class="result-count" aria-live="polite" data-library-count></p><div class="grid grid--3">${articles.map((a) => `<article class="card article-card" data-article data-species="${esc(a.species || 'todas')}" data-state="${esc(a.state || biblioteca.filtros.estados[2])}" data-search="${esc((a.title + ' ' + a.summary).toLowerCase())}"><div><span class="status">${esc(a.state || biblioteca.filtros.estados[2])}</span><h3 class="space-top">${esc(a.title)}</h3><p class="space-top-sm">${esc(a.summary)}</p></div><span class="label">${a.species === 'todas' ? esc(biblioteca.transversal) : (speciesNames[a.species] || esc(a.species))}</span></article>`).join('')}<div class="card empty-state" data-library-empty hidden><h3>${esc(biblioteca.vacio.titulo)}</h3><p>${esc(biblioteca.vacio.texto)}</p></div></div></div></section>${cta(biblioteca.cta.titulo, biblioteca.cta.copy, biblioteca.cta.boton.label, biblioteca.cta.boton.url)}</main>`;
}
function events() {
  const list = eventos.length ? `<div class="grid grid--3 space-top">${eventos.map((e) => `<article class="card card--padded"><span class="status">${esc(e.state || eventosData.estados.confirmado)}</span><h3 class="space-top">${esc(e.title)}</h3><p class="space-top-sm">${esc(e.date || '')}${e.place ? ` · ${esc(e.place)}` : ''}</p>${e.org ? `<p class="space-top-sm">${esc(eventosData.estados.organiza)} ${esc(e.org)}</p>` : ''}${e.link ? `<p class="space-top-sm"><a class="btn btn--ghost" href="${esc(e.link)}" target="_blank" rel="noopener">${esc(eventosData.estados.verDetalle)} ${arrow}</a></p>` : ''}</article>`).join('')}</div>` : '';
  return `<main id="main-content">${hero(eventosData.pagina.hero.eyebrow, gold(eventosData.pagina.hero.titulo, eventosData.pagina.hero.resaltado), eventosData.pagina.hero.texto, eventosData.pagina.hero.imagen)}<section class="section"><div class="container${eventos.length ? '' : ' split'}"><div><span class="eyebrow">${esc(eventosData.pagina.estado.eyebrow)}</span><h2>${eventos.length ? gold(eventosData.pagina.estado.conTitulo, eventosData.pagina.estado.conResaltado) : gold(eventosData.pagina.estado.sinTitulo, eventosData.pagina.estado.sinResaltado)}</h2>${eventos.length ? `<p class="lede space-top">${esc(eventosData.pagina.estado.conLede)}</p>${list}` : `<p class="lede space-top">${esc(eventosData.pagina.estado.sinLede)}</p>`}</div>${eventos.length ? '' : `<article class="card card--padded"><span class="status status--review">${esc(eventosData.pagina.criterios.status)}</span><h3 class="space-top">${esc(eventosData.pagina.criterios.titulo)}</h3><ul class="check-list">${eventosData.pagina.criterios.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul><a class="btn btn--primary" href="${eventosData.pagina.criterios.boton.url}">${esc(eventosData.pagina.criterios.boton.label)}</a></article>`}</div></section></main>`;
}
function contact() {
  return `<main id="main-content">${hero(contactoData.hero.eyebrow, gold(contactoData.hero.titulo, contactoData.hero.resaltado), contactoData.hero.texto, contactoData.hero.imagen)}<section class="section"><div class="container split split--top"><div><span class="eyebrow">${esc(contactoData.canal.eyebrow)}</span><h2>${gold(contactoData.canal.titulo, contactoData.canal.resaltado)}</h2><p class="lede space-top">${esc(config.contacto.respuesta)}</p><div class="card card--padded space-top"><strong>${config.contacto.email}</strong><p class="space-top-sm">${esc(config.contacto.horario)}</p></div></div><form class="card card--padded" action="https://formsubmit.co/ajax/${config.contacto.email}" method="POST" data-contact-form novalidate><div class="form-grid"><div class="field"><label for="name">${esc(contactoData.form.nombre)}</label><input class="input" id="name" name="Nombre" autocomplete="name" required aria-describedby="name-error"><span class="field-error" id="name-error"></span></div><div class="field"><label for="email">${esc(contactoData.form.email)}</label><input class="input" id="email" name="Email" type="email" autocomplete="email" required aria-describedby="email-error"><span class="field-error" id="email-error"></span></div><div class="field field--full"><label for="org">${esc(contactoData.form.organizacion)} <span>${esc(contactoData.form.opcional)}</span></label><input class="input" id="org" name="Organización" autocomplete="organization"></div><div class="field field--full"><label for="reason">${esc(contactoData.form.motivo)}</label><select class="select" id="reason" name="Motivo" required><option value="">${esc(contactoData.form.seleccione)}</option>${contactoData.form.opciones.map((o) => `<option>${esc(o)}</option>`).join('')}</select></div><div class="field field--full"><label for="message">${esc(contactoData.form.mensaje)}</label><textarea class="textarea" id="message" name="Mensaje" minlength="10" required aria-describedby="message-error"></textarea><span class="field-error" id="message-error"></span></div></div><input type="hidden" name="_subject" value="${esc(contactoData.form.asunto)}"><input type="hidden" name="_template" value="table"><input type="hidden" name="_captcha" value="false"><input type="hidden" name="_url" value="${origin}contacto.html"><input class="honeypot" name="_honey" type="text" tabindex="-1" autocomplete="off"><button class="btn btn--primary" type="submit" data-submit>${esc(contactoData.form.enviar)} ${arrow}</button><p class="form-note">${esc(contactoData.form.nota)}</p><p class="form-status" role="status" data-form-status></p></form></div></section></main>`;
}
function legal(type) {
  const data = type === 'privacidad' ? legales.privacidad : legales.aviso;
  const privacy = type === 'privacidad';
  return `<main id="main-content">${hero(privacy ? 'Privacidad' : 'Aviso legal', gold(data.heroTitulo, data.heroResaltado), data.heroTexto, data.heroImagen)}<section class="section"><div class="container split split--top"><article class="prose"><span class="eyebrow">${esc(data.eyebrow)}</span><h2>${esc(data.titulo)}</h2><p>${esc(data.intro)}</p>${data.secciones.map((s) => `<h3>${esc(s.heading)}</h3>${s.parrafos.map((p) => `<p>${esc(p)}</p>`).join('')}`).join('')}</article><aside class="card card--padded"><span class="status status--review">${esc(legales.aside.status)}</span><h3 class="space-top">${esc(legales.aside.titulo)}</h3><p class="space-top-sm">${esc(config.contacto.nombre)} · ${config.contacto.email}</p><p class="space-top-sm">${esc(config.contacto.horario)}</p></aside></div></section></main>`;
}

const content = { index: home, productos: products, precios: prices, biblioteca: library, eventos: events, contacto: () => contact(), 'aviso-legal': () => legal('aviso-legal'), privacidad: () => legal('privacidad') };
for (const key of Object.keys(pages)) {
  const body = species[key] ? speciesPage(key) : content[key]();
  const html = `<!doctype html><html lang="es"><head>${head(key)}</head><body data-page="${key}">${header(key)}${body}${footer()}<script type="module" src="./assets/js/main.js"></script></body></html>`;
  await writeFile(resolve(root, `${key}.html`), html, 'utf8');
}
console.log(`Generated ${Object.keys(pages).length} static pages for ${origin}`);
