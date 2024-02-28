import { useEffect, useState } from "react";
import "@splidejs/splide/css/core";
import Splide from "@splidejs/splide";
import style from "./main.module.scss";
import { projects, projectsVideo } from "@/utils/data";
import Slide from "../slide/Slide";

export default function Main() {
  const [mobile, setMobile] = useState(false);
  const width = window.innerWidth;

  useEffect(() => {
    if (width < 600) {
      setMobile(true);
      console.log(mobile);
    }

    console.log("splide");

    var splide = new Splide(".splide", {
      direction: mobile ? "ttb" : "rtl",
      height: "calc(100svh - 109px)",
      wheel: true,
      arrows: false,
      pagination: false,
      speed: 1000,
      gap: "1rem",
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, [width]);

  return (
    <section
      id="home"
      className={`splide ${style.splide}`}
      aria-label="Splide Homepage"
    >
      <div className={`splide__track`}>
        <div className={`splide__list`}>
          {projects.map((project, index) => (
            <div
              key={index + project}
              className={`splide__slide ${style.slide}`}
            >
              <Slide mobile={mobile} index={index} project={project} />
            </div>
          ))}
          {projectsVideo.map((project, index) => (
            <div
              key={index + project}
              className={`splide__slide ${style.slide}`}
            >
              <Slide mobile={mobile} index={index} project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
