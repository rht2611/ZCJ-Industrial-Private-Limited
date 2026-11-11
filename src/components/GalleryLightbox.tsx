import { X } from 'lucide-react';

interface GalleryLightboxProps {
  imageSrc: string | null;
  title: string;
  caption: string;
  isOpen: boolean;
  onClose: () => void;
}

export function GalleryLightbox({ imageSrc, title, caption, isOpen, onClose }: GalleryLightboxProps) {
  if (!isOpen || !imageSrc) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        onClick={e => e.stopPropagation()}
        className="max-w-4xl max-h-[85vh] flex flex-col items-center"
      >
        <img
          src={imageSrc}
          alt={title}
          className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
        />
        <div className="text-center mt-3 text-white">
          <h4 className="text-sm font-bold">{title}</h4>
          <p className="text-xs text-slate-300 mt-0.5">{caption}</p>
        </div>
      </div>
    </div>
  );
}
