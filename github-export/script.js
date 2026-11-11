/**
 * ZCJ Industrial Private Limited - Master Client Script
 * Handles multi-page navigation (7 pages), catalog filtering,
 * modals, enquiry submission, lightbox, and animations.
 */

// Data Sets
const PRODUCTS = [
  {
    id: 'prod-screws',
    name: 'Precision Machine & Micro Screws',
    category: 'screws',
    categoryLabel: 'Precision Screws',
    shortDesc: 'Ultra-precision cold-headed screws engineered for electronics, automotive sensors, and mechanical assemblies.',
    description: 'Manufactured with high-speed multi-die headers ensuring tight concentricity and dimensional tolerance down to ±0.01mm. Available with Torx, Phillips, Slotted, and Hex socket head drives.',
    material: 'Stainless Steel (SS304/SS316), Carbon Steel, Brass',
    finish: 'Black Zinc, Trivalent Clear Zinc, Nickel, Passivated',
    sizeRange: 'M0.8 to M8 (Length: 2mm to 80mm)',
    standard: 'DIN 7985, DIN 965, ISO 7045, JIS B 1111',
    image: 'images/hero_industrial_fasteners.jpg'
  },
  {
    id: 'prod-bolts',
    name: 'High-Tensile Hex Head Bolts & Studs',
    category: 'bolts',
    categoryLabel: 'Industrial Bolts',
    shortDesc: 'Heavy-duty cold forged hex head and flange bolts designed for structural and high-vibration applications.',
    description: 'Cold forged from micro-alloy steel with controlled induction heat treatment. Excellent fatigue resistance and proof load ratings for severe mechanical duty cycles.',
    material: 'Alloy Steel (SCM435 / 40Cr), Carbon Steel, SS316',
    finish: 'Black Oxide / Phosphated, Geomet, Dacromet, Zinc Flake',
    sizeRange: 'M4 to M24 (Length: 10mm to 200mm)',
    standard: 'DIN 933, DIN 931, ISO 4014, ASTM A325',
    image: 'images/automotive_fasteners_line.jpg'
  },
  {
    id: 'prod-nuts',
    name: 'Industrial Lock Nuts & Flange Nuts',
    category: 'nuts',
    categoryLabel: 'Precision Nuts',
    shortDesc: 'Vibration-resistant nylon insert lock nuts, all-metal lock nuts, and serrated flange nuts.',
    description: 'Precision tapped threads adhering to 6H/6G tolerance classes. Engineered to prevent back-off and loosening in high-vibration automotive and machinery systems.',
    material: 'Mild Steel, Carbon Steel (EN8D), Brass, Stainless Steel',
    finish: 'Yellow Zinc, White Zinc, Black Phosphate, Dacromet',
    sizeRange: 'M3 to M24',
    standard: 'DIN 985, DIN 982, DIN 6923, ISO 7040',
    image: 'images/hero_industrial_fasteners.jpg'
  },
  {
    id: 'prod-self-drilling',
    name: 'Self-Drilling & Sheet Metal Screws',
    category: 'screws',
    categoryLabel: 'Drilling & Tapping',
    shortDesc: 'High-speed drill-point fasteners for sheet metal cladding, roofing, and structural solar racking.',
    description: 'Precision hardened drill tips that drill, tap, and fasten in a single uninterrupted operation. Features bonded EPDM washers for leak-proof outdoor weather sealing.',
    material: 'Case Hardened Carbon Steel (C1022), SS410, Bi-Metal',
    finish: 'Ruspert 1000 Hr, Electro Zinc, Mech Zinc',
    sizeRange: '#6 to 1/4" / M3.5 to M6.3 (Length: 13mm to 150mm)',
    standard: 'DIN 7504 (P, N, K), ISO 15480',
    image: 'images/automotive_fasteners_line.jpg'
  },
  {
    id: 'prod-automotive',
    name: 'Automotive Cold-Forged Pins & Lead Screws',
    category: 'automotive',
    categoryLabel: 'Automotive Hardware',
    shortDesc: 'Specialized cold forged stepped pins, threaded lead rods, cotter pins, and safety-critical fasteners.',
    description: 'Engineered specifically for Tier-1 automotive seating, steering linkages, braking systems, and EV battery enclosures. Produced under rigorous PPAP Level 3 documentation.',
    material: 'Automotive Grade High Tensile Steel, Alloy Steels, 1018/1045',
    finish: 'Dacromet, Geomet 500B, Zinc-Nickel (1000+ Hr NSS)',
    sizeRange: 'Diameter 2mm to 18mm / Lengths up to 180mm',
    standard: 'Customer Blueprint Specific / OEM Standards',
    image: 'images/automotive_fasteners_line.jpg'
  },
  {
    id: 'prod-rivets',
    name: 'Solid & Semi-Tubular Rivets & Split Cotter Pins',
    category: 'rivets',
    categoryLabel: 'Rivets & Pins',
    shortDesc: 'Permanent fastening cold-formed rivets, cotter split pins, and copper/fiber sealing gaskets.',
    description: 'Ductile cold heading wires shaped into uniform rivets and cotter retention pins for mechanical locking and electrical terminal grounding.',
    material: 'Aluminum, Copper, Mild Steel, Stainless Steel',
    finish: 'Natural, Bright Annealed, Tin Plated, Zinc Plated',
    sizeRange: 'Diameter 1.2mm to 10mm',
    standard: 'DIN 7337, DIN 94, ISO 1234, ASME B18.1.1',
    image: 'images/hero_industrial_fasteners.jpg'
  }
];

const SERVICES = [
  {
    title: 'Multi-Station Cold Forging & Heading',
    desc: 'High-speed net-shape forming of complex fastener geometries without material waste using 3-die & 4-die headers.',
    icon: '⚙️',
    caps: ['Continuous wire processing 1.0mm - 16mm', 'High speed up to 300 parts/min', 'Optimized fatigue resistance grain structure']
  },
  {
    title: '100% Optical Glass Sorters',
    desc: 'Automated 360-degree laser & camera sorting ensuring zero-defect deliveries (<15 PPM) for robotic assembly.',
    icon: '👁️',
    caps: ['360° dimensional checking of external threads', 'Torx & Phillips recess depth inspection', 'Automated batch segregation']
  },
  {
    title: 'Custom Precision CNC Turning',
    desc: 'Secondary Swiss-type lathe turning, micro cross-drilling, external knurling, and precision slotting.',
    icon: '📐',
    caps: ['Tight tolerances down to ±0.005mm', 'Complex internal threading and step profiles', 'Fine surface micro-finish Ra 0.2']
  },
  {
    title: 'Corrosion-Resistant Surface Treatment',
    desc: 'Eco-friendly RoHS compliant electro-zinc, Dacromet, Geomet 500B, and Zinc-Nickel coatings exceeding 1,000 hrs salt spray.',
    icon: '🛡️',
    caps: ['Trivalent Blue, Yellow & Black Zinc', 'Zinc Flake coatings (Geomet / Dacromet)', 'Baking ovens for hydrogen de-embrittlement']
  },
  {
    title: 'Metallurgical & Mechanical Testing Lab',
    desc: 'Full in-house testing with optical profile projector, micro-Vickers hardness, universal tensile testing, and salt spray chamber.',
    icon: '🔬',
    caps: ['ASTM B117 Neutral Salt Spray (NSS)', 'Hardness testing (HRC, HRB, HV)', '3.1 Inspection Mill Certificates']
  },
  {
    title: 'Vendor Managed Inventory (VMI) & JIT',
    desc: 'Kanban safety buffers, barcoded tote packing, and daily milk-run dispatches across NCR & major industrial hubs.',
    icon: '🚚',
    caps: ['Dedicated safety stock warehousing in Greater Noida', '24-hour dispatch for buffer SKUs', 'Export wooden pallet packing (ISPM 15)']
  }
];

const GALLERY = [
  {
    id: 'g1',
    title: 'High-Volume Cold Heading Plant',
    cat: 'plant',
    catLabel: 'Plant & Machinery',
    img: 'images/facility_cold_heading.jpg',
    caption: 'Surajpur Site 4 Greater Noida manufacturing shop floor with automated cold headers.'
  },
  {
    id: 'g2',
    title: 'High-Tensile Bolts & Industrial Fasteners',
    cat: 'products',
    catLabel: 'Products',
    img: 'images/hero_industrial_fasteners.jpg',
    caption: 'Precision machine screws, hex bolts, spring washers, and threaded components.'
  },
  {
    id: 'g3',
    title: 'Optical Profile Metrology & Quality Lab',
    cat: 'lab',
    catLabel: 'Testing Lab',
    img: 'images/testing_quality_lab.jpg',
    caption: 'Mitutoyo profile projector measuring micro-screw tooth angles and thread profiles.'
  },
  {
    id: 'g4',
    title: 'Automotive Grade Flange Bolts & Pins',
    cat: 'products',
    catLabel: 'Products',
    img: 'images/automotive_fasteners_line.jpg',
    caption: 'Grade 10.9 black phosphated flange bolts, custom pins, and micro screws.'
  },
  {
    id: 'g5',
    title: 'High-Speed Automated Production Floor',
    cat: 'plant',
    catLabel: 'Plant & Machinery',
    img: 'images/facility_cold_heading.jpg',
    caption: 'Multi-station cold headers in continuous operation.'
  },
  {
    id: 'g6',
    title: 'Precision Micro Screw Metrology',
    cat: 'lab',
    catLabel: 'Testing Lab',
    img: 'images/testing_quality_lab.jpg',
    caption: 'Dimensional verification and optical inspection against ISO standards.'
  }
];

const JOBS = [
  {
    id: 'j1',
    title: 'Cold Heading Machine Setter & Operator',
    dept: 'Production & Tooling',
    exp: '3 - 6 Years',
    loc: 'Greater Noida Plant',
    openings: 3,
    desc: 'Tooling setup, die alignment, and machine operation for high-speed multi-station cold headers.'
  },
  {
    id: 'j2',
    title: 'Quality Assurance & Metrology Engineer',
    dept: 'Quality Control',
    exp: '2 - 5 Years',
    loc: 'Greater Noida Plant',
    openings: 2,
    desc: 'Operate optical profile projector, hardness tester, and prepare customer PPAP Level 3 documentation.'
  },
  {
    id: 'j3',
    title: 'B2B Industrial Sales & Account Manager',
    dept: 'Sales & Business Dev',
    exp: '3 - 7 Years',
    loc: 'Greater Noida / NCR',
    openings: 2,
    desc: 'Drive growth with automotive Tier-1 and appliance OEMs across North and West India.'
  },
  {
    id: 'j4',
    title: 'Tool & Die Maintenance Technician',
    dept: 'Tool Room',
    exp: '4 - 8 Years',
    loc: 'Greater Noida Plant',
    openings: 1,
    desc: 'Maintain tungsten carbide cold heading dies, punches, cut-off knives, and thread rolling dies.'
  }
];

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Set current year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Render components
  renderProducts('all');
  renderServices();
  renderGallery('all');
  renderJobs();

  // Mobile menu setup
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Check URL hash for direct page navigation
  const hash = window.location.hash.replace('#', '');
  if (hash && ['home', 'about', 'products', 'services', 'gallery', 'career', 'contact'].includes(hash)) {
    navigateTo(hash);
  }
});

// Page Navigation Function (Handles 7 Pages)
function navigateTo(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page-section');
  pages.forEach(p => p.classList.remove('active'));

  // Show target page
  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Update navigation items active state
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if (item.getAttribute('data-page') === pageId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Close mobile menu if open
  const navMenu = document.getElementById('navMenu');
  if (navMenu) navMenu.classList.remove('open');

  // Smooth scroll to top of page
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Products
function renderProducts(catFilter) {
  const container = document.getElementById('productsList');
  if (!container) return;

  const filtered = catFilter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === catFilter);

  container.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="p-img-box">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="p-cat-tag">${p.categoryLabel}</span>
      </div>
      <div class="p-content">
        <h3>${p.name}</h3>
        <p>${p.shortDesc}</p>
        <div class="p-specs">
          <div class="p-spec-row">
            <strong>Material:</strong>
            <span>${p.material.split(',')[0]}</span>
          </div>
          <div class="p-spec-row">
            <strong>Size Range:</strong>
            <span>${p.sizeRange.split('(')[0]}</span>
          </div>
          <div class="p-spec-row">
            <strong>Standard:</strong>
            <span>${p.standard.split(',')[0]}</span>
          </div>
        </div>
        <div class="p-actions">
          <button class="btn btn-primary btn-sm btn-block" onclick="openEnquiryModal('${p.name}')">Request Quote</button>
          <button class="btn btn-outline btn-sm" onclick="openProductModal('${p.id}')">Specs</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Filter Products
function filterProducts(cat) {
  const btns = document.querySelectorAll('.catalog-filters .filter-btn');
  btns.forEach(b => {
    if (b.getAttribute('data-cat') === cat) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });
  renderProducts(cat);
}

// Render Services
function renderServices() {
  const container = document.getElementById('servicesList');
  if (!container) return;

  container.innerHTML = SERVICES.map(s => `
    <div class="service-card">
      <div class="srv-header">
        <div class="srv-icon">${s.icon}</div>
        <h3>${s.title}</h3>
      </div>
      <p>${s.desc}</p>
      <ul class="srv-caps">
        ${s.caps.map(c => `<li>${c}</li>`).join('')}
      </ul>
      <div class="srv-meta">
        <span class="meta-note">ISO 9001:2015 Verified</span>
        <button class="btn btn-outline btn-sm" onclick="openEnquiryModal('Service: ${s.title}')">Inquire for Contract</button>
      </div>
    </div>
  `).join('');
}

// Render Gallery
function renderGallery(catFilter) {
  const container = document.getElementById('galleryList');
  if (!container) return;

  const filtered = catFilter === 'all' 
    ? GALLERY 
    : GALLERY.filter(g => g.cat === catFilter);

  container.innerHTML = filtered.map(g => `
    <div class="gallery-item" onclick="openLightbox('${g.img}', '${g.title} - ${g.caption}')">
      <img src="${g.img}" alt="${g.title}" loading="lazy">
      <div class="gallery-overlay">
        <h4>${g.title}</h4>
        <span>${g.catLabel} · Click to enlarge</span>
      </div>
    </div>
  `).join('');
}

// Filter Gallery
function filterGallery(cat) {
  const btns = document.querySelectorAll('.gallery-filters .filter-btn');
  btns.forEach(b => {
    if (b.getAttribute('data-gcat') === cat) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });
  renderGallery(cat);
}

// Render Jobs
function renderJobs() {
  const container = document.getElementById('jobsList');
  if (!container) return;

  container.innerHTML = JOBS.map(j => `
    <div class="job-card">
      <div class="job-info">
        <h4>${j.title}</h4>
        <p style="margin-bottom:8px; font-size:0.875rem;">${j.desc}</p>
        <div class="job-tags">
          <span>📍 ${j.loc}</span>
          <span>💼 ${j.dept}</span>
          <span>⏳ Experience: ${j.exp}</span>
          <span>👥 Openings: ${j.openings}</span>
        </div>
      </div>
      <div>
        <button class="btn btn-primary btn-sm" onclick="openJobModal('${j.title}')">Apply Now</button>
      </div>
    </div>
  `).join('');
}

// Enquiry Modal Handlers
function openEnquiryModal(subject = 'General RFQ') {
  const modal = document.getElementById('enquiryModal');
  const title = document.getElementById('modalTitle');
  const subInput = document.getElementById('mSubject');
  const alert = document.getElementById('modalAlert');

  if (title) title.textContent = `Request Quote: ${subject}`;
  if (subInput) subInput.value = subject;
  if (alert) alert.style.display = 'none';

  if (modal) modal.classList.add('open');
}

function closeEnquiryModal() {
  const modal = document.getElementById('enquiryModal');
  if (modal) modal.classList.remove('open');
}

function handleModalSubmit(e) {
  e.preventDefault();
  const refNum = Math.floor(100000 + Math.random() * 900000);
  const refSpan = document.getElementById('modalRef');
  if (refSpan) refSpan.textContent = refNum;

  const alert = document.getElementById('modalAlert');
  if (alert) alert.style.display = 'block';

  setTimeout(() => {
    e.target.reset();
  }, 1000);
}

// Product Details Modal
function openProductModal(prodId) {
  const prod = PRODUCTS.find(p => p.id === prodId);
  if (!prod) return;

  const container = document.getElementById('productModalContent');
  if (!container) return;

  container.innerHTML = `
    <div>
      <img src="${prod.image}" alt="${prod.name}" class="p-modal-img">
    </div>
    <div>
      <span class="section-kicker">${prod.categoryLabel}</span>
      <h3 style="margin-bottom:12px;">${prod.name}</h3>
      <p style="margin-bottom:16px;">${prod.description}</p>
      
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h4 style="font-size:0.9375rem; margin-bottom:8px;">Standard Engineering Specs</h4>
        <div style="font-size:0.8125rem; display:grid; gap:6px;">
          <div><strong>Material Options:</strong> ${prod.material}</div>
          <div><strong>Surface Coatings:</strong> ${prod.finish}</div>
          <div><strong>Size Range:</strong> ${prod.sizeRange}</div>
          <div><strong>Compliance Standard:</strong> ${prod.standard}</div>
        </div>
      </div>

      <div style="display:flex; gap:12px;">
        <button class="btn btn-primary" onclick="closeProductModal(); openEnquiryModal('${prod.name}')">Get Factory Quote</button>
        <button class="btn btn-outline" onclick="closeProductModal()">Close</button>
      </div>
    </div>
  `;

  const modal = document.getElementById('productModal');
  if (modal) modal.classList.add('open');
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) modal.classList.remove('open');
}

// Job Application Modal
function openJobModal(roleTitle) {
  const modal = document.getElementById('jobModal');
  const title = document.getElementById('jobModalTitle');
  const input = document.getElementById('jobRoleInput');
  const alert = document.getElementById('jobAlert');

  if (title) title.textContent = `Apply for: ${roleTitle}`;
  if (input) input.value = roleTitle;
  if (alert) alert.style.display = 'none';

  if (modal) modal.classList.add('open');
}

function closeJobModal() {
  const modal = document.getElementById('jobModal');
  if (modal) modal.classList.remove('open');
}

function handleJobSubmit(e) {
  e.preventDefault();
  const alert = document.getElementById('jobAlert');
  if (alert) alert.style.display = 'block';

  setTimeout(() => {
    e.target.reset();
  }, 1000);
}

// Contact Form Handler
function handleContactSubmit(e) {
  e.preventDefault();
  const refId = Math.floor(100000 + Math.random() * 900000);
  const refEl = document.getElementById('refId');
  if (refEl) refEl.textContent = refId;

  const successEl = document.getElementById('formSuccess');
  if (successEl) successEl.style.display = 'block';

  setTimeout(() => {
    e.target.reset();
  }, 1000);
}

// Lightbox Handlers
function openLightbox(imgSrc, captionText) {
  const overlay = document.getElementById('lightboxOverlay');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');

  if (img) img.src = imgSrc;
  if (caption) caption.textContent = captionText;
  if (overlay) overlay.classList.add('open');
}

function closeLightbox() {
  const overlay = document.getElementById('lightboxOverlay');
  if (overlay) overlay.classList.remove('open');
}
