import { useState, useRef } from 'react';

interface TourFormProps {
  tour?: {
    id: string;
    title: string;
    description: string;
    service_page: string;
    badge_label: string;
    price: string;
    duration: string;
    guests: string;
    image_url: string;
    images: string[];
    category: string;
    status: string;
  };
  mode: 'create' | 'edit';
}

const servicePages = [
  { value: 'rodos-boat-tours', label: 'Rhodes Boat Tours' },
  { value: 'rhodes-boat-trips', label: 'Rhodes Boat Trips' },
  { value: 'rodos-boat-cruises', label: 'Rhodes Boat Cruises' },
  { value: 'rhodes-catamaran-tours', label: 'Rhodes Catamaran Tours' },
  { value: 'rhodes-sailing-trips', label: 'Rhodes Sailing Trips' },
  { value: 'rodos-charter', label: 'Rhodes Yacht Charter' },
  { value: 'rhodes-rent-a-boat', label: 'Rhodes Rent a Boat' },
];

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '11px 14px', border: '1px solid #e2e8f0',
  borderRadius: 8, fontSize: '0.9rem', fontFamily: 'Inter, sans-serif',
  outline: 'none', boxSizing: 'border-box', transition: 'border 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '0.78rem', fontWeight: 600,
  color: '#475569', marginBottom: 5,
};

export default function TourForm({ tour, mode }: TourFormProps) {
  const [form, setForm] = useState({
    title: tour?.title || '',
    description: tour?.description || '',
    service_page: tour?.service_page || '',
    badge_label: tour?.badge_label || '',
    price: tour?.price || '',
    duration: tour?.duration || '',
    guests: tour?.guests || '',
    category: tour?.category || '',
    highlights: (tour as any)?.highlights?.join('\n') || '',
    inclusions: (tour as any)?.inclusions?.join('\n') || '',
    exclusions: (tour as any)?.exclusions?.join('\n') || '',
    itinerary: (tour as any)?.itinerary || '',
    meeting_point: (tour as any)?.meeting_point || '',
    departure_time: (tour as any)?.departure_time || '',
    return_time: (tour as any)?.return_time || '',
  });
  const [images, setImages] = useState<string[]>(tour?.images || (tour?.image_url ? [tour.image_url] : []));
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    if (images.length + files.length > 5) {
      setError('Maximum 5 images allowed');
      return;
    }

    setUploading(true);
    setError('');

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await fetch('/api/user/upload', { method: 'POST', body: formData });
        const data = await res.json();

        if (!res.ok) {
          setError(data.error || 'Upload failed');
          continue;
        }

        setImages(prev => [...prev, data.url]);
      } catch {
        setError('Upload failed. Please try again.');
      }
    }

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (status: 'draft' | 'pending') => {
    if (!form.title || !form.description || !form.service_page) {
      setError('Title, description and service page are required');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    const url = mode === 'edit' ? `/api/user/tours/${tour!.id}` : '/api/user/tours';
    const method = mode === 'edit' ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          status,
          image_url: images[0] || null,
          images,
          highlights: form.highlights ? form.highlights.split('\n').map(s => s.trim()).filter(Boolean) : [],
          inclusions: form.inclusions ? form.inclusions.split('\n').map(s => s.trim()).filter(Boolean) : [],
          exclusions: form.exclusions ? form.exclusions.split('\n').map(s => s.trim()).filter(Boolean) : [],
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong');
        setLoading(false);
        return;
      }

      setSuccess(mode === 'edit' ? 'Tour updated!' : 'Tour created!');
      setTimeout(() => { window.location.href = '/dashboard/user/tours'; }, 1000);
    } catch {
      setError('Network error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: 32, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
      {error && (
        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '12px 16px', marginBottom: 20, color: '#991b1b', fontSize: '0.88rem' }}>
          {error}
        </div>
      )}
      {success && (
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '12px 16px', marginBottom: 20, color: '#166534', fontSize: '0.88rem' }}>
          {success}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 32px' }}>
        {/* Title - full width */}
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>Tour Title *</label>
          <input name="title" value={form.title} onChange={handleChange} placeholder="e.g., East Coast Sailing Tour" required style={inputStyle} />
        </div>

        {/* Description - full width */}
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>Description *</label>
          <textarea
            name="description" value={form.description} onChange={handleChange}
            placeholder="A short description of the tour experience..."
            rows={3}
            style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }}
          />
        </div>

        {/* Service Page */}
        <div>
          <label style={labelStyle}>Display on Page *</label>
          <select name="service_page" value={form.service_page} onChange={handleChange} style={{ ...inputStyle, background: '#fff', cursor: 'pointer' }}>
            <option value="">Select a page...</option>
            {servicePages.map(sp => (
              <option key={sp.value} value={sp.value}>{sp.label}</option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <label style={labelStyle}>Category</label>
          <input name="category" value={form.category} onChange={handleChange} placeholder="e.g., boat_tour, cruise, charter" style={inputStyle} />
        </div>

        {/* Badge Label */}
        <div>
          <label style={labelStyle}>Card Badge</label>
          <input name="badge_label" value={form.badge_label} onChange={handleChange} placeholder="e.g., Speedboat, Catamaran, Private" style={inputStyle} />
          <p style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: 4 }}>Shown as a tag on the card image</p>
        </div>

        {/* Price */}
        <div>
          <label style={labelStyle}>Price</label>
          <input name="price" value={form.price} onChange={handleChange} placeholder="e.g., €55/person, From €400" style={inputStyle} />
        </div>

        {/* Duration */}
        <div>
          <label style={labelStyle}>Duration</label>
          <input name="duration" value={form.duration} onChange={handleChange} placeholder="e.g., 4 Hours, Full Day, Weekly" style={inputStyle} />
        </div>

        {/* Guests */}
        <div>
          <label style={labelStyle}>Guests</label>
          <input name="guests" value={form.guests} onChange={handleChange} placeholder="e.g., Up to 8 Guests, 20-30 Guests" style={inputStyle} />
        </div>

        {/* Image Upload - full width */}
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>Tour Images (up to 5)</label>

          {/* Uploaded images grid */}
          {images.length > 0 && (
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
              {images.map((url, i) => (
                <div key={i} style={{ position: 'relative', width: 120, height: 90, borderRadius: 8, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                  <img src={url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  {i === 0 && (
                    <span style={{ position: 'absolute', top: 4, left: 4, background: '#1CA8CB', color: '#fff', fontSize: '0.6rem', fontWeight: 700, padding: '2px 6px', borderRadius: 4 }}>MAIN</span>
                  )}
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    style={{
                      position: 'absolute', top: 4, right: 4, width: 22, height: 22,
                      borderRadius: '50%', background: 'rgba(0,0,0,0.6)', color: '#fff',
                      border: 'none', cursor: 'pointer', fontSize: '0.65rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Upload button */}
          {images.length < 5 && (
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                onChange={handleUpload}
                style={{ display: 'none' }}
                id="image-upload"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '12px 20px', background: '#f8fafc', border: '2px dashed #cbd5e1',
                  borderRadius: 10, cursor: uploading ? 'not-allowed' : 'pointer',
                  color: '#64748b', fontSize: '0.85rem', fontWeight: 500,
                  fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
                }}
              >
                <i className={uploading ? 'fas fa-spinner fa-spin' : 'fas fa-cloud-upload-alt'} />
                {uploading ? 'Uploading...' : `Upload Images (${images.length}/5)`}
              </button>
              <p style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: 6 }}>JPEG, PNG or WebP. Max 5MB each. First image is the main card image.</p>
            </div>
          )}
        </div>

        {/* Detail Page Fields */}
        <div style={{ gridColumn: '1 / -1', marginTop: 12, paddingTop: 24, borderTop: '2px solid #f1f5f9' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#113D48', marginBottom: 16, fontFamily: 'Manrope, sans-serif' }}>
            <i className="fas fa-file-alt" style={{ marginRight: 8, color: '#1CA8CB' }} />
            Detail Page Information
          </p>
        </div>

        {/* Highlights */}
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>Highlights (one per line)</label>
          <textarea name="highlights" value={form.highlights} onChange={handleChange} placeholder={"Swimming in crystal-clear bays\nLunch on board\nProfessional skipper"} rows={3} style={{ ...inputStyle, resize: 'vertical', minHeight: 70 }} />
          <p style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: 4 }}>Key selling points shown on the detail page</p>
        </div>

        {/* Inclusions + Exclusions */}
        <div>
          <label style={labelStyle}>What's Included (one per line)</label>
          <textarea name="inclusions" value={form.inclusions} onChange={handleChange} placeholder={"Lunch\nDrinks\nSnorkeling gear\nTowels"} rows={4} style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }} />
        </div>
        <div>
          <label style={labelStyle}>Not Included (one per line)</label>
          <textarea name="exclusions" value={form.exclusions} onChange={handleChange} placeholder={"Sunscreen\nTransportation to harbour"} rows={4} style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }} />
        </div>

        {/* Itinerary */}
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>Route / Itinerary</label>
          <textarea name="itinerary" value={form.itinerary} onChange={handleChange} placeholder="Describe the route: departure from Mandraki Harbour, first stop at Anthony Quinn Bay..." rows={3} style={{ ...inputStyle, resize: 'vertical', minHeight: 70 }} />
        </div>

        {/* Meeting Point + Times */}
        <div>
          <label style={labelStyle}>Meeting Point</label>
          <input name="meeting_point" value={form.meeting_point} onChange={handleChange} placeholder="e.g., Mandraki Harbour, Rhodes" style={inputStyle} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label style={labelStyle}>Departure Time</label>
            <input name="departure_time" value={form.departure_time} onChange={handleChange} placeholder="e.g., 09:00" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Return Time</label>
            <input name="return_time" value={form.return_time} onChange={handleChange} placeholder="e.g., 17:00" style={inputStyle} />
          </div>
        </div>
      </div>

      {/* Preview */}
      {form.title && (
        <div style={{ marginTop: 28, padding: 20, background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 12 }}>Card Preview</p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            {images[0] && (
              <img src={images[0]} alt="" style={{ width: 120, height: 80, objectFit: 'cover', borderRadius: 8, flexShrink: 0 }} />
            )}
            <div>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, color: '#113D48', margin: '0 0 4px', fontSize: '0.95rem' }}>{form.title}</p>
              {form.badge_label && (
                <span style={{ display: 'inline-block', padding: '2px 8px', background: '#113D48', color: '#fff', borderRadius: 4, fontSize: '0.7rem', fontWeight: 600, marginBottom: 6 }}>{form.badge_label}</span>
              )}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
                {form.duration && <span style={{ fontSize: '0.75rem', color: '#64748b', background: '#f0f4f5', padding: '2px 8px', borderRadius: 12 }}>{form.duration}</span>}
                {form.guests && <span style={{ fontSize: '0.75rem', color: '#64748b', background: '#f0f4f5', padding: '2px 8px', borderRadius: 12 }}>{form.guests}</span>}
                {form.price && <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1CA8CB' }}>{form.price}</span>}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div style={{ display: 'flex', gap: 12, marginTop: 28, paddingTop: 20, borderTop: '1px solid #f1f5f9' }}>
        <button
          onClick={() => handleSubmit('draft')}
          disabled={loading}
          style={{
            padding: '11px 24px', background: '#f1f5f9', color: '#475569',
            border: '1px solid #e2e8f0', borderRadius: 8, fontSize: '0.85rem',
            fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer',
            fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
          }}
        >
          <i className="fas fa-save" style={{ marginRight: 6 }} />
          Save as Draft
        </button>
        <button
          onClick={() => handleSubmit('pending')}
          disabled={loading}
          style={{
            padding: '11px 24px', background: loading ? '#93c5d6' : '#1CA8CB', color: '#fff',
            border: 'none', borderRadius: 8, fontSize: '0.85rem',
            fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer',
            fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
          }}
        >
          <i className="fas fa-paper-plane" style={{ marginRight: 6 }} />
          {loading ? 'Saving...' : 'Submit for Review'}
        </button>
        <a
          href="/dashboard/user/tours"
          style={{
            padding: '11px 24px', background: 'transparent', color: '#94a3b8',
            border: 'none', borderRadius: 8, fontSize: '0.85rem',
            fontWeight: 500, textDecoration: 'none', display: 'inline-flex',
            alignItems: 'center', fontFamily: 'Inter, sans-serif',
          }}
        >
          Cancel
        </a>
      </div>
    </div>
  );
}
