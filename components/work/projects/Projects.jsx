import { projects, projectsVideo } from "@/utils/data";
import style from "./projects.module.scss";
import Project from "../project/Project";
import { AnimatePresence } from "framer-motion";

export default function Projects() {
  return (
    <section className={style.projects}>
      <div className={style.main}>
        <div className={style.container}>
          <AnimatePresence mode="wait">
            {projects.map((project, index) => (
              <Project project={project} key={index + 1} index={index + 1} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
