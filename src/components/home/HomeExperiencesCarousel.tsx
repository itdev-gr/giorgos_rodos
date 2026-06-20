import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { getSupabase } from '../../lib/supabase';
import { mapTourToExperience, sortExperiencesByPriceAsc, type ExperienceCardData } from '../../lib/service-tours';
import { imgUrl, imgSrcset } from '../../lib/media';
import 'swiper/css';

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
    .neq('service_page', 'rhodes-charter');

  if (error || !data) return [];
  return sortExperiencesByPriceAsc(data.map(mapTourToExperience));
}

export default function HomeExperiencesCarousel({ initialTours }: Props) {
  const [tours, setTours] = useState<ExperienceCardData[]>(initialTours);
  const [loading, setLoading] = useState(initialTours.length === 0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

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

  const count = tours.length;

  return (
    <section className="home-exp" aria-labelledby="home-exp-title">
      <div className="container home-exp__head">
        <h2 id="home-exp-title" className="home-exp__title">
          Rhodes Boat Experiences
        </h2>
        {count > 0 && (
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
        )}
      </div>

      {count > 0 ? (
        <div className="home-exp__track-wrap">
          <Swiper
            className="home-exp__swiper"
            modules={[Navigation, A11y]}
            slidesPerView="auto"
            spaceBetween={20}
            speed={650}
            grabCursor
            watchOverflow
            centeredSlides
            centeredSlidesBounds
            navigation={{
              prevEl: '.home-exp__nav-btn--prev',
              nextEl: '.home-exp__nav-btn--next',
            }}
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
