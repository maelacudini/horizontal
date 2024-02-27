import Image from "next/image";
import style from "./slide.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Slide({ project, index, option }) {
  return (
    <article className={style.slide}>
      <motion.div
        initial={!option && { opacity: 0, marginTop: 20 }}
        whileInView={!option && { opacity: 1, marginTop: 0 }}
        viewport={{ once: false }}
        className={style.main}
      >
        <div className={style.intro}>
          <p className="white h2">{project.title}</p>
          <p className="gray h4">{project.subtitle}</p>
        </div>

        <Link href={"/"} className="btn-white">
          Check it out
        </Link>
      </motion.div>
      {project.images ? (
        <Image
          alt="projectbg"
          src={project.images[0]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
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
