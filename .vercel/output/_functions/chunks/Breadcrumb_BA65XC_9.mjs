import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { x as maybeRenderHead, a2 as addAttribute, L as renderTemplate } from './sequence_DctpTcVe.mjs';
import 'clsx';

const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const { title, bgImage = "/assets/img/bg/breadcumb-bg.jpg" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="breadcumb-wrapper"${addAttribute(`background-image: url(${bgImage}); background-repeat: no-repeat; background-size: cover;`, "style")}> <div class="container"> <div class="breadcumb-content"> <h1 class="breadcumb-title">${title}</h1> <ul class="breadcumb-menu"> <li><a href="/">Home</a></li> <li>${title}</li> </ul> </div> </div> </div>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/components/ui/Breadcrumb.astro", void 0);

export { $$Breadcrumb as $ };
