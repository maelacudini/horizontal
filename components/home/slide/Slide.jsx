import Image from "next/image";
import style from "./slide.module.scss";
import { motion } from "framer-motion";

export default function Slide({ project, index, mobile }) {
  return (
    <article className={style.slide}>
      <motion.div
        initial={{ top: "4rem", opacity: 0 }}
        whileHover={{ top: 0, opacity: 1 }}
        whileTap={{ top: 0, opacity: 1 }}
        whileInView={mobile && { top: 0, opacity: 1 }}
        viewport={{ once: true }}
        className={style.main}
      >
        <div className={style.intro}>
          <p className="white h3">{project.title}</p>
          <p className="gray">{project.subtitle}</p>
        </div>
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
