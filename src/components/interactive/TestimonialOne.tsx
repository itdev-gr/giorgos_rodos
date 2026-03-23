import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Elena & Marco V.',
    designation: 'Charter Guest, Cyclades',
    image: '/assets/img/testimonial/testi_1_1.jpg',
    text: 'From the moment we stepped aboard, every detail had been considered. Our captain knew exactly where to anchor for the most spectacular sunset, and the chef prepared meals that rivalled anything we have had ashore. It was the most effortless holiday we have ever taken.',
  },
  {
    name: 'James & Catherine H.',
    designation: 'Charter Guest, Saronic Gulf',
    image: '/assets/img/testimonial/testi_1_2.jpg',
    text: 'We asked for privacy, authenticity, and a pace that let us truly unwind. The crew delivered on every count. Hidden tavernas, empty beaches, mornings spent diving off the bow — this was Greece as we had always imagined it.',
  },
  {
    name: 'The Fontaine Family',
    designation: 'Charter Guest, Dodecanese',
    image: '/assets/img/testimonial/testi_1_1.jpg',
    text: 'Travelling with three children, we were unsure a yacht charter would work for us. The crew made it magical for the whole family — snorkelling excursions, stargazing from the deck, and a flexibility that no resort could match.',
  },
  {
    name: 'Elena & Marco V.',
    designation: 'Charter Guest, Cyclades',
    image: '/assets/img/testimonial/testi_1_1.jpg',
    text: 'From the moment we stepped aboard, every detail had been considered. Our captain knew exactly where to anchor for the most spectacular sunset, and the chef prepared meals that rivalled anything we have had ashore. It was the most effortless holiday we have ever taken.',
  },
  {
    name: 'James & Catherine H.',
    designation: 'Charter Guest, Saronic Gulf',
    image: '/assets/img/testimonial/testi_1_2.jpg',
    text: 'We asked for privacy, authenticity, and a pace that let us truly unwind. The crew delivered on every count. Hidden tavernas, empty beaches, mornings spent diving off the bow — this was Greece as we had always imagined it.',
  },
  {
    name: 'The Fontaine Family',
    designation: 'Charter Guest, Dodecanese',
    image: '/assets/img/testimonial/testi_1_1.jpg',
    text: 'Travelling with three children, we were unsure a yacht charter would work for us. The crew made it magical for the whole family — snorkelling excursions, stargazing from the deck, and a flexibility that no resort could match.',
  },
];

export default function TestimonialOne() {
  return (
    <section className="testi-area overflow-hidden space shape-mockup-wrap" id="testi-sec">
      <div className="container-fluid p-0">
        <div className="title-area mb-20 text-center">
          <span className="sub-title">Guest Reflections</span>
          <h2 className="sec-title">In Their Own Words</h2>
        </div>
        <div className="slider-area">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            slidesPerGroup={1}
            speed={1200}
            breakpoints={{
              0: { slidesPerView: 1 },
              767: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
              1400: { slidesPerView: 3 },
            }}
            className="testiSlider1 has-shadow"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testi-card">
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img src={item.image} alt="testimonial" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">{item.name}</h3>
                        <span className="testi-card_desig">{item.designation}</span>
                      </div>
                    </div>
                  </div>
                  <p className="testi-card_text">{item.text}</p>
                  <div className="testi-card-quote">
                    <img src="/assets/img/icon/testi-quote.svg" alt="img" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="shape-mockup d-none d-xl-block" style={{ bottom: '-2%', right: '0%' }}>
        <img src="/assets/img/shape/line2.png" alt="shape" />
      </div>
    </section>
  );
}
