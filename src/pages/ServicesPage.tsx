import { Wrench, Eye, Cpu, Shield, CheckCircle, Truck, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';

interface ServicesPageProps {
  onRequestQuote: (serviceName: string) => void;
}

export function ServicesPage({ onRequestQuote }: ServicesPageProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wrench': return <Wrench className="w-5 h-5 text-blue-600" />;
      case 'Eye': return <Eye className="w-5 h-5 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-600" />;
      case 'Shield': return <Shield className="w-5 h-5 text-amber-600" />;
      case 'Truck': return <Truck className="w-5 h-5 text-indigo-600" />;
      default: return <CheckCircle className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-100 to-white pt-12 pb-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Manufacturing Capabilities</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive OEM/ODM Engineering
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From prototype tool design to high-volume multi-die cold heading, precision secondary CNC operations, and automated optical sorting.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Capabilities list */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Capabilities</h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-orange-500 font-bold mt-0.5">▸</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Equipment Fleet */}
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-[11px] space-y-1">
                  <span className="font-bold text-slate-500">Equipment Fleet:</span>
                  <div className="text-slate-800 font-medium">
                    {service.equipment.join(' · ')}
                  </div>
                </div>
              </div>

              {/* Bottom Meta & Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Typical Lead Time: <strong className="text-slate-800">{service.leadTime}</strong>
                </span>
                <button
                  onClick={() => onRequestQuote(`Service Inquiry: ${service.title}`)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  Inquire for Contract
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 5-Step Process Workflow */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Quality Process</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Standardized Production Workflow
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Controlled phase-gate manufacturing methodology ensuring zero PPM defect shipments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <span className="text-2xl font-extrabold text-orange-600 font-mono">01</span>
              <h4 className="text-xs font-bold text-slate-900">RFQ &amp; DFM Review</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Engineering feasibility, raw material wire grade selection, and cold forging tolerance analysis.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <span className="text-2xl font-extrabold text-orange-600 font-mono">02</span>
              <h4 className="text-xs font-bold text-slate-900">Tooling &amp; PPAP</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Carbide die fabrication, trial heading sample run, and submission of PPAP Level 3 documentation.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <span className="text-2xl font-extrabold text-orange-600 font-mono">03</span>
              <h4 className="text-xs font-bold text-slate-900">High-Speed Cold Forging</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Continuous automated cold heading and flat-die thread rolling with in-process SPC monitoring.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <span className="text-2xl font-extrabold text-orange-600 font-mono">04</span>
              <h4 className="text-xs font-bold text-slate-900">Plating &amp; Baking</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                RoHS compliant zinc-nickel, Dacromet, or Geomet with post-plating hydrogen de-embrittlement baking.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <span className="text-2xl font-extrabold text-orange-600 font-mono">05</span>
              <h4 className="text-xs font-bold text-slate-900">100% Optical Sorting</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                360° laser camera inspection for threads and recess depth before automated carton packaging.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
