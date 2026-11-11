/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { CareerPage } from './pages/CareerPage';
import { ContactPage } from './pages/ContactPage';
import { EnquiryModal } from './components/EnquiryModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { JobApplicationModal } from './components/JobApplicationModal';
import { GalleryLightbox } from './components/GalleryLightbox';
import { GitHubExportModal } from './components/GitHubExportModal';
import { Product, JobOpening, GalleryItem, COMPANY_DETAILS } from './data/companyData';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  
  // Modals state
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState('General RFQ');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<{ src: string; title: string; caption: string } | null>(null);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  // Sync with browser hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'products', 'services', 'gallery', 'career', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (subject: string = 'General RFQ') => {
    setEnquirySubject(subject);
    setIsEnquiryOpen(true);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  };

  const handleApplyJob = (job: JobOpening) => {
    setSelectedJob(job);
    setIsJobModalOpen(true);
  };

  const handleOpenLightbox = (item: GalleryItem) => {
    setLightboxData({
      src: item.image,
      title: item.title,
      caption: item.caption
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-orange-600 selection:text-white">
      
      {/* 1. Pre-Header Top Bar */}
      <TopBar onOpenExport={() => setIsExportModalOpen(true)} />

      {/* 2. Main Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenEnquiry('Top Navigation Quote')}
      />

      {/* 3. Main Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onRequestQuote={handleOpenEnquiry}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onRequestQuote={handleOpenEnquiry}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onSelectProduct={handleSelectProduct}
            onRequestQuote={handleOpenEnquiry}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onRequestQuote={handleOpenEnquiry}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {currentPage === 'career' && (
          <CareerPage
            onApply={handleApplyJob}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* 4. Global Site Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenExport={() => setIsExportModalOpen(true)}
      />

      {/* 5. Floating Quick Action Buttons */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <a
          href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20ZCJ%20Industrial`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
        <a
          href={`tel:${COMPANY_DETAILS.phones[0].number}`}
          className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all"
          title="Call Manufacturing Plant"
          aria-label="Call Manufacturing Plant"
        >
          <Phone className="w-5 h-5 text-orange-400" />
        </a>
      </div>

      {/* 6. Universal Modals */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultSubject={enquirySubject}
        defaultProduct={enquirySubject}
      />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={isProductDetailOpen}
        onClose={() => setIsProductDetailOpen(false)}
        onRequestQuote={name => handleOpenEnquiry(`Product: ${name}`)}
      />

      <JobApplicationModal
        job={selectedJob}
        isOpen={isJobModalOpen}
        onClose={() => setIsJobModalOpen(false)}
      />

      <GalleryLightbox
        imageSrc={lightboxData?.src || null}
        title={lightboxData?.title || ''}
        caption={lightboxData?.caption || ''}
        isOpen={!!lightboxData}
        onClose={() => setLightboxData(null)}
      />

      <GitHubExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />

    </div>
  );
}
