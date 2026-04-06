import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { r as renderScript } from './script_BFPKfW-S.mjs';
import { $ as $$BaseLayout, a as $$Section1Header, b as $$FooterFour } from './FooterFour_Cjp_m9da.mjs';
import { $ as $$ServiceHeroFullwidth } from './ServiceHeroFullwidth_CfQc_AeQ.mjs';
import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const prerender = false;
const $$RodosCharter = createComponent(async ($$result, $$props, $$slots) => {
  let dbCards = [];
  try {
    const supabase = createAdminClient();
    if (supabase) {
      const { data } = await supabase.from("tours").select("*").eq("service_page", "rodos-charter").eq("status", "approved").order("created_at", { ascending: false });
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
  const demo_charters = [
    {
      title: "Bareboat Sailing Yacht 40ft",
      description: "Rent a 40ft sailing yacht without skipper. Ideal for experienced sailors who want to plan their own route.",
      image: "/assets/img/fleet/oceanis-411-kalypso.jpg",
      duration: "Weekly",
      guests: "6–8 Guests",
      type: "Bareboat",
      price: "From €1,500/week"
    },
    {
      title: "Bareboat Sailing Yacht 46ft",
      description: "A larger sailing yacht for experienced crews. More space, more cabins, more comfort for longer passages.",
      image: "/assets/img/fleet/oceanis-461-nailah.jpg",
      duration: "Weekly",
      guests: "8–10 Guests",
      type: "Bareboat",
      price: "From €2,200/week"
    },
    {
      title: "Skippered Sailing Yacht 40ft",
      description: "A sailing yacht with professional skipper. Enjoy sailing without needing a license — the skipper handles everything.",
      image: "/assets/img/fleet/hanse-418-polynoe.jpg",
      duration: "Weekly",
      guests: "6–8 Guests",
      type: "Skippered",
      price: "From €2,000/week"
    },
    {
      title: "Skippered Sailing Yacht 50ft",
      description: "A premium skippered yacht for larger groups. Spacious deck, multiple cabins and an experienced local skipper.",
      image: "/assets/img/fleet/oceanis-511-polis.jpg",
      duration: "Weekly",
      guests: "10–12 Guests",
      type: "Skippered",
      price: "From €3,200/week"
    },
    {
      title: "Catamaran Charter 42ft",
      description: "A stable and spacious catamaran for families and groups. Wide deck, shallow draft and plenty of room.",
      image: "/assets/img/fleet/lagoon-42-aenaos.jpg",
      duration: "Weekly",
      guests: "8–12 Guests",
      type: "Catamaran",
      price: "From €3,500/week"
    },
    {
      title: "Catamaran Charter 46ft",
      description: "A larger catamaran with premium comfort. Multiple cabins, flybridge and ideal for island hopping holidays.",
      image: "/assets/img/fleet/lagoon-46-krista.jpg",
      duration: "Weekly",
      guests: "10–12 Guests",
      type: "Catamaran",
      price: "From €4,500/week"
    },
    {
      title: "Day Sailing Charter",
      description: "A full day sailing experience from Rhodes. Explore nearby islands, swim and enjoy a day under sail.",
      image: "/assets/img/destinations/symi-island.jpg",
      duration: "Full Day",
      guests: "Up to 10 Guests",
      type: "Day Charter",
      price: "From €600"
    },
    {
      title: "Weekend Sailing",
      description: "A 2–3 day sailing trip from Rhodes. Visit Symi, Halki or explore the east coast at a relaxed pace.",
      image: "/assets/img/destinations/lindos-bay.jpg",
      duration: "2–3 Days",
      guests: "6–8 Guests",
      type: "Short Charter",
      price: "From €800"
    },
    {
      title: "Island Hopping Route",
      description: "A week-long sailing route through the Dodecanese — Rhodes, Symi, Tilos, Halki, Kos and more.",
      image: "/assets/img/gallery/yacht/greek-island-1.jpg",
      duration: "Weekly",
      guests: "8–10 Guests",
      type: "Skippered",
      price: "From €2,500/week"
    }
  ];
  const charters = [...dbCards, ...demo_charters];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Rhodes Yacht Charter — Bareboat & Skippered Sailing | Rhodes Boat Tours", "description": "Yacht charter in Rhodes. Bareboat and skippered sailing yachts, catamarans and island hopping holidays in the Dodecanese. Weekly charters from Rhodes.", "data-astro-cid-uqum2jag": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Section1Header, { "data-astro-cid-uqum2jag": true })}  ${renderComponent($$result2, "ServiceHeroFullwidth", $$ServiceHeroFullwidth, { "title": "Rhodes Yacht Charter", "subtitle": "Sailing Holidays in the Dodecanese", "backgroundImage": "/assets/img/fleet/oceanis-511-lupo-di-mare.jpg", "heroVideo": "/assets/img/hero/services/charter.mp4", "data-astro-cid-uqum2jag": true })}  ${maybeRenderHead()}<section style="padding: 60px 0 40px;" data-astro-cid-uqum2jag> <div class="container" data-astro-cid-uqum2jag> <div style="max-width: 700px; margin: 0 auto; text-align: center; margin-bottom: 40px;" data-astro-cid-uqum2jag> <p style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.2rem; line-height: 1.7; color: #1CA8CB; margin-bottom: 0;" data-ani="fadein" data-astro-cid-uqum2jag>
Yacht charter is a completely different type of sea experience — multi-day sailing, island hopping and the freedom of the open sea.
</p> </div> <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px;" class="yc-intro-grid" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-uqum2jag> <div style="text-align: center; padding: 32px 24px;" data-astro-cid-uqum2jag> <div style="width: 56px; height: 56px; border-radius: 14px; background: rgba(28,168,203,0.1); color: #1CA8CB; display: inline-flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 18px;" data-astro-cid-uqum2jag> <i class="fas fa-compass" data-astro-cid-uqum2jag></i> </div> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1rem; font-weight: 700; color: #113D48; margin-bottom: 10px;" data-astro-cid-uqum2jag>Bareboat Charter</h3> <p style="font-size: 0.9rem; line-height: 1.65; color: #6b7c85; margin: 0;" data-astro-cid-uqum2jag>Rent a sailing yacht without skipper. For experienced sailors with a valid license who want to plan their own route.</p> </div> <div style="text-align: center; padding: 32px 24px;" data-astro-cid-uqum2jag> <div style="width: 56px; height: 56px; border-radius: 14px; background: rgba(28,168,203,0.1); color: #1CA8CB; display: inline-flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 18px;" data-astro-cid-uqum2jag> <i class="fas fa-user-shield" data-astro-cid-uqum2jag></i> </div> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1rem; font-weight: 700; color: #113D48; margin-bottom: 10px;" data-astro-cid-uqum2jag>Skippered Charter</h3> <p style="font-size: 0.9rem; line-height: 1.65; color: #6b7c85; margin: 0;" data-astro-cid-uqum2jag>A sailing yacht with professional skipper on board. No sailing experience needed — the skipper handles everything.</p> </div> <div style="text-align: center; padding: 32px 24px;" data-astro-cid-uqum2jag> <div style="width: 56px; height: 56px; border-radius: 14px; background: rgba(28,168,203,0.1); color: #1CA8CB; display: inline-flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 18px;" data-astro-cid-uqum2jag> <i class="fas fa-map-marked-alt" data-astro-cid-uqum2jag></i> </div> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1rem; font-weight: 700; color: #113D48; margin-bottom: 10px;" data-astro-cid-uqum2jag>Local Guidance</h3> <p style="font-size: 0.9rem; line-height: 1.65; color: #6b7c85; margin: 0;" data-astro-cid-uqum2jag>We connect you with the right charter company in Rhodes. Not a booking platform — real advice from locals who know the waters.</p> </div> </div> <div style="text-align: center; margin-top: 28px;" data-ani="fadein" data-ani-delay="0.2" data-astro-cid-uqum2jag> <p style="font-family: 'Manrope', sans-serif; font-weight: 600; font-size: 0.95rem; color: #113D48; margin: 0;" data-astro-cid-uqum2jag>
We don't charter yachts. We help you find the right sailing experience in Greece.
</p> </div> </div> </section>  <section style="padding: 80px 0; background: #f8fafb;" data-astro-cid-uqum2jag> <div class="container" data-astro-cid-uqum2jag> <div class="title-area text-center" style="margin-bottom: 50px;" data-astro-cid-uqum2jag> <h2 class="sec-title" data-ani="slideinup" data-astro-cid-uqum2jag>Explore Yacht Charter Options in Rhodes</h2> </div> <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;" class="yc-charter-grid" data-astro-cid-uqum2jag> ${charters.map((charter, i) => renderTemplate`<a${addAttribute(charter.href || "/contact", "href")} class="yc-card" data-ani="slideinup"${addAttribute(`${0.1 + i * 0.06}`, "data-ani-delay")} style="display: flex; flex-direction: column; text-decoration: none; color: inherit; background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.06); transition: transform 0.3s ease, box-shadow 0.3s ease;" data-astro-cid-uqum2jag> <div style="height: 220px; overflow: hidden; position: relative;" data-astro-cid-uqum2jag> <img${addAttribute(charter.image, "src")}${addAttribute(charter.title, "alt")} loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" data-astro-cid-uqum2jag> <span style="position: absolute; top: 14px; right: 14px; background: rgba(17,61,72,0.85); color: #fff; font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 600; padding: 5px 12px; border-radius: 6px; backdrop-filter: blur(4px);" data-astro-cid-uqum2jag>${charter.type}</span> </div> <div style="padding: 24px; display: flex; flex-direction: column; flex: 1;" data-astro-cid-uqum2jag> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1.1rem; font-weight: 700; color: #113D48; margin-bottom: 8px;" data-astro-cid-uqum2jag>${charter.title}</h3> <p style="font-size: 0.88rem; line-height: 1.6; color: #6b7c85; margin-bottom: 14px;" data-astro-cid-uqum2jag>${charter.description}</p> <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;" data-astro-cid-uqum2jag> <span style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #5a6a72; background: #f0f4f5; padding: 4px 10px; border-radius: 20px;" data-astro-cid-uqum2jag><i class="far fa-clock" style="font-size: 0.7rem; color: #1CA8CB;" data-astro-cid-uqum2jag></i> ${charter.duration}</span> <span style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #5a6a72; background: #f0f4f5; padding: 4px 10px; border-radius: 20px;" data-astro-cid-uqum2jag><i class="far fa-user" style="font-size: 0.7rem; color: #1CA8CB;" data-astro-cid-uqum2jag></i> ${charter.guests}</span> </div> <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 14px; border-top: 1px solid #f0f0f0;" data-astro-cid-uqum2jag> <span style="font-family: 'Manrope', sans-serif; font-size: 1.05rem; font-weight: 700; color: #1CA8CB;" data-astro-cid-uqum2jag>${charter.price}</span> <span style="font-size: 0.78rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #113D48;" data-astro-cid-uqum2jag>Enquire <i class="fa-regular fa-arrow-right" style="margin-left: 4px;" data-astro-cid-uqum2jag></i></span> </div> </div> </a>`)} </div> </div> </section>  <section style="padding: 80px 0; background: #113D48;" data-astro-cid-uqum2jag> <div class="container" data-astro-cid-uqum2jag> <div style="max-width: 700px; margin: 0 auto; text-align: center;" data-astro-cid-uqum2jag> <h2 style="font-family: 'Manrope', sans-serif; font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; color: #fff; margin-bottom: 20px;" data-ani="slideinup" data-astro-cid-uqum2jag>Planning a Sailing Holiday in Rhodes?</h2> <p style="font-size: 1rem; line-height: 1.75; color: rgba(255,255,255,0.7); margin-bottom: 36px;" data-ani="fadein" data-ani-delay="0.1" data-astro-cid-uqum2jag>
If you are planning a sailing holiday and you are not sure which type of yacht charter you need, contact us and we will connect you with the right charter company and help you plan your sailing route in the Dodecanese.
</p> <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;" data-ani="slideinup" data-ani-delay="0.2" data-astro-cid-uqum2jag> <a href="/contact" class="th-btn style3 th-icon" data-astro-cid-uqum2jag>Send Us a Message</a> <a href="https://wa.me/302241012345" style="display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 600; color: #fff; border: 1.5px solid rgba(255,255,255,0.3); border-radius: 8px; text-decoration: none; transition: all 0.3s ease;" data-astro-cid-uqum2jag><i class="fab fa-whatsapp" data-astro-cid-uqum2jag></i> WhatsApp</a> <a href="tel:+302241012345" style="display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 600; color: #fff; border: 1.5px solid rgba(255,255,255,0.3); border-radius: 8px; text-decoration: none; transition: all 0.3s ease;" data-astro-cid-uqum2jag><i class="fas fa-phone" data-astro-cid-uqum2jag></i> +30 22410 12345</a> </div> </div> </div> </section> ${renderComponent($$result2, "FooterFour", $$FooterFour, { "data-astro-cid-uqum2jag": true })} ` })} ${renderScript($$result, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/rodos-charter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/rodos-charter.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/rodos-charter.astro";
const $$url = "/service/rodos-charter";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RodosCharter,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
