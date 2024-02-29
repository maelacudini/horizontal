// import "@splidejs/splide/css/core";
// import Splide from "@splidejs/splide";

import "swiper/css";
import "swiper/css/free-mode";
import { Mousewheel, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import style from "./main.module.scss";
import { projects, projectsVideo } from "@/utils/data";
import { useEffect, useState } from "react";
import Slide from "../slide/Slide";

export default function Main() {
  const [mobile, setMobile] = useState();

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    // var splide = new Splide(".splide", {
    //   direction: "rtl",
    //   height: "calc(100svh - 109px)",
    //   wheel: true,
    //   arrows: false,
    //   pagination: false,
    //   // speed: !mobile && 1000,
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
      spaceBetween={16}
      mousewheel={true}
      freeMode={true}
      draggable={true}
      grabCursor={true}
      modules={[Mousewheel, FreeMode]}
      className="swiper"
    >
      {projects.map((project, index) => (
        <div key={index + project} className={`splide__slide ${style.slide}`}>
          <SwiperSlide>
            <Slide mobile={mobile} index={index} project={project} />
          </SwiperSlide>
        </div>
      ))}
      {projectsVideo.map((project, index) => (
        <div key={index + project} className={`splide__slide ${style.slide}`}>
          <SwiperSlide>
            <Slide mobile={mobile} index={index} project={project} />
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
    // <section
    //   id="home"
    //   className={`splide ${style.splide}`}
    //   aria-label="Splide Homepage"
    // >
    //   <div className={`splide__track`}>
    //     <div className={`splide__list`}>
    // {projects.map((project, index) => (
    //   <div
    //     key={index + project}
    //     className={`splide__slide ${style.slide}`}
    //   >
    //     <Slide mobile={mobile} index={index} project={project} />
    //   </div>
    // ))}
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
