import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout_ByZJLz3U.mjs';
import { S as StatsCard } from './StatsCard_Cc8gd4hn.mjs';
import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const supabase = createAdminClient();
  const [
    { count: totalBookings },
    { count: pendingTours },
    { count: unreadContacts },
    { count: totalUsers }
  ] = await Promise.all([
    supabase.from("bookings").select("*", { count: "exact", head: true }),
    supabase.from("tours").select("*", { count: "exact", head: true }).eq("status", "pending"),
    supabase.from("contact_submissions").select("*", { count: "exact", head: true }).eq("is_read", false),
    supabase.from("profiles").select("*", { count: "exact", head: true })
  ]);
  const { data: recentBookings } = await supabase.from("bookings").select("*").order("created_at", { ascending: false }).limit(5);
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Admin Overview", "data-astro-cid-ujbs625c": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 32px;" class="admin-stats-grid" data-astro-cid-ujbs625c> ${renderComponent($$result2, "StatsCard", StatsCard, { "title": "Total Bookings", "value": totalBookings || 0, "icon": "fas fa-calendar-check", "color": "#1CA8CB", "data-astro-cid-ujbs625c": true })} ${renderComponent($$result2, "StatsCard", StatsCard, { "title": "Pending Tours", "value": pendingTours || 0, "icon": "fas fa-clock", "color": "#F59E0B", "data-astro-cid-ujbs625c": true })} ${renderComponent($$result2, "StatsCard", StatsCard, { "title": "Unread Contacts", "value": unreadContacts || 0, "icon": "fas fa-envelope", "color": "#EF4444", "data-astro-cid-ujbs625c": true })} ${renderComponent($$result2, "StatsCard", StatsCard, { "title": "Total Users", "value": totalUsers || 0, "icon": "fas fa-users", "color": "#8B5CF6", "data-astro-cid-ujbs625c": true })} </div>  <div style="display: flex; gap: 12px; margin-bottom: 32px; flex-wrap: wrap;" data-astro-cid-ujbs625c> <a href="/dashboard/admin/tours" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: #1CA8CB; color: #fff; border-radius: 8px; text-decoration: none; font-size: 0.85rem; font-weight: 600;" data-astro-cid-ujbs625c> <i class="fas fa-ship" data-astro-cid-ujbs625c></i> Review Tours
</a> <a href="/dashboard/admin/contacts" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: #113D48; color: #fff; border-radius: 8px; text-decoration: none; font-size: 0.85rem; font-weight: 600;" data-astro-cid-ujbs625c> <i class="fas fa-envelope" data-astro-cid-ujbs625c></i> View Contacts
</a> <a href="/dashboard/admin/users" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: #fff; color: #113D48; border: 1px solid #e0e0e0; border-radius: 8px; text-decoration: none; font-size: 0.85rem; font-weight: 600;" data-astro-cid-ujbs625c> <i class="fas fa-user-plus" data-astro-cid-ujbs625c></i> Manage Users
</a> </div>  <div style="background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06);" data-astro-cid-ujbs625c> <div style="padding: 20px 24px; border-bottom: 1px solid #f0f0f0;" data-astro-cid-ujbs625c> <h2 style="font-family: 'Manrope', sans-serif; font-size: 1.1rem; font-weight: 700; color: #113D48; margin: 0;" data-astro-cid-ujbs625c>Recent Bookings</h2> </div> ${recentBookings && recentBookings.length > 0 ? renderTemplate`<table data-astro-cid-ujbs625c> <thead data-astro-cid-ujbs625c> <tr data-astro-cid-ujbs625c> <th data-astro-cid-ujbs625c>Customer</th> <th data-astro-cid-ujbs625c>Date</th> <th data-astro-cid-ujbs625c>Guests</th> <th data-astro-cid-ujbs625c>Status</th> </tr> </thead> <tbody data-astro-cid-ujbs625c> ${recentBookings.map((booking) => renderTemplate`<tr data-astro-cid-ujbs625c> <td data-astro-cid-ujbs625c>${booking.customer_name}</td> <td data-astro-cid-ujbs625c>${booking.booking_date}</td> <td data-astro-cid-ujbs625c>${booking.guests}</td> <td data-astro-cid-ujbs625c> <span${addAttribute({
    padding: "3px 10px",
    borderRadius: 20,
    fontSize: "0.72rem",
    fontWeight: 600,
    textTransform: "uppercase",
    background: booking.status === "confirmed" ? "#D1FAE5" : booking.status === "pending" ? "#FEF3C7" : "#FEE2E2",
    color: booking.status === "confirmed" ? "#065F46" : booking.status === "pending" ? "#92400E" : "#991B1B"
  }, "style")} data-astro-cid-ujbs625c>${booking.status}</span> </td> </tr>`)} </tbody> </table>` : renderTemplate`<div style="padding: 40px; text-align: center; color: #6b7c85;" data-astro-cid-ujbs625c> <i class="fas fa-inbox" style="font-size: 2rem; margin-bottom: 12px; opacity: 0.3;" data-astro-cid-ujbs625c></i> <p data-astro-cid-ujbs625c>No bookings yet</p> </div>`} </div> ` })}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/admin/index.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/admin/index.astro";
const $$url = "/dashboard/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
