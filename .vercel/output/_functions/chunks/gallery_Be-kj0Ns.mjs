import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { $ as $$BaseLayout, a as $$Section1Header, b as $$FooterFour } from './FooterFour_Cjp_m9da.mjs';
import { $ as $$Breadcrumb } from './Breadcrumb_BA65XC_9.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

function ImageLightbox({ images, initialIndex = 0, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length, onClose]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-ready",
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(0,0,0,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      onClick: onClose,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "mfp-content",
          style: { position: "relative", maxWidth: "90vw", maxHeight: "90vh" },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onClose,
                style: {
                  position: "absolute",
                  top: -40,
                  right: 0,
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: 30,
                  cursor: "pointer",
                  zIndex: 10
                },
                "aria-label": "Close",
                children: "×"
              }
            ),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: images[currentIndex]?.src,
                alt: images[currentIndex]?.alt || "",
                style: { maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain" }
              }
            ),
            images.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length),
                  style: {
                    position: "absolute",
                    left: -50,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "#fff",
                    fontSize: 40,
                    cursor: "pointer"
                  },
                  "aria-label": "Previous",
                  children: "‹"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setCurrentIndex((prev) => (prev + 1) % images.length),
                  style: {
                    position: "absolute",
                    right: -50,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "#fff",
                    fontSize: 40,
                    cursor: "pointer"
                  },
                  "aria-label": "Next",
                  children: "›"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", color: "#ccc", marginTop: 10 }, children: [
              currentIndex + 1,
              " / ",
              images.length
            ] })
          ]
        }
      )
    }
  );
}

function getSpan(indexInBlock) {
  switch (indexInBlock) {
    case 0:
    case 1:
    case 2:
    case 3:
      return { colSpan: 1, rowSpan: 1 };
    // 4 small in a row
    case 4:
    case 5:
      return { colSpan: 2, rowSpan: 2 };
    // 2 medium/tall
    case 6:
      return { colSpan: 2, rowSpan: 2 };
    // 1 large left
    case 7:
    case 8:
      return { colSpan: 2, rowSpan: 1 };
    // 2 stacked right of large
    case 9:
      return { colSpan: 4, rowSpan: 1 };
    // full-width panoramic
    default:
      return { colSpan: 1, rowSpan: 1 };
  }
}
function GalleryGrid({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "gallery-mosaic", children: images.map((image, index) => {
      const indexInBlock = index % 10;
      const { colSpan, rowSpan } = getSpan(indexInBlock);
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: "gallery-mosaic-item",
          style: {
            gridColumn: `span ${colSpan}`,
            gridRow: `span ${rowSpan}`
          },
          onClick: () => openLightbox(index),
          children: /* @__PURE__ */ jsx("img", { src: image.src, alt: image.alt, loading: "lazy" })
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsx(
      ImageLightbox,
      {
        images,
        initialIndex: lightboxIndex,
        isOpen: lightboxOpen,
        onClose: () => setLightboxOpen(false)
      }
    )
  ] });
}

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const galleryImages = [
    { src: "/assets/img/gallery/yacht/yacht-exterior-1.jpg", alt: "Luxury yacht on open water" },
    { src: "/assets/img/gallery/yacht/yacht-interior-1.jpg", alt: "Elegant yacht interior" },
    { src: "/assets/img/gallery/yacht/sailing-sunset-1.jpg", alt: "Sailing at sunset" },
    { src: "/assets/img/gallery/yacht/greek-island-1.jpg", alt: "Greek island coastline" },
    { src: "/assets/img/gallery/yacht/yacht-luxury-1.jpg", alt: "Luxury yacht in Rhodes" },
    { src: "/assets/img/gallery/yacht/crystal-water-1.jpg", alt: "Crystal clear waters" },
    { src: "/assets/img/gallery/yacht/yacht-deck-1.jpg", alt: "Yacht deck view" },
    { src: "/assets/img/gallery/yacht/sunset-cruise-1.jpg", alt: "Sunset cruise" },
    { src: "/assets/img/gallery/yacht/greek-coast-1.jpg", alt: "Greek coastline" },
    { src: "/assets/img/gallery/yacht/yacht-sailing-1.jpg", alt: "Yacht under sail" },
    { src: "/assets/img/cruises/greco_sunset3.jpg", alt: "Sunset cruise in Rhodes" },
    { src: "/assets/img/gallery/yacht/yacht-luxury-1.jpg", alt: "Luxury yacht experience" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Gallery - Rhodes Boat Tours", "data-astro-cid-sahthylw": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Section1Header, { "data-astro-cid-sahthylw": true })} ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "title": "Gallery", "data-astro-cid-sahthylw": true })} ${maybeRenderHead()}<section class="gallery-intro" data-astro-cid-sahthylw> <div class="container text-center" data-astro-cid-sahthylw> <h2 class="sec-title" data-astro-cid-sahthylw>Moments from the Water</h2> <p class="gallery-intro__text" data-astro-cid-sahthylw>A glimpse of what a day with Rhodes Boat Tours looks like — the coastlines, the boats, the light, and the sea.</p> </div> </section> <section class="gallery-section" data-astro-cid-sahthylw> <div class="gallery-wide-container" data-astro-cid-sahthylw> ${renderComponent($$result2, "GalleryGrid", GalleryGrid, { "images": galleryImages, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/components/interactive/GalleryGrid", "client:component-export": "default", "data-astro-cid-sahthylw": true })} </div> </section> ${renderComponent($$result2, "FooterFour", $$FooterFour, { "data-astro-cid-sahthylw": true })} ` })}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/gallery.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
