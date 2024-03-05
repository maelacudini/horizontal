import Image from "next/image";
import style from "./hero.module.scss";
import Link from "next/link";
import CursorContainer from "@/components/cursorContainer/CursorContainer";

export default function Hero({ project }) {
  return (
    <section className={style.hero}>
      <div className={style.links}>
        <CursorContainer>
          <Link className="white" href={"/"}>
            Back Home
          </Link>
        </CursorContainer>
        <CursorContainer>
          <Link className="white" href={"/work"}>
            View all Work
          </Link>
        </CursorContainer>
      </div>
      <Image alt="bg" src={project.images[0]} fill />
      <div className={style.info}>
        <h1 className="white">{project.title}</h1>
      </div>
    </section>
  );
}
