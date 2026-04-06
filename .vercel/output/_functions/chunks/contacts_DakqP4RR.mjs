import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout_ByZJLz3U.mjs';
import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const prerender = false;
const $$Contacts = createComponent(async ($$result, $$props, $$slots) => {
  const supabase = createAdminClient();
  const { data: contacts } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Contact Submissions" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06);"> ${contacts && contacts.length > 0 ? renderTemplate`<div style="overflow-x: auto;"> <table> <thead> <tr> <th>Name</th> <th>Email</th> <th>Subject</th> <th>Date</th> <th>Status</th> </tr> </thead> <tbody> ${contacts.map((c) => renderTemplate`<tr${addAttribute({ opacity: c.is_read ? 0.6 : 1 }, "style")}> <td${addAttribute({ fontWeight: c.is_read ? 400 : 600 }, "style")}>${c.name}</td> <td><a${addAttribute(`mailto:${c.email}`, "href")} style="color: #1CA8CB;">${c.email}</a></td> <td>${c.subject || "—"}</td> <td style="white-space: nowrap;">${new Date(c.created_at).toLocaleDateString()}</td> <td> <span${addAttribute({
    padding: "3px 10px",
    borderRadius: 20,
    fontSize: "0.72rem",
    fontWeight: 600,
    background: c.is_read ? "#E5E7EB" : "#DBEAFE",
    color: c.is_read ? "#374151" : "#1E40AF"
  }, "style")}>${c.is_read ? "Read" : "New"}</span> </td> </tr>`)} </tbody> </table> </div>` : renderTemplate`<div style="padding: 60px; text-align: center; color: #6b7c85;"> <i class="fas fa-envelope-open" style="font-size: 2.5rem; margin-bottom: 16px; opacity: 0.2;"></i> <p>No contact submissions yet</p> </div>`} </div> ` })}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/admin/contacts.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/admin/contacts.astro";
const $$url = "/dashboard/admin/contacts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacts,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
