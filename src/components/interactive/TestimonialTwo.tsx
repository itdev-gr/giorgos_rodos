import { useState } from 'react';

const testimonials = [
  {
    text: '"A home that perfectly blends sustainability with luxury until discovered Ecoland Residence. The moment I stepped into the community, I knew it was where I wanted to live."',
    name: 'Andrew Simon',
    image: '/assets/img/testimonial/testi_2_1.png',
  },
  {
    text: '"The home boasts sleek, contemporary architecture with clean lines and expansive windows, allowing natural light to flood the interiors. It incorporates passive design principles."',
    name: 'Maria Doe',
    image: '/assets/img/testimonial/testi_2_2.png',
  },
  {
    text: '"Solar panels adorn the roof, harnessing renewable energy to power into the grid. High-performance insulation and triple-glazed windows ensure optimal energy efficiency."',
    name: 'Angelina Rose',
    image: '/assets/img/testimonial/testi_2_3.png',
  },
  {
    text: '"A sophisticated rainwater harvesting system and non-potable uses, reducing reliance on municipal water sources. Greywater systems also contribute to sustainability."',
    name: 'Michel Carlos',
    image: '/assets/img/testimonial/testi_2_4.png',
  },
  {
    text: '"Throughout the interior, eco-friendly materials like reclaimed wood, create a luxurious yet sustainable ambiance. It\'s the perfect combination of style and eco-consciousness."',
    name: 'Michel Smith',
    image: '/assets/img/testimonial/testi_2_5.png',
  },
];

export default function TestimonialTwo() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonial-area2 overflow-hidden space" id="testi-sec">
      <div className="container shape-mockup-wrap">
        <div className="title-area text-center">
          <span className="sub-title">Testimonial</span>
          <h2 className="sec-title">What Client Say About us</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="testi-review" style={{ backgroundImage: "url('/assets/img/bg/map.png')" }}>
              {testimonials.map((testi, index) => (
                <div
                  key={index}
                  className={`testi-box hover-item ${activeIndex === index ? 'item-active' : ''}`}
                  onMouseOver={() => setActiveIndex(index)}
                >
                  <div className="testi-box_content feature-card-active-wrap">
                    <p className="testi-box_text">{testi.text}</p>
                    <div className="testi-box_review">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="testi-box_profile">
                    <div className="testi-box_avater">
                      <span></span>
                      <img src={testi.image} alt="testimonial" />
                    </div>
                    <div className="media-body">
                      <h3 className="box-title">{testi.name}</h3>
                      <span className="testi-box_desig">Traveller</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="shape-mockup spin d-none d-xl-block" style={{ bottom: '30%', right: '-10%' }}>
          <img src="/assets/img/shape/shape_2_5.png" alt="shape" />
        </div>
      </div>
    </section>
  );
}
