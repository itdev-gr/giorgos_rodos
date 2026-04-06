import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { b5 as renderHead, b6 as renderSlot, L as renderTemplate } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const adminLinks = [
  { label: "Overview", href: "/dashboard/admin", icon: "fas fa-chart-line" },
  { label: "Bookings", href: "/dashboard/admin/bookings", icon: "fas fa-calendar-check" },
  { label: "Tours", href: "/dashboard/admin/tours", icon: "fas fa-ship" },
  { label: "Contacts", href: "/dashboard/admin/contacts", icon: "fas fa-envelope" },
  { label: "Users", href: "/dashboard/admin/users", icon: "fas fa-users" }
];
const userLinks = [
  { label: "Overview", href: "/dashboard/user", icon: "fas fa-chart-line" },
  { label: "My Bookings", href: "/dashboard/user/bookings", icon: "fas fa-calendar-check" },
  { label: "Calendar", href: "/dashboard/user/calendar", icon: "fas fa-calendar" },
  { label: "My Tours", href: "/dashboard/user/tours", icon: "fas fa-ship" }
];
function Sidebar({ role, currentPath, userName }) {
  const [collapsed, setCollapsed] = useState(false);
  const links = role === "admin" ? adminLinks : userLinks;
  const isActive = (href) => {
    if (href === "/dashboard/admin" || href === "/dashboard/user") {
      return currentPath === href;
    }
    return currentPath.startsWith(href);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setCollapsed(!collapsed),
        className: "sb-toggle",
        style: {
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 100,
          width: 40,
          height: 40,
          borderRadius: 8,
          background: "#113D48",
          color: "#fff",
          border: "none",
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "1.1rem"
        },
        children: /* @__PURE__ */ jsx("i", { className: collapsed ? "fas fa-bars" : "fas fa-times" })
      }
    ),
    /* @__PURE__ */ jsxs(
      "aside",
      {
        style: {
          width: 260,
          minHeight: "100vh",
          background: "#113D48",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 50,
          transform: collapsed ? "translateX(-100%)" : "translateX(0)",
          transition: "transform 0.3s ease"
        },
        className: "sb-aside",
        children: [
          /* @__PURE__ */ jsx("div", { style: { padding: "24px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)" }, children: /* @__PURE__ */ jsx("a", { href: "/", style: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "#fff" }, children: /* @__PURE__ */ jsx("img", { src: "/assets/img/logo-white.svg", alt: "Rhodes Boat Tours", style: { height: 32 } }) }) }),
          /* @__PURE__ */ jsx("div", { style: { padding: "16px 20px" }, children: /* @__PURE__ */ jsx("span", { style: {
            display: "inline-block",
            padding: "4px 12px",
            borderRadius: 20,
            fontSize: "0.7rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1,
            background: role === "admin" ? "rgba(28,168,203,0.2)" : "rgba(255,181,57,0.2)",
            color: role === "admin" ? "#7DD4E8" : "#FFB539"
          }, children: role }) }),
          /* @__PURE__ */ jsx("nav", { style: { flex: 1, padding: "0 12px" }, children: links.map((link) => /* @__PURE__ */ jsxs(
            "a",
            {
              href: link.href,
              style: {
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 16px",
                borderRadius: 8,
                marginBottom: 4,
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: isActive(link.href) ? "#fff" : "rgba(255,255,255,0.6)",
                background: isActive(link.href) ? "rgba(28,168,203,0.15)" : "transparent",
                transition: "all 0.2s"
              },
              children: [
                /* @__PURE__ */ jsx("i", { className: link.icon, style: { width: 20, textAlign: "center", fontSize: "0.85rem" } }),
                link.label
              ]
            },
            link.href
          )) }),
          /* @__PURE__ */ jsxs("div", { style: { padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.08)" }, children: [
            /* @__PURE__ */ jsx("div", { style: { fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", marginBottom: 12 }, children: userName }),
            /* @__PURE__ */ jsx("form", { method: "POST", action: "/api/auth/logout", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "submit",
                style: {
                  width: "100%",
                  padding: "10px",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "Inter, sans-serif"
                },
                children: [
                  /* @__PURE__ */ jsx("i", { className: "fas fa-sign-out-alt", style: { marginRight: 8 } }),
                  " Sign Out"
                ]
              }
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
        @media (max-width: 768px) {
          .sb-toggle { display: flex !important; }
          .sb-aside { transform: translateX(-100%); }
          .sb-aside[style*="translateX(0)"] { transform: translateX(0) !important; }
        }
      ` })
  ] });
}

const $$DashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const { title } = Astro2.props;
  const profile = Astro2.locals.profile;
  const role = profile?.role || "user";
  const userName = profile?.full_name || Astro2.locals.user?.email || "User";
  const currentPath = Astro2.url.pathname;
  return renderTemplate`<html lang="en" data-astro-cid-kqx5um5x> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} — Rhodes Boat Tours Dashboard</title><link rel="icon" type="image/svg+xml" href="/assets/img/logo.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@600;700;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="/assets/css/fontawesome.min.css">${renderHead()}</head> <body data-astro-cid-kqx5um5x> ${renderComponent($$result, "Sidebar", Sidebar, { "role": role, "currentPath": currentPath, "userName": userName, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/components/dashboard/Sidebar", "client:component-export": "default", "data-astro-cid-kqx5um5x": true })} <main style="margin-left: 260px; min-height: 100vh; padding: 32px;" data-astro-cid-kqx5um5x> <!-- Page header --> <div style="margin-bottom: 32px;" data-astro-cid-kqx5um5x> <h1 style="font-family: 'Manrope', sans-serif; font-size: 1.5rem; font-weight: 700; color: #113D48;" data-astro-cid-kqx5um5x>${title}</h1> </div> ${renderSlot($$result, $$slots["default"])} </main> </body> </html>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/layouts/DashboardLayout.astro", void 0);

export { $$DashboardLayout as $ };
