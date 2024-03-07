import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { benefits } from "@/utils/data";
import style from "./benefits.module.scss";
import Image from "next/image";

export default function Benefits() {
  return (
    <section id="benefits" className={style.benefits}>
      <div className={style.main}>
        <h2>What about the benefits we offer?</h2>

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0}
          navigation={true}
          loop={false}
          centeredSlides={true}
          draggable={true}
          modules={[Navigation]}
          className="swiper"
        >
          {benefits.map((benefit, i) => (
            <SwiperSlide key={i}>
              <Image
                alt="image"
                src={benefit.img}
                height={150}
                width={150}
                loading="lazy"
              />
              <div className={style.desc}>
                <p className="h4">{benefit.title}</p>
                <p>{benefit.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
