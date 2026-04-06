import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { r as renderScript } from './script_BFPKfW-S.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout_ByZJLz3U.mjs';
import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const prerender = false;
const $$Bookings = createComponent(async ($$result, $$props, $$slots) => {
  const supabase = createAdminClient();
  const { data: bookings } = await supabase.from("bookings").select("*, tours(title)").order("created_at", { ascending: false });
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "All Bookings" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06);"> ${bookings && bookings.length > 0 ? renderTemplate`<div style="overflow-x: auto;"> <table> <thead> <tr> <th>Customer</th> <th>Email</th> <th>Tour</th> <th>Date</th> <th>Guests</th> <th>Status</th> <th>Actions</th> </tr> </thead> <tbody> ${bookings.map((b) => renderTemplate`<tr> <td style="font-weight: 600;">${b.customer_name}</td> <td><a${addAttribute(`mailto:${b.customer_email}`, "href")} style="color: #1CA8CB;">${b.customer_email}</a></td> <td>${b.tours?.title || "—"}</td> <td style="white-space: nowrap;">${b.booking_date}</td> <td>${b.guests}</td> <td> <span${addAttribute({
    padding: "3px 10px",
    borderRadius: 20,
    fontSize: "0.72rem",
    fontWeight: 600,
    textTransform: "uppercase",
    background: b.status === "confirmed" ? "#D1FAE5" : b.status === "pending" ? "#FEF3C7" : "#FEE2E2",
    color: b.status === "confirmed" ? "#065F46" : b.status === "pending" ? "#92400E" : "#991B1B"
  }, "style")}>${b.status}</span> </td> <td> <div style="display: flex; gap: 8px;"> ${b.status === "pending" && renderTemplate`<button data-action="confirm"${addAttribute(b.id, "data-id")} style="padding: 4px 12px; background: #10B981; color: #fff; border: none; border-radius: 6px; font-size: 0.75rem; cursor: pointer;">Confirm</button>`} ${b.status !== "cancelled" && renderTemplate`<button data-action="cancel"${addAttribute(b.id, "data-id")} style="padding: 4px 12px; background: #EF4444; color: #fff; border: none; border-radius: 6px; font-size: 0.75rem; cursor: pointer;">Cancel</button>`} </div> </td> </tr>`)} </tbody> </table> </div>` : renderTemplate`<div style="padding: 60px; text-align: center; color: #6b7c85;"> <i class="fas fa-calendar" style="font-size: 2.5rem; margin-bottom: 16px; opacity: 0.2;"></i> <p>No bookings yet</p> </div>`} </div> ` })} ${renderScript($$result, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/admin/bookings.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/admin/bookings.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/admin/bookings.astro";
const $$url = "/dashboard/admin/bookings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Bookings,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
