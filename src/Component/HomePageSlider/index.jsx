import React, { useState } from 'react';
import './style.scss'

function HomePageSlider() {

    const slides = [
      {
        url: "https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp",
      },
      {
        url: "https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp",
      },
      {
        url: "https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp",
      },
    ];
    const [index, setIndex] = useState([])

    const prevSlide = () => {
        const isfirstSlide = index === 0;
        const newIndex = isfirstSlide ? slides.length - 1 : index - 1;
        setIndex(newIndex)
    }
     const nextSlide = () => {
       const isLastSlide = index === slides.length - 1;
       const newIndex = isLastSlide ? 0 : index + 1;
       setIndex(newIndex);
     };
  return (
    <div>
      <div className="slidesContainer">
        <div
          className="slides"
          style={{
            backgroundImage: `url(${slides[index].url})`,
            backgroundSize: " cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div className="arrow">
            <div className="Arrowleft">
              <i class="fa-solid fa-caret-left" onClick={prevSlide}></i>
            </div>

            <div className="Arrowright">
              <i class="fa-solid fa-caret-right" onClick={nextSlide}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageSlider;
