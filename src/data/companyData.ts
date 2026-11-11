export interface Product {
  id: string;
  name: string;
  category: 'screws' | 'bolts' | 'nuts' | 'automotive' | 'rivets' | 'cnc';
  categoryLabel: string;
  shortDesc: string;
  description: string;
  material: string;
  finish: string;
  sizeRange: string;
  standard: string;
  image: string;
  applications: string[];
  keySpecs: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  capabilities: string[];
  equipment: string[];
  leadTime: string;
  iconName: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract';
  experience: string;
  openings: number;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'plant' | 'products' | 'lab' | 'facility';
  categoryLabel: string;
  image: string;
  caption: string;
}

export const COMPANY_DETAILS = {
  name: 'ZCJ Industrial Private Limited',
  shortName: 'ZCJ Industrial',
  tagline: 'Precision Cold-Forged Fasteners & High-Volume Industrial Hardware',
  establishedYear: 2019,
  incorporationDate: '19 September 2019',
  cin: 'U29309DL2019FTC355294',
  gstin: '09AAECZ1294F1Z7',
  certifications: [
    'ISO 9001:2015 (Quality Management System)',
    'ISO 14001:2015 (Environmental Management)',
    'RoHS Compliant Coatings',
    'IATF 16949 Production Standards'
  ],
  capacity: '100+ Million Pieces / Month',
  plantLocation: {
    title: 'Manufacturing Plant & Operations',
    address: 'Surajpur Industrial Area, Site 4, Industrial Block H Road, Sector 31, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh - 201306, India',
    city: 'Greater Noida, UP',
    landmark: 'Near Kasna / Surajpur Industrial Zone',
    mapUrl: 'https://maps.google.com/?q=Surajpur+Industrial+Area+Site+4+Greater+Noida+Uttar+Pradesh',
    embedMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4566736270977!2d77.4947!3d28.4652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1c81728e9a5%3A0xb3bc87e5b6028c29!2sSurajpur%20Industrial%20Area%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201306!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
  },
  registeredOffice: {
    title: 'Registered Corporate Office',
    address: 'Flat No. 107, C-240, First Floor, Pandav Nagar, East Delhi, New Delhi - 110092, India',
    city: 'New Delhi'
  },
  phones: [
    { label: 'Sales & Inquiries', number: '+91-8043828411', display: '+91 80438 28411' },
    { label: 'Customer Support', number: '+91-8043824694', display: '+91 80438 24694' },
    { label: 'Direct WhatsApp', number: '+919818054321', display: '+91 98180 54321' }
  ],
  emails: [
    { label: 'Sales & RFQ', address: 'sales@zcjindustrial.com' },
    { label: 'General Enquiries', address: 'info@zcjindustrial.com' },
    { label: 'Careers', address: 'careers@zcjindustrial.com' }
  ],
  workingHours: 'Monday – Saturday: 9:00 AM – 6:30 PM (IST) | Sunday Closed',
  whatsappNumber: '918043828411',
  indiaMartUrl: 'https://www.indiamart.com/zcj-industrial-private-limited/'
};

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'prod-machine-screws',
    name: 'Precision Machine & Micro Screws',
    category: 'screws',
    categoryLabel: 'Precision Screws',
    shortDesc: 'Ultra-precision cold-headed screws engineered for electronics, automotive sensors, and mechanical assemblies.',
    description: 'Manufactured with high-speed multi-die headers ensuring tight concentricity and dimensional tolerance down to ±0.01mm. Available with Torx, Phillips, Slotted, and Hex socket head drives.',
    material: 'Stainless Steel (SS304 / SS316), Carbon Steel, Brass',
    finish: 'Black Zinc, Trivalent Clear Zinc, Nickel, Passivated',
    sizeRange: 'M0.8 to M8 (Length: 2mm to 80mm)',
    standard: 'DIN 7985, DIN 965, ISO 7045, JIS B 1111',
    image: '/ZCJ-Industrial-Private-Limited/images/hero_industrial_fasteners.jpg',
    applications: ['Consumer Electronics', 'Automotive Sensors', 'Precision Instruments', 'Medical Devices'],
    keySpecs: [
      { label: 'Thread Size', value: 'M0.8 – M8.0' },
      { label: 'Drive Types', value: 'Torx (T5-T30), Phillips (PH00-PH3), Socket' },
      { label: 'Tensile Strength', value: '400 – 800 MPa' },
      { label: 'Quality Grade', value: 'Class 4.8 / 8.8 / A2-70' }
    ]
  },
  {
    id: 'prod-high-tensile-bolts',
    name: 'High-Tensile Hex Head Bolts & Studs',
    category: 'bolts',
    categoryLabel: 'Industrial Bolts',
    shortDesc: 'Heavy-duty cold forged hex head and flange bolts designed for structural and high-vibration applications.',
    description: 'Cold forged from micro-alloy steel with controlled induction heat treatment. Excellent fatigue resistance and proof load ratings for severe mechanical duty cycles.',
    material: 'Alloy Steel (SCM435 / 40Cr), Carbon Steel, SS316',
    finish: 'Black Oxide / Phosphated, Geomet, Dacromet, Zinc Flake',
    sizeRange: 'M4 to M24 (Length: 10mm to 200mm)',
    standard: 'DIN 933, DIN 931, ISO 4014, ASTM A325',
    image: '/ZCJ-Industrial-Private-Limited/images/automotive_fasteners_line.jpg',
    applications: ['Automotive Powertrain', 'Heavy Machinery', 'Wind Energy', 'Structural Steel'],
    keySpecs: [
      { label: 'Hardness Grade', value: 'Grade 8.8, 10.9, 12.9' },
      { label: 'Proof Load', value: 'Up to 970 MPa (Grade 12.9)' },
      { label: 'Salt Spray Resistance', value: '480 to 1000 Hours (Zinc Flake / Geomet)' },
      { label: 'Head Styles', value: 'Standard Hex, Serrated Flange, Socket Cap' }
    ]
  },
  {
    id: 'prod-industrial-nuts',
    name: 'Industrial Lock Nuts & Flange Nuts',
    category: 'nuts',
    categoryLabel: 'Precision Nuts',
    shortDesc: 'Vibration-resistant nylon insert lock nuts, all-metal lock nuts, and serrated flange nuts.',
    description: 'Precision tapped threads adhering to 6H/6G tolerance classes. Engineered to prevent back-off and loosening in high-vibration automotive and machinery systems.',
    material: 'Mild Steel, Carbon Steel (EN8D), Brass, Stainless Steel',
    finish: 'Yellow Zinc, White Zinc, Black Phosphate, Dacromet',
    sizeRange: 'M3 to M24',
    standard: 'DIN 985, DIN 982, DIN 6923, ISO 7040',
    image: '/ZCJ-Industrial-Private-Limited/images/hero_industrial_fasteners.jpg',
    applications: ['Suspension Systems', 'Agricultural Equipment', 'Electric Motors', 'Conveyor Lines'],
    keySpecs: [
      { label: 'Thread Class', value: 'ISO Metric 6H' },
      { label: 'Types', value: 'Nyloc, Stover, Serrated Flange, Weld Nut' },
      { label: 'Proof Load', value: 'Class 8 / Class 10 / Class 12' },
      { label: 'Temperature Range', value: '-50°C to +120°C (Nylon), +300°C (All-Metal)' }
    ]
  },
  {
    id: 'prod-self-drilling-screws',
    name: 'Self-Drilling & Sheet Metal Screws',
    category: 'screws',
    categoryLabel: 'Drilling & Tapping',
    shortDesc: 'High-speed drill-point fasteners for sheet metal cladding, roofing, and structural solar racking.',
    description: 'Precision hardened drill tips that drill, tap, and fasten in a single uninterrupted operation. Features bonded EPDM washers for leak-proof outdoor weather sealing.',
    material: 'Case Hardened Carbon Steel (C1022), SS410, Bi-Metal',
    finish: 'Ruspert 1000 Hr, Electro Zinc, Mech Zinc',
    sizeRange: '#6 to 1/4" / M3.5 to M6.3 (Length: 13mm to 150mm)',
    standard: 'DIN 7504 (P, N, K), ISO 15480',
    image: '/ZCJ-Industrial-Private-Limited/images/automotive_fasteners_line.jpg',
    applications: ['Pre-Engineered Buildings (PEB)', 'Solar Panel Mounting', 'HVAC Ducting', 'Automotive Body Panels'],
    keySpecs: [
      { label: 'Drilling Capacity', value: 'Up to 12.5mm Mild Steel Plate' },
      { label: 'Drill Point Style', value: '#2, #3, #4, #5 Tek Points' },
      { label: 'Head Types', value: 'Hex Washer Head, CSK, Wafer, Bugle' },
      { label: 'Weather Seal', value: '16mm/19mm Bonded EPDM Washer' }
    ]
  },
  {
    id: 'prod-automotive-fasteners',
    name: 'Automotive Cold-Forged Pins & Lead Screws',
    category: 'automotive',
    categoryLabel: 'Automotive Hardware',
    shortDesc: 'Specialized cold forged stepped pins, threaded lead rods, cotter pins, and safety-critical fasteners.',
    description: 'Engineered specifically for Tier-1 automotive seating, steering linkages, braking systems, and EV battery enclosures. Produced under rigorous PPAP Level 3 documentation.',
    material: 'Automotive Grade High Tensile Steel, Alloy Steels, 1018/1045',
    finish: 'Dacromet, Geomet 500B, Zinc-Nickel (1000+ Hr NSS)',
    sizeRange: 'Diameter 2mm to 18mm / Lengths up to 180mm',
    standard: 'Customer Blueprint Specific / OEM Standards (Maruti, Tata, Hyundai specs)',
    image: '/ZCJ-Industrial-Private-Limited/images/automotive_fasteners_line.jpg',
    applications: ['Steering Columns', 'Door Hinges & Latches', 'Seat Recliner Mechanisms', 'EV Battery Packs'],
    keySpecs: [
      { label: 'PPM Defect Rate', value: '< 15 PPM (with 100% Optical Sorting)' },
      { label: 'Tolerances', value: 'OD: ±0.015mm | Length: ±0.05mm' },
      { label: 'Surface Roughness', value: 'Ra 0.4 to 0.8 μm' },
      { label: 'Documentation', value: 'PPAP Level 3, IMDS Submission, Mill Test Certs' }
    ]
  },
  {
    id: 'prod-rivets-pins-gaskets',
    name: 'Solid & Semi-Tubular Rivets & Split Cotter Pins',
    category: 'rivets',
    categoryLabel: 'Rivets & Pins',
    shortDesc: 'Permanent fastening cold-formed rivets, cotter split pins, and copper/fiber sealing gaskets.',
    description: 'Ductile cold heading wires shaped into uniform rivets and cotter retention pins for mechanical locking and electrical terminal grounding.',
    material: 'Aluminum, Copper, Mild Steel, Stainless Steel',
    finish: 'Natural, Bright Annealed, Tin Plated, Zinc Plated',
    sizeRange: 'Diameter 1.2mm to 10mm',
    standard: 'DIN 7337, DIN 94, ISO 1234, ASME B18.1.1',
    image: '/ZCJ-Industrial-Private-Limited/images/hero_industrial_fasteners.jpg',
    applications: ['Electrical Switchgear', 'Brake Linings', 'Sheet Metal Enclosures', 'Heavy Commercial Vehicles'],
    keySpecs: [
      { label: 'Types', value: 'Solid Head, Semi-Tubular, Blind Pop, Split Cotter' },
      { label: 'Shear Strength', value: 'High shear resistance' },
      { label: 'Standards', value: 'DIN 94 / DIN 660 / DIN 661' },
      { label: 'Packaging', value: 'Bulk Corrugated (25kg) or Polybagged' }
    ]
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'srv-cold-forging',
    title: 'Multi-Station Cold Forging & Heading',
    shortDesc: 'High-speed net-shape forming of complex fastener geometries without material waste.',
    fullDesc: 'Our facility in Greater Noida houses advanced multi-station high-speed cold heading equipment capable of producing up to 300 parts per minute. Cold forging aligns grain flow along the component contour, boosting mechanical fatigue strength by 25% compared to turned components.',
    capabilities: [
      'High speed 3-die 3-blow & 4-die 4-blow headers',
      'Continuous wire diameter processing from 1.0mm to 16mm',
      'Near-zero raw material scrap rate',
      'Optimized grain structure for superior fatigue resistance'
    ],
    equipment: ['Multi-Die Cold Headers (SACMA & Taiwanese)', 'High-Speed Thread Rollers', 'In-Line Wire Drawing Systems'],
    leadTime: '2 to 3 weeks for custom tooling',
    iconName: 'Wrench'
  },
  {
    id: 'srv-optical-sorting',
    title: '100% Optical Vision Sorting & Quality Metrology',
    shortDesc: 'Automated glass-plate laser & camera sorting ensuring zero-defect deliveries (<15 PPM).',
    fullDesc: 'To meet stringent automotive OEM requirements, we operate automated multi-camera rotary glass disc sorting systems. Every fastener is inspected in 360 degrees for thread pitch, total length, head cracks, drive depth, concentricity, and burrs at speeds up to 800 pieces per minute.',
    capabilities: [
      '360° dimensional checking of external threads',
      'Torx & Phillips recess depth optical measurement',
      'Crack detection and head deformation sorting',
      'Automated batch rejection and segregation'
    ],
    equipment: ['High-Resolution CCD Rotary Glass Plate Sorters', 'Laser Micrometer Gauges', 'Mitutoyo Optical Profile Projector'],
    leadTime: 'Integrated in real-time line packaging',
    iconName: 'Eye'
  },
  {
    id: 'srv-cnc-machining',
    title: 'Custom Precision CNC Turning & Second-Operation Machining',
    shortDesc: 'Secondary Swiss-lathe turning, cross-drilling, knurling, and precision slotting.',
    fullDesc: 'For components requiring intricate profiles that cannot be formed solely by cold heading, our secondary CNC shop performs ultra-precision Swiss-type turning, tapping, cross-hole drilling, external knurling, and groove cutting.',
    capabilities: [
      'Tight tolerances down to ±0.005mm',
      'Complex internal threading and step profiles',
      'Precision knurling (diamond, straight, spiral)',
      'Fine micro-finishing down to Ra 0.2'
    ],
    equipment: ['Citizen / Star Swiss CNC Lathes', 'Automatic Secondary Drilling & Slotting Machines'],
    leadTime: '1 to 2 weeks',
    iconName: 'Cpu'
  },
  {
    id: 'srv-surface-treatment',
    title: 'Corrosion-Resistant Surface Finishing & Coating',
    shortDesc: 'Eco-friendly RoHS compliant electroplating and high-durability zinc flake finishes.',
    fullDesc: 'Fasteners undergo tailored surface treatments to resist severe environmental corrosion. From standard trivalent white/yellow zinc to high-performance Geomet, Dacromet, and Zinc-Nickel coatings capable of exceeding 1,000 hours of neutral salt spray testing without red rust.',
    capabilities: [
      'Trivalent Blue/Clear, Yellow & Black Zinc Plating',
      'Zinc-Nickel (Zn-Ni) Alloy Electroplating (12-15% Ni)',
      'Zinc Flake Coatings (Geomet / Dacromet / Magni)',
      'Hydrogen De-Embrittlement Baking Post-Plating'
    ],
    equipment: ['Automated Barrel Plating Lines', 'Controlled Baking Ovens for De-embrittlement', 'Coating Thickness X-Ray Gauges'],
    leadTime: '3 to 5 business days',
    iconName: 'Shield'
  },
  {
    id: 'srv-lab-testing',
    title: 'Metallurgical & Mechanical Testing Lab',
    shortDesc: 'Full in-house physical, chemical, and salt spray testing with accredited certification.',
    fullDesc: 'Our Greater Noida quality laboratory verifies raw material heat numbers, core & surface hardness, tensile break loads, drive torque capacity, and plating corrosion resistance, accompanied by comprehensive 3.1 Inspection Certificates.',
    capabilities: [
      'Neutral Salt Spray (NSS) chamber per ASTM B117',
      'Micro-Vickers & Rockwell Hardness testing (HRC, HRB, HV)',
      'Universal Tensile Testing machine (UTM up to 300 kN)',
      'Digital torque and angle analysis'
    ],
    equipment: ['Micro-Vickers Hardness Tester', '300kN Universal Testing Machine', 'Salt Spray Corrosion Chamber', 'Spectrometer'],
    leadTime: 'Same-day test certificate generation',
    iconName: 'CheckCircle'
  },
  {
    id: 'srv-jit-supply',
    title: 'Vendor Managed Inventory (VMI) & JIT Logistics',
    shortDesc: 'Custom packaging, barcoded labeling, and synchronized supply line feeding.',
    fullDesc: 'We partner with automotive and appliance OEMs to maintain safety stock and fulfill Kanban pull signals within 24 hours across Delhi-NCR and major industrial hubs in India, cutting client inventory holding costs.',
    capabilities: [
      'Dedicated safety stock warehousing in Greater Noida',
      'Returnable plastic tote packing & ERP-integrated barcodes',
      'Daily scheduled milk-run deliveries',
      'Export pallet packaging complying with ISPM 15 standards'
    ],
    equipment: ['Automated Bagging & Carton Weigh-Packaging Stations', 'ERP Inventory Tracking'],
    leadTime: '24-hour dispatch for contracted SKU buffers',
    iconName: 'Truck'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'High-Volume Cold Heading Plant',
    category: 'plant',
    categoryLabel: 'Plant & Machinery',
    image: '/ZCJ-Industrial-Private-Limited/images/facility_cold_heading.jpg',
    caption: 'Our modern manufacturing facility in Surajpur Industrial Area, Greater Noida, equipped with multi-station automated cold headers.'
  },
  {
    id: 'gal-2',
    title: 'High-Tensile Bolts & Industrial Fasteners',
    category: 'products',
    categoryLabel: 'Products',
    image: '/ZCJ-Industrial-Private-Limited/images/hero_industrial_fasteners.jpg',
    caption: 'Precision engineered machine screws, hex bolts, spring washers, and threaded components fabricated to DIN & ISO standards.'
  },
  {
    id: 'gal-3',
    title: 'Optical Profile Metrology & Quality Inspection',
    category: 'lab',
    categoryLabel: 'Quality Lab',
    image: '/ZCJ-Industrial-Private-Limited/images/testing_quality_lab.jpg',
    caption: 'Profile projector verifying micro-thread pitch, tooth angle, and head tolerances down to ±0.01mm.'
  },
  {
    id: 'gal-4',
    title: 'Automotive Grade Flange Bolts & Cold Formed Pins',
    category: 'products',
    categoryLabel: 'Products',
    image: '/ZCJ-Industrial-Private-Limited/images/automotive_fasteners_line.jpg',
    caption: 'Black phosphated Grade 10.9 flange bolts, custom automotive pins, and micro screws for OEM assembly lines.'
  },
  {
    id: 'gal-5',
    title: 'Automated Secondary Thread Rolling Stations',
    category: 'plant',
    categoryLabel: 'Plant & Machinery',
    image: '/ZCJ-Industrial-Private-Limited/images/facility_cold_heading.jpg',
    caption: 'High-speed flat die thread rolling ensuring continuous grain structure and burr-free threads.'
  },
  {
    id: 'gal-6',
    title: 'Precision Micro Screw Inspection',
    category: 'lab',
    categoryLabel: 'Quality Lab',
    image: '/ZCJ-Industrial-Private-Limited/images/testing_quality_lab.jpg',
    caption: 'Metallurgical testing and dimensional certification ensuring adherence to RoHS and IATF standards.'
  }
];

export const CAREER_OPENINGS: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Cold Heading Machine Setter & Operator',
    department: 'Production & Tooling',
    location: 'Surajpur Plant, Greater Noida',
    type: 'Full-time',
    experience: '3 - 6 Years',
    openings: 3,
    description: 'We are seeking experienced Cold Header operators proficient in tooling setup, punch alignment, and troubleshooting for high-speed multi-station headers.',
    responsibilities: [
      'Setup and changeover of multi-station cold heading dies and punches',
      'Monitor dimensional tolerances during production using verniers and micrometers',
      'Perform tool maintenance and report tool wear patterns',
      'Ensure machine uptime and follow 5S shop floor practices'
    ],
    requirements: [
      'ITI or Diploma in Mechanical Engineering',
      'Hands-on experience with Taiwanese or European multi-die headers (M2 to M10 range)',
      'Ability to read engineering drawings and GD&T symbols',
      'Willingness to work in rotating shifts'
    ]
  },
  {
    id: 'job-2',
    title: 'Quality Control & Metrology Engineer',
    department: 'Quality Assurance',
    location: 'Greater Noida Plant',
    type: 'Full-time',
    experience: '2 - 5 Years',
    openings: 2,
    description: 'Responsible for receiving inspection, in-process quality audits, operating profile projectors, and managing customer PPAP documentation.',
    responsibilities: [
      'Conduct first-piece, in-process, and pre-dispatch quality checks',
      'Operate optical profile projector, hardness tester, and salt spray chamber',
      'Prepare 8D reports, CAPA, and customer inspection test certificates (3.1)',
      'Maintain calibration logs for all factory measuring instruments'
    ],
    requirements: [
      'B.Tech / Diploma in Mechanical or Metallurgy',
      'Thorough knowledge of ISO 9001 and IATF 16949 core tools (SPC, MSA, FMEA, PPAP)',
      'Experience in fastener or automotive component manufacturing is preferred',
      'Strong analytical and reporting skills'
    ]
  },
  {
    id: 'job-3',
    title: 'B2B Industrial Sales & Account Manager',
    department: 'Sales & Business Development',
    location: 'Greater Noida / Delhi NCR',
    type: 'Full-time',
    experience: '3 - 7 Years',
    openings: 2,
    description: 'Drive business growth with automotive Tier-1, consumer electronics, and heavy machinery OEM clients across North & West India.',
    responsibilities: [
      'Identify new OEM fastener requirements and generate technical RFQ opportunities',
      'Coordinate with engineering for quotation feasibility and cost estimation',
      'Maintain strong relationships with procurement heads and technical buyers',
      'Negotiate long-term supply contracts and achieve quarterly revenue targets'
    ],
    requirements: [
      'Bachelor’s degree in Business or Mechanical Engineering',
      'Proven track record in B2B industrial component / fastener sales',
      'Excellent negotiation, presentation, and communication skills in English and Hindi',
      'Valid driving license and willingness to visit client manufacturing facilities'
    ]
  },
  {
    id: 'job-4',
    title: 'Tool & Die Maintenance Technician',
    department: 'Tool Room',
    location: 'Greater Noida Plant',
    type: 'Full-time',
    experience: '4 - 8 Years',
    openings: 1,
    description: 'Maintain tungsten carbide cold heading dies, punches, cut-off knives, and thread rolling flat dies to ensure maximum production life.',
    responsibilities: [
      'Inspect, polish, and lap carbide dies and high-speed steel punches',
      'Perform tool fitting, assembly, and trial alignment in tool room',
      'Analyze cause of premature die chipping or thread roller wear',
      'Maintain organized die inventory and replenishment records'
    ],
    requirements: [
      'ITI Tool & Die Maker or Diploma in Tool Design',
      'Expertise in carbide tooling for fastener cold forging',
      'Proficiency in surface grinding, tool milling, and optical die inspection',
      'Detail-oriented with strict adherence to safety standards'
    ]
  }
];

export const CLIENT_SECTORS = [
  { name: 'Automotive & EVs', desc: 'Powertrain bolts, seat recliner pins, sensor micro-screws, chassis fasteners' },
  { name: 'Consumer Electronics', desc: 'Precision M0.8-M2.5 laptop, smartphone, TV, and appliance screws' },
  { name: 'Heavy Machinery & PEB', desc: 'High-tensile Grade 8.8 & 10.9 structural bolts and heavy hex nuts' },
  { name: 'Electrical & Switchgear', desc: 'Brass terminal screws, copper rivets, and tamper-proof panel fasteners' },
  { name: 'Solar & Renewable Energy', desc: 'Corrosion-resistant 1000hr salt spray bi-metal self-drilling screws' },
  { name: 'Aerospace & Defense', desc: 'Close-tolerance specialty alloy turned pins and safety-wired fasteners' }
];

export const TESTIMONIALS = [
  {
    quote: 'ZCJ Industrial has been our primary fastener supplier for 3 consecutive years. Their ±0.01mm concentricity and automated optical sorting eliminated line jams on our automated assembly conveyor.',
    author: 'Rajiv Sharma',
    role: 'Head of Sourcing, Automotive Tier-1 Systems',
    location: 'Gurugram'
  },
  {
    quote: 'Their response time for custom cold-headed tooling was impressive—samples delivered in under 12 days with complete PPAP documentation and salt-spray test certificates.',
    author: 'Sunil Mehta',
    role: 'Chief Technical Officer, Consumer Electronics OEM',
    location: 'Noida'
  },
  {
    quote: 'Reliable supplier on IndiaMART and now an essential partner for our pre-engineered building projects. Their Ruspert-coated self-drilling screws withstand harsh industrial atmospheres.',
    author: 'Vikas Kulkarni',
    role: 'VP Infrastructure Projects, PEB Manufacturing',
    location: 'Pune'
  }
];
