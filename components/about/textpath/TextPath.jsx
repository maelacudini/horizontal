import { useEffect, useRef } from "react";
import style from "./text.module.scss";
import { useScroll } from "framer-motion";

export default function TextPath({ ref }) {
  const texts = useRef([]);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      texts.current.forEach((text, i) => {
        text.setAttribute("startOffset", -80 + i * 80 + e * 80 + "%");
      });
    });
  }, []);

  return (
    <section className={style.text}>
      <svg viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          stroke="none"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text>
          {[...Array(2)].map((_, i) => (
            <textPath
              ref={(ref) => (texts.current[i] = ref)}
              key={i}
              href="#curve"
              startOffset={i * 80 + "%"}
            >
              horizontal architecture agency
            </textPath>
          ))}
        </text>
      </svg>
    </section>
  );
}
