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
  isAdmin?: boolean;
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

export default function TourForm({ tour, mode, isAdmin = false }: TourFormProps) {
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
  const initialImages = tour?.images || (tour?.image_url ? [tour.image_url] : []);
  const [images, setImages] = useState<string[]>(initialImages);
  const [mainIndex, setMainIndex] = useState(() => {
    if (tour?.image_url && initialImages.length > 0) {
      const idx = initialImages.indexOf(tour.image_url);
      return idx >= 0 ? idx : 0;
    }
    return 0;
  });
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Pending uploads show local previews while uploading to server
  const [pendingUploads, setPendingUploads] = useState<{ localUrl: string; fileName: string }[]>([]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);

    if (images.length + pendingUploads.length + fileArray.length > 5) {
      setError('Maximum 5 images allowed');
      return;
    }

    setUploading(true);
    setError('');

    // Show local previews immediately
    const previews = fileArray.map(f => ({
      localUrl: URL.createObjectURL(f),
      fileName: f.name,
    }));
    setPendingUploads(prev => [...prev, ...previews]);

    // Upload each file
    for (let i = 0; i < fileArray.length; i++) {
      const file = fileArray[i];
      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await fetch('/api/user/upload', { method: 'POST', body: formData });

        let data: any = {};
        try {
          data = await res.json();
        } catch {
          data = { error: `Server error (${res.status})` };
        }

        if (!res.ok) {
          setError(data.error || `Upload failed: ${file.name} (${res.status})`);
          setPendingUploads(prev => prev.filter(p => p.localUrl !== previews[i].localUrl));
          URL.revokeObjectURL(previews[i].localUrl);
          continue;
        }

        if (!data.url) {
          setError(`Upload succeeded but no URL returned for ${file.name}`);
          setPendingUploads(prev => prev.filter(p => p.localUrl !== previews[i].localUrl));
          URL.revokeObjectURL(previews[i].localUrl);
          continue;
        }

        // Success — move from pending to confirmed images
        setImages(prev => [...prev, data.url]);
        setPendingUploads(prev => prev.filter(p => p.localUrl !== previews[i].localUrl));
        URL.revokeObjectURL(previews[i].localUrl);
      } catch (err: any) {
        setError(`Upload failed: ${file.name}. ${err?.message || 'Network error.'}`);
        setPendingUploads(prev => prev.filter(p => p.localUrl !== previews[i].localUrl));
        URL.revokeObjectURL(previews[i].localUrl);
      }
    }

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setMainIndex(prev => {
      if (index === prev) return 0;
      if (index < prev) return prev - 1;
      return prev;
    });
  };

  const handleSubmit = async (status: 'draft' | 'pending' | 'approved' | 'rejected') => {
    if (!form.title || !form.description || !form.service_page) {
      setError('Title, description and service page are required');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    const baseUrl = isAdmin ? '/api/admin/tours' : '/api/user/tours';
    const url = mode === 'edit' ? `${baseUrl}/${tour!.id}` : baseUrl;
    const method = mode === 'edit' ? 'PUT' : 'POST';
    const redirectUrl = isAdmin ? '/dashboard/admin/tours' : '/dashboard/user/tours';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          status,
          image_url: images[mainIndex] || images[0] || null,
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
      setTimeout(() => { window.location.href = redirectUrl; }, 1000);
    } catch {
      setError('Network error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="tour-form-container" style={{ background: '#fff', borderRadius: 12, padding: 32, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
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

      <div className="tour-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 32px' }}>
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

          {/* Uploaded images grid + pending uploads */}
          {(images.length > 0 || pendingUploads.length > 0) && (
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
              {/* Confirmed images */}
              {images.map((url, i) => {
                const isMain = i === mainIndex;
                return (
                  <div key={`img-${i}`} style={{ position: 'relative', width: 120, borderRadius: 8, overflow: 'hidden', border: isMain ? '2px solid #1CA8CB' : '1px solid #e2e8f0', transition: 'border 0.2s' }}>
                    <div style={{ position: 'relative', width: '100%', height: 90 }}>
                      <img src={url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      {isMain && (
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
                    {!isMain && (
                      <button
                        type="button"
                        onClick={() => setMainIndex(i)}
                        style={{
                          width: '100%', padding: '5px 0', background: '#f8fafc',
                          border: 'none', borderTop: '1px solid #e2e8f0', cursor: 'pointer',
                          fontSize: '0.65rem', fontWeight: 600, color: '#1CA8CB',
                          fontFamily: 'Inter, sans-serif', transition: 'background 0.2s',
                        }}
                      >
                        <i className="fas fa-star" style={{ marginRight: 3, fontSize: '0.58rem' }} />
                        Set as main
                      </button>
                    )}
                  </div>
                );
              })}
              {/* Pending uploads — local previews with loading overlay */}
              {pendingUploads.map((p) => (
                <div key={p.localUrl} style={{ position: 'relative', width: 120, height: 90, borderRadius: 8, overflow: 'hidden', border: '2px dashed #cbd5e1' }}>
                  <img src={p.localUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.5 }} />
                  <div style={{
                    position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.6)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4,
                  }}>
                    <i className="fas fa-spinner fa-spin" style={{ color: '#1CA8CB', fontSize: '1.1rem' }} />
                    <span style={{ fontSize: '0.6rem', fontWeight: 600, color: '#475569' }}>Uploading...</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Upload button */}
          {(images.length + pendingUploads.length) < 5 && (
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
              <p style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: 6 }}>JPEG, PNG or WebP. Max 5MB each. Click "Set as main" to choose the card image.</p>
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
            {images.length > 0 && (
              <img src={images[mainIndex] || images[0]} alt="" style={{ width: 120, height: 80, objectFit: 'cover', borderRadius: 8, flexShrink: 0 }} />
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
      <div className="tour-form-actions" style={{ display: 'flex', gap: 12, marginTop: 28, paddingTop: 20, borderTop: '1px solid #f1f5f9', flexWrap: 'wrap' }}>
        {isAdmin ? (
          <>
            <button
              onClick={() => handleSubmit('approved')}
              disabled={loading}
              style={{
                padding: '11px 24px', background: loading ? '#6ee7b7' : '#10B981', color: '#fff',
                border: 'none', borderRadius: 8, fontSize: '0.85rem',
                fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
              }}
            >
              <i className="fas fa-check" style={{ marginRight: 6 }} />
              {loading ? 'Saving...' : 'Save & Approve'}
            </button>
            <button
              onClick={() => handleSubmit('pending')}
              disabled={loading}
              style={{
                padding: '11px 24px', background: '#F59E0B', color: '#fff',
                border: 'none', borderRadius: 8, fontSize: '0.85rem',
                fontWeight: 600, cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
              }}
            >
              <i className="fas fa-clock" style={{ marginRight: 6 }} />
              Save as Pending
            </button>
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
            <a
              href="/dashboard/admin/tours"
              style={{
                padding: '11px 24px', background: 'transparent', color: '#94a3b8',
                border: 'none', borderRadius: 8, fontSize: '0.85rem',
                fontWeight: 500, textDecoration: 'none', display: 'inline-flex',
                alignItems: 'center', fontFamily: 'Inter, sans-serif',
              }}
            >
              Cancel
            </a>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
