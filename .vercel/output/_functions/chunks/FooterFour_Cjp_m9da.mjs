import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { a2 as addAttribute, b5 as renderHead, b6 as renderSlot, L as renderTemplate, x as maybeRenderHead } from './sequence_DctpTcVe.mjs';
import 'clsx';
import { r as renderScript } from './script_BFPKfW-S.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';

const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Rhodes Boat Tours", description = "Luxury yacht charters and boat rentals in Rhodes, Greece. Explore the Dodecanese islands with bespoke sailing experiences." } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/assets/img/logo.svg"><title>${title}</title><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet"><!-- Bootstrap --><link rel="stylesheet" href="/assets/css/bootstrap.min.css"><!-- FontAwesome --><link rel="stylesheet" href="/assets/css/fontawesome.min.css"><!-- Magnific Popup --><link rel="stylesheet" href="/assets/css/magnific-popup.min.css"><!-- Swiper --><link rel="stylesheet" href="/assets/css/swiper-bundle.min.css"><!-- Theme CSS (must be AFTER Bootstrap) --><link rel="stylesheet" href="/assets/css/style.css">${renderHead()}</head> <body data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} <!-- GSAP --> ${renderScript($$result, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/layouts/BaseLayout.astro", void 0);

function MobileMenu({ isOpen, onClose }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRefs = useRef({});
  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };
  useEffect(() => {
    Object.keys(menuRefs.current).forEach((key) => {
      const submenu = menuRefs.current[Number(key)];
      if (submenu) {
        submenu.style.height = activeMenu === Number(key) ? `${submenu.scrollHeight}px` : "0px";
      }
    });
  }, [activeMenu]);
  const menuItems = [
    {
      id: 1,
      label: "Home",
      href: "/"
    },
    { id: 0, label: "About Us", href: "/about" },
    {
      id: 3,
      label: "Service",
      children: [
        { label: "All Services", href: "/service" },
        { label: "Rhodes Rent a Boat", href: "/service/rhodes-rent-a-boat" },
        { label: "Rhodes Boat Tours", href: "/service/rodos-boat-tours" },
        { label: "Rhodes Boat Trips", href: "/service/rhodes-boat-trips" },
        { label: "Rhodes Boat Cruises", href: "/service/rodos-boat-cruises" },
        { label: "Rhodes Catamaran Tours", href: "/service/rhodes-catamaran-tours" },
        { label: "Rhodes Sailing Trips", href: "/service/rhodes-sailing-trips" },
        { label: "Rhodes Yacht Charter", href: "/service/rodos-charter" },
        { label: "MICE & Incentive", href: "/service/rhodes-mice-events" },
        { label: "Rhodes Tender Boat", href: "/service/rodos-tender-boat" },
        { label: "Rhodes Transfers", href: "/service/rhodes-transfers" }
      ]
    },
    { id: 5, label: "Best Boat Tours in Rhodes", href: "/things-to-do" },
    { id: 6, label: "Gallery", href: "/gallery" },
    {
      id: 7,
      label: "Blog",
      children: [
        { label: "Blog", href: "/blog" },
        { label: "Blog Details", href: "/blog/1" }
      ]
    },
    { id: 0, label: "FAQ", href: "/faq" },
    { id: 0, label: "Contact Us", href: "/contact" }
  ];
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `th-menu-wrapper onepage-nav ${isOpen ? "th-body-visible" : ""}`,
      style: { visibility: isOpen ? "visible" : "hidden" },
      children: /* @__PURE__ */ jsxs("div", { className: "th-menu-area text-center", children: [
        /* @__PURE__ */ jsx("button", { className: "th-menu-toggle", onClick: () => {
          const wrapper = document.querySelector(".th-menu-wrapper");
          if (wrapper) {
            wrapper.classList.remove("th-body-visible");
            wrapper.style.visibility = "hidden";
          }
          if (typeof onClose === "function") onClose();
        }, "aria-label": "Close", children: /* @__PURE__ */ jsx("i", { className: "fal fa-times" }) }),
        /* @__PURE__ */ jsx("div", { className: "mobile-logo", children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: "/assets/img/logo2.svg", alt: "Rhodes Boat Tours" }) }) }),
        /* @__PURE__ */ jsx("div", { className: "th-mobile-menu", children: /* @__PURE__ */ jsx("ul", { children: menuItems.map(
          (item, idx) => item.children ? /* @__PURE__ */ jsxs(
            "li",
            {
              className: `menu-item-has-children ${item.id === 1 ? "mega-menu-wrap" : ""} th-item-has-children ${activeMenu === item.id ? "th-active" : ""}`,
              children: [
                /* @__PURE__ */ jsx("a", { href: "#", onClick: (e) => {
                  e.preventDefault();
                  toggleMenu(item.id);
                }, children: item.label }),
                /* @__PURE__ */ jsx(
                  "ul",
                  {
                    ref: (el) => {
                      menuRefs.current[item.id] = el;
                    },
                    className: "th-submenu",
                    style: { height: "0px", overflow: "hidden", transition: "height 0.3s ease-in-out" },
                    children: item.children.map((child, cidx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: child.href, children: child.label }) }, cidx))
                  }
                )
              ]
            },
            idx
          ) : /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: item.href, children: item.label }) }, idx)
        ) }) })
      ] })
    }
  );
}

const $$Section1Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="th-header header-layout1" id="header-one" data-astro-cid-inyvsf3h> <div class="sticky-wrapper" id="sticky-wrapper" data-astro-cid-inyvsf3h> <div class="menu-area" data-astro-cid-inyvsf3h> <div class="container th-container" data-astro-cid-inyvsf3h> <div class="row align-items-center justify-content-between" data-astro-cid-inyvsf3h> <div class="col-auto" data-astro-cid-inyvsf3h> <div class="header-logo" data-astro-cid-inyvsf3h> <a href="/" data-astro-cid-inyvsf3h> <img src="/assets/img/logo.svg" alt="Rhodes Boat Tours" data-astro-cid-inyvsf3h> </a> </div> </div> <div class="col-auto me-xl-auto" data-astro-cid-inyvsf3h> <nav class="main-menu d-none d-xl-inline-block" data-astro-cid-inyvsf3h> <ul data-astro-cid-inyvsf3h> <li data-astro-cid-inyvsf3h> <a class="active" href="/" data-astro-cid-inyvsf3h>Home</a> </li> <li data-astro-cid-inyvsf3h><a href="/about" data-astro-cid-inyvsf3h>About Us</a></li> <li class="menu-item-has-children" data-astro-cid-inyvsf3h> <a href="/service" data-astro-cid-inyvsf3h>Service</a> <ul class="sub-menu" data-astro-cid-inyvsf3h> <li data-astro-cid-inyvsf3h><a href="/service/rhodes-rent-a-boat" data-astro-cid-inyvsf3h>Rhodes Rent a Boat</a></li> <li data-astro-cid-inyvsf3h><a href="/service/rodos-boat-tours" data-astro-cid-inyvsf3h>Rhodes Boat Tours</a></li> <li data-astro-cid-inyvsf3h><a href="/service/rhodes-boat-trips" data-astro-cid-inyvsf3h>Rhodes Boat Trips</a></li> <li data-astro-cid-inyvsf3h><a href="/service/rodos-boat-cruises" data-astro-cid-inyvsf3h>Rhodes Boat Cruises</a></li> <li data-astro-cid-inyvsf3h><a href="/service/rhodes-catamaran-tours" data-astro-cid-inyvsf3h>Rhodes Catamaran Tours</a></li> <li data-astro-cid-inyvsf3h><a href="/service/rhodes-sailing-trips" data-astro-cid-inyvsf3h>Rhodes Sailing Trips</a></li> <li data-astro-cid-inyvsf3h><a href="/service/rodos-charter" data-astro-cid-inyvsf3h>Rhodes Yacht Charter</a></li> <li data-astro-cid-inyvsf3h><a href="/service/rhodes-mice-events" data-astro-cid-inyvsf3h>MICE & Incentive</a></li> <li data-astro-cid-inyvsf3h><a href="/service/rodos-tender-boat" data-astro-cid-inyvsf3h>Rhodes Tender Boat</a></li> <li data-astro-cid-inyvsf3h><a href="/service/rhodes-transfers" data-astro-cid-inyvsf3h>Rhodes Transfers</a></li> </ul> </li> <li data-astro-cid-inyvsf3h><a href="/things-to-do" data-astro-cid-inyvsf3h>Best Boat Tours in Rhodes</a></li> <li data-astro-cid-inyvsf3h><a href="/gallery" data-astro-cid-inyvsf3h>Gallery</a></li> </ul> </nav> <button type="button" class="th-menu-toggle d-block d-xl-none" id="mobile-menu-trigger" data-astro-cid-inyvsf3h> <i class="far fa-bars" data-astro-cid-inyvsf3h></i> </button> </div> <div class="col-auto d-none d-xl-block" data-astro-cid-inyvsf3h> <div class="header-button" data-astro-cid-inyvsf3h> <a href="/contact" class="luxury-cta" data-astro-cid-inyvsf3h>Enquire</a> </div> </div> </div> </div> </div> </div> </header> <div id="mobile-menu-container" data-astro-cid-inyvsf3h> ${renderComponent($$result, "MobileMenu", MobileMenu, { "client:load": true, "isOpen": false, "onClose": (() => {
  }), "client:component-hydration": "load", "client:component-path": "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/components/interactive/MobileMenu", "client:component-export": "default", "data-astro-cid-inyvsf3h": true })} </div>  ${renderScript($$result, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/home-one/Section1-Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/home-one/Section1-Header.astro", void 0);

const $$FooterFour = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" style="background: #0e2f38; color: rgba(255,255,255,0.7); padding: 64px 0 0;" data-astro-cid-3hiea4dn> <div class="container" data-astro-cid-3hiea4dn> <div style="display: grid; grid-template-columns: 1.2fr 2fr 1fr; gap: 48px; padding-bottom: 48px; border-bottom: 1px solid rgba(255,255,255,0.08);" class="ft-main" data-astro-cid-3hiea4dn> <!-- Brand --> <div class="ft-brand" data-astro-cid-3hiea4dn> <a href="/" data-astro-cid-3hiea4dn> <img src="/assets/img/logo-white.svg" alt="Rhodes Boat Tours" style="height: 40px; margin-bottom: 16px;" data-astro-cid-3hiea4dn> </a> <p class="ft-tagline" data-astro-cid-3hiea4dn>Boat experiences in Rhodes since 2009.</p> <div class="ft-social" data-astro-cid-3hiea4dn> <a href="https://www.instagram.com/" aria-label="Instagram" data-astro-cid-3hiea4dn><i class="fab fa-instagram" data-astro-cid-3hiea4dn></i></a> <a href="https://www.facebook.com/" aria-label="Facebook" data-astro-cid-3hiea4dn><i class="fab fa-facebook-f" data-astro-cid-3hiea4dn></i></a> <a href="https://www.whatsapp.com/" aria-label="WhatsApp" data-astro-cid-3hiea4dn><i class="fab fa-whatsapp" data-astro-cid-3hiea4dn></i></a> </div> </div> <!-- Links --> <div style="display: flex; gap: 48px;" class="ft-links" data-astro-cid-3hiea4dn> <div class="ft-col" data-astro-cid-3hiea4dn> <h4 class="ft-heading" data-astro-cid-3hiea4dn>Company</h4> <ul class="ft-list" data-astro-cid-3hiea4dn> <li data-astro-cid-3hiea4dn><a href="/about" data-astro-cid-3hiea4dn>About Us</a></li> <li data-astro-cid-3hiea4dn><a href="/things-to-do" data-astro-cid-3hiea4dn>Best Boat Tours</a></li> <li data-astro-cid-3hiea4dn><a href="/gallery" data-astro-cid-3hiea4dn>Gallery</a></li> <li data-astro-cid-3hiea4dn><a href="/contact" data-astro-cid-3hiea4dn>Contact</a></li> </ul> </div> <div class="ft-col" data-astro-cid-3hiea4dn> <h4 class="ft-heading" data-astro-cid-3hiea4dn>Services</h4> <ul class="ft-list" data-astro-cid-3hiea4dn> <li data-astro-cid-3hiea4dn><a href="/service/rodos-charter" data-astro-cid-3hiea4dn>Yacht Charter</a></li> <li data-astro-cid-3hiea4dn><a href="/service/rodos-boat-tours" data-astro-cid-3hiea4dn>Boat Tours</a></li> <li data-astro-cid-3hiea4dn><a href="/service/rodos-boat-cruises" data-astro-cid-3hiea4dn>Cruises</a></li> <li data-astro-cid-3hiea4dn><a href="/service/rhodes-catamaran-tours" data-astro-cid-3hiea4dn>Catamaran Tours</a></li> <li data-astro-cid-3hiea4dn><a href="/service/rhodes-sailing-trips" data-astro-cid-3hiea4dn>Sailing Trips</a></li> <li data-astro-cid-3hiea4dn><a href="/service/rhodes-boat-trips" data-astro-cid-3hiea4dn>Boat Trips</a></li> <li data-astro-cid-3hiea4dn><a href="/service/rhodes-rent-a-boat" data-astro-cid-3hiea4dn>Rent a Boat</a></li> <li data-astro-cid-3hiea4dn><a href="/service/rhodes-transfers" data-astro-cid-3hiea4dn>Transfers</a></li> </ul> </div> </div> <!-- Contact --> <div class="ft-contact" data-astro-cid-3hiea4dn> <h4 class="ft-heading" data-astro-cid-3hiea4dn>Get in Touch</h4> <a href="mailto:info@rodosyachts.gr" class="ft-contact-link" data-astro-cid-3hiea4dn>info@rodosyachts.gr</a> <a href="tel:+302241012345" class="ft-contact-link" data-astro-cid-3hiea4dn>+30 22410 12345</a> <p class="ft-contact-link ft-address" data-astro-cid-3hiea4dn>Mandraki Harbour, Rhodes 851 00</p> </div> </div> <!-- Bottom --> <div style="display: flex; justify-content: space-between; align-items: center; padding: 24px 0;" class="ft-bottom" data-astro-cid-3hiea4dn> <p style="margin: 0; font-size: 0.8rem; color: rgba(255,255,255,0.35);" data-astro-cid-3hiea4dn>&copy; 2026 Rhodes Boat Tours. All rights reserved.</p> <div class="ft-bottom-links" data-astro-cid-3hiea4dn> <a href="/contact" data-astro-cid-3hiea4dn>Privacy</a> <a href="/contact" data-astro-cid-3hiea4dn>Terms</a> </div> </div> </div> </footer>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/shared/FooterFour.astro", void 0);

export { $$BaseLayout as $, $$Section1Header as a, $$FooterFour as b };
