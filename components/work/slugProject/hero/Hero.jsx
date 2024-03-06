import Image from "next/image";
import style from "./hero.module.scss";
import Link from "next/link";
import CursorContainer from "@/components/cursorContainer/CursorContainer";

export default function Hero({ project }) {
  return (
    <section className={style.hero}>
      <Image className={style.bg} alt="bg" src={project.images[0]} fill />
      <div className={style.info}>
        <h1 className="white">{project.title}</h1>
        <CursorContainer>
          <div>
            <Image
              className={style.arrow}
              alt="arrow"
              src={"/arrow.svg"}
              width={25}
              height={25}
            />
            <Link href={"/work"} className="white">
              Back to Work
            </Link>
          </div>
        </CursorContainer>
      </div>
    </section>
  );
}
