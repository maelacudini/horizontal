import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import Slide from "../slide/Slide";
import { projects, projectsVideo } from "@/utils/data";
import { useEffect, useState } from "react";

export default function Swpr() {
  const [option, setOpion] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setOpion(false);
    } else {
      setOpion(true);
    }
  }, []);

  return (
    <section id="home">
      <Swiper
        direction={"horizontal"}
        spaceBetween={16}
        slidesPerView={"auto"}
        centeredSlides={true}
        freeMode={true}
        mousewheel={option}
        draggable={true}
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
