import Image from "next/image";
import style from "./project.module.scss";
import { motion } from "framer-motion";
import { slideupProject } from "@/utils/animations";
import Link from "next/link";
import CursorContainer from "@/components/cursorContainer/CursorContainer";

export default function Project({ project, index }) {
  return (
    <CursorContainer>
      <motion.article
        variants={slideupProject}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={index + 1}
        className={style.project}
      >
        <div className={style.overlay}>
          <Link className="h4 white" href={`/work/${project.slug}`}>
            View
          </Link>
        </div>
        <Image
          alt="image"
          src={project.images[0]}
          height={500}
          width={500}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
        />

        <p>{project.date}</p>
        <p className="h4">{project.title}</p>
      </motion.article>
    </CursorContainer>
  );
}
