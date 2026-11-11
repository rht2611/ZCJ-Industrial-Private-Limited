import { useState } from 'react';
import { Eye, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/companyData';

interface GalleryPageProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export function GalleryPage({ onOpenLightbox }: GalleryPageProps) {
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'plant', label: 'Plant & Machinery' },
    { id: 'products', label: 'Fasteners & Products' },
    { id: 'lab', label: 'Testing & Quality Lab' }
  ];

  const filteredItems = selectedCat === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === selectedCat);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-100 to-white pt-12 pb-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Visual Tour</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Facility, Machinery &amp; Product Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Take a visual tour inside our Greater Noida manufacturing plant, high-speed multi-die heading lines, and metrology laboratory.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Category Filters */}
        <div className="flex justify-center items-center gap-2 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors ${
                selectedCat === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs hover:shadow-lg transition-all cursor-pointer group h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Category pill */}
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded tracking-wide uppercase">
                {item.categoryLabel}
              </div>

              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-5 opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <div className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-slate-900 transition-colors">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video / Plant Tour Note */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">Interested in a Live Facility Tour?</h4>
            <p className="text-xs text-slate-400">
              We welcome procurement teams, supplier quality engineers (SQEs), and technical buyers for on-site plant audits.
            </p>
          </div>
          <a
            href="tel:+918043828411"
            className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-lg whitespace-nowrap shadow-sm"
          >
            Call to Schedule Audit
          </a>
        </div>

      </div>

    </div>
  );
}
