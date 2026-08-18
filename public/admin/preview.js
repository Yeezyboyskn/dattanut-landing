var PREVIEW_CSS = [
  '.dn{background:#12100c;color:#f5efe2;font-family:Inter,system-ui,sans-serif;padding:20px;min-height:100%}',
  '.dn-head{display:flex;align-items:center;gap:10px;margin-bottom:18px;padding-bottom:14px;border-bottom:1px solid #262219}',
  '.dn-kicker{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#c99a4d;border:1px solid rgba(201,154,77,.4);padding:4px 10px;border-radius:999px}',
  '.dn-head strong{font-family:"Space Grotesk",sans-serif;font-size:15px}',
  '.dn-group{margin-bottom:16px}',
  '.dn-group-title{font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:#8a8374;margin:14px 0 6px;font-weight:600}',
  '.dn-row{display:flex;gap:10px;padding:7px 0;border-bottom:1px dashed #262219;font-size:13px;line-height:1.5}',
  '.dn-row b{flex:0 0 130px;color:#8a8374;font-weight:500}',
  '.dn-chip{display:inline-block;background:rgba(217,176,106,.12);border:1px solid rgba(217,176,106,.35);color:#e0b45e;border-radius:999px;padding:3px 12px;font-size:12px;margin:3px 4px 0 0}',
  '.dn-img{border-radius:10px;max-width:100%;max-height:180px;object-fit:cover}',
  '.dn-hero{position:relative;overflow:hidden;border:1px solid #2a251d;border-radius:14px;margin-bottom:16px}',
  '.dn-hero img.dn-hero-img{width:100%;height:150px;object-fit:cover;opacity:.45;position:absolute;inset:0}',
  '.dn-hero-in{padding:16px;background:linear-gradient(180deg,rgba(12,11,8,.55),#12100c 88%);position:relative}',
  '.dn-hero-in h1{font-family:"Space Grotesk",sans-serif;font-size:20px;margin:6px 0 6px}',
  '.dn-hero-in p{font-size:13px;color:#b9b19e;margin:0}',
  '.dn-eyebrow{font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:#c99a4d}',
  '.dn-actions{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}',
  '.dn-btn{display:inline-block;background:#d9b06a;color:#0c0b08;font-weight:600;font-size:12px;padding:7px 14px;border-radius:999px}',
  '.dn-btn--ghost{border:1px solid #4a4234;color:#d9b06a;background:transparent}',
  '.dn-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}',
  '.dn-card{background:#17140f;border:1px solid #262219;border-radius:12px;padding:12px}',
  '.dn-card h3{font-family:"Space Grotesk",sans-serif;font-size:13px;margin:6px 0 4px}',
  '.dn-card p{font-size:12px;color:#b9b19e;margin:0;line-height:1.5}',
  '.dn-status{display:inline-block;font-size:11px;border:1px solid rgba(201,154,77,.45);color:#e0b45e;border-radius:999px;padding:2px 10px}',
  '.dn-label{font-size:11px;color:#8a8374;text-transform:uppercase;letter-spacing:.1em}',
  '.dn-meta{display:flex;gap:6px;flex-wrap:wrap;margin-top:12px}',
  '.dn-meta span{font-size:11px;color:#8a8374;border:1px solid #2a251d;border-radius:999px;padding:3px 10px}',
  '.dn-table{width:100%;border-collapse:collapse;font-size:12px}',
  '.dn-table th{color:#8a8374;text-align:left;font-weight:500;padding:6px 10px;border-bottom:1px solid #262219;text-transform:uppercase;font-size:10px;letter-spacing:.08em}',
  '.dn-table td{padding:7px 10px;border-bottom:1px solid #201c15;color:#f5efe2}',
  '.dn-empty{color:#8a8374;font-size:12px;padding:8px 0}',
  '.dn-note{font-size:11px;color:#7a7468;margin-top:10px;font-style:italic}',
].join('\n');

(function () {
  var CMS = window.CMS;
  var createClass = window.createClass;
  var h = window.h;
  if (!CMS || !createClass || !h) return;

  CMS.registerPreviewStyle('../assets/css/styles.css');
  CMS.registerPreviewStyle(PREVIEW_CSS, { raw: true });

  var IMG_RE = /\.(png|jpe?g|webp|gif|svg|avif|ico)(\?.*)?$/i;

  function data(props) {
    var d = props.entry && props.entry.getIn(['data']);
    return d && d.toJS ? d.toJS() : {};
  }
  function img(v) {
    if (!v) return null;
    var name = String(v).split('/').pop();
    return '/assets/img/' + name;
  }
  function isImg(v) {
    return typeof v === 'string' && IMG_RE.test(v) && v.indexOf('/') !== -1;
  }
  function goldParts(t, r) {
    if (!t) return null;
    if (!r || t.indexOf(r) === -1) return t;
    var i = t.indexOf(r);
    return [t.slice(0, i), h('span', { className: 'text-gold' }, r), t.slice(i + r.length)];
  }
  function Title(el, t, r) {
    return h(el, null, goldParts(t, r));
  }
  function has(obj, key) {
    return !!obj && typeof obj[key] !== 'undefined' && obj[key] !== null && obj[key] !== '';
  }

  var LABELS = {
    seo: 'SEO', hero: 'Sección principal', trust: 'Franja de fuentes', comoFunciona: 'Cómo funciona',
    porEspecie: 'Por especie', quienes: 'Quiénes están detrás', metricas: 'Cifras destacadas',
    agenda: 'Agenda', faq: 'Preguntas frecuentes', cta: 'Mensaje final', pagina: 'Textos de la página',
    filtros: 'Filtros', tabla: 'Tabla', vacio: 'Sin resultados', precios: 'Tabla de precios',
    articulos: 'Artículos', eventos: 'Eventos publicados', estados: 'Textos de estado',
    criterios: 'Criterios para publicar', canal: 'Canal directo', form: 'Formulario',
    aviso: 'Aviso legal', privacidad: 'Privacidad', aside: 'Tarjeta lateral', especies: 'Especies',
    faqList: 'Preguntas frecuentes', nav: 'Menú superior', contacto: 'Contacto', footer: 'Pie de página',
    cookie: 'Aviso de analítica', ui: 'Textos de interfaz', enlaces: 'Enlaces del pie',
    acciones: 'Botones', boton: 'Botón', card: 'Tarjeta', intro: 'Introducción', secciones: 'Secciones',
    pasos: 'Pasos', fuentes: 'Fuentes de referencia', titulo: 'Título', texto: 'Texto',
    resaltado: 'Palabra destacada', eyebrow: 'Línea superior', copy: 'Texto', label: 'Etiqueta',
    imagen: 'Imagen', imagenAlt: 'Texto alternativo', items: 'Ítems', notice: 'Aviso de datos',
    panorama: 'Panorama', referencias: 'Referencias de mercado', entrada: '',
  };

  function prettyKey(k) {
    if (LABELS[k]) return LABELS[k];
    return k.charAt(0).toUpperCase() + k.slice(1).replace(/([A-Z])/g, ' $1');
  }

  function renderValue(v) {
    if (v === null || typeof v === 'undefined' || v === '') return null;
    if (typeof v === 'boolean') return h('span', { className: 'dn-chip' }, v ? 'Sí' : 'No');
    if (typeof v === 'number') return h('span', null, String(v));
    if (typeof v === 'string' && isImg(v)) return h('img', { className: 'dn-img', src: img(v), alt: '' });
    if (typeof v === 'string') return h('span', null, v);
    return h('span', { className: 'dn-empty' }, String(v));
  }

  function renderEntry(value) {
    if (Array.isArray(value)) {
      var strings = value.every(function (x) { return typeof x !== 'object'; });
      if (strings) return h('div', null, value.map(function (x, i) { return h('span', { className: 'dn-chip', key: i }, String(x)); }));
      return h('div', null, value.map(function (x, i) {
        if (!x || typeof x !== 'object') return null;
        var keys = Object.keys(x).filter(function (k) { return has(x, k); });
        if (!keys.length) return null;
        return h('div', { className: 'dn-card', key: i }, keys.map(function (k) {
          var v = x[k];
          return h('div', { className: 'dn-row', key: k },
            h('b', null, prettyKey(k)),
            h('div', null, renderValue(v)));
        }));
      }));
    }
    if (value && typeof value === 'object') {
      var ks = Object.keys(value).filter(function (k) { return has(value, k); });
      if (!ks.length) return null;
      return h('div', null, ks.map(function (k) {
        var v = value[k];
        if (v && typeof v === 'object') {
          return h('div', { className: 'dn-group', key: k },
            h('div', { className: 'dn-group-title' }, prettyKey(k)),
            renderEntry(v));
        }
        return h('div', { className: 'dn-row', key: k },
          h('b', null, prettyKey(k)),
          h('div', null, renderValue(v)));
      }));
    }
    return h('div', null, renderValue(value));
  }

  function GenericPreview(title, collectionName) {
    return createClass({
      displayName: (title || collectionName) + 'Preview',
      render: function () {
        var d = data(this.props);
        return h('div', { className: 'dn' },
          h('div', { className: 'dn-head' },
            h('span', { className: 'dn-kicker' }, 'Vista previa'),
            h('strong', null, title || 'Contenido')),
          renderEntry(d));
      },
    });
  }

  CMS.registerPreviewTemplate('ajustes', GenericPreview('Ajustes del sitio'));
  CMS.registerPreviewTemplate('biblioteca', GenericPreview('Página de biblioteca'));
  CMS.registerPreviewTemplate('contacto', GenericPreview('Página de contacto'));
  CMS.registerPreviewTemplate('legales', GenericPreview('Páginas legales'));

  CMS.registerPreviewTemplate('inicio', createClass({
    displayName: 'InicioPreview',
    render: function () {
      var d = data(this.props);
      var hero = d.hero || {};
      var cf = d.comoFunciona || {};
      var pe = d.porEspecie || {};
      var q = d.quienes || {};
      var ag = d.agenda || {};
      return h('div', { className: 'dn' },
        h('div', { className: 'dn-hero' },
          hero.imagen ? h('img', { className: 'dn-hero-img', src: img(hero.imagen), alt: '' }) : null,
          h('div', { className: 'dn-hero-in' },
            hero.eyebrow ? h('div', { className: 'dn-eyebrow' }, hero.eyebrow) : null,
            Title('h1', hero.titulo, hero.resaltado),
            hero.texto ? h('p', null, hero.texto) : null,
            hero.acciones && hero.acciones.length ? h('div', { className: 'dn-actions' }, hero.acciones.map(function (a, i) {
              return h('span', { className: 'dn-btn' + (i ? ' dn-btn--ghost' : ''), key: i }, a.label);
            })) : null,
            hero.meta && hero.meta.length ? h('div', { className: 'dn-meta' }, hero.meta.map(function (m, i) {
              return h('span', { key: i }, m);
            })) : null)),
        (d.trust && d.trust.label) ? h('div', { className: 'dn-card' }, h('span', { className: 'dn-label' }, d.trust.label), h('p', { className: 'dn-note' }, 'Las fuentes se editan en "Ajustes del sitio".')) : null,
        cf.pasos && cf.pasos.length ? h('div', { className: 'dn-group' },
          h('div', { className: 'dn-group-title' }, cf.eyebrow || 'Cómo funciona'),
          h('div', { className: 'dn-grid' }, cf.pasos.map(function (p, i) {
            return h('div', { className: 'dn-card', key: i },
              h('span', { className: 'dn-label' }, '0' + (i + 1)),
              h('h3', null, p.titulo),
              h('p', null, p.texto));
          }))) : null,
        pe.titulo ? h('div', { className: 'dn-group' },
          h('div', { className: 'dn-group-title' }, pe.eyebrow || 'Por especie'),
          Title('h3', pe.titulo, pe.resaltado),
          pe.texto ? h('p', { className: 'dn-note' }, pe.texto) : null) : null,
        q.titulo ? h('div', { className: 'dn-group' },
          h('div', { className: 'dn-group-title' }, q.eyebrow || 'Quiénes están detrás'),
          Title('h3', q.titulo, q.resaltado)) : null,
        d.metricas && d.metricas.length ? h('div', { className: 'dn-grid' }, d.metricas.map(function (m, i) {
          return h('div', { className: 'dn-card', key: i },
            h('h3', null, m.valor),
            h('p', null, m.texto));
        })) : null,
        ag.titulo ? h('div', { className: 'dn-group' },
          h('div', { className: 'dn-group-title' }, ag.eyebrow || 'Agenda'),
          Title('h3', ag.titulo, ag.resaltado),
          ag.card && ag.card.titulo ? h('div', { className: 'dn-card' },
            ag.card.status ? h('span', { className: 'dn-status' }, ag.card.status) : null,
            h('h3', null, ag.card.titulo),
            h('p', null, ag.card.texto)) : null) : null,
        d.cta && d.cta.titulo ? h('div', { className: 'dn-card' },
          h('h3', null, d.cta.titulo),
          h('p', null, d.cta.copy)) : null);
    },
  }));

  CMS.registerPreviewTemplate('especies', createClass({
    displayName: 'EspeciesPreview',
    render: function () {
      var d = data(this.props);
      var list = d.especies || [];
      return h('div', { className: 'dn' },
        h('div', { className: 'dn-head' },
          h('span', { className: 'dn-kicker' }, 'Vista previa'),
          h('strong', null, 'Fichas de especie (' + list.length + ')')),
        list.length ? h('div', { className: 'dn-grid' }, list.map(function (e, i) {
          return h('div', { className: 'dn-card', key: i },
            e.image ? h('img', { className: 'dn-img', src: img(e.image), alt: '' }) : null,
            h('span', { className: 'dn-label' }, e.latin || ''),
            h('h3', null, e.name || 'Sin nombre'),
            h('p', null, e.copy || ''));
        })) : h('p', { className: 'dn-empty' }, 'Aún no hay especies agregadas.'));
    },
  }));

  CMS.registerPreviewTemplate('precios', createClass({
    displayName: 'PreciosPreview',
    render: function () {
      var d = data(this.props);
      var rows = d.precios || [];
      var headers = (d.pagina && d.pagina.tabla && d.pagina.tabla.headers) || ['Especie', 'Referencia', 'Periodo', 'Fuente', 'Corte'];
      var pendiente = (d.pagina && d.pagina.tabla && d.pagina.tabla.pendiente) || 'Dato sujeto a validación';
      return h('div', { className: 'dn' },
        h('div', { className: 'dn-head' },
          h('span', { className: 'dn-kicker' }, 'Vista previa'),
          h('strong', null, 'Tabla de referencias (' + rows.length + ')')),
        rows.length ? h('table', { className: 'dn-table' },
          h('thead', null, h('tr', null, headers.map(function (hd, i) { return h('th', { key: i }, hd); }))),
          h('tbody', null, rows.map(function (r, i) {
            return h('tr', { key: i },
              h('td', null, r.species || '—'),
              h('td', null, r.reference || pendiente),
              h('td', null, r.period || '—'),
              h('td', null, r.source || '—'),
              h('td', null, r.cut || '—'));
          }))) : h('p', { className: 'dn-empty' }, 'La tabla se completa con las filas de la colección.'),
        h('p', { className: 'dn-note' }, 'Recuerde: cada dato real debe indicar fuente, periodo, unidad y fecha de corte.'));
    },
  }));

  CMS.registerPreviewTemplate('articulos', createClass({
    displayName: 'ArticulosPreview',
    render: function () {
      var d = data(this.props);
      var list = d.articulos || [];
      return h('div', { className: 'dn' },
        h('div', { className: 'dn-head' },
          h('span', { className: 'dn-kicker' }, 'Vista previa'),
          h('strong', null, 'Artículos de biblioteca (' + list.length + ')')),
        list.length ? h('div', { className: 'dn-grid' }, list.map(function (a, i) {
          return h('div', { className: 'dn-card', key: i },
            a.state ? h('span', { className: 'dn-status' }, a.state) : null,
            h('h3', null, a.title || 'Sin título'),
            h('p', null, a.summary || ''),
            h('div', { className: 'dn-label', style: { marginTop: 8 } }, a.species === 'todas' ? 'Transversal' : (a.species || '')));
        })) : h('p', { className: 'dn-empty' }, 'Aún no hay artículos.'));
    },
  }));

  CMS.registerPreviewTemplate('faq', createClass({
    displayName: 'FaqPreview',
    render: function () {
      var d = data(this.props);
      var list = d.faq || [];
      return h('div', { className: 'dn' },
        h('div', { className: 'dn-head' },
          h('span', { className: 'dn-kicker' }, 'Vista previa'),
          h('strong', null, 'Preguntas frecuentes (' + list.length + ')')),
        list.length ? list.map(function (f, i) {
          return h('div', { className: 'dn-card', key: i },
            h('h3', null, f.question || 'Sin pregunta'),
            h('p', null, f.answer || ''));
        }) : h('p', { className: 'dn-empty' }, 'Aún no hay preguntas.'));
    },
  }));

  CMS.registerPreviewTemplate('eventos', createClass({
    displayName: 'EventosPreview',
    render: function () {
      var d = data(this.props);
      var list = d.eventos || [];
      return h('div', { className: 'dn' },
        h('div', { className: 'dn-head' },
          h('span', { className: 'dn-kicker' }, 'Vista previa'),
          h('strong', null, 'Eventos publicados (' + list.length + ')')),
        list.length ? h('div', { className: 'dn-grid' }, list.map(function (e, i) {
          return h('div', { className: 'dn-card', key: i },
            e.state ? h('span', { className: 'dn-status' }, e.state) : null,
            h('h3', null, e.title || 'Sin título'),
            h('p', null, [e.date, e.place].filter(Boolean).join(' · ')),
            e.org ? h('p', { className: 'dn-note' }, 'Organiza: ' + e.org) : null);
        })) : h('p', { className: 'dn-empty' }, 'Sin eventos por ahora. Al agregar el primero, la página mostrará la agenda completa.'));
    },
  }));

  CMS.registerPreviewTemplate('productos', createClass({
    displayName: 'ProductosPreview',
    render: function () {
      var d = data(this.props);
      var hero = d.hero || {};
      var arq = d.arquitectura || {};
      var esp = d.especie || {};
      return h('div', { className: 'dn' },
        h('div', { className: 'dn-hero' },
          h('div', { className: 'dn-hero-in' },
            hero.eyebrow ? h('div', { className: 'dn-eyebrow' }, hero.eyebrow) : null,
            Title('h1', hero.titulo, hero.resaltado),
            hero.texto ? h('p', null, hero.texto) : null)),
        d.cardCta ? h('p', { className: 'dn-note' }, 'Tarjetas de especie: ' + d.cardCta) : null,
        arq.cards && arq.cards.length ? h('div', { className: 'dn-group' },
          h('div', { className: 'dn-group-title' }, arq.eyebrow || 'Arquitectura común'),
          h('div', { className: 'dn-grid' }, arq.cards.map(function (c, i) {
            return h('div', { className: 'dn-card', key: i },
              h('span', { className: 'dn-label' }, c.label || ''),
              h('h3', null, c.titulo || ''),
              h('p', null, c.texto || ''));
          }))) : null,
        esp.panorama ? h('div', { className: 'dn-group' },
          h('div', { className: 'dn-group-title' }, 'Textos de las fichas de especie'),
          h('div', { className: 'dn-row' }, h('b', null, 'Panorama'), h('div', null, Title('span', esp.panorama.titulo, esp.panorama.resaltado))),
          esp.referencias ? h('div', { className: 'dn-row' }, h('b', null, 'Referencias'), h('div', null, Title('span', esp.referencias.titulo, esp.referencias.resaltado))) : null,
          esp.cta ? h('div', { className: 'dn-row' }, h('b', null, 'Mensaje final'), h('div', null, esp.cta.titulo)) : null) : null,
        d.cta && d.cta.titulo ? h('div', { className: 'dn-card' },
          h('h3', null, d.cta.titulo),
          h('p', null, d.cta.copy)) : null);
    },
  }));
})();
