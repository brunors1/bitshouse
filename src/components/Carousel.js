import React from "react";
import CarouselImage1 from '../assets/images/carousel1.jpg';
import CarouselImage2 from '../assets/images/carousel2.jpg';
import CarouselImage3 from '../assets/images/carousel3.jpg';

const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={CarouselImage1}
            className="d-block w-100"
            alt="Imagem Geforce RTX, A melhor experiencia para seu PC Gamer"
          />
        </div>
        <div className="carousel-item">
          <img
            src={CarouselImage2}
            className="d-block w-100"
            alt="Imagem AMD Series 5000G, Jogue hoje com a arquitetura Zen 3"
          />
        </div>
        <div className="carousel-item">
          <img
            src={CarouselImage3}
            className="d-block w-100"
            alt="Imagem AMD Series 5000, Os processadores para jogos mais bem avaliados"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
