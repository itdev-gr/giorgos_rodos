import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { r as renderScript } from './script_BFPKfW-S.mjs';
import { $ as $$BaseLayout, a as $$Section1Header, b as $$FooterFour } from './FooterFour_Cjp_m9da.mjs';
import { $ as $$ServiceHeroFullwidth } from './ServiceHeroFullwidth_CfQc_AeQ.mjs';
import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const prerender = false;
const $$RodosBoatTours = createComponent(async ($$result, $$props, $$slots) => {
  let dbCards = [];
  try {
    const supabase = createAdminClient();
    if (supabase) {
      const { data } = await supabase.from("tours").select("*").eq("service_page", "rodos-boat-tours").eq("status", "approved").order("created_at", { ascending: false });
      dbCards = (data || []).map((t) => ({
        title: t.title,
        description: t.description,
        image: t.images?.[0] || t.image_url || "/assets/img/gallery/yacht/crystal-water-1.jpg",
        duration: t.duration || "",
        guests: t.guests || "",
        boat: t.badge_label || "",
        price: t.price || "",
        href: `/tour-detail/${t.id}`
      }));
    }
  } catch (e) {
    console.error("Supabase error:", e);
  }
  const demo_tours = [
    {
      title: "East Coast Sailing Tour",
      description: "A full day sailing along the east coast of Rhodes with swimming stops in hidden bays, lunch on board and time to relax at sea.",
      image: "/assets/img/destinations/private-sailing.jpg",
      duration: "Full Day",
      guests: "20–30 Guests",
      boat: "Sailing Yacht",
      price: "€55/person"
    },
    {
      title: "Catamaran All-Inclusive Cruise",
      description: "Spacious catamaran cruise with all-inclusive food, drinks, music and multiple swimming stops along the coastline.",
      image: "/assets/img/fleet/lagoon-42-aenaos.jpg",
      duration: "Full Day",
      guests: "40–50 Guests",
      boat: "Catamaran",
      price: "€65/person"
    },
    {
      title: "Sunset Catamaran Cruise",
      description: "An evening cruise along the Rhodes coast as the sun goes down — drinks, music and unforgettable views from the water.",
      image: "/assets/img/cruises/greco_sunset3.jpg",
      duration: "Evening",
      guests: "30–40 Guests",
      boat: "Catamaran",
      price: "€55/person"
    },
    {
      title: "Semi-Private Boat Tour",
      description: "A smaller group experience with more personal attention, flexible stops and a relaxed pace along the coast.",
      image: "/assets/img/skipper/mako-boat-1.jpg",
      duration: "Full Day",
      guests: "8–12 Guests",
      boat: "Motorboat",
      price: "€85/person"
    },
    {
      title: "Traditional Wooden Boat Tour",
      description: "A classic Greek boat experience — authentic, unhurried and full of local character. Lunch and swimming included.",
      image: "/assets/img/cruises/greco_home1.jpg",
      duration: "Full Day",
      guests: "20–30 Guests",
      boat: "Traditional Boat",
      price: "€45/person"
    },
    {
      title: "Private Sailing Experience",
      description: "Your own sailing yacht, your own route, your own pace. Ideal for couples, families or small groups who want privacy.",
      image: "/assets/img/destinations/symi-island.jpg",
      duration: "Full Day",
      guests: "Up to 10 Guests",
      boat: "Sailing Yacht",
      price: "From €400"
    },
    {
      title: "Lindos Coast Explorer",
      description: "A half-day speedboat trip along the dramatic Lindos coastline with swimming stops at secluded beaches and caves.",
      image: "/assets/img/destinations/lindos-bay.jpg",
      duration: "Half Day",
      guests: "15–20 Guests",
      boat: "Speedboat",
      price: "€50/person"
    },
    {
      title: "Bay to Bay Cruise",
      description: "Hop between the best bays on the east coast — crystal-clear water, snorkeling gear provided, food and drinks on board.",
      image: "/assets/img/destinations/anthony-quinn-bay.jpg",
      duration: "Half Day",
      guests: "30–40 Guests",
      boat: "Catamaran",
      price: "€45/person"
    },
    {
      title: "VIP Sunset Private Tour",
      description: "An exclusive evening on the water for your group — premium drinks, canapés and the most beautiful sunset in Rhodes.",
      image: "/assets/img/cruises/greco_sunset3.jpg",
      duration: "Evening",
      guests: "Up to 8 Guests",
      boat: "Luxury Boat",
      price: "From €350"
    }
  ];
  const tours = [...dbCards, ...demo_tours];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Rhodes Boat Tours — Organized Boat Tours in Rhodes", "description": "Find the best boat tours in Rhodes with local guidance. Sailing tours, catamaran cruises, semi-private trips and sunset tours — handpicked by local experts.", "data-astro-cid-rybbzxrf": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Section1Header, { "data-astro-cid-rybbzxrf": true })}  ${renderComponent($$result2, "ServiceHeroFullwidth", $$ServiceHeroFullwidth, { "title": "Rhodes Boat Tours", "subtitle": "Organized Boat Tours in Rhodes", "backgroundImage": "/assets/img/tours/hero-rhodes-coast.jpg", "heroVideo": "/assets/img/hero/services/boat-tours.mp4", "data-astro-cid-rybbzxrf": true })}  ${maybeRenderHead()}<section style="padding: 60px 0 40px;" data-astro-cid-rybbzxrf> <div class="container" data-astro-cid-rybbzxrf> <div style="max-width: 700px; margin: 0 auto; text-align: center; margin-bottom: 40px;" data-astro-cid-rybbzxrf> <p style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.2rem; line-height: 1.7; color: #1CA8CB; margin-bottom: 0;" data-ani="fadein" data-astro-cid-rybbzxrf>
Not all boat tours are the same. The boat, the crew and the atmosphere make the difference.
</p> </div> <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px;" class="bt-intro-grid" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-rybbzxrf> <div style="text-align: center; padding: 32px 24px;" data-astro-cid-rybbzxrf> <div style="width: 56px; height: 56px; border-radius: 14px; background: rgba(28,168,203,0.1); color: #1CA8CB; display: inline-flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 18px;" data-astro-cid-rybbzxrf> <i class="fas fa-water" data-astro-cid-rybbzxrf></i> </div> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1rem; font-weight: 700; color: #113D48; margin-bottom: 10px;" data-astro-cid-rybbzxrf>Daily Boat Cruises</h3> <p style="font-size: 0.9rem; line-height: 1.65; color: #6b7c85; margin: 0;" data-astro-cid-rybbzxrf>Organized cruises along the east coast with swimming stops, lunch on board and time to relax at sea. Each tour is unique.</p> </div> <div style="text-align: center; padding: 32px 24px;" data-astro-cid-rybbzxrf> <div style="width: 56px; height: 56px; border-radius: 14px; background: rgba(28,168,203,0.1); color: #1CA8CB; display: inline-flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 18px;" data-astro-cid-rybbzxrf> <i class="fas fa-check-circle" data-astro-cid-rybbzxrf></i> </div> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1rem; font-weight: 700; color: #113D48; margin-bottom: 10px;" data-astro-cid-rybbzxrf>Handpicked Tours</h3> <p style="font-size: 0.9rem; line-height: 1.65; color: #6b7c85; margin: 0;" data-astro-cid-rybbzxrf>From all the tours available in Rhodes, we have selected those that offer a great overall experience — quality boats, good crews, fair prices.</p> </div> <div style="text-align: center; padding: 32px 24px;" data-astro-cid-rybbzxrf> <div style="width: 56px; height: 56px; border-radius: 14px; background: rgba(28,168,203,0.1); color: #1CA8CB; display: inline-flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 18px;" data-astro-cid-rybbzxrf> <i class="fas fa-map-marked-alt" data-astro-cid-rybbzxrf></i> </div> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1rem; font-weight: 700; color: #113D48; margin-bottom: 10px;" data-astro-cid-rybbzxrf>Local Guidance</h3> <p style="font-size: 0.9rem; line-height: 1.65; color: #6b7c85; margin: 0;" data-astro-cid-rybbzxrf>We are not a booking platform. We are local advisors who help you understand the differences and choose the right tour for you.</p> </div> </div> <div style="text-align: center; margin-top: 28px;" data-ani="fadein" data-ani-delay="0.2" data-astro-cid-rybbzxrf> <p style="font-family: 'Manrope', sans-serif; font-weight: 600; font-size: 0.95rem; color: #113D48; margin: 0;" data-astro-cid-rybbzxrf>
There are many boat tours in Rhodes. The difference is choosing the right one — this is where we help.
</p> </div> </div> </section>  <section style="padding: 80px 0; background: #f8fafb;" data-astro-cid-rybbzxrf> <div class="container" data-astro-cid-rybbzxrf> <div class="title-area text-center" style="margin-bottom: 50px;" data-astro-cid-rybbzxrf> <h2 class="sec-title" data-ani="slideinup" data-astro-cid-rybbzxrf>Explore Our Boat Tours in Rhodes</h2> </div> <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;" class="bt-tours-grid" data-astro-cid-rybbzxrf> ${tours.map((tour, i) => renderTemplate`<a${addAttribute(tour.href || "/contact", "href")} class="bt-tour-card" data-ani="slideinup"${addAttribute(`${0.1 + i * 0.06}`, "data-ani-delay")} style="display: flex; flex-direction: column; text-decoration: none; color: inherit; background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.06); transition: transform 0.3s ease, box-shadow 0.3s ease;" data-astro-cid-rybbzxrf> <div style="height: 220px; overflow: hidden; position: relative;" data-astro-cid-rybbzxrf> <img${addAttribute(tour.image, "src")}${addAttribute(tour.title, "alt")} loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" data-astro-cid-rybbzxrf> <span style="position: absolute; top: 14px; right: 14px; background: rgba(17,61,72,0.85); color: #fff; font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 600; padding: 5px 12px; border-radius: 6px; backdrop-filter: blur(4px);" data-astro-cid-rybbzxrf>${tour.boat}</span> </div> <div style="padding: 24px; display: flex; flex-direction: column; flex: 1;" data-astro-cid-rybbzxrf> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1.1rem; font-weight: 700; color: #113D48; margin-bottom: 8px;" data-astro-cid-rybbzxrf>${tour.title}</h3> <p style="font-size: 0.88rem; line-height: 1.6; color: #6b7c85; margin-bottom: 14px;" data-astro-cid-rybbzxrf>${tour.description}</p> <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;" data-astro-cid-rybbzxrf> <span style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #5a6a72; background: #f0f4f5; padding: 4px 10px; border-radius: 20px;" data-astro-cid-rybbzxrf><i class="far fa-clock" style="font-size: 0.7rem; color: #1CA8CB;" data-astro-cid-rybbzxrf></i> ${tour.duration}</span> <span style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #5a6a72; background: #f0f4f5; padding: 4px 10px; border-radius: 20px;" data-astro-cid-rybbzxrf><i class="far fa-user" style="font-size: 0.7rem; color: #1CA8CB;" data-astro-cid-rybbzxrf></i> ${tour.guests}</span> </div> <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 14px; border-top: 1px solid #f0f0f0;" data-astro-cid-rybbzxrf> <span style="font-family: 'Manrope', sans-serif; font-size: 1.05rem; font-weight: 700; color: #1CA8CB;" data-astro-cid-rybbzxrf>${tour.price}</span> <span style="font-size: 0.78rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #113D48;" data-astro-cid-rybbzxrf>Enquire <i class="fa-regular fa-arrow-right" style="margin-left: 4px;" data-astro-cid-rybbzxrf></i></span> </div> </div> </a>`)} </div> </div> </section>  <section style="padding: 80px 0; background: #113D48;" data-astro-cid-rybbzxrf> <div class="container" data-astro-cid-rybbzxrf> <div style="max-width: 700px; margin: 0 auto; text-align: center;" data-astro-cid-rybbzxrf> <h2 style="font-family: 'Manrope', sans-serif; font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; color: #fff; margin-bottom: 20px;" data-ani="slideinup" data-astro-cid-rybbzxrf>Need Help Choosing the Right Boat Tour?</h2> <p style="font-size: 1rem; line-height: 1.75; color: rgba(255,255,255,0.7); margin-bottom: 36px;" data-ani="fadein" data-ani-delay="0.1" data-astro-cid-rybbzxrf>
If you are not sure which boat tour to choose, contact us and we will help you decide whether a boat tour, a private boat trip or a rent a boat experience is the best option for you. We are based in Rhodes and we are always happy to help visitors plan their day at sea.
</p> <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;" data-ani="slideinup" data-ani-delay="0.2" data-astro-cid-rybbzxrf> <a href="/contact" class="th-btn style3 th-icon" data-astro-cid-rybbzxrf>Send Us a Message</a> <a href="https://wa.me/302241012345" style="display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 600; color: #fff; border: 1.5px solid rgba(255,255,255,0.3); border-radius: 8px; text-decoration: none; transition: all 0.3s ease;" data-astro-cid-rybbzxrf><i class="fab fa-whatsapp" data-astro-cid-rybbzxrf></i> WhatsApp</a> <a href="tel:+302241012345" style="display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 600; color: #fff; border: 1.5px solid rgba(255,255,255,0.3); border-radius: 8px; text-decoration: none; transition: all 0.3s ease;" data-astro-cid-rybbzxrf><i class="fas fa-phone" data-astro-cid-rybbzxrf></i> +30 22410 12345</a> </div> </div> </div> </section> ${renderComponent($$result2, "FooterFour", $$FooterFour, { "data-astro-cid-rybbzxrf": true })} ` })} ${renderScript($$result, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/rodos-boat-tours.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/rodos-boat-tours.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/rodos-boat-tours.astro";
const $$url = "/service/rodos-boat-tours";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RodosBoatTours,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
