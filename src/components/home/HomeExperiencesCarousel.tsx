import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { getSupabase } from '../../lib/supabase';
import { mapTourToExperience, type ExperienceCardData } from '../../lib/service-tours';
import { imgUrl, imgSrcset } from '../../lib/media';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
  initialTours: ExperienceCardData[];
}

function ExperienceSlide({ tour }: { tour: ExperienceCardData }) {
  const imgSrc = imgUrl(tour.image, 700, { quality: 80 }) || tour.image;
  const imgSet = imgSrcset(tour.image, [480, 640, 700, 900]) || '';
  const showDurationMeta = Boolean(tour.duration && tour.duration !== tour.badge);

  return (
    <a href={tour.href} className="exp-card home-exp-card">
      <div className="exp-card__media">
        <img
          src={imgSrc}
          srcSet={imgSet || undefined}
          sizes="320px"
          alt={tour.imageAlt || tour.title}
          loading="lazy"
          width={700}
          height={875}
          decoding="async"
        />
      </div>
      <div className="exp-card__scrim" />
      {tour.badge && <span className="exp-card__badge">{tour.badge}</span>}
      {tour.price && (
        <div className="exp-card__price">
          <span className="exp-card__price-current">{tour.price}</span>
        </div>
      )}
      <div className="exp-card__body">
        <div className="exp-card__stars" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <i key={i} className="fas fa-star" />
          ))}
        </div>
        <h3 className="exp-card__title">{tour.title}</h3>
        {tour.description && <p className="exp-card__desc">{tour.description}</p>}
        {(showDurationMeta || tour.guests) && (
          <div className="exp-card__meta">
            {showDurationMeta && (
              <span>
                <i className="far fa-clock" /> {tour.duration}
              </span>
            )}
            {tour.guests && (
              <span>
                <i className="far fa-user" /> {tour.guests}
              </span>
            )}
          </div>
        )}
      </div>
    </a>
  );
}

async function fetchToursClient(): Promise<ExperienceCardData[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('tours')
    .select('*')
    .eq('status', 'approved')
    .neq('service_page', 'rhodes-charter')
    .order('is_global', { ascending: false })
    .order('created_at', { ascending: false });

  if (error || !data) return [];
  return data.map(mapTourToExperience);
}

export default function HomeExperiencesCarousel({ initialTours }: Props) {
  const [tours, setTours] = useState<ExperienceCardData[]>(initialTours);
  const [loading, setLoading] = useState(initialTours.length === 0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const pagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialTours.length > 0) {
      setTours(initialTours);
      setLoading(false);
      return;
    }

    let cancelled = false;
    fetchToursClient().then((rows) => {
      if (cancelled) return;
      setTours(rows);
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [initialTours]);

  const bindSwiperControls = (swiper: SwiperType) => {
    if (typeof swiper.params.navigation === 'object' && swiper.params.navigation) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
    if (typeof swiper.params.pagination === 'object' && swiper.params.pagination) {
      swiper.params.pagination.el = pagRef.current;
      swiper.pagination.destroy();
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    }
  };

  const count = tours.length;

  return (
    <section className="home-exp" aria-labelledby="home-exp-title">
      <div className="container home-exp__head">
        <div className="home-exp__intro">
          <h2 id="home-exp-title" className="home-exp__title">
            Rhodes Boat Experiences
          </h2>
          <p className="home-exp__lead">
            {loading
              ? 'Loading approved boat experiences…'
              : count > 0
                ? `${count} approved tours, cruises and private trips — each vetted by our local team. Swipe to explore, tap to book.`
                : 'Browse our full catalog of boat tours, cruises and private trips in Rhodes.'}
          </p>
        </div>
        {count > 0 && (
          <div className="home-exp__actions">
            <a href="/things-to-do" className="home-exp__view-all">
              Browse all {count} experiences
            </a>
            <div className="home-exp__nav" aria-label="Carousel navigation">
              <button
                ref={prevRef}
                type="button"
                className="home-exp__nav-btn home-exp__nav-btn--prev"
                aria-label="Previous experiences"
              >
                <i className="fa-regular fa-arrow-left" aria-hidden="true" />
              </button>
              <button
                ref={nextRef}
                type="button"
                className="home-exp__nav-btn home-exp__nav-btn--next"
                aria-label="Next experiences"
              >
                <i className="fa-regular fa-arrow-right" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>

      {count > 0 ? (
        <div className="home-exp__track-wrap">
          <Swiper
            className="home-exp__swiper"
            modules={[Navigation, Pagination, A11y]}
            slidesPerView="auto"
            spaceBetween={20}
            speed={650}
            grabCursor
            watchOverflow
            navigation
            pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 5 }}
            onBeforeInit={bindSwiperControls}
            onInit={bindSwiperControls}
            breakpoints={{
              768: { spaceBetween: 22 },
              1200: { spaceBetween: 24 },
            }}
          >
            {tours.map((tour) => (
              <SwiperSlide key={tour.href} className="home-exp__slide">
                <ExperienceSlide tour={tour} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="container">
            <div ref={pagRef} className="home-exp__pagination" />
          </div>
        </div>
      ) : !loading ? (
        <div className="container home-exp__empty">
          <a href="/things-to-do" className="home-exp__cta">
            Browse all boat experiences in Rhodes →
          </a>
        </div>
      ) : null}

      <div className="container home-exp__foot">
        <a href="/things-to-do" className="home-exp__cta">
          View full catalog with filters →
        </a>
      </div>
    </section>
  );
}
