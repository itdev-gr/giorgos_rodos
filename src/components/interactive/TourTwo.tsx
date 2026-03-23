import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

interface TourItemProps {
  image: string;
  title: string;
  link: string;
  rating: number;
  price: number;
  duration: number;
  bookLink: string;
}

function TourItem({ image, title, link, rating, price, duration, bookLink }: TourItemProps) {
  return (
    <div className="tour-box th-ani gsap-cursor">
      <div className="tour-box_img global-img">
        <img src={image} alt={title} />
      </div>
      <div className="tour-content">
        <h3 className="box-title">
          <a href={link}>{title}</a>
        </h3>
        <div className="tour-rating">
          <div className="star-rating" role="img" aria-label={`Rated ${rating} out of 5`}>
            <span style={{ width: `${rating * 20}%` }}>
              Rated <strong className="rating">{rating}</strong> out of 5
            </span>
          </div>
          <a href={link} className="woocommerce-review-link">
            (<span className="count">{rating}</span> Rating)
          </a>
        </div>
        <h4 className="tour-box_price">
          <span className="currency">${price}</span>/Person
        </h4>
        <div className="tour-action">
          <span>
            <i className="fa-light fa-clock" /> {duration} Days
          </span>
          <a href={bookLink} className="th-btn style4 th-icon">Book Now</a>
        </div>
      </div>
    </div>
  );
}

const tab1Tours = [
  { image: '/assets/img/tour/tour_box_1.jpg', title: 'Greece Tour Package' },
  { image: '/assets/img/tour/tour_box_2.jpg', title: 'Italy Tour Package' },
  { image: '/assets/img/tour/tour_box_3.jpg', title: 'Dubai Tour Package' },
  { image: '/assets/img/tour/tour_box_4.jpg', title: 'Paris Tour Package' },
  { image: '/assets/img/tour/tour_box_1.jpg', title: 'Greece Tour Package' },
  { image: '/assets/img/tour/tour_box_2.jpg', title: 'Italy Tour Package' },
  { image: '/assets/img/tour/tour_box_3.jpg', title: 'Dubai Tour Package' },
  { image: '/assets/img/tour/tour_box_4.jpg', title: 'Paris Tour Package' },
];

const tab2Tours = [
  { image: '/assets/img/tour/tour_box_5.jpg', title: 'The Plaza, New York' },
  { image: '/assets/img/tour/tour_box_6.jpg', title: 'The Plaza, New York' },
  { image: '/assets/img/tour/tour_box_7.jpg', title: 'The Plaza, New York' },
  { image: '/assets/img/tour/tour_box_8.jpg', title: 'The Plaza, New York' },
  { image: '/assets/img/tour/tour_box_9.jpg', title: 'The Plaza, New York' },
  { image: '/assets/img/tour/tour_box_10.jpg', title: 'The Plaza, New York' },
  { image: '/assets/img/tour/tour_box_11.jpg', title: 'The Plaza, New York' },
  { image: '/assets/img/tour/tour_box_12.jpg', title: 'The Plaza, New York' },
];

const tab3Tours = [
  { image: '/assets/img/tour/tour_box_13.jpg', title: 'Caravan Trip Package' },
  { image: '/assets/img/tour/tour_box_14.jpg', title: 'Caravan Trip Package' },
  { image: '/assets/img/tour/tour_box_15.jpg', title: 'Caravan Trip Package' },
  { image: '/assets/img/tour/tour_box_16.jpg', title: 'Caravan Trip Package' },
  { image: '/assets/img/tour/tour_box_17.jpg', title: 'Caravan Trip Package' },
  { image: '/assets/img/tour/tour_box_18.jpg', title: 'Caravan Trip Package' },
  { image: '/assets/img/tour/tour_box_19.jpg', title: 'Caravan Trip Package' },
  { image: '/assets/img/tour/tour_box_20.jpg', title: 'Caravan Trip Package' },
];

function TourSlider({ tours, rating, bookLink }: { tours: typeof tab1Tours; rating: number; bookLink: string }) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={24}
      slidesPerView={4}
      breakpoints={{
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
        1400: { slidesPerView: 4 },
      }}
      pagination={{ clickable: true }}
      className="swiper th-slider has-shadow"
    >
      {tours.map((tour, i) => (
        <SwiperSlide key={i}>
          <TourItem
            image={tour.image}
            title={tour.title}
            link="/tour/details"
            rating={rating}
            price={980}
            duration={7}
            bookLink={bookLink}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function TourTwo() {
  const [activeTab, setActiveTab] = useState('nav-step1');

  return (
    <section
      className="tour-area3 position-relative bg-top-center overflow-hidden space"
      id="service-sec"
      style={{ backgroundImage: "url('/assets/img/bg/tour_bg_1.jpg')", backgroundRepeat: 'no-repeat' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title">Best Experience</span>
              <h2 className="sec-title">Amazing Travel Experience</h2>
            </div>
          </div>
        </div>
        <div className="nav nav-tabs tour-tabs" id="nav-tab" role="tablist">
          <button
            className={`nav-link th-btn ${activeTab === 'nav-step1' ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveTab('nav-step1')}
          >
            <img src="/assets/img/icon/tour_icon_1.svg" alt="" />
            Tour Package
          </button>
          <button
            className={`nav-link th-btn ${activeTab === 'nav-step2' ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveTab('nav-step2')}
          >
            <img src="/assets/img/icon/tour_icon_2.svg" alt="" />
            Hotel
          </button>
          <button
            className={`nav-link th-btn ${activeTab === 'nav-step3' ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveTab('nav-step3')}
          >
            <img src="/assets/img/icon/tour_icon_3.svg" alt="" />
            Transport
          </button>
        </div>
        <div className="tab-content" id="nav-tabContent">
          <div className={`tab-pane fade ${activeTab === 'nav-step1' ? 'show active' : ''}`} role="tabpanel">
            <div className="slider-area tour-slider slider-drag-wrap">
              <TourSlider tours={tab1Tours} rating={5.0} bookLink="/contact" />
            </div>
          </div>
          <div className={`tab-pane fade ${activeTab === 'nav-step2' ? 'show active' : ''}`} role="tabpanel">
            <div className="slider-area tour-slider slider-drag-wrap">
              <TourSlider tours={tab2Tours} rating={4.8} bookLink="/tour-guide/1" />
            </div>
          </div>
          <div className={`tab-pane fade ${activeTab === 'nav-step3' ? 'show active' : ''}`} role="tabpanel">
            <div className="slider-area tour-slider slider-drag-wrap">
              <TourSlider tours={tab3Tours} rating={5.0} bookLink="/tour-guide/1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
