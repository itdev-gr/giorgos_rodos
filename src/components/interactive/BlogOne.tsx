import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const blogPosts = [
  { id: 1, date: 'July 05 2024', readTime: '6 min read', title: '10 Reasons why you should visit New Jersey', image: '/assets/img/blog/blog_1_1.jpg', detailsLink: '/blog/1' },
  { id: 2, date: 'July 06 2024', readTime: '7 min read', title: 'The best time to visit Japan & enjoy the cherry blossoms', image: '/assets/img/blog/blog_1_2.jpg', detailsLink: '/blog/1' },
  { id: 3, date: 'July 07 2024', readTime: '8 min read', title: 'The 7 amazing destinations for adventure seekers', image: '/assets/img/blog/blog_1_3.jpg', detailsLink: '/blog/1' },
  { id: 4, date: 'July 09 2024', readTime: '9 min read', title: '10 Reasons why you should visit New Jersey', image: '/assets/img/blog/blog_1_1.jpg', detailsLink: '/blog/1' },
  { id: 5, date: 'July 10 2024', readTime: '10 min read', title: 'The best time to visit Japan & enjoy the cherry blossoms', image: '/assets/img/blog/blog_1_2.jpg', detailsLink: '/blog/1' },
  { id: 6, date: 'July 12 2024', readTime: '11 min read', title: 'The 7 amazing destinations for adventure seekers', image: '/assets/img/blog/blog_1_3.jpg', detailsLink: '/blog/1' },
];

export default function BlogOne() {
  return (
    <section className="bg-smoke overflow-hidden space" id="blog-sec">
      <div className="container shape-mockup-wrap">
        <div className="mb-30 text-center text-md-start">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7">
              <div className="title-area mb-md-0">
                <span className="sub-title">About Us Restaurant</span>
                <h2 className="sec-title">News & Articles From Rodos Yachts</h2>
              </div>
            </div>
            <div className="col-md-auto">
              <a href="/blog" className="th-btn style4 th-icon">See More Articles</a>
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="swiper th-slider has-shadow"
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="blog-box th-ani">
                <div className="blog-img global-img">
                  <img src={post.image} alt="blog" />
                </div>
                <div className="blog-box_content">
                  <div className="blog-meta">
                    <a className="author" href="/blog">{post.date}</a>
                    <a href="/blog">{post.readTime}</a>
                  </div>
                  <h3 className="box-title">
                    <a href={post.detailsLink}>{post.title}</a>
                  </h3>
                  <a href={post.detailsLink} className="th-btn style4 th-icon">Read More</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
