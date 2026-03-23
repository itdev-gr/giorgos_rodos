import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const guides = [
  { id: 1, name: 'Jacob Jones', image: 'team_1_1.jpg' },
  { id: 2, name: 'Jane Cooper', image: 'team_1_2.jpg' },
  { id: 3, name: 'Guy Hawkins', image: 'team_1_3.jpg' },
  { id: 4, name: 'Jenny Wilson', image: 'team_1_4.jpg' },
  { id: 5, name: 'Jacob Jones', image: 'team_1_1.jpg' },
  { id: 6, name: 'Jane Cooper', image: 'team_1_2.jpg' },
  { id: 7, name: 'Guy Hawkins', image: 'team_1_3.jpg' },
  { id: 8, name: 'Jenny Wilson', image: 'team_1_4.jpg' },
];

export default function TourGuideOne() {
  return (
    <section
      className="bg-smoke space overflow-hidden"
      style={{ backgroundImage: 'url(/assets/img/bg/team_bg_1.png)' }}
    >
      <div className="container z-index-common">
        <div className="title-area text-center">
          <span className="sub-title">Meet with Guide</span>
          <h2 className="sec-title">Tour Guide</h2>
        </div>
        <div className="slider-area">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            speed={1200}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="th-slider teamSlider1 has-shadow"
          >
            {guides.map((guide) => (
              <SwiperSlide key={guide.id}>
                <div className="th-team team-box">
                  <div className="team-img">
                    <img src={`/assets/img/team/${guide.image}`} alt={guide.name} />
                  </div>
                  <div className="team-content">
                    <div className="media-body">
                      <h3 className="box-title">
                        <a href="/tour-guide/1">{guide.name}</a>
                      </h3>
                      <span className="team-desig">Tourist Guide</span>
                      <div className="th-social">
                        {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                          <a key={platform} target="_blank" rel="noopener noreferrer" href={`https://${platform}.com/`}>
                            <i className={`fab fa-${platform}`} />
                          </a>
                        ))}
                      </div>
                    </div>
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
