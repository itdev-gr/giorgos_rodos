import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import './sequence_DctpTcVe.mjs';
import 'clsx';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const profile = Astro2.locals.profile;
  const role = profile?.role || "user";
  return Astro2.redirect(role === "admin" ? "/dashboard/admin" : "/dashboard/user");
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/index.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
