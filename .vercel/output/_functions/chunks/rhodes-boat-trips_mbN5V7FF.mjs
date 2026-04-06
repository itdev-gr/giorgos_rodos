import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { r as renderScript } from './script_BFPKfW-S.mjs';
import { $ as $$BaseLayout, a as $$Section1Header, b as $$FooterFour } from './FooterFour_Cjp_m9da.mjs';
import { $ as $$ServiceHeroFullwidth } from './ServiceHeroFullwidth_CfQc_AeQ.mjs';
import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const prerender = false;
const $$RhodesBoatTrips = createComponent(async ($$result, $$props, $$slots) => {
  let dbCards = [];
  try {
    const supabase = createAdminClient();
    if (supabase) {
      const { data } = await supabase.from("tours").select("*").eq("service_page", "rhodes-boat-trips").eq("status", "approved").order("created_at", { ascending: false });
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
  const demo_trips = [
    {
      title: "Half Day Speedboat Trip",
      description: "A 4-hour speedboat trip along the east coast with swimming stops in hidden bays.",
      image: "/assets/img/skipper/mako-boat-1.jpg",
      duration: "4 Hours",
      guests: "Up to 8 Guests",
      boat: "Speedboat",
      price: "€350"
    },
    {
      title: "Full Day Speedboat Trip",
      description: "A full day on the water exploring the coastline, with lunch, swimming and time to relax at sea.",
      image: "/assets/img/skipper/mako-anthony-quinn.jpg",
      duration: "7 Hours",
      guests: "Up to 8 Guests",
      boat: "Speedboat",
      price: "€550"
    },
    {
      title: "Sailing Day Trip",
      description: "Your own sailing yacht for the day — choose your route, your pace and your swimming stops.",
      image: "/assets/img/destinations/private-sailing.jpg",
      duration: "Full Day",
      guests: "Up to 10 Guests",
      boat: "Sailing Yacht",
      price: "From €600"
    },
    {
      title: "Sunset Boat Trip",
      description: "An evening on the water as the sun goes down — drinks, music and golden light.",
      image: "/assets/img/cruises/greco_sunset3.jpg",
      duration: "3 Hours",
      guests: "Up to 8 Guests",
      boat: "Motorboat",
      price: "€300"
    },
    {
      title: "Anthony Quinn Bay Trip",
      description: "A short trip to one of the most beautiful bays in Rhodes — swim, snorkel and relax.",
      image: "/assets/img/destinations/anthony-quinn-bay.jpg",
      duration: "3 Hours",
      guests: "Up to 6 Guests",
      boat: "Speedboat",
      price: "€250"
    },
    {
      title: "Lindos Coast Explorer",
      description: "Explore the dramatic Lindos coastline by boat with stops at secluded beaches and caves.",
      image: "/assets/img/destinations/lindos-bay.jpg",
      duration: "5 Hours",
      guests: "Up to 8 Guests",
      boat: "Speedboat",
      price: "€450"
    },
    {
      title: "Family Boat Trip",
      description: "A relaxed boat trip designed for families — calm bays, safe swimming and a flexible schedule.",
      image: "/assets/img/destinations/tsambika-beach.jpg",
      duration: "4 Hours",
      guests: "Up to 10 Guests",
      boat: "Motorboat",
      price: "€400"
    },
    {
      title: "Romantic Couples Trip",
      description: "A romantic boat experience for two — secluded bays, champagne on board and sunset views.",
      image: "/assets/img/destinations/symi-island.jpg",
      duration: "3 Hours",
      guests: "2 Guests",
      boat: "Motorboat",
      price: "€280"
    },
    {
      title: "Full Day Island Hop",
      description: "A full day trip to nearby islands — Symi, Halki or along the extended Rhodes coastline.",
      image: "/assets/img/fleet/lagoon-42-aenaos.jpg",
      duration: "8 Hours",
      guests: "Up to 10 Guests",
      boat: "Sailing Yacht",
      price: "From €800"
    }
  ];
  const trips = [...dbCards, ...demo_trips];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Rhodes Boat Trips — Boat Experiences in Rhodes | Rhodes Boat Tours", "description": "Boat trips in Rhodes with professional skippers. Flexible routes, swimming stops and a great experience on the sea. Handpicked by local experts.", "data-astro-cid-yzw7jn4m": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Section1Header, { "data-astro-cid-yzw7jn4m": true })}  ${renderComponent($$result2, "ServiceHeroFullwidth", $$ServiceHeroFullwidth, { "title": "Rhodes Boat Trips", "subtitle": "Boat Trips and Experiences in Rhodes", "backgroundImage": "/assets/img/gallery/yacht/crystal-water-1.jpg", "heroVideo": "/assets/img/hero/services/private-tours.mp4", "data-astro-cid-yzw7jn4m": true })}  ${maybeRenderHead()}<section style="padding: 60px 0 40px;" data-astro-cid-yzw7jn4m> <div class="container" data-astro-cid-yzw7jn4m> <div style="max-width: 700px; margin: 0 auto; text-align: center; margin-bottom: 40px;" data-astro-cid-yzw7jn4m> <p style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.2rem; line-height: 1.7; color: #1CA8CB; margin-bottom: 0;" data-ani="fadein" data-astro-cid-yzw7jn4m>
A boat trip is one of the most beautiful ways to experience Rhodes at your own pace.
</p> </div> <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px;" class="bt-intro-grid" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-yzw7jn4m> <div style="text-align: center; padding: 32px 24px;" data-astro-cid-yzw7jn4m> <div style="width: 56px; height: 56px; border-radius: 14px; background: rgba(28,168,203,0.1); color: #1CA8CB; display: inline-flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 18px;" data-astro-cid-yzw7jn4m> <i class="fas fa-ship" data-astro-cid-yzw7jn4m></i> </div> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1rem; font-weight: 700; color: #113D48; margin-bottom: 10px;" data-astro-cid-yzw7jn4m>Your Own Boat</h3> <p style="font-size: 0.9rem; line-height: 1.65; color: #6b7c85; margin: 0;" data-astro-cid-yzw7jn4m>Rent a boat with a skipper for your group. Flexible duration from 2 hours to a full day, with swimming stops and time to relax at sea.</p> </div> <div style="text-align: center; padding: 32px 24px;" data-astro-cid-yzw7jn4m> <div style="width: 56px; height: 56px; border-radius: 14px; background: rgba(28,168,203,0.1); color: #1CA8CB; display: inline-flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 18px;" data-astro-cid-yzw7jn4m> <i class="fas fa-check-circle" data-astro-cid-yzw7jn4m></i> </div> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1rem; font-weight: 700; color: #113D48; margin-bottom: 10px;" data-astro-cid-yzw7jn4m>Handpicked Boats</h3> <p style="font-size: 0.9rem; line-height: 1.65; color: #6b7c85; margin: 0;" data-astro-cid-yzw7jn4m>From all the boat trips available in Rhodes, we have selected those with quality boats, experienced skippers and great overall experiences.</p> </div> <div style="text-align: center; padding: 32px 24px;" data-astro-cid-yzw7jn4m> <div style="width: 56px; height: 56px; border-radius: 14px; background: rgba(28,168,203,0.1); color: #1CA8CB; display: inline-flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 18px;" data-astro-cid-yzw7jn4m> <i class="fas fa-map-marked-alt" data-astro-cid-yzw7jn4m></i> </div> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1rem; font-weight: 700; color: #113D48; margin-bottom: 10px;" data-astro-cid-yzw7jn4m>Local Guidance</h3> <p style="font-size: 0.9rem; line-height: 1.65; color: #6b7c85; margin: 0;" data-astro-cid-yzw7jn4m>We are not a booking platform. We help you choose the right boat, the right duration and the right experience for your group.</p> </div> </div> <div style="text-align: center; margin-top: 28px;" data-ani="fadein" data-ani-delay="0.2" data-astro-cid-yzw7jn4m> <p style="font-family: 'Manrope', sans-serif; font-weight: 600; font-size: 0.95rem; color: #113D48; margin: 0;" data-astro-cid-yzw7jn4m>
We don't sell boat trips. We help you choose the right boat experience in Rhodes.
</p> </div> </div> </section>  <section style="padding: 80px 0; background: #f8fafb;" data-astro-cid-yzw7jn4m> <div class="container" data-astro-cid-yzw7jn4m> <div class="title-area text-center" style="margin-bottom: 50px;" data-astro-cid-yzw7jn4m> <h2 class="sec-title" data-ani="slideinup" data-astro-cid-yzw7jn4m>Explore Our Boat Trips in Rhodes</h2> </div> <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;" class="bt-trips-grid" data-astro-cid-yzw7jn4m> ${trips.map((trip, i) => renderTemplate`<a${addAttribute(trip.href || "/contact", "href")} class="bt-trip-card" data-ani="slideinup"${addAttribute(`${0.1 + i * 0.06}`, "data-ani-delay")} style="display: flex; flex-direction: column; text-decoration: none; color: inherit; background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.06); transition: transform 0.3s ease, box-shadow 0.3s ease;" data-astro-cid-yzw7jn4m> <div style="height: 220px; overflow: hidden; position: relative;" data-astro-cid-yzw7jn4m> <img${addAttribute(trip.image, "src")}${addAttribute(trip.title, "alt")} loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" data-astro-cid-yzw7jn4m> <span style="position: absolute; top: 14px; right: 14px; background: rgba(17,61,72,0.85); color: #fff; font-family: 'Inter', sans-serif; font-size: 0.75rem; font-weight: 600; padding: 5px 12px; border-radius: 6px; backdrop-filter: blur(4px);" data-astro-cid-yzw7jn4m>${trip.boat}</span> </div> <div style="padding: 24px; display: flex; flex-direction: column; flex: 1;" data-astro-cid-yzw7jn4m> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1.1rem; font-weight: 700; color: #113D48; margin-bottom: 8px;" data-astro-cid-yzw7jn4m>${trip.title}</h3> <p style="font-size: 0.88rem; line-height: 1.6; color: #6b7c85; margin-bottom: 14px;" data-astro-cid-yzw7jn4m>${trip.description}</p> <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;" data-astro-cid-yzw7jn4m> <span style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #5a6a72; background: #f0f4f5; padding: 4px 10px; border-radius: 20px;" data-astro-cid-yzw7jn4m><i class="far fa-clock" style="font-size: 0.7rem; color: #1CA8CB;" data-astro-cid-yzw7jn4m></i> ${trip.duration}</span> <span style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.75rem; color: #5a6a72; background: #f0f4f5; padding: 4px 10px; border-radius: 20px;" data-astro-cid-yzw7jn4m><i class="far fa-user" style="font-size: 0.7rem; color: #1CA8CB;" data-astro-cid-yzw7jn4m></i> ${trip.guests}</span> </div> <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 14px; border-top: 1px solid #f0f0f0;" data-astro-cid-yzw7jn4m> <span style="font-family: 'Manrope', sans-serif; font-size: 1.05rem; font-weight: 700; color: #1CA8CB;" data-astro-cid-yzw7jn4m>${trip.price}</span> <span style="font-size: 0.78rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #113D48;" data-astro-cid-yzw7jn4m>Enquire <i class="fa-regular fa-arrow-right" style="margin-left: 4px;" data-astro-cid-yzw7jn4m></i></span> </div> </div> </a>`)} </div> </div> </section>  <section style="padding: 80px 0; background: #113D48;" data-astro-cid-yzw7jn4m> <div class="container" data-astro-cid-yzw7jn4m> <div style="max-width: 700px; margin: 0 auto; text-align: center;" data-astro-cid-yzw7jn4m> <h2 style="font-family: 'Manrope', sans-serif; font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; color: #fff; margin-bottom: 20px;" data-ani="slideinup" data-astro-cid-yzw7jn4m>Need Help Planning Your Boat Trip?</h2> <p style="font-size: 1rem; line-height: 1.75; color: rgba(255,255,255,0.7); margin-bottom: 36px;" data-ani="fadein" data-ani-delay="0.1" data-astro-cid-yzw7jn4m>
If you are planning a boat trip in Rhodes and you are not sure which boat or how many hours you need, contact us and we will help you plan your day at sea based on your group, your budget and the type of experience you are looking for.
</p> <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;" data-ani="slideinup" data-ani-delay="0.2" data-astro-cid-yzw7jn4m> <a href="/contact" class="th-btn style3 th-icon" data-astro-cid-yzw7jn4m>Send Us a Message</a> <a href="https://wa.me/302241012345" style="display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 600; color: #fff; border: 1.5px solid rgba(255,255,255,0.3); border-radius: 8px; text-decoration: none; transition: all 0.3s ease;" data-astro-cid-yzw7jn4m><i class="fab fa-whatsapp" data-astro-cid-yzw7jn4m></i> WhatsApp</a> <a href="tel:+302241012345" style="display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 600; color: #fff; border: 1.5px solid rgba(255,255,255,0.3); border-radius: 8px; text-decoration: none; transition: all 0.3s ease;" data-astro-cid-yzw7jn4m><i class="fas fa-phone" data-astro-cid-yzw7jn4m></i> +30 22410 12345</a> </div> </div> </div> </section> ${renderComponent($$result2, "FooterFour", $$FooterFour, { "data-astro-cid-yzw7jn4m": true })} ` })} ${renderScript($$result, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/rhodes-boat-trips.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/rhodes-boat-trips.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/service/rhodes-boat-trips.astro";
const $$url = "/service/rhodes-boat-trips";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RhodesBoatTrips,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
