import { useState, useEffect } from 'react';

interface ImageLightboxProps {
  images: { src: string; alt: string }[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageLightbox({ images, initialIndex = 0, isOpen, onClose }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-ready"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(0,0,0,0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        className="mfp-content"
        style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: -40,
            right: 0,
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: 30,
            cursor: 'pointer',
            zIndex: 10,
          }}
          aria-label="Close"
        >
          &times;
        </button>
        <img
          src={images[currentIndex]?.src}
          alt={images[currentIndex]?.alt}
          style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain' }}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
              style={{
                position: 'absolute',
                left: -50,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: 40,
                cursor: 'pointer',
              }}
              aria-label="Previous"
            >
              &#8249;
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
              style={{
                position: 'absolute',
                right: -50,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: 40,
                cursor: 'pointer',
              }}
              aria-label="Next"
            >
              &#8250;
            </button>
          </>
        )}
        <div style={{ textAlign: 'center', color: '#ccc', marginTop: 10 }}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
