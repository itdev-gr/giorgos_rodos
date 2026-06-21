import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { getSupabase } from '../../lib/supabase';
import { mapTourToExperience, sortExperiencesByPriceAsc, type ExperienceCardData } from '../../lib/service-tours';
import ExperienceCard from '../experience/ExperienceCard';
import 'swiper/css';

interface CarouselLabels {
  title: string;
  navigationLabel: string;
  previousLabel: string;
  nextLabel: string;
  browseCta: string;
  fullCatalogCta: string;
  thingsToDoHref: string;
}

interface Props {
  initialTours: ExperienceCardData[];
  labels: CarouselLabels;
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

export default function HomeExperiencesCarousel({ initialTours, labels }: Props) {
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
          {labels.title}
        </h2>
        {count > 0 && (
          <div className="home-exp__nav" aria-label={labels.navigationLabel}>
            <button
              ref={prevRef}
              type="button"
              className="home-exp__nav-btn home-exp__nav-btn--prev"
              aria-label={labels.previousLabel}
            >
              <i className="fa-regular fa-arrow-left" aria-hidden="true" />
            </button>
            <button
              ref={nextRef}
              type="button"
              className="home-exp__nav-btn home-exp__nav-btn--next"
              aria-label={labels.nextLabel}
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
                <ExperienceCard {...tour} sizes="320px" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : !loading ? (
        <div className="container home-exp__empty">
          <a href={labels.thingsToDoHref} className="home-exp__cta">
            {labels.browseCta}
          </a>
        </div>
      ) : null}

      <div className="container home-exp__foot">
        <a href={labels.thingsToDoHref} className="home-exp__cta">
          {labels.fullCatalogCta}
        </a>
      </div>
    </section>
  );
}
