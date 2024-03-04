import Image from "next/image";
import style from "./slug.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function SlugProject({ project, prevProject, nextProject }) {
  const [copySuccess, setCopySuccess] = useState(false);

  function copyURL() {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 5000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }
  return (
    <section className={style.main}>
      <article className={style.content}>
        <div>
          <Link href="/work">
            <Image
              alt="arrow"
              src="/arrow.svg"
              height={25}
              width={25}
              loading="lazy"
              className={style.arrow}
            />
          </Link>
          <p className="bold">Specifics</p>
          <p>{project.title}</p>
          <p>{project.subtitle}</p>
          <p>{project.date}</p>
          <a onClick={copyURL}>
            {copySuccess ? "Link copied!" : "Share the project"}
          </a>
        </div>
        <div>
          <h4>{project.description}</h4>
        </div>
      </article>

      <div className={style.navigation}>
        {prevProject && (
          <Link href={`/work/${prevProject.slug}`}>Previous project</Link>
        )}
        {nextProject && (
          <Link href={`/work/${nextProject.slug}`}>Next project</Link>
        )}
      </div>

      <div className={style.img}>
        <Image
          alt="img"
          src={project.images[0]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          loading="lazy"
        />
      </div>
    </section>
  );
}
