import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { r as renderScript } from './script_BFPKfW-S.mjs';
import { $ as $$BaseLayout, a as $$Section1Header, b as $$FooterFour } from './FooterFour_Cjp_m9da.mjs';
import { $ as $$ServiceHeroFullwidth } from './ServiceHeroFullwidth_CfQc_AeQ.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useMemo } from 'react';
import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const servicePageLabels = {
  "rodos-boat-tours": "Boat Tours",
  "rhodes-boat-trips": "Boat Trips",
  "rodos-boat-cruises": "Boat Cruises",
  "rhodes-catamaran-tours": "Catamaran Tours",
  "rhodes-sailing-trips": "Sailing Trips",
  "rodos-charter": "Yacht Charter",
  "rhodes-rent-a-boat": "Rent a Boat"
};
function TourSearchGrid({ tours }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const categories = useMemo(() => {
    const cats = new Set(tours.map((t) => t.service_page).filter(Boolean));
    return Array.from(cats);
  }, [tours]);
  const filtered = useMemo(() => {
    return tours.filter((t) => {
      const matchSearch = !search || t.title.toLowerCase().includes(search.toLowerCase()) || t.description?.toLowerCase().includes(search.toLowerCase()) || t.badge_label?.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === "all" || t.service_page === filter;
      return matchSearch && matchFilter;
    });
  }, [tours, search, filter]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { style: {
      display: "flex",
      gap: 14,
      marginBottom: 32,
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between"
    }, children: [
      /* @__PURE__ */ jsxs("div", { style: { position: "relative", flex: "1 1 300px", maxWidth: 400 }, children: [
        /* @__PURE__ */ jsx("i", { className: "fas fa-search", style: {
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          color: "#94a3b8",
          fontSize: "0.85rem"
        } }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Search tours, boats, experiences...",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            style: {
              width: "100%",
              padding: "12px 16px 12px 42px",
              border: "1px solid #e2e8f0",
              borderRadius: 10,
              fontSize: "0.9rem",
              fontFamily: "Inter, sans-serif",
              outline: "none",
              background: "#fff",
              boxSizing: "border-box",
              transition: "border 0.2s"
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setFilter("all"),
            style: {
              padding: "8px 16px",
              borderRadius: 20,
              border: "none",
              fontSize: "0.8rem",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
              transition: "all 0.2s",
              background: filter === "all" ? "#113D48" : "#fff",
              color: filter === "all" ? "#fff" : "#64748b",
              boxShadow: filter === "all" ? "none" : "0 1px 3px rgba(0,0,0,0.06)"
            },
            children: [
              "All (",
              tours.length,
              ")"
            ]
          }
        ),
        categories.map((cat) => {
          const count = tours.filter((t) => t.service_page === cat).length;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setFilter(cat),
              style: {
                padding: "8px 16px",
                borderRadius: 20,
                border: "none",
                fontSize: "0.8rem",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                transition: "all 0.2s",
                background: filter === cat ? "#1CA8CB" : "#fff",
                color: filter === cat ? "#fff" : "#64748b",
                boxShadow: filter === cat ? "none" : "0 1px 3px rgba(0,0,0,0.06)"
              },
              children: [
                servicePageLabels[cat] || cat,
                " (",
                count,
                ")"
              ]
            },
            cat
          );
        })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.82rem", color: "#94a3b8", marginBottom: 20 }, children: [
      filtered.length,
      " experience",
      filtered.length !== 1 ? "s" : "",
      " found",
      search && ` for "${search}"`
    ] }),
    filtered.length > 0 ? /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }, className: "tsg-grid", children: filtered.map((tour) => {
      const img = tour.images?.[0] || tour.image_url || "/assets/img/gallery/yacht/crystal-water-1.jpg";
      return /* @__PURE__ */ jsxs(
        "a",
        {
          href: `/tour-detail/${tour.id}`,
          className: "tsg-card",
          style: {
            display: "flex",
            flexDirection: "column",
            textDecoration: "none",
            color: "inherit",
            background: "#fff",
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { style: { height: 220, overflow: "hidden", position: "relative" }, children: [
              /* @__PURE__ */ jsx("img", { src: img, alt: tour.title, loading: "lazy", style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              } }),
              tour.badge_label && /* @__PURE__ */ jsx("span", { style: {
                position: "absolute",
                top: 14,
                right: 14,
                background: "rgba(17,61,72,0.85)",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                padding: "5px 12px",
                borderRadius: 6,
                backdropFilter: "blur(4px)"
              }, children: tour.badge_label }),
              tour.service_page && /* @__PURE__ */ jsx("span", { style: {
                position: "absolute",
                bottom: 14,
                left: 14,
                background: "rgba(28,168,203,0.9)",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.68rem",
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 6
              }, children: servicePageLabels[tour.service_page] || tour.service_page })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { padding: 24, display: "flex", flexDirection: "column", flex: 1 }, children: [
              /* @__PURE__ */ jsx("h3", { style: {
                fontFamily: "Manrope, sans-serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#113D48",
                marginBottom: 8
              }, children: tour.title }),
              /* @__PURE__ */ jsx("p", { style: {
                fontSize: "0.88rem",
                lineHeight: 1.6,
                color: "#6b7c85",
                marginBottom: 14,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }, children: tour.description }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }, children: [
                tour.duration && /* @__PURE__ */ jsxs("span", { style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: "0.75rem",
                  color: "#5a6a72",
                  background: "#f0f4f5",
                  padding: "4px 10px",
                  borderRadius: 20
                }, children: [
                  /* @__PURE__ */ jsx("i", { className: "far fa-clock", style: { fontSize: "0.7rem", color: "#1CA8CB" } }),
                  " ",
                  tour.duration
                ] }),
                tour.guests && /* @__PURE__ */ jsxs("span", { style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: "0.75rem",
                  color: "#5a6a72",
                  background: "#f0f4f5",
                  padding: "4px 10px",
                  borderRadius: 20
                }, children: [
                  /* @__PURE__ */ jsx("i", { className: "far fa-user", style: { fontSize: "0.7rem", color: "#1CA8CB" } }),
                  " ",
                  tour.guests
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "auto",
                paddingTop: 14,
                borderTop: "1px solid #f0f0f0"
              }, children: [
                tour.price && /* @__PURE__ */ jsx("span", { style: { fontFamily: "Manrope, sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#1CA8CB" }, children: tour.price }),
                /* @__PURE__ */ jsxs("span", { style: { fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, color: "#113D48" }, children: [
                  "View Details ",
                  /* @__PURE__ */ jsx("i", { className: "fa-regular fa-arrow-right", style: { marginLeft: 4 } })
                ] })
              ] })
            ] })
          ]
        },
        tour.id
      );
    }) }) : /* @__PURE__ */ jsxs("div", { style: { padding: 60, textAlign: "center", color: "#94a3b8", background: "#fff", borderRadius: 12 }, children: [
      /* @__PURE__ */ jsx("i", { className: "fas fa-search", style: { fontSize: "2rem", marginBottom: 16, opacity: 0.2 } }),
      /* @__PURE__ */ jsx("p", { style: { fontSize: "1rem", marginBottom: 4 }, children: "No experiences found" }),
      /* @__PURE__ */ jsx("p", { style: { fontSize: "0.85rem" }, children: "Try a different search or filter." })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        .tsg-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important; }
        .tsg-card:hover img { transform: scale(1.05); }
        @media (max-width: 991px) { .tsg-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 575px) { .tsg-grid { grid-template-columns: 1fr !important; } }
        input:focus { border-color: #1CA8CB !important; box-shadow: 0 0 0 3px rgba(28,168,203,0.1); }
      ` })
  ] });
}

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let tours = [];
  try {
    const supabase = createAdminClient();
    if (supabase) {
      const { data } = await supabase.from("tours").select("*").eq("status", "approved").order("created_at", { ascending: false });
      tours = data || [];
    }
  } catch (e) {
    console.error("Failed to fetch tours:", e);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Best Boat Tours in Rhodes — Experiences & Activities | Rhodes Boat Tours", "description": "Best boat tours in Rhodes. All approved boat tours, trips, cruises, sailing, island hopping and local activities. Handpicked by locals." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Section1Header, {})}  ${renderComponent($$result2, "ServiceHeroFullwidth", $$ServiceHeroFullwidth, { "title": "Best Boat Tours in Rhodes", "subtitle": "Experiences and Activities on the Island", "backgroundImage": "/assets/img/gallery/yacht/greek-island-1.jpg", "heroVideo": "/assets/img/hero/services/boat-tours.mp4" })}  ${maybeRenderHead()}<section style="padding: 60px 0 40px;"> <div class="container"> <div style="max-width: 750px; margin: 0 auto; text-align: center;"> <p style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.2rem; line-height: 1.7; color: #1CA8CB; margin-bottom: 24px;" data-ani="fadein">
Discover all the best boat experiences in Rhodes — handpicked by locals and verified by our team.
</p> <p style="font-size: 1rem; line-height: 1.8; color: #4a5568; margin-bottom: 0;" data-ani="fadein" data-ani-delay="0.1">
Browse boat tours, sailing trips, catamaran cruises, yacht charters, rent-a-boat options and unique experiences. Use the search and filters to find exactly what you are looking for.
</p> </div> </div> </section>  <section style="padding: 40px 0 80px; background: #f8fafb;"> <div class="container"> ${tours.length > 0 ? renderTemplate`${renderComponent($$result2, "TourSearchGrid", TourSearchGrid, { "tours": tours, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/components/dashboard/TourSearchGrid", "client:component-export": "default" })}` : renderTemplate`<div style="text-align: center; padding: 80px 20px;"> <i class="fas fa-ship" style="font-size: 3rem; color: #cbd5e1; margin-bottom: 20px;"></i> <h2 style="font-family: 'Manrope', sans-serif; font-size: 1.3rem; font-weight: 700; color: #113D48; margin-bottom: 12px;">No Tours Available Yet</h2> <p style="font-size: 0.95rem; color: #64748b; max-width: 500px; margin: 0 auto;">
We are currently adding new boat experiences to this page. Check back soon or contact us for personal recommendations.
</p> </div>`} </div> </section>  <section style="padding: 80px 0; background: #113D48;"> <div class="container"> <div style="max-width: 700px; margin: 0 auto; text-align: center;"> <h2 style="font-family: 'Manrope', sans-serif; font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; color: #fff; margin-bottom: 20px;" data-ani="slideinup">Looking for Something Specific?</h2> <p style="font-size: 1rem; line-height: 1.75; color: rgba(255,255,255,0.7); margin-bottom: 36px;" data-ani="fadein" data-ani-delay="0.1">
Can't find what you're looking for? Contact us and we will help you find the perfect boat experience in Rhodes.
</p> <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;" data-ani="slideinup" data-ani-delay="0.2"> <a href="/contact" class="th-btn style3 th-icon">Send Us a Message</a> <a href="https://wa.me/302241012345" style="display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; font-family: 'Inter', sans-serif; font-size: 0.85rem; font-weight: 600; color: #fff; border: 1.5px solid rgba(255,255,255,0.3); border-radius: 8px; text-decoration: none; transition: all 0.3s ease;"><i class="fab fa-whatsapp"></i> WhatsApp</a> </div> </div> </div> </section> ${renderComponent($$result2, "FooterFour", $$FooterFour, {})} ` })} ${renderScript($$result, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/things-to-do/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/things-to-do/index.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/things-to-do/index.astro";
const $$url = "/things-to-do";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
