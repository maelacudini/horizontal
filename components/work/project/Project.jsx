import Image from "next/image";
import style from "./project.module.scss";
import { motion } from "framer-motion";
import { slideupProject } from "@/utils/animations";
import CursorContainer from "@/components/cursorContainer/CursorContainer";
import { useRouter } from "next/navigation";

export default function Project({ project, index }) {
  const router = useRouter();
  return (
    <CursorContainer>
      <motion.article
        variants={slideupProject}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={index + 1}
        className={style.project}
        onClick={() => router.push(`/work/${project.slug}`)}
      >
        <div className={style.overlay}>
          <p className="h4 white">View</p>
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
