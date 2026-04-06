import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { r as renderScript } from './script_BFPKfW-S.mjs';
import { $ as $$BaseLayout, a as $$Section1Header, b as $$FooterFour } from './FooterFour_Cjp_m9da.mjs';
import { $ as $$ServiceHeroFullwidth } from './ServiceHeroFullwidth_CfQc_AeQ.mjs';
import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const prerender = false;
const $$RhodesCatamaranTours = createComponent(async ($$result, $$props, $$slots) => {
  let dbCards = [];
  try {
    const supabase = createAdminClient();
    if (supabase) {
      const { data } = await supabase.from("tours").select("*").eq("service_page", "rhodes-catamaran-tours").eq("status", "approved").order("created_at", { ascending: false });
      dbCards = (data || []).map((t) => ({
        title: t.title,
        description: t.description,
        image: t.images?.[0] || t.image_url || "/assets/img/gallery/yacht/crystal-water-1.jpg",
        duration: t.duration || "",
        guests: t.guests || "",
        type: t.badge_label || "",
        price: t.price || "",
        href: `/tour-detail/${t.id}`
      }));
    }
  } catch (e) {
    console.error("Supabase error:", e);
  }
  const demo_tours = [
    {
      title: "Day Catamaran Tour",
      description: "A full day on a spacious catamaran with swimming stops, lunch, drinks and time to relax on the nets.",
      image: "/assets/img/fleet/lagoon-42-aenaos.jpg",
      duration: "5–6 Hours",
      guests: "20–30 Guests",
      type: "Day Tour",
      price: "€65/person"
    },
    {
      title: "Sunset Catamaran Tour",
      description: "An evening catamaran tour as the sun goes down — drinks, light snacks and a relaxed atmosphere on the water.",
      image: "/assets/img/cruises/greco_sunset3.jpg",
      duration: "3 Hours",
      guests: "20–30 Guests",
      type: "Sunset Tour",
      price: "€55/person"
    },
    {
      title: "Private Catamaran – Half Day",
      description: "Rent the entire catamaran for your group. Flexible route, swimming stops and a personal experience.",
      image: "/assets/img/fleet/lagoon-46-krista.jpg",
      duration: "4 Hours",
      guests: "Up to 12 Guests",
      type: "Private",
      price: "From €500"
    },
    {
      title: "Private Catamaran – Full Day",
      description: "A full day on your own catamaran. Visit multiple bays, enjoy lunch on board and explore at your pace.",
      image: "/assets/img/fleet/lagoon-50-ioli.jpg",
      duration: "7 Hours",
      guests: "Up to 12 Guests",
      type: "Private",
      price: "From €900"
    },
    {
      title: "Premium Catamaran Day Tour",
      description: "A smaller group catamaran experience with premium food, drinks and a more exclusive atmosphere.",
      image: "/assets/img/fleet/lagoon-40-ocean-king.jpg",
      duration: "6 Hours",
      guests: "15–20 Guests",
      type: "Premium",
      price: "€85/person"
    },
    {
      title: "Catamaran BBQ Cruise",
      description: "A day catamaran cruise with a BBQ on board — grilled food, cold drinks, swimming and music.",
      image: "/assets/img/skipper/mako-bbq.jpg",
      duration: "5 Hours",
      guests: "20–30 Guests",
      type: "Day Tour",
      price: "€70/person"
    },
    {
      title: "Private Sunset Catamaran",
      description: "An exclusive sunset experience on your own catamaran — drinks, music and the golden hour on the Aegean.",
      image: "/assets/img/cruises/greco_sunset3.jpg",
      duration: "3 Hours",
      guests: "Up to 12 Guests",
      type: "Private",
      price: "From €400"
    },
    {
      title: "Catamaran Island Trip",
      description: "A full day catamaran trip to Symi or along the extended coastline of Rhodes. Swimming, lunch and exploring.",
      image: "/assets/img/destinations/symi-island.jpg",
      duration: "Full Day",
      guests: "Up to 12 Guests",
      type: "Private",
      price: "From €1,200"
    },
    {
      title: "Romantic Catamaran Sunset",
      description: "A sunset catamaran experience for couples — champagne, canapes and the most beautiful light in Rhodes.",
      image: "/assets/img/destinations/lindos-bay.jpg",
      duration: "3 Hours",
      guests: "2 Guests",
      type: "Couples",
      price: "€200/couple"
    }
  ];
  const tours = [...dbCards, ...demo_tours];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Rhodes Catamaran Tours — Day & Sunset Catamaran Cruises | Rhodes Boat Tours", "description": "Catamaran tours in Rhodes. Day tours, sunset tours and private catamaran experiences along the east coast. Spacious boats, swimming stops and all-inclusive options.", "data-astro-cid-ujx2uz37": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Section1Header, { "data-astro-cid-ujx2uz37": true })}  ${renderComponent($$result2, "ServiceHeroFullwidth", $$ServiceHeroFullwidth, { "title": "Rhodes Catamaran Tours", "subtitle": "Day and Sunset Catamaran Experiences", "backgroundImage": "/assets/img/fleet/lagoon-42-aenaos.jpg", "heroVideo": "/assets/img/hero/services/charter.mp4", "data-astro-cid-ujx2uz37": true })}  ${maybeRenderHead()}<section style="padding: 60px 0 40px;" data-astro-cid-ujx2uz37> <div class="container" data-astro-cid-ujx2uz37> <div style="max-width: 700px; margin: 0 auto; text-align: center; margin-bottom: 40px;" data-astro-cid-ujx2uz37> <p style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.2rem; line-height: 1.7; color: #1CA8CB; margin-bottom: 0;" data-ani="fadein" data-astro-cid-ujx2uz37>
Catamarans are spacious, stable and comfortable — the most relaxing way to spend a day on the sea.
</p> </div> <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px;" class="ct-intro-grid" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-ujx2uz37> <div style="text-align: center; padding: 32px 24px;" data-astro-cid-ujx2uz37> <div style="width: 56px; height: 56px; border-radius: 14px; background: rgba(28,168,203,0.1); color: #1CA8CB; display: inline-flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 18px;" data-astro-cid-ujx2uz37> <i class="fas fa-sun" data-astro-cid-ujx2uz37></i> </div> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1rem; font-weight: 700; color: #113D48; margin-bottom: 10px;" data-astro-cid-ujx2uz37>Day Catamaran Tours</h3> <p style="font-size: 0.9rem; line-height: 1.65; color: #6b7c85; margin: 0;" data-astro-cid-ujx2uz37>Full day tours with swimming stops, lunch, drinks and time to relax on the nets. Shared or private options.</p> </div> <div style="text-align: center; padding: 32px 24px;" data-astro-cid-ujx2uz37> <div style="width: 56px; height: 56px; border-radius: 14px; background: rgba(28,168,203,0.1); color: #1CA8CB; display: inline-flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 18px;" data-astro-cid-ujx2uz37> <i class="fas fa-moon" data-astro-cid-ujx2uz37></i> </div> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1rem; font-weight: 700; color: #113D48; margin-bottom: 10px;" data-astro-cid-ujx2uz37>Sunset Catamaran Tours</h3> <p style="font-size: 0.9rem; line-height: 1.65; color: #6b7c85; margin: 0;" data-astro-cid-ujx2uz37>Evening tours with drinks and light snacks as the sun goes down. Perfect for couples and special occasions.</p> </div> <div style="text-align: center; padding: 32px 24px;" data-astro-cid-ujx2uz37> <div style="width: 56px; height: 56px; border-radius: 14px; background: rgba(28,168,203,0.1); color: #1CA8CB; display: inline-flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 18px;" data-astro-cid-ujx2uz37> <i class="fas fa-map-marked-alt" data-astro-cid-ujx2uz37></i> </div> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1rem; font-weight: 700; color: #113D48; margin-bottom: 10px;" data-astro-cid-ujx2uz37>Local Guidance</h3> <p style="font-size: 0.9rem; line-height: 1.65; color: #6b7c85; margin: 0;" data-astro-cid-ujx2uz37>We help you choose between day tours, sunset tours and private options. Real advice from locals, not a booking platform.</p> </div> </div> <div style="text-align: center; margin-top: 28px;" data-ani="fadein" data-ani-delay="0.2" data-astro-cid-ujx2uz37> <p style="font-family: 'Manrope', sans-serif; font-weight: 600; font-size: 0.95rem; color: #113D48; margin: 0;" data-astro-cid-ujx2uz37>
We don't sell catamaran tours. We help you choose the right sea experience in Rhodes.
</p> </div> </div> </section>  <section style="padding: 80px 0; background: #f8fafb;" data-astro-cid-ujx2uz37> <div class="container" data-astro-cid-ujx2uz37> <div class="title-area text-center" style="margin-bottom: 50px;" data-astro-cid-ujx2uz37> <h2 class="sec-title" data-ani="slideinup" data-astro-cid-ujx2uz37>Explore Our Catamaran Tours in Rhodes</h2> </div> <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;" class="ct-tours-grid" data-astro-cid-ujx2uz37> ${tours.map((tour, i) => renderTemplate`<a${addAttribute(tour.href || "/contact", "href")} class="ct-card" data-ani="slideinup"${addAttribute(`${0.1 + i * 0.06}`, "data-ani-delay")} style="display: flex; flex-direction: column; text-decoration: none; color: inherit; background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.06); transition: transform 0.3s ease, box-shadow 0.3s ease;" data-astro-cid-ujx2uz37> <div style="height: 220px; overflow: hidden; position: relative;" data-astro-cid-ujx2uz37> <img${addAttribute(tour.image, "src")}${addAttribute(tour.title, "alt")} loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" data-astro-cid-ujx2uz37> <span style="position: absolute; top: 14px; right: 14px; background: rgba(17,61,72,0.85); color: #fff; font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 600; padding: 5px 12px; border-radius: 6px; backdrop-filter: blur(4px);" data-astro-cid-ujx2uz37>${tour.type}</span> </div> <div style="padding: 24px; display: flex; flex-direction: column; flex: 1;" data-astro-cid-ujx2uz37> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1.1rem; font-weight: 700; color: #113D48; margin-bottom: 8px;" data-astro-cid-ujx2uz37>${tour.title}</h3> <p style="font-size: 0.88rem; line-height: 1.6; color: #6b7c85; margin-bottom: 14px;" data-astro-cid-ujx2uz37>${tour.description}</p> <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;" data-astro-cid-ujx2uz37> <span style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #5a6a72; background: #f0f4f5; padding: 4px 10px; border-radius: 20px;" data-astro-cid-ujx2uz37><i class="far fa-clock" style="font-size: 0.7rem; color: #1CA8CB;" data-astro-cid-ujx2uz37></i> ${tour.duration}</span> <span style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #5a6a72; background: #f0f4f5; padding: 4px 10px; border-radius: 20px;" data-astro-cid-ujx2uz37><i class="far fa-user" style="font-size: 0.7rem; color: #1CA8CB;" data-astro-cid-ujx2uz37></i> ${tour.guests}</span> </div> <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 14px; border-top: 1px solid #f0f0f0;" data-astro-cid-ujx2uz37> <span style="font-family: 'Manrope', sans-serif; font-size: 1.05rem; font-weight: 700; color: #1CA8CB;" data-astro-cid-ujx2uz37>${tour.price}</span> <span style="font-size: 0.78rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #113D48;" data-astro-cid-ujx2uz37>Enquire <i class="fa-regular fa-arrow-right" style="margin-left: 4px;" data-astro-cid-ujx2uz37></i></span> </div> </div> </a>`)} </div> </div> </section>  <section style="padding: 80px 0; background: #113D48;" data-astro-cid-ujx2uz37> <div class="container" data-astro-cid-ujx2uz37> <div style="max-width: 700px; margin: 0 auto; text-align: center;" data-astro-cid-ujx2uz37> <h2 style="font-family: 'Manrope', sans-serif; font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; color: #fff; margin-bottom: 20px;" data-ani="slideinup" data-astro-cid-ujx2uz37>Need Help Choosing the Right Catamaran Tour?</h2> <p style="font-size: 1rem; line-height: 1.75; color: rgba(255,255,255,0.7); margin-bottom: 36px;" data-ani="fadein" data-ani-delay="0.1" data-astro-cid-ujx2uz37>
If you are not sure which catamaran tour to choose, contact us and we will help you decide whether a catamaran tour, a boat tour or a boat trip is the best option for your holiday in Rhodes.
</p> <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;" data-ani="slideinup" data-ani-delay="0.2" data-astro-cid-ujx2uz37> <a href="/contact" class="th-btn style3 th-icon" data-astro-cid-ujx2uz37>Send Us a Message</a> <a href="https://wa.me/302241012345" style="display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 600; color: #fff; border: 1.5px solid rgba(255,255,255,0.3); border-radius: 8px; text-decoration: none; transition: all 0.3s ease;" data-astro-cid-ujx2uz37><i class="fab fa-whatsapp" data-astro-cid-ujx2uz37></i> WhatsApp</a> <a href="tel:+302241012345" style="display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 600; color: #fff; border: 1.5px solid rgba(255,255,255,0.3); border-radius: 8px; text-decoration: none; transition: all 0.3s ease;" data-astro-cid-ujx2uz37><i class="fas fa-phone" data-astro-cid-ujx2uz37></i> +30 22410 12345</a> </div> </div> </div> </section> ${renderComponent($$result2, "FooterFour", $$FooterFour, { "data-astro-cid-ujx2uz37": true })} ` })} ${renderScript($$result, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/rhodes-catamaran-tours.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/rhodes-catamaran-tours.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/rhodes-catamaran-tours.astro";
const $$url = "/service/rhodes-catamaran-tours";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RhodesCatamaranTours,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
