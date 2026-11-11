import { ShieldCheck, Award, Factory, CheckCircle2, FileCheck, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { PageId } from '../components/Navbar';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onRequestQuote: (subject?: string) => void;
}

export function AboutPage({ onNavigate, onRequestQuote }: AboutPageProps) {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Page Header */}
      <div className="bg-gradient-to-b from-slate-100 to-white pt-12 pb-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">About ZCJ Industrial</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Precision Cold-Forging &amp; Fastener Engineering
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Incorporated in September 2019, ZCJ Industrial Private Limited combines high-speed cold heading technology with computer-vision sorting to produce zero-defect industrial fasteners.
          </p>
        </div>
      </div>

      {/* Corporate Overview & Plant Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">Founding Story &amp; Facility</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Driven by Quality, Precision &amp; Industrial Reliability
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ZCJ Industrial Private Limited was incorporated on September 19, 2019, establishing a modern manufacturing base in the Surajpur Industrial Area (Site 4, Greater Noida), Gautam Buddha Nagar, Uttar Pradesh.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our engineering infrastructure was purpose-built to address the rising demand from automotive Tier-1s, consumer electronics manufacturers, and heavy engineering OEMs for close-tolerance fasteners with minimal PPM defect rates.
            </p>

            {/* Corporate Data Card */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500 font-semibold">Legal Entity:</span>
                <span className="text-slate-900 font-bold">{COMPANY_DETAILS.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200 font-mono">
                <span className="text-slate-500 font-semibold font-sans">Corporate CIN:</span>
                <span className="text-slate-900 font-bold">{COMPANY_DETAILS.cin}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200 font-mono">
                <span className="text-slate-500 font-semibold font-sans">GSTIN Number:</span>
                <span className="text-slate-900 font-bold">{COMPANY_DETAILS.gstin}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500 font-semibold">Incorporation Date:</span>
                <span className="text-slate-900 font-bold">{COMPANY_DETAILS.incorporationDate}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500 font-semibold">Manufacturing Plant:</span>
                <span className="text-slate-900 font-bold">Greater Noida, UP</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="/ZCJ-Industrial-Private-Limited/images/facility_cold_heading.jpg"
                alt="ZCJ Greater Noida Manufacturing Facility"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="p-4 bg-slate-900 text-white rounded-xl flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-orange-400">Greater Noida Plant:</span> 45+ machines operating across shifts
              </div>
              <button
                onClick={() => onNavigate('gallery')}
                className="text-xs font-semibold underline text-blue-300 hover:text-white"
              >
                View Plant Photos →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Infrastructure Pillars */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Capacity &amp; Technology</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Plant Infrastructure &amp; Tooling Strength
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Scalable cold-heading lines designed for both high-run standard parts and custom blueprint orders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <div className="text-3xl font-extrabold text-blue-700 font-mono">45+</div>
              <h4 className="text-sm font-bold text-slate-900">Production Machines</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Multi-station cold headers, high-speed thread rollers, and automatic washer assembly units.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <div className="text-3xl font-extrabold text-blue-700 font-mono">100M+</div>
              <h4 className="text-sm font-bold text-slate-900">Monthly Capacity</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Capable of handling high-volume monthly releases for major automotive and electronics OEMs.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <div className="text-3xl font-extrabold text-blue-700 font-mono">1,000+ Hr</div>
              <h4 className="text-sm font-bold text-slate-900">Salt Spray Durability</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Advanced Geomet, Dacromet, and Zinc-Nickel surface coatings tested against ASTM B117 salt spray.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <div className="text-3xl font-extrabold text-blue-700 font-mono">&lt;15 PPM</div>
              <h4 className="text-sm font-bold text-slate-900">Defect Target</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Computer vision glass sorters inspecting 100% of critical fasteners before packaging.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Quality Control & Certifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="/ZCJ-Industrial-Private-Limited/images/testing_quality_lab.jpg"
                alt="Metallurgical Metrology Lab"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500 px-2">
              <span>Mitutoyo Optical Profile Projector</span>
              <span>Rockwell &amp; Micro-Vickers Hardness</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <span className="text-xs font-mono font-bold text-orange-600 uppercase">ZERO DEFECT COMMITMENT</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Rigorous In-House Quality Assurance
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every production heat number is subjected to spectrographic raw material validation, torque testing, tensile proof loading, and metallographic grain checks.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-bold">ISO 9001:2015 &amp; ISO 14001:2015 Certified</strong>
                  <span className="text-slate-600">Standardized quality management systems and eco-friendly manufacturing.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-bold">Full PPAP Level 3 Documentation</strong>
                  <span className="text-slate-600">Control plans, Process FMEA, gauge R&amp;R, and dimensional layout inspection.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-bold">RoHS &amp; REACH Compliance</strong>
                  <span className="text-slate-600">Lead-free, hexavalent chromium-free environmentally compliant coatings.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onRequestQuote('Quality Audit & Plant Visit')}
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
              >
                Schedule Plant Audit Visit
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
