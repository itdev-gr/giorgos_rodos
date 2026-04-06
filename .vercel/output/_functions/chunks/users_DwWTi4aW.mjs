import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate, x as maybeRenderHead, a2 as addAttribute } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { r as renderScript } from './script_BFPKfW-S.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout_ByZJLz3U.mjs';
import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const prerender = false;
const $$Users = createComponent(async ($$result, $$props, $$slots) => {
  const supabase = createAdminClient();
  const { data: users } = await supabase.from("profiles").select("*").order("created_at", { ascending: false });
  const { data: tourCounts } = await supabase.from("tours").select("owner_id, status");
  const countMap = {};
  tourCounts?.forEach((t) => {
    if (!countMap[t.owner_id]) countMap[t.owner_id] = { total: 0, approved: 0, pending: 0 };
    countMap[t.owner_id].total++;
    if (t.status === "approved") countMap[t.owner_id].approved++;
    if (t.status === "pending") countMap[t.owner_id].pending++;
  });
  const totalUsers = users?.length || 0;
  const adminCount = users?.filter((u) => u.role === "admin").length || 0;
  const userCount = totalUsers - adminCount;
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "User Management" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 28px;"> <div style="background: #fff; border-radius: 12px; padding: 20px 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 14px;"> <div style="width: 44px; height: 44px; border-radius: 10px; background: #DBEAFE; color: #1E40AF; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;"> <i class="fas fa-users"></i> </div> <div> <p style="font-size: 0.75rem; color: #6b7c85; margin: 0 0 2px;">Total Users</p> <p style="font-size: 1.3rem; font-weight: 700; color: #113D48; margin: 0; font-family: 'Manrope', sans-serif;">${totalUsers}</p> </div> </div> <div style="background: #fff; border-radius: 12px; padding: 20px 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 14px;"> <div style="width: 44px; height: 44px; border-radius: 10px; background: #FCE7F3; color: #9D174D; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;"> <i class="fas fa-user-shield"></i> </div> <div> <p style="font-size: 0.75rem; color: #6b7c85; margin: 0 0 2px;">Admins</p> <p style="font-size: 1.3rem; font-weight: 700; color: #113D48; margin: 0; font-family: 'Manrope', sans-serif;">${adminCount}</p> </div> </div> <div style="background: #fff; border-radius: 12px; padding: 20px 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 14px;"> <div style="width: 44px; height: 44px; border-radius: 10px; background: #D1FAE5; color: #065F46; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;"> <i class="fas fa-user"></i> </div> <div> <p style="font-size: 0.75rem; color: #6b7c85; margin: 0 0 2px;">Operators</p> <p style="font-size: 1.3rem; font-weight: 700; color: #113D48; margin: 0; font-family: 'Manrope', sans-serif;">${userCount}</p> </div> </div> </div>  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;"> <button id="create-user-btn" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: #1CA8CB; color: #fff; border: none; border-radius: 8px; font-size: 0.85rem; font-weight: 600; cursor: pointer; font-family: 'Inter', sans-serif; transition: background 0.2s;"> <i class="fas fa-user-plus"></i> Create User
</button> <p style="font-size: 0.8rem; color: #94a3b8; margin: 0;">${totalUsers} user${totalUsers !== 1 ? "s" : ""} registered</p> </div>  <div id="create-user-form" style="display: none; background: #fff; border-radius: 12px; padding: 28px; margin-bottom: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;"> <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;"> <h3 style="font-family: 'Manrope', sans-serif; font-size: 1.05rem; font-weight: 700; color: #113D48; margin: 0;">Create New User</h3> <button type="button" id="cancel-create" style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: #f1f5f9; border: none; border-radius: 8px; cursor: pointer; color: #64748b; font-size: 0.9rem;"> <i class="fas fa-times"></i> </button> </div> <form id="new-user-form" style="display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 16px 32px;"> <div> <label style="display: block; font-size: 0.78rem; font-weight: 600; color: #475569; margin-bottom: 5px;">Email *</label> <input name="email" type="email" placeholder="user@example.com" required style="width: 100%; padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.9rem; font-family: 'Inter', sans-serif; outline: none; transition: border 0.2s;"> </div> <div> <label style="display: block; font-size: 0.78rem; font-weight: 600; color: #475569; margin-bottom: 5px;">Password *</label> <input name="password" type="password" placeholder="Min 6 characters" required style="width: 100%; padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.9rem; font-family: 'Inter', sans-serif; outline: none; transition: border 0.2s;"> </div> <div> <label style="display: block; font-size: 0.78rem; font-weight: 600; color: #475569; margin-bottom: 5px;">Full Name</label> <input name="full_name" type="text" placeholder="John Doe" style="width: 100%; padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.9rem; font-family: 'Inter', sans-serif; outline: none;"> </div> <div> <label style="display: block; font-size: 0.78rem; font-weight: 600; color: #475569; margin-bottom: 5px;">Company Name</label> <input name="company_name" type="text" placeholder="Company (optional)" style="width: 100%; padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.9rem; font-family: 'Inter', sans-serif; outline: none;"> </div> <div> <label style="display: block; font-size: 0.78rem; font-weight: 600; color: #475569; margin-bottom: 5px;">Phone</label> <input name="phone" type="tel" placeholder="+30 ..." style="width: 100%; padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.9rem; font-family: 'Inter', sans-serif; outline: none;"> </div> <div> <label style="display: block; font-size: 0.78rem; font-weight: 600; color: #475569; margin-bottom: 5px;">Role</label> <select name="role" style="width: 100%; padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.9rem; font-family: 'Inter', sans-serif; outline: none; background: #fff; cursor: pointer;"> <option value="user">Operator (User)</option> <option value="admin">Admin</option> </select> </div> <div style="grid-column: 1 / -1; display: flex; gap: 10px; margin-top: 4px;"> <button type="submit" style="padding: 10px 28px; background: #1CA8CB; color: #fff; border: none; border-radius: 8px; font-size: 0.85rem; font-weight: 600; cursor: pointer; font-family: 'Inter', sans-serif; transition: background 0.2s;"> <i class="fas fa-check" style="margin-right: 6px;"></i> Create User
</button> </div> </form> </div>  <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 16px;"> ${users && users.map((u) => {
    const counts = countMap[u.id] || { total: 0, approved: 0, pending: 0 };
    const initials = (u.full_name || u.id.slice(0, 2)).split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
    return renderTemplate`<div style="background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); transition: box-shadow 0.2s;" class="user-card"> <!-- Header --> <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 18px;"> <div${addAttribute({
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      flexShrink: 0,
      background: u.role === "admin" ? "#113D48" : "#1CA8CB",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Manrope, sans-serif",
      fontWeight: 700,
      fontSize: "0.95rem"
    }, "style")}>${initials}</div> <div style="flex: 1; min-width: 0;"> <div style="display: flex; align-items: center; gap: 8px;"> <p style="font-family: 'Manrope', sans-serif; font-weight: 700; color: #113D48; margin: 0; font-size: 0.95rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"> ${u.full_name || "Unnamed User"} </p> <span${addAttribute({
      padding: "2px 8px",
      borderRadius: 12,
      fontSize: "0.65rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      background: u.role === "admin" ? "#DBEAFE" : "#F0FDF4",
      color: u.role === "admin" ? "#1E40AF" : "#166534"
    }, "style")}>${u.role}</span> </div> ${u.company_name && renderTemplate`<p style="font-size: 0.78rem; color: #94a3b8; margin: 2px 0 0;">${u.company_name}</p>`} </div> </div> <!-- Info --> <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; padding: 14px; background: #f8fafc; border-radius: 8px;"> ${u.phone && renderTemplate`<div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: #475569;"> <i class="fas fa-phone" style="width: 16px; text-align: center; color: #94a3b8; font-size: 0.75rem;"></i> ${u.phone} </div>`} <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: #475569;"> <i class="fas fa-calendar" style="width: 16px; text-align: center; color: #94a3b8; font-size: 0.75rem;"></i>
Joined ${new Date(u.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} </div> </div> <!-- Tour Stats --> ${u.role === "user" && renderTemplate`<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 16px;"> <div style="text-align: center; padding: 10px 4px; background: #f1f5f9; border-radius: 8px;"> <p style="font-size: 1.1rem; font-weight: 700; color: #113D48; margin: 0; font-family: 'Manrope', sans-serif;">${counts.total}</p> <p style="font-size: 0.68rem; color: #94a3b8; margin: 2px 0 0;">Tours</p> </div> <div style="text-align: center; padding: 10px 4px; background: #f0fdf4; border-radius: 8px;"> <p style="font-size: 1.1rem; font-weight: 700; color: #166534; margin: 0; font-family: 'Manrope', sans-serif;">${counts.approved}</p> <p style="font-size: 0.68rem; color: #94a3b8; margin: 2px 0 0;">Approved</p> </div> <div style="text-align: center; padding: 10px 4px; background: #fffbeb; border-radius: 8px;"> <p style="font-size: 1.1rem; font-weight: 700; color: #92400E; margin: 0; font-family: 'Manrope', sans-serif;">${counts.pending}</p> <p style="font-size: 0.68rem; color: #94a3b8; margin: 2px 0 0;">Pending</p> </div> </div>`} <!-- Actions --> <div style="display: flex; gap: 8px; padding-top: 14px; border-top: 1px solid #f1f5f9;"> <button data-action="edit"${addAttribute(u.id, "data-id")} style="flex: 1; padding: 8px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 0.78rem; font-weight: 500; cursor: pointer; color: #475569; font-family: 'Inter', sans-serif; transition: all 0.2s;"> <i class="fas fa-pen" style="margin-right: 4px; font-size: 0.7rem;"></i> Edit
</button> <button data-action="delete"${addAttribute(u.id, "data-id")} style="padding: 8px 14px; background: #fff; border: 1px solid #fecaca; border-radius: 6px; font-size: 0.78rem; font-weight: 500; cursor: pointer; color: #dc2626; font-family: 'Inter', sans-serif; transition: all 0.2s;"> <i class="fas fa-trash" style="font-size: 0.7rem;"></i> </button> </div> </div>`;
  })} </div> ${(!users || users.length === 0) && renderTemplate`<div style="padding: 80px; text-align: center; color: #94a3b8; background: #fff; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.06);"> <i class="fas fa-users" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.2;"></i> <p style="font-size: 1rem; margin-bottom: 8px;">No users yet</p> <p style="font-size: 0.85rem;">Click "Create User" to add the first operator.</p> </div>`}` })} ${renderScript($$result, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/admin/users.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/admin/users.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/admin/users.astro";
const $$url = "/dashboard/admin/users";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Users,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
