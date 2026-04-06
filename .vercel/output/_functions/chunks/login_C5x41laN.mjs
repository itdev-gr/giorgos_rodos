import { c as createComponent } from './astro-component_-9CNuOV1.mjs';
import 'piccolore';
import { b5 as renderHead, L as renderTemplate } from './sequence_DctpTcVe.mjs';
import { r as renderComponent } from './entrypoint_CT6FpEDr.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }
      window.location.href = data.redirect || "/dashboard";
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { style: { maxWidth: 400, margin: "0 auto", padding: "40px 24px" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginBottom: 32 }, children: [
      /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: "/assets/img/logo.svg", alt: "Rhodes Boat Tours", style: { height: 40, margin: "0 auto 24px" } }) }),
      /* @__PURE__ */ jsx("h1", { style: { fontFamily: "Manrope, sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "#113D48", marginBottom: 8 }, children: "Sign In" }),
      /* @__PURE__ */ jsx("p", { style: { fontSize: "0.9rem", color: "#6b7c85" }, children: "Enter your credentials to access the dashboard" })
    ] }),
    error && /* @__PURE__ */ jsx("div", { style: { background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "12px 16px", marginBottom: 20, color: "#991b1b", fontSize: "0.88rem" }, children: error }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { style: { marginBottom: 16 }, children: [
        /* @__PURE__ */ jsx("label", { style: { display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#113D48", marginBottom: 6 }, children: "Email" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true,
            style: { width: "100%", padding: "12px 16px", border: "1px solid #e0e0e0", borderRadius: 8, fontSize: "0.95rem", outline: "none", fontFamily: "Inter, sans-serif" },
            placeholder: "you@example.com"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { marginBottom: 24 }, children: [
        /* @__PURE__ */ jsx("label", { style: { display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#113D48", marginBottom: 6 }, children: "Password" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            required: true,
            style: { width: "100%", padding: "12px 16px", border: "1px solid #e0e0e0", borderRadius: 8, fontSize: "0.95rem", outline: "none", fontFamily: "Inter, sans-serif" },
            placeholder: "Your password"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          style: {
            width: "100%",
            padding: "14px",
            background: loading ? "#93c5d6" : "#1CA8CB",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: "0.9rem",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "background 0.2s"
          },
          children: loading ? "Signing in..." : "Sign In"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { style: { textAlign: "center", marginTop: 24 }, children: /* @__PURE__ */ jsx("a", { href: "/", style: { fontSize: "0.85rem", color: "#1CA8CB", textDecoration: "none" }, children: "Back to website" }) })
  ] });
}

const prerender = false;
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Login;
  const accessToken = Astro2.cookies.get("sb-access-token")?.value;
  if (accessToken) {
    return Astro2.redirect("/dashboard");
  }
  return renderTemplate`<html lang="en" data-astro-cid-sgpqyurt> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Login — Rhodes Boat Tours Dashboard</title><link rel="icon" type="image/svg+xml" href="/assets/img/logo.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-sgpqyurt> ${renderComponent($$result, "LoginForm", LoginForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/components/auth/LoginForm", "client:component-export": "default", "data-astro-cid-sgpqyurt": true })} </body></html>`;
}, "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/login.astro", void 0);

const $$file = "/Users/marios/Desktop/Cursor/giorgos/tourm-astro/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
