import { Phone, Mail, MapPin, ExternalLink, Download, ArrowUpRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenExport: () => void;
}

export function Footer({ onNavigate, onOpenExport }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Incorporation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white font-extrabold text-sm flex items-center justify-center">
                ZCJ
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                ZCJ Industrial Private Limited
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Manufacturer and supplier of high-precision cold forged fasteners, machine screws, high-tensile hex bolts, and automotive pins operating from Surajpur Industrial Area, Greater Noida, India.
            </p>

            <div className="space-y-1.5 font-mono text-[11px] text-slate-400">
              <div><strong className="text-slate-300">CIN:</strong> {COMPANY_DETAILS.cin}</div>
              <div><strong className="text-slate-300">GSTIN:</strong> {COMPANY_DETAILS.gstin}</div>
              <div><strong className="text-slate-300">Incorporated:</strong> {COMPANY_DETAILS.incorporationDate}</div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {COMPANY_DETAILS.certifications.map((cert, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                  {cert.split('(')[0]}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">
                  Products Catalog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  Manufacturing Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors">
                  Plant &amp; Machine Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('career')} className="hover:text-white transition-colors">
                  Careers &amp; Openings
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Fasteners Taxonomy */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Products</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors text-left">
                  Micro &amp; Machine Screws
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors text-left">
                  High-Tensile Hex Head Bolts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors text-left">
                  Industrial Lock &amp; Flange Nuts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors text-left">
                  Self-Drilling &amp; Sheet Metal Screws
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors text-left">
                  Automotive Cold-Forged Pins
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors text-left">
                  Rivets &amp; Split Cotter Pins
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Factory Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Factory Desk</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Surajpur Industrial Area, Site 4, Greater Noida, UP - 201306, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href="tel:+918043828411" className="hover:text-white">+91 80438 28411</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href="mailto:sales@zcjindustrial.com" className="hover:text-white">sales@zcjindustrial.com</a>
              </div>
              <div className="pt-2">
                <a
                  href={COMPANY_DETAILS.indiaMartUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 text-blue-400 hover:text-blue-300 font-semibold border border-slate-800 transition-colors"
                >
                  IndiaMART Storefront
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {currentYear} ZCJ Industrial Private Limited. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">

            <span>·</span>
            <span>Greater Noida, Uttar Pradesh, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
