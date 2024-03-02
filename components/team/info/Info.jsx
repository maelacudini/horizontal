import { team } from "@/utils/data";
import style from "./info.module.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toggleDescTeam } from "@/utils/animations";
import Image from "next/image";

export default function Info() {
  const [persona, setPersona] = useState(0);

  return (
    <section className={style.info}>
      <div className={style.main}>
        <div className={style.side}>
          <h4 className="white">Index</h4>
          <div className={style.links}>
            {team.map((person, index) => (
              <p
                key={index}
                className={index === persona ? "white" : "gray"}
                onClick={() => setPersona(index)}
              >
                00{index} / {person.name}
              </p>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            variants={toggleDescTeam}
            initial="initial"
            animate="animate"
            exit="exit"
            key={`key-${team[persona].name}`}
            className={style.desc}
          >
            <p className="h4 white">{team[persona].description}</p>
            <Image
              alt="sign"
              src={team[persona].sign}
              width={500}
              height={100}
              className={style.sign}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
