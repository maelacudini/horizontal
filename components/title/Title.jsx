import { titleanim } from "@/utils/animations";
import style from "./title.module.scss";
import { motion } from "framer-motion";

export default function Title({ phrase, cl }) {
  const words = phrase.split(" ");

  return (
    <div className={style.title}>
      {words.map((word, index) => (
        <span key={index} className={style.wordcont}>
          <motion.p
            variants={titleanim}
            initial="initial"
            whileInView="animate"
            custom={index + 1}
            className={`${cl} ${style.word}`}
          >
            {word}
          </motion.p>
        </span>
      ))}
    </div>
  );
}
