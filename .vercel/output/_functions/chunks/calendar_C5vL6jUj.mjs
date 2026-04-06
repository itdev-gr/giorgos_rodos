import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { L as renderTemplate } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout_ByZJLz3U.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { createAdminClient } from './supabase_CmOsxOS2.mjs';

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function BookingCalendar({ bookings }) {
  const today = /* @__PURE__ */ new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const bookingMap = {};
  bookings.forEach((b) => {
    if (!bookingMap[b.booking_date]) bookingMap[b.booking_date] = [];
    bookingMap[b.booking_date].push(b);
  });
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDayOfWeek = (firstDay.getDay() + 6) % 7;
  const daysInMonth = lastDay.getDate();
  const cells = [];
  for (let i = 0; i < startDayOfWeek; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  const formatDate = (d) => {
    const m = String(month + 1).padStart(2, "0");
    const day = String(d).padStart(2, "0");
    return `${year}-${m}-${day}`;
  };
  const isToday = (d) => {
    return d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };
  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else setMonth(month - 1);
    setSelectedDate(null);
  };
  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else setMonth(month + 1);
    setSelectedDate(null);
  };
  const selectedBookings = selectedDate ? bookingMap[selectedDate] || [] : [];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { style: { background: "#fff", borderRadius: 14, padding: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.06)", marginBottom: 24 }, children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }, children: [
        /* @__PURE__ */ jsx("button", { onClick: prevMonth, style: { width: 36, height: 36, borderRadius: 8, border: "1px solid #e2e8f0", background: "#fff", cursor: "pointer", fontSize: "0.85rem", color: "#64748b", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsx("i", { className: "fas fa-chevron-left" }) }),
        /* @__PURE__ */ jsxs("h2", { style: { fontFamily: "Manrope, sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#113D48", margin: 0 }, children: [
          MONTHS[month],
          " ",
          year
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: nextMonth, style: { width: 36, height: 36, borderRadius: 8, border: "1px solid #e2e8f0", background: "#fff", cursor: "pointer", fontSize: "0.85rem", color: "#64748b", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsx("i", { className: "fas fa-chevron-right" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2, marginBottom: 4 }, children: DAYS.map((d) => /* @__PURE__ */ jsx("div", { style: { textAlign: "center", fontSize: "0.72rem", fontWeight: 600, color: "#94a3b8", padding: "8px 0", textTransform: "uppercase", letterSpacing: 0.5 }, children: d }, d)) }),
      /* @__PURE__ */ jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }, children: cells.map((day, i) => {
        if (day === null) return /* @__PURE__ */ jsx("div", { style: { padding: 8 } }, `empty-${i}`);
        const dateStr = formatDate(day);
        const dayBookings = bookingMap[dateStr] || [];
        const hasConfirmed = dayBookings.some((b) => b.status === "confirmed");
        const hasPending = dayBookings.some((b) => b.status === "pending");
        const isSelected = selectedDate === dateStr;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setSelectedDate(isSelected ? null : dateStr),
            style: {
              padding: "10px 4px",
              border: "none",
              borderRadius: 8,
              background: isSelected ? "#113D48" : isToday(day) ? "#f0f9ff" : "transparent",
              cursor: "pointer",
              textAlign: "center",
              transition: "all 0.15s",
              outline: isToday(day) && !isSelected ? "2px solid #1CA8CB" : "none"
            },
            children: [
              /* @__PURE__ */ jsx("span", { style: {
                fontSize: "0.88rem",
                fontWeight: isToday(day) ? 700 : 400,
                color: isSelected ? "#fff" : isToday(day) ? "#1CA8CB" : "#334155"
              }, children: day }),
              dayBookings.length > 0 && /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "center", gap: 3, marginTop: 4 }, children: [
                hasConfirmed && /* @__PURE__ */ jsx("span", { style: { width: 6, height: 6, borderRadius: "50%", background: isSelected ? "#fff" : "#10B981" } }),
                hasPending && /* @__PURE__ */ jsx("span", { style: { width: 6, height: 6, borderRadius: "50%", background: isSelected ? "#fff" : "#F59E0B" } }),
                dayBookings.length > 1 && /* @__PURE__ */ jsxs("span", { style: { fontSize: "0.6rem", color: isSelected ? "#fff" : "#94a3b8", fontWeight: 600 }, children: [
                  "+",
                  dayBookings.length
                ] })
              ] })
            ]
          },
          dateStr
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 16, marginTop: 16, paddingTop: 14, borderTop: "1px solid #f1f5f9", justifyContent: "center" }, children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: "0.75rem", color: "#64748b" }, children: [
          /* @__PURE__ */ jsx("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#10B981" } }),
          " Confirmed"
        ] }),
        /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: "0.75rem", color: "#64748b" }, children: [
          /* @__PURE__ */ jsx("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#F59E0B" } }),
          " Pending"
        ] })
      ] })
    ] }),
    selectedDate && /* @__PURE__ */ jsxs("div", { style: { background: "#fff", borderRadius: 14, padding: 24, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }, children: [
      /* @__PURE__ */ jsxs("h3", { style: { fontFamily: "Manrope, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#113D48", margin: "0 0 16px" }, children: [
        "Bookings for ",
        (/* @__PURE__ */ new Date(selectedDate + "T00:00:00")).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
      ] }),
      selectedBookings.length > 0 ? /* @__PURE__ */ jsx("div", { style: { display: "flex", flexDirection: "column", gap: 10 }, children: selectedBookings.map((b) => /* @__PURE__ */ jsxs("div", { style: {
        padding: "14px 18px",
        borderRadius: 10,
        border: "1px solid #e2e8f0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12
      }, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { style: { fontWeight: 600, color: "#113D48", margin: "0 0 2px", fontSize: "0.9rem" }, children: b.customer_name }),
          /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.78rem", color: "#64748b", margin: 0 }, children: [
            b.tours?.title,
            " · ",
            b.guests,
            " guest",
            b.guests !== 1 ? "s" : "",
            " · ",
            /* @__PURE__ */ jsx("a", { href: `mailto:${b.customer_email}`, style: { color: "#1CA8CB", textDecoration: "none" }, children: b.customer_email })
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { style: {
          padding: "3px 10px",
          borderRadius: 20,
          fontSize: "0.68rem",
          fontWeight: 700,
          textTransform: "uppercase",
          background: b.status === "confirmed" ? "#D1FAE5" : b.status === "pending" ? "#FEF3C7" : "#FEE2E2",
          color: b.status === "confirmed" ? "#065F46" : b.status === "pending" ? "#92400E" : "#991B1B"
        }, children: b.status })
      ] }, b.id)) }) : /* @__PURE__ */ jsx("p", { style: { fontSize: "0.88rem", color: "#94a3b8", textAlign: "center", padding: 20 }, children: "No bookings on this date" })
    ] })
  ] });
}

const prerender = false;
const $$Calendar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Calendar;
  const userId = Astro2.locals.user?.id;
  const supabase = createAdminClient();
  const { data: bookings } = await supabase.from("bookings").select("*, tours!inner(title, owner_id)").eq("tours.owner_id", userId).order("booking_date", { ascending: true });
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Booking Calendar" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BookingCalendar", BookingCalendar, { "bookings": bookings || [], "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/components/dashboard/BookingCalendar", "client:component-export": "default" })} ` })}`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/user/calendar.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/dashboard/user/calendar.astro";
const $$url = "/dashboard/user/calendar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Calendar,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
