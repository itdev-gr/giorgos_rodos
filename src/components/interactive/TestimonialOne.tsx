import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Sarah & Tom W.',
    designation: 'Boat Tour, Rhodes',
    image: '/assets/img/testimonial/testi_1_1.jpg',
    text: 'We contacted Rhodes Boat Tours before our trip and they helped us pick the perfect boat tour for our family. The advice was honest, the captain was fantastic, and the hidden bays we visited were absolutely stunning. Best day of our holiday.',
  },
  {
    name: 'Marco & Giulia B.',
    designation: 'Yacht Charter, Dodecanese',
    image: '/assets/img/testimonial/testi_1_2.jpg',
    text: 'We chartered a sailing yacht for a week around the Dodecanese. The team arranged everything — from provisioning to the route. Symi, Halki, Tilos — every island was a new discovery. Truly a local team that knows these waters.',
  },
  {
    name: 'The Peterson Family',
    designation: 'Day Cruise, Rhodes',
    image: '/assets/img/testimonial/testi_1_1.jpg',
    text: 'Travelling with three kids, we were not sure which cruise to choose. The team recommended the all-inclusive day cruise and it was perfect. The children loved swimming in Anthony Quinn Bay and the food onboard was delicious.',
  },
  {
    name: 'Anna & David K.',
    designation: 'Speedboat Tour, Rhodes',
    image: '/assets/img/testimonial/testi_1_2.jpg',
    text: 'The speedboat trip with skipper was the highlight of our Rhodes holiday. We visited beaches that are impossible to reach by car. The skipper knew every hidden spot along the coastline. Cannot recommend this enough.',
  },
  {
    name: 'Christine L.',
    designation: 'Rent a Boat, Charaki',
    image: '/assets/img/testimonial/testi_1_1.jpg',
    text: 'Renting a license-free boat was so easy. The team explained everything clearly and gave us a map with the best spots. We spent the whole day exploring the southeast coast on our own. Pure freedom.',
  },
  {
    name: 'Michael & Petra S.',
    designation: 'Sunset Cruise, Rhodes',
    image: '/assets/img/testimonial/testi_1_2.jpg',
    text: 'The sunset cruise was magical. Watching the sun go down from the water with a glass of wine, surrounded by the Rhodes coastline — it was one of those moments you never forget. Thank you for making it so special.',
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
    </section>
  );
}
