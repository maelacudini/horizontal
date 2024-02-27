import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import Slide from "../slide/Slide";

export default function Swpr() {
  // const [direction, setDirection] = useState("vertical");

  // useEffect(() => {
  //   const currentDirection =
  //     window.innerWidth <= 800 ? "vertical" : "horizontal";
  //   setDirection(currentDirection);
  // }, []);

  return (
    <section id="home">
      <Swiper
        direction={"horizontal"}
        spaceBetween={15}
        slidesPerView={"auto"}
        freeMode={true}
        mousewheel={true}
        draggable={false}
        loop={true}
        modules={[FreeMode, Mousewheel]}
        className="swiper"
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
