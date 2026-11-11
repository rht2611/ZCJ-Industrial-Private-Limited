import { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Phone, Calculator, Check, ArrowUpRight } from 'lucide-react';
import { COMPANY_DETAILS, CLIENT_SECTORS, TESTIMONIALS } from '../data/companyData';
import { PageId } from '../components/Navbar';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: (subject?: string) => void;
}

export function HomePage({ onNavigate, onRequestQuote }: HomePageProps) {
  // Mini Estimator State
  const [fastenerType, setFastenerType] = useState('Machine Screws');
  const [material, setMaterial] = useState('Stainless Steel 304');
  const [volume, setVolume] = useState('50000');
  const [estimatedCost, setEstimatedCost] = useState<{ min: number; max: number; leadTime: string } | null>(null);

  const calculateEstimate = () => {
    const qty = parseInt(volume) || 10000;
    let baseRate = 0.45; // INR per piece base
    if (fastenerType === 'High-Tensile Bolts') baseRate = 2.80;
    if (fastenerType === 'Industrial Lock Nuts') baseRate = 1.20;
    if (fastenerType === 'Automotive Pins') baseRate = 3.50;
    if (material.includes('Stainless Steel')) baseRate *= 1.6;
    if (material.includes('Alloy')) baseRate *= 1.4;

    const total = qty * baseRate;
    setEstimatedCost({
      min: Math.round(total * 0.95),
      max: Math.round(total * 1.08),
      leadTime: qty > 100000 ? '14 to 18 Business Days' : '7 to 10 Business Days'
    });
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative pt-8 sm:pt-14 pb-8 overflow-hidden bg-gradient-to-b from-slate-100/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-orange-600" />
                Precision Cold-Forging &amp; Fastener Manufacturing
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Ultra-Precision Fasteners &amp; Cold-Forged Hardware
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                ZCJ Industrial Private Limited manufactures high-volume machine screws, high-tensile hex bolts, lock nuts, and custom automotive fasteners with ±0.01mm tolerance at our Greater Noida plant.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onRequestQuote('Hero Quick RFQ')}
                  className="px-6 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  Request Fast Factory Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('products')}
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm rounded-xl border border-slate-300 transition-colors shadow-xs"
                >
                  Explore Catalog
                </button>
              </div>

              {/* 4 Quantitative Proof Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono">100M+</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase">Monthly Capacity</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono">±0.01mm</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase">Micro Tolerance</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono">&lt;15 PPM</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase">Optical Sorting</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono">ISO 9001</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase">Quality Certified</div>
                </div>
              </div>
            </div>

            {/* Right Focal Media */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img
                  src="/src/assets/images/hero_industrial_fasteners_1794386612750.jpg"
                  alt="Precision Fasteners by ZCJ Industrial"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Live Manufacturing Facility
                    </div>
                    <div className="text-sm font-bold">Surajpur Industrial Area Site 4, Greater Noida</div>
                    <p className="text-xs text-slate-300">Automated cold heading, thread rolling &amp; optical sorting</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. High-Conversion RFQ Strip */}
      <section className="bg-slate-900 text-white py-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Looking for OEM Bulk Fastener Pricing or Custom Tooling?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Direct manufacturing contracts with PPAP documentation, test certificates, and JIT Kanban deliveries.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestQuote('Direct RFQ Strip')}
                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors shadow-sm"
              >
                Send Drawings / RFQ
              </button>
              <a
                href={`tel:${COMPANY_DETAILS.phones[0].number}`}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-lg border border-slate-700 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                Call Plant: {COMPANY_DETAILS.phones[0].display}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Manufacturing Prowess</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered for High-Stress Industrial Assemblies
          </h2>
          <p className="text-sm text-slate-600">
            Advanced multi-station cold heading machinery combined with automated optical glass sorters and accredited in-house testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Cold Heading (Large Span) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 space-y-4">
              <span className="text-xs font-mono font-bold text-orange-600">01. PRIMARY FORMING</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Multi-Station Cold Forging &amp; Heading
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our 3-die and 4-die cold headers produce up to 300 pieces per minute. Cold forming follows natural metal grain orientation, boosting shear and tensile fatigue durability by 25% without the material waste of turning.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  Wire processing diameters from 1.0mm to 16.0mm
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  Near-zero material scrap rate ensures competitive cost
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  In-line automated thread rolling and washer crimping
                </li>
              </ul>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                >
                  View Facility Technology →
                </button>
              </div>
            </div>
            <div className="w-full md:w-64 h-52 rounded-xl overflow-hidden shrink-0 border border-slate-100">
              <img
                src="/src/assets/images/facility_cold_heading_1794386614185.jpg"
                alt="Cold Heading Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 2: Optical Sorting */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-orange-600">02. AUTOMATION</span>
              <h3 className="text-xl font-bold text-slate-900">
                100% Optical Glass Sorters
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rotary glass disc inspection machines scan 360° at 800 parts/min for thread pitch, total length, head cracks, and drive depth.
              </p>
            </div>
            <div className="space-y-2 pt-4 border-t border-slate-100 text-xs">
              <div className="flex justify-between py-1">
                <span className="text-slate-500 font-medium">Target Defect Rate:</span>
                <span className="font-mono font-bold text-emerald-700">&lt;15 PPM</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500 font-medium">Sorting Speed:</span>
                <span className="font-mono font-bold text-slate-800">800 pcs / min</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500 font-medium">Inspection Sensors:</span>
                <span className="font-bold text-slate-800">4-Camera Laser + Vision</span>
              </div>
            </div>
          </div>

          {/* Card 3: Quality Lab */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-orange-600">03. METROLOGY</span>
              <h3 className="text-xl font-bold text-slate-900">
                In-House Metallurgical Lab
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mitutoyo profile projector, micro-Vickers hardness tester, UTM tensile testing, and 1,000-hour salt spray chambers provide verified 3.1 inspection certificates.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden h-36 border border-slate-100">
              <img
                src="/src/assets/images/testing_quality_lab_1794386614591.jpg"
                alt="Quality Testing Lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 4: Automotive & Electronics Fasteners (Large Span) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-64 h-52 rounded-xl overflow-hidden shrink-0 border border-slate-100 order-2 md:order-1">
              <img
                src="/src/assets/images/automotive_fasteners_line_1794386613252.jpg"
                alt="Automotive Fasteners"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-4 order-1 md:order-2">
              <span className="text-xs font-mono font-bold text-orange-600">04. SPECIALTY FASTENERS</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Automotive &amp; Electronic Hardware
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From micro M0.8 screws for smartphone/appliance PCBs to Grade 10.9 &amp; 12.9 flange bolts and cold-forged stepped pins for automotive Tier-1 assemblies.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 bg-slate-100 rounded-md text-slate-700 font-semibold">PPAP Level 3</span>
                <span className="px-2.5 py-1 bg-slate-100 rounded-md text-slate-700 font-semibold">RoHS Compliant</span>
                <span className="px-2.5 py-1 bg-slate-100 rounded-md text-slate-700 font-semibold">1,000hr Salt Spray</span>
                <span className="px-2.5 py-1 bg-slate-100 rounded-md text-slate-700 font-semibold">Geomet / Dacromet</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Browse Products
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Interactive Quick Cost & Lead-Time Estimator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-800/60 rounded-full text-xs font-semibold text-blue-300">
                <Calculator className="w-3.5 h-3.5" />
                Interactive Estimator
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Indicative Production Cost Calculator
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Select your required fastener category, raw material grade, and production batch volume to calculate an instant cost estimate and lead time.
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Includes standard cold heading &amp; thread rolling
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Exact quotation confirmed upon engineering drawing review
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Fastener Category</label>
                  <select
                    value={fastenerType}
                    onChange={e => setFastenerType(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-400"
                  >
                    <option value="Machine Screws">Precision Machine Screws</option>
                    <option value="High-Tensile Bolts">High-Tensile Hex Bolts</option>
                    <option value="Industrial Lock Nuts">Industrial Lock Nuts</option>
                    <option value="Automotive Pins">Automotive Cold-Forged Pins</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Material Grade</label>
                  <select
                    value={material}
                    onChange={e => setMaterial(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-400"
                  >
                    <option value="Carbon Steel 1018">Carbon Steel (EN8D / 1018)</option>
                    <option value="Stainless Steel 304">Stainless Steel SS304</option>
                    <option value="Stainless Steel 316">Stainless Steel SS316</option>
                    <option value="Alloy Steel SCM435">Alloy Steel (SCM435 Gr 10.9)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1 text-xs">
                  Monthly Volume Requirement (Pieces): <span className="text-orange-400 font-mono font-bold">{parseInt(volume).toLocaleString()} pcs</span>
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="10000"
                  value={volume}
                  onChange={e => setVolume(e.target.value)}
                  className="w-full accent-orange-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>10,000 pcs</span>
                  <span>100,000 pcs</span>
                  <span>250,000 pcs</span>
                  <span>500,000+ pcs</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={calculateEstimate}
                  className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-lg transition-colors shadow-sm"
                >
                  Calculate Indicative Quotation
                </button>
              </div>

              {estimatedCost && (
                <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-white/10 space-y-2 animate-fade-in text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Estimated Batch Cost:</span>
                    <span className="text-base font-bold text-emerald-400 font-mono">
                      ₹{estimatedCost.min.toLocaleString()} – ₹{estimatedCost.max.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">Production Lead Time:</span>
                    <span className="text-white font-semibold">{estimatedCost.leadTime}</span>
                  </div>
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => onRequestQuote(`Calculated Quote: ${fastenerType} (${volume} pcs)`)}
                      className="text-xs text-orange-400 hover:text-orange-300 font-bold underline"
                    >
                      Formalize Official Quotation →
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 5. Client Sectors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Diverse Markets</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Industries Powered by ZCJ Fasteners
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Engineered to endure severe vibration, dynamic mechanical cycles, and aggressive corrosion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_SECTORS.map((sector, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all group"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {sector.name}
              </div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {sector.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">Verified Proof</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Trusted by Sourcing Heads &amp; Plant Directors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex flex-col justify-between space-y-4"
              >
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  &quot;{t.quote}&quot;
                </p>
                <div className="pt-4 border-t border-slate-700/80">
                  <div className="text-xs font-bold text-white">{t.author}</div>
                  <div className="text-[11px] text-slate-400">{t.role} · {t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Ready to Upgrade Your Fastener Supply Chain?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Schedule a technical visit to our Greater Noida facility or request sample evaluation kits.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onRequestQuote('Footer Conversion Banner')}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm"
            >
              Request Quote
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl border border-slate-300 transition-colors"
            >
              Contact Plant Desk
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
