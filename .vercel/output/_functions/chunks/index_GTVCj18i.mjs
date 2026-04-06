import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { $ as $$BaseLayout, a as $$Section1Header, b as $$FooterFour } from './FooterFour_Cjp_m9da.mjs';
import { p as posts } from './data-post_axbbDf4i.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "News & Blog - Rhodes Boat Tours", "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Section1Header, { "data-astro-cid-5tznm7mj": true })}  ${maybeRenderHead()}<section class="blog-hero" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <div class="row justify-content-center" data-astro-cid-5tznm7mj> <div class="col-lg-8 text-center" data-astro-cid-5tznm7mj> <h1 class="blog-hero_title" data-astro-cid-5tznm7mj>News & Blog</h1> <p class="blog-hero_subtitle" data-astro-cid-5tznm7mj>ALL THE LATEST NEWS AND EVENTS FROM THE WORLD OF YACHTING</p> </div> </div> </div> </section>  <section class="blog-grid space-bottom" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <div class="row gy-30" data-astro-cid-5tznm7mj> ${posts.map((post, index) => renderTemplate`<div class="col-lg-4 col-md-6" data-ani="slideinup"${addAttribute(`0.${index % 3 + 1}s`, "data-ani-delay")} data-astro-cid-5tznm7mj> <div class="blog-card" data-astro-cid-5tznm7mj> <div class="blog-card_img" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.id}`, "href")} data-astro-cid-5tznm7mj> <img${addAttribute(`/assets/img/blog/${post.image}`, "src")}${addAttribute(post.title, "alt")} data-astro-cid-5tznm7mj> </a> </div> <div class="blog-card_content" data-astro-cid-5tznm7mj> <h3 class="blog-card_title" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.id}`, "href")} data-astro-cid-5tznm7mj>${post.title}</a> </h3> <p class="blog-card_meta" data-astro-cid-5tznm7mj>
By: ${post.author} &bull; ${post.date} </p> <div class="blog-card_tags" data-astro-cid-5tznm7mj> ${post.tags.map((tag) => renderTemplate`<span class="blog-card_tag" data-astro-cid-5tznm7mj>${tag.toUpperCase()}</span>`)} </div> </div> </div> </div>`)} </div> </div> </section> ${renderComponent($$result2, "FooterFour", $$FooterFour, { "data-astro-cid-5tznm7mj": true })} ` })}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/blog/index.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
