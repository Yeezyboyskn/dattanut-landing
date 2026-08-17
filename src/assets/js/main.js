import '../css/styles.css';
import logoUrl from '../img/logo-placeholder.svg';
import heroUrl from '../img/hero-orchard.webp';
import pecansUrl from '../img/pecans.webp';
import walnutsUrl from '../img/walnuts.webp';
import almondsUrl from '../img/almonds.webp';
import hazelnutsUrl from '../img/hazelnuts.webp';

const page = document.body.dataset.page || 'inicio';
const imageBySpecies = {
  pecanos: pecansUrl,
  nueces: walnutsUrl,
  almendras: almondsUrl,
  avellanas: hazelnutsUrl,
};

const species = {
  pecanos: {
    singular: 'Pecán',
    title: 'Pecanos',
    scientific: 'Carya illinoinensis',
    summary: 'Una especie de interés creciente para la diversificación frutícola chilena, con oportunidades que requieren lectura técnica, comercial y territorial integrada.',
    note: 'Contenido editorial provisional: validar superficie, producción, calibres y destinos con el Brief del Desarrollador.',
  },
  nueces: {
    singular: 'Nuez',
    title: 'Nueces',
    scientific: 'Juglans regia',
    summary: 'Una de las categorías más consolidadas de la industria chilena de frutos secos, con alto foco exportador y exigencias de calidad por mercado.',
    note: 'Contenido editorial provisional: validar temporadas, formatos comerciales y destinos con el Brief del Desarrollador.',
  },
  almendras: {
    singular: 'Almendra',
    title: 'Almendras',
    scientific: 'Prunus dulcis',
    summary: 'Categoría donde la lectura de oferta local, importaciones, condiciones agronómicas y referencias internacionales es clave para decidir.',
    note: 'Contenido editorial provisional: validar producción, importaciones y referencias comerciales con el Brief del Desarrollador.',
  },
  avellanas: {
    singular: 'Avellana',
    title: 'Avellanas',
    scientific: 'Corylus avellana',
    summary: 'Una cadena en expansión en el sur de Chile, conectada con demanda industrial y decisiones de largo plazo a escala de huerto.',
    note: 'Contenido editorial provisional: validar superficie, producción y destinos con el Brief del Desarrollador.',
  },
};

const articles = [
  { title: 'Claves para leer una referencia de exportación', summary: 'Guía sobre fuente, periodo, unidad, fecha de corte y límites de comparabilidad.', species: 'todas', state: 'Validado' },
  { title: 'Pecanos en Chile: estructura de una ficha sectorial', summary: 'Plantilla técnica para ordenar antecedentes productivos y comerciales por temporada.', species: 'pecanos', state: 'En revisión' },
  { title: 'Nueces: variables que explican la calidad comercial', summary: 'Marco de lectura para calibre, color, condición y formato de presentación.', species: 'nueces', state: 'Por validar' },
  { title: 'Almendras: oferta local y contexto internacional', summary: 'Estructura comparativa para analizar disponibilidad, origen y referencias externas.', species: 'almendras', state: 'En revisión' },
  { title: 'Avellanas: seguimiento de una cadena en expansión', summary: 'Variables mínimas para observar superficie, producción, industria y comercio exterior.', species: 'avellanas', state: 'Por validar' },
  { title: 'Protocolo de validación de contenidos DATTANUT', summary: 'Cómo se etiqueta cada contenido antes de integrarlo a la biblioteca técnica.', species: 'todas', state: 'Validado' },
];

const navItems = [
  ['inicio', 'Inicio', 'index.html'],
  ['productos', 'Productos', 'productos.html'],
  ['precios', 'Precios', 'precios.html'],
  ['biblioteca', 'Biblioteca', 'biblioteca.html'],
  ['eventos', 'Eventos', 'eventos.html'],
  ['contacto', 'Contacto', 'contacto.html'],
];

function currentNavKey() {
  if (Object.keys(species).includes(page)) return 'productos';
  return page;
}

function renderHeader() {
  return `
    <a class="skip-link" href="#main-content">Saltar al contenido principal</a>
    <header class="site-header" data-header>
      <div class="container nav">
        <a class="brand" href="index.html" aria-label="DATTANUT, ir al inicio">
          <img src="${logoUrl}" width="34" height="34" alt="" aria-hidden="true">
          <span>DATTANUT<small>Inteligencia que da frutos</small></span>
        </a>
        <button class="nav__toggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="primary-navigation" data-nav-toggle><span></span></button>
        <nav class="nav__links" id="primary-navigation" aria-label="Navegación principal" data-nav>
          ${navItems.map(([key, label, href]) => `<a href="${href}"${currentNavKey() === key ? ' aria-current="page"' : ''}>${label}</a>`).join('')}
        </nav>
      </div>
    </header>`;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer__grid">
        <div class="footer__about">
          <a class="brand" href="index.html"><img src="${logoUrl}" width="34" height="34" alt=""><span>DATTANUT<small>Inteligencia que da frutos</small></span></a>
          <p>Inteligencia técnica y comercial para ordenar, contextualizar y conectar información sobre frutos secos chilenos.</p>
        </div>
        <nav class="footer__nav" aria-label="Navegación secundaria">
          <strong>Explorar</strong>
          <a href="productos.html">Productos</a><a href="precios.html">Referencias de mercado</a><a href="biblioteca.html">Biblioteca técnica</a><a href="eventos.html">Eventos</a>
        </nav>
        <div class="footer__nav">
          <strong>Contacto y legal</strong>
          <a href="mailto:contacto@dattanut.com">contacto@dattanut.com</a><span class="muted">Lun–Vie · horario oficina</span><a href="aviso-legal.html">Aviso legal</a><a href="privacidad.html">Privacidad</a>
        </div>
      </div>
      <div class="footer__disclaimer"><div class="container"><p>La información publicada tiene fines educativos y sectoriales. No reemplaza una recomendación agronómica específica, un análisis de laboratorio, una visita a terreno ni la revisión de la normativa aplicable.</p></div></div>
      <div class="container footer__bottom"><span>© <span data-year></span> DATTANUT. Todos los derechos reservados.</span><span>Fuentes de referencia: ODEPA, Aduanas, INC y USDA. Cada dato publicado debe indicar fuente, periodo y fecha de corte.</span></div>
    </footer>
    <section class="cookie-banner" aria-label="Preferencias de analítica" data-cookie-banner hidden>
      <p><strong>Analítica con control.</strong> Usamos únicamente cookies analíticas de GA4, y solo después de su autorización. Puede aceptar o rechazar sin afectar el acceso al sitio.</p>
      <div class="cookie-banner__actions"><button class="btn btn--primary" type="button" data-cookie-accept>Aceptar analítica</button><button class="btn btn--ghost" type="button" data-cookie-reject>Rechazar</button><a class="btn btn--ghost" href="privacidad.html">Ver privacidad</a></div>
    </section>`;
}

const arrow = '<span aria-hidden="true">↗</span>';

function speciesCards() {
  return Object.entries(species).map(([key, item]) => `
    <a class="card species-card reveal" href="${key}.html">
      <img src="${imageBySpecies[key]}" width="1536" height="1024" loading="lazy" alt="${item.title} sobre una superficie oscura">
      <span class="species-card__content"><span><span class="label">${item.scientific}</span><h3>${item.title}</h3><p>Datos, referencias y biblioteca</p></span><span class="species-card__arrow" aria-hidden="true">↗</span></span>
    </a>`).join('');
}

function homePage() {
  const features = [
    ['Datos validados', 'Cada cifra debe mostrar fuente oficial, periodo y fecha de corte.'],
    ['Una estructura común', 'Información comparable y organizada de forma homogénea para las cuatro especies.'],
    ['Referencias por temporada', 'Contexto de exportación sin ocultar la unidad ni los límites de comparación.'],
    ['Biblioteca con estado', 'Artículos clasificados como validados, en revisión o por validar.'],
    ['Foco sectorial', 'Una plataforma dedicada exclusivamente a la industria chilena de frutos secos.'],
  ];
  return `
    <main id="main-content">
      <section class="hero">
        <img class="hero__image" src="${heroUrl}" width="1536" height="1024" fetchpriority="high" alt="Huerto de nogales al amanecer con la cordillera al fondo">
        <div class="container hero__content">
          <div class="hero__copy"><span class="eyebrow">Inteligencia sectorial · Chile</span><h1>Inteligencia que <span class="text-green">da frutos</span></h1><p>Datos de mercado y conocimiento técnico organizado para entender la industria chilena de pecanos, nueces, almendras y avellanas.</p></div>
          <div class="hero__actions"><a class="btn btn--primary" href="productos.html">Explorar productos ${arrow}</a><a class="btn btn--ghost" href="precios.html">Ver referencias de mercado</a><a class="btn btn--ghost" href="contacto.html">Contactar al equipo</a></div>
          <div class="hero__meta"><span>Acceso gratuito</span><span>Fuentes trazables</span><span>Datos anonimizados</span></div>
        </div>
      </section>
      <section class="trust-strip" aria-label="Fuentes de referencia"><div class="container trust-strip__inner"><p>Fuentes y contexto sectorial</p><div class="trust-list"><span>ODEPA</span><span>Aduanas</span><span>INC</span><span>USDA</span></div></div></section>
      <section class="section"><div class="container"><div class="section-heading section-heading--split"><div><span class="eyebrow">Por qué DATTANUT</span><h2>Menos dispersión. Más <span class="text-green">criterio</span>.</h2></div><p class="lede">Una base común para que productores, exportadores, asesores y compradores puedan interpretar información con el mismo lenguaje.</p></div><div class="grid grid--5">${features.map((item, i) => `<article class="card card--padded feature-card reveal"><span class="feature-card__number">0${i + 1}</span><div><h3>${item[0]}</h3><p>${item[1]}</p></div></article>`).join('')}</div></div></section>
      <section class="section surface"><div class="container"><div class="section-heading section-heading--split"><div><span class="eyebrow">Explorar por especie</span><h2>Cuatro cadenas. Una <span class="text-green">misma lógica</span>.</h2></div><p>Cada ficha mantiene una estructura homogénea para que sea más fácil ubicar contexto, fuentes y contenidos relacionados.</p></div><div class="grid grid--4">${speciesCards()}</div></div></section>
      <section class="section"><div class="container split"><div><span class="eyebrow">Biblioteca técnica</span><h2>Conocimiento con un estado <span class="text-green">visible</span>.</h2><p class="lede" style="margin-top:1.25rem">No todo contenido tiene el mismo nivel de revisión. DATTANUT lo hace explícito para que usted sepa qué puede usar como referencia y qué sigue en validación.</p><a class="btn btn--primary" style="margin-top:1.6rem" href="biblioteca.html">Consultar biblioteca ${arrow}</a></div><div class="metric-stack"><div class="card metric reveal"><span class="metric__dot"></span><div><h3>Validado</h3><p>Revisado y trazable según el protocolo editorial.</p></div></div><div class="card metric reveal"><span class="metric__dot" style="background:#f6c453"></span><div><h3>En revisión</h3><p>Contenido disponible con revisión técnica en curso.</p></div></div><div class="card metric reveal"><span class="metric__dot" style="background:#bf8cff"></span><div><h3>Por validar</h3><p>Borrador clasificado; no debe tratarse como referencia confirmada.</p></div></div></div></div></section>
      <section class="section surface"><div class="container split"><div><span class="eyebrow">Próximos eventos</span><h2>El sector también se construye <span class="text-green">en conversación</span>.</h2><p class="lede" style="margin-top:1.2rem">Próximamente publicaremos encuentros sectoriales verificados. No mostramos eventos sin fecha y organización confirmadas.</p><a class="btn btn--ghost" style="margin-top:1.5rem" href="eventos.html">Ver agenda</a></div><div class="card card--padded"><span class="placeholder-tag">PRÓXIMAMENTE</span><h3 style="margin-top:1.2rem">Agenda en preparación</h3><p style="margin-top:.75rem">Si organiza una actividad relevante para la industria de frutos secos, puede proponerla para evaluación editorial.</p><a class="btn btn--primary" style="margin-top:1.3rem" href="contacto.html?motivo=Proponer%20contenido">Proponer contenido</a></div></div></section>
      ${cta('Conecte su experiencia con una mirada sectorial.', 'Participe como exportador, proponga contenido o solicite información al equipo DATTANUT.', 'Contactar al equipo', 'contacto.html')}
    </main>`;
}

function cta(title, copy, label, href) {
  return `<section class="section"><div class="container"><div class="cta-panel reveal"><div class="cta-panel__content"><div><span class="eyebrow">Hablemos</span><h2>${title}</h2><p>${copy}</p></div><a class="btn btn--primary" href="${href}">${label} ${arrow}</a></div></div></div></section>`;
}

function pageHero({ eyebrow, title, copy, image = heroUrl, alt = '' }) {
  return `<section class="page-hero"><img class="page-hero__image" src="${image}" width="1536" height="1024" fetchpriority="high" alt="${alt}"><div class="container page-hero__content"><div class="breadcrumb"><a href="index.html">Inicio</a><span aria-hidden="true">/</span><span>${title.replace(/<[^>]*>/g, '')}</span></div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${copy}</p></div></section>`;
}

function speciesTabs(active = '') {
  return `<nav class="tabs" aria-label="Especies">${Object.entries(species).map(([key, item]) => `<a href="${key}.html"${key === active ? ' aria-current="page"' : ''}>${item.title}</a>`).join('')}</nav>`;
}

function productsPage() {
  return `<main id="main-content">${pageHero({eyebrow:'Productos', title:'Datos por especie, <span class="text-green">sin perder contexto</span>', copy:'Explore cuatro cadenas productivas con una estructura común: panorama, referencias de mercado, trazabilidad y contenidos técnicos.', alt:'Huerto de nogales chileno al amanecer'})}<section class="section"><div class="container"><div class="section-heading"><span class="eyebrow">Navegación por especie</span><h2>Elija una cadena para <span class="text-green">profundizar</span>.</h2></div>${speciesTabs()}<div class="grid grid--4" style="margin-top:1.5rem">${speciesCards()}</div></div></section><section class="section surface"><div class="container"><div class="data-panel"><div class="section-heading section-heading--split"><div><span class="eyebrow">Estructura homogénea</span><h2>La misma pregunta en <span class="text-green">cada ficha</span>.</h2></div><p>Esta arquitectura reduce fricción al comparar especies y temporadas, sin convertir referencias incompletas en conclusiones.</p></div><div class="grid grid--3"><article class="card card--padded"><span class="label">01 · Contexto</span><h3 style="margin-top:.8rem">Panorama técnico-comercial</h3><p style="margin-top:.65rem">Descripción de la cadena, su posición en Chile y variables clave.</p></article><article class="card card--padded"><span class="label">02 · Evidencia</span><h3 style="margin-top:.8rem">Fuente, periodo y corte</h3><p style="margin-top:.65rem">Cada cifra debe poder rastrearse a su fuente y momento de consulta.</p></article><article class="card card--padded"><span class="label">03 · Profundización</span><h3 style="margin-top:.8rem">Biblioteca relacionada</h3><p style="margin-top:.65rem">Artículos técnicos enlazados por especie y estado de validación.</p></article></div></div></div></section>${cta('¿Quiere aportar información sectorial?', 'Trabajamos con reglas de anonimización y confidencialidad para fortalecer referencias útiles sin exponer datos individuales.', 'Participar como exportador', 'contacto.html?motivo=Participar%20como%20exportador')}</main>`;
}

function speciesPage(key) {
  const item = species[key];
  return `<main id="main-content">${pageHero({eyebrow:`Ficha de especie · ${item.scientific}`, title:item.title, copy:item.summary, image:imageBySpecies[key], alt:`${item.title} fotografiados sobre piedra oscura`})}<section class="section--tight"><div class="container">${speciesTabs(key)}</div></section><section class="section surface"><div class="container split"><div><span class="eyebrow">Panorama de mercado</span><h2>Una lectura <span class="text-green">técnica y trazable</span>.</h2><p class="lede" style="margin-top:1.2rem">${item.summary}</p><span class="placeholder-tag" style="margin-top:1.4rem">[PLACEHOLDER] TEXTO PROVISIONAL</span><p style="margin-top:.8rem">${item.note}</p></div><div class="card card--padded"><span class="label">Criterios mínimos</span><div class="metric-stack" style="margin-top:1rem"><div class="metric"><span class="metric__dot"></span><div><h3>Fuente identificada</h3><p>ODEPA, Aduanas u otra fuente sectorial claramente indicada.</p></div></div><div class="metric"><span class="metric__dot"></span><div><h3>Periodo explícito</h3><p>Temporada, mes o rango temporal visible junto al dato.</p></div></div><div class="metric"><span class="metric__dot"></span><div><h3>Fecha de corte</h3><p>Momento exacto en que la referencia fue obtenida o actualizada.</p></div></div></div></div></div></section><section class="section"><div class="container"><div class="section-heading section-heading--split"><div><span class="eyebrow">Referencias de mercado</span><h2>Estructura lista. Cifras <span class="text-green">pendientes</span>.</h2></div><p>No publicamos valores inventados. Esta tabla queda preparada para integrar cifras verificadas cuando el cliente entregue el dataset final.</p></div><div class="card data-panel"><div class="data-panel__bar"><span class="placeholder-tag">[PLACEHOLDER] SIN CIFRAS REALES</span><div class="source-tags"><span class="source-tag">Fuente: por confirmar</span><span class="source-tag">Periodo: por confirmar</span><span class="source-tag">Corte: por confirmar</span></div></div><div class="table-wrap"><table><thead><tr><th>Especie</th><th>Referencia</th><th>Periodo</th><th>Fuente</th><th>Fecha de corte</th></tr></thead><tbody><tr><td>${item.title}</td><td>Dato pendiente de validación</td><td>—</td><td>—</td><td>—</td></tr></tbody></table></div></div><div style="display:flex;flex-wrap:wrap;gap:.75rem;margin-top:1.3rem"><a class="btn btn--primary" href="biblioteca.html?especie=${key}">Ver biblioteca de ${item.title.toLowerCase()} ${arrow}</a><a class="btn btn--ghost" href="contacto.html">Solicitar información</a></div></div></section>${cta(`Ayúdenos a fortalecer la referencia de ${item.title.toLowerCase()}.`, 'La participación se gestiona con anonimización, confidencialidad y revisión antes de publicar resultados agregados.', 'Participar como exportador', 'contacto.html?motivo=Participar%20como%20exportador')}</main>`;
}

function pricesPage() {
  const rows = Object.entries(species).map(([key, item]) => `<tr data-price-row data-species="${key}"><td>${item.title}</td><td><span class="placeholder-tag">[EJEMPLO DE ESTRUCTURA]</span><br>Valor no publicado</td><td>Temporada por confirmar</td><td>ODEPA / Aduanas<br><span class="muted">Por validar</span></td><td>Por confirmar</td></tr>`).join('');
  return `<main id="main-content">${pageHero({eyebrow:'Referencias de mercado', title:'Precios con <span class="text-green">contexto verificable</span>', copy:'Una referencia solo es útil cuando explicita especie, unidad, periodo, fuente y fecha de corte. La estructura está lista; las cifras reales siguen pendientes de entrega.', alt:'Huerto de nogales chileno al amanecer'})}<section class="section"><div class="container"><div class="section-heading section-heading--split"><div><span class="eyebrow">Tabla interactiva</span><h2>Filtre sin perder la <span class="text-green">trazabilidad</span>.</h2></div><p>Por la ausencia del dataset final, no se muestran cifras simuladas. Todos los registros se identifican como estructura de ejemplo.</p></div><div class="filter-bar"><div class="field"><label for="price-search">Buscar</label><input class="input" id="price-search" type="search" placeholder="Buscar especie, fuente o periodo" data-price-search></div><div class="field"><label for="price-species">Especie</label><select class="select" id="price-species" data-price-species><option value="todas">Todas</option>${Object.entries(species).map(([key,item]) => `<option value="${key}">${item.title}</option>`).join('')}</select></div><div class="field"><label for="price-season">Temporada</label><select class="select" id="price-season" disabled><option>Pendiente de datos</option></select></div></div><div class="card data-panel"><div class="data-panel__bar"><span class="placeholder-tag">[PLACEHOLDER] CIFRAS PENDIENTES</span><div class="source-tags"><span class="source-tag">Acceso gratuito</span><span class="source-tag">Datos agregados</span><span class="source-tag">Sin testimonios</span></div></div><div class="table-wrap"><table><thead><tr><th>Especie</th><th>Referencia</th><th>Periodo</th><th>Fuente</th><th>Fecha de corte</th></tr></thead><tbody data-price-body>${rows}</tbody></table></div><p class="muted" data-price-empty hidden style="margin-top:1rem">No hay referencias que coincidan con los filtros.</p></div></div></section>${cta('¿Tiene información que pueda mejorar estas referencias?', 'Conversemos sobre un proceso de contribución seguro, agregado y útil para el sector.', 'Contribuir con información', 'contacto.html?motivo=Contribuir%20con%20información')}</main>`;
}

function articleCard(article) {
  const stateClass = article.state === 'Validado' ? 'validado' : article.state === 'En revisión' ? 'revision' : 'validar';
  const speciesLabel = article.species === 'todas' ? 'Transversal' : species[article.species].title;
  return `<article class="card article-card reveal" data-article data-species="${article.species}" data-state="${article.state}" data-search="${`${article.title} ${article.summary} ${speciesLabel}`.toLowerCase()}"><div class="article-card__meta"><span class="label">${speciesLabel}</span><span class="article-card__state article-card__state--${stateClass}">${article.state}</span></div><div><span class="placeholder-tag">[PLACEHOLDER] CONTENIDO</span><h3 style="margin-top:1rem">${article.title}</h3><p style="margin-top:.7rem">${article.summary}</p></div><span class="muted" style="font-size:.78rem">Lectura estimada · pendiente de publicación</span></article>`;
}

function libraryPage() {
  return `<main id="main-content">${pageHero({eyebrow:'Biblioteca técnica', title:'Contenido clasificado por <span class="text-green">estado de validación</span>', copy:'Busque por término, especie o nivel de revisión. Los artículos visibles son placeholders editoriales hasta recibir el Brief del Desarrollador.', alt:'Huerto de nogales chileno al amanecer'})}<section class="section"><div class="container"><div class="filter-bar"><div class="field"><label for="library-search">Buscar artículos</label><input class="input" id="library-search" type="search" placeholder="Ej.: exportación, calibre, temporada" data-library-search></div><div class="field"><label for="library-species">Especie</label><select class="select" id="library-species" data-library-species><option value="todas">Todas</option>${Object.entries(species).map(([key,item]) => `<option value="${key}">${item.title}</option>`).join('')}</select></div><div class="field"><label for="library-state">Estado</label><select class="select" id="library-state" data-library-state><option value="todos">Todos</option><option>Validado</option><option>En revisión</option><option>Por validar</option></select></div></div><div class="grid grid--3" data-library-grid>${articles.map(articleCard).join('')}<div class="card empty-state" data-library-empty hidden><h3>Sin resultados</h3><p>Pruebe con otro término o cambie los filtros.</p></div></div></div></section><section class="section surface"><div class="container split"><div><span class="eyebrow">Criterio editorial</span><h2>La transparencia también está en lo que <span class="text-green">falta validar</span>.</h2><p class="lede" style="margin-top:1.2rem">Cada artículo muestra su estado para evitar que un borrador, una referencia sectorial o un contenido revisado se interpreten como equivalentes.</p></div><div class="card card--padded"><h3>¿Quiere proponer un contenido?</h3><p style="margin-top:.7rem">Envíe el tema, la fuente y su relación con la industria de frutos secos. El equipo evaluará pertinencia y trazabilidad.</p><a class="btn btn--primary" style="margin-top:1.2rem" href="contacto.html?motivo=Proponer%20contenido">Proponer contenido ${arrow}</a></div></div></section></main>`;
}

function eventsPage() {
  return `<main id="main-content">${pageHero({eyebrow:'Eventos', title:'Agenda sectorial <span class="text-green">en preparación</span>', copy:'Publicaremos actividades relevantes cuando exista información verificable de fecha, organización y participación. No inventamos eventos para llenar una agenda.', alt:'Huerto de nogales chileno al amanecer'})}<section class="section"><div class="container"><div class="card empty-state"><span class="placeholder-tag">PRÓXIMAMENTE</span><h2 style="margin:1.2rem auto .8rem">Aún no hay eventos confirmados.</h2><p class="lede" style="margin-inline:auto">La agenda se activará una vez que el equipo valide sus primeras actividades sectoriales.</p><a class="btn btn--primary" style="margin-top:1.5rem" href="contacto.html?motivo=Proponer%20contenido">Proponer un evento ${arrow}</a></div></div></section>${cta('Reciba una respuesta, no una suscripción.', 'DATTANUT no opera newsletter en esta fase. Si necesita información sobre una actividad, contacte directamente al equipo.', 'Contactar', 'contacto.html')}</main>`;
}

function contactPage() {
  return `<main id="main-content">${pageHero({eyebrow:'Contacto', title:'Conversemos con <span class="text-green">propósito</span>', copy:'Consultas generales, contribuciones de información, participación como exportador y propuestas de contenido llegan directamente al equipo DATTANUT.', alt:'Huerto de nogales chileno al amanecer'})}<section class="section"><div class="container split" style="align-items:start"><div><span class="eyebrow">Escríbanos</span><h2>Un canal directo con el <span class="text-green">equipo</span>.</h2><p class="lede" style="margin-top:1.2rem">Richard López<br><a class="text-green" href="mailto:contacto@dattanut.com">contacto@dattanut.com</a><br>Lunes a viernes · horario oficina</p><div class="card card--padded" style="margin-top:1.5rem"><h3>Tiempo de respuesta</h3><p style="margin-top:.6rem">Responderemos dentro de 48 horas hábiles.</p><p style="margin-top:.6rem">No publicamos teléfono, dirección, WhatsApp ni mapa en esta fase.</p></div></div><div class="card card--padded"><form action="https://formsubmit.co/contacto@dattanut.com" method="POST" novalidate data-contact-form><div class="form-grid"><div class="field"><label for="name">Nombre</label><input class="input" id="name" name="Nombre" autocomplete="name" required aria-describedby="name-error"><span class="field-error" id="name-error"></span></div><div class="field"><label for="email">Email</label><input class="input" id="email" name="Email" type="email" autocomplete="email" required aria-describedby="email-error"><span class="field-error" id="email-error"></span></div><div class="field field--full"><label for="organization">Organización <span class="muted">(opcional)</span></label><input class="input" id="organization" name="Organización" autocomplete="organization" aria-describedby="organization-error"><span class="field-error" id="organization-error"></span></div><div class="field field--full"><label for="reason">Motivo</label><select class="select" id="reason" name="Motivo" required aria-describedby="reason-error"><option value="">Seleccione una opción</option><option>Consulta general</option><option>Contribuir con información</option><option>Participar como exportador</option><option>Proponer contenido</option><option>Otro</option></select><span class="field-error" id="reason-error"></span></div><div class="field field--full"><label for="message">Mensaje</label><textarea class="textarea" id="message" name="Mensaje" required minlength="10" aria-describedby="message-error"></textarea><span class="field-error" id="message-error"></span></div></div><input type="hidden" name="_subject" value="Nuevo contacto desde DATTANUT"><input type="hidden" name="_captcha" value="false"><input class="honeypot" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true"><button class="btn btn--primary" type="submit" data-submit-button>Enviar mensaje ${arrow}</button><div class="form-status" role="status" aria-live="polite" data-form-status></div></form></div></div></section><section class="section surface"><div class="container"><div class="section-heading"><span class="eyebrow">Preguntas frecuentes</span><h2>Confianza basada en <span class="text-green">reglas claras</span>.</h2></div><div class="faq" data-faq>${faqItem('¿Los datos son confiables?', 'Cada cifra publicada debe indicar su fuente, el periodo observado y la fecha de corte. Los contenidos también muestran su estado de validación.')}${faqItem('¿El acceso es gratuito?', 'Sí. La información general de la plataforma es de acceso abierto durante esta fase inicial.')}${faqItem('¿Quién está detrás de DATTANUT?', 'Un equipo profesional con experiencia en el sector agrícola chileno. El contacto del proyecto es Richard López.')}${faqItem('¿Mis datos como exportador estarán seguros?', 'Sí. La participación se gestiona con reglas estrictas de anonimización y confidencialidad; no se publican datos individuales de exportadores.')}</div></div></section></main>`;
}

function faqItem(question, answer) {
  const id = `faq-${Math.random().toString(36).slice(2, 8)}`;
  return `<article class="faq__item"><h3><button class="faq__question" type="button" aria-expanded="false" aria-controls="${id}"><span>${question}</span><span aria-hidden="true">+</span></button></h3><div class="faq__answer" id="${id}" hidden><p>${answer}</p></div></article>`;
}

function legalPage(type) {
  const privacy = type === 'privacidad';
  return `<main id="main-content">${pageHero({eyebrow:privacy ? 'Privacidad' : 'Aviso legal', title:privacy ? 'Privacidad y <span class="text-green">analítica</span>' : 'Información legal <span class="text-green">provisional</span>', copy:privacy ? 'Principios aplicados al formulario de contacto y a la analítica de esta demostración.' : 'Texto base para revisión del cliente antes de la versión de producción.', alt:'Huerto de nogales chileno al amanecer'})}<section class="section"><div class="container split" style="align-items:start"><article>${privacy ? privacyCopy() : legalCopy()}</article><aside class="card card--padded"><span class="placeholder-tag">[PLACEHOLDER] REVISIÓN LEGAL</span><h3 style="margin-top:1rem">Responsable del proyecto</h3><p style="margin-top:.6rem">DATTANUT<br>Chile<br><a class="text-green" href="mailto:contacto@dattanut.com">contacto@dattanut.com</a></p><h3 style="margin-top:1.4rem">Contacto preferido</h3><p style="margin-top:.6rem">Email, de lunes a viernes en horario oficina.</p></aside></div></section></main>`;
}

function legalCopy() {
  return `<span class="eyebrow">Alcance</span><h2 style="margin-top:1rem">Uso informativo del <span class="text-green">sitio</span>.</h2><p class="lede" style="margin-top:1.2rem">Este sitio corresponde a un prototipo informativo de DATTANUT. El contenido legal definitivo deberá ser revisado por el cliente antes del lanzamiento de producción.</p><h3 style="margin-top:2rem">Propiedad y uso</h3><p style="margin-top:.7rem">Los contenidos, estructura e identidad de DATTANUT no pueden reutilizarse de forma que induzca a error sobre su origen. Las fuentes de terceros conservan sus respectivos derechos.</p><h3 style="margin-top:2rem">Exactitud y actualización</h3><p style="margin-top:.7rem">DATTANUT busca presentar fuentes, periodos y fechas de corte de forma visible. La información puede cambiar y debe revisarse antes de tomar decisiones técnicas o comerciales.</p><h3 style="margin-top:2rem">Disclaimer sectorial</h3><p style="margin-top:.7rem">La información publicada tiene fines educativos y sectoriales. No reemplaza una recomendación agronómica específica, un análisis de laboratorio, una visita a terreno ni la revisión de la normativa aplicable.</p>`;
}

function privacyCopy() {
  return `<span class="eyebrow">Principios</span><h2 style="margin-top:1rem">Datos mínimos y <span class="text-green">control del visitante</span>.</h2><p class="lede" style="margin-top:1.2rem">Esta política es provisional y deberá revisarse antes de la versión de producción. DATTANUT solicita únicamente los datos necesarios para responder consultas.</p><h3 style="margin-top:2rem">Formulario de contacto</h3><p style="margin-top:.7rem">Se solicitan nombre, email, motivo, mensaje y, de forma opcional, organización. La finalidad es gestionar la consulta y responder dentro del plazo informado. El envío se procesa mediante FormSubmit una vez que el cliente confirme la dirección receptora.</p><h3 style="margin-top:2rem">Analítica</h3><p style="margin-top:.7rem">GA4 permanece desactivado mientras el visitante no otorgue consentimiento. La preferencia de aceptar o rechazar se almacena localmente en su navegador.</p><h3 style="margin-top:2rem">Conservación y derechos</h3><p style="margin-top:.7rem">La versión de producción deberá definir plazos de conservación, responsables y mecanismos formales para solicitar acceso, rectificación o eliminación. Puede escribir a contacto@dattanut.com.</p><h3 style="margin-top:2rem">Datos de exportadores</h3><p style="margin-top:.7rem">La información aportada para construir referencias sectoriales debe someterse a anonimización, confidencialidad y publicación agregada.</p>`;
}

function getPageContent() {
  if (page === 'inicio') return homePage();
  if (page === 'productos') return productsPage();
  if (species[page]) return speciesPage(page);
  if (page === 'precios') return pricesPage();
  if (page === 'biblioteca') return libraryPage();
  if (page === 'eventos') return eventsPage();
  if (page === 'contacto') return contactPage();
  if (page === 'aviso-legal' || page === 'privacidad') return legalPage(page);
  return homePage();
}

function initNavigation() {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 16);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú');
    nav.classList.toggle('is-open', !open);
  });
  nav?.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      nav.classList.remove('is-open');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav?.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      toggle?.setAttribute('aria-expanded', 'false');
      toggle?.focus();
    }
  });
}

function initReveal() {
  const items = [...document.querySelectorAll('.reveal')];
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), { rootMargin: '0px 0px -8% 0px' });
  items.forEach((item) => observer.observe(item));
}

function initLibrary() {
  const search = document.querySelector('[data-library-search]');
  if (!search) return;
  const speciesFilter = document.querySelector('[data-library-species]');
  const stateFilter = document.querySelector('[data-library-state]');
  const cards = [...document.querySelectorAll('[data-article]')];
  const empty = document.querySelector('[data-library-empty]');
  const params = new URLSearchParams(window.location.search);
  if (params.get('especie') && species[params.get('especie')]) speciesFilter.value = params.get('especie');
  const update = () => {
    const term = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const speciesMatch = speciesFilter.value === 'todas' || card.dataset.species === speciesFilter.value || card.dataset.species === 'todas';
      const stateMatch = stateFilter.value === 'todos' || card.dataset.state === stateFilter.value;
      const textMatch = !term || card.dataset.search.includes(term);
      card.hidden = !(speciesMatch && stateMatch && textMatch);
      if (!card.hidden) visible += 1;
    });
    empty.hidden = visible !== 0;
  };
  [search, speciesFilter, stateFilter].forEach((element) => element.addEventListener('input', update));
  update();
}

function initPrices() {
  const search = document.querySelector('[data-price-search]');
  if (!search) return;
  const speciesFilter = document.querySelector('[data-price-species]');
  const rows = [...document.querySelectorAll('[data-price-row]')];
  const empty = document.querySelector('[data-price-empty]');
  const update = () => {
    const term = search.value.trim().toLowerCase();
    let visible = 0;
    rows.forEach((row) => {
      const match = (speciesFilter.value === 'todas' || row.dataset.species === speciesFilter.value) && (!term || row.textContent.toLowerCase().includes(term));
      row.hidden = !match;
      if (match) visible += 1;
    });
    empty.hidden = visible !== 0;
  };
  [search, speciesFilter].forEach((element) => element.addEventListener('input', update));
}

function initFaq() {
  document.querySelectorAll('.faq__question').forEach((button) => button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const answer = document.getElementById(button.getAttribute('aria-controls'));
    button.setAttribute('aria-expanded', String(!expanded));
    button.lastElementChild.textContent = expanded ? '+' : '−';
    answer.hidden = expanded;
  }));
}

function fieldMessage(field) {
  if (field.validity.valueMissing) return 'Este campo es obligatorio.';
  if (field.validity.typeMismatch) return 'Ingrese un email válido.';
  if (field.validity.tooShort) return `Ingrese al menos ${field.minLength} caracteres.`;
  return 'Revise este campo.';
}

function updateFieldValidity(field) {
  const error = document.getElementById(`${field.id}-error`);
  const invalid = !field.validity.valid;
  field.setAttribute('aria-invalid', String(invalid));
  if (error) error.textContent = invalid ? fieldMessage(field) : '';
  return !invalid;
}

function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  const params = new URLSearchParams(window.location.search);
  const reason = form.elements.namedItem('Motivo');
  if (params.get('motivo') && [...reason.options].some((option) => option.value === params.get('motivo'))) reason.value = params.get('motivo');
  const fields = [...form.querySelectorAll('input:not([type="hidden"]):not(.honeypot), select, textarea')];
  fields.forEach((field) => field.addEventListener('blur', () => updateFieldValidity(field)));
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const valid = fields.map(updateFieldValidity).every(Boolean);
    if (!valid) {
      fields.find((field) => !field.validity.valid)?.focus();
      return;
    }
    const button = form.querySelector('[data-submit-button]');
    const status = form.querySelector('[data-form-status]');
    const original = button.innerHTML;
    button.disabled = true;
    button.innerHTML = '<span class="spinner" aria-hidden="true"></span> Enviando';
    status.className = 'form-status';
    status.textContent = '';
    try {
      // [CONFIGURAR: confirmar email en FormSubmit antes de publicar el formulario definitivo]
      const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('FormSubmit no confirmó el envío.');
      form.reset();
      status.className = 'form-status form-status--success';
      status.textContent = 'Gracias por contactarnos. Hemos recibido su mensaje y responderemos dentro de 48 horas hábiles.';
    } catch (error) {
      status.className = 'form-status form-status--error';
      status.textContent = 'No fue posible enviar el mensaje. Sus datos permanecen en el formulario; intente nuevamente o escriba a contacto@dattanut.com.';
    } finally {
      button.disabled = false;
      button.innerHTML = original;
    }
  });
}

function initCookies() {
  const banner = document.querySelector('[data-cookie-banner]');
  const choice = localStorage.getItem('dattanut-analytics-consent');
  if (!choice) banner.hidden = false;
  const saveChoice = (value) => {
    localStorage.setItem('dattanut-analytics-consent', value);
    banner.hidden = true;
    if (value === 'accepted') enableAnalytics();
  };
  banner.querySelector('[data-cookie-accept]')?.addEventListener('click', () => saveChoice('accepted'));
  banner.querySelector('[data-cookie-reject]')?.addEventListener('click', () => saveChoice('rejected'));
  if (choice === 'accepted') enableAnalytics();
}

function enableAnalytics() {
  const measurementId = 'G-XXXXXXXXXX';
  if (measurementId.includes('X') || document.querySelector('[data-ga4]')) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.dataset.ga4 = 'true';
  document.head.append(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip: true });
}

document.body.innerHTML = `${renderHeader()}${getPageContent()}${renderFooter()}`;
document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = new Date().getFullYear(); });
initNavigation();
initReveal();
initLibrary();
initPrices();
initFaq();
initContactForm();
initCookies();
