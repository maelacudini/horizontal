import Image from "next/image";
import style from "./slide.module.scss";
import Link from "next/link";

export default function Slide({ project, index }) {
  return (
    <article className={style.slide}>
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
          autoPlay
          playsInline
          loop
          muted
        >
          <source src={project.video[0]} type="video/mp4" />
        </video>
      )}

      <div className={style.main}>
        <div className={style.intro}>
          <p className="white h2">titolo</p>
          <p className="gray h4">sottotitolo</p>
        </div>

        <Link href={"/"} className="btn-white">
          Check it out
        </Link>
      </div>
    </article>
  );
}
