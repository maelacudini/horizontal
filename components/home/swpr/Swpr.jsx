import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import Slide from "../slide/Slide";
import { projects, projectsVideo } from "@/utils/data";

export default function Swpr() {
  return (
    <section id="home">
      <Swiper
        direction={"horizontal"}
        spaceBetween={0}
        slidesPerView={"auto"}
        centeredSlides={true}
        freeMode={true}
        mousewheel={true}
        draggable={false}
        loop={true}
        modules={[FreeMode, Mousewheel]}
        className="swiper"
      >
        {projectsVideo.map((project, index) => (
          <SwiperSlide key={index}>
            <Slide index={index} project={project} />
          </SwiperSlide>
        ))}
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Slide index={index} project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
