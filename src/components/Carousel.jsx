import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Correction ici
import "swiper/swiper-bundle.css"; // Assurez-vous que le CSS est correctement importé
import "../styles/global.css";
const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: "banner1.jpg",
      title: "Consultation en ligne",
      description: "Prenez rendez-vous en quelques clics.",
    },
    {
      id: 2,
      image: "banner2.jpg",
      title: "Médecins qualifiés",
      description: "Trouvez un médecin près de chez vous.",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]} // Correction ici
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      navigation
      pagination={{ clickable: true }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="text-center text-white bg-black bg-opacity-50 p-4 rounded">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;