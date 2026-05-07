import { useState, useMemo } from 'react';

interface Tour {
  id: string;
  title: string;
  description: string;
  image_url: string;
  images: string[];
  duration: string;
  guests: string;
  badge_label: string;
  price: string;
  service_page: string;
  category: string;
}

interface TourSearchGridProps {
  tours: Tour[];
}

const servicePageLabels: Record<string, string> = {
  'rodos-boat-tours': 'Boat Tours',
  'rhodes-boat-trips': 'Boat Trips',
  'rodos-boat-cruises': 'Boat Cruises',
  'rhodes-catamaran-tours': 'Catamaran Tours',
  'rhodes-sailing-trips': 'Sailing Trips',
  'rodos-charter': 'Yacht Charter',
  'rhodes-rent-a-boat': 'Rent a Boat',
};

export default function TourSearchGrid({ tours }: TourSearchGridProps) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const categories = useMemo(() => {
    const cats = new Set(tours.map(t => t.service_page).filter(Boolean));
    return Array.from(cats);
  }, [tours]);

  const filtered = useMemo(() => {
    return tours.filter(t => {
      const matchSearch = !search ||
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description?.toLowerCase().includes(search.toLowerCase()) ||
        t.badge_label?.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === 'all' || t.service_page === filter;
      return matchSearch && matchFilter;
    });
  }, [tours, search, filter]);

  return (
    <div>
      {/* Search + Filter Bar */}
      <div style={{
        display: 'flex', gap: 14, marginBottom: 32, flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Search */}
        <div style={{ position: 'relative', flex: '1 1 300px', maxWidth: 400 }}>
          <i className="fas fa-search" style={{
            position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
            color: '#94a3b8', fontSize: '0.85rem',
          }} />
          <input
            type="text"
            placeholder="Search tours, boats, experiences..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%', padding: '12px 16px 12px 42px',
              border: '1px solid #e2e8f0', borderRadius: 10,
              fontSize: '0.9rem', fontFamily: 'Inter, sans-serif',
              outline: 'none', background: '#fff', boxSizing: 'border-box',
              transition: 'border 0.2s',
            }}
          />
        </div>

        {/* Category Filter */}
        <div className="filter-pills" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button
            onClick={() => setFilter('all')}
            style={{
              padding: '8px 16px', borderRadius: 20, border: 'none',
              fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
              background: filter === 'all' ? '#113D48' : '#fff',
              color: filter === 'all' ? '#fff' : '#64748b',
              boxShadow: filter === 'all' ? 'none' : '0 1px 3px rgba(0,0,0,0.06)',
            }}
          >
            All ({tours.length})
          </button>
          {categories.map(cat => {
            const count = tours.filter(t => t.service_page === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '8px 16px', borderRadius: 20, border: 'none',
                  fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
                  background: filter === cat ? '#1CA8CB' : '#fff',
                  color: filter === cat ? '#fff' : '#64748b',
                  boxShadow: filter === cat ? 'none' : '0 1px 3px rgba(0,0,0,0.06)',
                }}
              >
                {servicePageLabels[cat] || cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: 20 }}>
        {filtered.length} experience{filtered.length !== 1 ? 's' : ''} found
        {search && ` for "${search}"`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="tsg-grid">
          {filtered.map((tour) => {
            const img = tour.image_url || tour.images?.[0] || '/assets/img/gallery/yacht/crystal-water-1.jpg';
            return (
              <a
                key={tour.id}
                href={`/tour-detail/${tour.slug || tour.id}`}
                className="tsg-card"
                style={{
                  display: 'flex', flexDirection: 'column', textDecoration: 'none',
                  color: 'inherit', background: '#fff', borderRadius: 14,
                  overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                  <img src={img} alt={tour.title} loading="lazy" style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }} />
                  {tour.badge_label && (
                    <span style={{
                      position: 'absolute', top: 14, right: 14,
                      background: 'rgba(17,61,72,0.85)', color: '#fff',
                      fontFamily: 'Inter, sans-serif', fontSize: '0.75rem',
                      fontWeight: 600, padding: '5px 12px', borderRadius: 6,
                      backdropFilter: 'blur(4px)',
                    }}>{tour.badge_label}</span>
                  )}
                  {tour.service_page && (
                    <span style={{
                      position: 'absolute', bottom: 14, left: 14,
                      background: 'rgba(28,168,203,0.9)', color: '#fff',
                      fontFamily: 'Inter, sans-serif', fontSize: '0.68rem',
                      fontWeight: 600, padding: '4px 10px', borderRadius: 6,
                    }}>{servicePageLabels[tour.service_page] || tour.service_page}</span>
                  )}
                </div>
                <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'Manrope, sans-serif', fontSize: '1.1rem',
                    fontWeight: 700, color: '#113D48', marginBottom: 8,
                  }}>{tour.title}</h3>
                  <p style={{
                    fontSize: '0.88rem', lineHeight: 1.6, color: '#6b7c85',
                    marginBottom: 14, display: '-webkit-box', WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  }}>{tour.description}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                    {tour.duration && (
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 4,
                        fontSize: '0.75rem', color: '#5a6a72', background: '#f0f4f5',
                        padding: '4px 10px', borderRadius: 20,
                      }}>
                        <i className="far fa-clock" style={{ fontSize: '0.7rem', color: '#1CA8CB' }} /> {tour.duration}
                      </span>
                    )}
                    {tour.guests && (
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 4,
                        fontSize: '0.75rem', color: '#5a6a72', background: '#f0f4f5',
                        padding: '4px 10px', borderRadius: 20,
                      }}>
                        <i className="far fa-user" style={{ fontSize: '0.7rem', color: '#1CA8CB' }} /> {tour.guests}
                      </span>
                    )}
                  </div>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    marginTop: 'auto', paddingTop: 14, borderTop: '1px solid #f0f0f0',
                  }}>
                    {tour.price && (
                      <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: '#1CA8CB' }}>{tour.price}</span>
                    )}
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, color: '#113D48' }}>
                      View Details <i className="fa-regular fa-arrow-right" style={{ marginLeft: 4 }} />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        <div style={{ padding: 60, textAlign: 'center', color: '#94a3b8', background: '#fff', borderRadius: 12 }}>
          <i className="fas fa-search" style={{ fontSize: '2rem', marginBottom: 16, opacity: 0.2 }} />
          <p style={{ fontSize: '1rem', marginBottom: 4 }}>No experiences found</p>
          <p style={{ fontSize: '0.85rem' }}>Try a different search or filter.</p>
        </div>
      )}

      <style>{`
        .tsg-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important; }
        .tsg-card:hover img { transform: scale(1.05); }
        @media (max-width: 991px) { .tsg-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 575px) { .tsg-grid { grid-template-columns: 1fr !important; } }
        input:focus { border-color: #1CA8CB !important; box-shadow: 0 0 0 3px rgba(28,168,203,0.1); }
      `}</style>
    </div>
  );
}
