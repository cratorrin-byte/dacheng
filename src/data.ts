import { Product, Course, MaintenanceItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'sice-s226',
    name: 'SICE S-226 Tire Changer',
    chineseName: 'SICE S-226 專業氣動拆胎機',
    brand: 'SICE',
    origin: 'ITALY',
    category: 'tire-changer',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ui1aIVUb6p0-6JJ7vsL8Hc-7NoxDo-wZCx9e9iyhBaxGzH1d-n1ppOlJnJi7zs9YDeF7nVbTARN2Smsyfw6YphDPkwoC34NBRMwLtn9LWninigWCsh8blMfmOR3cDwONPEklVLRuwQZIjVnrmY-YcSsOklKT2tKx7xfFRZ3vqtCRZml9zhAFN_aI8REoJJH_2cLpVVSuHinyXxQk0xfAp4veYeo_WWe1h7s_oSyhGgO-11QtLeQoAFRevMO',
    description: 'Italian premium heavy-duty automatic tire changer designed for high-volume workshops. Ideal for ultra-low profile, run-flat, and standard passenger tires.',
    detailedSpecs: {
      'Clamping Range (External)': '10" - 24"',
      'Clamping Range (Internal)': '12" - 26"',
      'Max Wheel Width': '12" (305 mm)',
      'Max Wheel Diameter': '1100 mm (43")',
      'Bead Breaker Force': '3000 kg',
      'Operating Pressure': '8 - 10 bar (116 - 145 psi)',
      'Power Supply': '380V Three-Phase (Optional 220V)',
      'Weight': '320 kg'
    },
    bestFor: 'High-volume passenger and light truck tire services seeking extreme reliability and quick bead-breaking.',
    certifications: ['CE Certified', 'TÜV Rheinland Approved', 'OEM Approved (BMW, Mercedes-Benz)'],
    features: [
      'Pneumatically tilted arm with automatic locked position',
      'Simultaneous pneumatic locking of horizontal and vertical arms',
      'Double-acting bead breaker cylinder with protective padding',
      'Adjustable turntable with self-centering four-clamp jaw system',
      'Integrated booster jet system for immediate bead seating'
    ]
  },
  {
    id: 'rav-g4',
    name: 'RAV Wheel Balancer G4',
    chineseName: 'RAV G4 數位微電腦輪胎平衡機',
    brand: 'RAV',
    origin: 'GERMANY',
    category: 'balancer',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uh-txcVXTwCm4u2cqY88M4lFJ4yfpPuczS6evAY2MSClO1X57lPNB17qnYCs22A0RPIPdn9qlrpEGzGjdzVi4CK7kv5d3lPes8aIFPolhKuXMgQcWxlr8MqHIAoGwFSrq6QecOZ3kUnKv9wlM_263QiUbWJrT97b4bm8cP--adPowgV_zcW-rQ069i9dkhnilV8Gqv51_ptIU3wntPuUsm8W7Acq9V_Qr10uYJUueAIbbI8-Og7yCiqQb09',
    description: 'High-precision microprocessing wheel balancer with 3D electronic gauge. Built with German balancing sensors to deliver 1-gram accuracy in under 6 seconds.',
    detailedSpecs: {
      'Rim Diameter': '10" - 26" (Automatic)',
      'Rim Width': '1.5" - 22" (Automatic)',
      'Max Wheel Weight': '70 kg',
      'Balancing Precision': '1 gram (+/- 0.05 oz)',
      'Measuring Cycle Time': '5 - 7 seconds',
      'Rotation Speed': '150 rpm',
      'Display Unit': 'HD LED Display (Diagnostic Console)',
      'Software Program': 'ALU-S, Split Weight, Optimization, Heavy SUV'
    },
    bestFor: 'Precision balancing requirements for premium sports vehicles and heavy SUVs with alloy rims.',
    certifications: ['WDK Germany Certified', 'CE Standard', 'DKD Calibration Class A'],
    features: [
      'Automatic measurements of rim diameter and distance with internal caliper',
      'Dynamic, static, and ALU-S multi-balancing modes',
      'Split-weight program to hide adhesive balance weights behind spokes',
      'Virtual direct drive system (VDD) for noise-free measurements',
      'Automatic cycle commencement on hood lowering'
    ]
  },
  {
    id: 'dacheng-liftpro',
    name: 'Industrial Lift Pro',
    chineseName: '大城專用 Industrial Lift Pro 超薄附建大剪式頂高機',
    brand: 'DA CHENG',
    origin: 'CUSTOM',
    category: 'lift',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhDiHxbDp_UxWQQDdWH8iEnh8hhWS7pNNVbtLAPJTlF3mM_2n8GhvV-I2twiFnL7OsF_OvZYwyXyZTKWzrKBVBoboXxDhcprfs4EbfEctAD6adeFFOeOaPLm9IbX2KI0NTiXY_5P-KMWBJTlwrbw7NpT7yOuqI1a4K-xjg4xYhemedDmmnXAXvtXbhxVMM4GlCwy5q4YzydpafNJEB3jR5lXFxhrmy-Eh_fUF3c4NvymvKbmZ7gtFla9R8',
    description: 'Custom-engineered low-profile double-scissor lifting platform. Fully configured for heavy 3D wheel alignment operations with embedded turntable recesses.',
    detailedSpecs: {
      'Lifting Capacity': '4000 kg (8800 lbs)',
      'Main Lift Height': '1900 mm',
      'Secondary Lift Height': '450 mm (Jack Lift)',
      'Platform Length': '4500 mm',
      'Platform Width': '620 mm',
      'Lifting Time': '45 seconds',
      'Lowering Time': '40 seconds',
      'Pneumatic Release': '6 - 8 bar'
    },
    bestFor: 'Professional 3D Wheel alignment setup, under-chassis inspections, and active vehicle maintenance bays.',
    certifications: ['SGS Safety Certified', 'CNS National Standard Taiwan', 'Factory Stress Tested 1.5x Overload'],
    features: [
      'Ultra-thin drive-on height (only 175mm above ground)',
      'Pneumatic unlocking mechanism with heavy-duty mechanical safety latches',
      'Hydraulic synchronization control with master-slave safety system',
      'Integrated sliding plates and adjustable recesses for turnplates',
      'Overload protection valve to ensure operator safety at all elevations'
    ]
  },
  {
    id: 'hofmann-geoliner670',
    name: 'Geoliner 670 Imaging',
    chineseName: 'HOFMANN Geoliner 670 頂級 3D 複合幾何四輪定位儀',
    brand: 'HOFMANN',
    origin: 'USA',
    category: 'aligner',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujGXF5dU8g--FIf-anzq_zt4FqklMG4i6klaplsYFDRUr8ffE8elLpR84CA4w1PWHM8swv6CCi4w3RfM8HIfvNKuPYJXvtGbfxNfFwahuEuLe5q2OIMQD4VnTr-ix7qC5gZoUL8uPfTLMpFG08bN1s9eoiED0ivtneb7dZfYN7W5BViHTj9IPPVTgR718tTpWFGsBBCjfOvTRCOyv7FaAE4O1LY5lHjjNdhr0DTIV52T_RvDXJxGIfK24i4',
    description: 'Advanced 3D digital imaging wheel alignment system. Utilizing high-resolution cameras and lightweight XD targets for instantaneous real-time measurements in 2 minutes.',
    detailedSpecs: {
      'Measurement Technology': '3D HD Camera Target Tracking',
      'Clamping Range': '11" - 22" (Universal AC100 Clamps)',
      'Track Width Range': '122 - 244 cm',
      'Wheelbase Range': '201 - 457 cm',
      'Measurement System': 'Direct Camera Sensing VODI indicators',
      'Power Input': '100-240V 50/60Hz',
      'OS Support': 'Windows 11 Embedded + OEM Database'
    },
    bestFor: 'High-end diagnostics, calibration, and elite workshop steering alignment tuning.',
    certifications: ['ISO 9001 Approved', 'NIST Traceability Calibrated', 'OEM Specifications Database Certified'],
    features: [
      'AC100 direct wheel clamps - no metal-to-metal rim contact to prevent scratching',
      'Dynamic Roll-Back compensation for continuous, live measurement feedback',
      'Interactive guidance and OEM diagnostic repair instructions step-by-step',
      'Automatic tracking of camera heights relative to vehicle elevation on lift',
      'Advanced EZ-Toe system for adjustment of hard-to-reach steering linkage'
    ]
  }
];

export const COURSES: Course[] = [
  {
    id: 'tire-spec-101',
    title: 'Precision Wheel Alignment & Steering Geometry',
    chineseTitle: '四輪定位與底盤幾何幾何結構核心師資班 (AC-01)',
    duration: '3 Days (24 Hours Total)',
    audience: 'Automotive Mechanics, Specialty Shop Owners, Alignment Technicians',
    level: 'Intermediate',
    description: 'Deep dive into 3D camera calibration, caster/camber/toe relationships, suspension structures, steering axis inclination (SAI), and practical troubleshooting for high-end European vehicles.',
    syllabus: [
      'Day 1 Morning: Suspension structures & Steering system geometry fundamentals (Castor, Camber, Scrub Radius, Caster).',
      'Day 1 Afternoon: Dynamic physics of tire contacts & Tire wear diagnostics with target graphs.',
      'Day 2 Morning: Hands-on 3D targets calibration, run-out compensations on scissor lifts.',
      'Day 2 Afternoon: Multi-link rear alignment tuning for premium BMW, Porsche, Mercedes models.',
      'Day 3 Morning: Interactive troubleshooting of steering pulls, sensor calibrations, and ADAS alignment integration.',
      'Day 3 Afternoon: Final examination - practical setup speed trial & theoretical exam.'
    ],
    upcomingDates: ['2026-06-15', '2026-07-20', '2026-08-10'],
    capacity: 12,
    registeredCount: 9
  },
  {
    id: 'tire-tech-201',
    title: 'Advanced Run-Flat & Ultra-Low Profile Tire Service',
    chineseTitle: '頂級運動型超扁平比跑胎與防爆胎全氣動拆裝實務班 (AC-02)',
    duration: '2 Days (16 Hours Total)',
    audience: 'Tire Technicians, Workshop Apprentices',
    level: 'Advanced',
    description: 'A dedicated premium training modules program to safely demount and mount high-risk, expensive carbon/alloy wheels, run-flat inserts, and low-profile tires using specialized tire changer assists.',
    syllabus: [
      'Day 1 Morning: Material properties of Run-Flat, SSR, and UHP tires. Heat tolerances.',
      'Day 1 Afternoon: Rim protection layouts, helper arm deployment, bead breaker adjustments.',
      'Day 2 Morning: Safe handling of tire pressure monitoring systems (TPMS) and sensor locations.',
      'Day 2 Afternoon: Lubricant selection, high-speed inflation safety procedures, and real case trial.'
    ],
    upcomingDates: ['2026-06-22', '2026-07-25'],
    capacity: 10,
    registeredCount: 10
  },
  {
    id: 'diagnostics-301',
    title: 'Hofmann Certified Calibration Specialist',
    chineseTitle: '美國 HOFMANN 原廠授權校正與底盤故障診斷師認證課程 (AC-03)',
    duration: '4 Days (32 Hours Total)',
    audience: 'Master Mechanics, Service Managers, Equipment Calibration Engineers',
    level: 'Advanced',
    description: 'Become an official certified technician permitted to calibrate and troubleshoot Hofmann Geoliner systems. Authorized by Da Cheng Tires & Machinery factory standards.',
    syllabus: [
      'Day 1: Optics, camera sensors, digital imaging targets and measurement parameters theory.',
      'Day 2: System maintenance, main server configuration, camera axis alignment and mechanical level tests.',
      'Day 3: Complex case studies (bent control arms, engine cradle shifts, dynamic thrust angles).',
      'Day 4: Master practical test, equipment calibration validation, official certificate grant.'
    ],
    upcomingDates: ['2026-07-12', '2026-08-18'],
    capacity: 8,
    registeredCount: 5
  }
];

export const MAINTENANCE_ITEMS: MaintenanceItem[] = [
  {
    id: 'lube-premium-01',
    name: 'Industrial Grade Lubricant Super ISO-100',
    chineseName: '大城客製工化一號 超耐高壓氣動零件專用潤滑油',
    brand: 'DA CHENG',
    category: 'oils',
    packSize: '20L Barrel / 1L Canister',
    description: 'Specially designed high-viscosity oil for heavy-duty pneumatic valves in automatic tire changers. Protects O-rings, prevents moisture corrosion, and maintains piston fluidity.',
    specs: {
      'Viscosity index': '98 (ISO VG 100)',
      'Pour Point': '-15°C',
      'Flash Point': '220°C',
      'Water Separation Rate': 'Excellent (ASTM D1401)'
    },
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhDiHxbDp_UxWQQDdWH8iEnh8hhWS7pNNVbtLAPJTlF3mM_2n8GhvV-I2twiFnL7OsF_OvZYwyXyZTKWzrKBVBoboXxDhcprfs4EbfEctAD6adeFFOeOaPLm9IbX2KI0NTiXY_5P-KMWBJTlwrbw7NpT7yOuqI1a4K-xjg4xYhemedDmmnXAXvtXbhxVMM4GlCwy5q4YzydpafNJEB3jR5lXFxhrmy-Eh_fUF3c4NvymvKbmZ7gtFla9R8' // Hotlink to lubricant visually
  },
  {
    id: 'paste-bead-02',
    name: 'Professional Bead Mounting Paste (Anti-Corrosive)',
    chineseName: '德國進口頂級專業防鏽輪胎安裝潤滑膏',
    brand: 'RAV',
    category: 'consumables',
    packSize: '5 kg Bucket',
    description: 'Ensures swift, friction-free mounting of tight tires onto complex alloy wheels. Dries completely clear without leaving sticky residue that causes tire slipping.',
    specs: {
      'PH Level': '7.5 (Balanced Neutral)',
      'Texture': 'Mild Wax Paste',
      'Toxicity': 'Non-toxic, Biodegradable',
      'Drying Time': 'Approximately 20 minutes'
    },
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhDiHxbDp_UxWQQDdWH8iEnh8hhWS7pNNVbtLAPJTlF3mM_2n8GhvV-I2twiFnL7OsF_OvZYwyXyZTKWzrKBVBoboXxDhcprfs4EbfEctAD6adeFFOeOaPLm9IbX2KI0NTiXY_5P-KMWBJTlwrbw7NpT7yOuqI1a4K-xjg4xYhemedDmmnXAXvtXbhxVMM4GlCwy5q4YzydpafNJEB3jR5lXFxhrmy-Eh_fUF3c4NvymvKbmZ7gtFla9R8'
  },
  {
    id: 'gauge-pres-03',
    name: 'Digital Precision Tire Inflator Handheld Gauge',
    chineseName: '高精度手持數位車胎充氣精密压力計',
    brand: 'DA CHENG',
    category: 'tools',
    packSize: '1 Unit',
    description: 'Handheld digital inflator with robust brass connectors, backlit pressure bar display, and highly protective impact rubber housing. Ergonomically calibrated for accuracy.',
    specs: {
      'Pressure Range': '0 - 150 PSI (+/- 0.5%)',
      'Inlet Size': '1/4" NPT Thread',
      'Display': 'Digital Backlit LCD',
      'Power Source': '2x AAA Batteries (150 hours use)'
    },
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhDiHxbDp_UxWQQDdWH8iEnh8hhWS7pNNVbtLAPJTlF3mM_2n8GhvV-I2twiFnL7OsF_OvZYwyXyZTKWzrKBVBoboXxDhcprfs4EbfEctAD6adeFFOeOaPLm9IbX2KI0NTiXY_5P-KMWBJTlwrbw7NpT7yOuqI1a4K-xjg4xYhemedDmmnXAXvtXbhxVMM4GlCwy5q4YzydpafNJEB3jR5lXFxhrmy-Eh_fUF3c4NvymvKbmZ7gtFla9R8'
  }
];

export const TIMELINE_EVENTS = [
  {
    year: '1971',
    title: 'Company Foundation',
    chineseTitle: '大城貿易行創立於臺灣台中',
    description: 'Initally founded as Da Cheng Trading in Taichung, focusing on importing high-end automotive lubricants and simple pneumatic valves from Europe.'
  },
  {
    year: '1985',
    title: 'Italian Partnership',
    chineseTitle: '取得義大利 SICE 拆胎機台灣獨家代理',
    description: 'Secured exclusive distribution rights for SICE (Società Italiana Costruzioni Elettromeccaniche) tire changing machinery, pioneering automatic tire fitting in Taiwan.'
  },
  {
    year: '1998',
    title: 'Training Academy Inception',
    chineseTitle: '成立「大城輪胎機械訓練學院」',
    description: 'Established the Da Cheng Academy, introducing the first systematic automotive repair and wheel alignment certification curriculum to local technical colleges.'
  },
  {
    year: '2010',
    title: 'Hofmann 3D Expansion',
    chineseTitle: '取得美國 HOFMANN 四輪定位儀與德國 RAV 代理權',
    description: 'Expanded the machinery solution portfolio by importing ground-breaking 3D imaging camera systems and world-class German balancing setups.'
  },
  {
    year: '2020',
    title: 'Advanced ADAS & Logistics',
    chineseTitle: '台中五期新廠落成、導入 ADAS 校正模組',
    description: 'Built our state-of-the-art diagnostic exhibition facility in Taichung Industrial Park, offering comprehensive ADAS calibration bays and smart logistics.'
  },
  {
    year: '2026',
    title: 'Industrial Era 50+ Jubilee',
    chineseTitle: '精準工控跨越 50 載：全面實現智慧車間與自適應調校',
    description: 'Entering our 55th anniversary, powering over 1,000 professional automotive workshops with networked cloud-diagnostics and certified excellence.'
  }
];
