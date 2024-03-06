import { team } from "@/utils/data";
import style from "./info.module.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toggleDescTeam } from "@/utils/animations";
import CursorContainer from "@/components/cursorContainer/CursorContainer";

export default function Info() {
  const [persona, setPersona] = useState(0);

  return (
    <section className={style.info}>
      <div className={style.main}>
        <div className={style.side}>
          <h4 className="">Index</h4>
          <div className={style.links}>
            {team.map((person, index) => (
              <CursorContainer key={index}>
                <p
                  className={index === persona ? "gray" : ""}
                  onClick={() => setPersona(index)}
                >
                  00{index} / {person.name}
                </p>
              </CursorContainer>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            variants={toggleDescTeam}
            initial="initial"
            animate="animate"
            exit="exit"
            key={team[persona].name}
            className={style.desc}
          >
            <p className="h4">{team[persona].description}</p>

            <div className={style.details}>
              <p>Name</p>
              <p>{team[persona].name}</p>
            </div>

            <div className={style.details}>
              <p>Role</p>
              <p>{team[persona].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
