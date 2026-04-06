import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout_ByZJLz3U.mjs';
import { S as StatsCard } from './StatsCard_Cc8gd4hn.mjs';
import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const userId = Astro2.locals.user?.id;
  const supabase = createAdminClient();
  const [
    { count: myTours },
    { count: myBookings },
    { count: pendingBookings },
    { count: approvedTours }
  ] = await Promise.all([
    supabase.from("tours").select("*", { count: "exact", head: true }).eq("owner_id", userId),
    supabase.from("bookings").select("*, tours!inner(owner_id)", { count: "exact", head: true }).eq("tours.owner_id", userId),
    supabase.from("bookings").select("*, tours!inner(owner_id)", { count: "exact", head: true }).eq("tours.owner_id", userId).eq("status", "pending"),
    supabase.from("tours").select("*", { count: "exact", head: true }).eq("owner_id", userId).eq("status", "approved")
  ]);
  const { data: recentBookings } = await supabase.from("bookings").select("*, tours!inner(title, owner_id)").eq("tours.owner_id", userId).order("created_at", { ascending: false }).limit(5);
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "My Dashboard", "data-astro-cid-zorultch": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 32px;" class="user-stats-grid" data-astro-cid-zorultch> ${renderComponent($$result2, "StatsCard", StatsCard, { "title": "My Tours", "value": myTours || 0, "icon": "fas fa-ship", "color": "#1CA8CB", "data-astro-cid-zorultch": true })} ${renderComponent($$result2, "StatsCard", StatsCard, { "title": "Approved Tours", "value": approvedTours || 0, "icon": "fas fa-check-circle", "color": "#10B981", "data-astro-cid-zorultch": true })} ${renderComponent($$result2, "StatsCard", StatsCard, { "title": "Total Bookings", "value": myBookings || 0, "icon": "fas fa-calendar-check", "color": "#8B5CF6", "data-astro-cid-zorultch": true })} ${renderComponent($$result2, "StatsCard", StatsCard, { "title": "Pending Bookings", "value": pendingBookings || 0, "icon": "fas fa-clock", "color": "#F59E0B", "data-astro-cid-zorultch": true })} </div>  <div style="display: flex; gap: 12px; margin-bottom: 32px; flex-wrap: wrap;" data-astro-cid-zorultch> <a href="/dashboard/user/tours/new" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: #1CA8CB; color: #fff; border-radius: 8px; text-decoration: none; font-size: 0.85rem; font-weight: 600;" data-astro-cid-zorultch> <i class="fas fa-plus" data-astro-cid-zorultch></i> Create Tour
</a> <a href="/dashboard/user/calendar" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: #113D48; color: #fff; border-radius: 8px; text-decoration: none; font-size: 0.85rem; font-weight: 600;" data-astro-cid-zorultch> <i class="fas fa-calendar" data-astro-cid-zorultch></i> View Calendar
</a> <a href="/dashboard/user/tours" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: #fff; color: #113D48; border: 1px solid #e0e0e0; border-radius: 8px; text-decoration: none; font-size: 0.85rem; font-weight: 600;" data-astro-cid-zorultch> <i class="fas fa-list" data-astro-cid-zorultch></i> My Tours
</a> </div>  <div style="background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06);" data-astro-cid-zorultch> <div style="padding: 20px 24px; border-bottom: 1px solid #f0f0f0;" data-astro-cid-zorultch> <h2 style="font-family: 'Manrope', sans-serif; font-size: 1.1rem; font-weight: 700; color: #113D48; margin: 0;" data-astro-cid-zorultch>Recent Bookings</h2> </div> ${recentBookings && recentBookings.length > 0 ? renderTemplate`<table data-astro-cid-zorultch> <thead data-astro-cid-zorultch> <tr data-astro-cid-zorultch> <th data-astro-cid-zorultch>Customer</th> <th data-astro-cid-zorultch>Tour</th> <th data-astro-cid-zorultch>Date</th> <th data-astro-cid-zorultch>Guests</th> <th data-astro-cid-zorultch>Status</th> </tr> </thead> <tbody data-astro-cid-zorultch> ${recentBookings.map((booking) => renderTemplate`<tr data-astro-cid-zorultch> <td data-astro-cid-zorultch>${booking.customer_name}</td> <td data-astro-cid-zorultch>${booking.tours?.title}</td> <td data-astro-cid-zorultch>${booking.booking_date}</td> <td data-astro-cid-zorultch>${booking.guests}</td> <td data-astro-cid-zorultch> <span${addAttribute({
    padding: "3px 10px",
    borderRadius: 20,
    fontSize: "0.72rem",
    fontWeight: 600,
    textTransform: "uppercase",
    background: booking.status === "confirmed" ? "#D1FAE5" : booking.status === "pending" ? "#FEF3C7" : "#FEE2E2",
    color: booking.status === "confirmed" ? "#065F46" : booking.status === "pending" ? "#92400E" : "#991B1B"
  }, "style")} data-astro-cid-zorultch>${booking.status}</span> </td> </tr>`)} </tbody> </table>` : renderTemplate`<div style="padding: 40px; text-align: center; color: #6b7c85;" data-astro-cid-zorultch> <i class="fas fa-inbox" style="font-size: 2rem; margin-bottom: 12px; opacity: 0.3;" data-astro-cid-zorultch></i> <p data-astro-cid-zorultch>No bookings yet. Create a tour to start receiving bookings.</p> </div>`} </div> ` })}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/user/index.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/user/index.astro";
const $$url = "/dashboard/user";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
