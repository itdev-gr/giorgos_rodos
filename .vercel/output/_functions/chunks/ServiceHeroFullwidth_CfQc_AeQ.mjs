import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { x as maybeRenderHead, a2 as addAttribute, L as renderTemplate } from './sequence_DctpTcVe.mjs';
import 'clsx';
import { r as renderScript } from './script_BFPKfW-S.mjs';

const $$ServiceHeroFullwidth = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ServiceHeroFullwidth;
  const {
    title,
    subtitle,
    backgroundImage,
    heroVideo = "",
    cta1Text = "Book Now",
    cta1Link = "/contact",
    cta2Text = "Contact Us",
    cta2Link = "/contact"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="service-hero-fullwidth position-relative overflow-hidden" id="service-hero" data-astro-cid-hzfl7xx6> <div class="service-hero-bg"${addAttribute(`background-image: url(${backgroundImage});`, "style")} data-astro-cid-hzfl7xx6></div> ${heroVideo && renderTemplate`<video class="service-hero-video" autoplay muted loop playsinline preload="metadata" data-astro-cid-hzfl7xx6> <source${addAttribute(heroVideo, "src")} type="video/mp4" data-astro-cid-hzfl7xx6> </video>`} <div class="service-hero-overlay" data-astro-cid-hzfl7xx6></div> <div class="container position-relative" style="z-index: 2;" data-astro-cid-hzfl7xx6> <div class="service-hero-content text-center" data-astro-cid-hzfl7xx6> <h1 class="service-hero-title" data-ani="slideinup" data-astro-cid-hzfl7xx6>${title}</h1> </div> </div> </div>  ${renderScript($$result, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/service/ServiceHeroFullwidth.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/service/ServiceHeroFullwidth.astro", void 0);

export { $$ServiceHeroFullwidth as $ };
