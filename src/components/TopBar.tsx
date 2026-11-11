import { Phone, Mail, MessageSquare, Download } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface TopBarProps {
  onOpenExport: () => void;
}

export function TopBar({ onOpenExport }: TopBarProps) {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
        
        {/* Left Trust Markers */}
        <div className="flex items-center gap-2 text-[11px] sm:text-xs">
          <span className="bg-blue-900/60 text-blue-300 border border-blue-700/50 px-2 py-0.5 rounded font-semibold">
            ISO 9001:2015
          </span>
          <span className="text-slate-600">·</span>
          <span className="hidden md:inline text-slate-400">
            Plant: Surajpur Site 4, Greater Noida
          </span>
          <span className="hidden md:inline text-slate-600">·</span>
          <span className="hidden sm:inline text-slate-400">
            100M+ Monthly Fasteners
          </span>
        </div>

        {/* Right Contact Points & GitHub Export */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <a
            href={`tel:${COMPANY_DETAILS.phones[0].number}`}
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-slate-400" />
            <span className="font-medium">{COMPANY_DETAILS.phones[0].display}</span>
          </a>

          <a
            href={`mailto:${COMPANY_DETAILS.emails[0].address}`}
            className="hidden sm:flex hover:text-white transition-colors items-center gap-1"
          >
            <Mail className="w-3 h-3 text-slate-400" />
            <span>{COMPANY_DETAILS.emails[0].address}</span>
          </a>

          <a
            href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20ZCJ%20Industrial`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp</span>
          </a>

          <a
            href="/zcj-industrial-website.zip"
            download="zcj-industrial-website.zip"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-0.5 rounded font-bold text-[11px] flex items-center gap-1 transition-colors shadow-xs"
            title="Download complete website zip archive"
          >
            <Download className="w-3 h-3" />
            <span>Download ZIP</span>
          </a>

          <button
            onClick={onOpenExport}
            className="bg-orange-600/90 hover:bg-orange-600 text-white px-2.5 py-0.5 rounded font-semibold text-[11px] flex items-center gap-1 transition-colors shadow-xs"
            title="View and download standalone HTML, CSS, JS files for GitHub"
          >
            <span>GitHub Export</span>
          </button>
        </div>

      </div>
    </div>
  );
}
