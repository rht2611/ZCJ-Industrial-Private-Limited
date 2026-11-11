import { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, FileText, Check } from 'lucide-react';
import { PRODUCTS_DATA, Product } from '../data/companyData';

interface ProductsPageProps {
  onSelectProduct: (product: Product) => void;
  onRequestQuote: (productName: string) => void;
}

export function ProductsPage({ onSelectProduct, onRequestQuote }: ProductsPageProps) {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Fasteners' },
    { id: 'screws', label: 'Precision Screws' },
    { id: 'bolts', label: 'Industrial Bolts' },
    { id: 'nuts', label: 'Precision Nuts' },
    { id: 'automotive', label: 'Automotive Pins' },
    { id: 'rivets', label: 'Rivets & Pins' }
  ];

  const filteredProducts = PRODUCTS_DATA.filter(prod => {
    const matchesCat = selectedCat === 'all' || prod.category === selectedCat;
    const matchesSearch = 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.standard.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-16">
      
      {/* Page Header */}
      <div className="bg-gradient-to-b from-slate-100 to-white pt-12 pb-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Fastener Catalog</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Industrial Fasteners &amp; Hardware
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Standard and custom cold-headed screws, high-tensile bolts, lock nuts, rivets, and automotive pins fabricated to DIN, ISO, JIS, and ASTM specifications.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-2 border-b border-slate-200">
          
          {/* Interactive Category Segmented Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors ${
                  selectedCat === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by name, DIN standard, or material..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <FileText className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-700">No matching fasteners found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We manufacture custom fasteners directly to customer blueprints. Contact our engineering team for bespoke sizes.
            </p>
            <button
              onClick={() => onRequestQuote('Custom Blueprint Enquiry')}
              className="px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded-lg"
            >
              Request Custom Blueprint Quote
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(prod => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col overflow-hidden group"
              >
                {/* Image Box */}
                <div className="relative h-52 bg-slate-100 overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded tracking-wider uppercase">
                    {prod.categoryLabel}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded font-mono shadow-xs">
                    {prod.standard.split(',')[0]}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {prod.shortDesc}
                    </p>

                    {/* Spec Summary Table */}
                    <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100 space-y-1 text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-slate-500 font-medium">Size Range:</span>
                        <span className="font-semibold text-slate-800">{prod.sizeRange.split('(')[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 font-medium">Material:</span>
                        <span className="font-semibold text-slate-800">{prod.material.split(',')[0]}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 font-medium">Finish:</span>
                        <span className="font-semibold text-slate-800">{prod.finish.split(',')[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center gap-2 border-t border-slate-100">
                    <button
                      onClick={() => onRequestQuote(prod.name)}
                      className="flex-1 py-2 px-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
                    >
                      Request Quote
                    </button>
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-lg transition-colors border border-slate-200"
                    >
                      Specs
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Custom Fastener Note */}
        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-blue-950">Require Custom Head Styles, Non-Standard Pitches, or Specialized Alloys?</h4>
            <p className="text-xs text-blue-800">
              Our tool room develops custom cold-heading punches and dies within 10 to 14 days. Send your 2D CAD / 3D STEP drawings.
            </p>
          </div>
          <button
            onClick={() => onRequestQuote('Custom Fastener Drawing Review')}
            className="px-5 py-2.5 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs rounded-lg whitespace-nowrap shadow-sm"
          >
            Submit Custom Drawing
          </button>
        </div>

      </div>

    </div>
  );
}
