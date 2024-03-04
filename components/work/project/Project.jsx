import Image from "next/image";
import style from "./project.module.scss";
import { motion } from "framer-motion";
import { slideupProject } from "@/utils/animations";
import Link from "next/link";

export default function Project({ project, index }) {
  return (
    <motion.article
      variants={slideupProject}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className={style.project}
    >
      <div className={style.overlay}>
        <Link className="btn-white" href={`/work/${project.slug}`}>
          View full project
        </Link>
      </div>
      {project.images ? (
        <Image
          alt="image"
          src={project.images[0]}
          height={500}
          width={500}
          loading="lazy"
        />
      ) : (
        <video
          className={style.video}
          width={"100%"}
          height={"500px"}
          preload="none"
          autoPlay
          playsInline
          loop
          muted
        >
          <source src={project.video[0]} type="video/mp4" />
        </video>
      )}
      <p>{project.date}</p>
      <p className="h4">{project.title}</p>
    </motion.article>
  );
}
