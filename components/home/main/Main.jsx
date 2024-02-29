import "swiper/css";
import "swiper/css/free-mode";
import { Mousewheel, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "./main.module.scss";
import { projects, projectsVideo } from "@/utils/data";
import { useEffect, useState } from "react";
import Slide from "../slide/Slide";
import { v4 as uuidv4 } from "uuid";

export default function Main() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(true);
    }
  }, []);

  return (
    <Swiper
      direction={"horizontal"}
      slidesPerView={"auto"}
      spaceBetween={16}
      mousewheel={true}
      freeMode={true}
      draggable={true}
      grabCursor={true}
      speed={mobile && 0}
      modules={[Mousewheel, FreeMode]}
      className="swiper"
    >
      {projects.map((project, index) => (
        <div
          key={index + project.title}
          className={`splide__slide ${style.slide}`}
        >
          <SwiperSlide key={uuidv4()}>
            <Slide mobile={mobile} index={index} project={project} />
          </SwiperSlide>
        </div>
      ))}
      {projectsVideo.map((project, index) => (
        <div
          key={index + project.title}
          className={`splide__slide ${style.slide}`}
        >
          <SwiperSlide key={uuidv4()}>
            <Slide mobile={mobile} index={index} project={project} />
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
}
