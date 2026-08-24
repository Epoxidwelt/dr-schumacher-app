const OFFICIAL = {
  home: 'https://www.schumacher-online.com/de',
  catalog: 'https://schumacher-katalog.com/de/',
  sheets: 'https://www.schumacher-online.com/de/downloads/datenblaetter',
  images: 'https://www.schumacher-online.com/de/downloads/produktbilder',
  plans: 'https://www.schumacher-online.com/de/downloads/anleitungen-plaene',
  disinfectionPlans: 'https://www.eqmed.de/'
};

const PRODUCTS = [
  {id:'aseptoman-med',sku:'00-610-005',name:'ASEPTOMAN® MED',category:'hands',kind:'Händedesinfektionsmittel',spectrum:['begrenzt viruzid PLUS'],summary:'Alkoholisches Händedesinfektionsmittel für die hygienische und chirurgische Händedesinfektion.',facts:['Wirksam innerhalb von 30 Sekunden gegen Noro-, Adeno- und Rotaviren','Hervorragende Hautverträglichkeit durch pflegende Rückfetter','Frei von quartären Ammoniumverbindungen'],sizes:['100 ml','500 ml','1 l'],color:'#0876d1'},
  {id:'aseptoman-gel',sku:'00-615-005',name:'ASEPTOMAN® GEL',category:'hands',kind:'Händedesinfektionsgel',spectrum:['begrenzt viruzid'],summary:'Gelförmiges Präparat für eine einfache, kontrollierte Händedesinfektion.',facts:['Angenehme Gelkonsistenz','Für die häufige Anwendung geeignet','Sehr gute Verteilung auf den Händen'],sizes:['100 ml','500 ml','1 l'],color:'#0876d1'},
  {id:'aseptoman-viral',sku:'00-610-010',name:'ASEPTOMAN® VIRAL',category:'hands',kind:'Händedesinfektionsmittel',spectrum:['viruzid'],summary:'Händedesinfektionsmittel mit erweitertem Wirkungsspektrum für besondere Anforderungen.',facts:['Breites Wirkungsspektrum','Für hygienische und chirurgische Händedesinfektion','Aktuelle Einwirkzeiten bitte der Produktinformation entnehmen'],sizes:['500 ml','1 l'],color:'#0876d1'},
  {id:'descoderm',sku:'00-620-005',name:'DESCODERM',category:'hands',kind:'Händedesinfektionsmittel',spectrum:['begrenzt viruzid'],summary:'Farbstoff- und parfümfreies Händedesinfektionsmittel für sensible Haut.',facts:['Frei von Farb- und Parfümstoffen','Für sensible Haut geeignet','Für medizinische Bereiche'],sizes:['100 ml','500 ml','1 l'],color:'#0876d1'},
  {id:'descosept-sensitive',sku:'00-311-005',name:'DESCOSEPT SENSITIVE',category:'surface',kind:'Gebrauchsfertige Flächendesinfektion',spectrum:['begrenzt viruzid PLUS'],summary:'Alkoholische Schnelldesinfektion für materialempfindliche, patientennahe Flächen.',facts:['Schnell trocknend','Gute Materialverträglichkeit','Gebrauchsfertig und einfach anzuwenden'],sizes:['500 ml','1 l','5 l'],color:'#44ad45'},
  {id:'descosept-sensitive-wipes',sku:'00-313-100',name:'DESCOSEPT SENSITIVE WIPES',category:'surface',kind:'Reinigungs- und Desinfektionstücher',spectrum:['begrenzt viruzid PLUS'],summary:'Gebrauchsfertige Tücher für die schnelle Reinigung und Desinfektion mittelgroßer Flächen.',facts:['Schnelle Einzelentnahme','Nachhaltige Bio-Vlies-Variante verfügbar','Ideal für patientennahe Bereiche'],sizes:['60 Tücher','100 Tücher','120 Tücher'],color:'#44ad45'},
  {id:'descosept-spezial',sku:'00-330-010',name:'DESCOSEPT SPEZIAL',category:'surface',kind:'Alkoholfreie Flächendesinfektion',spectrum:['begrenzt viruzid'],summary:'Alkoholfreie gebrauchsfertige Reinigung und Desinfektion für empfindliche Oberflächen.',facts:['Ohne Alkohole, Aldehyde und Phenole','Für empfindliche Oberflächen','Reinigend und desinfizierend'],sizes:['1 l','5 l'],color:'#44ad45'},
  {id:'ultrasol-oxy',sku:'00-355-100',name:'ULTRASOL OXY® WIPES',category:'surface',kind:'Reinigungs- und Desinfektionstücher',spectrum:['viruzid','sporizid'],summary:'Oxidative Reinigung und Desinfektion mit sehr breitem Wirkungsspektrum.',facts:['Viruzid und sporizid','Für Routine und Ausbruchsfall','Dualauslobung als Biozid- und Medizinprodukt'],sizes:['100 Tücher'],color:'#44ad45'},
  {id:'ultrasol-active',sku:'00-358-020',name:'ULTRASOL® ACTIVE',category:'surface',kind:'Desinfektionsmittel-Konzentrat',spectrum:['viruzid','sporizid'],summary:'Pulverkonzentrat für anspruchsvolle Reinigung und Flächendesinfektion.',facts:['Breites Wirkungsspektrum','Praktisch staubfreie Anwendung','Gute Reinigungsleistung'],sizes:['20 g','1 kg'],color:'#44ad45'},
  {id:'perfektan-active',sku:'00-410-020',name:'PERFEKTAN® ACTIVE',category:'instruments',kind:'Manuelle Instrumentenaufbereitung',spectrum:['viruzid'],summary:'Konzentrat zur manuellen Reinigung und Desinfektion medizinischer Instrumente.',facts:['Für das Tauchbadverfahren','Breites Wirkungsspektrum','Materialschonende Formulierung'],sizes:['2 l','5 l'],color:'#7956b3'},
  {id:'descoton-extra',sku:'00-420-020',name:'DESCOTON EXTRA',category:'instruments',kind:'Instrumentendesinfektion',spectrum:['begrenzt viruzid PLUS'],summary:'Reinigendes und desinfizierendes Präparat für die manuelle Instrumentenaufbereitung.',facts:['Reinigung und Desinfektion in einem Schritt','Für medizinische Instrumente','Dosierung gemäß Produktinformation'],sizes:['2 l','5 l'],color:'#7956b3'},
  {id:'esh-spender',sku:'00-900-001',name:'ESH SPENDERSYSTEM',category:'application',kind:'Spender und Applikation',spectrum:[],summary:'Hygienisches Spendersystem für Hände- und Hautpräparate.',facts:['Einfacher Gebindewechsel','Für unterschiedliche Gebindegrößen','Für professionelle Hygienekonzepte'],sizes:['500 ml','1 l'],color:'#ef829a'},
  {id:'vacubag',sku:'00-905-010',name:'VACUBAG® SYSTEM',category:'application',kind:'Geschlossenes Spendersystem',spectrum:[],summary:'Geschlossenes Beutelsystem für hygienische und wirtschaftliche Produktentnahme.',facts:['Einfacher Bag-Austausch','Pumpenaufbereitung entfällt','Optimierte Restentleerung'],sizes:['1 l'],color:'#ef829a'},
  {id:'wipes-spender',sku:'00-910-001',name:'VLIESTUCH-SPENDERSYSTEM',category:'application',kind:'Spender und Applikation',spectrum:[],summary:'Wiederverwendbares Spendersystem für getränkte Vliestücher.',facts:['Einfache Anwendung','Verschiedene Größen verfügbar','Aufbereitungshinweise beachten'],sizes:['Kompakt','Standard'],color:'#ef829a'}
];

const USER_PROFILES = [
  {id:'sales', name:'Außendienst', description:'Produkte, Kundentermine, Angebote und Follow-ups', permissions:['products','sales','reports']},
  {id:'inside', name:'Innendienst', description:'Angebote, Berichte und Preisverwaltung', permissions:['products','sales','reports','prices']},
  {id:'admin', name:'Administrator', description:'Vollzugriff einschließlich lokaler Datenverwaltung', permissions:['products','sales','reports','prices','admin']}
];

const storedProfile = sessionStorage.getItem('activeProfile') || '';
const state = {
  screen: storedProfile ? (sessionStorage.getItem('priceList') ? 'menu' : 'prices') : 'profile',
  activeProfile: storedProfile,
  priceList: sessionStorage.getItem('priceList') || '',
  customerMode: sessionStorage.getItem('customerMode') === 'true',
  category: 'all', query: '', spectrum: 'all', selected: null,
  prices: JSON.parse(localStorage.getItem('prices') || '{}'),
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  size: '',
  recent: JSON.parse(localStorage.getItem('recentProducts') || '[]'),
  emailInclude: {price:true, sheet:true, safety:true},
  advisor: {category:'', spectrum:'', alcohol:'', need:''},
  compareIds: JSON.parse(localStorage.getItem('compareIds') || '[]'),
  lists: JSON.parse(localStorage.getItem('productLists') || '{}'),
  activeList: localStorage.getItem('activeProductList') || 'Meine Merkliste',
  competitorQuery: '',
  talkProduct: '', talkSituation: 'Kurzvorstellung',
  quoteCustomer: localStorage.getItem('quoteCustomer') || '',
  quoteContact: localStorage.getItem('quoteContact') || '',
  quoteNote: localStorage.getItem('quoteNote') || '',
  quoteValidUntil: localStorage.getItem('quoteValidUntil') || '',
  quoteItems: JSON.parse(localStorage.getItem('quoteItems') || '{}'),
  importMeta: JSON.parse(localStorage.getItem('priceImportMeta') || '{}'),
  visitReport: JSON.parse(localStorage.getItem('visitReport') || '{}'),
  savedReports: JSON.parse(localStorage.getItem('savedVisitReports') || '[]'),
  globalQuery: ''
};

const $ = (selector) => document.querySelector(selector);
const money = (value) => value === undefined || value === null || value === ''
  ? 'Preis nicht hinterlegt'
  : new Intl.NumberFormat('de-DE', {style:'currency', currency:'EUR'}).format(Number(value));

function icon(name) {
  const icons = {
    surface:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/></svg>',
    hands:'<svg viewBox="0 0 24 24"><path d="M7 12V5a1.5 1.5 0 0 1 3 0v5-7a1.5 1.5 0 0 1 3 0v7-6a1.5 1.5 0 0 1 3 0v6-4a1.5 1.5 0 0 1 3 0v8c0 5-3 8-8 8-4 0-7-2-8-6l-1-4a1.6 1.6 0 0 1 3-1l2 4z"/></svg>',
    instruments:'<svg viewBox="0 0 24 24"><path d="M5 20 19 6M7 4l3 3-3 3-3-3 3-3Zm10 10 3 3-3 3-3-3 3-3Z"/></svg>',
    application:'<svg viewBox="0 0 24 24"><path d="M9 3h6v3H9zM8 6h8l2 5v10H6V11l2-5Zm2 6h4"/></svg>',
    all:'<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4zM8 4v16M4 9h16M4 14h16"/></svg>',
    downloads:'<svg viewBox="0 0 24 24"><path d="M12 3v12m-4-4 4 4 4-4M4 19h16"/></svg>',
    search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg>',
    star:'<svg viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>',
    settings:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 15 6l-.3-2.6h-4L10.4 6a8 8 0 0 0-1.6 1L6.5 6 4.5 9.5 6.6 11a7 7 0 0 0 0 2l-2.1 1.5 2 3.4 2.4-1A8 8 0 0 0 10.5 18l.3 2.6h4L15.1 18a8 8 0 0 0 1.6-1l2.3 1 2-3.4-2.1-1.5c.1-.4.1-.7.1-1.1Z"/></svg>',
    advisor:'<svg viewBox="0 0 24 24"><path d="M4 5h16v12H8l-4 4V5Z"/><path d="M8 9h8M8 13h5"/></svg>',
    compare:'<svg viewBox="0 0 24 24"><path d="M7 4v16M17 4v16M3 8h8M13 16h8"/></svg>',
    recent:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    lists:'<svg viewBox="0 0 24 24"><path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/></svg>',
    competition:'<svg viewBox="0 0 24 24"><path d="M4 7h16M7 4v16M17 4v16M4 17h16"/></svg>',
    talk:'<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 9h8M8 12h6"/></svg>',
    offer:'<svg viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 11h6M9 15h6"/></svg>',
    report:'<svg viewBox="0 0 24 24"><path d="M5 3h14v18H5z"/><path d="M8 8h8M8 12h8M8 16h5"/><path d="m15 16 2 2 3-4"/></svg>',
    dashboard:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 18h7M17.5 14.5V21"/></svg>'
  };
  return icons[name] || '';
}

function currentProfile() { return USER_PROFILES.find(p => p.id === state.activeProfile) || USER_PROFILES[0]; }
function can(permission) { return currentProfile().permissions.includes(permission); }

function header(back=false) {
  const profile=currentProfile();
  return `<header class="topbar">
    ${back ? '<button class="icon-button" data-action="back" aria-label="Zurück">←</button>' : ''}
    <img class="logo" src="public/assets/dr-schumacher-logo.png" alt="Dr. Schumacher">
    <div class="grow"></div>
    <button class="profile-pill" data-action="profile"><span>Benutzerrolle</span><strong>${profile.name}</strong></button>
    <button class="customer-mode-pill ${state.customerMode?'active':''}" data-action="customer-mode"><span>${state.customerMode?'Kundenmodus':'Interner Modus'}</span><strong>${state.customerMode?'Preise verborgen':'Preise sichtbar'}</strong></button>
    <button class="price-pill" data-action="prices"><span>Aktive Preisliste</span><strong>${state.priceList || 'wählen'}</strong></button>
  </header>`;
}

function bottomNav(active='home') {
  return `<nav class="bottom-nav">
    <button data-nav="home" class="${active==='home'?'active':''}">${icon('surface')}<span>Start</span></button>
    <button data-nav="search" class="${active==='search'?'active':''}">${icon('search')}<span>Suche</span></button>
    <button data-nav="favorites" class="${active==='favorites'?'active':''}">${icon('star')}<span>Favoriten</span></button>
    <button data-nav="settings" class="${active==='settings'?'active':''}">${icon('settings')}<span>Mehr</span></button>
  </nav>`;
}

function render() {
  const app = $('#app');
  let html = '';
  if (state.screen === 'profile') html = profileScreen();
  if (state.screen === 'prices') html = priceScreen();
  if (state.screen === 'menu') html = header() + menuScreen() + bottomNav('home');
  if (state.screen === 'products') html = header(true) + productsScreen() + bottomNav('search');
  if (state.screen === 'detail') html = header(true) + detailScreen() + bottomNav('search');
  if (state.screen === 'favorites') html = header(true) + favoritesScreen() + bottomNav('favorites');
  if (state.screen === 'settings') html = header(true) + settingsScreen() + bottomNav('settings');
  if (state.screen === 'advisor') html = header(true) + advisorScreen() + bottomNav('home');
  if (state.screen === 'recent') html = header(true) + recentScreen() + bottomNav('home');
  if (state.screen === 'compare') html = header(true) + compareScreen() + bottomNav('home');
  if (state.screen === 'lists') html = header(true) + listsScreen() + bottomNav('favorites');
  if (state.screen === 'competition') html = header(true) + competitionScreen() + bottomNav('home');
  if (state.screen === 'talk') html = header(true) + talkScreen() + bottomNav('home');
  if (state.screen === 'offer') html = header(true) + offerScreen() + bottomNav('home');
  if (state.screen === 'report') html = header(true) + reportScreen() + bottomNav('home');
  if (state.screen === 'dashboard') html = header(true) + dashboardScreen() + bottomNav('home');
  app.innerHTML = html;
  bind();
}


function profileScreen() {
  return `<main class="price-shell profile-shell"><section class="price-panel profile-panel">
    <img class="welcome-logo" src="public/assets/dr-schumacher-logo.png" alt="Dr. Schumacher">
    <span class="eyebrow">Interne Nutzung</span><h1>Wie möchten Sie die App verwenden?</h1>
    <p>Wählen Sie Ihre Rolle. Die Auswahl steuert die sichtbaren Funktionen auf diesem Gerät.</p>
    <div class="profile-options">${USER_PROFILES.map(profile=>`<button class="profile-option ${state.activeProfile===profile.id?'selected':''}" data-profile="${profile.id}"><span class="profile-avatar">${profile.id==='sales'?'AD':profile.id==='inside'?'ID':'A'}</span><span><strong>${profile.name}</strong><small>${profile.description}</small></span><b>›</b></button>`).join('')}</div>
    <div class="role-note"><strong>Hinweis:</strong> Diese lokale Rollenauswahl verbessert die Bedienung, ersetzt aber keine zentrale Firmenanmeldung oder technische Zugriffskontrolle.</div>
  </section></main>`;
}

function priceScreen() {
  const options = ['UVP','FH 1','FH 2','FH 3','FH 4','FH 5'];
  return `<main class="price-shell">
    <section class="price-panel">
      <img class="welcome-logo" src="public/assets/dr-schumacher-logo.png" alt="Dr. Schumacher">
      <span class="eyebrow">Interner Produktberater</span>
      <h1>Welche Preisliste möchten Sie verwenden?</h1>
      <p>Die Auswahl gilt für die gesamte Sitzung. Sie kann später jederzeit geändert werden.</p>
      <div class="price-options">${options.map(option => `<button class="price-option ${state.priceList===option?'selected':''}" data-price="${option}"><span>${option}</span>${option==='UVP'?'<small>Öffentliche Verkaufspreise</small>':'<small>Interne Preisliste</small>'}</button>`).join('')}</div>
      <button class="primary-button" data-action="start" ${!state.priceList?'disabled':''}>Produktberater starten <span>→</span></button>
      <p class="privacy-note">Preise bleiben lokal auf diesem Gerät und werden nicht in eine Cloud übertragen.</p>
    </section>
  </main>`;
}

function menuScreen() {
  let cards = [
    ['surface','Fläche','Desinfektion & Reinigung'],
    ['hands','Hände & Haut','Händedesinfektion & Pflege'],
    ['instruments','Instrumente','Aufbereitung & Desinfektion'],
    ['application','Applikation','Spendersysteme & Zubehör'],
    ['advisor','Produktberater','In wenigen Fragen zum passenden Produkt'],
    ['compare','Produktvergleich','Bis zu drei Produkte direkt vergleichen'],
    ['lists','Merklisten','Produkte für Termine zusammenstellen'],
    ['offer','Kundenübersicht','Merkliste als Präsentation oder PDF'],
    ['report','Besuchsbericht','CRM-Zusammenfassung und Follow-up'],
    ['dashboard','Follow-up Dashboard','Offene Termine und Aufgaben im Blick'],
    ['downloads','Downloads','Aktuelle Unterlagen online'],
    ['all','Alle Funktionen','Gesamte Produktübersicht öffnen']
  ];
  if (!can('reports')) cards = cards.filter(card => !['report','dashboard'].includes(card[0]));
  if (!can('sales')) cards = cards.filter(card => !['compare','lists','offer'].includes(card[0]));
  const today = new Date().toISOString().slice(0,10);
  const openReports = state.savedReports.filter(r => (r.taskStatus || 'Offen') !== 'Erledigt');
  const due = openReports.filter(r => r.followUp && r.followUp <= today).length;
  const favoriteProducts = state.favorites.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean).slice(0,4);
  const recentProducts = state.recent.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean).slice(0,4);
  const searchResults = state.globalQuery.trim() ? PRODUCTS.filter(p => `${p.name} ${p.kind} ${p.sku} ${p.summary}`.toLowerCase().includes(state.globalQuery.toLowerCase())).slice(0,8) : [];
  return `<main class="page menu-page cockpit-page">
    <section class="cockpit-hero"><div><span class="eyebrow">Dr. Schumacher Sales Companion</span><h1>Guten Tag – womit möchten Sie starten?</h1><p>Produkte, Preise, Unterlagen und Kundentermine an einem Ort.</p></div><div class="status-card"><span>Aktive Preisliste</span><strong>${state.priceList}</strong><small>${state.customerMode?'Kundenmodus – Preise verborgen':Object.keys(state.prices).length+' Preiszeilen lokal'}</small></div></section>
    <label class="global-search">${icon('search')}<input id="globalSearch" value="${escapeHtml(state.globalQuery)}" placeholder="Produkt, Artikelnummer oder Anwendung suchen"><span>⌘ K</span></label>
    ${state.globalQuery.trim() ? `<section class="cockpit-search-results"><div class="section-heading"><div><span class="eyebrow">Sofortsuche</span><h2>${searchResults.length} Treffer</h2></div><button class="secondary-button" data-action="clear-global-search">Suche löschen</button></div><div class="product-list">${searchResults.map(productCard).join('') || '<div class="empty-state"><h2>Kein Produkt gefunden</h2><p>Versuchen Sie einen anderen Suchbegriff.</p></div>'}</div></section>` : ''}
    <section class="cockpit-stats">
      <button data-category="dashboard"><strong>${due}</strong><span>heute / überfällig</span><small>Follow-ups öffnen →</small></button>
      <button data-category="favorites"><strong>${state.favorites.length}</strong><span>Favoriten</span><small>Schnellzugriff →</small></button>
      <button data-category="lists"><strong>${Object.keys(state.lists).length}</strong><span>Merklisten</span><small>Termine vorbereiten →</small></button>
      <button data-category="settings"><strong>${Object.keys(state.prices).length}</strong><span>Preisdatensätze</span><small>Import verwalten →</small></button>
    </section>
    <section class="cockpit-columns">
      <div class="cockpit-panel"><div class="panel-title"><div><span class="eyebrow">Schnellzugriff</span><h2>Zuletzt angesehen</h2></div><button data-category="recent">Alle</button></div><div class="mini-products">${recentProducts.map(miniProductCard).join('') || '<p class="muted-copy">Noch keine Produkte geöffnet.</p>'}</div></div>
      <div class="cockpit-panel"><div class="panel-title"><div><span class="eyebrow">Persönlich</span><h2>Favoriten</h2></div><button data-nav="favorites">Alle</button></div><div class="mini-products">${favoriteProducts.map(miniProductCard).join('') || '<p class="muted-copy">Noch keine Favoriten gespeichert.</p>'}</div></div>
    </section>
    <div class="category-grid compact-grid">${cards.map(([key,title,sub]) => `<button class="category-card ${key}" data-category="${key}"><span class="category-icon">${icon(key)}</span><span><strong>${title}</strong><small>${sub}</small></span><b>›</b></button>`).join('')}</div>
    <section class="online-card"><div class="online-dot"></div><div><strong>Unterlagen immer aktuell</strong><p>Produktinformationen, Datenblätter und Bilder werden direkt von schumacher-online.com geöffnet.</p></div><a href="${OFFICIAL.home}" target="_blank" rel="noopener">Website öffnen</a></section>
  </main>`;
}

function miniProductCard(product) {
  return `<button class="mini-product" data-product="${product.id}"><span class="mini-product-icon" style="--product-color:${product.color}">${product.category==='hands'?'✋':product.category==='surface'?'▦':product.category==='instruments'?'✂':'▣'}</span><span><strong>${product.name}</strong><small>${product.kind}</small></span><b>›</b></button>`;
}

function productsScreen() {
  if (state.category === 'downloads') return downloadsScreen();
  const names = {surface:'Fläche',hands:'Hände & Haut',instruments:'Instrumente',application:'Applikation',all:'Alle Produkte'};
  const spectra = ['all','begrenzt viruzid','begrenzt viruzid PLUS','viruzid','sporizid'];
  const list = PRODUCTS.filter(p =>
    (state.category === 'all' || p.category === state.category) &&
    (!state.query || `${p.name} ${p.kind} ${p.sku}`.toLowerCase().includes(state.query.toLowerCase())) &&
    (state.spectrum === 'all' || p.spectrum.includes(state.spectrum))
  );
  return `<main class="page products-page">
    <div class="section-heading"><div><span class="eyebrow">Produktbereich</span><h1>${names[state.category]}</h1></div><span class="result-count">${list.length} Produkte</span></div>
    <label class="search-box">${icon('search')}<input id="search" value="${escapeHtml(state.query)}" placeholder="Produktname oder Artikelnummer suchen"></label>
    <div class="filter-row">${spectra.map(s => `<button class="filter-chip ${state.spectrum===s?'active':''}" data-spectrum="${s}">${s==='all'?'Alle':s}</button>`).join('')}</div>
    <div class="product-list">${list.map(productCard).join('') || '<div class="empty-state"><h2>Keine Produkte gefunden</h2><p>Bitte ändern Sie Ihre Suche oder den Filter.</p></div>'}</div>
  </main>`;
}

function productCard(product) {
  const price = resolvePrice(product);
  const favorite = state.favorites.includes(product.id);
  return `<article class="product-row" data-product="${product.id}">
    <div class="product-image" style="--product-color:${product.color}"><span>${product.category==='hands'?'✋':product.category==='surface'?'▦':product.category==='instruments'?'✂':'▣'}</span></div>
    <div class="product-copy"><small>${product.kind}</small><h2>${product.name}</h2><div class="badges">${product.spectrum.map(spectrumBadge).join('')}</div><p>Art.-Nr. ${product.sku}</p></div>
    <div class="row-price">${state.customerMode?'<strong class="hidden-price">Preis verborgen</strong><small>Kundenmodus</small>':`<strong>${money(price)}</strong><small>${state.priceList}</small>`}</div>
    <button class="favorite-button ${favorite?'active':''}" data-favorite="${product.id}" aria-label="Favorit">${icon('star')}</button>
    <span class="chevron">›</span>
  </article>`;
}

function detailScreen() {
  const p = PRODUCTS.find(x => x.id === state.selected);
  if (!p) { state.screen = 'products'; return productsScreen(); }
  if (!state.size) state.size = p.sizes[0];
  const price = resolvePrice(p, state.size);
  const favorite = state.favorites.includes(p.id);
  return `<main class="page detail-page">
    <section class="detail-hero">
      <div class="detail-image" style="--product-color:${p.color}"><div class="bottle"><span>${p.name.split(' ')[0]}</span></div></div>
      <div class="detail-copy"><span class="eyebrow">${p.kind}</span><div class="title-line"><h1>${p.name}</h1><button class="favorite-button large ${favorite?'active':''}" data-favorite="${p.id}">${icon('star')}</button></div><div class="badges">${p.spectrum.map(spectrumBadge).join('')}</div><p>${p.summary}</p><small>Artikelnummer: ${p.sku}</small></div>
    </section>
    <section class="detail-grid">
      <div class="info-card"><h2>Das Wichtigste auf einen Blick</h2><ul>${p.facts.map(f => `<li><span>✓</span>${f}</li>`).join('')}</ul><div class="info-warning">Verbindliche Anwendung, Einwirkzeiten und Sicherheit bitte immer anhand der aktuellen offiziellen Produktinformation prüfen.</div></div>
      <div class="price-card-detail"><span>Gebinde auswählen</span><div class="size-selector">${p.sizes.map(size => `<button class="${state.size===size?'active':''}" data-size="${size}">${size}</button>`).join('')}</div><div class="price-display"><div>${state.customerMode?'<small>Kundenmodus aktiv</small><strong class="hidden-price">Preis verborgen</strong><span>Interne Konditionen werden nicht angezeigt.</span>':`<small>Ihr Preis (${state.priceList})</small><strong>${money(price)}</strong><span>zzgl. MwSt.</span>`}</div><button data-action="${state.customerMode?'customer-mode':'prices'}">${state.customerMode?'Internen Modus aktivieren':'Preisliste wechseln'}</button></div>
        ${emailCard(p)}
      </div>
    </section>
    <section class="document-section"><h2>Aktuelle Unterlagen</h2><div class="document-grid">
      ${documentLink('Produktinformation','Aktuelle Produktinformationen und Einwirkzeiten',OFFICIAL.sheets,'📄')}
      ${documentLink('Sicherheitsdatenblatt','Aktuelle Sicherheitsinformationen',OFFICIAL.sheets,'🛡️')}
      ${documentLink('Betriebsanweisung','Dokumente für den sicheren Umgang',OFFICIAL.sheets,'📋')}
      ${documentLink('Produktbild','Aktuelle Bilddaten herunterladen',OFFICIAL.images,'🖼️')}
    </div></section>
  </main>`;
}


function emailCard(p) {
  const chips = [
    ['price','Preis', !state.customerMode],
    ['sheet','Produktdatenblatt', true],
    ['safety','Sicherheitsdatenblatt', true]
  ];
  return `<div class="email-card">
    <span>Kundeninfo per E-Mail</span>
    <div class="email-chips">${chips.map(([key,label,available]) => available ? `<button class="filter-chip email-chip ${state.emailInclude[key]?'active':''}" data-email-toggle="${key}">${label}</button>` : '').join('')}</div>
    <button class="primary-button compact" data-action="send-email" data-product="${p.id}">${icon('talk')}<span>Info per E-Mail senden</span></button>
  </div>`;
}

function buildProductEmail(p) {
  const size = state.size || p.sizes[0];
  const price = resolvePrice(p, size);
  const inc = state.emailInclude;
  const lines = [
    `Guten Tag,`,
    ``,
    `anbei die gewünschten Informationen zu ${p.name} (${p.kind}):`,
    `Artikelnummer: ${p.sku}`,
    `Gebinde: ${size}`
  ];
  if (inc.price && !state.customerMode && price !== undefined && price !== null && price !== '') lines.push(`Preis (${state.priceList}): ${money(price)} zzgl. MwSt.`);
  if (inc.sheet) lines.push(`Produktdatenblatt: ${OFFICIAL.sheets}`);
  if (inc.safety) lines.push(`Sicherheitsdatenblatt: ${OFFICIAL.sheets}`);
  lines.push('', 'Bei Fragen stehe ich gerne zur Verfügung.', 'Beste Grüße');
  return {
    subject: `Produktinformation ${p.name} – Dr. Schumacher`,
    body: lines.join('\n')
  };
}

function sendProductEmail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const {subject, body} = buildProductEmail(p);
  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function advisorScreen() {
  const a = state.advisor;
  const categoryOptions = [['surface','Fläche'],['hands','Hände & Haut'],['instruments','Instrumente'],['application','Applikation']];
  const spectrumOptions = ['egal','begrenzt viruzid','begrenzt viruzid PLUS','viruzid','sporizid'];
  const alcoholOptions = ['egal','alkoholisch','alkoholfrei'];
  const needOptions = ['Routine','empfindliche Materialien','Ausbruchsfall','breites Wirkungsspektrum'];
  const results = advisorResults();
  return `<main class="page advisor-page">
    <div class="section-heading"><div><span class="eyebrow">Geführte Auswahl</span><h1>Produktberater</h1><p>Beantworten Sie wenige Fragen. Die Empfehlung ersetzt keine verbindliche Produktinformation.</p></div></div>
    <section class="advisor-card"><h2>1. Wo soll das Produkt eingesetzt werden?</h2><div class="answer-grid">${categoryOptions.map(([v,l])=>`<button class="answer-button ${a.category===v?'active':''}" data-advisor="category" data-value="${v}">${l}</button>`).join('')}</div></section>
    <section class="advisor-card"><h2>2. Welches Wirkspektrum wird benötigt?</h2><div class="answer-grid compact">${spectrumOptions.map(v=>`<button class="answer-button ${a.spectrum===v?'active':''}" data-advisor="spectrum" data-value="${v}">${v}</button>`).join('')}</div></section>
    <section class="advisor-card"><h2>3. Alkoholisch oder alkoholfrei?</h2><div class="answer-grid compact">${alcoholOptions.map(v=>`<button class="answer-button ${a.alcohol===v?'active':''}" data-advisor="alcohol" data-value="${v}">${v}</button>`).join('')}</div></section>
    <section class="advisor-card"><h2>4. Was ist besonders wichtig?</h2><div class="answer-grid compact">${needOptions.map(v=>`<button class="answer-button ${a.need===v?'active':''}" data-advisor="need" data-value="${v}">${v}</button>`).join('')}</div></section>
    <section class="advisor-results"><div class="section-heading"><div><span class="eyebrow">Empfehlung</span><h2>${results.length ? 'Passende Produkte' : 'Bitte zuerst Einsatzbereich wählen'}</h2></div><button class="secondary-button" data-action="reset-advisor">Zurücksetzen</button></div><div class="product-list">${results.map(productCard).join('')}</div><div class="advisor-note">Die Auswahl basiert auf den hinterlegten Kurzmerkmalen. Vor einer verbindlichen Empfehlung müssen aktuelle Produktinformation, Einwirkzeiten, Freigaben und Materialverträglichkeit geprüft werden.</div></section>
  </main>`;
}

function advisorResults() {
  const a = state.advisor;
  if (!a.category) return [];
  let list = PRODUCTS.filter(p => p.category === a.category);
  if (a.spectrum && a.spectrum !== 'egal') list = list.filter(p => p.spectrum.includes(a.spectrum));
  if (a.alcohol === 'alkoholfrei') list = list.filter(p => /alkoholfrei|oxidativ|pulver/i.test(`${p.kind} ${p.summary} ${p.facts.join(' ')}`));
  if (a.alcohol === 'alkoholisch') list = list.filter(p => /alkoholisch|alkoholisches|schnelldesinfektion/i.test(`${p.kind} ${p.summary} ${p.facts.join(' ')}`));
  if (a.need === 'empfindliche Materialien') list = list.filter(p => /material|empfindlich|schonend/i.test(`${p.summary} ${p.facts.join(' ')}`));
  if (a.need === 'Ausbruchsfall') list = list.filter(p => p.spectrum.includes('viruzid') || p.spectrum.includes('sporizid'));
  if (a.need === 'breites Wirkungsspektrum') list = list.sort((x,y)=>y.spectrum.length-x.spectrum.length);
  return list.slice(0,6);
}

function recentScreen() {
  const list = state.recent.map(id => PRODUCTS.find(p => p.id===id)).filter(Boolean);
  return `<main class="page products-page"><div class="section-heading"><div><span class="eyebrow">Schnellzugriff</span><h1>Zuletzt angesehen</h1></div><span class="result-count">${list.length}</span></div><div class="product-list">${list.map(productCard).join('') || '<div class="empty-state"><h2>Noch kein Verlauf</h2><p>Geöffnete Produkte erscheinen automatisch hier.</p></div>'}</div></main>`;
}

function compareScreen() {
  const selected = state.compareIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  return `<main class="page compare-page">
    <div class="section-heading"><div><span class="eyebrow">Gesprächshilfe</span><h1>Produktvergleich</h1><p>Wählen Sie bis zu drei Produkte. Die Übersicht hilft bei der Präsentation, ersetzt aber keine aktuelle Produktinformation.</p></div><span class="result-count">${selected.length}/3</span></div>
    <section class="compare-picker"><h2>Produkte auswählen</h2><div class="compare-product-grid">${PRODUCTS.map(p => `<button class="compare-choice ${state.compareIds.includes(p.id)?'active':''}" data-compare="${p.id}"><span style="--dot:${p.color}"></span><div><strong>${p.name}</strong><small>${p.kind}</small></div><b>${state.compareIds.includes(p.id)?'✓':'+'}</b></button>`).join('')}</div></section>
    ${selected.length ? `<section class="comparison-wrap"><div class="comparison-grid">${selected.map(compareColumn).join('')}</div></section>
    <section class="pitch-card"><span class="eyebrow">Formulierungsvorschlag</span><h2>So können Sie den Vergleich erklären</h2><p>${comparisonPitch(selected)}</p><button class="secondary-button" data-action="copy-pitch">Text kopieren</button></section>` : '<div class="empty-state"><h2>Noch kein Produkt ausgewählt</h2><p>Tippen Sie oben auf bis zu drei Produkte.</p></div>'}
  </main>`;
}

function compareColumn(p) {
  const price = resolvePrice(p);
  return `<article class="compare-column"><div class="compare-head" style="--product-color:${p.color}"><span>${p.category==='hands'?'✋':p.category==='surface'?'▦':p.category==='instruments'?'✂':'▣'}</span><h2>${p.name}</h2><small>${p.kind}</small></div><div class="compare-line"><b>Wirkspektrum</b><div class="badges">${p.spectrum.map(spectrumBadge).join('') || '<span>–</span>'}</div></div><div class="compare-line"><b>Stärken</b><ul>${p.facts.slice(0,3).map(f=>`<li>${f}</li>`).join('')}</ul></div><div class="compare-line"><b>Gebinde</b><span>${p.sizes.join(', ')}</span></div><div class="compare-line"><b>${state.customerMode?'Preis':'Preis '+state.priceList}</b><strong>${state.customerMode?'verborgen':money(price)}</strong></div><button class="primary-button compact" data-product="${p.id}">Produkt öffnen</button></article>`;
}

function comparisonPitch(list) {
  if (list.length === 1) return `${list[0].name} eignet sich besonders, wenn ${list[0].facts[0].toLowerCase()}. Die verbindlichen Einsatzbedingungen prüfen wir direkt in der aktuellen Produktinformation.`;
  const names = list.map(p=>p.name).join(', ');
  return `Wir vergleichen ${names}. Entscheidend sind Einsatzbereich, benötigtes Wirkspektrum, Materialverträglichkeit und gewünschte Gebindeform. Anschließend prüfen wir die verbindlichen Einwirkzeiten und Freigaben in den aktuellen offiziellen Unterlagen.`;
}

const COMPETITORS = [
  {term:'mikrobac', label:'Mikrobac / alkoholfreie Fläche', matches:['descosept-spezial'], note:'Für empfindliche Oberflächen und alkoholfreie Anwendung prüfen.'},
  {term:'incidin', label:'Incidin / Flächendesinfektion', matches:['descosept-sensitive','descosept-sensitive-wipes','ultrasol-oxy'], note:'Je nach Material, Tuchform und benötigtem Wirkspektrum auswählen.'},
  {term:'desderman', label:'Desderman / Händedesinfektion', matches:['aseptoman-med','descoderm','aseptoman-viral'], note:'Hautverträglichkeit und erforderliches Wirkspektrum vergleichen.'},
  {term:'sterillium', label:'Sterillium / Händedesinfektion', matches:['aseptoman-med','aseptoman-gel','descoderm'], note:'Darreichungsform und Anwenderpräferenz berücksichtigen.'},
  {term:'perform', label:'Perform / Ausbruchsfall Fläche', matches:['ultrasol-active','ultrasol-oxy'], note:'Verbindliche Listungen und Einwirkzeiten aktuell prüfen.'},
  {term:'gigasept', label:'Gigasept / Instrumente', matches:['perfektan-active','descoton-extra'], note:'Instrumentenmaterial, Konzentration und Standzeit prüfen.'}
];

function listsScreen(){
  if(!state.lists[state.activeList]) state.lists[state.activeList]=[];
  const names=Object.keys(state.lists).length?Object.keys(state.lists):['Meine Merkliste'];
  const ids=state.lists[state.activeList]||[];
  const chosen=ids.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);
  return `<main class="page lists-page"><div class="section-heading"><div><span class="eyebrow">Terminvorbereitung</span><h1>Merklisten</h1><p>Stellen Sie Produkte für Kundentermine zusammen. Alles bleibt lokal auf diesem Gerät.</p></div><button class="secondary-button" data-action="new-list">Neue Liste</button></div><div class="list-tabs">${names.map(n=>`<button class="filter-chip ${n===state.activeList?'active':''}" data-list-select="${escapeHtml(n)}">${escapeHtml(n)}</button>`).join('')}</div><section class="list-builder"><div><h2>${escapeHtml(state.activeList)}</h2><div class="product-list">${chosen.map(p=>listProductCard(p,true)).join('')||'<div class="empty-state"><h2>Liste ist noch leer</h2><p>Wählen Sie rechts Produkte aus.</p></div>'}</div></div><div><h2>Produkte hinzufügen</h2><div class="quick-product-list">${PRODUCTS.map(p=>listProductCard(p,false)).join('')}</div></div></section></main>`;
}
function listProductCard(p,selected){return `<article class="mini-product"><span style="--dot:${p.color}"></span><div><strong>${p.name}</strong><small>${p.kind}</small></div><button ${selected?`data-list-remove="${p.id}"`:`data-list-add="${p.id}"`}>${selected?'−':'+'}</button></article>`}
function persistLists(){localStorage.setItem('productLists',JSON.stringify(state.lists));}
function addToList(id){if(!state.lists[state.activeList])state.lists[state.activeList]=[];if(!state.lists[state.activeList].includes(id))state.lists[state.activeList].push(id);persistLists();render();}
function removeFromList(id){state.lists[state.activeList]=(state.lists[state.activeList]||[]).filter(x=>x!==id);persistLists();render();}
function createList(){const name=prompt('Name der neuen Merkliste, z. B. Klinikum Dortmund');if(!name)return;const clean=name.trim().slice(0,50);if(!clean)return;state.lists[clean]=state.lists[clean]||[];state.activeList=clean;localStorage.setItem('activeProductList',clean);persistLists();render();}

function competitionScreen(){
 const q=state.competitorQuery.toLowerCase().trim(); const rows=COMPETITORS.filter(x=>!q||`${x.term} ${x.label}`.includes(q));
 return `<main class="page competition-page"><div class="section-heading"><div><span class="eyebrow">Interne Orientierung</span><h1>Wettbewerbsvergleich</h1><p>Suchbegriff eingeben und mögliche Dr.-Schumacher-Alternativen anzeigen.</p></div></div><label class="search-box">${icon('search')}<input id="competitorSearch" value="${escapeHtml(state.competitorQuery)}" placeholder="z. B. Mikrobac, Sterillium oder Gigasept"></label><div class="competition-list">${rows.map(r=>`<section class="competition-card"><div><small>Wettbewerbsbezug</small><h2>${r.label}</h2><p>${r.note}</p></div><div class="alternative-grid">${r.matches.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean).map(p=>`<button data-product="${p.id}"><strong>${p.name}</strong><small>${p.kind}</small><span>Produkt öffnen →</span></button>`).join('')}</div></section>`).join('')||'<div class="empty-state"><h2>Keine Zuordnung gefunden</h2><p>Versuchen Sie einen allgemeineren Produkt- oder Markennamen.</p></div>'}</div><div class="advisor-note">Diese Zuordnung ist eine interne Gesprächshilfe und keine Gleichwertigkeits- oder Freigabeerklärung. Anwendung, Materialverträglichkeit, Wirkbereich und Einwirkzeit müssen anhand der aktuellen Unterlagen geprüft werden.</div></main>`;
}

function talkScreen(){
 const product=PRODUCTS.find(p=>p.id===state.talkProduct)||PRODUCTS[0]; if(!state.talkProduct)state.talkProduct=product.id;
 const situations=['Kurzvorstellung','Bedarf ermitteln','Einwand: zu teuer','Abschlussfrage'];
 return `<main class="page talk-page"><div class="section-heading"><div><span class="eyebrow">Kundengespräch</span><h1>Gesprächsassistent</h1><p>Produkt und Situation auswählen. Die Formulierung lässt sich direkt kopieren.</p></div></div><section class="talk-config"><label>Produkt<select id="talkProduct">${PRODUCTS.map(p=>`<option value="${p.id}" ${p.id===product.id?'selected':''}>${p.name}</option>`).join('')}</select></label><label>Gesprächssituation<select id="talkSituation">${situations.map(x=>`<option ${x===state.talkSituation?'selected':''}>${x}</option>`).join('')}</select></label></section><section class="pitch-card"><span class="eyebrow">Formulierungsvorschlag</span><h2>${product.name}</h2><p class="talk-output">${buildTalkText()}</p><button class="primary-button compact" data-action="copy-talk">Text kopieren</button></section><section class="info-card"><h2>Gesprächsanker</h2><ul>${product.facts.map(f=>`<li><span>✓</span>${f}</li>`).join('')}</ul><div class="info-warning">Aussagen vor Verwendung mit der aktuellen offiziellen Produktinformation abgleichen.</div></section></main>`;
}
function buildTalkText(){const p=PRODUCTS.find(x=>x.id===state.talkProduct)||PRODUCTS[0];const fact=p.facts[0].replace(/^[A-ZÄÖÜ]/,m=>m.toLowerCase());if(state.talkSituation==='Bedarf ermitteln')return `Damit ich Ihnen das passende Produkt empfehlen kann: Auf welchen Flächen oder in welchem Prozess möchten Sie es einsetzen, welches Wirkspektrum benötigen Sie und gibt es empfindliche Materialien oder besondere Vorgaben? Anschließend prüfen wir gemeinsam, ob ${p.name} passt.`;if(state.talkSituation==='Einwand: zu teuer')return `Ich verstehe, dass der Preis wichtig ist. Bei ${p.name} sollten wir deshalb nicht nur den Gebindepreis betrachten, sondern Anwendung, Verbrauch, Prozessaufwand und Produktausnutzung. Besonders relevant ist, dass ${fact}. Lassen Sie uns die Kosten pro Anwendung vergleichen.`;if(state.talkSituation==='Abschlussfrage')return `Auf Basis Ihrer Anforderungen halte ich ${p.name} für eine passende Option. Sollen wir die aktuelle Produktinformation gemeinsam prüfen und anschließend ein Muster beziehungsweise ein konkretes Angebot für das passende Gebinde vorbereiten?`;return `${p.name} ist für ${p.kind.toLowerCase()} vorgesehen. Der zentrale Mehrwert: ${fact}. Entscheidend ist, dass wir das Produkt passend zu Ihrem Einsatzbereich und dem benötigten Wirkspektrum auswählen. Die verbindlichen Einwirkzeiten und Freigaben prüfen wir direkt in der aktuellen Produktinformation.`}


function offerScreen() {
  const ids = state.lists[state.activeList] || [];
  const products = ids.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  let subtotal = 0;
  const rows = products.map(p => {
    const saved = state.quoteItems[p.id] || {};
    const size = saved.size && p.sizes.includes(saved.size) ? saved.size : (p.sizes[0] || '');
    const quantity = Math.max(1, Number(saved.quantity) || 1);
    const discount = Math.min(100, Math.max(0, Number(saved.discount) || 0));
    const rawPrice = resolvePrice(p, size);
    const unitPrice = rawPrice === '' || rawPrice == null ? null : Number(rawPrice);
    const lineTotal = unitPrice == null ? null : unitPrice * quantity * (1 - discount / 100);
    if (lineTotal != null) subtotal += lineTotal;
    return `<tr>
      <td><strong>${p.name}</strong><small>${p.kind}<br>Art.-Nr. ${p.sku}</small></td>
      <td><select class="offer-input" data-quote-item="${p.id}" data-field="size">${p.sizes.map(x=>`<option ${x===size?'selected':''}>${x}</option>`).join('')}</select></td>
      <td><input class="offer-input quantity" data-quote-item="${p.id}" data-field="quantity" type="number" min="1" step="1" value="${quantity}"></td>
      <td><input class="offer-input discount" data-quote-item="${p.id}" data-field="discount" type="number" min="0" max="100" step="0.1" value="${discount}"><span class="unit">%</span></td>
      <td class="offer-price">${state.customerMode ? 'ausgeblendet' : money(unitPrice)}</td>
      <td class="offer-price line-total">${state.customerMode ? 'ausgeblendet' : money(lineTotal)}</td>
    </tr>`;
  }).join('');
  const vat = subtotal * 0.19;
  const total = subtotal + vat;
  const validUntil = state.quoteValidUntil || new Date(Date.now()+14*86400000).toISOString().slice(0,10);
  return `<main class="page offer-page"><div class="section-heading no-print"><div><span class="eyebrow">Angebotsentwurf</span><h1>Kundenübersicht & Kalkulation</h1><p>Erstellt aus der aktiven Merkliste „${escapeHtml(state.activeList)}“.</p></div></div>
    <section class="offer-config no-print"><label>Kunde / Einrichtung<input id="quoteCustomer" value="${escapeHtml(state.quoteCustomer)}" placeholder="z. B. Klinikum Dortmund"></label><label>Ansprechpartner<input id="quoteContact" value="${escapeHtml(state.quoteContact)}" placeholder="Name oder Funktion"></label><label>Gültig bis<input id="quoteValidUntil" type="date" value="${escapeHtml(validUntil)}"></label><label class="wide">Notiz<textarea id="quoteNote" placeholder="Ziel, nächste Schritte oder besondere Anforderungen">${escapeHtml(state.quoteNote)}</textarea></label><div class="offer-actions wide"><button class="secondary-button" data-action="customer-mode">${state.customerMode?'Preise wieder anzeigen':'Preise für Kunden ausblenden'}</button><button class="secondary-button" data-action="export-offer">CSV für Innendienst</button><button class="primary-button compact" data-action="print-offer">Drucken / als PDF speichern</button></div></section>
    <section class="offer-sheet"><div class="offer-brand"><img src="public/assets/dr-schumacher-logo.png" alt="Dr. Schumacher"><div><span>Angebotsentwurf</span><strong>${escapeHtml(state.quoteCustomer || 'Kundentermin')}</strong><small>${escapeHtml(state.quoteContact || '')}</small></div></div><div class="offer-meta"><span>Merkliste: ${escapeHtml(state.activeList)}</span><span>Preisbasis: ${state.customerMode?'ohne Preise':escapeHtml(state.priceList)}</span><span>Gültig bis: ${new Date(validUntil+'T12:00:00').toLocaleDateString('de-DE')}</span><span>Stand: ${new Date().toLocaleDateString('de-DE')}</span></div>
      ${products.length ? `<div class="offer-table-wrap"><table class="offer-table offer-calculation"><thead><tr><th>Produkt</th><th>Gebinde</th><th>Menge</th><th>Rabatt</th><th>Einzelpreis</th><th>Gesamt</th></tr></thead><tbody>${rows}</tbody></table></div>${state.customerMode?'':`<div class="offer-totals"><div><span>Zwischensumme</span><strong>${money(subtotal)}</strong></div><div><span>zzgl. 19 % MwSt.</span><strong>${money(vat)}</strong></div><div class="grand-total"><span>Gesamtsumme</span><strong>${money(total)}</strong></div></div>`}` : '<div class="empty-state"><h2>Die Merkliste ist leer</h2><p>Fügen Sie zuerst Produkte einer Merkliste hinzu.</p></div>'}
      ${state.quoteNote ? `<div class="offer-note"><strong>Notiz</strong><p>${escapeHtml(state.quoteNote)}</p></div>` : ''}
      <div class="offer-disclaimer">Unverbindlicher interner Angebotsentwurf. Preise, Steuern, Lieferfähigkeit und Konditionen sind vor Versand durch den Innendienst zu prüfen. Verbindliche Anwendung, Einwirkzeiten, Materialverträglichkeit und Sicherheit ausschließlich anhand der aktuellen offiziellen Produktinformationen prüfen.</div>
    </section></main>`;
}


function reportScreen() {
  const r = state.visitReport || {};
  const selected = (state.lists[state.activeList] || []).map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  const productNames = selected.map(p => p.name).join(', ');
  const reportDate = r.date || new Date().toISOString().slice(0,10);
  const followUp = r.followUp || '';
  const summary = buildCrmSummary({...r, date: reportDate, products: productNames});
  return `<main class="page report-page"><div class="section-heading no-print"><div><span class="eyebrow">Kundentermin dokumentieren</span><h1>Besuchsbericht</h1><p>Die Angaben bleiben lokal auf diesem Gerät und können als CRM-Text oder CSV exportiert werden.</p></div></div>
    <section class="report-form no-print">
      <label>Kunde / Einrichtung<input data-report-field="customer" value="${escapeHtml(r.customer || state.quoteCustomer || '')}" placeholder="z. B. Klinikum Dortmund"></label>
      <label>Datum<input data-report-field="date" type="date" value="${escapeHtml(reportDate)}"></label>
      <label>Ansprechpartner<input data-report-field="contacts" value="${escapeHtml(r.contacts || state.quoteContact || '')}" placeholder="Namen und Funktionen"></label>
      <label>Terminart<select data-report-field="type">${['Erstvorstellung','Produktvorstellung','Feedbackgespräch','Testauswertung','Preisgespräch','Follow-up'].map(x=>`<option ${x===(r.type||'Produktvorstellung')?'selected':''}>${x}</option>`).join('')}</select></label>
      <label class="wide">Ausgangssituation / eingesetzte Produkte<textarea data-report-field="current" placeholder="Was nutzt der Kunde aktuell? Welche Herausforderung besteht?">${escapeHtml(r.current || '')}</textarea></label>
      <label class="wide">Besprochene Produkte<textarea data-report-field="products" placeholder="Produkte aus der Merkliste oder manuell ergänzen">${escapeHtml(r.products || productNames)}</textarea></label>
      <label class="wide">Feedback und Bedarf<textarea data-report-field="feedback" placeholder="Interesse, Einwände, Anforderungen und Aussagen des Kunden">${escapeHtml(r.feedback || '')}</textarea></label>
      <label>Muster / Unterlagen<select data-report-field="samples">${['Keine','Unterlagen gesendet','Muster übergeben','Test vereinbart','Angebot angefordert'].map(x=>`<option ${x===(r.samples||'Keine')?'selected':''}>${x}</option>`).join('')}</select></label>
      <label>Ergebnis<select data-report-field="result">${['Offen','Interesse vorhanden','Testphase','Angebot erforderlich','Kein aktueller Bedarf','Abschluss vorbereitet'].map(x=>`<option ${x===(r.result||'Offen')?'selected':''}>${x}</option>`).join('')}</select></label>
      <label class="wide">Nächste Schritte<textarea data-report-field="nextSteps" placeholder="Wer macht was bis wann?">${escapeHtml(r.nextSteps || '')}</textarea></label>
      <label>Follow-up am<input data-report-field="followUp" type="date" value="${escapeHtml(followUp)}"></label>
      <label>Verantwortlich<input data-report-field="owner" value="${escapeHtml(r.owner || '')}" placeholder="Name / Außendienst"></label>
      <div class="report-actions wide"><button class="secondary-button" data-action="copy-report">CRM-Text kopieren</button><button class="secondary-button" data-action="export-report">CSV exportieren</button><button class="secondary-button" data-action="save-report">Bericht lokal speichern</button><button class="primary-button compact" data-action="print-report">Drucken / PDF</button></div>
    </section>
    <section class="report-sheet"><div class="offer-brand"><img src="public/assets/dr-schumacher-logo.png" alt="Dr. Schumacher"><div><span>Besuchsbericht</span><strong>${escapeHtml(r.customer || state.quoteCustomer || 'Kundentermin')}</strong><small>${new Date(reportDate+'T12:00:00').toLocaleDateString('de-DE')}</small></div></div><pre class="crm-summary">${escapeHtml(summary)}</pre><div class="offer-disclaimer">Interne Gesprächsdokumentation. Produktbezogene Aussagen vor externer Verwendung anhand der aktuellen offiziellen Unterlagen prüfen.</div></section>
    ${state.savedReports.length ? `<section class="saved-reports no-print"><h2>Lokal gespeicherte Berichte</h2>${state.savedReports.slice(0,5).map((item,i)=>`<button data-load-report="${i}"><strong>${escapeHtml(item.customer || 'Ohne Kundenname')}</strong><small>${escapeHtml(item.date || '')} · ${escapeHtml(item.result || 'Offen')}</small></button>`).join('')}</section>` : ''}
  </main>`;
}


function dashboardScreen() {
  const today = new Date(); today.setHours(0,0,0,0);
  const reports = state.savedReports.map((report,index) => ({...report,index,status:report.status || 'Offen'}));
  const isDone = r => r.status === 'Erledigt';
  const dateValue = r => r.followUp ? new Date(r.followUp+'T12:00:00') : null;
  const overdue = reports.filter(r => !isDone(r) && dateValue(r) && dateValue(r) < today);
  const dueToday = reports.filter(r => !isDone(r) && dateValue(r) && dateValue(r).toDateString() === today.toDateString());
  const upcoming = reports.filter(r => !isDone(r) && dateValue(r) && dateValue(r) > today).sort((a,b)=>dateValue(a)-dateValue(b));
  const openWithoutDate = reports.filter(r => !isDone(r) && !dateValue(r));
  const completed = reports.filter(isDone);
  const taskCard = (r, tone='') => `<article class="follow-card ${tone}"><div><span class="follow-date">${r.followUp ? new Date(r.followUp+'T12:00:00').toLocaleDateString('de-DE') : 'Kein Termin'}</span><h3>${escapeHtml(r.customer || 'Ohne Kundenname')}</h3><p>${escapeHtml(r.nextSteps || r.feedback || 'Noch keine nächste Aufgabe dokumentiert.')}</p><small>${escapeHtml(r.owner || 'Nicht zugewiesen')} · ${escapeHtml(r.result || 'Offen')}</small></div><div class="follow-actions"><select data-report-status="${r.index}" aria-label="Status"><option ${r.status==='Offen'?'selected':''}>Offen</option><option ${r.status==='In Bearbeitung'?'selected':''}>In Bearbeitung</option><option ${r.status==='Erledigt'?'selected':''}>Erledigt</option></select><button data-open-dashboard-report="${r.index}">Öffnen</button><button class="danger-link" data-delete-report="${r.index}">Löschen</button></div></article>`;
  const section = (title, items, tone, empty) => `<section class="follow-section"><div class="follow-section-head"><h2>${title}</h2><span>${items.length}</span></div>${items.length ? `<div class="follow-list">${items.map(r=>taskCard(r,tone)).join('')}</div>` : `<p class="follow-empty">${empty}</p>`}</section>`;
  return `<main class="page dashboard-page"><div class="section-heading"><div><span class="eyebrow">Interne Terminsteuerung</span><h1>Follow-up Dashboard</h1><p>Offene Aufgaben aus lokal gespeicherten Besuchsberichten. Alle Daten bleiben auf diesem Gerät.</p></div><button class="primary-button compact dashboard-new" data-action="new-report">Neuer Bericht</button></div>
    <section class="dashboard-stats"><div><span>Überfällig</span><strong>${overdue.length}</strong></div><div><span>Heute</span><strong>${dueToday.length}</strong></div><div><span>Geplant</span><strong>${upcoming.length}</strong></div><div><span>Erledigt</span><strong>${completed.length}</strong></div></section>
    ${section('Überfällige Follow-ups', overdue, 'overdue', 'Keine überfälligen Aufgaben.')}
    ${section('Heute fällig', dueToday, 'today', 'Heute ist kein Follow-up fällig.')}
    ${section('Kommende Termine', upcoming, 'upcoming', 'Keine kommenden Follow-ups geplant.')}
    ${section('Offen ohne Datum', openWithoutDate, 'undated', 'Alle offenen Aufgaben haben ein Datum.')}
    ${section('Erledigt', completed.slice(0,10), 'done', 'Noch keine Aufgabe als erledigt markiert.')}
  </main>`;
}

function updateSavedReportStatus(index, status) {
  if (!state.savedReports[index]) return;
  state.savedReports[index] = {...state.savedReports[index], status};
  localStorage.setItem('savedVisitReports', JSON.stringify(state.savedReports));
  render();
}

function deleteSavedReport(index) {
  if (!state.savedReports[index]) return;
  if (!confirm('Diesen gespeicherten Besuchsbericht wirklich löschen?')) return;
  state.savedReports.splice(index, 1);
  localStorage.setItem('savedVisitReports', JSON.stringify(state.savedReports));
  render();
}

function buildCrmSummary(report = state.visitReport) {
  const date = report.date ? new Date(report.date+'T12:00:00').toLocaleDateString('de-DE') : new Date().toLocaleDateString('de-DE');
  const parts = [
    `Besuchsbericht vom ${date}`,
    `Kunde/Einrichtung: ${report.customer || '-'}`,
    `Ansprechpartner: ${report.contacts || '-'}`,
    `Terminart: ${report.type || 'Produktvorstellung'}`,
    `Ausgangssituation / aktuelle Produkte: ${report.current || '-'}`,
    `Besprochene Produkte: ${report.products || '-'}`,
    `Feedback und Bedarf: ${report.feedback || '-'}`,
    `Muster / Unterlagen: ${report.samples || 'Keine'}`,
    `Ergebnis: ${report.result || 'Offen'}`,
    `Nächste Schritte: ${report.nextSteps || '-'}`,
    `Follow-up: ${report.followUp ? new Date(report.followUp+'T12:00:00').toLocaleDateString('de-DE') : '-'}`,
    `Verantwortlich: ${report.owner || '-'}`
  ];
  return parts.join('\n');
}

function saveVisitReportField(field, value) {
  state.visitReport = {...state.visitReport, [field]: value};
  localStorage.setItem('visitReport', JSON.stringify(state.visitReport));
}

function saveVisitReport() {
  const snapshot = {...state.visitReport, savedAt: new Date().toISOString()};
  state.savedReports = [snapshot, ...state.savedReports].slice(0,25);
  localStorage.setItem('savedVisitReports', JSON.stringify(state.savedReports));
  alert('Besuchsbericht wurde lokal gespeichert.');
  render();
}

function exportVisitReportCsv() {
  const r=state.visitReport;
  const headers=['Datum','Kunde','Ansprechpartner','Terminart','Ausgangssituation','Besprochene Produkte','Feedback','Muster/Unterlagen','Ergebnis','Nächste Schritte','Follow-up','Verantwortlich'];
  const values=[r.date||'',r.customer||'',r.contacts||'',r.type||'',r.current||'',r.products||'',r.feedback||'',r.samples||'',r.result||'',r.nextSteps||'',r.followUp||'',r.owner||''];
  const csv='\ufeff'+[headers,values].map(row=>row.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(';')).join('\r\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}); const a=document.createElement('a');
  a.href=URL.createObjectURL(blob); a.download='besuchsbericht-'+(r.customer||'kunde').replace(/[^a-z0-9äöüß-]+/gi,'-').toLowerCase()+'.csv'; a.click(); URL.revokeObjectURL(a.href);
}

function saveQuoteItem(id, field, value) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const current = state.quoteItems[id] || {};
  if (field === 'quantity') value = Math.max(1, Math.round(Number(value) || 1));
  if (field === 'discount') value = Math.min(100, Math.max(0, Number(value) || 0));
  if (field === 'size' && !product.sizes.includes(value)) value = product.sizes[0] || '';
  state.quoteItems[id] = {...current, [field]: value};
  localStorage.setItem('quoteItems', JSON.stringify(state.quoteItems));
}

function exportOfferCsv() {
  const ids = state.lists[state.activeList] || [];
  const lines = [['Kunde','Ansprechpartner','Preisliste','Artikelnummer','Produkt','Gebinde','Menge','Rabatt %','Einzelpreis','Gesamtpreis']];
  ids.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean).forEach(p => {
    const saved=state.quoteItems[p.id]||{};
    const size=saved.size&&p.sizes.includes(saved.size)?saved.size:(p.sizes[0]||'');
    const qty=Math.max(1,Number(saved.quantity)||1);
    const discount=Math.min(100,Math.max(0,Number(saved.discount)||0));
    const raw=resolvePrice(p,size); const unit=raw===''||raw==null?'':Number(raw);
    const total=unit===''?'':unit*qty*(1-discount/100);
    lines.push([state.quoteCustomer,state.quoteContact,state.priceList,p.sku,p.name,size,qty,discount,unit,total]);
  });
  const csv='\ufeff'+lines.map(row=>row.map(v=>'"'+String(v??'').replace(/"/g,'""')+'"').join(';')).join('\r\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}); const a=document.createElement('a');
  a.href=URL.createObjectURL(blob); a.download='angebotsentwurf-'+(state.quoteCustomer||'kunde').replace(/[^a-z0-9äöüß-]+/gi,'-').toLowerCase()+'.csv'; a.click(); URL.revokeObjectURL(a.href);
}

function favoritesScreen() {
  const list = PRODUCTS.filter(p => state.favorites.includes(p.id));
  return `<main class="page products-page"><div class="section-heading"><div><span class="eyebrow">Persönliche Auswahl</span><h1>Favoriten</h1></div><span class="result-count">${list.length}</span></div><div class="product-list">${list.map(productCard).join('') || '<div class="empty-state"><h2>Noch keine Favoriten</h2><p>Tippen Sie bei einem Produkt auf den Stern.</p></div>'}</div></main>`;
}

function settingsScreen() {
  const meta = state.importMeta || {};
  const metaText = meta.file ? `${escapeHtml(meta.file)} · ${escapeHtml(meta.date || '')} · ${meta.rows || 0} Zeilen` : 'Noch keine Preisdatei importiert';
  return `<main class="page settings-page"><div class="section-heading"><div><span class="eyebrow">Verwaltung</span><h1>Einstellungen</h1></div></div>
    <section class="settings-card"><button data-action="profile"><span><strong>Benutzerrolle wechseln</strong><small>Aktuell: ${currentProfile().name}</small></span><b>›</b></button><button data-action="customer-mode"><span><strong>Kundengespräch-Modus</strong><small>${state.customerMode?'Aktiv – Preise sind verborgen':'Inaktiv – Preise sind sichtbar'}</small></span><b>${state.customerMode?'✓':'›'}</b></button><button data-action="prices"><span><strong>Preisliste wechseln</strong><small>Aktuell: ${state.priceList}</small></span><b>›</b></button>${can('prices')?`<label class="file-row"><span><strong>Excel-Preise importieren</strong><small>.xlsx, .xls oder .csv – bleibt lokal</small></span><b>Datei auswählen</b><input id="excel" type="file" accept=".xlsx,.xls,.csv"></label><div id="importStatus" class="import-status"><strong>${metaText}</strong><br>${Object.keys(state.prices).length} Artikelnummern lokal gespeichert</div><button data-action="export-prices"><span><strong>Preisstand sichern</strong><small>Lokale JSON-Sicherung herunterladen</small></span><b>↓</b></button><button data-action="clear-prices"><span><strong>Lokale Preise löschen</strong><small>Entfernt nur die Daten auf diesem Gerät</small></span><b>×</b></button>`:'<div class="permission-note"><strong>Preisverwaltung ausgeblendet</strong><span>Für diese Rolle ist kein Import oder Löschen von Preislisten vorgesehen.</span></div>'}</section>
    <section class="settings-card"><button data-action="export-backup"><span><strong>Gerätesicherung erstellen</strong><small>Preise, Merklisten, Berichte und Einstellungen als JSON sichern</small></span><b>↓</b></button><label class="file-row"><span><strong>Gerätesicherung wiederherstellen</strong><small>Eine zuvor exportierte .json-Datei lokal einlesen</small></span><b>Datei auswählen</b><input id="backupImport" type="file" accept="application/json,.json"></label><div class="permission-note"><strong>Lokale Datensicherung</strong><span>Die Sicherungsdatei wird nur heruntergeladen beziehungsweise auf diesem Gerät eingelesen. Es findet kein Cloud-Upload statt.</span></div></section>
    <section class="settings-card"><a href="preisvorlage.csv" download><span><strong>Excel-Vorlage herunterladen</strong><small>Vorlage für UVP und FH 1 bis FH 5</small></span><b>↓</b></a><a href="${OFFICIAL.home}" target="_blank"><span><strong>Dr.-Schumacher-Website</strong><small>Öffnet die offizielle Website</small></span><b>↗</b></a></section>
    <p class="version">Interner Produktberater · Version 2.2</p>
  </main>`;
}

function downloadsScreen() {
  const links = [
    ['Gesamtkatalog 2026','Der komplette aktuelle Produktkatalog',OFFICIAL.catalog,'📘'],
    ['Produkt- und Sicherheitsdatenblätter','Produktinformation, SDB und Betriebsanweisungen',OFFICIAL.sheets,'📄'],
    ['Produktbilder','Aktuelle Bilddaten für Präsentationen und Angebote',OFFICIAL.images,'🖼️'],
    ['Anleitungen und Pläne','Anwendungshilfen und Pläne',OFFICIAL.plans,'📋'],
    ['Desinfektionspläne','Direkter Zugang zu aktuellen Desinfektionsplänen',OFFICIAL.disinfectionPlans,'🧼']
  ];
  return `<main class="page downloads-page"><div class="section-heading"><div><span class="eyebrow">Immer aktuell</span><h1>Downloads</h1><p>Alle Unterlagen werden direkt von den offiziellen Online-Quellen geöffnet.</p></div></div><div class="download-list">${links.map(([title,sub,url,emoji]) => `<a href="${url}" target="_blank" rel="noopener"><span class="download-icon">${emoji}</span><span><strong>${title}</strong><small>${sub}</small></span><b>↗</b></a>`).join('')}</div></main>`;
}

function spectrumBadge(s) {
  const cls = s.includes('PLUS') ? 'plus' : s === 'viruzid' ? 'viruzid' : s === 'sporizid' ? 'sporizid' : 'limited';
  return `<span class="badge ${cls}">${s}</span>`;
}
function documentLink(title, sub, url, emoji) {
  return `<a class="document-link" href="${url}" target="_blank" rel="noopener"><span>${emoji}</span><div><strong>${title}</strong><small>${sub}</small></div><b>↗</b></a>`;
}
function resolvePrice(product, size='') {
  const row = state.prices[product.sku] || state.prices[product.id] || {};
  if (size && row.sizes && row.sizes[size]) return row.sizes[size][state.priceList];
  return row[state.priceList];
}
function escapeHtml(text) { return String(text).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

function bind() {
  document.querySelectorAll('[data-profile]').forEach(button => button.onclick = () => { state.activeProfile=button.dataset.profile; sessionStorage.setItem('activeProfile',state.activeProfile); state.screen=sessionStorage.getItem('priceList')?'menu':'prices'; render(); });
  document.querySelectorAll('[data-action="profile"]').forEach(button => button.onclick = () => { state.screen='profile'; render(); });
  document.querySelectorAll('[data-price]').forEach(button => button.onclick = () => {
    state.priceList = button.dataset.price;
    sessionStorage.setItem('priceList', state.priceList);
    render();
  });
  document.querySelectorAll('[data-action="prices"]').forEach(button => button.onclick = () => { state.screen='prices'; render(); });
  $('[data-action="start"]')?.addEventListener('click', () => { state.screen='menu'; render(); });
  $('[data-action="back"]')?.addEventListener('click', () => { state.screen = state.screen==='detail' ? 'products' : 'menu'; render(); });
  $('[data-action="clear-prices"]')?.addEventListener('click', () => { state.prices={}; state.importMeta={}; localStorage.removeItem('prices'); localStorage.removeItem('priceImportMeta'); render(); });
  document.querySelectorAll('[data-action="customer-mode"]').forEach(button => button.onclick = () => { state.customerMode=!state.customerMode; sessionStorage.setItem('customerMode', String(state.customerMode)); render(); });
  document.querySelectorAll('[data-category]').forEach(button => button.onclick = () => { const key=button.dataset.category; if(key==='favorites'){state.screen='favorites';render();return;} if(key==='settings'){state.screen='settings';render();return;} if(['advisor','recent','compare','lists','competition','talk','offer','report','dashboard'].includes(key)){state.screen=key; render(); return;} state.category=key; state.screen='products'; state.query=''; state.spectrum='all'; render(); });
  document.querySelectorAll('[data-spectrum]').forEach(button => button.onclick = () => { state.spectrum=button.dataset.spectrum; render(); });
  document.querySelectorAll('[data-product]').forEach(row => row.onclick = event => { if (event.target.closest('[data-favorite]')) return; state.selected=row.dataset.product; state.size=''; state.recent=[state.selected,...state.recent.filter(x=>x!==state.selected)].slice(0,8); localStorage.setItem('recentProducts', JSON.stringify(state.recent)); state.screen='detail'; render(); });
  document.querySelectorAll('[data-favorite]').forEach(button => button.onclick = event => { event.stopPropagation(); toggleFavorite(button.dataset.favorite); });
  document.querySelectorAll('[data-size]').forEach(button => button.onclick = () => { state.size=button.dataset.size; render(); });
  document.querySelectorAll('[data-email-toggle]').forEach(button => button.onclick = () => { const key=button.dataset.emailToggle; state.emailInclude[key]=!state.emailInclude[key]; render(); });
  document.querySelectorAll('[data-action="send-email"]').forEach(button => button.onclick = () => sendProductEmail(button.dataset.product));
  $('#search')?.addEventListener('input', event => { state.query=event.target.value; render(); });
  $('#globalSearch')?.addEventListener('input', event => { state.globalQuery=event.target.value; render(); setTimeout(()=>{const el=$('#globalSearch'); if(el){el.focus(); el.setSelectionRange(el.value.length,el.value.length);}},0); });
  $('[data-action="clear-global-search"]')?.addEventListener('click', () => { state.globalQuery=''; render(); });
  $('#excel')?.addEventListener('change', importExcel);
  document.querySelectorAll('[data-advisor]').forEach(button => button.onclick = () => { state.advisor[button.dataset.advisor]=button.dataset.value; render(); });
  $('[data-action="reset-advisor"]')?.addEventListener('click', () => { state.advisor={category:'',spectrum:'',alcohol:'',need:''}; render(); });
  document.querySelectorAll('[data-compare]').forEach(button => button.onclick = () => toggleCompare(button.dataset.compare));
  $('[data-action="copy-pitch"]')?.addEventListener('click', async () => { const text=comparisonPitch(state.compareIds.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean)); try { await navigator.clipboard.writeText(text); alert('Text wurde kopiert.'); } catch { alert(text); } });
  document.querySelectorAll('[data-list-add]').forEach(button => button.onclick = () => addToList(button.dataset.listAdd));
  document.querySelectorAll('[data-list-remove]').forEach(button => button.onclick = () => removeFromList(button.dataset.listRemove));
  $('[data-action="new-list"]')?.addEventListener('click', createList);
  document.querySelectorAll('[data-list-select]').forEach(button => button.onclick = () => { state.activeList=button.dataset.listSelect; localStorage.setItem('activeProductList',state.activeList); render(); });
  $('#competitorSearch')?.addEventListener('input', e => { state.competitorQuery=e.target.value; render(); });
  $('#talkProduct')?.addEventListener('change', e => { state.talkProduct=e.target.value; render(); });
  $('#talkSituation')?.addEventListener('change', e => { state.talkSituation=e.target.value; render(); });
  $('[data-action="copy-talk"]')?.addEventListener('click', async () => { const text=buildTalkText(); try{await navigator.clipboard.writeText(text);alert('Gesprächsleitfaden kopiert.')}catch{alert(text)} });
  $('[data-action="print-offer"]')?.addEventListener('click', () => window.print());
  $('[data-action="export-offer"]')?.addEventListener('click', exportOfferCsv);
  document.querySelectorAll('[data-report-field]').forEach(input => { const handler=()=>{saveVisitReportField(input.dataset.reportField,input.value); if(input.tagName==='SELECT'||input.type==='date') render();}; input.addEventListener(input.tagName==='SELECT'||input.type==='date'?'change':'input',handler); });
  $('[data-action="copy-report"]')?.addEventListener('click', async () => { const text=buildCrmSummary(); try{await navigator.clipboard.writeText(text);alert('CRM-Text wurde kopiert.')}catch{alert(text)} });
  $('[data-action="export-report"]')?.addEventListener('click', exportVisitReportCsv);
  $('[data-action="save-report"]')?.addEventListener('click', saveVisitReport);
  $('[data-action="print-report"]')?.addEventListener('click', () => window.print());
  document.querySelectorAll('[data-load-report]').forEach(button => button.onclick=()=>{state.visitReport={...state.savedReports[Number(button.dataset.loadReport)]};localStorage.setItem('visitReport',JSON.stringify(state.visitReport));render();});
  document.querySelectorAll('[data-report-status]').forEach(select => select.onchange = () => updateSavedReportStatus(Number(select.dataset.reportStatus), select.value));
  document.querySelectorAll('[data-open-dashboard-report]').forEach(button => button.onclick = () => { state.visitReport={...state.savedReports[Number(button.dataset.openDashboardReport)]}; localStorage.setItem('visitReport',JSON.stringify(state.visitReport)); state.screen='report'; render(); });
  document.querySelectorAll('[data-delete-report]').forEach(button => button.onclick = () => deleteSavedReport(Number(button.dataset.deleteReport)));
  $('[data-action="new-report"]')?.addEventListener('click', () => { state.visitReport={date:new Date().toISOString().slice(0,10),type:'Produktvorstellung',result:'Offen'}; localStorage.setItem('visitReport',JSON.stringify(state.visitReport)); state.screen='report'; render(); });
  document.querySelectorAll('[data-quote-item]').forEach(input => input.onchange = () => { saveQuoteItem(input.dataset.quoteItem, input.dataset.field, input.value); render(); });
  $('[data-action="export-prices"]')?.addEventListener('click', exportPrices);
  $('[data-action="export-backup"]')?.addEventListener('click', exportDeviceBackup);
  $('#backupImport')?.addEventListener('change', importDeviceBackup);
  $('#quoteCustomer')?.addEventListener('input', e => saveQuoteField('quoteCustomer', e.target.value));
  $('#quoteContact')?.addEventListener('input', e => saveQuoteField('quoteContact', e.target.value));
  $('#quoteNote')?.addEventListener('input', e => saveQuoteField('quoteNote', e.target.value));
  $('#quoteValidUntil')?.addEventListener('change', e => saveQuoteField('quoteValidUntil', e.target.value));
  document.querySelectorAll('[data-nav]').forEach(button => button.onclick = () => {
    const nav = button.dataset.nav;
    if (nav==='home') state.screen='menu';
    if (nav==='search') { state.screen='products'; state.category='all'; }
    if (nav==='favorites') state.screen='lists';
    if (nav==='settings') state.screen='settings';
    render();
  });
}

function toggleCompare(id) {
  if (state.compareIds.includes(id)) state.compareIds = state.compareIds.filter(x => x !== id);
  else if (state.compareIds.length < 3) state.compareIds = [...state.compareIds, id];
  else { alert('Es können maximal drei Produkte verglichen werden.'); return; }
  localStorage.setItem('compareIds', JSON.stringify(state.compareIds));
  render();
}

function toggleFavorite(id) {
  state.favorites = state.favorites.includes(id) ? state.favorites.filter(x => x!==id) : [...state.favorites,id];
  localStorage.setItem('favorites', JSON.stringify(state.favorites));
  render();
}

function saveQuoteField(key, value) { state[key]=value; localStorage.setItem(key,value); }

const BACKUP_KEYS = [
  'prices','priceImportMeta','favorites','recentProducts','compareIds','productLists','activeProductList',
  'quoteCustomer','quoteContact','quoteNote','quoteValidUntil','quoteItems','visitReport','savedVisitReports'
];

function exportDeviceBackup() {
  const localData = {};
  BACKUP_KEYS.forEach(key => {
    const value = localStorage.getItem(key);
    if (value !== null) localData[key] = value;
  });
  const sessionData = {
    activeProfile: sessionStorage.getItem('activeProfile') || '',
    priceList: sessionStorage.getItem('priceList') || '',
    customerMode: sessionStorage.getItem('customerMode') || 'false'
  };
  const payload = {
    format: 'dr-schumacher-sales-companion-backup',
    version: '2.2',
    exportedAt: new Date().toISOString(),
    localData,
    sessionData
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'schumacher-app-sicherung-' + new Date().toISOString().slice(0,10) + '.json';
  a.click();
  URL.revokeObjectURL(a.href);
}

async function importDeviceBackup(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const payload = JSON.parse(await file.text());
    if (payload.format !== 'dr-schumacher-sales-companion-backup' || !payload.localData) {
      throw new Error('Die Datei ist keine gültige Sicherung dieser App.');
    }
    const keyCount = Object.keys(payload.localData).filter(key => BACKUP_KEYS.includes(key)).length;
    if (!confirm(`Sicherung vom ${new Date(payload.exportedAt || Date.now()).toLocaleString('de-DE')} wiederherstellen? Dabei werden ${keyCount} lokale Datenbereiche ersetzt.`)) {
      event.target.value = '';
      return;
    }
    BACKUP_KEYS.forEach(key => localStorage.removeItem(key));
    Object.entries(payload.localData).forEach(([key, value]) => {
      if (BACKUP_KEYS.includes(key) && typeof value === 'string') localStorage.setItem(key, value);
    });
    if (payload.sessionData) {
      ['activeProfile','priceList','customerMode'].forEach(key => {
        if (typeof payload.sessionData[key] === 'string') sessionStorage.setItem(key, payload.sessionData[key]);
      });
    }
    alert('Sicherung wurde erfolgreich wiederhergestellt. Die App wird neu geladen.');
    location.reload();
  } catch (error) {
    alert('Wiederherstellung fehlgeschlagen: ' + error.message);
    event.target.value = '';
  }
}

function exportPrices() { if (!can('prices')) { alert('Für diese Rolle ist der Export nicht freigeschaltet.'); return; } const payload={exportedAt:new Date().toISOString(),meta:state.importMeta,prices:state.prices}; const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='schumacher-preisstand-'+new Date().toISOString().slice(0,10)+'.json'; a.click(); URL.revokeObjectURL(a.href); }

async function importExcel(event) {
  if (!can('prices')) { alert('Für diese Rolle ist der Preisimport nicht freigeschaltet.'); return; }
  const status = $('#importStatus');
  const file = event.target.files[0];
  if (!file) return;
  if (typeof XLSX === 'undefined') { status.textContent='Excel-Modul konnte nicht geladen werden. Bitte Internetverbindung prüfen.'; return; }
  try {
    status.textContent = 'Preisliste wird geprüft …';
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {defval:''});
    const mapped = {};
    const errors = [];
    let duplicates = 0;
    let validRows = 0;
    for (let index = 0; index < rows.length; index++) {
      const row = rows[index];
      const line = index + 2;
      const sku = String(row.Artikelnummer || row.SKU || row['Artikel-Nr.'] || '').trim();
      const size = String(row.Gebinde || row.Gebindegröße || '').trim();
      if (!sku) { errors.push(`Zeile ${line}: Artikelnummer fehlt`); continue; }
      const values = {UVP:toNumber(row.UVP), 'FH 1':toNumber(row['FH 1']), 'FH 2':toNumber(row['FH 2']), 'FH 3':toNumber(row['FH 3']), 'FH 4':toNumber(row['FH 4']), 'FH 5':toNumber(row['FH 5'])};
      if (Object.values(values).every(v => v === '')) { errors.push(`Zeile ${line}: keine Preise vorhanden`); continue; }
      if (!mapped[sku]) mapped[sku] = {sizes:{}};
      if (size) {
        if (mapped[sku].sizes[size]) duplicates++;
        mapped[sku].sizes[size] = values;
      } else {
        if (Object.keys(mapped[sku]).some(k => k !== 'sizes')) duplicates++;
        Object.assign(mapped[sku], values);
      }
      validRows++;
    }
    state.prices = mapped;
    localStorage.setItem('prices', JSON.stringify(mapped));
    state.importMeta={file:file.name,date:new Date().toLocaleString('de-DE'),rows:validRows};
    localStorage.setItem('priceImportMeta',JSON.stringify(state.importMeta));
    const matchedProducts = PRODUCTS.filter(p => mapped[p.sku]).length;
    const unknownSkus = Object.keys(mapped).filter(sku => !PRODUCTS.some(p => p.sku === sku));
    const summary = `${validRows} gültige Preiszeilen · ${matchedProducts} Produkte zugeordnet` +
      (unknownSkus.length ? ` · ${unknownSkus.length} unbekannte Artikelnummern` : '') +
      (duplicates ? ` · ${duplicates} Dubletten überschrieben` : '') +
      (errors.length ? ` · ${errors.length} Fehler` : '');
    status.innerHTML = `<strong>${summary}</strong>${errors.length ? `<details><summary>Fehler anzeigen</summary><div>${errors.slice(0,20).map(escapeHtml).join('<br>')}</div></details>` : ''}`;
  } catch (error) { status.textContent='Import fehlgeschlagen: '+error.message; }
}
function toNumber(value) {
  if (value==='' || value==null) return '';
  if (typeof value==='number') return value;
  return Number(String(value).replace(/\./g,'').replace(',','.').replace(/[^0-9.-]/g,''));
}

render();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('service-worker.js').catch(() => {});
