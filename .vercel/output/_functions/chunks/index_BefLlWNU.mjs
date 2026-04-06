import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { r as renderScript } from './script_BFPKfW-S.mjs';
import { $ as $$BaseLayout, a as $$Section1Header, b as $$FooterFour } from './FooterFour_Cjp_m9da.mjs';

const services = [
	{
		id: 1,
		slug: "rhodes-rent-a-boat",
		image: "/assets/img/gallery/yacht/crystal-water-1.jpg",
		bannerImg: "/assets/img/gallery/yacht/crystal-water-1.jpg",
		title: "Rhodes Rent a Boat",
		category: null,
		item: "License free boats and boats with skipper"
	},
	{
		id: 2,
		slug: "rodos-boat-tours",
		image: "/assets/img/gallery/yacht/greek-island-1.jpg",
		bannerImg: "/assets/img/gallery/yacht/greek-island-1.jpg",
		title: "Rhodes Boat Tours",
		category: null,
		item: "Guided boat tours around Rhodes"
	},
	{
		id: 3,
		slug: "rhodes-boat-trips",
		image: "/assets/img/gallery/yacht/sunset-cruise-1.jpg",
		bannerImg: "/assets/img/gallery/yacht/sunset-cruise-1.jpg",
		title: "Rhodes Boat Trips",
		category: null,
		item: "Boat trips with skipper in Rhodes"
	},
	{
		id: 4,
		slug: "rodos-boat-cruises",
		image: "/assets/img/cruises/greco_sunset3.jpg",
		bannerImg: "/assets/img/cruises/greco_sunset3.jpg",
		title: "Rhodes Boat Cruises",
		category: null,
		item: "Scenic cruises around the island"
	},
	{
		id: 5,
		slug: "rodos-charter",
		image: "/assets/img/charter/mediterranean.jpg",
		bannerImg: "/assets/img/charter/mediterranean.jpg",
		title: "Rhodes Charter",
		category: null,
		item: "Charter a luxury yacht for your group"
	},
	{
		id: 6,
		slug: "rhodes-mice-events",
		image: "/assets/img/gallery/yacht/yacht-luxury-1.jpg",
		bannerImg: "/assets/img/gallery/yacht/yacht-luxury-1.jpg",
		title: "MICE & Incentive",
		category: null,
		item: "Corporate events and incentive trips"
	},
	{
		id: 7,
		slug: "rodos-tender-boat",
		image: "/assets/img/gallery/yacht/yacht-exterior-1.jpg",
		bannerImg: "/assets/img/gallery/yacht/yacht-exterior-1.jpg",
		title: "Rhodes Tender Boat",
		category: null,
		item: "Swift tender boat transfers"
	}
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const featured = services.filter((s) => ["rodos-charter", "rodos-boat-cruises", "rhodes-boat-trips"].includes(s.slug));
  const rest = services.filter((s) => !["rodos-charter", "rodos-boat-cruises", "rhodes-boat-trips"].includes(s.slug));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Our Services — Luxury Yacht Experiences", "data-astro-cid-yzocectd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Section1Header, { "data-astro-cid-yzocectd": true })}  ${maybeRenderHead()}<section class="services-hero" data-astro-cid-yzocectd> <div class="services-hero__bg" data-astro-cid-yzocectd> <img src="/assets/img/gallery/yacht/yacht-luxury-1.jpg" alt="" data-astro-cid-yzocectd> <div class="services-hero__overlay" data-astro-cid-yzocectd></div> </div> <video class="services-hero__video" autoplay muted loop playsinline preload="metadata" data-astro-cid-yzocectd> <source src="/assets/img/hero/services/charter.mp4" type="video/mp4" data-astro-cid-yzocectd> </video> <div class="services-hero__content" data-astro-cid-yzocectd> <span class="services-hero__accent" data-ani="fadein" data-astro-cid-yzocectd>Our Services</span> <h1 class="services-hero__title" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-yzocectd>Every Way to Enjoy the Sea in Rhodes</h1> </div> </section>  <section class="services-featured" data-astro-cid-yzocectd> <div class="services-featured__grid" data-astro-cid-yzocectd> ${featured.map((data, i) => renderTemplate`<a${addAttribute(`/service/${data.slug}`, "href")} class="services-card services-card--featured" data-ani="slideinup"${addAttribute(String(i * 0.15), "data-ani-delay")} data-astro-cid-yzocectd> <img${addAttribute(data.image, "src")}${addAttribute(data.title, "alt")} loading="lazy" data-astro-cid-yzocectd> <div class="services-card__overlay" data-astro-cid-yzocectd></div> <div class="services-card__content" data-astro-cid-yzocectd> <h2 class="services-card__title" data-astro-cid-yzocectd>${data.title}</h2> <p class="services-card__desc" data-astro-cid-yzocectd>${data.item}</p> <span class="services-card__link" data-astro-cid-yzocectd>Explore <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-yzocectd><path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-yzocectd></path></svg></span> </div> </a>`)} </div> </section>  <section class="services-more" data-astro-cid-yzocectd> <div class="services-more__header" data-ani="fadein" data-astro-cid-yzocectd> <h2 class="services-more__title" data-astro-cid-yzocectd>More Experiences</h2> <p class="services-more__subtitle" data-astro-cid-yzocectd>Discover the full range of our maritime services</p> </div> <div class="charter-grid" data-astro-cid-yzocectd> ${rest.map((data, i) => renderTemplate`<a${addAttribute(`/service/${data.slug}`, "href")}${addAttribute(`charter-card ${i === 0 ? "charter-card--full" : "charter-card--half"}`, "class")} data-ani="slideinup"${addAttribute(String(i * 0.1), "data-ani-delay")} data-astro-cid-yzocectd> <img${addAttribute(data.image, "src")}${addAttribute(data.title, "alt")} loading="lazy" data-astro-cid-yzocectd> <div class="charter-card__content" data-astro-cid-yzocectd> <h2 data-astro-cid-yzocectd>${data.title}</h2> <p data-astro-cid-yzocectd>${data.item}</p> <span class="charter-card__btn" data-astro-cid-yzocectd>Learn More</span> </div> </a>`)} </div> </section>  <section class="services-cta" data-ani="fadein" data-astro-cid-yzocectd> <div class="services-cta__inner" data-astro-cid-yzocectd> <h2 class="services-cta__title" data-astro-cid-yzocectd>Not Sure Which Experience Is Right for You?</h2> <p class="services-cta__text" data-astro-cid-yzocectd>Send us a message and tell us what you have in mind. We will suggest the best option for your group — honestly and without pressure.</p> <a href="/contact" class="services-cta__btn" data-astro-cid-yzocectd>Get in Touch</a> </div> </section> ${renderComponent($$result2, "FooterFour", $$FooterFour, { "data-astro-cid-yzocectd": true })} ${renderScript($$result2, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/index.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/index.astro";
const $$url = "/service";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
