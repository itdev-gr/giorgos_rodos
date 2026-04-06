import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { $ as $$BaseLayout, a as $$Section1Header, b as $$FooterFour } from './FooterFour_Cjp_m9da.mjs';
import { $ as $$Breadcrumb } from './Breadcrumb_BA65XC_9.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404 - Page Not Found - Rhodes Boat Tours" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Section1Header, {})} ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "title": "Error Page" })} ${maybeRenderHead()}<section class="space bg-smoke"> <div class="container"> <div class="row flex-row-reverse align-items-center"> <div class="col-lg-6"> <div class="error-img"> <img src="/assets/img/theme-img/error.svg" alt="404"> </div> </div> <div class="col-lg-6"> <div class="error-content"> <h2 class="error-title">Oops! Page Not Found</h2> <h4 class="error-subtitle">
This page seems to have slipped through a time portal
</h4> <p class="error-text">
We apologize for any disruption to the space-time continuum. Feel
              free to journey back to our homepage.
</p> <a href="/" class="th-btn style3"> <img src="/assets/img/icon/right-arrow2.svg" alt="">
Go Back Home
</a> </div> </div> </div> </div> </section> ${renderComponent($$result2, "FooterFour", $$FooterFour, {})} ` })}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/404.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
