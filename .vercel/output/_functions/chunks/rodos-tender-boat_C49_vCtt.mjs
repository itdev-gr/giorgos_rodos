import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { x as maybeRenderHead, a2 as addAttribute, L as renderTemplate, b7 as defineScriptVars } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { $ as $$BaseLayout, a as $$Section1Header, b as $$FooterFour } from './FooterFour_Cjp_m9da.mjs';
import { $ as $$ServiceHeroFullwidth } from './ServiceHeroFullwidth_CfQc_AeQ.mjs';
import 'clsx';
import { r as renderScript } from './script_BFPKfW-S.mjs';

const $$ServiceWhySection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServiceWhySection;
  const {
    title,
    subtitle = "Why Choose Us",
    description,
    image,
    layout = "left",
    features
  } = Astro2.props;
  const reversed = layout === "right";
  return renderTemplate`${maybeRenderHead()}<section class="why-section" data-astro-cid-tynh54qo> <div class="container" data-astro-cid-tynh54qo> <div${addAttribute(`why-grid ${reversed ? "why-grid--reversed" : ""}`, "class")} data-astro-cid-tynh54qo> <div class="why-image-col" data-astro-cid-tynh54qo> <div class="why-image-wrapper" data-ani="fadein" data-astro-cid-tynh54qo> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} loading="lazy" data-astro-cid-tynh54qo> <div class="why-image-accent" data-astro-cid-tynh54qo></div> </div> </div> <div class="why-text-col" data-astro-cid-tynh54qo> <span class="why-label" data-ani="slideinup" data-astro-cid-tynh54qo>${subtitle}</span> <h2 class="why-title" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-tynh54qo>${title}</h2> <p class="why-desc" data-ani="fadein" data-ani-delay="0.2" data-astro-cid-tynh54qo>${description}</p> <div class="why-features" data-astro-cid-tynh54qo> ${features.map((feature, i) => renderTemplate`<div class="why-feature" data-ani="slideinup"${addAttribute(`${0.2 + i * 0.1}`, "data-ani-delay")} data-astro-cid-tynh54qo> <div class="why-feature-icon" data-astro-cid-tynh54qo> <img${addAttribute(feature.icon, "src")} alt="" data-astro-cid-tynh54qo> </div> <div class="why-feature-body" data-astro-cid-tynh54qo> <h4 class="why-feature-title" data-astro-cid-tynh54qo>${feature.title}</h4> <p class="why-feature-text" data-astro-cid-tynh54qo>${feature.text}</p> </div> </div>`)} </div> <div class="why-cta" data-ani="slideinup" data-ani-delay="0.5" data-astro-cid-tynh54qo> <a href="/contact" class="why-btn" data-astro-cid-tynh54qo>Get in Touch</a> </div> </div> </div> </div> </section>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/service/ServiceWhySection.astro", void 0);

const $$ServiceTenderCoverage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServiceTenderCoverage;
  const {
    title,
    subtitle = "Service Area",
    mapImage,
    zones
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="space overflow-hidden" data-astro-cid-lusq6g7t> <div class="container" data-astro-cid-lusq6g7t> <div class="title-area text-center mb-50" data-astro-cid-lusq6g7t> <span class="sub-title style1" data-ani="slideinup" data-astro-cid-lusq6g7t>${subtitle}</span> <h2 class="sec-title" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-lusq6g7t>${title}</h2> </div> <div class="row align-items-center" data-astro-cid-lusq6g7t> <div class="col-xl-7" data-astro-cid-lusq6g7t> <div class="coverage-map position-relative" data-ani="fadein" data-astro-cid-lusq6g7t> <img${addAttribute(mapImage, "src")} alt="Coverage Area" class="w-100" style="border-radius: 16px; object-fit: cover;" loading="lazy" data-astro-cid-lusq6g7t> <!-- Pulsing dots on map --> <div class="coverage-dot" style="top: 30%; left: 45%;" data-astro-cid-lusq6g7t></div> <div class="coverage-dot" style="top: 50%; left: 55%;" data-astro-cid-lusq6g7t></div> <div class="coverage-dot" style="top: 40%; left: 35%;" data-astro-cid-lusq6g7t></div> <div class="coverage-dot" style="top: 65%; left: 50%;" data-astro-cid-lusq6g7t></div> </div> </div> <div class="col-xl-5" data-astro-cid-lusq6g7t> <div class="ps-xl-4" data-astro-cid-lusq6g7t> <div class="coverage-zones" data-astro-cid-lusq6g7t> ${zones.map((zone, i) => renderTemplate`<div class="coverage-zone-card" data-ani="slideinright"${addAttribute(`${i * 0.12}`, "data-ani-delay")} data-astro-cid-lusq6g7t> <h5 class="coverage-zone-name" data-astro-cid-lusq6g7t>${zone.name}</h5> <p class="coverage-zone-desc" data-astro-cid-lusq6g7t>${zone.description}</p> <span class="coverage-zone-badge" data-astro-cid-lusq6g7t> <i class="fas fa-clock me-1" data-astro-cid-lusq6g7t></i> ${zone.responseTime} </span> </div>`)} </div> </div> </div> </div> </div> </div>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/service/ServiceTenderCoverage.astro", void 0);

const $$ServiceSeasonInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServiceSeasonInfo;
  const {
    title,
    subtitle = "Best Time to Visit",
    image,
    seasons
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="szn-section"${addAttribute(`background-image: url(${image});`, "style")} data-astro-cid-ewlabj37> <div class="szn-overlay" data-astro-cid-ewlabj37></div> <div class="container" style="position: relative; z-index: 2;" data-astro-cid-ewlabj37> <div class="szn-header" data-astro-cid-ewlabj37> <span class="szn-label" data-ani="fadein" data-astro-cid-ewlabj37>${subtitle}</span> <h2 class="szn-title" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-ewlabj37>${title}</h2> </div> <div class="szn-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;" data-astro-cid-ewlabj37> ${seasons.map((season, i) => renderTemplate`<div${addAttribute(`szn-card ${season.recommended ? "szn-card--rec" : ""}`, "class")}${addAttribute(`padding: 36px 28px; background: ${season.recommended ? "rgba(28,168,203,0.2)" : "rgba(255,255,255,0.08)"}; border: 1px solid ${season.recommended ? "rgba(28,168,203,0.4)" : "rgba(255,255,255,0.12)"}; border-radius: 16px; text-align: center; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);`, "style")} data-ani="slideinup"${addAttribute(`${0.15 + i * 0.1}`, "data-ani-delay")} data-astro-cid-ewlabj37> ${season.recommended && renderTemplate`<div class="szn-badge" data-astro-cid-ewlabj37>Best Time</div>`} <h4 class="szn-name" data-astro-cid-ewlabj37>${season.name}</h4> <span class="szn-months" data-astro-cid-ewlabj37>${season.months}</span> <p class="szn-desc" data-astro-cid-ewlabj37>${season.description}</p> </div>`)} </div> </div> </section>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/service/ServiceSeasonInfo.astro", void 0);

const $$ServiceDiscoveryCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServiceDiscoveryCTA;
  const {
    title,
    description,
    backgroundImage,
    ctaText = "Get Started",
    ctaLink = "/contact"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="discovery-cta position-relative overflow-hidden" id="discovery-cta" data-astro-cid-2v4rzb42> <div class="discovery-cta-bg"${addAttribute(`background-image: url(${backgroundImage});`, "style")} data-astro-cid-2v4rzb42></div> <div class="discovery-cta-overlay" data-astro-cid-2v4rzb42></div> <div class="container position-relative" style="z-index: 2;" data-astro-cid-2v4rzb42> <div class="text-center" style="padding: 120px 0;" data-astro-cid-2v4rzb42> <h2 class="discovery-cta-title" data-ani="fadein" data-astro-cid-2v4rzb42>${title}</h2> <p class="discovery-cta-text" data-ani="fadein" data-ani-delay="0.2" data-astro-cid-2v4rzb42>${description}</p> <a${addAttribute(ctaLink, "href")} class="th-btn th-icon" data-ani="slideinup" data-ani-delay="0.4" data-astro-cid-2v4rzb42>${ctaText}</a> </div> </div> </div>  ${renderScript($$result, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/service/ServiceDiscoveryCTA.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/service/ServiceDiscoveryCTA.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ServiceGalleryCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServiceGalleryCarousel;
  const { title, images } = Astro2.props;
  const swiperId = `gallery-carousel-${Math.random().toString(36).slice(2, 8)}`;
  return renderTemplate(_a || (_a = __template(["", '<div class="sidebar-gallery-area space"> <div class="container-fluid"> <div class="title-area mb-30 text-center"> <span class="sub-title">Explore</span> <h2 class="sec-title">', '</h2> </div> <div class="slider-area"> <div class="swiper th-slider has-shadow"', '> <div class="swiper-wrapper"> ', " </div> </div> </div> </div> </div> <script>(function(){", "\n  function initGalleryCarousel() {\n    if (typeof Swiper === 'undefined') {\n      const script = document.createElement('script');\n      script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';\n      script.onload = () => createSwiper();\n      document.head.appendChild(script);\n    } else {\n      createSwiper();\n    }\n  }\n\n  function createSwiper() {\n    const el = document.getElementById(swiperId);\n    if (!el || el.dataset.initialized) return;\n    el.dataset.initialized = 'true';\n    new Swiper('#' + swiperId, {\n      slidesPerView: 1,\n      spaceBetween: 20,\n      centeredSlides: true,\n      loop: true,\n      autoplay: { delay: 3000, disableOnInteraction: false },\n      breakpoints: {\n        0: { slidesPerView: 1 },\n        576: { slidesPerView: 2 },\n        768: { slidesPerView: 2 },\n        992: { slidesPerView: 3 },\n        1200: { slidesPerView: 3 },\n        1300: { slidesPerView: 4 },\n      },\n    });\n  }\n\n  document.addEventListener('DOMContentLoaded', initGalleryCarousel);\n  document.addEventListener('astro:page-load', initGalleryCarousel);\n})();<\/script>"])), maybeRenderHead(), title, addAttribute(swiperId, "id"), images.map((img) => renderTemplate`<div class="swiper-slide"> <div class="gallery-thumb style2 global-img"> <img${addAttribute(img, "src")} alt="Gallery"> <a${addAttribute(img, "href")} class="gallery-btn popup-image"> <i class="fal fa-magnifying-glass-plus"></i> </a> </div> </div>`), defineScriptVars({ swiperId }));
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/service/ServiceGalleryCarousel.astro", void 0);

const $$ServicePlanningCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServicePlanningCTA;
  const {
    title,
    description,
    image1,
    image2,
    image3,
    cta1Text = "Book Now",
    cta1Link = "/contact",
    cta2Text = "Contact Us",
    cta2Link = "/contact"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="space overflow-hidden"> <div class="container"> <div class="row align-items-center"> <div class="col-xl-6"> <div class="planning-cta-images position-relative"> <div class="row g-3"> <div class="col-6"> <img${addAttribute(image1, "src")} alt="Planning" class="w-100" style="border-radius: 12px; object-fit: cover; height: 300px;" data-ani="slideinleft" loading="lazy"> </div> <div class="col-6" style="margin-top: 40px;"> <img${addAttribute(image2, "src")} alt="Planning" class="w-100" style="border-radius: 12px; object-fit: cover; height: 300px;" data-ani="slideinright" loading="lazy"> </div> ${image3 && renderTemplate`<div class="col-8 mx-auto"> <img${addAttribute(image3, "src")} alt="Planning" class="w-100 movingX" style="border-radius: 12px; object-fit: cover; height: 220px;" loading="lazy"> </div>`} </div> <div class="shape-mockup spin d-none d-xl-block" style="top: -20px; left: -30px;"> <img src="/assets/img/shape/shape_2_3.png" alt="shape"> </div> </div> </div> <div class="col-xl-6"> <div class="ps-xl-5"> <div class="title-area mb-25"> <span class="sub-title style1" data-ani="slideinup">Plan With Us</span> <h2 class="sec-title" data-ani="slideinup" data-ani-delay="0.1">${title}</h2> </div> <p class="mb-35" data-ani="fadein" data-ani-delay="0.2">${description}</p> <div class="btn-group" data-ani="slideinup" data-ani-delay="0.3"> <a${addAttribute(cta1Link, "href")} class="th-btn th-icon">${cta1Text}</a> <a${addAttribute(cta2Link, "href")} class="th-btn style3 th-icon">${cta2Text}</a> </div> <div class="contact-info mt-40" data-ani="fadein" data-ani-delay="0.4"> <p class="contact-info_link"> <a href="tel:+306940000000">+30 694 000 0000</a> </p> <div class="contact-info_icon"> <a href="tel:+306940000000"> <img src="/assets/img/icon/call.svg" alt=""> </a> </div> </div> </div> </div> </div> </div> </div>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/service/ServicePlanningCTA.astro", void 0);

const $$ServiceOverview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServiceOverview;
  const {
    title,
    subtitle = "Overview",
    description,
    features,
    stats
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="space overflow-hidden" data-astro-cid-vnfviusg> <div class="container" data-astro-cid-vnfviusg> <div class="title-area text-center mb-50" data-astro-cid-vnfviusg> <span class="sub-title style1" data-ani="slideinup" data-astro-cid-vnfviusg>${subtitle}</span> <h2 class="sec-title" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-vnfviusg>${title}</h2> <p class="sec-text" data-ani="fadein" data-ani-delay="0.2" style="max-width: 700px; margin: 0 auto;" data-astro-cid-vnfviusg>${description}</p> </div> <div class="row gy-30 justify-content-center" data-astro-cid-vnfviusg> ${features.map((feature, i) => renderTemplate`<div class="col-lg-4 col-md-6" data-astro-cid-vnfviusg> <div class="service-overview-card text-center" data-ani="slideinup"${addAttribute(`${i * 0.1}`, "data-ani-delay")} data-astro-cid-vnfviusg> <div class="service-overview-card_icon" data-astro-cid-vnfviusg> <img${addAttribute(feature.icon, "src")} alt="" data-astro-cid-vnfviusg> </div> <h5 class="service-overview-card_title" data-astro-cid-vnfviusg>${feature.title}</h5> <p class="service-overview-card_text" data-astro-cid-vnfviusg>${feature.text}</p> </div> </div>`)} </div> ${stats && stats.length > 0 && renderTemplate`<div class="row gy-30 mt-50 justify-content-center" data-astro-cid-vnfviusg> ${stats.map((stat) => renderTemplate`<div class="col-lg-3 col-md-6 col-6" data-astro-cid-vnfviusg> <div class="service-stat-card text-center" data-ani="zoomIn" data-astro-cid-vnfviusg> <h3 class="service-stat-number"${addAttribute(stat.value, "data-countup")} data-astro-cid-vnfviusg> <span class="counter-number" data-astro-cid-vnfviusg>0</span>${stat.suffix} </h3> <p class="service-stat-label" data-astro-cid-vnfviusg>${stat.label}</p> </div> </div>`)} </div>`} </div> </div>  ${renderScript($$result, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/service/ServiceOverview.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/service/ServiceOverview.astro", void 0);

const $$ServiceRelatedServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServiceRelatedServices;
  const { currentPage } = Astro2.props;
  const services = [
    {
      id: "charter",
      title: "Yacht Charter",
      description: "Premium yacht charters for unforgettable voyages across the Dodecanese islands.",
      image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&h=600&fit=crop",
      link: "/service/rodos-charter"
    },
    {
      id: "mise",
      title: "Mise Services",
      description: "Comprehensive marine support — provisioning, logistics, and crew coordination.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      link: "/service/rhodes-mice-events"
    },
    {
      id: "tender",
      title: "Tender Service",
      description: "Fast and reliable shore-to-ship transfers across Rhodes harbors.",
      image: "/assets/img/tender/tender-service.jpg",
      link: "/service/rodos-tender-boat"
    }
  ];
  const otherServices = services.filter((s) => s.id !== currentPage);
  return renderTemplate`${maybeRenderHead()}<div class="bg-smoke space overflow-hidden" data-astro-cid-qxu4un26> <div class="container" data-astro-cid-qxu4un26> <div class="title-area text-center mb-50" data-astro-cid-qxu4un26> <span class="sub-title style1" data-ani="slideinup" data-astro-cid-qxu4un26>Explore More</span> <h2 class="sec-title" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-qxu4un26>Our Other Services</h2> </div> <div class="row gy-30 justify-content-center" data-astro-cid-qxu4un26> ${otherServices.map((service, i) => renderTemplate`<div class="col-lg-6" data-astro-cid-qxu4un26> <a${addAttribute(service.link, "href")} class="related-service-card" data-ani="slideinup"${addAttribute(`${i * 0.15}`, "data-ani-delay")} data-astro-cid-qxu4un26> <div class="related-service-card_img" data-astro-cid-qxu4un26> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} loading="lazy" data-astro-cid-qxu4un26> <div class="related-service-card_overlay" data-astro-cid-qxu4un26></div> </div> <div class="related-service-card_content" data-astro-cid-qxu4un26> <h4 class="related-service-card_title" data-astro-cid-qxu4un26>${service.title}</h4> <p class="related-service-card_text" data-astro-cid-qxu4un26>${service.description}</p> <span class="th-btn style3 th-icon" data-astro-cid-qxu4un26>Explore <i class="fas fa-arrow-right ms-2" data-astro-cid-qxu4un26></i></span> </div> </a> </div>`)} </div> </div> </div>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/service/ServiceRelatedServices.astro", void 0);

const $$RodosTenderBoat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tender Boat Service in Rhodes - Rhodes Boat Tours" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Section1Header, {})} ${renderComponent($$result2, "ServiceHeroFullwidth", $$ServiceHeroFullwidth, { "title": "Fast & Reliable Tender Service", "subtitle": "Professional shore-to-ship transfers across Rhodes harbours and bays. Reliable, punctual, and available around the clock during sailing season.", "backgroundImage": "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1920&h=1080&fit=crop", "heroVideo": "/assets/img/hero/services/tender.mp4", "cta1Text": "Schedule Transfer", "cta2Text": "Contact Us" })} ${renderComponent($$result2, "ServiceWhySection", $$ServiceWhySection, { "layout": "left", "title": "Professional Shore-to-Ship Transfers", "subtitle": "Why Choose Our Tenders", "description": "When your yacht is at anchor and you need reliable transfers — for guests, crew, supplies, or luggage — our tender service is built for exactly that. We operate purpose-built boats with experienced operators who know the harbours and anchorages of Rhodes better than anyone.", "image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop", "features": [
    { icon: "/assets/img/icon/about_1_1.svg", title: "Rapid Response", text: "On-demand transfers with typical response times under 15 minutes in peak zones." },
    { icon: "/assets/img/icon/about_1_2.svg", title: "Safe & Comfortable", text: "Well-maintained tenders with professional operators trained for all conditions." },
    { icon: "/assets/img/icon/about_1_3.svg", title: "Scheduled or On-Demand", text: "Pre-arrange regular transfers or call us anytime for immediate dispatch." }
  ] })} ${renderComponent($$result2, "ServiceTenderCoverage", $$ServiceTenderCoverage, { "title": "Our Coverage Area", "subtitle": "Service Zones", "mapImage": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop", "zones": [
    { name: "Mandraki Harbor", description: "Central Rhodes Town — the main commercial harbor and superyacht berths.", responseTime: "10 min response" },
    { name: "Elli Beach & North Coast", description: "Covering anchorages along the northern coastline to Ixia Bay.", responseTime: "15 min response" },
    { name: "Lindos Bay", description: "Transfers to vessels anchored in the scenic Lindos anchorage zone.", responseTime: "25 min response" },
    { name: "South Coast & Prasonisi", description: "Extended coverage for vessels exploring the southern shores.", responseTime: "35 min response" }
  ] })} ${renderComponent($$result2, "ServiceSeasonInfo", $$ServiceSeasonInfo, { "title": "Operating Season", "subtitle": "When We Operate", "image": "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=800&h=600&fit=crop", "seasons": [
    { name: "Full Service", months: "May – October", description: "24/7 tender operations with multiple boats on standby. Peak-season guarantee of rapid response.", recommended: true },
    { name: "Extended Season", months: "April & November", description: "Daytime operations with on-call evening availability. Advance booking recommended.", recommended: false },
    { name: "Off Season", months: "December – March", description: "By special arrangement only. Weather-dependent operations for visiting vessels.", recommended: false }
  ] })} ${renderComponent($$result2, "ServiceDiscoveryCTA", $$ServiceDiscoveryCTA, { "title": "Your Transfer, Our Priority", "description": "Whether it's a VIP guest arrival, a late-night crew change, or a supply run — we make it seamless.", "backgroundImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop", "ctaText": "Book a Transfer" })} ${renderComponent($$result2, "ServiceGalleryCarousel", $$ServiceGalleryCarousel, { "title": "Tender Operations", "images": [
    "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop"
  ] })} ${renderComponent($$result2, "ServicePlanningCTA", $$ServicePlanningCTA, { "title": "Schedule Your Transfers", "description": "Planning a multi-day stay in Rhodes? Set up a regular transfer schedule with our team. We'll coordinate timing with your itinerary, ensuring guests and crew move seamlessly between shore and vessel.", "image1": "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&h=600&fit=crop", "image2": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop", "cta1Text": "Schedule Transfers", "cta2Text": "Call Us" })} ${renderComponent($$result2, "ServiceOverview", $$ServiceOverview, { "title": "Professional Transfers", "subtitle": "By the Numbers", "description": "Our tender fleet and experienced operators deliver safe, timely transfers across all of Rhodes' harbors and anchorages.", "features": [
    { icon: "/assets/img/icon/about_1_1.svg", title: "Purpose-Built Fleet", text: "Modern tenders designed for comfort and safety in all sea conditions." },
    { icon: "/assets/img/icon/about_1_2.svg", title: "Licensed Operators", text: "All operators hold commercial maritime licenses and safety certifications." },
    { icon: "/assets/img/icon/about_1_3.svg", title: "Full Insurance", text: "Complete passenger insurance coverage for every transfer." }
  ], "stats": [
    { value: 5e3, suffix: "+", label: "Transfers/Year" },
    { value: 10, suffix: "min", label: "Avg Response" },
    { value: 4, suffix: "", label: "Tender Boats" },
    { value: 0, suffix: "", label: "Incidents" }
  ] })} ${renderComponent($$result2, "ServiceRelatedServices", $$ServiceRelatedServices, { "currentPage": "tender" })} ${renderComponent($$result2, "FooterFour", $$FooterFour, {})} ` })}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/rodos-tender-boat.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/rodos-tender-boat.astro";
const $$url = "/service/rodos-tender-boat";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RodosTenderBoat,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
