import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Mousewheel, FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "./main.module.scss";
import { projects, projectsVideo } from "@/utils/data";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Cards from "../cards/Cards";
import dynamic from "next/dynamic";

const DynamicSlide = dynamic(() => import("../slide/Slide"), {
  loading: () => <p>Loading...</p>,
});

export default function Main() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(true);
    }
  }, []);

  return (
    <section id="home" className={style.main}>
      <Swiper
        direction={"horizontal"}
        slidesPerView={"auto"}
        spaceBetween={16}
        mousewheel={true}
        freeMode={true}
        draggable={true}
        grabCursor={true}
        navigation={true}
        modules={[Mousewheel, FreeMode, Navigation]}
        className="swiper"
      >
        <SwiperSlide>
          <Cards />
        </SwiperSlide>
        {projects.map((project, index) => (
          <SwiperSlide key={uuidv4()}>
            <DynamicSlide mobile={mobile} index={index} project={project} />
          </SwiperSlide>
        ))}
        {projectsVideo.map((project, index) => (
          <SwiperSlide key={uuidv4()}>
            <DynamicSlide mobile={mobile} index={index} project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
