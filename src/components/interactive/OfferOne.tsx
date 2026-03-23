import { useState, useEffect } from 'react';

const offers = [
  { id: 1, title: 'Himalay, Nepal', price: '$499.00 USD', image: '/assets/img/normal/offer_img_1.jpg' },
  { id: 2, title: 'Ashi Lake Hakone, Japan', price: '$465.11', image: '/assets/img/normal/offer_img_2.jpg' },
  { id: 3, title: 'Coxbazar, Bangladesh', price: '8,200 tk', image: '/assets/img/normal/offer_img_3.jpg' },
  { id: 4, title: 'Architecture in Paris', price: '$437.29', image: '/assets/img/normal/offer_img_4.jpg' },
  { id: 5, title: 'Caribbean, Maldives', price: '$2,333', image: '/assets/img/normal/offer_img_5.jpg' },
];

export default function OfferOne() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);

  const handleMouseEnter = (id: number) => setHoveredIndex(id);
  const handleMouseLeave = () => setHoveredIndex(1);

  useEffect(() => {
    setActiveIndex(1);
  }, []);

  return (
    <section className="position-relative overflow-hidden space">
      <div className="container shape-mockup-wrap">
        <div className="offer-deals-accordion">
          <div className="row">
            <div className="col-xl-7">
              <div className="offer-deals-wrapp">
                <div className="accordion-item-wrapp" id="offerDeals">
                  {offers.map((offer, index) => (
                    <div
                      key={offer.id}
                      className={`accordion-item-content ${activeIndex === offer.id ? 'active' : ''}`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="accordion-tab-item" data-bs-toggle="tab" data-bs-target={`#tab${offer.id}`}>
                        <div className="accordion-item">
                          <div className="accordion-header" id={`collapse-item-${offer.id}`}>
                            <button
                              className={`accordion-button ${activeIndex === offer.id ? '' : 'collapsed'}`}
                              aria-expanded={activeIndex === offer.id}
                              aria-controls={`collapse-${offer.id}`}
                              onClick={() => setActiveIndex(activeIndex === offer.id ? null : offer.id)}
                            >
                              <span className="accordion-item_info">
                                <span className="box-title">{offer.title}</span>
                                <i className="fa-thin fa-angle-down" />
                              </span>
                            </button>
                          </div>
                          <div
                            id={`collapse-${offer.id}`}
                            className="accordion-collapse"
                            style={{
                              maxHeight: activeIndex === offer.id ? 'max-content' : '0px',
                              overflow: 'hidden',
                              transition: 'max-height 0.4s ease-in-out',
                            }}
                            aria-labelledby={`collapse-item-${offer.id}`}
                          >
                            <div className="accordion-body">
                              <span className="faq-price">{offer.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div id="tabs-content">
                  {offers.map((offer) => (
                    <div
                      key={offer.id}
                      id={`tab${offer.id}`}
                      className={`according-img-tab ${hoveredIndex !== null && hoveredIndex !== offer.id ? 'd-none' : ''}`}
                    >
                      <img src={offer.image} alt={offer.title} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="title-area pe-xl-5 me-xl-5">
                <span className="sub-title">Last Discount for you</span>
                <h2 className="sec-title">Offer Deals &amp; Discount</h2>
              </div>
              <ul className="offer-deals-counter counter-list" data-offer-date="12/8/2024">
                <li>
                  <div className="day count-number">00</div>
                  <span className="count-name">Days</span>
                </li>
                <li>
                  <div className="hour count-number">00</div>
                  <span className="count-name">Hours</span>
                </li>
                <li>
                  <div className="minute count-number">00</div>
                  <span className="count-name">Minutes</span>
                </li>
                <li>
                  <div className="seconds count-number">00</div>
                  <span className="count-name">Seconds</span>
                </li>
              </ul>
              <div className="mt-60">
                <a href="/contact" className="th-btn style3 th-icon">Get More Offer</a>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-mockup movingX d-none d-xl-block" style={{ bottom: '-8%', left: '-15%' }}>
          <img src="/assets/img/shape/shape_2_1.png" alt="shape" />
        </div>
      </div>
    </section>
  );
}
