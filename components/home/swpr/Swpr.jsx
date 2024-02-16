import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { useEffect, useState } from "react";
import style from "./swpr.module.scss";
import Hero from "../hero/Hero";
import Footer from "@/components/footer/Footer";

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
        mousewheel={true}
        draggable={false}
        loop={true}
        modules={[FreeMode, Mousewheel]}
        className="swiper"
      >
        <SwiperSlide>
          <Hero />
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "100%", width: "100vw" }}>hello</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ height: "100%", width: "100vw" }}>hello</div>
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
