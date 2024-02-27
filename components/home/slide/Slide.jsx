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
          loading={index === 0 ? "eager" : "lazy"}
        />
      ) : (
        <video
          className={style.bg}
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
          <p className="white h2">{project.title}</p>
          <p className="gray h4">{project.subtitle}</p>
        </div>

        <Link href={"/"} className="btn-white">
          Check it out
        </Link>
      </div>
    </article>
  );
}
