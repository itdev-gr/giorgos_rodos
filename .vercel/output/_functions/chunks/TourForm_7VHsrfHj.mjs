import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef } from 'react';

const servicePages = [
  { value: "rodos-boat-tours", label: "Rhodes Boat Tours" },
  { value: "rhodes-boat-trips", label: "Rhodes Boat Trips" },
  { value: "rodos-boat-cruises", label: "Rhodes Boat Cruises" },
  { value: "rhodes-catamaran-tours", label: "Rhodes Catamaran Tours" },
  { value: "rhodes-sailing-trips", label: "Rhodes Sailing Trips" },
  { value: "rodos-charter", label: "Rhodes Yacht Charter" },
  { value: "rhodes-rent-a-boat", label: "Rhodes Rent a Boat" }
];
const inputStyle = {
  width: "100%",
  padding: "11px 14px",
  border: "1px solid #e2e8f0",
  borderRadius: 8,
  fontSize: "0.9rem",
  fontFamily: "Inter, sans-serif",
  outline: "none",
  boxSizing: "border-box",
  transition: "border 0.2s"
};
const labelStyle = {
  display: "block",
  fontSize: "0.78rem",
  fontWeight: 600,
  color: "#475569",
  marginBottom: 5
};
function TourForm({ tour, mode }) {
  const [form, setForm] = useState({
    title: tour?.title || "",
    description: tour?.description || "",
    service_page: tour?.service_page || "",
    badge_label: tour?.badge_label || "",
    price: tour?.price || "",
    duration: tour?.duration || "",
    guests: tour?.guests || "",
    category: tour?.category || "",
    highlights: tour?.highlights?.join("\n") || "",
    inclusions: tour?.inclusions?.join("\n") || "",
    exclusions: tour?.exclusions?.join("\n") || "",
    itinerary: tour?.itinerary || "",
    meeting_point: tour?.meeting_point || "",
    departure_time: tour?.departure_time || "",
    return_time: tour?.return_time || ""
  });
  const [images, setImages] = useState(tour?.images || (tour?.image_url ? [tour.image_url] : []));
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const fileInputRef = useRef(null);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleUpload = async (e) => {
    const files = e.target.files;
    if (!files) return;
    if (images.length + files.length > 5) {
      setError("Maximum 5 images allowed");
      return;
    }
    setUploading(true);
    setError("");
    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const res = await fetch("/api/user/upload", { method: "POST", body: formData });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Upload failed");
          continue;
        }
        setImages((prev) => [...prev, data.url]);
      } catch {
        setError("Upload failed. Please try again.");
      }
    }
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };
  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };
  const handleSubmit = async (status) => {
    if (!form.title || !form.description || !form.service_page) {
      setError("Title, description and service page are required");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess("");
    const url = mode === "edit" ? `/api/user/tours/${tour.id}` : "/api/user/tours";
    const method = mode === "edit" ? "PUT" : "POST";
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          status,
          image_url: images[0] || null,
          images,
          highlights: form.highlights ? form.highlights.split("\n").map((s) => s.trim()).filter(Boolean) : [],
          inclusions: form.inclusions ? form.inclusions.split("\n").map((s) => s.trim()).filter(Boolean) : [],
          exclusions: form.exclusions ? form.exclusions.split("\n").map((s) => s.trim()).filter(Boolean) : []
        })
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong");
        setLoading(false);
        return;
      }
      setSuccess(mode === "edit" ? "Tour updated!" : "Tour created!");
      setTimeout(() => {
        window.location.href = "/dashboard/user/tours";
      }, 1e3);
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { style: { background: "#fff", borderRadius: 12, padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }, children: [
    error && /* @__PURE__ */ jsx("div", { style: { background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "12px 16px", marginBottom: 20, color: "#991b1b", fontSize: "0.88rem" }, children: error }),
    success && /* @__PURE__ */ jsx("div", { style: { background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "12px 16px", marginBottom: 20, color: "#166534", fontSize: "0.88rem" }, children: success }),
    /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 32px" }, children: [
      /* @__PURE__ */ jsxs("div", { style: { gridColumn: "1 / -1" }, children: [
        /* @__PURE__ */ jsx("label", { style: labelStyle, children: "Tour Title *" }),
        /* @__PURE__ */ jsx("input", { name: "title", value: form.title, onChange: handleChange, placeholder: "e.g., East Coast Sailing Tour", required: true, style: inputStyle })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { gridColumn: "1 / -1" }, children: [
        /* @__PURE__ */ jsx("label", { style: labelStyle, children: "Description *" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            name: "description",
            value: form.description,
            onChange: handleChange,
            placeholder: "A short description of the tour experience...",
            rows: 3,
            style: { ...inputStyle, resize: "vertical", minHeight: 80 }
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { style: labelStyle, children: "Display on Page *" }),
        /* @__PURE__ */ jsxs("select", { name: "service_page", value: form.service_page, onChange: handleChange, style: { ...inputStyle, background: "#fff", cursor: "pointer" }, children: [
          /* @__PURE__ */ jsx("option", { value: "", children: "Select a page..." }),
          servicePages.map((sp) => /* @__PURE__ */ jsx("option", { value: sp.value, children: sp.label }, sp.value))
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { style: labelStyle, children: "Category" }),
        /* @__PURE__ */ jsx("input", { name: "category", value: form.category, onChange: handleChange, placeholder: "e.g., boat_tour, cruise, charter", style: inputStyle })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { style: labelStyle, children: "Card Badge" }),
        /* @__PURE__ */ jsx("input", { name: "badge_label", value: form.badge_label, onChange: handleChange, placeholder: "e.g., Speedboat, Catamaran, Private", style: inputStyle }),
        /* @__PURE__ */ jsx("p", { style: { fontSize: "0.72rem", color: "#94a3b8", marginTop: 4 }, children: "Shown as a tag on the card image" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { style: labelStyle, children: "Price" }),
        /* @__PURE__ */ jsx("input", { name: "price", value: form.price, onChange: handleChange, placeholder: "e.g., €55/person, From €400", style: inputStyle })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { style: labelStyle, children: "Duration" }),
        /* @__PURE__ */ jsx("input", { name: "duration", value: form.duration, onChange: handleChange, placeholder: "e.g., 4 Hours, Full Day, Weekly", style: inputStyle })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { style: labelStyle, children: "Guests" }),
        /* @__PURE__ */ jsx("input", { name: "guests", value: form.guests, onChange: handleChange, placeholder: "e.g., Up to 8 Guests, 20-30 Guests", style: inputStyle })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { gridColumn: "1 / -1" }, children: [
        /* @__PURE__ */ jsx("label", { style: labelStyle, children: "Tour Images (up to 5)" }),
        images.length > 0 && /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 14 }, children: images.map((url, i) => /* @__PURE__ */ jsxs("div", { style: { position: "relative", width: 120, height: 90, borderRadius: 8, overflow: "hidden", border: "1px solid #e2e8f0" }, children: [
          /* @__PURE__ */ jsx("img", { src: url, alt: "", style: { width: "100%", height: "100%", objectFit: "cover", display: "block" } }),
          i === 0 && /* @__PURE__ */ jsx("span", { style: { position: "absolute", top: 4, left: 4, background: "#1CA8CB", color: "#fff", fontSize: "0.6rem", fontWeight: 700, padding: "2px 6px", borderRadius: 4 }, children: "MAIN" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => removeImage(i),
              style: {
                position: "absolute",
                top: 4,
                right: 4,
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "0.65rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ jsx("i", { className: "fas fa-times" })
            }
          )
        ] }, i)) }),
        images.length < 5 && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: fileInputRef,
              type: "file",
              accept: "image/jpeg,image/png,image/webp",
              multiple: true,
              onChange: handleUpload,
              style: { display: "none" },
              id: "image-upload"
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => fileInputRef.current?.click(),
              disabled: uploading,
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 20px",
                background: "#f8fafc",
                border: "2px dashed #cbd5e1",
                borderRadius: 10,
                cursor: uploading ? "not-allowed" : "pointer",
                color: "#64748b",
                fontSize: "0.85rem",
                fontWeight: 500,
                fontFamily: "Inter, sans-serif",
                transition: "all 0.2s"
              },
              children: [
                /* @__PURE__ */ jsx("i", { className: uploading ? "fas fa-spinner fa-spin" : "fas fa-cloud-upload-alt" }),
                uploading ? "Uploading..." : `Upload Images (${images.length}/5)`
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { style: { fontSize: "0.72rem", color: "#94a3b8", marginTop: 6 }, children: "JPEG, PNG or WebP. Max 5MB each. First image is the main card image." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { gridColumn: "1 / -1", marginTop: 12, paddingTop: 24, borderTop: "2px solid #f1f5f9" }, children: /* @__PURE__ */ jsxs("p", { style: { fontSize: "0.85rem", fontWeight: 700, color: "#113D48", marginBottom: 16, fontFamily: "Manrope, sans-serif" }, children: [
        /* @__PURE__ */ jsx("i", { className: "fas fa-file-alt", style: { marginRight: 8, color: "#1CA8CB" } }),
        "Detail Page Information"
      ] }) }),
      /* @__PURE__ */ jsxs("div", { style: { gridColumn: "1 / -1" }, children: [
        /* @__PURE__ */ jsx("label", { style: labelStyle, children: "Highlights (one per line)" }),
        /* @__PURE__ */ jsx("textarea", { name: "highlights", value: form.highlights, onChange: handleChange, placeholder: "Swimming in crystal-clear bays\nLunch on board\nProfessional skipper", rows: 3, style: { ...inputStyle, resize: "vertical", minHeight: 70 } }),
        /* @__PURE__ */ jsx("p", { style: { fontSize: "0.72rem", color: "#94a3b8", marginTop: 4 }, children: "Key selling points shown on the detail page" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { style: labelStyle, children: "What's Included (one per line)" }),
        /* @__PURE__ */ jsx("textarea", { name: "inclusions", value: form.inclusions, onChange: handleChange, placeholder: "Lunch\nDrinks\nSnorkeling gear\nTowels", rows: 4, style: { ...inputStyle, resize: "vertical", minHeight: 80 } })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { style: labelStyle, children: "Not Included (one per line)" }),
        /* @__PURE__ */ jsx("textarea", { name: "exclusions", value: form.exclusions, onChange: handleChange, placeholder: "Sunscreen\nTransportation to harbour", rows: 4, style: { ...inputStyle, resize: "vertical", minHeight: 80 } })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { gridColumn: "1 / -1" }, children: [
        /* @__PURE__ */ jsx("label", { style: labelStyle, children: "Route / Itinerary" }),
        /* @__PURE__ */ jsx("textarea", { name: "itinerary", value: form.itinerary, onChange: handleChange, placeholder: "Describe the route: departure from Mandraki Harbour, first stop at Anthony Quinn Bay...", rows: 3, style: { ...inputStyle, resize: "vertical", minHeight: 70 } })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { style: labelStyle, children: "Meeting Point" }),
        /* @__PURE__ */ jsx("input", { name: "meeting_point", value: form.meeting_point, onChange: handleChange, placeholder: "e.g., Mandraki Harbour, Rhodes", style: inputStyle })
      ] }),
      /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { style: labelStyle, children: "Departure Time" }),
          /* @__PURE__ */ jsx("input", { name: "departure_time", value: form.departure_time, onChange: handleChange, placeholder: "e.g., 09:00", style: inputStyle })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { style: labelStyle, children: "Return Time" }),
          /* @__PURE__ */ jsx("input", { name: "return_time", value: form.return_time, onChange: handleChange, placeholder: "e.g., 17:00", style: inputStyle })
        ] })
      ] })
    ] }),
    form.title && /* @__PURE__ */ jsxs("div", { style: { marginTop: 28, padding: 20, background: "#f8fafc", borderRadius: 10, border: "1px solid #e2e8f0" }, children: [
      /* @__PURE__ */ jsx("p", { style: { fontSize: "0.75rem", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 12 }, children: "Card Preview" }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 16, alignItems: "flex-start" }, children: [
        images[0] && /* @__PURE__ */ jsx("img", { src: images[0], alt: "", style: { width: 120, height: 80, objectFit: "cover", borderRadius: 8, flexShrink: 0 } }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { style: { fontFamily: "Manrope, sans-serif", fontWeight: 700, color: "#113D48", margin: "0 0 4px", fontSize: "0.95rem" }, children: form.title }),
          form.badge_label && /* @__PURE__ */ jsx("span", { style: { display: "inline-block", padding: "2px 8px", background: "#113D48", color: "#fff", borderRadius: 4, fontSize: "0.7rem", fontWeight: 600, marginBottom: 6 }, children: form.badge_label }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }, children: [
            form.duration && /* @__PURE__ */ jsx("span", { style: { fontSize: "0.75rem", color: "#64748b", background: "#f0f4f5", padding: "2px 8px", borderRadius: 12 }, children: form.duration }),
            form.guests && /* @__PURE__ */ jsx("span", { style: { fontSize: "0.75rem", color: "#64748b", background: "#f0f4f5", padding: "2px 8px", borderRadius: 12 }, children: form.guests }),
            form.price && /* @__PURE__ */ jsx("span", { style: { fontSize: "0.85rem", fontWeight: 700, color: "#1CA8CB" }, children: form.price })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 12, marginTop: 28, paddingTop: 20, borderTop: "1px solid #f1f5f9" }, children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => handleSubmit("draft"),
          disabled: loading,
          style: {
            padding: "11px 24px",
            background: "#f1f5f9",
            color: "#475569",
            border: "1px solid #e2e8f0",
            borderRadius: 8,
            fontSize: "0.85rem",
            fontWeight: 600,
            cursor: loading ? "not-allowed" : "pointer",
            fontFamily: "Inter, sans-serif",
            transition: "all 0.2s"
          },
          children: [
            /* @__PURE__ */ jsx("i", { className: "fas fa-save", style: { marginRight: 6 } }),
            "Save as Draft"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => handleSubmit("pending"),
          disabled: loading,
          style: {
            padding: "11px 24px",
            background: loading ? "#93c5d6" : "#1CA8CB",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: "0.85rem",
            fontWeight: 600,
            cursor: loading ? "not-allowed" : "pointer",
            fontFamily: "Inter, sans-serif",
            transition: "all 0.2s"
          },
          children: [
            /* @__PURE__ */ jsx("i", { className: "fas fa-paper-plane", style: { marginRight: 6 } }),
            loading ? "Saving..." : "Submit for Review"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/dashboard/user/tours",
          style: {
            padding: "11px 24px",
            background: "transparent",
            color: "#94a3b8",
            border: "none",
            borderRadius: 8,
            fontSize: "0.85rem",
            fontWeight: 500,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            fontFamily: "Inter, sans-serif"
          },
          children: "Cancel"
        }
      )
    ] })
  ] });
}

export { TourForm as T };
