import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const guides = [
  { id: 1, name: 'Michel Smith', mainImg: '/assets/img/team/team_img_1.jpg', thumbImg: '/assets/img/team/team_1_1.jpg' },
  { id: 2, name: 'Michel Smith', mainImg: '/assets/img/team/team_img_2.jpg', thumbImg: '/assets/img/team/team_1_2.jpg' },
  { id: 3, name: 'Michel Smith', mainImg: '/assets/img/team/team_img_3.jpg', thumbImg: '/assets/img/team/team_1_3.jpg' },
  { id: 4, name: 'Michel Smith', mainImg: '/assets/img/team/team_img_1.jpg', thumbImg: '/assets/img/team/team_1_1.jpg' },
  { id: 5, name: 'Michel Smith', mainImg: '/assets/img/team/team_img_2.jpg', thumbImg: '/assets/img/team/team_1_2.jpg' },
  { id: 6, name: 'Michel Smith', mainImg: '/assets/img/team/team_img_3.jpg', thumbImg: '/assets/img/team/team_1_3.jpg' },
];

const socials = ['facebook-f', 'twitter', 'linkedin-in', 'youtube', 'instagram'];

export default function TourGuideTwo() {
  return (
    <section
      className="team-area3 position-relative bg-top-center space"
      style={{ backgroundImage: 'url(/assets/img/bg/team_bg_2.jpg)', backgroundRepeat: 'no-repeat', zIndex: 1, paddingBottom: 0 }}
    >
      <div className="container z-index-common">
        <div className="title-area text-center">
          <span className="sub-title">Meet with Guide</span>
          <h2 className="sec-title">Meet with Tour Guide</h2>
        </div>
        <div className="slider-area">
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: '.slider-prev',
              nextEl: '.slider-next',
            }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="th-slider teamSlider3 has-shadow"
          >
            {guides.map((guide) => (
              <SwiperSlide key={guide.id}>
                <div className="th-team team-grid">
                  <div className="team-img">
                    <img src={guide.mainImg} alt="Team" />
                  </div>
                  <div className="team-img2">
                    <img src={guide.thumbImg} alt="Team" />
                  </div>
                  <div className="team-content">
                    <div className="media-body">
                      <h3 className="box-title">
                        <a href={`/tour-guide/${guide.id}`}>{guide.name}</a>
                      </h3>
                      <span className="team-desig">Tourist Guide</span>
                      <div className="th-social">
                        {socials.map((platform) => (
                          <a key={platform} target="_blank" rel="noopener noreferrer" href={`https://${platform.replace('-f', '').replace('-in', '')}.com/`}>
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
          <button className="slider-arrow slider-prev">
            <img src="/assets/img/icon/right-arrow2.svg" alt="" />
          </button>
          <button className="slider-arrow slider-next">
            <img src="/assets/img/icon/left-arrow2.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
