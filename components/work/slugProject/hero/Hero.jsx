import Image from "next/image";
import style from "./hero.module.scss";
import Link from "next/link";
import CursorContainer from "@/components/cursorContainer/CursorContainer";

export default function Hero({ project }) {
  return (
    <section className={style.hero}>
      <Image alt="bg" src={project.images[0]} fill />
      <div className={style.info}>
        <h1 className="white">{project.title}</h1>
      </div>
    </section>
  );
}
