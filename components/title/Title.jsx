import { titleanim } from "@/utils/animations";
import style from "./title.module.scss";
import { motion } from "framer-motion";

export default function Title({ phrase, justify, col }) {
  const words = phrase.split(" ");

  return (
    <div className={style.title} style={{ justifyContent: justify }}>
      {words.map((word, index) => (
        <span key={index} className={style.wordcont}>
          <motion.h1
            variants={titleanim}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            custom={index + 1}
            style={{ color: col ? col : "black" }}
            className={`${style.word}`}
          >
            {word}&nbsp;
          </motion.h1>
        </span>
      ))}
    </div>
  );
}
