import { X, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { Product } from '../data/companyData';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export function ProductDetailModal({ product, isOpen, onClose, onRequestQuote }: ProductDetailModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">{product.categoryLabel}</span>
            <h2 className="text-lg font-bold text-slate-900">{product.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center border border-slate-200 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1 font-semibold text-emerald-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  100% Optical Vision Checked
                </span>
                <span className="font-mono text-slate-500">ISO 9001:2015</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Overview</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Material Options:</span>
                  <span className="text-slate-800 font-semibold">{product.material}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Standard Sizing:</span>
                  <span className="text-slate-800 font-semibold">{product.sizeRange}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Surface Coatings:</span>
                  <span className="text-slate-800 font-semibold">{product.finish}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Compliance Standards:</span>
                  <span className="text-slate-800 font-semibold">{product.standard}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Engineering Specs</h4>
                <div className="grid grid-cols-2 gap-2">
                  {product.keySpecs.map((spec, i) => (
                    <div key={i} className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="text-[11px] text-slate-500">{spec.label}</div>
                      <div className="text-xs font-bold text-slate-800 mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Typical Applications</h4>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, i) => (
                <span key={i} className="px-2.5 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-md border border-blue-100">
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            Samples available for testing &amp; validation
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product.name);
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              Request Quote for this Product
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
