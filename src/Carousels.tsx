import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousels.css';

SwiperCore.use([Navigation, Pagination]);

interface CarouselsProps {
  bottleImages: string[];
  chairImages: string[];
}

const Carousels: React.FC<CarouselsProps> = ({ bottleImages, chairImages }) => {

  return (
    <section>
      <div className="carousels">
        <div className="carousel-left-container">
          <div className="carousel-left">
              <img className="star1" src="/star2.svg" alt="Star IMG" />
              <img className="prix" src="/Encart-prix-iso.png" alt="Price" />
              <div className="button-prev">
                <img src="/packshots/arrow-dropleft-circle.svg" alt="Previous" />
              </div>
              <div className="carousel-container">
              <Swiper 
              slidesPerView={1}
              loop={true}
              navigation={{
                  prevEl: '.button-prev',
                  nextEl: '.button-next',
                  //disabledClass: "swiper-button-disabled"
              }}
              pagination={{
                  clickable: true,
              }}
              className="swiper-container">
                  {bottleImages.map((imageUrl, index) => (
                  <SwiperSlide key={`bottle-slide-${index}`}>
                      <img src={imageUrl} alt={`Bottle ${index}`} />
                  </SwiperSlide>
                  ))}
              </Swiper>
              </div>
              <div className="button-next">
                <img src="/packshots/arrow-dropright-circle.svg" alt="Next" />
              </div>
          </div>
          <h2 className="carousel-title">La bouteille isotherme 50cL</h2>
        </div>
        <div className="carousel-right-container">
          <div className="carousel-right">
              <img className="star2" src="/star.svg" alt="Star IMG" />
              <img className="prix" src="/Encart-prix-patchwork.png" alt="Price" />
              <div className="button-prev-2">
                <img src="/packshots/arrow-dropleft-circle.svg" alt="Previous" />
              </div>
              <div className="carousel-container">
              <Swiper 
              slidesPerView={1}
              loop={true}
              navigation={{
                  prevEl: '.button-prev-2',
                  nextEl: '.button-next-2',
                  //disabledClass: "swiper-button-disabled"
              }}
              pagination={{
                  clickable: true,
              }}
              className="swiper-container">
              {chairImages.map((imageUrl, index) => (
                <SwiperSlide key={`chair-slide-${index}`}>
                  <img src={imageUrl} alt={`Chair ${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
              <div className="button-next-2">
                <img src="/packshots/arrow-dropright-circle.svg" alt="Next" />
              </div>
          </div>
          <h2 className="carousel-title">Le fauteuil patchwork</h2>
        </div>
      </div>
    </section>
  );
};

export default Carousels;
