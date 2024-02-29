import "swiper/css";
import "swiper/css/free-mode";
import { Mousewheel, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "./main.module.scss";
import { projects, projectsVideo } from "@/utils/data";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SlidingText from "../slidingText/SlidingText";
import Slide from "../slide/Slide";
import Cards from "../cards/Cards";

export default function Main() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(true);
    }
  }, []);

  return (
    <section className={style.main}>
      <Swiper
        direction={"horizontal"}
        slidesPerView={"auto"}
        spaceBetween={16}
        mousewheel={true}
        freeMode={true}
        draggable={true}
        grabCursor={true}
        modules={[Mousewheel, FreeMode]}
        className="swiper"
      >
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        {projects.map((project, index) => (
          <SwiperSlide key={uuidv4()}>
            <Slide mobile={mobile} index={index} project={project} />
          </SwiperSlide>
        ))}
        {projectsVideo.map((project, index) => (
          <SwiperSlide key={uuidv4()}>
            <Slide mobile={mobile} index={index} project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SlidingText />
    </section>
  );
}
