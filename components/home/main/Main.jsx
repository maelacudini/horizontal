// import "@splidejs/splide/css/core";
// import Splide from "@splidejs/splide";
import style from "./main.module.scss";
import { projects, projectsVideo } from "@/utils/data";
import { useEffect, useState } from "react";
import Slide from "../slide/Slide";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Main() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(true);
    }

    // var splide = new Splide(".splide", {
    //   direction: mobile ? "ttb" : "rtl",
    //   height: "calc(100svh - 109px)",
    //   wheel: true,
    //   arrows: false,
    //   pagination: false,
    //   speed: 1000,
    //   gap: "1rem",
    // });

    // splide.mount();

    // return () => {
    //   splide.destroy();
    // };
  }, []);

  return (
    <Swiper
      direction={"horizontal"}
      slidesPerView={"auto"}
      freeMode={true}
      mousewheel={true}
      spaceBetween={16}
      draggable={true}
      modules={[FreeMode, Mousewheel]}
      className="swiper"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index + project}>
          <Slide mobile={mobile} index={index} project={project} />
        </SwiperSlide>
      ))}
      {projectsVideo.map((project, index) => (
        <SwiperSlide key={index + project}>
          <Slide mobile={mobile} index={index} project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
    // <section
    //   id="home"
    //   className={`splide ${style.splide}`}
    //   aria-label="Splide Homepage"
    // >
    //   <div className={`splide__track`}>
    //     <div className={`splide__list`}>
    //       {projects.map((project, index) => (
    //         <div
    //           key={index + project}
    //           className={`splide__slide ${style.slide}`}
    //         >
    //           <Slide mobile={mobile} index={index} project={project} />
    //         </div>
    //       ))}
    //       {projectsVideo.map((project, index) => (
    //         <div
    //           key={index + project}
    //           className={`splide__slide ${style.slide}`}
    //         >
    //           <Slide mobile={mobile} index={index} project={project} />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}
