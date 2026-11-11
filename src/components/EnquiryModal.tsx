import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Building2, User, Phone, Mail, FileText } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
  defaultProduct?: string;
}

export function EnquiryModal({ isOpen, onClose, defaultSubject = 'General RFQ', defaultProduct = '' }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: defaultProduct || defaultSubject,
    volume: '',
    specs: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (defaultProduct) {
      setFormData(prev => ({ ...prev, product: defaultProduct }));
    } else if (defaultSubject) {
      setFormData(prev => ({ ...prev, product: defaultSubject }));
    }
    setSubmitted(false);
  }, [defaultSubject, defaultProduct, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `ZCJ-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-slate-200 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Enquiry Received</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Thank you, <strong>{formData.name}</strong>. Your RFQ has been logged with reference number:
            </p>
            <div className="p-3 bg-slate-100 rounded-lg inline-block font-mono font-bold text-slate-800 text-sm">
              {referenceId}
            </div>
            <p className="text-xs text-slate-500">
              Our engineering sales desk in Greater Noida will contact you with technical feasibility and pricing within 2 business hours.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800 transition-colors"
              >
                Done
              </button>
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hi%20ZCJ%20Industrial,%20I%20just%20submitted%20RFQ%20ref%20${referenceId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold text-sm hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
              >
                Track on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Fast Quotation Request</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Get Factory-Direct Pricing</h3>
              <p className="text-xs text-slate-500 mt-1">
                Direct manufacturing rates for OEMs, automotive Tier-1s, and industrial buyers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Entity *</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. AutoTech Components"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Product Category / Item *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. M4 Pan Head Screws, Gr 10.9 Bolts"
                    value={formData.product}
                    onChange={e => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Monthly Volume Target</label>
                  <input
                    type="text"
                    placeholder="e.g. 50,000 pcs"
                    value={formData.volume}
                    onChange={e => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Technical Specifications / Standard (DIN/ISO) / Material *
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <textarea
                    rows={3}
                    required
                    placeholder="Specify dimensions (thread, length, pitch), material grade (SS304, Gr 8.8, 10.9), surface coating, and drawing notes."
                    value={formData.specs}
                    onChange={e => setFormData({ ...formData, specs: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Submit Manufacturing RFQ
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                <span>🔒 Confidential RFQ</span>
                <span>·</span>
                <span>⚡ 2-Hour Response</span>
                <span>·</span>
                <span>ISO 9001:2015</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
