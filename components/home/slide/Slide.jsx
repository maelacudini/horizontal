import Image from "next/image";
import style from "./slide.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Slide({ project, index }) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMobile(true);
    }
  }, []);

  return (
    <article className={style.slide}>
      <motion.div
        whileInView={mobile && { marginTop: "0", opacity: 1 }}
        initial={{ marginTop: "2rem", opacity: 0 }}
        whileHover={!mobile && { marginTop: "0", opacity: 1 }}
        viewport={{ once: true }}
        className={style.main}
      >
        <div className={style.intro}>
          <p className="white h3">{project.title}</p>
          <p className="gray">{project.subtitle}</p>
        </div>

        <Link href={"/"} className="btn-white">
          Check it out
        </Link>
      </motion.div>
      {project.images ? (
        <Image
          alt="projectbg"
          src={project.images[0]}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          fill
          className={style.bg}
          priority={index === 0 ? true : false}
          loading="eager"
        />
      ) : (
        <video
          className={style.video}
          width={"100%"}
          height={"100%"}
          preload="none"
          autoPlay
          playsInline
          loop
          muted
        >
          <source src={project.video[0]} type="video/mp4" />
        </video>
      )}
    </article>
  );
}
