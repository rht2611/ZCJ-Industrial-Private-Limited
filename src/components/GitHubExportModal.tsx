import { useState } from 'react';
import { Download, Copy, Check, FileCode, ExternalLink, X, Github } from 'lucide-react';

interface GitHubExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GitHubExportModal({ isOpen, onClose }: GitHubExportModalProps) {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const downloadFile = (fileName: string, url: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const copyCode = async () => {
    try {
      let endpoint = '/github-export/index.html';
      if (activeTab === 'css') endpoint = '/github-export/style.css';
      if (activeTab === 'js') endpoint = '/github-export/script.js';

      const res = await fetch(endpoint);
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white leading-tight">
                Standalone Website Files for GitHub
              </h2>
              <p className="text-xs text-slate-300">
                Pure HTML, CSS &amp; JavaScript files ready to push to GitHub / GitHub Pages
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Bar & Download Options */}
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors ${
                activeTab === 'html'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              index.html
            </button>
            <button
              onClick={() => setActiveTab('css')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors ${
                activeTab === 'css'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              style.css
            </button>
            <button
              onClick={() => setActiveTab('js')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors ${
                activeTab === 'js'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              script.js
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyCode}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 text-slate-700 bg-white hover:bg-slate-100 flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied!' : `Copy ${activeTab.toUpperCase()}`}
            </button>

            <button
              onClick={() => {
                if (activeTab === 'html') downloadFile('index.html', '/github-export/index.html');
                if (activeTab === 'css') downloadFile('style.css', '/github-export/style.css');
                if (activeTab === 'js') downloadFile('script.js', '/github-export/script.js');
              }}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-orange-600 text-white hover:bg-orange-700 flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Download Current File
            </button>
          </div>
        </div>

        {/* Quick Instructions & Download All */}
        <div className="px-6 py-3.5 bg-gradient-to-r from-orange-50 via-amber-50 to-blue-50 border-b border-orange-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-slate-900">Complete Production Package Ready:</span>
            <span className="text-slate-600 hidden sm:inline">HTML, CSS, JS, Images &amp; Deployment Guide in one ZIP</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/zcj-industrial-website.zip"
              download="zcj-industrial-website.zip"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-sm flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              Download All in ZIP File (.zip)
            </a>
          </div>
        </div>

        {/* Code Preview Viewer */}
        <div className="flex-1 overflow-auto bg-slate-900 p-4 font-mono text-xs text-slate-200">
          {activeTab === 'html' && (
            <div className="space-y-1">
              <div className="text-slate-400">// Standalone HTML file for ZCJ Industrial Private Limited</div>
              <div className="text-slate-400">// Contains all 7 pages: Home, About Us, Products, Services, Gallery, Career, Contact Us</div>
              <pre className="text-emerald-400 mt-2">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZCJ Industrial Private Limited | Precision Fasteners & Cold Forging</title>
  ... (Full 7-page structured markup with Google Maps embed, Inquiry forms, Lightbox)
  <link rel="stylesheet" href="style.css">
</head>
<body>
  ...
  <script src="script.js"></script>
</body>
</html>`}
              </pre>
              <p className="text-slate-400 text-xs pt-4">
                Click &quot;Download Current File&quot; or &quot;Copy HTML&quot; above to grab the complete production-ready file.
              </p>
            </div>
          )}

          {activeTab === 'css' && (
            <div className="space-y-1">
              <div className="text-slate-400">/* style.css - Clean, responsive, industrial theme without external build tools */</div>
              <pre className="text-cyan-400 mt-2">
{`:root {
  --navy-primary: #0b2545;
  --navy-dark: #07172c;
  --blue-accent: #0284c7;
  --orange-cta: #e05624;
  --bg-page: #ffffff;
  --bg-light: #f8fafc;
  --text-main: #1e293b;
  --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
}
/* Responsive grid, bento layout, mobile navigation, inquiry forms, modal animations */`}
              </pre>
            </div>
          )}

          {activeTab === 'js' && (
            <div className="space-y-1">
              <div className="text-slate-400">// script.js - Vanilla JavaScript powering navigation, catalog filter, modals, and inquiry handlers</div>
              <pre className="text-amber-300 mt-2">
{`function navigateTo(pageId) {
  // Smoothly activates any of the 7 pages:
  // home, about, products, services, gallery, career, contact
}
function filterProducts(category) { ... }
function openEnquiryModal(subject) { ... }
function handleContactSubmit(e) { ... }`}
              </pre>
            </div>
          )}
        </div>

        {/* GitHub Push Guide */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Quick Git Commands:</span>
            <code className="bg-slate-800 px-2 py-1 rounded text-orange-300">git init && git add . && git commit -m &quot;Initial commit&quot;</code>
          </div>
          <a
            href="https://pages.github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 flex items-center gap-1 font-semibold"
          >
            GitHub Pages Documentation <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
}
