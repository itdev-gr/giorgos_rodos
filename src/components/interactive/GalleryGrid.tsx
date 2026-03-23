import { useState } from 'react';
import ImageLightbox from './ImageLightbox';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

// Returns grid placement for each image in a repeating 10-image mosaic block
function getSpan(indexInBlock: number): { colSpan: number; rowSpan: number } {
  switch (indexInBlock) {
    case 0: case 1: case 2: case 3:
      return { colSpan: 1, rowSpan: 1 }; // 4 small in a row
    case 4: case 5:
      return { colSpan: 2, rowSpan: 2 }; // 2 medium/tall
    case 6:
      return { colSpan: 2, rowSpan: 2 }; // 1 large left
    case 7: case 8:
      return { colSpan: 2, rowSpan: 1 }; // 2 stacked right of large
    case 9:
      return { colSpan: 4, rowSpan: 1 }; // full-width panoramic
    default:
      return { colSpan: 1, rowSpan: 1 };
  }
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="gallery-mosaic">
        {images.map((image, index) => {
          const indexInBlock = index % 10;
          const { colSpan, rowSpan } = getSpan(indexInBlock);

          return (
            <div
              className="gallery-mosaic-item"
              key={index}
              style={{
                gridColumn: `span ${colSpan}`,
                gridRow: `span ${rowSpan}`,
              }}
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          );
        })}
      </div>

      <ImageLightbox
        images={images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
