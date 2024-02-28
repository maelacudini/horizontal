import { useEffect } from "react";
import "@splidejs/splide/css";
import Splide from "@splidejs/splide";
import style from "./main.module.scss";
import { projects, projectsVideo } from "@/utils/data";
import Slide from "../slide/Slide";

export default function Main() {
  useEffect(() => {
    var splide = new Splide(".splide", {
      direction: "rtl",
      height: "calc(100svh - 109px)",
      wheel: true,
      arrows: false,
      speed: 1000,
      gap: "1rem",
      focus: "center",
      perPage: 4.25,
      breakpoints: {
        600: { perPage: 1 },
        800: { perPage: 2 },
        1200: { perPage: 3 },
      },
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className={`splide ${style.splide}`}
      aria-label="Splide Homepage"
    >
      <div className={`splide__track`}>
        <ul className={`splide__list`}>
          {projects.map((project, index) => (
            <li
              key={index + project}
              className={`splide__slide ${style.slide}`}
            >
              <Slide index={index} project={project} />
            </li>
          ))}
          {projectsVideo.map((project, index) => (
            <li
              key={index + project}
              className={`splide__slide ${style.slide}`}
            >
              <Slide index={index} project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
