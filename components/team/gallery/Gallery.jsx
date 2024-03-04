import style from "./gallery.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { team } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(true);
    }
  }, []);

  return (
    <section id="team" className={style.gallery}>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={16}
        className="swiper"
      >
        <SwiperSlide>
          <article className={style.title}>
            <h2>The Team</h2>
            <Link href="mailto:">Join us</Link>
          </article>
        </SwiperSlide>
        {team.map((person, index) => (
          <SwiperSlide key={index}>
            <article className={style.person}>
              <Image
                className={style.image}
                alt="image"
                src={person.image}
                loading="eager"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={mobile ? { opacity: 1 } : { opacity: 0 }}
                whileHover={{ opacity: 1 }}
                viewport={{ once: false }}
                className={style.over}
              >
                <p className="h4 white">{person.name}</p>
                <p className="gray">{person.role}</p>
              </motion.div>
            </article>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <article className={style.title}>
            <Link href="mailto:">We're waiting for your application</Link>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
