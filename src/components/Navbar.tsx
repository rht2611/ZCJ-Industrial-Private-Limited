import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type PageId = 'home' | 'about' | 'products' | 'services' | 'gallery' | 'career' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onRequestQuote: () => void;
}

export function Navbar({ currentPage, onNavigate, onRequestQuote }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'career', label: 'Career' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <a
  href={import.meta.env.BASE_URL}
  onClick={(e) => {
    e.preventDefault();
    handleNavClick('home');
  }}
  className="flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 group focus:outline-none"
>
  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-900 to-blue-700 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
    ZCJ
  </div>
  <div className="flex flex-col">
    <span className="text-base font-extrabold tracking-tight text-slate-900 leading-tight">
      ZCJ Industrial
    </span>
    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
      Private Limited
    </span>
  </div>
</a>

          {/* Zone 2: Navigation Links (7 Pages) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navLinks.map(link => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    isActive ? 'text-slate-950 font-bold' : 'hover:text-blue-600 text-slate-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onRequestQuote}
              className="px-4 py-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs active:translate-y-px"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onRequestQuote}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-orange-600 rounded-md"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map(link => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-slate-100 text-slate-950 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />}
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileOpen(false);
                onRequestQuote();
              }}
              className="w-full py-2.5 text-center text-xs font-bold text-white bg-orange-600 rounded-lg shadow-xs"
            >
              Request Instant Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
