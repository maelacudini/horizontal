import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { useEffect, useState } from "react";

export default function Swpr() {
  const [direction, setDirection] = useState("vertical");

  useEffect(() => {
    const currentDirection =
      window.innerWidth <= 800 ? "vertical" : "horizontal";
    setDirection(currentDirection);
  }, []);

  return (
    <section id="work">
      <Swiper
        direction={direction}
        slidesPerView={"auto"}
        freeMode={true}
        mousewheel={true}
        draggable={false}
        loop={true}
        modules={[FreeMode, Mousewheel]}
        className="swiper"
      ></Swiper>
    </section>
  );
}
