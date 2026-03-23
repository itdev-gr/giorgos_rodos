import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow, Mousewheel, Thumbs, EffectFade } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import type { ReactNode } from 'react';

interface SwiperCarouselProps {
  children: ReactNode[];
  options?: SwiperOptions;
  className?: string;
  navClass?: string;
  paginationClass?: string;
  showNav?: boolean;
  showPagination?: boolean;
}

export default function SwiperCarousel({
  children,
  options = {},
  className = '',
  navClass = '',
  paginationClass = '',
  showNav = false,
  showPagination = false,
}: SwiperCarouselProps) {
  const defaultOptions: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    ...options,
  };

  return (
    <div className={`swiper-carousel-wrapper ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow, Mousewheel, Thumbs, EffectFade]}
        {...defaultOptions}
        navigation={
          showNav
            ? {
                nextEl: `.${navClass}-next`,
                prevEl: `.${navClass}-prev`,
              }
            : false
        }
        pagination={
          showPagination
            ? {
                el: `.${paginationClass}`,
                clickable: true,
              }
            : false
        }
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
      {showNav && (
        <div className="slider-arrow-wrap">
          <button className={`slider-arrow ${navClass}-prev`}>
            <i className="far fa-arrow-left" />
          </button>
          <button className={`slider-arrow ${navClass}-next`}>
            <i className="far fa-arrow-right" />
          </button>
        </div>
      )}
      {showPagination && <div className={paginationClass} />}
    </div>
  );
}
