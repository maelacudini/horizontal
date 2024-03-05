import Image from "next/image";
import style from "./details.module.scss";
import Link from "next/link";
import { useState } from "react";
import CursorContainer from "@/components/cursorContainer/CursorContainer";

export default function Details({ project, prevProject, nextProject }) {
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
          <CursorContainer>
            <Link href={`/work/${prevProject.slug}`}>Previous project</Link>
          </CursorContainer>
        )}
        {nextProject && (
          <CursorContainer>
            <Link href={`/work/${nextProject.slug}`}>Next project</Link>
          </CursorContainer>
        )}
      </div>
    </section>
  );
}
