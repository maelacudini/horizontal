import style from "./history.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

export default function History({ paragraph }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  const words = paragraph.split(" ");
  return (
    <section className={style.history}>
      <p ref={container} className={`h2 bold ${style.paragraph}`}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>

      <div className={style.info}>
        <p>
          From humble beginnings to becoming a beacon of architectural prowess,
          our agency has continually pushed the boundaries of creativity. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Saepe, asperiores.
          Fuga magni nam mollitia aspernatur, explicabo veniam obcaecati
          necessitatibus, tenetur voluptatibus, architecto exercitationem sint
          impedit? Quod debitis non dolore incidunt!
        </p>
        <p>
          From humble beginnings to becoming a beacon of architectural prowess,
          our agency has continually pushed the boundaries of creativity. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </section>
  );
}

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className={style.word}>
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span className={style.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
