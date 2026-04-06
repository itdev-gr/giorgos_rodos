import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { x as maybeRenderHead, L as renderTemplate, a2 as addAttribute, b3 as unescapeHTML } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { r as renderScript } from './script_BFPKfW-S.mjs';
import { $ as $$BaseLayout, b as $$FooterFour, a as $$Section1Header } from './FooterFour_Cjp_m9da.mjs';
import 'clsx';
import { p as posts } from './data-post_axbbDf4i.mjs';

const $$Section2HeroBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="th-hero-wrapper hero-1 hero-fullscreen" id="hero" data-astro-cid-uq67dlmh> <div class="hero-inner" data-astro-cid-uq67dlmh> <div class="th-hero-bg" data-astro-cid-uq67dlmh> <video autoplay muted loop playsinline style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;" data-astro-cid-uq67dlmh> <source src="/assets/img/hero/hero-video.webm" type="video/webm" data-astro-cid-uq67dlmh> </video> <div class="hero-overlay" data-astro-cid-uq67dlmh></div> </div> <div class="container" data-astro-cid-uq67dlmh> <div class="hero-style1" data-astro-cid-uq67dlmh> <div class="hero-content" data-astro-cid-uq67dlmh> <span class="hero-accent" data-astro-cid-uq67dlmh>Boat Experiences in Rhodes</span> <div class="hero-heading" data-astro-cid-uq67dlmh>Your Day on the Water Starts Here</div> </div> </div> </div> </div> </div>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/home-one/Section2-HeroBanner.astro", void 0);

const $$Section3Intro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="intro-section" style="padding: 80px 0; background: #fff;" data-astro-cid-qiuocaqi> <div class="container" data-astro-cid-qiuocaqi> <div class="row justify-content-center" data-astro-cid-qiuocaqi> <div class="col-lg-9 text-center" data-astro-cid-qiuocaqi> <p class="intro-accent" data-ani="fadein" data-astro-cid-qiuocaqi><em data-astro-cid-qiuocaqi>Local Experts, Not a Marketplace</em></p> <h1 class="intro-heading" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-qiuocaqi>Boat Tours in Rhodes – Local Guidance and Handpicked Experiences</h1> <p class="intro-body" data-ani="fadein" data-ani-delay="0.2" data-astro-cid-qiuocaqi>
We are not a booking platform. We are a small, locally based team in Rhodes who personally know every boat, every captain, and every route we recommend. Since 2009, we have been helping visitors find the right experience on the water — whether that is a private sailing trip, a day cruise along the coastline, or a simple boat rental to explore on your own. Every partner we work with is handpicked, every recommendation is honest, and every conversation is personal. If you are looking for real advice from people who live and breathe this island, you are in the right place.
</p> </div> </div> </div> </section>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/home-one/Section3-Intro.astro", void 0);

const $$Section4BoatCategories = createComponent(($$result, $$props, $$slots) => {
  const categories = [
    { title: "Rhodes Boat Tours", description: "Guided sailing tours along the stunning Rhodes coastline and nearby islands.", image: "/assets/img/cruises/greco_sunset3.jpg", href: "/service/rodos-boat-tours" },
    { title: "Rhodes Boat Trips", description: "Private sailing yacht trips with experienced crews across the Dodecanese.", image: "/assets/img/destinations/private-sailing.jpg", href: "/service/rhodes-boat-trips" },
    { title: "Rhodes Boat Cruises", description: "All-inclusive day and sunset cruises with swimming, dining, and music.", image: "/assets/img/cruises/greco_home1.jpg", href: "/service/rodos-boat-cruises" },
    { title: "Rhodes Rent a Boat", description: "Drive your own boat along the coast — no licence needed, full freedom.", image: "/assets/img/destinations/tsambika-beach.jpg", href: "/service/rhodes-rent-a-boat" },
    { title: "Rhodes Catamaran Cruises", description: "Spacious catamarans for group cruises, events, and island-hopping adventures.", image: "/assets/img/fleet/lagoon-42-aenaos.jpg", href: "/service/rhodes-catamaran-tours" },
    { title: "Rhodes Yacht Charter", description: "Over 80 sailing yachts and catamarans. Bareboat or crewed, the Dodecanese is yours.", image: "/assets/img/fleet/oceanis-461-nailah.jpg", href: "/service/rodos-charter" },
    { title: "Rhodes Tender Boat Services", description: "Fast and reliable shore-to-ship transfers across Rhodes harbours and bays.", image: "/assets/img/tender/tender-service.jpg", href: "/service/rodos-tender-boat" },
    { title: "Rhodes MICE & Incentive Events", description: "Corporate events, incentive trips, and team-building experiences on the water.", image: "/assets/img/gallery/yacht/yacht-luxury-1.jpg", href: "/service/rhodes-mice-events" }
  ];
  return renderTemplate`${maybeRenderHead()}<section style="padding: 80px 0; overflow: hidden;" data-astro-cid-vp2musix> <div class="container" data-astro-cid-vp2musix> <div class="title-area text-center" style="margin-bottom: 50px;" data-astro-cid-vp2musix> <span class="sub-title style1" data-ani="slideinup" data-astro-cid-vp2musix>Our Services</span> <h2 class="sec-title" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-vp2musix>Boat Trips in Rhodes</h2> </div> <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;" class="cat-grid" data-astro-cid-vp2musix> ${categories.map((cat, i) => renderTemplate`<a${addAttribute(cat.href, "href")} class="cat-card" data-ani="slideinup"${addAttribute(`${0.1 + i * 0.05}`, "data-ani-delay")} data-astro-cid-vp2musix> <div class="cat-card__img" data-astro-cid-vp2musix> <img${addAttribute(cat.image, "src")}${addAttribute(cat.title, "alt")} loading="lazy" data-astro-cid-vp2musix> </div> <div class="cat-card__overlay" data-astro-cid-vp2musix></div> <div class="cat-card__content" data-astro-cid-vp2musix> <h3 class="cat-card__title" data-astro-cid-vp2musix>${cat.title}</h3> <p class="cat-card__desc" data-astro-cid-vp2musix>${cat.description}</p> <span class="cat-card__btn" data-astro-cid-vp2musix>View More</span> </div> </a>`)} </div> </div> </section>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/home-one/Section4-BoatCategories.astro", void 0);

const $$Section5GoogleMap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section style="padding: 80px 0;"> <div class="container"> <div class="title-area text-center" style="margin-bottom: 40px;"> <span class="sub-title style1" data-ani="slideinup">Find Us in Rhodes</span> <h2 class="sec-title" data-ani="slideinup" data-ani-delay="0.1">Visit Us at Mandraki Harbour</h2> </div> <div class="gmap-wrap" data-ani="fadein" data-ani-delay="0.2" style="border-radius: 12px; overflow: hidden;"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.5!2d28.4275!3d36.4475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a0c0a4f5c0c8ed%3A0x4e8e0e0e1f2a3b4c!2sMandraki%20Harbour!5e0!3m2!1sen!2sgr!4v1700000000000!5m2!1sen!2sgr" width="100%" height="450" style="border: 0; display: block;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Rhodes Boat Tours - Mandraki Harbour, Rhodes"></iframe> </div> </div> </section>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/home-one/Section5-GoogleMap.astro", void 0);

const $$Section6WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  const items = [
    { icon: "fas fa-map-marked-alt", title: "Local Knowledge", text: "We live and work in Rhodes. We know every bay, every route, and every captain personally." },
    { icon: "fas fa-ship", title: "Handpicked Boats", text: "Every boat we recommend has been personally vetted by our team for quality, safety, and comfort." },
    { icon: "fas fa-shield-alt", title: "Safety First", text: "All vessels are fully licensed and insured, with experienced crews trained for all conditions." },
    { icon: "fas fa-headset", title: "Personal Support", text: "Real people answer your questions — before, during, and after your trip. No chatbots, no call centres." },
    { icon: "fas fa-handshake", title: "Not a Marketplace", text: "We are not a booking platform. We are a local team that personally arranges every experience." },
    { icon: "fas fa-lightbulb", title: "Real Advice", text: "We will tell you honestly which boat, route, or experience is right for your group and budget." },
    { icon: "fas fa-map-pin", title: "Based in Rhodes", text: "Our office is at Mandraki Harbour. We are here if you need us — in person, on the phone, or online." },
    { icon: "fas fa-star", title: "Best Boat Experiences", text: "Fifteen years of helping visitors find unforgettable days on the water around Rhodes and the Dodecanese." }
  ];
  return renderTemplate`${maybeRenderHead()}<section style="padding: 80px 0; background: #E9F6F9; overflow: hidden;" data-astro-cid-jevqzcc4> <div class="container" data-astro-cid-jevqzcc4> <div class="title-area text-center" style="margin-bottom: 50px;" data-astro-cid-jevqzcc4> <span class="sub-title style1" data-ani="slideinup" data-astro-cid-jevqzcc4>Why Rhodes Boat Tours</span> <h2 class="sec-title" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-jevqzcc4>Boat Cruises in Rhodes</h2> </div> <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;" class="why-grid" data-astro-cid-jevqzcc4> ${items.map((item, i) => renderTemplate`<div class="why-card" style="background: #fff; border-radius: 14px; padding: 32px 24px; text-align: center; box-shadow: 0 4px 24px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" data-ani="slideinup"${addAttribute(`${0.1 + i * 0.05}`, "data-ani-delay")} data-astro-cid-jevqzcc4> <div class="why-icon"${addAttribute(`width: 56px; height: 56px; border-radius: 14px; background: rgba(28,168,203,0.1); color: #1CA8CB; display: inline-flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 18px;`, "style")} data-astro-cid-jevqzcc4> <i${addAttribute(item.icon, "class")} data-astro-cid-jevqzcc4></i> </div> <h3 class="why-title" style="font-family: 'Manrope', sans-serif; font-size: 1.05rem; font-weight: 700; color: #113D48; margin-bottom: 8px;" data-astro-cid-jevqzcc4>${item.title}</h3> <p class="why-text" style="font-size: 0.9rem; line-height: 1.65; color: #6b7c85; margin-bottom: 0;" data-astro-cid-jevqzcc4>${item.text}</p> </div>`)} </div> </div> </section>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/home-one/Section6-WhyChooseUs.astro", void 0);

const $$Section7Reviews = createComponent(($$result, $$props, $$slots) => {
  const reviews = [
    {
      name: "Sarah & Tom W.",
      trip: "Boat Tour, Rhodes",
      rating: 5,
      text: "We contacted Rhodes Boat Tours before our trip and they helped us pick the perfect boat tour for our family. The advice was honest, the captain was fantastic, and the hidden bays we visited were absolutely stunning. Best day of our holiday."
    },
    {
      name: "Marco & Giulia B.",
      trip: "Yacht Charter, Dodecanese",
      rating: 5,
      text: "We chartered a sailing yacht for a week around the Dodecanese. The team arranged everything — from provisioning to the route. Symi, Halki, Tilos — every island was a new discovery. Truly a local team that knows these waters."
    },
    {
      name: "The Peterson Family",
      trip: "Day Cruise, Rhodes",
      rating: 5,
      text: "Travelling with three kids, we were not sure which cruise to choose. The team recommended the all-inclusive day cruise and it was perfect. The children loved swimming in Anthony Quinn Bay and the food onboard was delicious."
    },
    {
      name: "Anna & David K.",
      trip: "Speedboat Tour, Rhodes",
      rating: 5,
      text: "The speedboat trip with skipper was the highlight of our Rhodes holiday. We visited beaches that are impossible to reach by car. The skipper knew every hidden spot along the coastline. Cannot recommend this enough."
    },
    {
      name: "Christine L.",
      trip: "Rent a Boat, Charaki",
      rating: 5,
      text: "Renting a license-free boat was so easy. The team explained everything clearly and gave us a map with the best spots. We spent the whole day exploring the southeast coast on our own. Pure freedom."
    },
    {
      name: "Michael & Petra S.",
      trip: "Sunset Cruise, Rhodes",
      rating: 5,
      text: "The sunset cruise was magical. Watching the sun go down from the water with a glass of wine, surrounded by the Rhodes coastline — it was one of those moments you never forget. Thank you for making it so special."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="rv-section" style="padding: 80px 0; background: #f8fafb; overflow: hidden;" data-astro-cid-w2qtifcr> <div class="container" data-astro-cid-w2qtifcr> <div class="title-area text-center" style="margin-bottom: 50px;" data-astro-cid-w2qtifcr> <span class="sub-title style1" data-ani="slideinup" data-astro-cid-w2qtifcr>What Our Guests Say</span> <h2 class="sec-title" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-w2qtifcr>Real Experiences, Real People</h2> </div> </div> <!-- Scrolling track — no JS needed --> <div class="rv-track-wrapper" data-astro-cid-w2qtifcr> <div class="rv-track" data-astro-cid-w2qtifcr> ${[...reviews, ...reviews].map((review) => renderTemplate`<div class="rv-card" data-astro-cid-w2qtifcr> <div class="rv-stars" data-astro-cid-w2qtifcr> ${Array.from({ length: review.rating }).map(() => renderTemplate`<svg width="16" height="16" viewBox="0 0 24 24" fill="#f5a623" xmlns="http://www.w3.org/2000/svg" data-astro-cid-w2qtifcr> <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-astro-cid-w2qtifcr></path> </svg>`)} </div> <p class="rv-text" data-astro-cid-w2qtifcr>${review.text}</p> <div class="rv-author" data-astro-cid-w2qtifcr> <div class="rv-avatar" data-astro-cid-w2qtifcr>${review.name.charAt(0)}</div> <div data-astro-cid-w2qtifcr> <p class="rv-name" data-astro-cid-w2qtifcr>${review.name}</p> <p class="rv-trip" data-astro-cid-w2qtifcr>${review.trip}</p> </div> </div> </div>`)} </div> </div> </section>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/home-one/Section7-Reviews.astro", void 0);

const $$Section8BlogPreview = createComponent(($$result, $$props, $$slots) => {
  const featured = posts.slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section style="padding: 80px 0; overflow: hidden;" data-astro-cid-gcch2hub> <div class="container" data-astro-cid-gcch2hub> <div class="title-area text-center" style="margin-bottom: 50px;" data-astro-cid-gcch2hub> <span class="sub-title style1" data-ani="slideinup" data-astro-cid-gcch2hub>Rhodes Guide</span> <h2 class="sec-title" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-gcch2hub>Rent a Boat in Rhodes</h2> </div> <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px;" class="blog-grid" data-astro-cid-gcch2hub> ${featured.map((post, i) => renderTemplate`<a${addAttribute(`/blog/${post.id}`, "href")} class="blog-card" data-ani="slideinup"${addAttribute(`${0.1 + i * 0.1}`, "data-ani-delay")} data-astro-cid-gcch2hub> <div class="blog-card__img" data-astro-cid-gcch2hub> <img${addAttribute(`/assets/img/blog/${post.image}`, "src")}${addAttribute(post.title, "alt")} loading="lazy" data-astro-cid-gcch2hub> </div> <div class="blog-card__body" data-astro-cid-gcch2hub> <div class="blog-card__meta" data-astro-cid-gcch2hub> <span data-astro-cid-gcch2hub>${post.author}</span> <span data-astro-cid-gcch2hub>${post.date}</span> </div> <h3 class="blog-card__title" data-astro-cid-gcch2hub>${post.title}</h3> <p class="blog-card__excerpt" data-astro-cid-gcch2hub>${post.excerpt}</p> <div class="blog-card__tags" data-astro-cid-gcch2hub> ${post.tags.map((tag) => renderTemplate`<span class="blog-card__tag" data-astro-cid-gcch2hub>${tag}</span>`)} </div> </div> </a>`)} </div> <div class="text-center" style="margin-top: 40px;" data-ani="fadein" data-ani-delay="0.4" data-astro-cid-gcch2hub> <a href="/blog" class="th-btn style3 th-icon" data-astro-cid-gcch2hub>See All Articles</a> </div> </div> </section>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/home-one/Section8-BlogPreview.astro", void 0);

const $$Section9Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section style="padding: 80px 0; background: #113D48; overflow: hidden;" data-astro-cid-iieegaw7> <div class="container" data-astro-cid-iieegaw7> <div class="title-area text-center" style="margin-bottom: 50px;" data-astro-cid-iieegaw7> <span class="ctc-label" data-ani="fadein" data-astro-cid-iieegaw7>Get in Touch</span> <h2 class="ctc-title" data-ani="slideinup" data-ani-delay="0.1" data-astro-cid-iieegaw7>Contact Us to Help You Choose the Right Boat Experience</h2> </div> <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 48px; align-items: start;" class="ctc-grid" data-astro-cid-iieegaw7> <!-- Left: Contact Info --> <div class="ctc-info" data-ani="slideinup" data-ani-delay="0.15" data-astro-cid-iieegaw7> <div class="ctc-item" data-astro-cid-iieegaw7> <div class="ctc-item-icon" data-astro-cid-iieegaw7><i class="fas fa-phone" data-astro-cid-iieegaw7></i></div> <div data-astro-cid-iieegaw7> <h4 class="ctc-item-title" data-astro-cid-iieegaw7>Call Us</h4> <a href="tel:+302241012345" class="ctc-item-link" data-astro-cid-iieegaw7>+30 22410 12345</a> </div> </div> <div class="ctc-item" data-astro-cid-iieegaw7> <div class="ctc-item-icon" data-astro-cid-iieegaw7><i class="fab fa-whatsapp" data-astro-cid-iieegaw7></i></div> <div data-astro-cid-iieegaw7> <h4 class="ctc-item-title" data-astro-cid-iieegaw7>WhatsApp</h4> <a href="https://wa.me/302241012345" class="ctc-item-link" data-astro-cid-iieegaw7>Send a Message</a> </div> </div> <div class="ctc-item" data-astro-cid-iieegaw7> <div class="ctc-item-icon" data-astro-cid-iieegaw7><i class="fas fa-envelope" data-astro-cid-iieegaw7></i></div> <div data-astro-cid-iieegaw7> <h4 class="ctc-item-title" data-astro-cid-iieegaw7>Email</h4> <a href="mailto:info@rodosyachts.gr" class="ctc-item-link" data-astro-cid-iieegaw7>info@rodosyachts.gr</a> </div> </div> <div class="ctc-item" data-astro-cid-iieegaw7> <div class="ctc-item-icon" data-astro-cid-iieegaw7><i class="fas fa-map-marker-alt" data-astro-cid-iieegaw7></i></div> <div data-astro-cid-iieegaw7> <h4 class="ctc-item-title" data-astro-cid-iieegaw7>Location</h4> <p class="ctc-item-link" style="margin: 0;" data-astro-cid-iieegaw7>Mandraki Harbour, Rhodes 851 00</p> </div> </div> </div> <!-- Right: Contact Form --> <div data-ani="slideinup" data-ani-delay="0.2" data-astro-cid-iieegaw7> <form class="ajax-contact ctc-form" data-astro-cid-iieegaw7> <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;" class="ctc-form-grid" data-astro-cid-iieegaw7> <input type="text" name="name" placeholder="Full Name *" required class="ctc-input" data-astro-cid-iieegaw7> <input type="email" name="email" placeholder="Email Address *" required class="ctc-input" data-astro-cid-iieegaw7> <input type="tel" name="phone" placeholder="Phone Number" class="ctc-input" data-astro-cid-iieegaw7> <select name="subject" class="ctc-input" data-astro-cid-iieegaw7> <option value="" disabled selected data-astro-cid-iieegaw7>I'm interested in...</option> <option value="Boat Tour" data-astro-cid-iieegaw7>Boat Tour</option> <option value="Boat Cruise" data-astro-cid-iieegaw7>Boat Cruise</option> <option value="Yacht Charter" data-astro-cid-iieegaw7>Yacht Charter</option> <option value="Rent a Boat" data-astro-cid-iieegaw7>Rent a Boat</option> <option value="Catamaran Cruise" data-astro-cid-iieegaw7>Catamaran Cruise</option> <option value="Something Else" data-astro-cid-iieegaw7>Something Else</option> </select> </div> <textarea name="message" placeholder="Tell us about your ideal experience — dates, group size, preferences..." required class="ctc-input ctc-textarea" data-astro-cid-iieegaw7></textarea> <button type="submit" class="ctc-btn" data-astro-cid-iieegaw7>Send Message <i class="fa-regular fa-arrow-right" style="margin-left: 8px;" data-astro-cid-iieegaw7></i></button> </form> </div> </div> </div> </section>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/sections/home-one/Section9-Contact.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Rhodes Boat Tours | Boat Trips, Cruises & Rentals | Rhodes Boat Tours", "description": "Book boat tours in Rhodes with local experts. Handpicked boat trips, cruises, yacht charters, rent-a-boat and catamaran experiences. Based in Mandraki Harbour since 2009." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script> ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "  ", " "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rhodes Boat Tours",
    "description": "Local boat tour experts in Rhodes, Greece. Handpicked boat trips, cruises, yacht charters, and rent-a-boat experiences since 2009.",
    "url": "https://rhodosboattours.com",
    "telephone": "+302241012345",
    "email": "info@rodosyachts.gr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mandraki Harbour",
      "addressLocality": "Rhodes",
      "postalCode": "851 00",
      "addressCountry": "GR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.4475,
      "longitude": 28.4275
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.instagram.com/rhodos_yachts",
      "https://www.facebook.com/rhodosyachts"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Boat Experiences in Rhodes",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Rhodes Boat Tours", "description": "Guided sailing tours along the Rhodes coastline" } },
        { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Rhodes Boat Cruises", "description": "All-inclusive day and sunset cruises" } },
        { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Rhodes Yacht Charter", "description": "Bareboat and crewed yacht charters in the Dodecanese" } },
        { "@type": "Offer", "itemOffered": { "@type": "TouristTrip", "name": "Rhodes Rent a Boat", "description": "License-free boat rentals along the Rhodes coast" } }
      ]
    }
  })), renderComponent($$result2, "Header", $$Section1Header, {}), renderComponent($$result2, "HeroBanner", $$Section2HeroBanner, {}), renderComponent($$result2, "Intro", $$Section3Intro, {}), renderComponent($$result2, "BoatCategories", $$Section4BoatCategories, {}), renderComponent($$result2, "WhyChooseUs", $$Section6WhyChooseUs, {}), renderComponent($$result2, "Reviews", $$Section7Reviews, {}), renderComponent($$result2, "BlogPreview", $$Section8BlogPreview, {}), renderComponent($$result2, "Contact", $$Section9Contact, {}), renderComponent($$result2, "GoogleMap", $$Section5GoogleMap, {}), renderComponent($$result2, "Footer", $$FooterFour, {}), renderScript($$result2, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/index.astro?astro&type=script&index=0&lang.ts")) })}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/index.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
