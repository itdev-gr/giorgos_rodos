import { useState, useMemo } from 'react';
import { imgUrl, imgSrcset } from '../../lib/media';

interface Tour {
  id: string;
  slug?: string;
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
  'rhodes-boat-tours': 'Boat Tours',
  'rhodes-boat-trips': 'Boat Trips',
  'rhodes-boat-cruises': 'Boat Cruises',
  'rhodes-catamaran-tours': 'Catamaran Tours',
  'rhodes-sailing-trips': 'Sailing Trips',
  'rhodes-charter': 'Yacht Charter',
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
      <div style={{
        display: 'flex', gap: 14, marginBottom: 32, flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between',
      }}>
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

      <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: 20 }}>
        {filtered.length} experience{filtered.length !== 1 ? 's' : ''} found
        {search && ` for "${search}"`}
      </p>

      {filtered.length > 0 ? (
        <div className="exp-grid exp-grid--catalog">
          {filtered.map((tour) => {
            const img = tour.image_url || tour.images?.[0] || '/assets/img/gallery/yacht/crystal-water-1.jpg';
            const badge = tour.badge_label || tour.duration || '';
            const showDurationMeta = Boolean(tour.duration && tour.duration !== badge);
            return (
              <a
                key={tour.id}
                href={`/tour-detail/${tour.slug || tour.id}`}
                className="exp-card home-exp-card"
              >
                <div className="exp-card__media">
                  <img
                    src={imgUrl(img, 700, { quality: 80 })}
                    srcSet={imgSrcset(img, [480, 640, 700, 900])}
                    sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 33vw"
                    alt={tour.title}
                    loading="lazy"
                    width={700}
                    height={875}
                  />
                </div>
                <div className="exp-card__scrim" />

                {badge && <span className="exp-card__badge">{badge}</span>}

                {tour.price && (
                  <div className="exp-card__price">
                    <span className="exp-card__price-current">{tour.price}</span>
                  </div>
                )}

                <div className="exp-card__body">
                  <div className="exp-card__stars" aria-hidden="true">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>

                  <h3 className="exp-card__title">{tour.title}</h3>

                  {tour.description && (
                    <p className="exp-card__desc">{tour.description}</p>
                  )}

                  {(showDurationMeta || tour.guests) && (
                    <div className="exp-card__meta">
                      {showDurationMeta && (
                        <span><i className="far fa-clock" /> {tour.duration}</span>
                      )}
                      {tour.guests && (
                        <span><i className="far fa-user" /> {tour.guests}</span>
                      )}
                    </div>
                  )}
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
        input:focus { border-color: #1CA8CB !important; box-shadow: 0 0 0 3px rgba(28,168,203,0.1); }
      `}</style>
    </div>
  );
}
