import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import style from "./swpr.module.scss";
import { useEffect, useState } from "react";
import Hero from "../hero/Hero";
import Footer from "@/components/footer/Footer";
import { services } from "@/utils/data";
import Service from "../service/Service";
import Intro from "../intro/Intro";

export default function Swpr() {
  const [direction, setDirection] = useState("vertical");

  useEffect(() => {
    const currentDirection =
      window.innerWidth <= 800 ? "vertical" : "horizontal";
    setDirection(currentDirection);
  }, []);

  return (
    <section id="home">
      <Swiper
        direction={direction}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        draggable={true}
        loop={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="swiper"
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <Intro />
        </SwiperSlide>
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <Service index={index} service={service} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
