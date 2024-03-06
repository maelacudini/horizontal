import { titleanim } from "@/utils/animations";
import style from "./title.module.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Title({ phrase, justify, col }) {
  const words = phrase.split(" ");
  const body = useRef(null);
  const isInView = useInView(body, { once: false, margin: "10%" });

  return (
    <div ref={body} className={style.title} style={{ justifyContent: justify }}>
      {words.map((word, index) => (
        <span key={index} className={style.wordcont}>
          <motion.h1
            variants={titleanim}
            initial="initial"
            animate={isInView ? "animate" : ""}
            custom={index + 1}
            style={{ color: col ? col : "black" }}
            className={`${style.word}`}
          >
            {word}
          </motion.h1>
        </span>
      ))}
    </div>
  );
}
