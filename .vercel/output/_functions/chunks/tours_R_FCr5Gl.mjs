import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { r as renderScript } from './script_BFPKfW-S.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout_ByZJLz3U.mjs';
import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const prerender = false;
const $$Tours = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Tours;
  const userId = Astro2.locals.user?.id;
  const supabase = createAdminClient();
  const { data: tours } = await supabase.from("tours").select("*").eq("owner_id", userId).order("created_at", { ascending: false });
  const servicePageLabels = {
    "rodos-boat-tours": "Boat Tours",
    "rhodes-boat-trips": "Boat Trips",
    "rodos-boat-cruises": "Boat Cruises",
    "rhodes-catamaran-tours": "Catamaran Tours",
    "rhodes-sailing-trips": "Sailing Trips",
    "rodos-charter": "Yacht Charter",
    "rhodes-rent-a-boat": "Rent a Boat"
  };
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "My Tours" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;"> <a href="/dashboard/user/tours/new" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: #1CA8CB; color: #fff; border-radius: 8px; text-decoration: none; font-size: 0.85rem; font-weight: 600; font-family: 'Inter', sans-serif;"> <i class="fas fa-plus"></i> Create New Tour
</a> <p style="font-size: 0.8rem; color: #94a3b8; margin: 0;">${tours?.length || 0} tour${(tours?.length || 0) !== 1 ? "s" : ""}</p> </div>  ${tours && tours.length > 0 ? renderTemplate`<div style="display: grid; gap: 12px;"> ${tours.map((tour) => renderTemplate`<div style="background: #fff; border-radius: 12px; padding: 20px 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 16px;" class="tour-row">  ${tour.image_url ? renderTemplate`<img${addAttribute(tour.image_url, "src")} alt="" style="width: 72px; height: 52px; object-fit: cover; border-radius: 8px; flex-shrink: 0;">` : renderTemplate`<div style="width: 72px; height: 52px; background: #f1f5f9; border-radius: 8px; flex-shrink: 0; display: flex; align-items: center; justify-content: center;"> <i class="fas fa-image" style="color: #cbd5e1;"></i> </div>`}  <div style="flex: 1; min-width: 0;"> <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;"> <p style="font-family: 'Manrope', sans-serif; font-weight: 700; color: #113D48; margin: 0; font-size: 0.95rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> ${tour.title} </p> <span${addAttribute({
    padding: "2px 8px",
    borderRadius: 12,
    fontSize: "0.65rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    flexShrink: 0,
    background: tour.status === "approved" ? "#D1FAE5" : tour.status === "pending" ? "#FEF3C7" : tour.status === "rejected" ? "#FEE2E2" : "#E5E7EB",
    color: tour.status === "approved" ? "#065F46" : tour.status === "pending" ? "#92400E" : tour.status === "rejected" ? "#991B1B" : "#374151"
  }, "style")}>${tour.status}</span> </div> <div style="display: flex; gap: 12px; font-size: 0.78rem; color: #94a3b8;"> ${tour.service_page && renderTemplate`<span>${servicePageLabels[tour.service_page] || tour.service_page}</span>`} ${tour.price && renderTemplate`<span>${tour.price}</span>`} ${tour.duration && renderTemplate`<span>${tour.duration}</span>`} </div> </div>  <div style="display: flex; gap: 8px; flex-shrink: 0;"> <a${addAttribute(`/dashboard/user/tours/${tour.id}`, "href")} style="padding: 7px 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.78rem; font-weight: 500; color: #475569; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;"> <i class="fas fa-pen" style="font-size: 0.7rem;"></i> Edit
</a> <button${addAttribute(tour.id, "data-delete")} style="padding: 7px 14px; background: #fff; border: 1px solid #fecaca; border-radius: 6px; font-size: 0.78rem; font-weight: 500; cursor: pointer; color: #dc2626; font-family: 'Inter', sans-serif;"> <i class="fas fa-trash" style="font-size: 0.7rem;"></i> </button> </div> </div>`)} </div>` : renderTemplate`<div style="padding: 80px; text-align: center; color: #94a3b8; background: #fff; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.06);"> <i class="fas fa-ship" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.2;"></i> <p style="font-size: 1rem; margin-bottom: 8px;">No tours yet</p> <p style="font-size: 0.85rem; margin-bottom: 24px;">Create your first tour to start receiving bookings.</p> <a href="/dashboard/user/tours/new" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 24px; background: #1CA8CB; color: #fff; border-radius: 8px; text-decoration: none; font-size: 0.85rem; font-weight: 600;"> <i class="fas fa-plus"></i> Create Tour
</a> </div>`}` })} ${renderScript($$result, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/user/tours.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/user/tours.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/user/tours.astro";
const $$url = "/dashboard/user/tours";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tours,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
