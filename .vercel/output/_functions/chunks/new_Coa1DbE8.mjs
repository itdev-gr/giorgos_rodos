import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout_ByZJLz3U.mjs';
import { T as TourForm } from './TourForm_7VHsrfHj.mjs';

const prerender = false;
const $$New = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Create New Tour" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="margin-bottom: 20px;"> <a href="/dashboard/user/tours" style="display: inline-flex; align-items: center; gap: 6px; font-size: 0.85rem; color: #64748b; text-decoration: none;"> <i class="fas fa-arrow-left" style="font-size: 0.75rem;"></i> Back to My Tours
</a> </div> ${renderComponent($$result2, "TourForm", TourForm, { "mode": "create", "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/components/dashboard/TourForm", "client:component-export": "default" })} ` })}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/user/tours/new.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/user/tours/new.astro";
const $$url = "/dashboard/user/tours/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
