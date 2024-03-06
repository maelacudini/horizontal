import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { steps } from "@/utils/data";

export default function Slides() {
  return (
    <section id="slides">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        navigation={true}
        loop={true}
        centeredSlides={true}
        draggable={true}
        modules={[Navigation]}
        className="swiper"
      >
        {steps.map((step, i) => (
          <SwiperSlide key={i}>
            <p>{step.date}</p>
            <p className="h4">{step.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
