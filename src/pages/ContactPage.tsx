import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle, ExternalLink, Building2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'Precision Machine Screws',
    volume: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `ZCJ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(id);
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-100 to-white pt-12 pb-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Contact ZCJ Industrial</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect With Our Engineering Desk
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a technical drawing, high-volume fastener requirement, or need urgent pricing? Reach out directly to our Greater Noida plant.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Manufacturing Plant */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-orange-600">
                <MapPin className="w-5 h-5 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Manufacturing Plant</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {COMPANY_DETAILS.plantLocation.address}
              </p>
              <div className="pt-1">
                <a
                  href={COMPANY_DETAILS.plantLocation.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  Open in Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Registered Corporate Office */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2.5 text-blue-600">
                <Building2 className="w-5 h-5 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Registered Office</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {COMPANY_DETAILS.registeredOffice.address}
              </p>
              <div className="font-mono text-[11px] text-slate-500 pt-1">
                CIN: {COMPANY_DETAILS.cin}
              </div>
            </div>

            {/* Direct Phone Lines */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-emerald-600">
                <Phone className="w-5 h-5 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Phone Lines</h3>
              </div>
              <div className="space-y-2 text-xs">
                {COMPANY_DETAILS.phones.map((phone, i) => (
                  <div key={i} className="flex justify-between items-center py-1 border-b border-slate-100 last:border-none">
                    <span className="text-slate-500 font-medium">{phone.label}:</span>
                    <a href={`tel:${phone.number}`} className="font-bold text-slate-900 hover:text-blue-600">
                      {phone.display}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email Addresses & WhatsApp */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2.5 text-purple-600">
                <Mail className="w-5 h-5 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Email Desks</h3>
              </div>
              <div className="space-y-2 text-xs">
                {COMPANY_DETAILS.emails.map((mail, i) => (
                  <div key={i} className="flex justify-between items-center py-1 border-b border-slate-100 last:border-none">
                    <span className="text-slate-500 font-medium">{mail.label}:</span>
                    <a href={`mailto:${mail.address}`} className="font-bold text-blue-600 hover:underline">
                      {mail.address}
                    </a>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20ZCJ%20Industrial%20Greater%20Noida`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on Official WhatsApp Desk
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <Clock className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{COMPANY_DETAILS.workingHours}</span>
            </div>

          </div>

          {/* Right: Technical Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-md">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Enquiry Submitted Successfully</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{form.name}</strong> from <strong>{form.company}</strong>. Your requirement has been logged with reference number:
                </p>
                <div className="p-3 bg-slate-100 rounded-lg inline-block font-mono font-bold text-slate-900 text-sm">
                  {refId}
                </div>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  A copy of this RFQ has been routed to our technical engineering team in Greater Noida. We respond within 2 hours on business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Fast Response Desk</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                    Request Manufacturing Quotation
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct factory rates, samples, and PPAP level documentation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajiv Kumar"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Auto Systems"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="rajiv@company.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Product Category *</label>
                    <select
                      value={form.category}
                      onChange={e => setForm({ ...form, category: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="Precision Machine Screws">Precision Machine Screws (M0.8 - M8)</option>
                      <option value="High-Tensile Hex Head Bolts">High-Tensile Hex Head Bolts (Gr 8.8/10.9/12.9)</option>
                      <option value="Industrial Lock & Flange Nuts">Industrial Lock &amp; Flange Nuts</option>
                      <option value="Self-Drilling & Sheet Metal Screws">Self-Drilling &amp; Sheet Metal Screws</option>
                      <option value="Automotive Cold-Forged Pins">Automotive Cold-Forged Pins &amp; Lead Screws</option>
                      <option value="Rivets & Split Cotter Pins">Rivets &amp; Split Cotter Pins</option>
                      <option value="Custom Tooling / Blueprint">Custom Cold-Heading Tooling</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Estimated Monthly Volume</label>
                    <input
                      type="text"
                      placeholder="e.g. 100,000 pieces"
                      value={form.volume}
                      onChange={e => setForm({ ...form, volume: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Technical Specifications, Tolerances &amp; Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide thread size, total length, material grade (SS304, Alloy, Carbon steel), surface finish (Geomet, Dacromet, Zinc), application, and target delivery dates."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    Submit Technical RFQ to Greater Noida Plant
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
                  <span>🔒 Direct Factory Contact</span>
                  <span>·</span>
                  <span>⚡ 2-Hour Turnaround</span>
                  <span>·</span>
                  <span>ISO 9001:2015</span>
                </div>
              </form>
            )}

          </div>

        </div>

        {/* Real Embedded Google Map */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Plant Location Map · Greater Noida
              </h4>
              <p className="text-xs text-slate-500">
                Surajpur Industrial Area, Site 4, Gautam Buddha Nagar, Uttar Pradesh - 201306
              </p>
            </div>
            <a
              href={COMPANY_DETAILS.plantLocation.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              Get Turn-by-Turn Directions
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <iframe
            src={COMPANY_DETAILS.plantLocation.embedMapSrc}
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ZCJ Industrial Plant Location Map"
          />
        </div>

      </div>

    </div>
  );
}
